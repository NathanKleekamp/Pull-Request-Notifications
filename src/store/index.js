import Vue from 'vue';
import Vuex from 'vuex';
import { setPRs, setRepo, deleteRepo, setUser, dropState } from './mutations';
import { getPRs, getRepos, getUser } from './getters';
import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: '',
    repos: [],
    pull_requests: [],
  },
  getters: {
    getPRs,
    getUser,
    getRepos,
  },
  mutations: {
    setPRs,
    setRepo,
    setUser,
    dropState,
    deleteRepo,
  },
  actions: {
    setRepo: actions.setRepo,
    setUser: actions.setUser,
    onDeleteRepo: actions.onDeleteRepo,
    fetchReposPRs: actions.fetchReposPRs,
    setReposOnMount: actions.setReposOnMount,
    setUserOnMount: actions.setUserOnMount,
    deleteData: actions.deleteData,
  },
});

export default store;
