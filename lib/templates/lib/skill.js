import { Response } from "alexa-lambda-skill";

export default class <%= className %> {
  launch() {
    return Response.say("<%= className %> launched!");
  }

  hello(slots) {
    const { name = "world" } = slots;
    return Response.say(`Hello ${name}`);
  }

  intent(name, slots) {
    return Response.say(`Intent ${name} triggered. Check the card for more information.`).card(name, JSON.stringify(slots));
  }
}
