export default {
  title: 'Canvas Party',
  description: 'justplaying arount.',

    themeConfig: {
      logo: '../public/canvas-party.svg',
    nav: [
      { text: 'Guide', link: '/guide/what-is-canvas-party' },
      { text: 'Tamplates', link: '/configs' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
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
      }
    ]
  },
  

}