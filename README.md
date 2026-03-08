# carldrechsel.com

Professional personal website for Carl Drechsel built with Next.js 14, TypeScript, and Tailwind CSS.

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Keep default Next.js build settings.
4. Deploy.

## Connect `carldrechsel.com`

1. In Vercel project settings, go to **Domains**.
2. Add `carldrechsel.com` and `www.carldrechsel.com`.
3. Update DNS records at your domain registrar to Vercel’s required records:
   - `A` record for apex (`@`) to Vercel IP (shown in Vercel UI)
   - `CNAME` for `www` to the Vercel target (shown in Vercel UI)
4. Wait for DNS propagation and confirm domain status in Vercel.

## Notes

- Replace `/public/resume.pdf` with the final resume PDF.
- Update contact email and LinkedIn URL in the homepage content as needed.
