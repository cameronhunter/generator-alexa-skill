import chai from "chai";
import promised from "chai-as-promised";
import Handler from "../lib/index";

chai.should();
chai.use(promised);

describe("LaunchRequest", function() {
  it("should say that it was launched", function() {
    const result = Handler({ request: { type: "LaunchRequest" } });
    return result.should.eventually.deep.equal({
      version: "1.0",
      sessionAttributes: {},
      response: {
        shouldEndSession: true,
        outputSpeech: { type: "PlainText", text: "Echo launched!" }
      }
    });
  });
});

describe("IntentRequest", function() {
  it("should say hello to the name provided", function() {
    const result = Handler({
      request: {
        type: "IntentRequest",
        intent: {
          name: "hello",
          slots: { name: { name: "name", value: "echo" } }
        }
      }
    });

    return result.should.eventually.deep.equal({
      version: "1.0",
      sessionAttributes: {},
      response: {
        shouldEndSession: true,
        outputSpeech: { type: "PlainText", text: "Hello echo" }
      }
    });
  });
});
