const app = Vue.createApp({
  //data and functions
  //   template: ' <h2>TEMPLATE</h2>',
  data: () => {
    return {
      firstName: 'Musa',
      lastName: 'Yuxel',
      age: 33,
      isOlder: false,
    };
  },
  methods: {
    increaseNumber() {
      this.age++;
      this.isOlder = this.age > 35;
    },
  },
});
app.mount('#app');
