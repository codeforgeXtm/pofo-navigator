import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: "summary" | "summary_large_image";
  canonicalUrl?: string;
}

const Seo = ({
  title = "Babafemi - Creator, Strategist and Founder",
  description = "Building things that inspire and move people. Portfolio of Babafemi, a creative strategist and founder.",
  keywords = "babafemi, creator, strategist, founder, portfolio, web development, design",
  author = "Babafemi",
  ogImage = "/og-image.jpg",
  ogUrl = "https://www.justbabafemi.com",
  twitterCard = "summary_large_image",
  canonicalUrl,
}: SEOProps) => {
  const siteUrl = "https://www.justbabafemi.com"; 
  const fullTitle = title.includes("Babafemi") ? title : `${title} | Babafemi`;
  const fullOgUrl = ogUrl || siteUrl;
  const fullCanonicalUrl = canonicalUrl || fullOgUrl;

  return (
  <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Babafemi Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullOgUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@justbabafemi" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
}

export default Seo;