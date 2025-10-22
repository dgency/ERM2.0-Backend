import type { Schema, Struct } from '@strapi/strapi';

export interface BlogAllBlogHero extends Struct.ComponentSchema {
  collectionName: 'components_blog_all_blog_heroes';
  info: {
    displayName: 'All Blog Hero';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text_component: Schema.Attribute.Component<'shared.hero-text', false>;
  };
}

export interface BlogBlogBanner extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_banners';
  info: {
    displayName: 'Blog Banner';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogBlogBody extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_bodies';
  info: {
    displayName: 'Blog Body';
  };
  attributes: {
    banner: Schema.Attribute.Component<'blog.blog-banner', false>;
    blog_description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3OTE5MzU5OTksImp0aSI6IjIxOWZhNjNlLTgwYjEtNDgwMS1iODYzLWUwZGU4Mjg4NDAxYyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJyZW1vdmVGZWF0dXJlcyI6WyJQQiIsIlJGIiwiU0NIIiwiVENQIiwiVEwiLCJUQ1IiLCJJUiIsIlNVQSIsIkI2NEEiLCJMUCIsIkhFIiwiUkVEIiwiUEZPIiwiV0MiLCJGQVIiLCJCS00iLCJGUEgiLCJNUkUiXSwidmMiOiJjMTkzNzhkOCJ9.OW8RY7iQlVQ2fPDRjOVl1Nw9xFK-c9NdR1W-ynYOWLPwEFfClTyTqUPVb_aYXJMTnZTbleid7KY3JVzR-v0BJA';
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface BlogOtherBlogs extends Struct.ComponentSchema {
  collectionName: 'components_blog_other_blogs';
  info: {
    displayName: 'Other Blogs';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    Eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BookingMaxGrowthEngine extends Struct.ComponentSchema {
  collectionName: 'components_booking_max_growth_engines';
  info: {
    displayName: 'Growth Engine';
  };
  attributes: {
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BookingMaxHero extends Struct.ComponentSchema {
  collectionName: 'components_booking_max_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    but: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    Eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String;
    statistics: Schema.Attribute.Component<'home.statistics', true>;
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BookingMaxLetterComponent extends Struct.ComponentSchema {
  collectionName: 'components_booking_max_letter_components';
  info: {
    displayName: 'Letter Component';
  };
  attributes: {
    letter_body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3OTE5MzU5OTksImp0aSI6IjIxOWZhNjNlLTgwYjEtNDgwMS1iODYzLWUwZGU4Mjg4NDAxYyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJyZW1vdmVGZWF0dXJlcyI6WyJQQiIsIlJGIiwiU0NIIiwiVENQIiwiVEwiLCJUQ1IiLCJJUiIsIlNVQSIsIkI2NEEiLCJMUCIsIkhFIiwiUkVEIiwiUEZPIiwiV0MiLCJGQVIiLCJCS00iLCJGUEgiLCJNUkUiXSwidmMiOiJjMTkzNzhkOCJ9.OW8RY7iQlVQ2fPDRjOVl1Nw9xFK-c9NdR1W-ynYOWLPwEFfClTyTqUPVb_aYXJMTnZTbleid7KY3JVzR-v0BJA';
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface BookingMaxMarketingStrategy extends Struct.ComponentSchema {
  collectionName: 'components_booking_max_marketing_strategies';
  info: {
    displayName: 'Marketing Strategy';
  };
  attributes: {
    Eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    strategy_card: Schema.Attribute.Component<
      'booking-max.strategy-card',
      true
    >;
  };
}

export interface BookingMaxStrategyCard extends Struct.ComponentSchema {
  collectionName: 'components_booking_max_strategy_cards';
  info: {
    displayName: 'Strategy Card';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    tags: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareerBenefits extends Struct.ComponentSchema {
  collectionName: 'components_career_benefits_s';
  info: {
    displayName: 'Benefits ';
  };
  attributes: {
    benefits_card: Schema.Attribute.Component<'career.benefits-card', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    Eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareerBenefitsCard extends Struct.ComponentSchema {
  collectionName: 'components_career_benefits_cards';
  info: {
    displayName: 'Benefits Card';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareerCurrentOpenings extends Struct.ComponentSchema {
  collectionName: 'components_career_current_openings';
  info: {
    displayName: 'Current Openings';
  };
  attributes: {
    Eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    openings_card: Schema.Attribute.Component<'career.openings-card', true>;
  };
}

export interface CareerHero extends Struct.ComponentSchema {
  collectionName: 'components_career_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    text_component: Schema.Attribute.Component<'shared.hero-text', false>;
  };
}

export interface CareerOpeningsCard extends Struct.ComponentSchema {
  collectionName: 'components_career_openings_cards';
  info: {
    displayName: 'Openings Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareerOpportunities extends Struct.ComponentSchema {
  collectionName: 'components_career_opportunities';
  info: {
    displayName: 'Opportunities';
  };
  attributes: {
    Eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    opportunity_card: Schema.Attribute.Component<
      'career.opportunity-card',
      true
    >;
  };
}

export interface CareerOpportunityCard extends Struct.ComponentSchema {
  collectionName: 'components_career_opportunity_cards';
  info: {
    displayName: 'Opportunity Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CaseStudyClientFeedback extends Struct.ComponentSchema {
  collectionName: 'components_case_study_client_feedbacks';
  info: {
    displayName: 'Client Feedback';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    designation: Schema.Attribute.String & Schema.Attribute.Required;
    feedback: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3OTE5MzU5OTksImp0aSI6IjIxOWZhNjNlLTgwYjEtNDgwMS1iODYzLWUwZGU4Mjg4NDAxYyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJyZW1vdmVGZWF0dXJlcyI6WyJQQiIsIlJGIiwiU0NIIiwiVENQIiwiVEwiLCJUQ1IiLCJJUiIsIlNVQSIsIkI2NEEiLCJMUCIsIkhFIiwiUkVEIiwiUEZPIiwiV0MiLCJGQVIiLCJCS00iLCJGUEgiLCJNUkUiXSwidmMiOiJjMTkzNzhkOCJ9.OW8RY7iQlVQ2fPDRjOVl1Nw9xFK-c9NdR1W-ynYOWLPwEFfClTyTqUPVb_aYXJMTnZTbleid7KY3JVzR-v0BJA';
          output: 'HTML';
          preset: 'standard';
        }
      >;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
    video_link: Schema.Attribute.String;
  };
}

export interface CaseStudyOtherCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_case_study_other_case_studies';
  info: {
    displayName: 'Other Case Study';
  };
  attributes: {
    case_studies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    Eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CaseStudyServiceRendered extends Struct.ComponentSchema {
  collectionName: 'components_case_study_service_rendereds';
  info: {
    displayName: 'Service Rendered';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactAdviceCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_advice_cards';
  info: {
    displayName: 'Advice Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactWhatYouGet extends Struct.ComponentSchema {
  collectionName: 'components_contact_what_you_gets';
  info: {
    displayName: 'What You Get';
  };
  attributes: {
    cards: Schema.Attribute.Component<'contact.advice-card', true>;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DirectoryOtherLocation extends Struct.ComponentSchema {
  collectionName: 'components_directory_other_locations';
  info: {
    displayName: 'Other Location';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FreeMarketingCardComponent extends Struct.ComponentSchema {
  collectionName: 'components_free_marketing_card_components';
  info: {
    displayName: 'Card Component';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    elements: Schema.Attribute.Component<'shared.lists', true>;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    short_description: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeBookingMaxComponent extends Struct.ComponentSchema {
  collectionName: 'components_home_booking_max_components';
  info: {
    displayName: 'BookingMax Component';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    long_card: Schema.Attribute.Component<'home.long-card', false>;
    other_card: Schema.Attribute.Component<'home.other-card', true>;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.String;
    Eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    logos: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title_first_line: Schema.Attribute.String & Schema.Attribute.Required;
    title_second_line: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeLongCard extends Struct.ComponentSchema {
  collectionName: 'components_home_long_cards';
  info: {
    displayName: 'Long Card';
  };
  attributes: {
    short_description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeOtherCard extends Struct.ComponentSchema {
  collectionName: 'components_home_other_cards';
  info: {
    displayName: 'Other Card';
  };
  attributes: {
    short_description: Schema.Attribute.String & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePortfolioCard extends Struct.ComponentSchema {
  collectionName: 'components_home_portfolio_cards';
  info: {
    displayName: 'portfolio Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logos_with_alt: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
  };
}

export interface HomePortfolioComponent extends Struct.ComponentSchema {
  collectionName: 'components_home_portfolio_components';
  info: {
    displayName: 'Portfolio Component';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.portfolio-card', true>;
    Eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    logos: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    statistics: Schema.Attribute.Component<'home.statistics', true>;
  };
}

export interface HomeStatistics extends Struct.ComponentSchema {
  collectionName: 'components_home_statistics';
  info: {
    displayName: 'Statistics';
  };
  attributes: {
    short_description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeToolsWeWork extends Struct.ComponentSchema {
  collectionName: 'components_home_tools_we_works';
  info: {
    displayName: 'Tools We Work';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface HomeVideoTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_video_testimonials';
  info: {
    displayName: 'Video Testimonial';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    testimonial_card: Schema.Attribute.Component<
      'home.video-testimonial-card',
      true
    >;
  };
}

export interface HomeVideoTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_home_video_testimonial_cards';
  info: {
    displayName: 'Video Testimonial Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceComparison extends Struct.ComponentSchema {
  collectionName: 'components_service_comparisons';
  info: {
    displayName: 'Comparison';
  };
  attributes: {
    comparison_table: Schema.Attribute.Component<
      'service.comparison-table',
      true
    >;
    section_header: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface ServiceComparisonTable extends Struct.ComponentSchema {
  collectionName: 'components_service_comparison_tables';
  info: {
    displayName: 'Comparison Table';
  };
  attributes: {
    agencies: Schema.Attribute.String & Schema.Attribute.Required;
    erm: Schema.Attribute.String & Schema.Attribute.Required;
    freelancers: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceHero extends Struct.ComponentSchema {
  collectionName: 'components_service_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background_video_url: Schema.Attribute.String & Schema.Attribute.Required;
    button_text: Schema.Attribute.String;
    hero_text: Schema.Attribute.Component<'shared.hero-text', false>;
  };
}

export interface ServiceKeyComponents extends Struct.ComponentSchema {
  collectionName: 'components_service_key_components';
  info: {
    displayName: 'Key Components';
  };
  attributes: {
    key_strategy: Schema.Attribute.Component<'service.key-strategy', true>;
    text_component: Schema.Attribute.Component<'shared.hero-text', false>;
  };
}

export interface ServiceKeyStrategy extends Struct.ComponentSchema {
  collectionName: 'components_service_key_strategies';
  info: {
    displayName: 'Key Strategy';
  };
  attributes: {
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    short_description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video_link: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    Eyebrow_headline: Schema.Attribute.String;
    question_answer: Schema.Attribute.Component<'shared.question-answer', true>;
  };
}

export interface SharedGlobalHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_global_heroes';
  info: {
    displayName: 'Global Hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    button_text: Schema.Attribute.String;
    text_component: Schema.Attribute.Component<'shared.hero-text', false>;
  };
}

export interface SharedHeroText extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_texts';
  info: {
    displayName: 'Hero Text';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLists extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'Lists';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMissionVision extends Struct.ComponentSchema {
  collectionName: 'components_shared_mission_visions';
  info: {
    displayName: 'Mission Vision';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3OTE5MzU5OTksImp0aSI6IjIxOWZhNjNlLTgwYjEtNDgwMS1iODYzLWUwZGU4Mjg4NDAxYyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJyZW1vdmVGZWF0dXJlcyI6WyJQQiIsIlJGIiwiU0NIIiwiVENQIiwiVEwiLCJUQ1IiLCJJUiIsIlNVQSIsIkI2NEEiLCJMUCIsIkhFIiwiUkVEIiwiUEZPIiwiV0MiLCJGQVIiLCJCS00iLCJGUEgiLCJNUkUiXSwidmMiOiJjMTkzNzhkOCJ9.OW8RY7iQlVQ2fPDRjOVl1Nw9xFK-c9NdR1W-ynYOWLPwEFfClTyTqUPVb_aYXJMTnZTbleid7KY3JVzR-v0BJA';
          output: 'HTML';
          preset: 'rich';
        }
      >;
    Eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedNewCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_new_ctas';
  info: {
    displayName: 'New Cta';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedQuestionAnswer extends Struct.ComponentSchema {
  collectionName: 'components_shared_question_answers';
  info: {
    displayName: 'Question Answer';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_headers';
  info: {
    displayName: 'section_header';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedServiceComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_components';
  info: {
    displayName: 'Service Component';
  };
  attributes: {
    eyebrow_headline: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorkPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_work_portfolio_s';
  info: {
    displayName: 'Portfolio ';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image_view: Schema.Attribute.Decimal & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video_urls: Schema.Attribute.Component<'work.video-links', true>;
  };
}

export interface WorkVideoLinks extends Struct.ComponentSchema {
  collectionName: 'components_work_video_links';
  info: {
    displayName: 'Video Links';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.all-blog-hero': BlogAllBlogHero;
      'blog.blog-banner': BlogBlogBanner;
      'blog.blog-body': BlogBlogBody;
      'blog.other-blogs': BlogOtherBlogs;
      'booking-max.growth-engine': BookingMaxGrowthEngine;
      'booking-max.hero': BookingMaxHero;
      'booking-max.letter-component': BookingMaxLetterComponent;
      'booking-max.marketing-strategy': BookingMaxMarketingStrategy;
      'booking-max.strategy-card': BookingMaxStrategyCard;
      'career.benefits': CareerBenefits;
      'career.benefits-card': CareerBenefitsCard;
      'career.current-openings': CareerCurrentOpenings;
      'career.hero': CareerHero;
      'career.openings-card': CareerOpeningsCard;
      'career.opportunities': CareerOpportunities;
      'career.opportunity-card': CareerOpportunityCard;
      'case-study.client-feedback': CaseStudyClientFeedback;
      'case-study.other-case-study': CaseStudyOtherCaseStudy;
      'case-study.service-rendered': CaseStudyServiceRendered;
      'contact.advice-card': ContactAdviceCard;
      'contact.what-you-get': ContactWhatYouGet;
      'directory.other-location': DirectoryOtherLocation;
      'free-marketing.card-component': FreeMarketingCardComponent;
      'home.booking-max-component': HomeBookingMaxComponent;
      'home.hero': HomeHero;
      'home.long-card': HomeLongCard;
      'home.other-card': HomeOtherCard;
      'home.portfolio-card': HomePortfolioCard;
      'home.portfolio-component': HomePortfolioComponent;
      'home.statistics': HomeStatistics;
      'home.tools-we-work': HomeToolsWeWork;
      'home.video-testimonial': HomeVideoTestimonial;
      'home.video-testimonial-card': HomeVideoTestimonialCard;
      'service.comparison': ServiceComparison;
      'service.comparison-table': ServiceComparisonTable;
      'service.hero': ServiceHero;
      'service.key-components': ServiceKeyComponents;
      'service.key-strategy': ServiceKeyStrategy;
      'shared.cta': SharedCta;
      'shared.faq': SharedFaq;
      'shared.global-hero': SharedGlobalHero;
      'shared.hero-text': SharedHeroText;
      'shared.lists': SharedLists;
      'shared.mission-vision': SharedMissionVision;
      'shared.new-cta': SharedNewCta;
      'shared.open-graph': SharedOpenGraph;
      'shared.question-answer': SharedQuestionAnswer;
      'shared.section-header': SharedSectionHeader;
      'shared.seo': SharedSeo;
      'shared.service-component': SharedServiceComponent;
      'work.portfolio': WorkPortfolio;
      'work.video-links': WorkVideoLinks;
    }
  }
}
