export default {
  title: 'CanvasParty',
  description: 'justplaying arount.',

  themeConfig: {
    logo: '../public/canvas-party.svg',
    nav: [
      {
        text: 'Guide',
        items: [
          { text: 'Intallation', link: '/guide/getting-started' },
          { text: 'Using Vue', link: '/guide/using-vue' },
          { text: 'Using React', link: '/guide/using-react' },
        ],
      },
      { text: 'Tamplates', link: '/tamplates/index' },
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
        items: [
          { text: 'What is CanvasParty', link: '/guide/what-is-canvas-party' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'Frameworks',
        items: [
          { text: 'Using React', link: '/guide/using-react' },
          { text: 'Using Vue', link: '/guide/using-vue' },
        ],
      },
      {
        text: 'Tamplates',
        items: [
          { text: 'Confetti', link: '/tamplates/confetti' },
          { text: 'Trippy', link: '/tamplates/trippy' },
          { text: 'Fireworks', link: '/tamplates/fireworks' },
          { text: 'Starfield', link: '/tamplates/starfield' },
          { text: 'TV snow', link: '/tamplates/tvSnow' },
          { text: 'Underground', link: '/tamplates/underground' },
        ],
      },
    ],
  },
}
