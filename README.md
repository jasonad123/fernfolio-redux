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
* Added deploy information for Cloudflare Pages via `wrangler.toml`
* TODO migrate from the now-deprecated [Turbolinks](https://github.com/turbolinks/turbolinks) to [Turbo](https://github.com/hotwired/turbo)


## ✨ Features
* Deep integration with [Decap CMS](https://decapcms.org/). Modify content without opening a code editor.
* Customizable blog and project pages with tag support
* Working contact form powered by [Netlify Forms](https://www.netlify.com/products/forms/)
* Fast page speeds and high lighthouse scores
* Uses Markdown for content files and Nunjucks for layouts
* 100% Javascript framework free
* SCSS support with sane base styles
* Continuous Deployment workflow via [Netlify](https://www.netlify.com/)
* Responsive images generated at build time
* Minified HTML with [HTMLMinifier](https://github.com/terser/html-minifier-terser)
* Minified CSS with [cssnano](https://github.com/cssnano/cssnano)
* [Turbolinks](https://github.com/turbolinks/turbolinks) integration to enable instant navigation without page refresh
* Useful Nunjuck filters built in

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
- Clone the repo locally `git clone https://github.com/TylerMRoderick/fernfolio-11ty-template.git`
- Navigate to root folder: `cd fernfolio-11ty-template/`
- Install the goods: `npm install`
- Run it: `npm start`
- You should now be able to see everything running on localhost:8080

## 💻 Development Scripts

**`npm start`**

> Run 11ty with hot reload at localhost:8080

**`npm run build`**

> Generate minified production build

Use this as the "Publish command" if needed by hosting such as Netlify.

## 💡 Dark mode

To enable switching from light to dark mode, `global.json` has some settings:

- `enable_theme_switch`: set to `true` if you want your visitors to be able to switch theme
- `default_theme`: set to `dark` or another value (which always means `light`)
- `use_system_theme`: set to `true` if you want the system preference to be enforced

## 🎩 Common issues

If you change the repo that was created at deploy time from public to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".

## 🗣 Bug reports, feature requests, etc.

This is a fun side project for me and I always welcome questions/comments. If you run into any problems or have a feature request, please open an issue. I try to read every one and will gladly assist you whenever possible.

## Credit
*All the credit for originally developing fernfolio goes to [Tyler Roderick](https://github.com/TylerMRoderick) - thank you for developing an awesome 11ty starter!*
*This project was originally forked from [eleventy-netlify-boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate), but completely revamped to match the needs of a modern porfolio.*
