<template>
  <BaseCard>
    <ul>
      <li v-for="res in resources" :key="res.id">
        <header>
          <h3>{{ res.title }}</h3>
          <BaseButton mode="flat" @click="deleteResource(res.id)">Delete</BaseButton>
        </header>
        <p>{{ res.description }}</p>
        <nav>
          <a :href="res.link">View Resource</a>
        </nav>
      </li>
    </ul>
  </BaseCard>
</template>

<script>
import BaseButton from './UI/BaseButton.vue';
import BaseCard from './UI/BaseCard.vue'
export default {
  inject: ['resources', 'deleteResource'],
  components: {
    BaseButton,
    BaseCard
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

li {
  margin: auto;
  max-width: 40rem;
  margin-bottom: 5px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce0045;
}

a:hover,
a:active {
  color: #ce0045;
}
</style>