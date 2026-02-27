module.exports = {
  siteTitle: "docmd",
  siteUrl: "https://docmd.io",
  favicon: "assets/favicon.ico",
  srcDir: "docs",
  outputDir: "site",
  layout: {
    spa: false,
    header: {
      enabled: true
    },
    sidebar: {
      collapsible: true,
      defaultCollapsed: false
    },
    optionsMenu: {
      position: "header",
      components: {
        search: true,
        themeSwitch: false,
        sponsor: null
      }
    },
    footer: {
      style: "complete"
    }
  },
  theme: {
    name: "default",
    defaultMode: "system",
    codeHighlight: true,
    customCss: []
  },
  plugins: {
    seo: {
      defaultDescription: "The zero-config static site generator for documentation. Transform Markdown into fast, SEO-friendly websites. No React required. Open Source.",
      openGraph: {
        siteName: "docmd",
        defaultImage: "assets/images/preview.png",
        type: "website"
      },
      twitter: {
        cardType: "summary_large_image"
      }
    },
    analytics: {
      googleV4: {
        measurementId: "G-W8BCN0W4RF"
      }
    },
    sitemap: {
      defaultChangefreq: "weekly",
      defaultPriority: 0.9
    }
  },
  navigation: []
};
