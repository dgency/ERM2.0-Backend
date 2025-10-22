"use strict";

const { pop } = require("../../../../config/middlewares");

/**
 * case-study controller
 */
// @ts-ignore
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::case-study.case-study", ({ strapi }) => ({
	async findOne(ctx) {
		const { id } = ctx.params;

		// Using Entity Service API for better populate + fields support
		const entity = await strapi.entityService.findMany("api::case-study.case-study", {
			filters: { slug: id },
			populate: {
				main_image: true,
				service_rendered: true,
				client_feedback: {
					populate: {
						image: true,
					},
				},
				other_casestudy: {
					populate: {
						case_studies: {
							fields: ["headline", "slug"], // ✅ only include these fields
							populate: {
								main_image: {
									fields: ["url"], // ✅ only include url
								},
							},
						},
					},
				},
				seo: {
					populate: {
						metaImage: true,
						openGraph: {
							populate: {
								ogImage: true,
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
