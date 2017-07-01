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
    timeout: 0,
    mounted() {
      const poll = () => {
        this.fetchReposPRs(this.getRepos);
        this.timeout = setTimeout(poll, 15000);
      };

      (poll());
    },
    beforeDestroy() {
      clearTimeout(this.timeout);
    },
  };
</script>

<style scoped lang="css"></style>
