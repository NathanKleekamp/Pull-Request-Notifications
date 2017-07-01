# pull-request-notifications

> Get notified when a PR has been assigned to you

You need to create a `constants.js` file in `/app/dist/server/` and add your Github Personal Access Token:

```js
module.exports = {
  GITHUB_TOKEN: ''
};
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:5000
npm run dev
npm run start # api proxy

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).