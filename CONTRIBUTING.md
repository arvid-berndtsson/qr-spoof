# Contributing to QR Spoof

First off, thank you for considering contributing to QR Spoof! It's people like you who help make the internet a safer place by spreading awareness about QR code security risks.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [What is QR Spoof?](#what-is-qr-spoof)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Spreading Awareness](#spreading-awareness)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please read it before contributing.

**Important**: This project is for **educational purposes only**. Any contribution that enables or encourages malicious use will be rejected.

## What is QR Spoof?

QR Spoof is an educational platform that raises awareness about QR code security risks, specifically "quishing" (QR code phishing). The project helps people understand:

- How QR codes can be exploited
- How to identify potentially malicious QR codes
- Best practices for scanning QR codes safely
- The importance of verifying URLs before trusting them

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected to see
- **Include screenshots** if applicable
- **Note your environment** (browser, OS, device type)

### Suggesting Enhancements

Enhancement suggestions are welcome! Before creating enhancement suggestions, please check the issue list. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the proposed feature
- **Explain why this enhancement would be useful** to most users
- **Consider if it aligns** with the educational mission of the project

### Code Contributions

#### Areas We Welcome Contributions

1. **Educational Content**
   - Improving documentation
   - Adding FAQs and guides
   - Translating content to other languages
   - Creating educational resources

2. **User Experience**
   - Improving accessibility
   - Enhancing mobile responsiveness
   - Improving UI/UX design
   - Adding helpful tooltips and explanations

3. **Features**
   - QR code customization options
   - Export and sharing features
   - Security scanning tools
   - Analytics and tracking improvements

4. **Security**
   - Identifying and fixing security vulnerabilities
   - Improving input validation
   - Enhancing privacy features

5. **Performance**
   - Optimizing load times
   - Reducing bundle size
   - Improving build processes

#### Areas We Don't Accept Contributions

- Features that enable malicious use
- Tools that automate large-scale QR code generation for spam
- Removing or weakening security warnings
- Anything that goes against our educational mission

## Development Setup

### Prerequisites

- Node.js 22+ 
- npm or pnpm
- A GitHub account

### Setup Steps

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/qr-spoof.git
   cd qr-spoof
   ```

3. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Create a `.env.local` file** with the following variables:
   ```env
   NEXT_PUBLIC_UMAMI_WEBSITE_ID=your_umami_website_id
   NEXT_PUBLIC_UMAMI_URL=your_umami_url
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** to see the application

### Project Structure

```
qr-spoof/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── faq/         # FAQ-specific components
│   │   ├── header.tsx   # Navigation header
│   │   ├── footer.tsx   # Site footer
│   │   └── ...
│   ├── pages/           # Page components
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── public/              # Static assets
└── ...config files
```

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This leads to more readable commit messages and helps with automated versioning.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi-colons, etc.)
- `refactor`: Code refactoring without adding features or fixing bugs
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates, etc.

### Examples

```bash
feat: add QR code color customization options
fix: resolve PDF export formatting on mobile
docs: update README with deployment instructions
style: improve button hover states
refactor: optimize QR code generation algorithm
```

### Guidelines

- Use the present tense ("add feature" not "added feature")
- Use the imperative mood ("move cursor to..." not "moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## Pull Request Process

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feat/amazing-feature
   ```

2. **Make your changes** following our coding standards

3. **Test your changes thoroughly**:
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit your changes** using conventional commits:
   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feat/amazing-feature
   ```

6. **Open a Pull Request** with:
   - A clear title following conventional commits format
   - A detailed description of what changes you made and why
   - Screenshots (if applicable)
   - Reference to any related issues

7. **Wait for review**:
   - Maintainers will review your PR
   - Be open to feedback and make requested changes
   - Once approved, your PR will be merged

### PR Checklist

Before submitting, ensure:

- [ ] Code follows the project's style guidelines
- [ ] Self-review of your own code completed
- [ ] Comments added in hard-to-understand areas
- [ ] Documentation updated if needed
- [ ] No new warnings generated
- [ ] Changes tested locally
- [ ] Commits follow conventional commit format
- [ ] PR description clearly describes changes

## Spreading Awareness

Want to help spread awareness about QR code security? Here's how:

### Ethical Sharing Guidelines

1. **Always Be Transparent**
   - Clearly communicate that this is an educational tool
   - Explain the purpose upfront
   - Never deceive people about what the QR code does

2. **Get Permission**
   - If placing QR codes in physical locations, get property owner permission
   - For organizational use, get proper approvals
   - Respect private and public spaces

3. **Provide Context**
   - Include information about what will happen when the QR code is scanned
   - Explain the educational purpose
   - Provide resources for learning more

4. **Use Appropriate Settings**
   - Schools and universities (with permission)
   - Security awareness training sessions
   - Cybersecurity conferences and events
   - Internal company security training
   - Community education events

### Share on Social Media

When sharing on social media, consider:

- Explain what QR Spoof is and why it matters
- Share statistics about quishing attacks
- Link to educational resources
- Use hashtags like #Cybersecurity #QRSecurity #Quishing
- Tag cybersecurity organizations and influencers

### Create Educational Content

Help us by creating:

- Blog posts about QR code security
- Tutorial videos
- Social media content
- Infographics
- Presentations for workshops

### Collaborate

- Reach out to schools, libraries, and community centers
- Partner with cybersecurity organizations
- Organize awareness events
- Contribute to security awareness training programs

## Questions?

If you have questions:

- Check existing [GitHub Issues](https://github.com/arvid-berndtsson/qr-spoof/issues)
- Open a new issue with your question
- Connect on [LinkedIn](https://linkedin.com/in/arvidberndtsson)

## Recognition

Contributors will be recognized in:

- The project's README
- Release notes
- Our gratitude and appreciation! 🙏

Thank you for contributing to a safer digital world!
