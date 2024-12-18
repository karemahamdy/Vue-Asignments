const app = Vue.createApp({
  data() {
    return {
      number: 0 ,
    
    }
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet!';
      } else if (this.number === 37) {
        return this.number;
      } else {
        return 'Too much!';
      }
    }
  },
  watch: {
    result() {
      console.log('Watcher executing...');
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    }
  },
 methods: {
   Add(num) {
     this.number = this.number + num;
     this.result = this.number
   }
 }

})

app.mount("#assignment")