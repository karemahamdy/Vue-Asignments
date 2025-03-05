function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({ 
  data () {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    }
  },
  watch: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },
  }, 
  methods: { 
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
  }
})