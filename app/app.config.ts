export default defineAppConfig({
  global: {
    meetingLink: '',
    email: 'joferrolino0109@gmail.com',
    available: false
  },
  ui: {
    colors: {
      primary: 'green',
      secondary: 'stone',
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
        'to': 'https://www.linkedin.com/in/joanne-ferrolino/',
        'target': '_blank',
        'aria-label': 'Joanne Ferrolino on LinkedIn'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/mllrdev-joanne-ferrolino',
        'target': '_blank',
        'aria-label': 'Joanne Ferrolino on GitHub'
      },
      {
        'icon': 'i-simple-icons-instagram',
        'to': 'https://www.instagram.com/joooenggg_/',
        'target': '_blank',
        'aria-label': 'Joanne Ferrolino on Instagram'
      },
      {
        'icon': 'i-simple-icons-facebook',
        'to': 'https://www.facebook.com/joferrolino',
        'target': '_blank',
        'aria-label': 'Joanne Ferrolino on Facebook'
      }
    ]
  }
})
