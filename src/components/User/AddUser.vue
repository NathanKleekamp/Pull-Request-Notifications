<template lang="html">
  <form v-on:submit.prevent="onSubmit" class="add-user-form">
    <div class="form-wrapper">
      <label for="github-username">Github Username</label>
      <input id="github-username" type="text" name="github-username" value="">
    </div>
    <button v-on:click="onSubmit" type="button" name="Submit" class="button">Add User</button>
  </form>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'add-user',
    methods: {
      onSubmit(event) {
        event.preventDefault();

        const form = event.target.form;
        const formData = new FormData(form);
        const user = formData.get('github-username').trim().toLowerCase();

        if (user) {
          this.setUser(user);
        }
      },
      ...mapActions([
        'setUser',
      ]),
    },
  };
</script>
