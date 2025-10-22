"use strict";

/**
 * city-name controller
 */
// @ts-ignore
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::city-name.city-name", ({ strapi }) => ({
	async findOne(ctx) {
		const { id } = ctx.params;

		// sanitizeQuery to remove any query params that are invalid or the user does not have access to
		// It is strongly recommended to use sanitizeQuery even if validateQuery is used
		const entity = await strapi.db.query("api::city-name.city-name").findOne({
			where: { slug: id },
			populate: {
                city_image:true,
				country: true,
				companies: {
					populate: {
						logo: true,
						city_names: true,
						games: {
                            populate: {
                                image: true,
                            },
                        },
					},
				},
			},
		});
		const sanitizedResults = await this.sanitizeOutput(entity, ctx);

		return this.transformResponse(sanitizedResults);
	},
}));
