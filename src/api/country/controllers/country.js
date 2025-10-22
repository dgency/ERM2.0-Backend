"use strict";

/**
 * country controller
 */
// @ts-ignore
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::country.country", ({ strapi }) => ({
	async findOne(ctx) {
		const { id } = ctx.params;

		// sanitizeQuery to remove any query params that are invalid or the user does not have access to
		// It is strongly recommended to use sanitizeQuery even if validateQuery is used
		const entity = await strapi.db.query("api::country.country").findOne({
			populate: {
				city_names: true,
			},
		});
		const sanitizedResults = await this.sanitizeOutput(entity, ctx);

		return this.transformResponse(sanitizedResults);
	},
}));


// /api/countries?populate[city_names][populate][0]=city_image&populate[city_names][populate][1]=companies&populate[city_names][populate][2]=companies.games