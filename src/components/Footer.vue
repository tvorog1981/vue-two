<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
        <li v-for="link in links" :key="link.alias" class="navbar-item">
          <router-link :to="link.url" class="navbar-link">{{
            link.title
          }}</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    links: {
      type: Array,
      default: [],
    },
  },
};
</script>
