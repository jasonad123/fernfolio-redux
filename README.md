[![Netlify Status](https://api.netlify.com/api/v1/badges/64ccb239-30ed-454d-bb3f-d377dd7f08f5/deploy-status)](https://app.netlify.com/sites/fernfolio-redux/deploys)

![Cloudflare Pages Status](https://img.shields.io/endpoint?url=https://cloudflare-pages-badges.jasonadle2.workers.dev/?projectName=fernfolio-redux)

# Fernfolio Redux — An 11ty Portfolio Template
Launch your personal portfolio in minutes and modify content without opening a code editor!

<img width="1280" alt="fernfolio screenshot" src="https://raw.githubusercontent.com/TylerMRoderick/fernfolio-11ty-template/master/fernfolio-preview.jpeg">

### <pre>🖥  [Demo in Netlify](https://fernfolio-redux.netlify.app/)</pre>

### <pre>🖥  [Demo in Cloudflare Pages](https://fernfolio-redux.pages.dev)</pre> 

## 🤔 What is this?
An [Eleventy](https://www.11ty.io/) theme designed to simplify the process of creating a beautiful portfolio and blog. Tightly integrated with [Decap CMS](https://decapcms.org/) for flexible, Git-powered content management.

## 🆕 Why call it a redux?
This started because I really liked the work that the originator of this project had done, but there were some changes to the code base that came through as I was working on my own site and I figured this would be an awesome time to learn how to do this kind of stuff. So now we have the Fernfolio Redux!

## What's changed?
* Migrated from Netlify CMS to Decap CMS (same product, different name)
* Migrated from Eleventy v2 to v3
* Responsive images are now handled by [eleventy-img](https://www.11ty.dev/docs/plugins/image/) and its new `eleventyImageTransformPlugin`
* Addressed a vulnerability in `htmlminifer`
* Added a Cloudflare Pages demo deployment (configured via the Cloudflare dashboard, not a repo config file)
* Migrated from the deprecated [Turbolinks](https://github.com/turbolinks/turbolinks) to [Turbo](https://github.com/hotwired/turbo)
* Migrated from npm to pnpm for package management


## ✨ Features
* Deep integration with [Decap CMS](https://decapcms.org/). Modify content without opening a code editor.
* Customizable blog and project pages with tag support
* Working contact form powered by [Netlify Forms](https://www.netlify.com/products/forms/)
* Fast page speeds and high lighthouse scores
* Uses Markdown for content files and Liquid for layouts
* 100% Javascript framework free
* SCSS support with sane base styles
* Continuous Deployment workflow via [Netlify](https://www.netlify.com/)
* Responsive images generated at build time
* Minified HTML with [HTMLMinifier](https://github.com/terser/html-minifier-terser)
* Minified CSS with [cssnano](https://github.com/cssnano/cssnano)
* [Turbo](https://github.com/hotwired/turbo) integration to enable instant navigation without page refresh
* Useful template filters built in

## 🚀 Quick Start
### 1. Click the "Deploy to Netlify" button below

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jasonad123/fernfolio-redux&stack=cms)

This will clone this repo to your github account and will deploy a copy of the demo website to your Netlify
account (you can create an account during this process if you don't have one).

### 2. Setup authentication

After deploying this project, Netlify Identity will add you as a CMS user and
will email you an invite. Open that email, hit the "Accept the invite" link, and that should redirect you to the deployed site. From there, you can add your password to finish user setup.

### 3. Edit some content
Now that you are added as a CMS user, add `/admin` to the end of your site url, refesh the page, and log in using your new credentials. You should now see the content dashboard. Now you can start editing content!

Any changes saved in the CMS will trigger a git commit in your repo. That new commit will then trigger an auto-deployplent on Netlify.

## 🏠 Local Development
If you want to test things locally before deploying, follow the steps below:

- open your terminal
- Clone the repo locally `git clone https://github.com/jasonad123/fernfolio-redux.git`
- Navigate to root folder: `cd fernfolio-redux/`
- Install the goods: `pnpm install`
- Run it: `pnpm start`
- You should now be able to see everything running on localhost:8080

### Editing content locally via the CMS

By default `/admin` is configured for `git-gateway`, which only works against a deployed
Netlify Identity setup - it won't let you log in on localhost. To actually exercise the
CMS UI locally instead of hand-editing Markdown/JSON files:

1. Uncomment `local_backend: true` in `src/admin/config.yml`.
2. In a separate terminal, run `pnpm run cms:local` to start the local proxy server
   (listens on port 8081 by default).
3. With `pnpm start` also running, visit `localhost:8080/admin` - it'll write changes
   straight to your working directory instead of a git commit.

Remember to comment `local_backend: true` back out before deploying.

## 💻 Development Scripts

**`pnpm start`**

> Run 11ty with hot reload at localhost:8080

**`pnpm run build`**

> Generate minified production build

Use this as the "Publish command" if needed by hosting such as Netlify.

## 💡 Dark mode

To enable switching from light to dark mode, `global.json` has some settings:

- `enable_theme_switch`: set to `true` if you want your visitors to be able to switch theme
- `default_theme`: set to `dark` or another value (which always means `light`)
- `use_system_theme`: set to `true` if you want the system preference to be enforced

## 🔍 SEO

Every page includes basic meta tags, Open Graph, and Twitter Card tags, plus a generated
`/sitemap.xml` and `/robots.txt`. To get absolute URLs in the sitemap, `og:url`, and the
`robots.txt` sitemap reference, set `url` in `src/_data/metadata.json` to your site's
deployed URL (e.g. `"https://example.com"`) - it's left blank by default since this is a
template and there's no one correct value.

## 🎩 Common issues

If you change the repo that was created at deploy time from public to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".

## 🗣 Bug reports, feature requests, etc.

This is a side project for me and I always welcome questions/comments. If you run into any problems or have a feature request, please open an issue. I try to read every one and will gladly assist you whenever possible.

## Credit
*All the credit for originally developing `fernfolio` goes to [Tyler Roderick](https://github.com/TylerMRoderick) - thank you for developing an awesome 11ty starter!*
*This project was originally forked from [fernfolio-11ty-template](https://github.com/TylerMRoderick/fernfolio-11ty-template) which itself was forked from [eleventy-netlify-boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate), but completely revamped to match the needs of a modern porfolio.*
