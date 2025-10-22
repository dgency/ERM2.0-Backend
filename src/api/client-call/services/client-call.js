'use strict';

/**
 * client-call service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-call.client-call');
