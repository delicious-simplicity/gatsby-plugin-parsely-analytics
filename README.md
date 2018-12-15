# gatsby-plugin-parsely-analytics

Easily add Parse.ly to your Gatsby site.

## Install

This is currently a WIP local Gatsby plugin. To use, place the code in the `plugins` folder in the root of your project like this:

```
plugins
└── gatsby-plugin-parsely-analytics
```

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-parsely-analytics',
      options: {
        site: 'YOUR_PARSELY_SITE_ID', // apikey
      },
    },
  ],
}
```
