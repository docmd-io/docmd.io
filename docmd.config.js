module.exports = {
  title: "docmd",
  url: "https://docmd.io",
  favicon: "assets/favicon.ico",
  src: "docs",
  out: "site",
  minify: true,
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
        themeSwitch: true,
        sponsor: "mgks"
      }
    },
    footer: {
      style: "minimal"
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
      defaultDescription: "The high-performance, minimalist documentation engine. SPA speed, < 20kb payload, and built-in AI structural integrity. No React required.",
      aiBots: true,
      openGraph: {
        siteName: "docmd",
        defaultImage: "assets/images/preview.webp",
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
  },
  i18n: {
    default: "en",
    stringMode: true,
    locales: [
      { id: "en", label: "English" },
      { id: "zh", label: "中文" }
    ]
  },
  navigation: []
};