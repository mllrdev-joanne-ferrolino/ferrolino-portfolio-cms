#!/usr/bin/env node

/**
 * Script to update blog post front matter from Notion exports
 * 
 * Usage: 
 *   node scripts/update-blog-frontmatter.mjs
 *   node scripts/update-blog-frontmatter.mjs content/blog/my-post.md
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const BLOG_DIR = path.join(__dirname, '../content/blog')
const AUTHOR = {
  name: 'Sean Erick C. Ramones',
  avatar: {
    src: 'avatars/profile-image-1.png',
    alt: 'Sean Erick C. Ramones'
  }
}

const DEFAULT_IMAGE = 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

/**
 * Extract title from markdown content
 */
function extractTitle(content) {
  // Look for first heading
  const h1Match = content.match(/^#\s+(.+)$/m)
  if (h1Match) return h1Match[1].replace(/\[.*?\]/g, '').trim()
  
  // Fallback to filename
  return null
}

/**
 * Generate description from content
 */
function generateDescription(content) {
  // Remove front matter and titles
  const cleanContent = content
    .replace(/^---[\s\S]*?---\n/m, '')
    .replace(/^#.*$/gm, '')
    .replace(/^>.*$/gm, '')
    .replace(/\[.*?\]\(.*?\)/g, '')
    .replace(/\*\*/g, '')
    .trim()
  
  // Get first meaningful paragraph
  const paragraphs = cleanContent.split('\n\n').filter(p => p.length > 50)
  if (paragraphs.length > 0) {
    const desc = paragraphs[0].replace(/\n/g, ' ').substring(0, 200)
    return desc.length === 200 ? desc + '...' : desc
  }
  
  return 'A blog post by Sean Erick C. Ramones'
}

/**
 * Estimate reading time (words per minute: 200)
 */
function estimateReadTime(content) {
  const words = content
    .replace(/^---[\s\S]*?---\n/m, '')
    .split(/\s+/)
    .filter(w => w.length > 0).length
  return Math.max(1, Math.ceil(words / 200))
}

/**
 * Extract or generate date
 */
function extractDate(content, filename) {
  // Look for date in content (e.g., [October 2024])
  const dateMatch = content.match(/\[([A-Za-z]+\s+\d{4})\]/)
  if (dateMatch) {
    const [month, year] = dateMatch[1].split(' ')
    const monthNum = new Date(`${month} 1, ${year}`).getMonth() + 1
    return `${year}-${String(monthNum).padStart(2, '0')}-01`
  }
  
  // Use current date
  return new Date().toISOString().split('T')[0]
}

/**
 * Parse existing front matter
 */
function parseFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return null
  
  const frontMatter = {}
  const lines = match[1].split('\n')
  let currentKey = null
  
  for (const line of lines) {
    const keyMatch = line.match(/^(\w+):\s*(.*)/)
    if (keyMatch) {
      currentKey = keyMatch[1]
      frontMatter[currentKey] = keyMatch[2].replace(/^["']|["']$/g, '')
    }
  }
  
  return frontMatter
}

/**
 * Generate front matter YAML
 */
function generateFrontMatter(data) {
  return `---
title: "${data.title}"
description: ${data.description}
date: ${data.date}
image: ${data.image}
minRead: ${data.minRead}
author:
  name: ${AUTHOR.name}
  avatar:
    src: ${AUTHOR.avatar.src}
    alt: ${AUTHOR.avatar.alt}
---`
}

/**
 * Process a single blog file
 */
function processBlogFile(filePath) {
  console.log(`\n📝 Processing: ${path.basename(filePath)}`)
  
  const content = fs.readFileSync(filePath, 'utf-8')
  const existing = parseFrontMatter(content)
  
  // Extract content without front matter
  const contentWithoutFM = content.replace(/^---[\s\S]*?---\n/m, '')
  
  // Generate new front matter
  const title = extractTitle(contentWithoutFM) || existing?.title || path.basename(filePath, '.md')
  const description = generateDescription(contentWithoutFM)
  const date = extractDate(contentWithoutFM, path.basename(filePath)) || existing?.date
  const image = existing?.image || DEFAULT_IMAGE
  const minRead = estimateReadTime(contentWithoutFM)
  
  const newFrontMatter = generateFrontMatter({
    title,
    description,
    date,
    image,
    minRead
  })
  
  const newContent = newFrontMatter + '\n' + contentWithoutFM
  
  // Write back
  fs.writeFileSync(filePath, newContent, 'utf-8')
  
  console.log(`✅ Updated:`)
  console.log(`   Title: ${title}`)
  console.log(`   Date: ${date}`)
  console.log(`   Read time: ${minRead} min`)
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2)
  
  if (args.length > 0) {
    // Process specific file
    const filePath = path.resolve(args[0])
    if (fs.existsSync(filePath)) {
      processBlogFile(filePath)
    } else {
      console.error(`❌ File not found: ${filePath}`)
      process.exit(1)
    }
  } else {
    // Process all files in blog directory
    const files = fs.readdirSync(BLOG_DIR)
      .filter(f => f.endsWith('.md'))
      .map(f => path.join(BLOG_DIR, f))
    
    console.log(`🔄 Processing ${files.length} blog posts...`)
    
    files.forEach(processBlogFile)
    
    console.log(`\n✨ Done! Updated ${files.length} posts.`)
  }
}

main()
