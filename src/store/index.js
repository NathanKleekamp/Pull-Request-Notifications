import Vue from 'vue';
import Vuex from 'vuex';
import { setPRs, setRepo, deleteRepo } from './mutations';
import { getPRs, getRepos } from './getters';
import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    repos: [],
    pull_requests: [],
  },
  getters: {
    getPRs,
    getRepos,
  },
  mutations: {
    setPRs,
    setRepo,
    deleteRepo,
  },
  actions: {
    fetchReposPRs: actions.fetchReposPRs,
    setRepo: actions.setRepo,
    setReposOnMount: actions.setReposOnMount,
    onDeleteRepo: actions.onDeleteRepo,
  },
});

export default store;
