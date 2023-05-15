"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ Strapi }) => ({
  async createMe(ctx) {
    try {
      // // fetching data
      const entries = await strapi.entityService.findMany("api::cart.cart", {
        query: {
          email: "sample@gmail.com",
        },
        populate: {
          product: {
            fields: ["name"],
            populate: {
              tags: {
                fields: ["price"],
              },
            },
          },
        },
      });
      let total = 0;

      for (const item of entries) {
        total += item.product.tags[0].price;
      }

      const status = 1; //Pending status
      const result = await strapi.entityService.create("api::order.order", {
        data: {
          email: ctx.request.body.email,
          status_order: status,
          total,
        },
      });
      return result;
    } catch (err) {
      return ctx.badRequest(500, [{ messages: [{ id: err.message }] }]);
    }
  },
  async getMe(ctx) {
    try {
      const entries = await strapi.entityService.findMany("api::order.order", {
        populate: {
          status_order: {
            fields: ["name"],
          },
        },
      });

      return entries[entries.length - 1];
    } catch (err) {
      return ctx.badRequest(500, [{ messages: [{ id: err.message }] }]);
    }
  },
  async deleteMany(ctx) {
    let orderItems;
    try {
      orderItems = await strapi
        .query("api::cart.cart")
        .findMany({ where: { email: ctx.request.body.email } });

      for (const order of orderItems) {
        await strapi
          .query("api::cart.cart")
          .delete({ where: { id: order.id } });
      }

      return orderItems;
    } catch (e) {
      console.error(e);
    }
  },
}));
