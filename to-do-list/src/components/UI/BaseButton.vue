<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-size: 16px;
  background-color: rgb(236, 130, 147);
  border: 1px solid rgb(228, 147, 160);
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: rgb(235, 115, 135);
  border-color: #e7b1cc;
}

.flat {
  background-color: transparent;
  color: rgb(236, 130, 147);
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>