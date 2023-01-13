<template>
  <div>
    <i-nav class="_justify-content:center">
      <i-nav-item to="/">Home</i-nav-item>
      <i-nav-item to="/about">About</i-nav-item>
    </i-nav>
  </div>
</template>
<script setup>
const route = useRoute();
</script>
<style lang="scss" scoped>
a.router-link-exact-active {
  color: rgb(221, 54, 12);
  font-weight: 600;
}

a.nav-item:hover {
  color: green;
  font-weight: 700;
}
</style>
