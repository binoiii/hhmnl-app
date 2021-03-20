const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "hhttps://hhmnl.netlify.app/",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `HappyHandsMnl`,
    description: `HappyHandsMnl provides a wide variety of sustainable products, which are all heart and happy hands crafted. We offer high quality products yet affordable for all. Engraved. Personalized. Eco-friendly.  Mini Brush. Comb for Gents. Comb with Handle. Wooden Mirror. Stainless Straw Set. Sandalwood Fan. Paddle Brush. Bamboo Tumbler. Metal Vaccum Tumbler. Bamboo Mug. Bambaunan Bento Lunch Box. Bambootensils. Bamboo Toothbrush. Bamboo Notebook. Bamboo Sunglasses. Bamboo Chopping Board. Wooden Items. Wooden Pen. Wooden Bottle Opener
    Wooden Phone Stand Keychain. Wooden Speaker and Phone Holder. Leather Goods. Leather Chord Organizer. Cord Organizer. Leather Keyholder. Leather Passport Holder. Coin Purse. Handy Wallet. Long Wallet. Flask Set. Glass Cup w/ Bamboo Lid. Gift. Souvenir. Present. Afforadable.`,
    author: `@binoiii`,
    siteUrl,
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
