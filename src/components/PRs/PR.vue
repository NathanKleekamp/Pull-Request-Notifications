<template lang="html">
  <div class="component-wrapper">
    <div class="wrapper collapsed">
      <article>
        <header>
          <h3 class="title"><a :href="link" target="_blank">{{ title }}</a></h3>
        </header>
        <p class="sub-heading branch-name"><a href="#" target="_blank"><code>{{ branch }}</code></a></p>
        <p class="description">{{ description }}</p>
      </article>
      <div v-on:click="toggleOverlay" class="overlay"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pull-request',
    props: ['title', 'branch', 'description', 'link'],
    methods: {
      toggleOverlay() {
        const wrapper = this.$el.querySelector('.wrapper');
        const isCollapsed = wrapper.classList.contains('collapsed');
        wrapper.classList.toggle('collapsed', !isCollapsed);
      },
    },
  };
</script>

<style scoped lang="css">
  .component-wrapper {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(28, 29, 33, 1);
    margin-bottom: 1em;
    padding: 0.5em 1em;
  }

  .wrapper {
    position: relative;
  }

  a {
    color: rgba(28, 29, 33, 1);
  }

  .sub-heading {
    font-size: 0.85em;
  }

  .close {
    cursor: pointer;
    display: none;
    position: absolute;
    right: -0.5em;
    top: 0;
  }

  .overlay {
    cursor: pointer;
    padding: 0.5em;
  }

  .fa-chevron-circle-up {
    left: calc(50% - 16px);
    position: relative;
  }

  .collapsed article {
    height: 4.6875em;
    overflow: hidden;
  }

  .collapsed .title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .collapsed .fa-chevron-circle-up {
    transform: rotate(180deg);
  }

  .collapsed .overlay {
    border-top: 1px solid rgba(231, 231, 231, 1);
  }
</style>
