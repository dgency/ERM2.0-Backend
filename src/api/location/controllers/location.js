'use strict';

/**
 * location controller
 */
// @ts-ignore
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::location.location", ({ strapi }) => ({
	async findOne(ctx) {
		const { id } = ctx.params;

		// sanitizeQuery to remove any query params that are invalid or the user does not have access to
		// It is strongly recommended to use sanitizeQuery even if validateQuery is used
		const entity = await strapi.db.query("api::location.location").findOne({
			where: { slug: id },
			populate: {
               
                hero:{
                    populate:{
                        text_component: true,
                        background_image: true,
                    }
                },
                bookingmax:{
                    populate:{
                        long_card: true,
                        other_card: true,
                    }
                },
              services: true,
               video_testimonial:{
                    populate:{
                        testimonial_card: true,   
                    }
                },
               cta:{
                    populate:{
                        background_image: true, 
                    }
                },
               comparison:{
                    populate:{
                        section_header: true, 
                        comparison_table: true,
                    }
                },
               tools:{
                    populate:{
                        image: true, 
                    }
                },
               faq:{
                    populate:{
                        question_answer: true, 
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
