<template lang="html">
  <div class="app-wrapper">
    <div class="masthead">
      <h1>Github Pull Requests</h1>
      <logout v-if="getUser" />
    </div>
    <add-user v-if="!getUser" />
    <div v-if="getUser" class="main">
      <pull-requests />
      <repos />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import AddUser from './components/User/AddUser';
  import Logout from './components/User/Logout';
  import Repos from './components/Repos/ReposContainer';
  import PullRequests from './components/PRs/PRContainer';

  export default {
    name: 'app',
    components: {
      Repos,
      Logout,
      AddUser,
      PullRequests,
    },
    computed: {
      ...mapGetters([
        'getUser',
      ]),
    },
    methods: {
      ...mapActions([
        'setReposOnMount',
        'setUserOnMount',
      ]),
    },
    mounted() {
      this.setReposOnMount();
      this.setUserOnMount();
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
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
  }

  .masthead h1 {
    font-size: 24px;
    line-height: 1.45em;
  }

  form {
    display: flex;
    flex-wrap: wrap;
  }

  label {
    display: block;
  }

  input {
    margin-right: 1em;
  }

  button {
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: transparent;
    border: 0;
    display: inline-block;
    flex-shrink: 0;
    margin: 1em 1em 0 0;
  }

  .button {
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    padding: 0.5em 1em;
  }
</style>
