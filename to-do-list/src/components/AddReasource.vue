<template>
  <BaseDialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </BaseDialog>
  <BaseCard>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="descInput"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <BaseButton type="submit">Add Resource</BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script>
import BaseButton from './UI/BaseButton.vue';
import BaseCard from './UI/BaseCard.vue';
import BaseDialog from './UI/BaseDialog.vue';

export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false,
    }
  },
  components: {
    BaseButton,
    BaseCard,
    BaseDialog
  },
  methods: {
    submitData() {
      let title = this.$refs.titleInput.value;
      let description = this.$refs.descInput.value;
      let link = this.$refs.linkInput.value;
      console.log(title);
      console.log(description);
      console.log(link);
      if (title.trim() === '' || description.trim() === '' || link.trim() === '') {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(title, description, link)
    },
      confirmError() {
      this.inputIsInvalid = false;
    }
  }

}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: pink;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>