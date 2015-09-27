import Alexa from "alexa-lambda-skill";
import <%= className %> from "./<%= fileName %>";

export default new Alexa.Handler(new <%= className %>());
