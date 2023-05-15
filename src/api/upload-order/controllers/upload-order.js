"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::upload-order.upload-order",
  ({ Strapi }) => ({
    async createMe(ctx) {
      try {
        console.log(ctx.is("multipart"));

        if (ctx.is("multipart")) {
          const { data, files } = parseMultipartData(ctx);

          const entry = await strapi.entityService.create(
            "api::upload-order.upload-order",
            {
              // image: { ...data },
              image: { ...files },
            }
          );

          return entry;
        }
      } catch (err) {
        return ctx.badRequest(500, [{ messages: [{ id: err.message }] }]);
      }
    },
  })
);
