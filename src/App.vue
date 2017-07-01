<template lang="html">
  <div class="app-wrapper">
    <h1 class="masthead">Github Pull Requests</h1>
    <pull-requests />
    <repos />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Repos from './components/Repos/ReposContainer';
  import PullRequests from './components/PRs/PRContainer';

  export default {
    name: 'app',
    components: {
      Repos,
      PullRequests,
    },
    methods: {
      ...mapActions([
        'setReposOnMount',
      ]),
    },
    mounted() {
      this.setReposOnMount();
    },
  };
</script>

<style lang="css">
  body {
    background-color: rgba(28,29,33,1);
    color: rgba(255,255,255,1);
    font-family: "Open Sans", sans-serif;
    line-height: 1.45em;
    margin: 1em;
  }

  code {
    background-color: #eee;
    display: inline-block;
    font-family: 'Inconsolata', monospace;
    padding: 0.25em 1em;
  }

  .masthead {
    margin-bottom: 1em;
  }
</style>
