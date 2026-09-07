import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string()
})

const createButtonSchema = () => z.object({
  label: z.string(),
  icon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_self']).optional()
})

export default defineContentConfig({
  collections: {
    portfolio: defineCollection({
      type: 'page',
      source: 'portfolio.yml',
      schema: z.object({
        seo: z.object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        }).optional(),
        hero: z.object({
          eyebrow: z.string(),
          title: z.string(),
          photo: createImageSchema(),
          name: z.string(),
          role: z.string(),
          year: z.string()
        }),
        about: z.object({
          title: z.string(),
          photo: createImageSchema(),
          name: z.string(),
          location: z.string(),
          bio: z.string()
        }),
        specialty: z.object({
          title: z.string(),
          label: z.string()
        }),
        toolkit: z.object({
          title: z.string(),
          items: z.array(z.object({
            icon: z.string().optional(),
            label: z.string()
          }))
        }),
        experience: z.object({
          title: z.string(),
          items: z.array(z.object({
            position: z.string(),
            company: z.string(),
            date: z.string(),
            description: z.string().optional()
          }))
        }),
        works: z.object({
          title: z.string(),
          subtitle: z.string().optional(),
          items: z.array(z.object({
            title: z.string(),
            type: z.string(),
            tag: z.string(),
            image: createImageSchema().optional(),
            url: z.string().optional()
          })),
          moreLabel: z.string().optional()
        }),
        connect: z.object({
          title: z.string(),
          message: z.string(),
          email: z.string(),
          socials: z.array(createButtonSchema()),
          qr: z.object({
            url: z.string(),
            caption: z.string()
          })
        })
      })
    })
  }
})
