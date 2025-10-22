'use strict';

/**
 * booking-max service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::booking-max.booking-max');
