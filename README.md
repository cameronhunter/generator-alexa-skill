# generator-alexa-skill

[![Build Status](https://travis-ci.org/cameronhunter/generator-alexa-skill.svg?branch=master)](https://travis-ci.org/cameronhunter/generator-alexa-skill) [![NPM Version](https://img.shields.io/npm/v/generator-alexa-skill.svg)](https://npmjs.org/package/generator-alexa-skill) [![License](https://img.shields.io/npm/l/generator-alexa-skill.svg)](https://github.com/cameronhunter/generator-alexa-skill/blob/master/LICENSE)

A [Yeoman](http://yeoman.io) generator for scaffolding an Alexa Skill for AWS Lambda using [alexa-lambda-skill](https://github.com/cameronhunter/alexa-lambda-skill).

## Installation

```bash
npm install -g yo generator-alexa-skill
```

## Generating a new Alexa Skill

```bash
yo alexa-skill
```

This creates a brand new Alexa Skill, add your logic into `src/index.js` and tests into `test/index-test.js`. The template is a HelloWorld skill:

```javascript
import { Skill, Launch, Intent, Response } from 'alexa-lambda-skill';

@Skill
export default class HelloWorld {

  @Launch
  launch() {
    return Response.say('HelloWorld launched!');
  }

  @Intent('hello')
  hello({ name = 'world' }) {
    return Response.say(`Hello ${name}`).card('HelloWorld', `Hello ${name}`);
  }

  @Intent('AMAZON.HelpIntent')
  help() {
    return Response.ask('I say hello to people. Who should I say hello to?').reprompt('Who should I say hello to?');
  }

  @Intent('AMAZON.CancelIntent', 'AMAZON.StopIntent')
  stop() {
    return Response.say('Goodbye');
  }

}
```

Also see `SAMPLES` for phrases that users may say to interact with this skill and the schema of user intents in `schema.json` that are used to build the interaction model for your skill.
