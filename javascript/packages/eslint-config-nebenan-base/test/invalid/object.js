/* eslint-disable no-unused-vars */

// expect: no-new-object
const objInstance = new Object({});

const objWihMetods = {
  // expect: object-shorthand
  hello: function() {
    console.warn('hello');
  },
};

const objQuoteProps = {
  // expect: quote-props
  'a': 1,
};

// expect: no-prototype-builtins
objQuoteProps.hasOwnProperty('a');

// expect: prefer-object-spread
const mergedObj = Object.assign({}, { a: 1 }, { b: 2 });

const objectProps = { a: 1 };
// expect: dot-notation
const props = objectProps['a'];

// expect: no-multi-spaces, object-curly-spacing
const spacedObject = {  a: 1};
