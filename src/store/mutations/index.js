import { without, getObjectIndex } from '../../utilities';

export const setRepo = (state, repo) => {
  const current = state;
  current.repos = state.repos.concat(repo);
};

export const deleteRepo = (state, repo) => {
  const current = state;
  const indexToDelete = getObjectIndex(state.repos, { repo }, 'repo');
  const update = without(indexToDelete, state.repos);
  current.repos = update;
};

export const setPRs = (state, PRs) => {
  const current = state;
  current.pull_requests = state.pull_requests.concat(PRs);
};
