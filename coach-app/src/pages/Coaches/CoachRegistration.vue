<template>
  <section>
    <BaseCard>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </BaseCard>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
import BaseCard from '../../components/ui/BaseCard.vue';

export default {
  components: {
    CoachForm,
    BaseCard
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    }
  }
};
</script>