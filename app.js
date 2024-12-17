const app = Vue.createApp({
  data() {
    return {
      name: "karema",
      age: 23,
      url: "GYU0EW3WEAEc0D9.png"
    }
  },
  methods: {
     calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    }
     
  }  
})
app.mount('#assignment');