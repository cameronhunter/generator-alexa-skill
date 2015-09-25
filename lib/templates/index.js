import Alexa from "alexa-lambda-skill";
import <%= className %> from "./lib/<%= className %>";

export default new Alexa.Handler(new <%= className %>());
