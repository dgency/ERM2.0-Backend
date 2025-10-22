'use strict';

/**
 * news-feed controller
 */
// @ts-ignore
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::news-feed.news-feed", ({ strapi }) => ({
	async findOne(ctx) {
		const { id } = ctx.params;

		// sanitizeQuery to remove any query params that are invalid or the user does not have access to
		// It is strongly recommended to use sanitizeQuery even if validateQuery is used
		const entity = await strapi.db.query("api::news-feed.news-feed").findOne({
			where: { slug: id },
			populate: {
                
             image: true,
			
				seo: {
					populate: {
						metaImage: true,
                        openGraph:{
                            populate: {
                                ogImage: true,
                            },
                        }
					},
				},
			},
		});
		const sanitizedResults = await this.sanitizeOutput(entity, ctx);

		return this.transformResponse(sanitizedResults);
	},
}));
