module.exports = {
  routes: [
    {
      method: "POST",
      path: "/cart/create",
      handler: "cart.createMe",
      config: {},
    },
  ],
};
