import { defineComponent } from "@vue/runtime-core";
import { Layout } from "ant-design-vue";
import MenuList from "./MenuList";
import Navigation from "./Navigation.vue";
// import Content from "./Content";
import Content from "./Content/index.vue";

export default defineComponent({
  setup() {
    return () => (
      <Layout class="av-basicLayout">
        {/* 菜单栏 */}
        <MenuList />
        <Layout>
          {/* 导航栏 */}
          <Navigation />
          {/* 内容页 */}
          <Content />
          {/* 页脚 */}
          <Layout.Footer />
        </Layout>
      </Layout>
    );
  }
});
