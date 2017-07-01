<template lang="html">
  <div id="pull-requests" class="component-wrapper">
    <pull-request v-for="pr in getPRs" :title="pr.title" :link="pr.url" :branch="pr.branch" :description="pr.body" :key="pr.id" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import PullRequest from './PR';

  export default {
    name: 'pull-requests',
    components: {
      PullRequest,
    },
    computed: {
      ...mapGetters([
        'getPRs',
      ]),
    },
  };
</script>

<style lang="css">
</style>
