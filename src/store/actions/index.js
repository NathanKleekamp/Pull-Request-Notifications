import {
  saveToLocalStorage,
  getFromLocalStorage,
  getObjectIndex,
  without,
} from '../../utilities';

const pullRequestsFilter = (pullRequest) => {
  if (pullRequest.requested_reviewers.length) {
    const index = pullRequest.requested_reviewers.map(reviewer => reviewer.login).indexOf('NathanKleekamp');

    if (index !== -1) {
      return true;
    }
  }

  return false;
};

const getPRObjects = pullRequests => pullRequests.filter(pullRequestsFilter)
  .map(pullRequest => ({
    url: pullRequest.url,
    id: pullRequest.id,
    body: pullRequest.body,
    title: pullRequest.title,
    branch: pullRequest.head.ref,
  }));

export const fetchReposPRs = (context, repos) => {
  const fetches = repos.map(repo => fetch(`http://localhost:8080/api/v1/pull_requests?repo=${repo.repo}&owner=${repo.owner}`));

  Promise.all(fetches)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(responses => responses.forEach((response) => {
      const PRs = getPRObjects(response);

      if (PRs.length) {
        context.commit('setPRs', PRs);
      }
    }))
    .catch(error => console.error(error));
};

export const setRepo = (context, repo) => {
  const previous = getFromLocalStorage('repos') || [];

  if (previous.length) {
    const index = getObjectIndex(previous, repo, 'repo');

    if (index !== -1) return;
  }

  saveToLocalStorage('repos', previous.concat(repo));
  context.commit('setRepo', repo);
};

export const setReposOnMount = (context) => {
  const previous = getFromLocalStorage('repos') || [];
  context.commit('setRepo', previous);
};

export const onDeleteRepo = (context, event) => {
  const repo = event.target.getAttribute('data-repo-name');
  const savedRepos = getFromLocalStorage('repos');
  const indexToDelete = getObjectIndex(savedRepos, { repo }, 'repo');
  const update = without(indexToDelete, savedRepos);
  saveToLocalStorage('repos', update);

  context.commit('deleteRepo', repo);
};
