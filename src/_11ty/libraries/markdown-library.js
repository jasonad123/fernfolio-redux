let markdownIt = require('markdown-it');
let anchor = require('markdown-it-anchor');

// Customize Markdown library and settings
let markdown = markdownIt({
  html: true,
  breaks: true,
  linkify: true
}).use(anchor, {
  permalink: anchor.permalink.linkInsideHeader({
    symbol: '#',
    placement: 'before'
  })
});

module.exports = markdown;