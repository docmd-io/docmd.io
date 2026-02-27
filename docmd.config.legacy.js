// docmd.config.js
module.exports = {
  siteTitle: 'docmd',
  siteUrl: 'https://docmd.io',
  
  srcDir: 'docs',
  outputDir: 'site',
  
  theme: {
    name: 'default',
    defaultMode: 'system',
    enableModeToggle: false
  },

  favicon: 'assets/favicon.ico',
  
  navigation: [],

  plugins: {
    seo: {
      defaultDescription: 'The zero-config static site generator for documentation. Transform Markdown into fast, SEO-friendly websites. No React required. Open Source.',
      openGraph: {
        siteName: 'docmd',
        defaultImage: 'assets/images/preview.png', 
        type: 'website'
      },
      twitter: {
        cardType: 'summary_large_image',
      }
    },
    analytics: {
      googleV4: {
        measurementId: 'G-W8BCN0W4RF'
      }
    },
    sitemap: {
      defaultChangefreq: 'weekly',
      defaultPriority: 0.9
    }
  }
};