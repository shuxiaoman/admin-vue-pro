import { defineComponent, onMounted, ref /* watch */ } from "vue";
import { getColumnData } from "@/services/dashboard/workspace";
import { ColumnDataItem, LineDataItem } from "./data";
import { PageContent } from "@/components/Page";
import {
  Card
  // Input
  //  InputNumber
} from "ant-design-vue";
import ColumnChart from "@/components/Charts/Column";
// import moment from "moment";

const reducerOneDay = (list: ColumnDataItem[]) => {
  const obj: { [key: string]: number } = {};
  list.forEach(i => {
    if (obj[i.date] >= 0) {
      obj[i.date] = obj[i.date] + i.value;
    } else {
      obj[i.date] = i.value;
    }
  });

  return Object.entries(obj).map(([key, value]) => ({
    date: key,
    count: value
  }));
};

const reducerAll = (list: ColumnDataItem[]) =>
  list.reduce((i, j) => i + j.value, 0);

export default defineComponent({
  setup() {
    const loading = ref(true);
    const data = ref<{ column: ColumnDataItem[]; line: LineDataItem[] }>({
      column: [],
      line: []
    });

    // const password = ref("");

    // const statisticData = ref<ColumnDataItem[]>([]);

    const loadData = async () => {
      const columnData = await getColumnData();
      data.value.column.splice(0, columnData.length, ...columnData);
      data.value.line = reducerOneDay(data.value.column);
      loading.value = false;
    };

    onMounted(() => {
      loadData();
      // loading.value = false;
    });

    // watch(password, v => {
    //   if (btoa(v) === "MzMz") {
    //     loadData();
    //   }
    // });

    return () => (
      <PageContent>
        {/* <Input v-model={[password.value, "value"]} /> */}
        <Card
          title={`总计营收：${reducerAll([...data.value.column])}`}
          style={{ "margin-bottom": "24px" }}
          loading={loading.value}
          bordered={false}
          body-style={{ padding: 0 }}
        >
          <div style="min-height: 400px;margin:12px 24px">
            <ColumnChart data={data.value} />
          </div>
        </Card>
      </PageContent>
    );
  }
});
