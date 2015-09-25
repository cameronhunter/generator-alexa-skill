export default class <%= _.camelize(name) %> {
  launch() {
    console.log("<%= _.camelize(name) %> launched!");
  }

  myIntent(slots) {
    console.log(`Intent myIntent called on <%= _.camelize(name) %> with data "${JSON.stringify(slots)}"`);
  }

  intent(name, slots) {
    console.log(`Intent "${name}" called on <%= _.camelize(name) %> with data "${JSON.stringify(slots)}"`);
  }
}
