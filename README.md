# Chinedu Agwunobi — Personal Portfolio Website

> A modern, responsive portfolio website for a Data Engineer, Cloud Architect, and Data Scientist. Built with vanilla HTML, CSS, and JavaScript. Hosted on AWS S3 + CloudFront with automated CI/CD via GitHub Actions.

---

## Live Site

🌐 **[www.chinedueagwunobi.co.uk](https://www.chinedueagwunobi.co.uk)**

---

## About

This portfolio showcases:
- **23 projects** across Data Engineering, Cloud Architecture, Data Science, Agentic AI, and Machine Learning
- **12x cloud certifications** across AWS, Azure, GCP, and Databricks
- **3 tailored CVs** downloadable directly from the site
- **Work experience timeline** with real metrics and achievements
- **Contact form** wired to email via mailto

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Fonts | Google Fonts (Inter, Space Grotesk) |
| Icons | Font Awesome 6.5 |
| Hosting | AWS S3 (Static Website) |
| CDN | AWS CloudFront |
| CI/CD | GitHub Actions |
| Version Control | Git / GitHub |

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                        DEVELOPMENT                                   │
│                                                                      │
│   Developer (Local Machine)                                          │
│   ┌─────────────────────┐                                           │
│   │  index.html          │                                           │
│   │  style.css           │  ──► git commit ──► git push             │
│   │  app.js              │                          │                │
│   │  myphoto.jpg         │                          │                │
│   │  my_cv/              │                          ▼                │
│   └─────────────────────┘                   GitHub Repository       │
│                                             (Chile93/portfolio)      │
└─────────────────────────────────────────────────────────────────────┘
                                                      │
                                                      │ push to main
                                                      ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     CI/CD PIPELINE                                   │
│                                                                      │
│   GitHub Actions (.github/workflows/deploy.yml)                     │
│                                                                      │
│   ┌──────────────┐   ┌──────────────┐   ┌──────────────────────┐   │
│   │  Checkout    │──►│  Configure   │──►│  aws s3 sync         │   │
│   │  Repository  │   │  AWS Creds   │   │  (upload all files)  │   │
│   └──────────────┘   └──────────────┘   └──────────────────────┘   │
│                            │                         │               │
│                    GitHub Secrets:                   ▼               │
│                    AWS_ACCESS_KEY_ID      ┌──────────────────────┐  │
│                    AWS_SECRET_ACCESS_KEY  │  CloudFront Cache    │  │
│                    AWS_REGION             │  Invalidation /*     │  │
│                    S3_BUCKET_NAME         └──────────────────────┘  │
│                    CLOUDFRONT_DIST_ID                                │
└─────────────────────────────────────────────────────────────────────┘
                                                      │
                                                      ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        AWS HOSTING                                   │
│                                                                      │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    Amazon S3 Bucket                          │   │
│   │                                                              │   │
│   │   index.html  ◄── Static Website Hosting (Origin)           │   │
│   │   style.css       Bucket Policy: Public Read                 │   │
│   │   app.js          Region: eu-west-2 (London)                 │   │
│   │   myphoto.jpg                                                │   │
│   │   my_cv/                                                     │   │
│   └──────────────────────────┬──────────────────────────────────┘   │
│                               │                                      │
│                               ▼                                      │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                  AWS CloudFront (CDN)                        │   │
│   │                                                              │   │
│   │   - Global edge locations (low latency worldwide)            │   │
│   │   - HTTPS enforced (SSL/TLS certificate via ACM)             │   │
│   │   - Cache TTL: 86400s (24 hours)                             │   │
│   │   - Cache invalidation on every deployment                   │   │
│   │   - Custom domain support (Route 53 / CNAME)                 │   │
│   └──────────────────────────┬──────────────────────────────────┘   │
│                               │                                      │
└───────────────────────────────┼─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                          END USERS                                   │
│                                                                      │
│   Recruiters / Hiring Managers / Collaborators                       │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│   │ Desktop  │  │  Mobile  │  │  Tablet  │  │  Laptop  │          │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘          │
│                                                                      │
│   https://your-cloudfront-url.cloudfront.net                        │
│   https://chineduagwunobi.com  (with custom domain)                 │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Project Structure

```
portfolio-website/
│
├── index.html              # Main HTML — all sections
├── style.css               # All styles, animations, responsive design
├── app.js                  # Projects data, rendering logic, interactions
├── myphoto.jpg             # Profile photo
│
├── my_cv/                  # Downloadable CVs
│   ├── Chinedu_Agwunobi_DE_CV.docx    # Data Engineer CV
│   ├── Chinedu_Agwunobi_CE_CV.docx    # Cloud Architect CV
│   └── Chinedu_Agwunobi_DS_CV.docx    # Data Scientist CV
│
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD pipeline
│
├── .gitignore
└── README.md
```

---

## Sections

| Section | Description |
|---------|-------------|
| Hero | Name, role tags, stats, photo with floating badges, CV dropdown |
| About | 3 role cards + featured quote card |
| Experience | Timeline: 2 Reliance Infosystems roles + Think Pacific + MSc |
| Skills | 4 tabbed panels: Data Engineering, Cloud & DevOps, Data Science & ML, Agentic AI |
| Projects | 24 filterable cards across 5 categories with architecture diagrams |
| Certifications | 6 cards: AWS, Azure, GCP, Databricks, WorldQuant, BeSA |
| Contact | Contact info + email form wired to Gmail |
| Footer | Nav links, social icons, copyright |

---

## CI/CD Flow — Step by Step

```
1. Developer edits files locally (index.html / app.js / style.css)
        │
        ▼
2. git add . && git commit -m "update"
        │
        ▼
3. git push origin main
        │
        ▼
4. GitHub Actions triggered automatically (deploy.yml)
        │
        ├── Step 1: Checkout code
        ├── Step 2: Configure AWS credentials (from GitHub Secrets)
        ├── Step 3: aws s3 sync → uploads changed files to S3 bucket
        └── Step 4: CloudFront invalidation → clears CDN cache globally
        │
        ▼
5. Live site updated within ~60 seconds worldwide
```

---

## GitHub Secrets Required

Set these in your GitHub repo under **Settings → Secrets and variables → Actions**:

| Secret Name | Description |
|-------------|-------------|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key |
| `AWS_REGION` | e.g. `eu-west-2` |
| `S3_BUCKET_NAME` | e.g. `chineduagwunobi-portfolio` |
| `CLOUDFRONT_DISTRIBUTION_ID` | e.g. `E1ABCDEF123456` |

---

## Deployment — Manual (First Time)

```bash
# 1. Create S3 bucket
aws s3 mb s3://your-bucket-name --region eu-west-2

# 2. Enable static website hosting
aws s3 website s3://your-bucket-name \
  --index-document index.html \
  --error-document index.html

# 3. Upload all files
aws s3 sync . s3://your-bucket-name \
  --exclude ".git/*" \
  --exclude ".github/*" \
  --exclude ".gitignore" \
  --exclude "*.md"

# 4. After CloudFront is created, all future updates are automatic via GitHub Actions
```

---

## Maintenance & Updates

### Adding a New Project
1. Open `app.js`
2. Add a new object to the `projects` array with the correct `category` (`de`, `ce`, `ds`, `ai`, or `ml`)
3. Push to `main` — the site updates automatically

### Updating CV Files
1. Replace the `.docx` file in `my_cv/`
2. Keep the same filename
3. Push to `main` — the new file is uploaded automatically

### Updating Personal Info
- Hero text, about cards, experience timeline → edit `index.html`
- Certifications → edit the cert cards in `index.html`
- Contact details → edit the contact section in `index.html`

### Updating Styles
- All styles are in `style.css`
- CSS variables at the top of the file control the colour scheme

### Monitoring
- **S3**: AWS Console → S3 → your bucket → Metrics
- **CloudFront**: AWS Console → CloudFront → your distribution → Monitoring
- **GitHub Actions**: GitHub → Actions tab → view deployment logs

---

## Performance

- Static site — no server, no database, no backend
- CloudFront CDN delivers assets from the nearest edge location globally
- Fonts loaded via Google Fonts with `preconnect` for faster loading
- CSS and JS are unminified for maintainability (minify for production if needed)

---

## Security

- S3 bucket is private — only CloudFront can access it (Origin Access Control)
- HTTPS enforced via CloudFront + ACM certificate
- IAM user for deployment has minimal permissions (S3 sync + CloudFront invalidation only)
- No sensitive data stored in the repository

---

## Author

**Chinedu Emmanuel Agwunobi**
London, UK
- 📧 chinedu.e.agwunobi@gmail.com
- 💼 [linkedin.com/in/chinedu-agwunobi-b33939b3](https://www.linkedin.com/in/chinedu-agwunobi-b33939b3/)
- 🐙 [github.com/Chile93](https://github.com/Chile93)

---

*Built with passion. Deployed on AWS. Open to Data Engineering, Cloud Architecture, and Data Science opportunities.*

---

## Custom Domain Setup (GoDaddy + AWS ACM + CloudFront)

The site is accessible via a custom domain registered on GoDaddy, secured with a free SSL certificate from AWS Certificate Manager (ACM), and served through CloudFront.

### Architecture

```
User visits chinedueagwunobi.co.uk
        │
        ▼
GoDaddy Domain Forwarding (301 redirect)
chinedueagwunobi.co.uk  →  www.chinedueagwunobi.co.uk
        │
        ▼
GoDaddy DNS (CNAME record)
www.chinedueagwunobi.co.uk  →  dn1quuyu5ewmr.cloudfront.net
        │
        ▼
AWS CloudFront Distribution (E31M1DPGZ33J2N)
- HTTPS enforced (redirect HTTP → HTTPS)
- SSL certificate from AWS ACM
- TLS 1.2 minimum
        │
        ▼
Amazon S3 (eu-west-2)
chinedu-agwunobi-portfolio
        │
        ▼
index.html served to user
```

### DNS Records in GoDaddy

| Type | Name | Value | Purpose |
|------|------|-------|---------|
| `CNAME` | `www` | `dn1quuyu5ewmr.cloudfront.net` | Points www to CloudFront |
| `Forwarding` | `@` | `https://www.chinedueagwunobi.co.uk` | Redirects root to www |
| `CNAME` | `_67e8771dc27889bd94131b109041defc` | `_f0e0dabe6c74451ed1b0a67896d509bb.jkddzztszm.acm-validations.aws` | ACM SSL validation |
| `CNAME` | `_85d34f33907b5ccbb93921d31f95e9ae.www` | `_966f924519de4e019c3a385ab774cdbb.jkddzztszm.acm-validations.aws` | ACM SSL validation (www) |

### SSL Certificate

- Provider: AWS Certificate Manager (ACM)
- Region: `us-east-1` (required for CloudFront)
- ARN: `arn:aws:acm:us-east-1:339713159705:certificate/a6ce3e45-c1b8-40c7-9f75-2f0f1497347a`
- Domains covered: `chinedueagwunobi.co.uk` and `www.chinedueagwunobi.co.uk`
- Validation method: DNS (CNAME records in GoDaddy)
- Status: Issued

### To Renew or Update the Domain Setup

ACM certificates auto-renew as long as the validation CNAME records remain in GoDaddy DNS — do not delete them.

If you ever change domain registrar, recreate the same 4 DNS records above in the new provider.
