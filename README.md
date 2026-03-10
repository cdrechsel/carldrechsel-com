# carldrechsel.com

Personal authority platform for Carl Drechsel built with Next.js App Router, TypeScript, Tailwind, and Sanity CMS.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local`:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2026-03-09
   SANITY_API_READ_TOKEN=yourReadToken
   SANITY_API_WRITE_TOKEN=yourWriteToken
   ```
3. Run Next.js:
   ```bash
   npm run dev
   ```
4. Open the app at `http://localhost:3000`.

## Sanity setup

1. Create a Sanity project:
   ```bash
   npx sanity@latest init
   ```
2. Use the same `projectId` + dataset values in `.env.local`.
3. Run Sanity Studio:
   ```bash
   npm run sanity:dev
   ```
4. Open Studio at `http://localhost:3333` (or `/studio` when running Next app).

## Seed initial insights content

```bash
npm run seed:insights
```

This seeds:
- categories
- author (Carl Drechsel)
- 5 initial insight posts

## Add a new insight post

1. Open `/studio`.
2. Create `Post`.
3. Fill required fields: title, slug, description, published date, body.
4. Assign category and author.
5. Toggle `featured` for homepage Insights preview if desired.
6. Publish.

## Deploy to Vercel

1. Push repo to GitHub.
2. Import project into Vercel.
3. Add environment variables from `.env.local` in Vercel Project Settings.
   - Use `SANITY_API_READ_TOKEN` for runtime content reads.
   - Keep `SANITY_API_WRITE_TOKEN` only if you need server-side seeding/mutations.
4. Deploy.
5. (Optional) Enable Vercel Web Analytics and Speed Insights in the Vercel dashboard.

## Routes

- `/` homepage
- `/insights` insights archive with category filter
- `/insights/[slug]` insight detail page
- `/insights/rss.xml` RSS feed
- `/studio` Sanity Studio
