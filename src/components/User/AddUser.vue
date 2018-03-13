<template lang="html">
  <form v-on:submit="onSubmit" class="add-user-form">
    <div class="form-wrapper">
      <label for="github-username">Github Username</label>
      <input id="github-username" type="text" name="github-username" value="">
    </div>
    <input type="submit" name="Submit" class="button" value="Add User">
  </form>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'add-user',
    methods: {
      onSubmit(event) {
        event.preventDefault();

        const form = event.target;
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

<style scoped>
  input[type=submit] {
    -moz-appearance: none;
    -webkit-appearance: none;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #fff;
    height: 35px;
    margin: 0;
    padding: .5em 1em;
    position: relative;
    top: 19px;
  }
</style>
