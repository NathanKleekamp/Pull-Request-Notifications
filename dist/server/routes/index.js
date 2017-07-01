const fetch = require('node-fetch');
const TOKEN = require('../constants').GITHUB_TOKEN;

module.exports = (app) => {
  app.get('/api/v1/pull_requests', (req, res) => {
    const url = `https://api.github.com/repos/${req.query.owner}/${req.query.repo}/pulls?access_token=${TOKEN}&per_page=100`
    fetch(url)
      .then(resp => resp.json())
      .then(response => res.json(response))
      .catch(error => console.error('error', error));
  });

  app.get('*', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
  });
};
