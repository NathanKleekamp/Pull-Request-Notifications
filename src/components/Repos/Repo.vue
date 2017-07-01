<template lang="html">
  <div class="component-wrapper">
    <h3>{{ owner }}: {{ name }}</h3>
    <i v-on:click="onDeleteRepo" :data-repo-name="name.toLowerCase()" class="fa fa-trash delete" aria-hidden="true"></i>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'repo',
    props: ['name', 'owner'],
    methods: {
      ...mapActions([
        'onDeleteRepo',
      ]),
    },
  };
</script>

<style scoped lang="css">
  .component-wrapper {
    align-items: baseline;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    padding: 0.5em 1em;
  }

  h3 {
    color: rgba(28, 29, 33, 1);
    margin: 0;
  }

  .delete {
    color: rgba(255, 91, 91, 1);
    cursor: pointer;
  }
</style>
