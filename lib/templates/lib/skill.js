export default class <%= className %> {
  launch() {
    console.log("<%= className %> launched!");
  }

  myIntent(slots) {
    console.log(`Intent myIntent called on <%= className %> with data "${JSON.stringify(slots)}"`);
  }

  intent(name, slots) {
    console.log(`Intent "${name}" called on <%= className %> with data "${JSON.stringify(slots)}"`);
  }
}
