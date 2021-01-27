// 参照抖音开放平台状态码：https://open.douyin.com/platform/doc/6850392252464809992
export const ErrorCodeMessage: { [key: number]: string } = {
  // 通用
  0: "成功",
  1: "位置错误",
  2100004: "系统繁忙，此时请开发者稍候再试",
  2100005: "参数不合法",
  2100007: "无权限操作",
  2100009: "用户被禁封使用该操作",
  2190001: "quota已用完",
  2190004: "应用未获得该能力, 请去申请",
  2190015: "请求参数access_token openid不匹配",
  //   Oauth2
  10002: "参数错误",
  10003: "client_key 错误",
  10004: "应用权限不足，请申请对应的scope权限",
  10005: "缺少参数",
  10006: '非法重定向URI, 需要与APP配置中的"授权回调域"一致。',
  10007: "授权码过期",
  10008: "access_token 无效或过期",
  10010: "refresh_token 无效或过期",
  10011: "应用包名与配置不一致",
  10012: "应用正在审核中，无法进行授权",
  10013: "clientkey 或者clientsecret 错误",
  10014: "授权的clientkey与获取accesstoken时传递的client_key不一致",
  10015: "应用类型错误，如将APP应用的client_key 用于 PC 应用",
  10017: "安卓应用签名与配置不一致，请检查签名信息",
  10020: "更新新refresh_token次数超出限制",
  2190002: "access_token无效",
  2190003: "用户未授权该api",
  2190008: "access_token过期,请刷新或重新授权"
};

/**
 * 默认http状态码
 */
export const HttpCodeMessage: { [key: number]: string } = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};
