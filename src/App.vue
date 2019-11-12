<template lang="pug">
div
  router-link(to="/home") home
  router-link(to="/chat") chat
  router-view
</template>

<style lang="scss">
@import './../node_modules/bulma/css/bulma.css';
</style>