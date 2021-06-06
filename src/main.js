import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueClipboard from "vue-clipboard2";

/* eslint-disabled */

Vue.use(VueClipboard);
Vue.config.productionTip = false;

const PayPalButton = window.paypal.Buttons.driver("vue", Vue);

Vue.component("paypal", {
  template: `
      <paypal-buttons [props]="{
          createOrder: createOrder,
          onApprove: onApprove
      }"></paypal-buttons>
    `,
  components: {
    "paypal-buttons": PayPalButton,
  },

  computed: {
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "0.01",
            },
          },
        ],
      });
    },
    onAuthorize: function(data, actions) {
      return actions.order.capture();
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
