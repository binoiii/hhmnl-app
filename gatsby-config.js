const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://hhmnl.netlify.app/",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `HappyHandsMnl`,
    description: `HappyHandsMnl provides a wide variety of sustainable products, which are all heart and happy hands crafted. We offer high quality products yet affordable for all. Engraved. Personalized. Eco-friendly. Souvenir. Present. Afforadable.`,
    author: `@binoiii`,
    siteUrl,
    url: `https://hhmnl.netlify.app/`,
    image: `/images/happyhandsmnl-meta.jpg`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HappyHandsMnl`,
        short_name: `hhmnl`,
        start_url: `/`,
        background_color: `#ca7919`,
        theme_color: `#ca7919`,
        display: `minimal-ui`,
        icon: `src/images/hhmnl-icon.png`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-sitemap`,
  ],
}
