export default {
  title: 'CanvasParty',
  description: 'HTML canvas animations library.',

  themeConfig: {
    logo: { dark: '/icon-dark.svg', light: '/icon-light.svg' },
    nav: [
      {
        text: 'Guide',
        items: [
          { text: 'Installation', link: '/guide/getting-started' },
          { text: 'Using Vue', link: '/guide/using-vue' },
          { text: 'Using React', link: '/guide/using-react' },
        ],
      },
      { text: 'Templates', link: '/templates/index' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YoavDn/canvas-party' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: '...',
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [{ text: 'Getting Started', link: '/guide/getting-started' }],
      },
      {
        text: 'Frameworks',
        items: [
          { text: 'Using React', link: '/guide/using-react' },
          { text: 'Using Vue', link: '/guide/using-vue' },
        ],
      },
      {
        text: 'Templates',
        items: [
          { text: 'Confetti', link: '/templates/confetti' },
          { text: 'Trippy', link: '/templates/trippy' },
          { text: 'Starfield', link: '/templates/starfield' },
          { text: 'TV snow', link: '/templates/tvSnow' },
          { text: 'Fluid', link: '/templates/fluid' },
          { text: 'Underground', link: '/templates/underground' },
          { text: 'Gradient', link: '/templates/gradient' },
          { text: 'Smoke', link: '/templates/smoke' },
        ],
      },
    ],
  },
}
