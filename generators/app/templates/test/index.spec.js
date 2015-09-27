import chai from "chai";
import promises from "chai-as-promised";
import handler from "../lib/index";

chai.use(promises);
const { expect } = chai;

describe("LaunchRequest", function() {
  it("should say that it was launched", function() {
    const result = handler({ request: { type: "LaunchRequest" } });
    return expect(result).to.eventually.deep.equal({
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
    const result = handler({
      request: {
        type: "IntentRequest",
        intent: {
          name: "hello",
          slots: { name: { name: "name", value: "echo" } }
        }
      }
    });

    return expect(result).to.eventually.deep.equal({
      version: "1.0",
      sessionAttributes: {},
      response: {
        shouldEndSession: true,
        outputSpeech: { type: "PlainText", text: "Hello echo" },
        card: { type: "Simple", title: "<%= className %>", content: "Hello echo" }
      }
    });
  });
});
