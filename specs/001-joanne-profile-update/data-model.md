# Data Model

## Content Collections (Nuxt Content)

### Index (content/index.yml)

- **seo** (optional)
  - `title` (string, non-empty)
  - `description` (string, non-empty)
- **title** (string, non-empty)
- **description** (string, non-empty)
- **profileImage**
  - `src` (string)
  - `alt` (string)
- **snsLinks** (array of button objects)
  - `label` (string)
  - `icon` (string, optional)
  - `to` (string, optional)
  - `color` (enum: primary|neutral|success|warning|error|info, optional)
  - `size` (enum: xs|sm|md|lg|xl, optional)
  - `variant` (enum: solid|outline|subtle|soft|ghost|link, optional)
  - `target` (enum: _blank|_self, optional)
- **hero**
  - `links` (array of button objects, same schema as `snsLinks`)
  - `images` (array of image objects: `src`, `alt`)
- **about**
  - `title` (string)
  - `description` (string)
- **now** (optional)
  - `openTo` (array of strings, optional)
  - `available` (boolean, optional)
  - `meetingLink` (string, optional)
  - `currently` (array of strings, optional)
  - `availability` (string, optional)
- **experience**
  - `title` (string)
  - `description` (string)
  - `items` (array)
    - `date` (date)
    - `position` (string)
    - `description` (string)
    - `index` (number)
    - `company`
      - `name` (string)
      - `url` (string)
      - `logo` (string, icon)
      - `color` (string)
- **testimonials**
  - `title` (string)
  - `description` (string)
  - `items` (array)
    - `quote` (string)
    - `author`
      - `name` (string)
      - `description` (string, optional)
      - `username` (string, optional)
      - `twitter` (string, optional)
      - `to` (string, optional)
      - `avatar` (image object, optional)
- **blog**
  - `title` (string)
  - `description` (string)
- **faq**
  - `title` (string)
  - `description` (string)
  - `categories` (array)
    - `title` (string, non-empty)
    - `questions` (array)
      - `label` (string, non-empty)
      - `content` (string, non-empty)

### About (content/about.yml)

- **profileImage** (image object: `src`, `alt`)
- **content** (object; markdown string content lives under `content` key in YAML)
- **images** (array of image objects: `src`, `alt`)
- **now** (optional)
  - `openTo` (array of strings, optional)
  - `available` (boolean, optional)
  - `meetingLink` (string, optional)
  - `currently` (array of strings, optional)
  - `availability` (string, optional)

## App Config Defaults (app/app.config.ts)

- **global.meetingLink** (string)
- **global.email** (string)
- **global.available** (boolean)
- **footer.links** (array of social link buttons with `icon`, `to`, `target`, `aria-label`)

## Assets

- **Resume PDF**: `/public/documents/*.pdf` referenced as `/documents/*.pdf` in `content/index.yml` hero links.
- **Images**: `/public/hero`, `/public/about`, `/public/avatars` referenced by root-relative paths.
