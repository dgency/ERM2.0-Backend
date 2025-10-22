'use strict';

/**
 * city-name service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::city-name.city-name');
