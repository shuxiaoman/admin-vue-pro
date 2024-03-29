import { Request, Response } from "express";
import { ErrorCodeMessage } from "../../src/utils/code";
import { CustomResponseType } from "../../src/utils/request";
import {
  createAccessToken,
  createOAuthToken,
  PayloadType
} from "../utils/intercept";
import jwt from "jsonwebtoken";
import { config } from "../utils/config";
import { LoginReq } from "../../src/services/oauth";
import Mock from "mockjs"; //引入mockjs

export default {
  "POST /oauth/refresh_token": (req: Request, res: Response) => {
    const errJSON: Required<CustomResponseType> = {
      success: false,
      error: {
        code: 10010,
        msg: ErrorCodeMessage[10010]
      },
      data: {}
    };
    // 参数没有refreshToken，返回10010码值
    const refreshToken = req.body?.refreshToken as string;
    if (!refreshToken) {
      res.json(errJSON);
      return;
    }

    jwt.verify(refreshToken, config.RF_SECRET, (err, refreshPayload) => {
      if (err) {
        // refreshToken时间过期
        if (err.name === "TokenExpiredError") {
          res.json(errJSON);
        } else {
          errJSON.error.code = 10020;
          errJSON.error.msg = ErrorCodeMessage[10020];
          res.json(errJSON);
        }
      }
      // refreshToken有效
      if (refreshPayload) {
        let accessToken = req.body?.accessToken as string;
        jwt.verify(accessToken, config.AC_SECRET, (_, accessPayload) => {
          // accessToken过期，重新生成。payload从refreshToken里提取
          if (!accessPayload) {
            accessToken = createAccessToken({
              id: (refreshPayload as PayloadType).id,
              name: (refreshPayload as PayloadType).name
            });
          }
        });
        res.json({
          success: true,
          data: {
            accessToken
          }
        });
      }
    });
  },
  "POST /oauth/login": (req: Request, res: Response) => {
    const { username, password }: LoginReq = req.body;
    let id = 0;
    let name = "";
    if (username === "admin" && password === "123") {
      id = 1;
      name = "管理员";
    }
    if (username === "user" && password === "123") {
      id = 2;
      name = "用户";
    }
    if (!id) {
      res.json({
        success: false,
        error: {
          msg: "用户名或密码错误"
        }
      });
      return;
    }

    const tokenBbj = createOAuthToken({ id, name });
    res.json({ success: true, data: { ...tokenBbj } });
  },
  "POST /oauth/logout": {
    success: true
  },
  "POST /api/test": (req: Request, res: Response) => {
    // console.log(req.body.page.pageSize);

    const total = 234;
    const r1 = {
      code: "000000",
      data: {
        total
      }
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    r1.data[`list|${total}`] = [
      {
        "id|+1": 1,
        "metaTitle|1": ["all", "open", "closed", "processing"],
        "metaDesc|1": [true, false]
      }
    ];
    const r2 = Mock.mock(r1);
    const start = req.body.page.pageSize * (req.body.page.current - 1);
    const end = req.body.page.pageSize * req.body.page.current;
    r2.data.list = r2.data.list.slice(start, end);
    // console.log(start, end);
    setTimeout(() => {
      res.json(r2);
    }, 1000);
  }
};
