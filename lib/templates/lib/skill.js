export default class <%= _.classify(name) %> {
  launch() {
    console.log("<%= _.classify(name) %> launched!");
  }

  myIntent(slots) {
    console.log(`Intent myIntent called on <%= _.classify(name) %> with data "${JSON.stringify(slots)}"`);
  }

  intent(name, slots) {
    console.log(`Intent "${name}" called on <%= _.classify(name) %> with data "${JSON.stringify(slots)}"`);
  }
}
