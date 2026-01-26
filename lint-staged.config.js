module.exports = {
  '*.{js,jsx,mjs,ts,tsx,json,mdx,css,html,yml,yaml,scss}': [
    'yarn format',
    'yarn linter',
    'git add .'
  ]
};
