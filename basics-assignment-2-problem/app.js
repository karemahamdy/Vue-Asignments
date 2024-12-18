const app = Vue.createApp({
  data() {
    return {
      userInput: '', confirmedInput: ''
    }
  },
  methods: {
    ShowAlert() {
      alert("alert")
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    }
  }
})

app.mount('#assignment');