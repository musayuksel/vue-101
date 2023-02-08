const app = Vue.createApp({
  //data and functions
  //   template: ' <h2>TEMPLATE</h2>',
  data: () => {
    return {
      firstName: 'Musa',
      lastName: 'Yuxel',
      age: 33,
      isOlder: false,
      box1Text: 'Mouse over',
      box2Text: 'Mouse leave',
      box3Text: 'Double Click ',
      mouseEventHeader: 'There is no event',
      isToggled: false,
      people: [
        { name: 'musa', isPD: true },
        { name: 'Alex', isPD: false },
        { name: 'Joe', isPD: true },
      ],
    };
  },
  methods: {
    increaseNumber() {
      this.age++;
      this.isOlder = this.age > 35;
    },
    decreaseNumber() {
      this.age--;
      this.isOlder <= 35;
    },
    handleEvent(event) {
      this.mouseEventHeader = event.type;
    },
    handleMouseMove(event) {
      this.mouseEventHeader = `Mouse X position is: ${event.offsetX}`;
    },
    handleToggle() {
      this.isToggled = !this.isToggled;
    },
  },
  computed: {
    productDevs() {
      return this.people.filter((person) => person.isPD);
    },
  },
});
app.mount('#app');
