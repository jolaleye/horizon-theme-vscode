<template>
  <button @click="handleClick" :class="{ active }"></button>
</template>

<script>
export default {
  data() {
    return {
      active: true
    };
  },
  methods: {
    handleClick() {}
  }
};
</script>

<style lang="scss" scoped>
.css {
  color: salmon;
}
</style>
