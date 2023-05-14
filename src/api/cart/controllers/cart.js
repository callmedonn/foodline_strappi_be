"use strict";

/**
 * cart controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::cart.cart", ({ Strapi }) => ({
  async createMe(ctx) {
    try {
      const result = await strapi.entityService.create("api::cart.cart", {
        data: {
          email: ctx.request.body.email,
          product: ctx.request.body.product,
        },
      });
      return result;
    } catch (err) {
      return ctx.badRequest(500, [{ messages: [{ id: err.message }] }]);
    }
  },
}));
