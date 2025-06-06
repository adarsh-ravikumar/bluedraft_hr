import type { Schema, Struct } from '@strapi/strapi';

export interface ContentAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_content_about_uses';
  info: {
    displayName: 'about_us';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
  };
}

export interface ContentTextWithImage extends Struct.ComponentSchema {
  collectionName: 'components_content_text_with_images';
  info: {
    displayName: 'text_with_image';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alignment: Schema.Attribute.Enumeration<['left', 'right']>;
    text: Schema.Attribute.Text;
  };
}

export interface SectionsOurClients extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_clients';
  info: {
    displayName: 'our_clients';
    icon: 'briefcase';
  };
  attributes: {
    companies: Schema.Attribute.Relation<'oneToMany', 'api::company.company'>;
  };
}

export interface SectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'services';
    icon: 'cog';
  };
  attributes: {
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface SectionsTrendingSkills extends Struct.ComponentSchema {
  collectionName: 'components_sections_trending_skills';
  info: {
    displayName: 'trending_skills';
  };
  attributes: {
    description: Schema.Attribute.Text;
    skills: Schema.Attribute.Relation<'oneToMany', 'api::skill.skill'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.about-us': ContentAboutUs;
      'content.text-with-image': ContentTextWithImage;
      'sections.our-clients': SectionsOurClients;
      'sections.services': SectionsServices;
      'sections.trending-skills': SectionsTrendingSkills;
    }
  }
}
