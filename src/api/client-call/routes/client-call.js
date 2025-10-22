'use strict';

/**
 * client-call router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-call.client-call');
