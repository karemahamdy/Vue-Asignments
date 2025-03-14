<template>
  <section>
    <BaseCard>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <header>
        <h4>Interested? Reach out now!</h4>
        <BaseButton link :to="contactLink">Contact</BaseButton>
      </header>
      <router-view></router-view>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area"></BaseBadge>
      <p>{{ description }}</p>
    </BaseCard>
  </section>
</template>

<script>
import BaseBadge from '../../components/ui/BaseBadge.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';

export default {
  props: ['id'],
  components: { BaseCard, BaseButton, BaseBadge },
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>

<style scoped> 
h4 {
  color: white;
  font-size: 24px;
}
</style>