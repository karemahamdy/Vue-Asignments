<template>
  <BaseCard>
    <BaseButton @click="setSelectedTab('StoredResource')">Stored Resources</BaseButton>
    <BaseButton mode=" flat" @click="setSelectedTab('AddReasource')">
      Add Resource
    </BaseButton>
  </BaseCard>
  <component :is="selectedTab"></component>
</template>

<script>
import AddReasource from './AddReasource.vue';
import StoredResource from './StoredReasource.vue'
import BaseButton from './UI/BaseButton.vue';
import BaseCard from './UI/BaseCard.vue';

export default {

  data() {
    return {
      selectedTab: 'StoredResource',
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
    BaseButton,
    AddReasource,
    StoredResource
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
    }
  }
}
</script>
