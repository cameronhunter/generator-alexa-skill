import chai from "chai";
import promises from "chai-as-promised";
import { Response } from "alexa-lambda-skill";
import <%= className %> from "../lib/<%= fileName %>";

chai.use(promises);
const { expect } = chai;

describe("<%= className %>", function() {
  describe("launch", function() {
    it("should say that it was launched", function() {
      const result = new <%= className %>().launch();
      expect(result).to.be.an.instanceOf(Response);
    });
  });

  describe("intent", function() {
    it("should reject the request as unhandled", function() {
      const result = new <%= className %>().intent("foo");
      expect(result).to.eventually.be.rejected;
    });
  });
});
