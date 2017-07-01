<template lang="html">
  <div id="repositories" class="component-wrapper">
    <h2>Monitored Repos</h2>
    <repo v-for="repo in getRepos" :name="repo.repo" :owner="repo.owner" :key="repo.id"></repo>
    <add-repo />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import AddRepo from './AddRepo';
  import Repo from './Repo';

  export default {
    name: 'repos',
    components: {
      AddRepo,
      Repo,
    },
    computed: {
      ...mapGetters([
        'getRepos',
      ]),
    },
    methods: {
      ...mapActions([
        'fetchReposPRs',
      ]),
    },
    updated() {
      const fetchReposPRs = this.fetchReposPRs;
      const getRepos = this.getRepos;

      (function poll() {
        fetchReposPRs(getRepos);
        setTimeout(poll, 65000);
      }());
    },
  };
</script>

<style scoped lang="css"></style>
