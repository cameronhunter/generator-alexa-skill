import { Response } from "alexa-lambda-skill";

export default class <%= className %> {
  launch() {
    return Response.say("<%= className %> launched!");
  }

  hello(slots) {
    const { name = "world" } = slots;
    return Response.say(`Hello ${name}`).card("<%= className %>", `Hello ${name}`);
  }

  intent(name, slots) {
    return Promise.reject(`No handler found for intent "${name}"`);
  }
}
