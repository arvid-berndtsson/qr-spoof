# QR Spoof

> 🎓 **Educational Security Awareness Tool**  
> Help people think before they scan with this QR code security awareness platform.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Security](https://img.shields.io/badge/security-responsible%20disclosure-orange.svg)](SECURITY.md)

QR Spoof is an **educational web application** designed to raise awareness about QR code security risks, specifically "quishing" (QR code phishing). This tool helps educate users about the dangers of scanning untrusted QR codes while promoting safe scanning practices.

## ⚠️ Important: Educational Purpose Only

This project is designed **exclusively for educational and security awareness purposes**. It should only be used to:
- Teach people about QR code security risks
- Demonstrate how easily QR codes can redirect users
- Promote safe QR code scanning practices
- Conduct authorized security awareness training

**Please review our [Code of Conduct](CODE_OF_CONDUCT.md) and [Security Policy](SECURITY.md) before using or contributing.**

## ✨ Features

- 🎯 **Educational QR Code Generator** - Create awareness-focused QR codes
- 📄 **PDF Export** - Download QR codes for printing and distribution
- 📱 **Social Sharing** - Spread awareness on social media
- 🎨 **Modern Design** - Responsive UI built with TailwindCSS
- 📊 **Privacy-Focused Analytics** - Umami analytics integration
- ⚡ **Fast & Secure** - Deployed on Cloudflare Pages
- 🔒 **Security First** - Built with security awareness in mind
- 🌐 **Comprehensive FAQ** - Educational resources about quishing

## 🎯 What is Quishing?

**Quishing** (QR code phishing) is a cyberattack where malicious actors use QR codes to:
- Redirect users to fake websites
- Install malware on devices
- Steal personal information and credentials
- Bypass traditional email security filters

This project helps educate users to pause and verify URLs before trusting QR codes, just like they would with email links.

## 🚀 Use Cases

### ✅ Appropriate Uses
- **Security Awareness Training** - Corporate or educational training sessions
- **Educational Workshops** - Teaching about cybersecurity best practices
- **Conference Presentations** - Demonstrating security concepts
- **Community Education** - Public awareness campaigns (with permission)
- **Research & Documentation** - Security research and publications

### ❌ Inappropriate Uses
- Creating malicious QR codes to harm others
- Unauthorized testing or social engineering
- Deceptive marketing or spam campaigns
- Any activity that violates laws or ethics

## 📚 How It Works

1. **Generate** - Create a QR code that points to your target URL
2. **Educate** - When scanned, users first see an awareness page explaining quishing risks
3. **Verify** - Users can see the destination URL before choosing to continue
4. **Learn** - Safety tips and educational content help users make informed decisions

This creates a "teachable moment" that promotes safer scanning habits.

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
npm install --legacy-peer-deps
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

## 🤝 Contributing

We welcome contributions that enhance the educational value of this project! Please read our [Contributing Guidelines](CONTRIBUTING.md) before getting started.

### Quick Start for Contributors

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes following the [Conventional Commits](https://l.arvid.tech/conventional-commits) specification
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

### Ways to Contribute

- 📝 Improve documentation and educational content
- 🌍 Translate content to other languages
- 🎨 Enhance UI/UX and accessibility
- 🔧 Fix bugs and improve performance
- 💡 Suggest new educational features
- 📢 Share and spread awareness responsibly

**Please ensure all contributions align with our educational mission and [Code of Conduct](CODE_OF_CONDUCT.md).**

## 📢 Spreading Awareness

Want to help spread awareness about QR code security? Here's how to do it responsibly:

### Guidelines for Ethical Awareness Campaigns

1. **Be Transparent** - Always explain the educational purpose
2. **Get Permission** - Obtain necessary approvals before distributing QR codes
3. **Provide Context** - Include information about what happens when scanned
4. **Respect Privacy** - Don't collect personal data without consent
5. **Follow Laws** - Comply with all applicable regulations in your jurisdiction

### Social Media Sharing

Share on social media with:
- Clear explanation of the educational purpose
- Statistics about quishing attacks
- Links to resources
- Hashtags: #Cybersecurity #QRSecurity #Quishing #InfoSec

### Resources for Educators

Check out our [Contributing Guide](CONTRIBUTING.md) for more ideas on how to use this tool for education and awareness.

## 🛡️ Security

Found a security vulnerability? Please review our [Security Policy](SECURITY.md) for responsible disclosure guidelines.

We take security seriously and appreciate your help in keeping this project safe.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

**Important**: The license grants permission to use this software, but users are solely responsible for ensuring their use complies with all applicable laws and ethical standards. Malicious use is strictly prohibited.

## 🙏 Acknowledgments

- Inspired by the growing concern about quishing attacks
- Thanks to the cybersecurity community for raising awareness
- Special thanks to all contributors who help make the internet safer

## 📞 Contact

- **Creator**: [Arvid Berndtsson](https://arvid.tech)
- **LinkedIn**: [arvid-berndtsson](https://linkedin.com/in/arvidberndtsson)
- **Issues**: [GitHub Issues](https://github.com/arvid-berndtsson/qr-spoof/issues)

## ⚖️ Disclaimer

This tool is provided for educational purposes only. The creators and contributors:
- Are not responsible for misuse of this tool
- Do not endorse or encourage malicious activity
- Recommend following all applicable laws and ethical guidelines
- Encourage responsible security awareness practices

By using this tool, you agree to use it only for legitimate educational and security awareness purposes.

---

**Remember**: Always think before you scan a QR code! 🔍
