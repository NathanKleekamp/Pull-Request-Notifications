import { without, getObjectIndex } from '../../utilities';

const stateModel = {
  username: '',
  repos: [],
  pull_requests: [],
};

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
  current.pull_requests = PRs;
};

export const setUser = (state, user) => {
  const current = state;
  current.username = user;
};

export const dropState = (state) => {
  const current = state;
  current.username = stateModel.username;
  current.repos = stateModel.repos;
  current.pull_requests = stateModel.pull_requests;
};
