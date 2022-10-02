export default {
  title: 'Canvas Party',
  description: 'justplaying arount.',

    themeConfig: {
      logo: '../public/canvas-party.svg',
    nav: [
      { text: 'Guide',
      items: [
          { text: 'Intallation', link: '/guide/getting-started' },
          { text: 'Using Vue', link: '/guide/using-vue' },
          { text: 'Using React', link: '/guide/using-react' }
        ]
     },
      { text: 'Tamplates',link: '/tamplates/index' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YoavDn/canvas-party' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
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
        text: 'Cofinguration',
        items: [
          { text: 'Using React', link: '/guide/using-react' },
          { text: 'Using Vue', link: '/guide/using-vue' },
        
        ],
      },
        {
        text: 'Tamplates',
        items: [
          { text: 'Confetti', link: '/tamplates/what-is-canvas-party' },
          { text: 'Trippy', link: '/tamplates/getting-started' },
          { text: 'Fireworks', link: '/tamplates/getting-started' },
          { text: 'Starfield', link: '/tamplates/getting-started' },
        
        ],
      }
    ]
  },
  

}

