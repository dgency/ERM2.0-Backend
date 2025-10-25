"use strict";

/**
 * service controller
 */
// @ts-ignore
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::service.service", ({ strapi }) => ({
	async findOne(ctx) {
		const { id } = ctx.params;

		// sanitizeQuery to remove any query params that are invalid or the user does not have access to
		// It is strongly recommended to use sanitizeQuery even if validateQuery is used
		const entity = await strapi.db.query("api::service.service").findOne({
			where: { slug: id },
			populate: {
				hero: {
					populate: {
						hero_text: true,
					},
				},
				key_components: {
					populate: {
						text_component: true,
						key_strategy: true,
					},
				},
				comparison: {
					populate: {
						section_header: true,
						comparison_table: true,
					},
				},
				cta:{
                    populate:{
                        background_image: true, 
                    }
                },
				mission_vision_1: {
					populate: {
						image: true,
					},
				},
				mission_vision_2: {
					populate: {
						image: true,
					},
				},
				service_section: true,
				faq: {
					populate: {
						question_answer: true,
					},
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
