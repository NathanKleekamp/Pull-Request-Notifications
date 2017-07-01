<template lang="html">
  <div class="component-wrapper">
    <p>
      <a v-on:click="onToggleForm" v-if="!isFormDisplayed" class="button">Add New Repo</a>
    </p>
    <form v-if="isFormDisplayed" class="add-repo-form" v-on:submit.prevent="onSubmit">
      <div class="repo-name-wrapper form-wrapper">
        <label for="repo-name">Repo Name</label>
        <input id="repo-name" type="text" name="repo-name" value="">
      </div>
      <div class="repo-owner-wrapper form-wrapper">
        <label for="repo-ownder">Repo Owner</label>
        <input  id="repo-owner"type="text" name="repo-owner" value="">
      </div>
      <button v-on:click="onSubmit" type="button" name="Submit" class="button">Add Repo</button>
      <button v-on:click="onToggleForm" type="button" name="Close" class="button">Close</button>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'add-repo',
    data() {
      return {
        isFormDisplayed: false,
      };
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();

        const form = event.target.form;
        const formData = new FormData(form);
        const repo = formData.get('repo-name').trim().toLowerCase();
        const owner = formData.get('repo-owner').trim().toLowerCase();

        if (repo.length && owner.length) {
          this.setRepo({ repo, owner });
        }

        this.isFormDisplayed = !this.isFormDisplayed;
      },
      onToggleForm(event) {
        event.preventDefault();
        this.isFormDisplayed = !this.isFormDisplayed;
      },
      ...mapActions([
        'setRepo',
      ]),
    },
  };
</script>

<style scoped lang="css">
  .component-wrapper {
    border-top: 1px solid rgba(255, 255, 255, 1);
    padding-top: 1em;
    margin-top: 2em;
  }
</style>
