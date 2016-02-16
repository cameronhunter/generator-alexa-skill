# generator-alexa-skill [![NPM Version](https://badge.fury.io/js/generator-alexa-skill.svg)](http://badge.fury.io/js/generator-alexa-skill) [![Build Status](https://travis-ci.org/cameronhunter/generator-alexa-skill.svg)](https://travis-ci.org/cameronhunter/generator-alexa-skill)

> A [Yeoman](http://yeoman.io) generator for scaffolding an Alexa Skill for AWS Lambda

## Installation

```bash
npm install -g yo generator-alexa-skill
```

## Generating a new Alexa Skill

```bash
yo alexa-skill
```

This creates a brand new Alexa Skill, add your logic into `lib/<skill-name>.js` and tests into `test/<skill-name>.spec.js`.

The generator creates an "Hello World" skill for you:

```javascript
import { Response } from "alexa-lambda-skill";

export default class MySkill {
  launch() {
    return Response.say("MySkill launched!");
  }

  hello(slots) {
    const { name = "world" } = slots;
    return Response.say(`Hello ${name}`).card("MySkill", `Hello ${name}`);
  }

  intent(name, slots) {
    return Promise.reject(`No handler found for intent "${name}"`);
  }
}
```

Also see `SAMPLES` for phrases that users may say to interact with this skill and the intent `schema.json` of user intents in JSON format that are used to build the interaction model for your skill.

## Building a deployment package

```bash
npm run build
```

This creates `dist/package.zip` containing the compiled skill exposing a single function `index.handler`. The package also contains `LICENSE.md`, `README.md`, `SAMPLES` and `schema.json`.

## Deploying to AWS Lambda

```bash
npm run deploy
```

This deploys the package to AWS Lambda.

## License

MIT
