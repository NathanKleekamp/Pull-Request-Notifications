const fetch = require('node-fetch');
const TOKEN = require('../constants').GITHUB_TOKEN;

module.exports = (app) => {
  const etags = {};
  const jsons = {};

  app.get('/api/v1/pull_requests', (req, res) => {
    const repo = req.query.repo;
    const url = `https://api.github.com/repos/${req.query.owner}/${repo}/pulls?access_token=${TOKEN}&per_page=100`
    const options = { headers: { 'If-None-Match': etags[repo] } };
    fetch(url, options)
      .then((resp) => {
        const status = resp.headers.get('status');
        console.log(`\nRepo: ${repo}`);
        console.log(`http status: ${ status }`);

        if (status === '200 OK') {
          etags[repo] = resp.headers.get('etag');
          jsons[repo] = resp.json();
          return jsons[repo];
        }

        console.log(`x-ratelimit-remaining: ${ resp.headers.get('x-ratelimit-remaining') }`);
        return jsons[repo];
      })
      .then(response => res.json(response))
      .catch(error => console.error('error', error));
  });

  app.get('*', (req, res) => {
    res.sendFile('../public/index.html', { root: __dirname });
  });
};
