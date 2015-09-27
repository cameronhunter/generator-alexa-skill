import chai from "chai";
import promised from "chai-as-promised";
import <%= className %> from "../lib/<%= fileName %>";

chai.should();
chai.use(promised);

const handler = (request) => Handler(request, {
  succeed() {},
  fail() {}
});

describe("<%= className %>", function() {
  describe("LaunchRequest", function() {
    it("should say that it was launched", function() {
      const result = handler({ request: { type: "LaunchRequest" } });
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
    describe("hello intent", function() {
      it("should say hello world", function() {
        const result = Handler({ request: { type: "IntentRequest", intent: { name: "hello" } } }, context);
        return result.should.eventually.deep.equal({
          version: "1.0",
          sessionAttributes: {},
          response: {
            shouldEndSession: true,
            outputSpeech: { type: "PlainText", text: "Hello world" }
          }
        });
      });

      it("should say hello name when provided", function() {
        const result = Handler({ request: { type: "IntentRequest", intent: { name: "hello", slots: { name: { name: "name", value: "echo" } } } } }, context);
        return result.should.eventually.deep.equal({
          version: "1.0",
          sessionAttributes: {},
          response: {
            shouldEndSession: true,
            outputSpeech: { type: "PlainText", text: "Hello world" }
          }
        });
      });
    });
  });
});
