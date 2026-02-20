# Krido Automations

> AI-powered business automation — email outreach, WhatsApp bots, medical AI, and custom workflow systems.

**Live site:** _(add your Vercel URL here after deployment)_

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Styling | Tailwind CSS v3 + custom CSS |
| Routing | React Router v7 |
| Icons | Lucide React |
| Email / Contact Form | Web3Forms |
| Deployment | Vercel |

---

## Project Structure

```
krido-automations/
├── public/
│   └── index.html          # HTML shell + SEO meta tags
├── src/
│   ├── data.js             # ← ALL CONTENT LIVES HERE (edit this)
│   ├── App.js              # Homepage
│   ├── Projects.js         # /projects page
│   ├── index.js            # React entry + Router setup
│   └── index.css           # Global styles + animations
├── vercel.json             # Vercel SPA routing config (required)
├── tailwind.config.js      # Tailwind theme extensions
└── package.json
```

---

## Managing Content

**One file to edit for all content:** `src/data.js`

### Add a Testimonial

Open `src/data.js` and paste a new block inside the `testimonials` array:

```js
{
  content: "Client quote here...",
  author: "Full Name",
  role: "Job Title",
  company: "Company Name",  // leave "" if no company
  rating: 5,
},
```

### Add a Project

Paste a new block inside the `projects` array:

```js
{
  id: 4,                              // increment the id
  category: "Workflow Automation",    // see categories below
  client: "Client Name",
  title: "Project Title",
  subtitle: "One-line summary.",
  description: "3–4 sentences about what was built and the outcome.",
  tags: ["n8n", "Gmail", "Gemini"],
  date: "Jun 2025",
  gradient: "from-violet-600 via-purple-700 to-indigo-800",
  visual: "workflow",     // 'email' | 'chatbot' | 'workflow' | 'seo'
  screenshot: null,       // or '/images/your-screenshot.png'
  stat1: { label: "Hours saved / week", value: "20+" },
  stat2: { label: "ROI", value: "4×" },
},
```

**Available categories:** `Workflow Automation` · `Python Automation` · `Email Automation` · `AI Agent` · `SEO & Marketing`

### Add a Real Screenshot

1. Drop your image into `public/images/` (create the folder if needed)
2. In `data.js`, set `screenshot: '/images/your-filename.png'` on that project

### Change Homepage Featured Projects

Edit `featuredProjectIds` at the bottom of `data.js` to control which 3 projects appear in the "What We've Built" section:

```js
export const featuredProjectIds = [1, 2, 3]; // use any project ids
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm start

# Production build
npm run build
```

---

## Deploying to Vercel

### First deployment

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Create React App — no config needed
5. Click **Deploy**

The `vercel.json` file in the root handles client-side routing so that direct visits to `/projects` work correctly.

### Subsequent deployments

Just push to your GitHub main branch — Vercel auto-deploys on every push.

---

## Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) (free, no backend required).

The access key is already configured in `src/App.js`. To change it:

1. Go to [web3forms.com](https://web3forms.com) → get a free access key
2. In `src/App.js`, find the `handleSubmit` function and replace the `access_key` value

---

## Environment Notes

- No `.env` file is needed — there are no secrets in this project
- The build output goes to `/build` (excluded from git via `.gitignore`)
- `node_modules` is excluded from git — run `npm install` after cloning
