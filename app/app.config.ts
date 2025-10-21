export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      light: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'My profile picture'
    },
    meetingLink: 'https://calendly.com/seancramones/15-min-quick-chat',
    email: 'seancramones@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/sean-erick-ramones-102a64192/',
        'target': '_blank',
        'aria-label': 'Sean Erick Ramones on Linkedin'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/sean-erick-ramones',
        'target': '_blank',
        'aria-label': 'Sean Erick Ramones on GitHub'
      },
      {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/ramones_sean',
        'target': '_blank',
        'aria-label': 'Nuxt on X'
      },
      {
        'icon': 'i-simple-icons-instagram',
        'to': 'https://www.instagram.com/sean.e.ramz',
        'target': '_blank',
        'aria-label': 'Sean Erick Ramones on Instagram'
      }
    ]
  }
})
