# pull-request-notifications

> Get notified when a PR has been assigned to you

You need to create a `constants.js` file in `/dist/server/` and add a [Github Personal Access Token](https://git.io/vS2mQ):

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

# start server in production
npm start

# run with a chrome-less version of Firefox on localhost (in production mode)
/Applications/Firefox.app/Contents/MacOS/firefox -chrome http://localhost:8080
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
