<template>
  <!-- Payment Component-->
  <div class="payment">
    <div id="paypal-button-container"></div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      item: {},
      packageselect: "",
    };
  },
  // mounted
  async mounted() {
    await this.mountpaypalbutton();
  },
  // methods
  methods: {
    // Mount paypal button
    mountpaypalbutton() {
      // eslint-disable-next-line no-undef
      paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "blue",
            layout: "vertical",
            label: "paypal",
            size: "medium",
          },
          options: {
            "client-id": "/*...*/",
            vault: true,
          },
          createSubscription: async function (data, actions) {
            console.log(data, actions);
            return actions.subscription.create({
              plan_id: "P-XXXXXXXXXXXXXXX",
              amount: 100,
            });
          },
          // eslint-disable-next-line no-unused-vars
          onApprove: async function (data, actions) {
            console.log(data, actions);
          },
        })
        .render("#paypal-button-container");
    },
  },
};
</script>

<style scooped lang="css">
@media only screen and (max-width: 600px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 300px;
    border-radius: 5px;
  }
}
@media only screen and (min-width: 600px) and (max-width: 960px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 350px;
    border-radius: 5px;
  }
}
@media only screen and (min-width: 960px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 400px;
    border-radius: 5px;
  }
}
.paypal-title {
  -webkit-font-smoothing: antialiased;
  color: black;
  text-transform: uppercase;
  font-size: 1.1em;
  margin-bottom: 5px;
}
.paypal-text {
  -webkit-font-smoothing: antialiased;
  color: black;
  font-size: 1.2em;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>