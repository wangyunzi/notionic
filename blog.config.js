const BLOG = {
  title: '云空间',
  author: '王云子',
  email: 'xueq695@gmail.com',
  link: 'https://notionic.wangyunzi.com',
  newsletter: 'Notionic Weekly',
  description: 'Personal law school',
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'serif', // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Notionic in a folder
  since: 2022, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  showNewsletter: true,
  previewImagesEnabled: true,
  showTitlebarText: false, // Craft Docs page show title bar text on desktop
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateHost: 'og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  defaultCover: '/cover.jpg',
  socialLink: {
    twitter: 'https://twitter.com/YunziWang',
    github: 'https://github.com/wangyunzi',
    telegram: 'https://t.me/YunziWang'
  },
  seo: {
    keywords: ['Notionic', '王云子', 'Blog', 'law', 'study'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'wangyunzi.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '1833379703', // The chat id of your Telegram bot
  telegramChannelUrl: '', // The link of your Telegram channel
  telegramChannelName: '', // The name of your Telegram channel
  craftConfigShareUrl: '', // The link to share your craft config
  analytics: {
    provider: '', // Currently we support Google Analytics, Ackee and Umami, please fill with 'ga' or 'ackee' or 'umami', leave it empty to disable it.
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    },
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: utterances, supacomments
    provider: 'supacomments', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: 'https://dhjsnlobgzqgykreipab.supabase.co', // The url of your Supabase instance
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoanNubG9iZ3pxZ3lrcmVpcGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcyODI5NTQsImV4cCI6MTk4Mjg1ODk1NH0.5SjTA7XASus40tRnsJYi2ZqSi7WtQcq6VvEGd0t0Y8g' // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: ''
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
