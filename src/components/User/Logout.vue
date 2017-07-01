<template lang="html">
  <p><a v-on:click="onClick" class="logout">Logout</a></p>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'logout',
    methods: {
      onClick(event) {
        event.preventDefault();
        this.deleteData();
      },
      ...mapActions([
        'deleteData',
      ]),
    },
  };
</script>

<style scoped lang="css">
  .logout {
    cursor: pointer;
  }
</style>
