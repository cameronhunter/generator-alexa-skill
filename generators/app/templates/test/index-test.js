import test from 'ava';
import { Request } from 'alexa-lambda-skill';
import <%= className %> from '..';

test('LaunchRequest', t => {
  const event = Request.launchRequest().build();

  return t.same(<%= className %>(event), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      outputSpeech: { type: 'PlainText', text: '<%= className %> launched!' }
    }
  });
});

test('Hello intent', t => {
  const event = Request.intent('hello', { name: 'world' }).build();

  return t.same(<%= className %>(event), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      outputSpeech: { type: 'PlainText', text: 'Hello world' },
      card: { type: 'Simple', title: '<%= className %>', content: 'Hello world' }
    }
  });
});
