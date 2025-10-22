'use strict';

/**
 * all-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-blog.all-blog');
