# QR Spoof

A web application for generating QR codes and raising awareness about QR code security (quishing). Built with Next.js and deployed on Cloudflare Pages.

## Features

- QR code generation with customizable content
- PDF export functionality
- Social sharing capabilities
- Modern, responsive design with TailwindCSS
- Analytics integration with Umami
- Cloudflare Pages deployment

## Prerequisites

- Node.js 22+ and pnpm
- Cloudflare account
- GitHub account

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/qr-spoof.git
cd qr-spoof
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with the following variables:
```env
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your_umami_website_id
NEXT_PUBLIC_UMAMI_URL=your_umami_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

The project uses several key technologies:

- **Next.js**: For the React framework and server-side rendering
- **TypeScript**: For type safety and better developer experience
- **TailwindCSS**: For styling and responsive design
- **Zod**: For runtime type checking and validation
- **qrcode.react**: For QR code generation
- **jspdf**: For PDF export functionality
- **html-to-image**: For converting components to images

## Deployment

This project is configured for deployment on Cloudflare Pages. To deploy:

1. Push your code to GitHub
2. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Navigate to Pages
4. Click "Create a project"
5. Connect your GitHub repository
6. Configure the build settings:
   - Build command: `npx @cloudflare/next-on-pages@1`
   - Build output directory: `.vercel/output/static`
   - Environment variables: Add the ones from your `.env.local` file

Cloudflare Pages will automatically deploy your site on every push to the main branch and create preview deployments for pull requests.

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_UMAMI_WEBSITE_ID`: Your Umami analytics website ID
- `NEXT_PUBLIC_UMAMI_URL`: Your Umami analytics instance URL
- `NEXT_PUBLIC_SITE_URL`: Your site's public URL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes following the [Conventional Commits](https://l.arvid.tech/conventional-commits) specification:
   ```bash
   # Examples:
   git commit -m "feat: add new QR code customization options"
   git commit -m "fix: resolve PDF export formatting issues"
   git commit -m "docs: update README with deployment instructions"
   git commit -m "style: improve button hover states"
   git commit -m "refactor: optimize QR code generation"
   ```
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request
