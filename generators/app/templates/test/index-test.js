import test from 'ava';
import { handler as Skill } from '..';
import { Request } from 'alexa-lambda-skill';

test('LaunchRequest', t => {
  const event = Request.launchRequest().build();

  return Skill(event).then(response => {
    t.same(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: '<%= className %> launched!' }
      }
    });
  });
});

test('Hello intent', t => {
  const event = Request.intent('hello', { name: 'world' }).build();

  return Skill(event).then(response => {
    t.same(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Hello world' },
        card: { type: 'Simple', title: '<%= className %>', content: 'Hello world' }
      }
    });
  });
});
