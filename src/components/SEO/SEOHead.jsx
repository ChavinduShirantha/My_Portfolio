import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG, getPageSEO } from '../../utils/seoConfig.js';

const SEOHead = ({
  page = 'home',
  title,
  description,
  keywords,
  canonical,
  image,
  type = 'website',
  structuredData
}) => {
  const pageSEO = getPageSEO(page);

  // Use custom values or fall back to page defaults
  const seoTitle = title || pageSEO.title;
  const seoDescription = description || pageSEO.description;
  const seoKeywords = keywords || pageSEO.keywords;
  const seoCanonical = canonical || pageSEO.canonical;
  const seoImage = image || `${SEO_CONFIG.site.url}${SEO_CONFIG.images.ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={SEO_CONFIG.site.author} />
      <meta name="robots" content={SEO_CONFIG.technical.robots} />
      <meta name="language" content={SEO_CONFIG.technical.language} />
      <meta name="viewport" content={SEO_CONFIG.technical.viewport} />
      <meta charSet={SEO_CONFIG.technical.charset} />

      {/* Canonical URL */}
      <link rel="canonical" href={seoCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:site_name" content={SEO_CONFIG.site.name} />
      <meta property="og:locale" content={SEO_CONFIG.technical.language} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_CONFIG.social.twitter} />
      <meta name="twitter:creator" content={SEO_CONFIG.social.twitter} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Favicons and Icons */}
      <link rel="icon" href={SEO_CONFIG.images.favicon} />
      <link rel="apple-touch-icon" href={SEO_CONFIG.images.appleTouchIcon} />
      <meta name="theme-color" content={SEO_CONFIG.technical.themeColor} />
      <meta name="msapplication-TileColor" content={SEO_CONFIG.technical.msapplicationTileColor} />

      {/* Site Verification */}
      {SEO_CONFIG.technical.googleSiteVerification && (
        <meta name="google-site-verification" content={SEO_CONFIG.technical.googleSiteVerification} />
      )}
      {SEO_CONFIG.technical.bingSiteVerification && (
        <meta name="msvalidate.01" content={SEO_CONFIG.technical.bingSiteVerification} />
      )}
      {SEO_CONFIG.technical.facebookDomainVerification && (
        <meta name="facebook-domain-verification" content={SEO_CONFIG.technical.facebookDomainVerification} />
      )}

      {/* Additional Meta Tags for Better SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;