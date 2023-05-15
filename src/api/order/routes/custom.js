module.exports = {
  routes: [
    {
      method: "POST",
      path: "/order/create",
      handler: "order.createMe",
      config: {},
    },
    {
      method: "GET",
      path: "/order/getMe",
      handler: "order.getMe",
      config: {},
    },
  ],
};
