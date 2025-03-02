<template>
  <BaseCard>
    <BaseButton>Stored Resources</BaseButton>
    <BaseButton mode="flat">Add Resource</BaseButton>
  </BaseCard>
  <BaseCard>
    <ul >
      <li v-for="res in storedResources">
        <header>
          <h3>{{ res.title }}</h3>
          <base-button mode="flat">Delete</base-button>
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
import BaseCard from './UI/BaseCard.vue';

export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
  }
  },
  components: {
    BaseCard,
    BaseButton
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