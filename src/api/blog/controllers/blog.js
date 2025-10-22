'use strict';

/**
 * blog controller
 */
// @ts-ignore
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
	async findOne(ctx) {
		const { id } = ctx.params;

		// sanitizeQuery to remove any query params that are invalid or the user does not have access to
		// It is strongly recommended to use sanitizeQuery even if validateQuery is used
		const entity = await strapi.db.query("api::blog.blog").findOne({
			where: { slug: id },
			populate: {
                main_image: true,
				other_blogs:true,
                blog_body:{
                    populate:{
                        banner: true,
                    }
                },
			
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
