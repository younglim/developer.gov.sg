import Vue from "vue";
import AllSessionsPreviewApp from "./AllSessionsPreviewApp.vue";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);

new Vue({
  el: "#app-all-sessions-preview",
  render: h => h(AllSessionsPreviewApp),
});
