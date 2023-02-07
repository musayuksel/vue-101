const app = Vue.createApp({
  //data and functions
  //   template: ' <h2>TEMPLATE</h2>',
  data: () => {
    return { firstName: 'Musa', lastName: 'Yuxel', age: 33 };
  },
  methods: {
    increaseNumber() {
      this.age++;
    },
  },
});
app.mount('#app');
