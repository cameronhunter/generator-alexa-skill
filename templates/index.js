import Alexa from "alexa-lambda-skill";
import <%= _.camelize(name) %> from "./lib/<%= name %>";

export default new Alexa.Handler(new <%= _.camelize(name) %>());
