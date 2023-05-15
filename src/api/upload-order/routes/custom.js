module.exports = {
  routes: [
    {
      method: "POST",
      path: "/upload-order/create",
      handler: "upload-order.createMe",
      config: {},
    },
  ],
};
