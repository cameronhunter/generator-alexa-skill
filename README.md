# Alexa Skill generator for AWS Lambda

Get up and running with everything you need to create an Alexa Skill to run on
AWS Lambda.

This is an alexa-skill generator for [Yeoman](http://yeoman.io).

## Recommended setup

Install `yo` and `generator-alexa-skill` globally using `npm`.

```
$ npm install -g yo generator-alexa-skill
```

Make a new directory, and `cd` into it:

```
$ mkdir alexa-skill-echo && cd $_
```

You're now ready to generate a skill!

## The generator

To generate a new skill:

```
$ yo alexa-skill <skill-name>
```

Add your skill logic into `lib/<skill-name>.js`. It's an ES6 class and each
function is an intent on your alexa skill. See [alexa-lambda-skill](https://github.com/cameronhunter/alexa-lambda-skill)
for more details.

### Example:

```
$ yo alexa-skill echo
$ npm install
```

Produces a package named `alexa-skill-echo` with the following output:

```
.
├── lib
│   ├── index.js
│   └── echo.js
├── node_modules
├── test
│   └── echo.spec.js
├── .gitignore
├── LICENSE.md
├── package.json
├── README.md
├── SAMPLES
├── schema.json
└── webpack.config.js
```

## Building for AWS Lambda

To build your skill for AWS Lambda:

```
$ npm run build
```

This creates a file `dist/alexa-skill-<skill-name>.js` which is the compiled and minified
skill. You can copy and paste the contents of this file directly into the AWS
Lambda console. The module exports a single handler as `exports.<skill-name>`.
