import chai from "chai";
import promised from "chai-as-promised";
import { Response } from "alexa-lambda-skill";
import <%= className %> from "../lib/<%= fileName %>";

chai.should();
chai.use(promised);

describe("<%= className %>", function() {
  describe("launch", function() {
    it("should say that it was launched", function() {
      const result = new <%= className %>().launch();
      return result.should.eventually.be.an.instanceOf(Response);
    });
  });
});
