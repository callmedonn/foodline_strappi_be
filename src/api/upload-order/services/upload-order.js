'use strict';

/**
 * upload-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::upload-order.upload-order');
