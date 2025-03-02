
<template>
  <BaseCard>
  <BaseButton>Stored Resources</BaseButton>
  <BaseButton :mode="flat">Add Resource</BaseButton>
  </BaseCard>
</template>

<script>
import BaseButton from './UI/BaseButton.vue';
import BaseCard from './UI/BaseCard.vue';

export default {
  components: {
    BaseCard,
    BaseButton
  } 
}
</script>