import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '../../utils/seoConfig.js';

const StructuredData = ({ type = 'person', customData = {} }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'person':
        return {
          ...SEO_CONFIG.structuredData.person,
          ...customData
        };

      case 'website':
        return {
          ...SEO_CONFIG.structuredData.website,
          ...customData
        };

      case 'organization':
        return {
          ...SEO_CONFIG.structuredData.organization,
          ...customData
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: customData.items || []
        };

      case 'portfolio':
        return {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: 'Portfolio',
          author: {
            '@type': 'Person',
            name: SEO_CONFIG.site.author
          },
          description: SEO_CONFIG.site.description,
          url: SEO_CONFIG.site.url,
          ...customData
        };

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: customData.name || 'Web Development Service',
          description: customData.description || 'Professional web development and design services',
          provider: {
            '@type': 'Person',
            name: SEO_CONFIG.site.author
          },
          areaServed: customData.areaServed || 'Worldwide',
          serviceType: customData.serviceType || 'Web Development',
          ...customData
        };

      case 'project':
        return {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: customData.name || 'Web Application',
          description: customData.description || 'Custom web application',
          author: {
            '@type': 'Person',
            name: SEO_CONFIG.site.author
          },
          url: customData.url || SEO_CONFIG.site.url,
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web Browser',
          ...customData
        };

      default:
        return customData;
    }
  };

  const structuredData = getStructuredData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// Pre-configured structured data components
export const PersonStructuredData = () => (
  <StructuredData type="person" />
);

export const WebsiteStructuredData = () => (
  <StructuredData type="website" />
);

export const OrganizationStructuredData = () => (
  <StructuredData type="organization" />
);

export const PortfolioStructuredData = () => (
  <StructuredData type="portfolio" />
);

export default StructuredData;