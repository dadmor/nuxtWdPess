# gdnuxtbp

> My sensational Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

# GD
Add to packages and check
// "nuxt-vuex-localstorage": "^1.2.1",
// "vuex-localstorage": "^1.0.0"


# Htaccess

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Fonts
# Add correct content-type for fonts
AddType application/vnd.ms-fontobject .eot 
AddType application/x-font-ttf .ttf
AddType application/x-font-opentype .otf
AddType application/font-woff .woff
AddType application/font-woff2 .woff2
AddType image/svg+xml .svg

ExpiresByType application/vnd.ms-fontobject "access plus 1 year"
ExpiresByType application/x-font-ttf "access plus 1 year"
ExpiresByType application/x-font-opentype "access plus 1 year"
ExpiresByType application/font-woff "access plus 1 year"
ExpiresByType application/font-woff2 "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 year"

