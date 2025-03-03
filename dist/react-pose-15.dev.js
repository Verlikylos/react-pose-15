(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.pose = {}),global.React));
}(this, (function (exports,React) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}

    	return Object(val);
    }

    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}

    		// Detect buggy property enumeration order in older V8 versions.

    		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
    		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}

    		return true;
    	} catch (err) {
    		// We don't expect any of the above to throw, but better to be safe.
    		return false;
    	}
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var from;
    	var to = toObject(target);
    	var symbols;

    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments[s]);

    		for (var key in from) {
    			if (hasOwnProperty.call(from, key)) {
    				to[key] = from[key];
    			}
    		}

    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}

    	return to;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    var ReactPropTypesSecret_1 = ReactPropTypesSecret;

    var printWarning = function() {};

    {
      var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
      var loggedTypeFailures = {};

      printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    /**
     * Assert that the values match with the type specs.
     * Error messages are memorized and will only be shown once.
     *
     * @param {object} typeSpecs Map of name to a ReactPropType
     * @param {object} values Runtime values that need to be type-checked
     * @param {string} location e.g. "prop", "context", "child context"
     * @param {string} componentName Name of the component for error messages.
     * @param {?Function} getStack Returns the component stack.
     * @private
     */
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      {
        for (var typeSpecName in typeSpecs) {
          if (typeSpecs.hasOwnProperty(typeSpecName)) {
            var error;
            // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || 'React class') + ': type specification of ' +
                location + ' `' + typeSpecName + '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
              );

            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error.message] = true;

              var stack = getStack ? getStack() : '';

              printWarning(
                'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
              );
            }
          }
        }
      }
    }

    var checkPropTypes_1 = checkPropTypes;

    var printWarning$1 = function() {};

    {
      printWarning$1 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    function emptyFunctionThatReturnsNull() {
      return null;
    }

    var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
      /* global Symbol */
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

      /**
       * Returns the iterator method function contained on the iterable object.
       *
       * Be sure to invoke the function with the iterable as context:
       *
       *     var iteratorFn = getIteratorFn(myIterable);
       *     if (iteratorFn) {
       *       var iterator = iteratorFn.call(myIterable);
       *       ...
       *     }
       *
       * @param {?object} maybeIterable
       * @return {?function}
       */
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }

      /**
       * Collection of methods that allow declaration and validation of props that are
       * supplied to React components. Example usage:
       *
       *   var Props = require('ReactPropTypes');
       *   var MyArticle = React.createClass({
       *     propTypes: {
       *       // An optional string prop named "description".
       *       description: Props.string,
       *
       *       // A required enum prop named "category".
       *       category: Props.oneOf(['News','Photos']).isRequired,
       *
       *       // A prop named "dialog" that requires an instance of Dialog.
       *       dialog: Props.instanceOf(Dialog).isRequired
       *     },
       *     render: function() { ... }
       *   });
       *
       * A more formal specification of how these methods are used:
       *
       *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
       *   decl := ReactPropTypes.{type}(.isRequired)?
       *
       * Each and every declaration produces a function with the same signature. This
       * allows the creation of custom validation functions. For example:
       *
       *  var MyLink = React.createClass({
       *    propTypes: {
       *      // An optional string or URI prop named "href".
       *      href: function(props, propName, componentName) {
       *        var propValue = props[propName];
       *        if (propValue != null && typeof propValue !== 'string' &&
       *            !(propValue instanceof URI)) {
       *          return new Error(
       *            'Expected a string or an URI for ' + propName + ' in ' +
       *            componentName
       *          );
       *        }
       *      }
       *    },
       *    render: function() {...}
       *  });
       *
       * @internal
       */

      var ANONYMOUS = '<<anonymous>>';

      // Important!
      // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),

        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };

      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */
      /*eslint-disable no-self-compare*/
      function is(x, y) {
        // SameValue algorithm
        if (x === y) {
          // Steps 1-5, 7-10
          // Steps 6.b-6.e: +0 != -0
          return x !== 0 || 1 / x === 1 / y;
        } else {
          // Step 6.a: NaN == NaN
          return x !== x && y !== y;
        }
      }
      /*eslint-enable no-self-compare*/

      /**
       * We use an Error-like object for backward compatibility as people may call
       * PropTypes directly and inspect their output. However, we don't use real
       * Errors anymore. We don't inspect their stack anyway, and creating them
       * is prohibitively expensive if they are created too often, such as what
       * happens in oneOfType() for any type before the one that matched.
       */
      function PropTypeError(message) {
        this.message = message;
        this.stack = '';
      }
      // Make `instanceof Error` still work for returned errors.
      PropTypeError.prototype = Error.prototype;

      function createChainableTypeChecker(validate) {
        {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;

          if (secret !== ReactPropTypesSecret_1) {
            if (throwOnDirectAccess) {
              // New behavior only for users of `prop-types` package
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
              );
              err.name = 'Invariant Violation';
              throw err;
            } else if (typeof console !== 'undefined') {
              // Old behavior for people using React.PropTypes
              var cacheKey = componentName + ':' + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3
              ) {
                printWarning$1(
                  'You are manually calling a React.PropTypes validation ' +
                  'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }

        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);

        return chainedCheckType;
      }

      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            // `propValue` being instance of, say, date/regexp, pass the 'object'
            // check, but we can offer a more precise error message here rather than
            // 'of type `object`'.
            var preciseType = getPreciseType(propValue);

            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }

      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.');
          return emptyFunctionThatReturnsNull;
        }

        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }

          var valuesString = JSON.stringify(expectedValues);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (propValue.hasOwnProperty(key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
          return emptyFunctionThatReturnsNull;
        }

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning$1(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
            );
            return emptyFunctionThatReturnsNull;
          }
        }

        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
              return null;
            }
          }

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          // We need to check all keys in case some are required but missing from
          // props.
          var allKeys = objectAssign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }

            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                // Iterator will provide entry [k,v] tuples rather than values.
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }

            return true;
          default:
            return false;
        }
      }

      function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
          return true;
        }

        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }

        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }

        return false;
      }

      // Equivalent of `typeof` but with special handling for array and regexp.
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          // Old webkits (at least until Android 4.0) return 'function' rather than
          // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
          // passes PropTypes.object.
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }

      // This handles more types than `getPropType`. Only used for error messages.
      // See `createPrimitiveTypeChecker`.
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }

      // Returns a string that is postfixed to a warning about an invalid type.
      // For example, "undefined" or "of type array"
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }

      // Returns class name of the object, if any.
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }

      ReactPropTypes.checkPropTypes = checkPropTypes_1;
      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
        Symbol.for &&
        Symbol.for('react.element')) ||
        0xeac7;

      var isValidElement = function(object) {
        return typeof object === 'object' &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE;
      };

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
    }
    });

    var key = '__global_unique_id__';

    var gud = function() {
      return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    function makeEmptyFunction(arg) {
      return function () {
        return arg;
      };
    }

    /**
     * This function accepts and discards inputs; it has no side effects. This is
     * primarily useful idiomatically for overridable function endpoints which
     * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
     */
    var emptyFunction$1 = function emptyFunction() {};

    emptyFunction$1.thatReturns = makeEmptyFunction;
    emptyFunction$1.thatReturnsFalse = makeEmptyFunction(false);
    emptyFunction$1.thatReturnsTrue = makeEmptyFunction(true);
    emptyFunction$1.thatReturnsNull = makeEmptyFunction(null);
    emptyFunction$1.thatReturnsThis = function () {
      return this;
    };
    emptyFunction$1.thatReturnsArgument = function (arg) {
      return arg;
    };

    var emptyFunction_1 = emptyFunction$1;

    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var warning = emptyFunction_1;

    {
      var printWarning$2 = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      warning = function warning(condition, format) {
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (format.indexOf('Failed Composite propType: ') === 0) {
          return; // Ignore CompositeComponent proptype check.
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning$2.apply(undefined, [format].concat(args));
        }
      };
    }

    var warning_1 = warning;

    var lib = createCommonjsModule(function (module) {

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    if (typeof commonjsRequire === 'function') {
      var React$$1 = React__default;
    }

    var Fragment = React$$1.Fragment ||
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(_Fragment, _React$Component);

      function _Fragment(props) {
        var _this;

        _this = _React$Component.call(this, props) || this;
        _this.refFn = _this.refFn.bind(_assertThisInitialized(_this));
        _this.orphans = [];
        _this.focusedDescendantElement = null;
        _this.parentNode = null;
        return _this;
      }

      var _proto = _Fragment.prototype;

      _proto.refFn = function refFn(div) {
        this.div = div;
      };

      _proto.componentDidMount = function componentDidMount() {
        this.unwrapChildren();
        this.div.style.display = 'none';
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        this.unwrapChildren();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.rewrapChildren();
      };

      _proto.unwrapChildren = function unwrapChildren() {
        var _this2 = this;

        // defer first to style calculation to ensure CSS transitions can happen:
        // https://stackoverflow.com/a/24195559/4956731
        this.unwrapTimeout = setTimeout(function () {
          // plain js rocks!
          // https://plainjs.com/javascript/manipulation/unwrap-a-dom-element-35/
          if (!_this2.div.parentNode) {
            return;
          }

          _this2.saveFocusedDescendantElement(_this2.div);

          _this2.orphans = [];

          while (_this2.div.firstChild) {
            _this2.orphans.push(_this2.div.firstChild);

            _this2.div.parentNode.insertBefore(_this2.div.firstChild, _this2.div);
          }

          _this2.parentNode = _this2.div.parentNode;

          if (_this2.orphans.length) {
            // it's only safe to remove the wrapper div
            // if the fragment has some child dom elements,
            // since otherwise we have no way to remember
            // our position among the sibling elements.
            _this2.parentNode.removeChild(_this2.div);
          }

          _this2.restoreFocusedDescendantElement();
        });
      };

      _proto.rewrapChildren = function rewrapChildren() {
        clearTimeout(this.unwrapTimeout);

        if (!(this.div && this.parentNode && this.parentNode.parentNode)) {
          return;
        }

        if (this.orphans.length) {
          this.parentNode.insertBefore(this.div, this.orphans[0]);
          this.saveFocusedDescendantElement(this.orphans[0].parentNode);
          var orphan;

          while (orphan = this.orphans.shift()) {
            this.div.appendChild(orphan);
          }
        }
      };

      _proto.saveFocusedDescendantElement = function saveFocusedDescendantElement(ancestorElement) {
        if (ancestorElement.contains(document.activeElement)) {
          this.focusedDescendantElement = document.activeElement;
        }
      };

      _proto.restoreFocusedDescendantElement = function restoreFocusedDescendantElement() {
        if (this.focusedDescendantElement) {
          this.focusedDescendantElement.focus();
          this.focusedDescendantElement = null;
        }
      };

      _proto.render = function render() {
        // sorry for the side effects! 😭
        this.rewrapChildren();
        return React$$1.createElement('div', {
          ref: this.refFn
        }, this.props.children);
      };

      return _Fragment;
    }(React$$1.Component);

    if (module) {
      module.exports = Fragment;
    }
    });

    var implementation = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _react2 = _interopRequireDefault(React__default);



    var _propTypes2 = _interopRequireDefault(propTypes);



    var _gud2 = _interopRequireDefault(gud);



    var _warning2 = _interopRequireDefault(warning_1);



    var _reactDotFragment2 = _interopRequireDefault(lib);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var MAX_SIGNED_31_BIT_INT = 1073741823;

    // Inlined Object.is polyfill.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    function objectIs(x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }

    function createEventEmitter(value) {
      var handlers = [];
      return {
        on: function on(handler) {
          handlers.push(handler);
        },
        off: function off(handler) {
          handlers = handlers.filter(function (h) {
            return h !== handler;
          });
        },
        get: function get() {
          return value;
        },
        set: function set(newValue, changedBits) {
          value = newValue;
          handlers.forEach(function (handler) {
            return handler(value, changedBits);
          });
        }
      };
    }

    function onlyChild(children) {
      return Array.isArray(children) ? children[0] : children;
    }

    function createReactContext(defaultValue, calculateChangedBits) {
      var _Provider$childContex, _Consumer$contextType;

      var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

      var Provider = function (_Component) {
        _inherits(Provider, _Component);

        function Provider() {
          var _temp, _this, _ret;

          _classCallCheck(this, Provider);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
        }

        Provider.prototype.getChildContext = function getChildContext() {
          var _ref;

          return _ref = {}, _ref[contextProp] = this.emitter, _ref;
        };

        Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          if (this.props.value !== nextProps.value) {
            var oldValue = this.props.value;
            var newValue = nextProps.value;
            var changedBits = void 0;

            if (objectIs(oldValue, newValue)) {
              changedBits = 0; // No change
            } else {
              changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
              {
                (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
              }

              changedBits |= 0;

              if (changedBits !== 0) {
                this.emitter.set(nextProps.value, changedBits);
              }
            }
          }
        };

        Provider.prototype.render = function render() {
          return _react2.default.createElement(
            _reactDotFragment2.default,
            null,
            this.props.children
          );
        };

        return Provider;
      }(React__default.Component);

      Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

      var Consumer = function (_Component2) {
        _inherits(Consumer, _Component2);

        function Consumer() {
          var _temp2, _this2, _ret2;

          _classCallCheck(this, Consumer);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
            value: _this2.getValue()
          }, _this2.onUpdate = function (newValue, changedBits) {
            var observedBits = _this2.observedBits | 0;
            if ((observedBits & changedBits) !== 0) {
              _this2.setState({ value: _this2.getValue() });
            }
          }, _temp2), _possibleConstructorReturn(_this2, _ret2);
        }

        Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          var observedBits = nextProps.observedBits;

          this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
          : observedBits;
        };

        Consumer.prototype.componentDidMount = function componentDidMount() {
          if (this.context[contextProp]) {
            this.context[contextProp].on(this.onUpdate);
          }
          var observedBits = this.props.observedBits;

          this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
          : observedBits;
        };

        Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
          if (this.context[contextProp]) {
            this.context[contextProp].off(this.onUpdate);
          }
        };

        Consumer.prototype.getValue = function getValue() {
          if (this.context[contextProp]) {
            return this.context[contextProp].get();
          } else {
            return defaultValue;
          }
        };

        Consumer.prototype.render = function render() {
          return _react2.default.createElement(
            _reactDotFragment2.default,
            null,
            onlyChild(this.props.children)(this.state.value)
          );
        };

        return Consumer;
      }(React__default.Component);

      Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


      return {
        Provider: Provider,
        Consumer: Consumer
      };
    }

    exports.default = _react2.default.createContext || createReactContext;
    module.exports = exports['default'];
    });

    unwrapExports(implementation);

    var lib$1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;



    var _react2 = _interopRequireDefault(React__default);



    var _implementation2 = _interopRequireDefault(implementation);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = _react2.default.createContext || _implementation2.default;
    module.exports = exports['default'];
    });

    var createContext = unwrapExports(lib$1);

    var HEY_LISTEN = 'Hey, listen! ';
    var invariant = function () { };
    {
        invariant = function (check, message) {
            if (!check) {
                throw new Error(HEY_LISTEN.toUpperCase() + message);
            }
        };
    }

    var prevTime = 0;
    var onNextFrame = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined
        ? function (callback) { return window.requestAnimationFrame(callback); }
        : function (callback) {
            var timestamp = Date.now();
            var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
            prevTime = timestamp + timeToCall;
            setTimeout(function () { return callback(prevTime); }, timeToCall);
        };

    var createStep = (function (setRunNextFrame) {
        var processToRun = [];
        var processToRunNextFrame = [];
        var numThisFrame = 0;
        var isProcessing = false;
        var i = 0;
        var cancelled = new WeakSet();
        var toKeepAlive = new WeakSet();
        var renderStep = {
            cancel: function (process) {
                var indexOfCallback = processToRunNextFrame.indexOf(process);
                cancelled.add(process);
                if (indexOfCallback !== -1) {
                    processToRunNextFrame.splice(indexOfCallback, 1);
                }
            },
            process: function (frame) {
                var _a;
                isProcessing = true;
                _a = [
                    processToRunNextFrame,
                    processToRun
                ], processToRun = _a[0], processToRunNextFrame = _a[1];
                processToRunNextFrame.length = 0;
                numThisFrame = processToRun.length;
                if (numThisFrame) {
                    var process_1;
                    for (i = 0; i < numThisFrame; i++) {
                        process_1 = processToRun[i];
                        process_1(frame);
                        if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
                            renderStep.schedule(process_1);
                            setRunNextFrame(true);
                        }
                    }
                }
                isProcessing = false;
            },
            schedule: function (process, keepAlive, immediate) {
                invariant(typeof process === 'function', 'Argument must be a function');
                var addToCurrentBuffer = immediate && isProcessing;
                var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
                if (keepAlive)
                    toKeepAlive.add(process);
                if (buffer.indexOf(process) === -1) {
                    buffer.push(process);
                    if (addToCurrentBuffer)
                        numThisFrame = processToRun.length;
                }
            }
        };
        return renderStep;
    });

    var StepId;
    (function (StepId) {
        StepId["Read"] = "read";
        StepId["Update"] = "update";
        StepId["Render"] = "render";
        StepId["PostRender"] = "postRender";
        StepId["FixedUpdate"] = "fixedUpdate";
    })(StepId || (StepId = {}));

    var maxElapsed = 40;
    var defaultElapsed = (1 / 60) * 1000;
    var useDefaultElapsed = true;
    var willRunNextFrame = false;
    var isProcessing = false;
    var frame = {
        delta: 0,
        timestamp: 0
    };
    var stepsOrder = [
        StepId.Read,
        StepId.Update,
        StepId.Render,
        StepId.PostRender
    ];
    var setWillRunNextFrame = function (willRun) { return (willRunNextFrame = willRun); };
    var _a = stepsOrder.reduce(function (acc, key) {
        var step = createStep(setWillRunNextFrame);
        acc.sync[key] = function (process, keepAlive, immediate) {
            if (keepAlive === void 0) { keepAlive = false; }
            if (immediate === void 0) { immediate = false; }
            if (!willRunNextFrame)
                startLoop();
            step.schedule(process, keepAlive, immediate);
            return process;
        };
        acc.cancelSync[key] = function (process) { return step.cancel(process); };
        acc.steps[key] = step;
        return acc;
    }, {
        steps: {},
        sync: {},
        cancelSync: {}
    }), steps = _a.steps, sync = _a.sync, cancelSync = _a.cancelSync;
    var processStep = function (stepId) { return steps[stepId].process(frame); };
    var processFrame = function (timestamp) {
        willRunNextFrame = false;
        frame.delta = useDefaultElapsed
            ? defaultElapsed
            : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
        if (!useDefaultElapsed)
            defaultElapsed = frame.delta;
        frame.timestamp = timestamp;
        isProcessing = true;
        stepsOrder.forEach(processStep);
        isProcessing = false;
        if (willRunNextFrame) {
            useDefaultElapsed = false;
            onNextFrame(processFrame);
        }
    };
    var startLoop = function () {
        willRunNextFrame = true;
        useDefaultElapsed = true;
        if (!isProcessing)
            onNextFrame(processFrame);
    };
    var getFrameData = function () { return frame; };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign$1 = function() {
        __assign$1 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };

    var clamp = function (min, max) { return function (v) {
        return Math.max(Math.min(v, max), min);
    }; };
    var isFirstChars = function (term) { return function (v) {
        return typeof v === 'string' && v.indexOf(term) === 0;
    }; };
    var getValueFromFunctionString = function (value) {
        return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
    };
    var splitCommaDelimited = function (value) {
        return typeof value === 'string' ? value.split(/,\s*/) : [value];
    };
    var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };

    var number = {
        test: function (v) { return typeof v === 'number'; },
        parse: parseFloat,
        transform: function (v) { return v; }
    };
    var alpha = __assign$1({}, number, { transform: clamp(0, 1) });
    var scale = __assign$1({}, number, { default: 1 });

    var createUnitType = function (unit) { return ({
        test: function (v) {
            return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
        },
        parse: parseFloat,
        transform: function (v) { return "" + v + unit; }
    }); };
    var degrees = createUnitType('deg');
    var percent = createUnitType('%');
    var px = createUnitType('px');
    var vh = createUnitType('vh');
    var vw = createUnitType('vw');

    var clampRgbUnit = clamp(0, 255);
    var onlyColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i;
    var isRgba = function (v) { return v.red !== undefined; };
    var isHsla = function (v) { return v.hue !== undefined; };
    var splitColorValues = function (terms) {
        var numTerms = terms.length;
        return function (v) {
            if (typeof v !== 'string')
                return v;
            var values = {};
            var valuesArray = splitCommaDelimited(getValueFromFunctionString(v));
            for (var i = 0; i < numTerms; i++) {
                values[terms[i]] =
                    valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
            }
            return values;
        };
    };
    var rgbaTemplate = function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
        return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha$$1 + ")";
    };
    var hslaTemplate = function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
        return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha$$1 + ")";
    };
    var rgbUnit = __assign$1({}, number, { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
    var testRgbaString = isFirstChars('rgb');
    var rgba = {
        test: function (v) { return (typeof v === 'string' ? testRgbaString(v) : isRgba(v)); },
        parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
        transform: function (_a) {
            var red = _a.red, green = _a.green, blue = _a.blue, alpha$$1 = _a.alpha;
            return rgbaTemplate({
                red: rgbUnit.transform(red),
                green: rgbUnit.transform(green),
                blue: rgbUnit.transform(blue),
                alpha: sanitize(alpha$$1)
            });
        }
    };
    var testHslaString = isFirstChars('hsl');
    var hsla = {
        test: function (v) { return (typeof v === 'string' ? testHslaString(v) : isHsla(v)); },
        parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
        transform: function (_a) {
            var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha$$1 = _a.alpha;
            return hslaTemplate({
                hue: Math.round(hue),
                saturation: percent.transform(sanitize(saturation)),
                lightness: percent.transform(sanitize(lightness)),
                alpha: sanitize(alpha$$1)
            });
        }
    };
    var hex = __assign$1({}, rgba, { test: isFirstChars('#'), parse: function (v) {
            var r = '';
            var g = '';
            var b = '';
            if (v.length > 4) {
                r = v.substr(1, 2);
                g = v.substr(3, 2);
                b = v.substr(5, 2);
            }
            else {
                r = v.substr(1, 1);
                g = v.substr(2, 1);
                b = v.substr(3, 1);
                r += r;
                g += g;
                b += b;
            }
            return {
                red: parseInt(r, 16),
                green: parseInt(g, 16),
                blue: parseInt(b, 16),
                alpha: 1
            };
        } });
    var color = {
        test: function (v) {
            return (typeof v === 'string' && onlyColorRegex.test(v)) ||
                rgba.test(v) ||
                hsla.test(v) ||
                hex.test(v);
        },
        parse: function (v) {
            if (rgba.test(v)) {
                return rgba.parse(v);
            }
            else if (hsla.test(v)) {
                return hsla.parse(v);
            }
            else if (hex.test(v)) {
                return hex.parse(v);
            }
            return v;
        },
        transform: function (v) {
            if (isRgba(v)) {
                return rgba.transform(v);
            }
            else if (isHsla(v)) {
                return hsla.transform(v);
            }
            return v;
        }
    };

    var floatRegex = /(-)?(\d[\d\.]*)/g;
    var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
    var COLOR_TOKEN = '${c}';
    var NUMBER_TOKEN = '${n}';
    var complex = {
        test: function (v) {
            if (typeof v !== 'string' || !isNaN(v))
                return false;
            var numValues = 0;
            var foundNumbers = v.match(floatRegex);
            var foundColors = v.match(colorRegex);
            if (foundNumbers)
                numValues += foundNumbers.length;
            if (foundColors)
                numValues += foundColors.length;
            return numValues > 0;
        },
        parse: function (v) {
            var input = v;
            var parsed = [];
            var foundColors = input.match(colorRegex);
            if (foundColors) {
                input = input.replace(colorRegex, COLOR_TOKEN);
                parsed.push.apply(parsed, foundColors.map(color.parse));
            }
            var foundNumbers = input.match(floatRegex);
            if (foundNumbers) {
                parsed.push.apply(parsed, foundNumbers.map(number.parse));
            }
            return parsed;
        },
        createTransformer: function (prop) {
            var template = prop;
            var token = 0;
            var foundColors = prop.match(colorRegex);
            var numColors = foundColors ? foundColors.length : 0;
            if (foundColors) {
                for (var i = 0; i < numColors; i++) {
                    template = template.replace(foundColors[i], COLOR_TOKEN);
                    token++;
                }
            }
            var foundNumbers = template.match(floatRegex);
            var numNumbers = foundNumbers ? foundNumbers.length : 0;
            if (foundNumbers) {
                for (var i = 0; i < numNumbers; i++) {
                    template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                    token++;
                }
            }
            return function (v) {
                var output = template;
                for (var i = 0; i < token; i++) {
                    output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
                }
                return output;
            };
        }
    };

    var HEY_LISTEN$1 = 'Hey, listen! ';
    var invariant$1 = function () { };
    {
        invariant$1 = function (check, message) {
            if (!check) {
                throw new Error(HEY_LISTEN$1.toUpperCase() + message);
            }
        };
    }

    var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
    var reversed = function (easing) {
        return function (p) {
            return 1 - easing(1 - p);
        };
    };
    var mirrored = function (easing) {
        return function (p) {
            return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
        };
    };
    var createExpoIn = function (power) {
        return function (p) {
            return Math.pow(p, power);
        };
    };
    var createBackIn = function (power) {
        return function (p) {
            return p * p * ((power + 1) * p - power);
        };
    };
    var createAnticipateEasing = function (power) {
        var backEasing = createBackIn(power);
        return function (p) {
            return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
        };
    };
    var linear = function (p) {
        return p;
    };
    var easeIn = /*#__PURE__*/createExpoIn(2);
    var easeOut = /*#__PURE__*/reversed(easeIn);
    var easeInOut = /*#__PURE__*/mirrored(easeIn);
    var circIn = function (p) {
        return 1 - Math.sin(Math.acos(p));
    };
    var circOut = /*#__PURE__*/reversed(circIn);
    var circInOut = /*#__PURE__*/mirrored(circOut);
    var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
    var backOut = /*#__PURE__*/reversed(backIn);
    var backInOut = /*#__PURE__*/mirrored(backIn);
    var anticipate = /*#__PURE__*/createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
    var NEWTON_ITERATIONS = 8;
    var NEWTON_MIN_SLOPE = 0.001;
    var SUBDIVISION_PRECISION = 0.0000001;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var K_SPLINE_TABLE_SIZE = 11;
    var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
    var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
    var a = function (a1, a2) {
        return 1.0 - 3.0 * a2 + 3.0 * a1;
    };
    var b = function (a1, a2) {
        return 3.0 * a2 - 6.0 * a1;
    };
    var c = function (a1) {
        return 3.0 * a1;
    };
    var getSlope = function (t, a1, a2) {
        return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
    };
    var calcBezier = function (t, a1, a2) {
        return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
    };
    function cubicBezier(mX1, mY1, mX2, mY2) {
        var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
        var binarySubdivide = function (aX, aA, aB) {
            var i = 0;
            var currentX;
            var currentT;
            do {
                currentT = aA + (aB - aA) / 2.0;
                currentX = calcBezier(currentT, mX1, mX2) - aX;
                if (currentX > 0.0) {
                    aB = currentT;
                } else {
                    aA = currentT;
                }
            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
            return currentT;
        };
        var newtonRaphsonIterate = function (aX, aGuessT) {
            var i = 0;
            var currentSlope = 0;
            var currentX;
            for (; i < NEWTON_ITERATIONS; ++i) {
                currentSlope = getSlope(aGuessT, mX1, mX2);
                if (currentSlope === 0.0) {
                    return aGuessT;
                }
                currentX = calcBezier(aGuessT, mX1, mX2) - aX;
                aGuessT -= currentX / currentSlope;
            }
            return aGuessT;
        };
        var calcSampleValues = function () {
            for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
                sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
            }
        };
        var getTForX = function (aX) {
            var intervalStart = 0.0;
            var currentSample = 1;
            var lastSample = K_SPLINE_TABLE_SIZE - 1;
            var dist = 0.0;
            var guessForT = 0.0;
            var initialSlope = 0.0;
            for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
                intervalStart += K_SAMPLE_STEP_SIZE;
            }
            --currentSample;
            dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
            initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE) {
                return newtonRaphsonIterate(aX, guessForT);
            } else if (initialSlope === 0.0) {
                return guessForT;
            } else {
                return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
            }
        };
        calcSampleValues();
        var resolver = function (aX) {
            var returnValue;
            if (mX1 === mY1 && mX2 === mY2) {
                returnValue = aX;
            } else if (aX === 0) {
                returnValue = 0;
            } else if (aX === 1) {
                returnValue = 1;
            } else {
                returnValue = calcBezier(getTForX(aX), mY1, mY2);
            }
            return returnValue;
        };
        return resolver;
    }

    var HEY_LISTEN$2 = 'Hey, listen! ';
    var invariant$2 = function () { };
    {
        invariant$2 = function (check, message) {
            if (!check) {
                throw new Error(HEY_LISTEN$2.toUpperCase() + message);
            }
        };
    }

    var createStyler = function (_a) {
        var onRead = _a.onRead,
            onRender = _a.onRender,
            _b = _a.aliasMap,
            aliasMap = _b === void 0 ? {} : _b,
            _c = _a.useCache,
            useCache = _c === void 0 ? true : _c;
        return function (props) {
            var state = {};
            var changedValues = [];
            var hasChanged = false;
            var setValue = function (unmappedKey, value) {
                var key = aliasMap[unmappedKey] || unmappedKey;
                var currentValue = state[key];
                state[key] = value;
                if (state[key] !== currentValue) {
                    if (changedValues.indexOf(key) === -1) {
                        changedValues.push(key);
                    }
                    if (!hasChanged) {
                        hasChanged = true;
                        sync.render(render);
                    }
                }
            };
            function render(forceRender) {
                if (forceRender === void 0) {
                    forceRender = false;
                }
                if (forceRender === true || hasChanged) {
                    onRender(state, props, changedValues);
                    hasChanged = false;
                    changedValues.length = 0;
                }
                return this;
            }
            return {
                get: function (unmappedKey) {
                    var key = aliasMap[unmappedKey] || unmappedKey;
                    return key ? useCache && state[key] !== undefined ? state[key] : onRead(key, props) : state;
                },
                set: function (values, value) {
                    if (typeof values === 'string') {
                        if (value !== undefined) {
                            setValue(values, value);
                        } else {
                            return function (v) {
                                return setValue(values, v);
                            };
                        }
                    } else {
                        for (var key in values) {
                            if (values.hasOwnProperty(key)) {
                                setValue(key, values[key]);
                            }
                        }
                    }
                    return this;
                },
                render: render
            };
        };
    };

    var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
    var REPLACE_TEMPLATE = '$1-$2';
    var camelToDash = function (str) {
        return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
    };
    var setDomAttrs = function (element, attrs) {
        for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                element.setAttribute(key, attrs[key]);
            }
        }
    };

    var camelCache = /*#__PURE__*/new Map();
    var dashCache = /*#__PURE__*/new Map();
    var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
    var numPrefixes = prefixes.length;
    var testElement;
    var testPrefix = function (key) {
        if (typeof document === 'undefined') return;
        testElement = testElement || document.createElement('div');
        for (var i = 0; i < numPrefixes; i++) {
            var prefix = prefixes[i];
            var noPrefix = prefix === '';
            var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
            if (prefixedPropertyName in testElement.style) {
                camelCache.set(key, prefixedPropertyName);
                dashCache.set(key, "" + (noPrefix ? '' : '-') + camelToDash(prefixedPropertyName));
            }
        }
    };
    var prefixer = function (key, asDashCase) {
        if (asDashCase === void 0) {
            asDashCase = false;
        }
        var cache = asDashCase ? dashCache : camelCache;
        if (!cache.has(key)) testPrefix(key);
        return cache.get(key) || key;
    };

    var axes = ['', 'X', 'Y', 'Z'];
    var order = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'];
    var TRANSFORM_ORIGIN_X = 'transformOriginX';
    var TRANSFORM_ORIGIN_Y = 'transformOriginY';
    var transformProps = /*#__PURE__*/order.reduce(function (acc, key) {
        return axes.reduce(function (axesAcc, axesKey) {
            axesAcc.push(key + axesKey);
            return axesAcc;
        }, acc);
    }, ['x', 'y', 'z']);
    var transformPropDictionary = /*#__PURE__*/transformProps.reduce(function (dict, key) {
        dict[key] = true;
        return dict;
    }, {});
    var isTransformProp = function (key) {
        return transformPropDictionary[key] === true;
    };
    var sortTransformProps = function (a, b) {
        return transformProps.indexOf(a) - transformProps.indexOf(b);
    };
    var isTransformOriginProp = function (key) {
        return key === TRANSFORM_ORIGIN_X || key === TRANSFORM_ORIGIN_Y;
    };

    var valueTypes = {
        color: color,
        backgroundColor: color,
        outlineColor: color,
        fill: color,
        stroke: color,
        borderColor: color,
        borderTopColor: color,
        borderRightColor: color,
        borderBottomColor: color,
        borderLeftColor: color,
        borderRadius: px,
        width: px,
        maxWidth: px,
        height: px,
        maxHeight: px,
        top: px,
        left: px,
        bottom: px,
        right: px,
        rotate: degrees,
        rotateX: degrees,
        rotateY: degrees,
        rotateZ: degrees,
        scale: scale,
        scaleX: scale,
        scaleY: scale,
        scaleZ: scale,
        skew: degrees,
        skewX: degrees,
        skewY: degrees,
        distance: px,
        translateX: px,
        translateY: px,
        translateZ: px,
        perspective: px,
        opacity: alpha,
        transformOriginX: percent,
        transformOriginY: percent,
        transformOriginZ: px
    };
    var getValueType = function (key) {
        return valueTypes[key];
    };

    var aliasMap = {
        x: 'translateX',
        y: 'translateY',
        z: 'translateZ',
        originX: 'transformOriginX',
        originY: 'transformOriginY',
        originZ: 'transformOriginZ'
    };
    var NUMBER = 'number';
    var OBJECT = 'object';
    var COLON = ':';
    var SEMI_COLON = ';';
    var TRANSFORM_ORIGIN = 'transform-origin';
    var TRANSFORM = 'transform';
    var TRANSLATE_Z = 'translateZ';
    var TRANSFORM_NONE = ';transform: none';
    var styleRule = function (key, value) {
        return "" + SEMI_COLON + key + COLON + value;
    };
    function buildStylePropertyString(state, changedValues, enableHardwareAcceleration, blacklist) {
        if (changedValues === void 0) {
            changedValues = true;
        }
        if (enableHardwareAcceleration === void 0) {
            enableHardwareAcceleration = true;
        }
        var valuesToChange = changedValues === true ? Object.keys(state) : changedValues;
        var propertyString = '';
        var transformString = '';
        var hasTransformOrigin = false;
        var transformIsDefault = true;
        var hasTransform = false;
        var transformHasZ = false;
        var numChangedValues = valuesToChange.length;
        for (var i = 0; i < numChangedValues; i++) {
            var key = valuesToChange[i];
            if (isTransformProp(key)) {
                hasTransform = true;
                for (var stateKey in state) {
                    if (isTransformProp(stateKey) && valuesToChange.indexOf(stateKey) === -1) {
                        valuesToChange.push(stateKey);
                    }
                }
                break;
            }
        }
        valuesToChange.sort(sortTransformProps);
        var totalNumChangedValues = valuesToChange.length;
        for (var i = 0; i < totalNumChangedValues; i++) {
            var key = valuesToChange[i];
            if (blacklist.has(key)) continue;
            var isTransformKey = isTransformProp(key);
            var value = state[key];
            var valueType = getValueType(key);
            if (isTransformKey) {
                if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) {
                    transformIsDefault = false;
                }
            }
            if (valueType && (typeof value === NUMBER || typeof value === OBJECT) && valueType.transform) {
                value = valueType.transform(value);
            }
            if (isTransformKey) {
                transformString += key + '(' + value + ') ';
                transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
            } else if (isTransformOriginProp(key)) {
                state[key] = value;
                hasTransformOrigin = true;
            } else {
                propertyString += styleRule(prefixer(key, true), value);
            }
        }
        if (hasTransformOrigin) {
            propertyString += styleRule(TRANSFORM_ORIGIN, (state.transformOriginX || 0) + " " + (state.transformOriginY || 0) + " " + (state.transformOriginZ || 0));
        }
        if (hasTransform) {
            if (!transformHasZ && enableHardwareAcceleration) {
                transformString += TRANSLATE_Z + "(0)";
            }
            propertyString += styleRule(TRANSFORM, transformIsDefault ? TRANSFORM_NONE : transformString);
        }
        return propertyString;
    }

    var SCROLL_LEFT = 'scrollLeft';
    var SCROLL_TOP = 'scrollTop';
    var scrollValues = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP]);
    var cssStyler = /*#__PURE__*/createStyler({
        onRead: function (key, _a) {
            var element = _a.element,
                preparseOutput = _a.preparseOutput;
            var valueType = getValueType(key);
            if (isTransformProp(key)) {
                return valueType ? valueType.default || 0 : 0;
            } else if (scrollValues.has(key)) {
                return element[key];
            } else {
                var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer(key, true)) || 0;
                return preparseOutput && valueType && valueType.parse ? valueType.parse(domValue) : domValue;
            }
        },
        onRender: function (state, _a, changedValues) {
            var element = _a.element,
                enableHardwareAcceleration = _a.enableHardwareAcceleration;
            element.style.cssText += buildStylePropertyString(state, changedValues, enableHardwareAcceleration, scrollValues);
            if (changedValues.indexOf(SCROLL_LEFT) !== -1) element.scrollLeft = state.scrollLeft;
            if (changedValues.indexOf(SCROLL_TOP) !== -1) element.scrollTop = state.scrollTop;
        },
        aliasMap: aliasMap,
        uncachedValues: scrollValues
    });
    var css = function (element, props) {
        return cssStyler(__assign({ element: element, enableHardwareAcceleration: true, preparseOutput: true }, props));
    };

    var ZERO_NOT_ZERO = 0.0000001;
    var percentToPixels = function (percent$$1, length) {
        return percent$$1 / 100 * length + 'px';
    };
    var build = function (state, dimensions, isPath, pathLength) {
        var hasTransform = false;
        var hasDashArray = false;
        var props = {};
        var dashArrayStyles = isPath ? {
            pathLength: '0',
            pathSpacing: "" + pathLength
        } : undefined;
        var scale$$1 = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
        var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale$$1 || 1;
        var transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
        var transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
        var scaleTransformX = -transformOriginX * (scale$$1 * 1);
        var scaleTransformY = -transformOriginY * (scaleY * 1);
        var scaleReplaceX = transformOriginX / scale$$1;
        var scaleReplaceY = transformOriginY / scaleY;
        var transform = {
            translate: "translate(" + state.translateX + ", " + state.translateY + ") ",
            scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale$$1 + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
            rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
            skewX: "skewX(" + state.skewX + ") ",
            skewY: "skewY(" + state.skewY + ") "
        };
        for (var key in state) {
            if (state.hasOwnProperty(key)) {
                var value = state[key];
                if (isTransformProp(key)) {
                    hasTransform = true;
                } else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
                    hasDashArray = true;
                    dashArrayStyles[key] = percentToPixels(value, pathLength);
                } else if (isPath && key === 'pathOffset') {
                    props['stroke-dashoffset'] = percentToPixels(-value, pathLength);
                } else {
                    props[camelToDash(key)] = value;
                }
            }
        }
        if (hasDashArray) {
            props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
        }
        if (hasTransform) {
            props.transform = '';
            for (var key in transform) {
                if (transform.hasOwnProperty(key)) {
                    var defaultValue = key === 'scale' ? '1' : '0';
                    props.transform += transform[key].replace(/undefined/g, defaultValue);
                }
            }
        }
        return props;
    };

    var valueTypes$1 = {
        fill: color,
        stroke: color,
        scale: scale,
        scaleX: scale,
        scaleY: scale,
        opacity: alpha,
        fillOpacity: alpha,
        strokeOpacity: alpha
    };
    var getValueType$1 = function (key) {
        return valueTypes$1[key];
    };

    var svgStyler = /*#__PURE__*/createStyler({
        onRead: function (key, _a) {
            var element = _a.element;
            if (!isTransformProp(key)) {
                return element.getAttribute(key);
            } else {
                var valueType = getValueType$1(key);
                return valueType ? valueType.default : 0;
            }
        },
        onRender: function (state, _a, changedValues) {
            var dimensions = _a.dimensions,
                element = _a.element,
                isPath = _a.isPath,
                pathLength = _a.pathLength;
            setDomAttrs(element, build(state, dimensions, isPath, pathLength));
        },
        aliasMap: {
            x: 'translateX',
            y: 'translateY',
            background: 'fill'
        }
    });
    var svg = function (element) {
        var _a = element.getBBox(),
            x = _a.x,
            y = _a.y,
            width = _a.width,
            height = _a.height;
        var props = {
            element: element,
            dimensions: { x: x, y: y, width: width, height: height },
            isPath: false
        };
        if (element.tagName === 'path') {
            props.isPath = true;
            props.pathLength = element.getTotalLength();
        }
        return svgStyler(props);
    };

    var viewport = /*#__PURE__*/createStyler({
        useCache: false,
        onRead: function (key) {
            return key === 'scrollTop' ? window.pageYOffset : window.pageXOffset;
        },
        onRender: function (_a) {
            var _b = _a.scrollTop,
                scrollTop = _b === void 0 ? 0 : _b,
                _c = _a.scrollLeft,
                scrollLeft = _c === void 0 ? 0 : _c;
            return window.scrollTo(scrollLeft, scrollTop);
        }
    });

    var cache = /*#__PURE__*/new WeakMap();
    var createDOMStyler = function (node, props) {
        var styler;
        if (node instanceof HTMLElement) {
            styler = css(node, props);
        } else if (node instanceof SVGElement) {
            styler = svg(node);
        } else if (typeof window !== 'undefined' && node === window) {
            styler = viewport(node);
        }
        invariant$2(styler !== undefined, 'No valid node provided. Node must be HTMLElement, SVGElement or window.');
        cache.set(node, styler);
        return styler;
    };
    var getStyler = function (node, props) {
        return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
    };
    function index(nodeOrSelector, props) {
        var node = typeof nodeOrSelector === 'string' ? document.querySelector(nodeOrSelector) : nodeOrSelector;
        return getStyler(node, props);
    }

    var isNum = function (v) {
        return typeof v === 'number';
    };
    var isPoint = function (point) {
        return point.x !== undefined && point.y !== undefined;
    };
    var isPoint3D = function (point) {
        return point.z !== undefined;
    };
    var toDecimal = function (num, precision) {
        if (precision === void 0) {
            precision = 2;
        }
        precision = Math.pow(10, precision);
        return Math.round(num * precision) / precision;
    };
    var ZERO_POINT = {
        x: 0,
        y: 0,
        z: 0
    };
    var distance1D = function (a, b) {
        return Math.abs(a - b);
    };
    var angle = function (a, b) {
        if (b === void 0) {
            b = ZERO_POINT;
        }
        return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
    };
    var degreesToRadians = function (degrees$$1) {
        return degrees$$1 * Math.PI / 180;
    };
    var dilate = function (a, b, dilation) {
        return a + (b - a) * dilation;
    };
    var distance = function (a, b) {
        if (b === void 0) {
            b = ZERO_POINT;
        }
        if (isNum(a) && isNum(b)) {
            return distance1D(a, b);
        } else if (isPoint(a) && isPoint(b)) {
            var xDelta = distance1D(a.x, b.x);
            var yDelta = distance1D(a.y, b.y);
            var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
            return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
        }
        return 0;
    };
    var getProgressFromValue = function (from, to, value) {
        var toFromDifference = to - from;
        return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
    };
    var getValueFromProgress = function (from, to, progress) {
        return -progress * from + progress * to + from;
    };
    var pointFromAngleAndDistance = function (origin, angle, distance) {
        angle = degreesToRadians(angle);
        return {
            x: distance * Math.cos(angle) + origin.x,
            y: distance * Math.sin(angle) + origin.y
        };
    };
    var radiansToDegrees = function (radians) {
        return radians * 180 / Math.PI;
    };
    var smooth = function (newValue, oldValue, duration, smoothing) {
        if (smoothing === void 0) {
            smoothing = 0;
        }
        return toDecimal(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
    };
    var speedPerFrame = function (xps, frameDuration) {
        return isNum(xps) ? xps / (1000 / frameDuration) : 0;
    };
    var speedPerSecond = function (velocity, frameDuration) {
        return frameDuration ? velocity * (1000 / frameDuration) : 0;
    };
    var stepProgress = function (steps, progress) {
        var segment = 1 / (steps - 1);
        var subsegment = 1 / (2 * (steps - 1));
        var percentProgressOfTarget = Math.min(progress, 1);
        var subsegmentProgressOfTarget = percentProgressOfTarget / subsegment;
        var segmentProgressOfTarget = Math.floor((subsegmentProgressOfTarget + 1) / 2);
        return segmentProgressOfTarget * segment;
    };

    var calc = /*#__PURE__*/Object.freeze({
        isPoint: isPoint,
        isPoint3D: isPoint3D,
        angle: angle,
        degreesToRadians: degreesToRadians,
        dilate: dilate,
        distance: distance,
        getProgressFromValue: getProgressFromValue,
        getValueFromProgress: getValueFromProgress,
        pointFromAngleAndDistance: pointFromAngleAndDistance,
        radiansToDegrees: radiansToDegrees,
        smooth: smooth,
        speedPerFrame: speedPerFrame,
        speedPerSecond: speedPerSecond,
        stepProgress: stepProgress
    });

    var identity = function (v) {
        return v;
    };
    var appendUnit = function (unit) {
        return function (v) {
            return "" + v + unit;
        };
    };
    var applyOffset = function (from, to) {
        var hasReceivedFrom = true;
        if (to === undefined) {
            to = from;
            hasReceivedFrom = false;
        }
        var getOffset = function (v) {
            return v - from;
        };
        var applyOffsetTo = function (v) {
            return v + to;
        };
        return function (v) {
            if (hasReceivedFrom) {
                return applyOffsetTo(getOffset(v));
            } else {
                from = v;
                hasReceivedFrom = true;
                return to;
            }
        };
    };
    var blend = function (from, to, v) {
        var fromExpo = from * from;
        var toExpo = to * to;
        return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
    };
    var blendColor = function (from, to) {
        var fromColor = typeof from === 'string' ? color.parse(from) : from;
        var toColor = typeof to === 'string' ? color.parse(to) : to;
        var blended = __assign({}, fromColor);
        var blendFunc = from.hue !== undefined || typeof from === 'string' && hsla.test(from) ? getValueFromProgress : blend;
        return function (v) {
            blended = __assign({}, blended);
            for (var key in blended) {
                if (key !== 'alpha' && blended.hasOwnProperty(key)) {
                    blended[key] = blendFunc(fromColor[key], toColor[key], v);
                }
            }
            blended.alpha = getValueFromProgress(fromColor.alpha, toColor.alpha, v);
            return blended;
        };
    };
    var blendArray = function (from, to) {
        var output = from.slice();
        var numValues = output.length;
        var blendValue = from.map(function (fromThis, i) {
            var toThis = to[i];
            return typeof fromThis === 'number' ? function (v) {
                return getValueFromProgress(fromThis, toThis, v);
            } : blendColor(fromThis, toThis);
        });
        return function (v) {
            for (var i = 0; i < numValues; i++) {
                output[i] = blendValue[i](v);
            }
            return output;
        };
    };
    var clamp$1 = function (min, max) {
        return function (v) {
            return Math.min(Math.max(v, min), max);
        };
    };
    var combineFunctions = function (a, b) {
        return function (v) {
            return b(a(v));
        };
    };
    var pipe = function () {
        var transformers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            transformers[_i] = arguments[_i];
        }
        return transformers.reduce(combineFunctions);
    };
    var conditional = function (check, apply) {
        return function (v) {
            return check(v) ? apply(v) : v;
        };
    };
    var slowInterpolate = function (input, output, rangeLength, rangeEasing) {
        var finalIndex = rangeLength - 1;
        if (input[0] > input[finalIndex]) {
            input.reverse();
            output.reverse();
        }
        return function (v) {
            if (v <= input[0]) {
                return output[0];
            }
            if (v >= input[finalIndex]) {
                return output[finalIndex];
            }
            var i = 1;
            for (; i < rangeLength; i++) {
                if (input[i] > v || i === finalIndex) {
                    break;
                }
            }
            var progressInRange = getProgressFromValue(input[i - 1], input[i], v);
            var easedProgress = rangeEasing ? rangeEasing[i - 1](progressInRange) : progressInRange;
            return getValueFromProgress(output[i - 1], output[i], easedProgress);
        };
    };
    var fastInterpolate = function (minA, maxA, minB, maxB) {
        return function (v) {
            return (v - minA) * (maxB - minB) / (maxA - minA) + minB;
        };
    };
    var interpolate = function (input, output, rangeEasing) {
        var rangeLength = input.length;
        return rangeLength !== 2 ? slowInterpolate(input, output, rangeLength, rangeEasing) : fastInterpolate(input[0], input[1], output[0], output[1]);
    };
    var generateStaticSpring = function (alterDisplacement) {
        if (alterDisplacement === void 0) {
            alterDisplacement = identity;
        }
        return function (constant, origin) {
            return function (v) {
                var displacement = origin - v;
                var springModifiedDisplacement = -constant * (0 - alterDisplacement(Math.abs(displacement)));
                return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
            };
        };
    };
    var linearSpring = /*#__PURE__*/generateStaticSpring();
    var nonlinearSpring = /*#__PURE__*/generateStaticSpring(Math.sqrt);
    var wrap = function (min, max) {
        return function (v) {
            var rangeSize = max - min;
            return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
        };
    };
    var smooth$1 = function (strength) {
        if (strength === void 0) {
            strength = 50;
        }
        var previousValue = 0;
        var lastUpdated = 0;
        return function (v) {
            var currentFramestamp = getFrameData().timestamp;
            var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
            var newValue = timeDelta ? smooth(v, previousValue, timeDelta, strength) : previousValue;
            lastUpdated = currentFramestamp;
            previousValue = newValue;
            return newValue;
        };
    };
    var snap = function (points) {
        if (typeof points === 'number') {
            return function (v) {
                return Math.round(v / points) * points;
            };
        } else {
            var i_1 = 0;
            var numPoints_1 = points.length;
            return function (v) {
                var lastDistance = Math.abs(points[0] - v);
                for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                    var point = points[i_1];
                    var distance$$1 = Math.abs(point - v);
                    if (distance$$1 === 0) return point;
                    if (distance$$1 > lastDistance) return points[i_1 - 1];
                    if (i_1 === numPoints_1 - 1) return point;
                    lastDistance = distance$$1;
                }
            };
        }
    };
    var steps$1 = function (st, min, max) {
        if (min === void 0) {
            min = 0;
        }
        if (max === void 0) {
            max = 1;
        }
        return function (v) {
            var progress = getProgressFromValue(min, max, v);
            return getValueFromProgress(min, max, stepProgress(st, progress));
        };
    };
    var transformMap = function (childTransformers) {
        return function (v) {
            var output = __assign({}, v);
            for (var key in childTransformers) {
                if (childTransformers.hasOwnProperty(key)) {
                    var childTransformer = childTransformers[key];
                    output[key] = childTransformer(v[key]);
                }
            }
            return output;
        };
    };

    var transformers = /*#__PURE__*/Object.freeze({
        appendUnit: appendUnit,
        applyOffset: applyOffset,
        blendColor: blendColor,
        blendArray: blendArray,
        clamp: clamp$1,
        pipe: pipe,
        conditional: conditional,
        interpolate: interpolate,
        generateStaticSpring: generateStaticSpring,
        linearSpring: linearSpring,
        nonlinearSpring: nonlinearSpring,
        wrap: wrap,
        smooth: smooth$1,
        snap: snap,
        steps: steps$1,
        transformMap: transformMap
    });

    var Chainable = /*#__PURE__*/function () {
        function Chainable(props) {
            if (props === void 0) {
                props = {};
            }
            this.props = props;
        }
        Chainable.prototype.applyMiddleware = function (middleware) {
            return this.create(__assign({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
        };
        Chainable.prototype.pipe = function () {
            var funcs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                funcs[_i] = arguments[_i];
            }
            var pipedUpdate = funcs.length === 1 ? funcs[0] : pipe.apply(void 0, funcs);
            return this.applyMiddleware(function (update) {
                return function (v) {
                    return update(pipedUpdate(v));
                };
            });
        };
        Chainable.prototype.while = function (predicate) {
            return this.applyMiddleware(function (update, complete) {
                return function (v) {
                    return predicate(v) ? update(v) : complete();
                };
            });
        };
        Chainable.prototype.filter = function (predicate) {
            return this.applyMiddleware(function (update) {
                return function (v) {
                    return predicate(v) && update(v);
                };
            });
        };
        return Chainable;
    }();

    var Observer = /*#__PURE__*/function () {
        function Observer(_a, observer) {
            var middleware = _a.middleware,
                onComplete = _a.onComplete;
            var _this = this;
            this.isActive = true;
            this.update = function (v) {
                if (_this.observer.update) _this.updateObserver(v);
            };
            this.complete = function () {
                if (_this.observer.complete && _this.isActive) _this.observer.complete();
                if (_this.onComplete) _this.onComplete();
                _this.isActive = false;
            };
            this.error = function (err) {
                if (_this.observer.error && _this.isActive) _this.observer.error(err);
                _this.isActive = false;
            };
            this.observer = observer;
            this.updateObserver = function (v) {
                return observer.update(v);
            };
            this.onComplete = onComplete;
            if (observer.update && middleware && middleware.length) {
                middleware.forEach(function (m) {
                    return _this.updateObserver = m(_this.updateObserver, _this.complete);
                });
            }
        }
        return Observer;
    }();
    var createObserver = function (observerCandidate, _a, onComplete) {
        var middleware = _a.middleware;
        if (typeof observerCandidate === 'function') {
            return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
        } else {
            return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
        }
    };

    var Action = /*#__PURE__*/function (_super) {
        __extends(Action, _super);
        function Action() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Action.prototype.create = function (props) {
            return new Action(props);
        };
        Action.prototype.start = function (observerCandidate) {
            if (observerCandidate === void 0) {
                observerCandidate = {};
            }
            var isComplete = false;
            var subscription = {
                stop: function () {
                    return undefined;
                }
            };
            var _a = this.props,
                init = _a.init,
                observerProps = __rest(_a, ["init"]);
            var observer = createObserver(observerCandidate, observerProps, function () {
                isComplete = true;
                subscription.stop();
            });
            var api = init(observer);
            subscription = api ? __assign({}, subscription, api) : subscription;
            if (observerCandidate.registerParent) {
                observerCandidate.registerParent(subscription);
            }
            if (isComplete) subscription.stop();
            return subscription;
        };
        return Action;
    }(Chainable);
    var action = function (init) {
        return new Action({ init: init });
    };

    var BaseMulticast = /*#__PURE__*/function (_super) {
        __extends(BaseMulticast, _super);
        function BaseMulticast() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.subscribers = [];
            return _this;
        }
        BaseMulticast.prototype.complete = function () {
            this.subscribers.forEach(function (subscriber) {
                return subscriber.complete();
            });
        };
        BaseMulticast.prototype.error = function (err) {
            this.subscribers.forEach(function (subscriber) {
                return subscriber.error(err);
            });
        };
        BaseMulticast.prototype.update = function (v) {
            for (var i = 0; i < this.subscribers.length; i++) {
                this.subscribers[i].update(v);
            }
        };
        BaseMulticast.prototype.subscribe = function (observerCandidate) {
            var _this = this;
            var observer = createObserver(observerCandidate, this.props);
            this.subscribers.push(observer);
            var subscription = {
                unsubscribe: function () {
                    var index$$1 = _this.subscribers.indexOf(observer);
                    if (index$$1 !== -1) _this.subscribers.splice(index$$1, 1);
                }
            };
            return subscription;
        };
        BaseMulticast.prototype.stop = function () {
            if (this.parent) this.parent.stop();
        };
        BaseMulticast.prototype.registerParent = function (subscription) {
            this.stop();
            this.parent = subscription;
        };
        return BaseMulticast;
    }(Chainable);

    var Multicast = /*#__PURE__*/function (_super) {
        __extends(Multicast, _super);
        function Multicast() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Multicast.prototype.create = function (props) {
            return new Multicast(props);
        };
        return Multicast;
    }(BaseMulticast);

    var isValueList = function (v) {
        return Array.isArray(v);
    };
    var isSingleValue = function (v) {
        var typeOfV = typeof v;
        return typeOfV === 'string' || typeOfV === 'number';
    };
    var ValueReaction = /*#__PURE__*/function (_super) {
        __extends(ValueReaction, _super);
        function ValueReaction(props) {
            var _this = _super.call(this, props) || this;
            _this.scheduleVelocityCheck = function () {
                return sync.postRender(_this.velocityCheck);
            };
            _this.velocityCheck = function (_a) {
                var timestamp = _a.timestamp;
                if (timestamp !== _this.lastUpdated) {
                    _this.prev = _this.current;
                }
            };
            _this.prev = _this.current = props.value || 0;
            if (isSingleValue(_this.current)) {
                _this.updateCurrent = function (v) {
                    return _this.current = v;
                };
                _this.getVelocityOfCurrent = function () {
                    return _this.getSingleVelocity(_this.current, _this.prev);
                };
            } else if (isValueList(_this.current)) {
                _this.updateCurrent = function (v) {
                    return _this.current = v.slice();
                };
                _this.getVelocityOfCurrent = function () {
                    return _this.getListVelocity();
                };
            } else {
                _this.updateCurrent = function (v) {
                    _this.current = {};
                    for (var key in v) {
                        if (v.hasOwnProperty(key)) {
                            _this.current[key] = v[key];
                        }
                    }
                };
                _this.getVelocityOfCurrent = function () {
                    return _this.getMapVelocity();
                };
            }
            if (props.initialSubscription) _this.subscribe(props.initialSubscription);
            return _this;
        }
        ValueReaction.prototype.create = function (props) {
            return new ValueReaction(props);
        };
        ValueReaction.prototype.get = function () {
            return this.current;
        };
        ValueReaction.prototype.getVelocity = function () {
            return this.getVelocityOfCurrent();
        };
        ValueReaction.prototype.update = function (v) {
            _super.prototype.update.call(this, v);
            this.prev = this.current;
            this.updateCurrent(v);
            var _a = getFrameData(),
                delta = _a.delta,
                timestamp = _a.timestamp;
            this.timeDelta = delta;
            this.lastUpdated = timestamp;
            sync.postRender(this.scheduleVelocityCheck);
        };
        ValueReaction.prototype.subscribe = function (observerCandidate) {
            var sub = _super.prototype.subscribe.call(this, observerCandidate);
            this.update(this.current);
            return sub;
        };
        ValueReaction.prototype.getSingleVelocity = function (current, prev) {
            return typeof current === 'number' && typeof prev === 'number' ? speedPerSecond(current - prev, this.timeDelta) : speedPerSecond(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
        };
        ValueReaction.prototype.getListVelocity = function () {
            var _this = this;
            return this.current.map(function (c, i) {
                return _this.getSingleVelocity(c, _this.prev[i]);
            });
        };
        ValueReaction.prototype.getMapVelocity = function () {
            var velocity = {};
            for (var key in this.current) {
                if (this.current.hasOwnProperty(key)) {
                    velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
                }
            }
            return velocity;
        };
        return ValueReaction;
    }(BaseMulticast);
    var value = function (value, initialSubscription) {
        return new ValueReaction({ value: value, initialSubscription: initialSubscription });
    };

    var multi = function (_a) {
        var getCount = _a.getCount,
            getFirst = _a.getFirst,
            getOutput = _a.getOutput,
            mapApi = _a.mapApi,
            setProp = _a.setProp,
            startActions = _a.startActions;
        return function (actions) {
            return action(function (_a) {
                var update = _a.update,
                    complete = _a.complete,
                    error = _a.error;
                var numActions = getCount(actions);
                var output = getOutput();
                var updateOutput = function () {
                    return update(output);
                };
                var numCompletedActions = 0;
                var subs = startActions(actions, function (a, name) {
                    var hasCompleted = false;
                    return a.start({
                        complete: function () {
                            if (!hasCompleted) {
                                hasCompleted = true;
                                numCompletedActions++;
                                if (numCompletedActions === numActions) sync.update(complete);
                            }
                        },
                        error: error,
                        update: function (v) {
                            setProp(output, name, v);
                            sync.update(updateOutput, false, true);
                        }
                    });
                });
                return Object.keys(getFirst(subs)).reduce(function (api, methodName) {
                    api[methodName] = mapApi(subs, methodName);
                    return api;
                }, {});
            });
        };
    };

    var composite = /*#__PURE__*/multi({
        getOutput: function () {
            return {};
        },
        getCount: function (subs) {
            return Object.keys(subs).length;
        },
        getFirst: function (subs) {
            return subs[Object.keys(subs)[0]];
        },
        mapApi: function (subs, methodName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return Object.keys(subs).reduce(function (output, propKey) {
                    var _a;
                    if (subs[propKey][methodName]) {
                        args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                    }
                    return output;
                }, {});
            };
        },
        setProp: function (output, name, v) {
            return output[name] = v;
        },
        startActions: function (actions, starter) {
            return Object.keys(actions).reduce(function (subs, key) {
                subs[key] = starter(actions[key], key);
                return subs;
            }, {});
        }
    });

    var parallel = /*#__PURE__*/multi({
        getOutput: function () {
            return [];
        },
        getCount: function (subs) {
            return subs.length;
        },
        getFirst: function (subs) {
            return subs[0];
        },
        mapApi: function (subs, methodName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return subs.map(function (sub, i) {
                    if (sub[methodName]) {
                        return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
                    }
                });
            };
        },
        setProp: function (output, name, v) {
            return output[name] = v;
        },
        startActions: function (actions, starter) {
            return actions.map(function (action, i) {
                return starter(action, i);
            });
        }
    });
    var parallel$1 = function () {
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        return parallel(actions);
    };

    var createVectorTests = function (typeTests) {
        var testNames = Object.keys(typeTests);
        var isVectorProp = function (prop, key) {
            return prop !== undefined && !typeTests[key](prop);
        };
        var getVectorKeys = function (props) {
            return testNames.reduce(function (vectorKeys, key) {
                if (isVectorProp(props[key], key)) vectorKeys.push(key);
                return vectorKeys;
            }, []);
        };
        var testVectorProps = function (props) {
            return props && testNames.some(function (key) {
                return isVectorProp(props[key], key);
            });
        };
        return { getVectorKeys: getVectorKeys, testVectorProps: testVectorProps };
    };
    var unitTypes = [px, percent, degrees, vh, vw];
    var findUnitType = function (prop) {
        return unitTypes.find(function (type) {
            return type.test(prop);
        });
    };
    var isUnitProp = function (prop) {
        return Boolean(findUnitType(prop));
    };
    var createAction = function (action, props) {
        return action(props);
    };
    var reduceArrayValue = function (i) {
        return function (props, key) {
            props[key] = props[key][i];
            return props;
        };
    };
    var createArrayAction = function (action, props, vectorKeys) {
        var firstVectorKey = vectorKeys[0];
        var actionList = props[firstVectorKey].map(function (v, i) {
            var childActionProps = vectorKeys.reduce(reduceArrayValue(i), __assign({}, props));
            return getActionCreator(v)(action, childActionProps);
        });
        return parallel$1.apply(void 0, actionList);
    };
    var reduceObjectValue = function (key) {
        return function (props, propKey) {
            props[propKey] = props[propKey][key];
            return props;
        };
    };
    var createObjectAction = function (action, props, vectorKeys) {
        var firstVectorKey = vectorKeys[0];
        var actionMap = Object.keys(props[firstVectorKey]).reduce(function (map, key) {
            var childActionProps = vectorKeys.reduce(reduceObjectValue(key), __assign({}, props));
            map[key] = getActionCreator(props[firstVectorKey][key])(action, childActionProps);
            return map;
        }, {});
        return composite(actionMap);
    };
    var createUnitAction = function (action, _a) {
        var from = _a.from,
            to = _a.to,
            props = __rest(_a, ["from", "to"]);
        var unitType = findUnitType(from) || findUnitType(to);
        var transform = unitType.transform,
            parse = unitType.parse;
        return action(__assign({}, props, { from: typeof from === 'string' ? parse(from) : from, to: typeof to === 'string' ? parse(to) : to })).pipe(transform);
    };
    var createColorAction = function (action, _a) {
        var from = _a.from,
            to = _a.to,
            props = __rest(_a, ["from", "to"]);
        return action(__assign({}, props, { from: 0, to: 1 })).pipe(blendColor(from, to), color.transform);
    };
    var createComplexAction = function (action, _a) {
        var from = _a.from,
            to = _a.to,
            props = __rest(_a, ["from", "to"]);
        var valueTemplate = complex.createTransformer(from);
        invariant$1(valueTemplate(from) === complex.createTransformer(to)(from), "Values '" + from + "' and '" + to + "' are of different format, or a value might have changed value type.");
        return action(__assign({}, props, { from: 0, to: 1 })).pipe(blendArray(complex.parse(from), complex.parse(to)), valueTemplate);
    };
    var createVectorAction = function (action, typeTests) {
        var _a = createVectorTests(typeTests),
            testVectorProps = _a.testVectorProps,
            getVectorKeys = _a.getVectorKeys;
        var vectorAction = function (props) {
            var isVector = testVectorProps(props);
            if (!isVector) return action(props);
            var vectorKeys = getVectorKeys(props);
            var testKey = vectorKeys[0];
            var testProp = props[testKey];
            return getActionCreator(testProp)(action, props, vectorKeys);
        };
        return vectorAction;
    };
    var getActionCreator = function (prop) {
        var actionCreator = createAction;
        if (typeof prop === 'number') {
            actionCreator = createAction;
        } else if (Array.isArray(prop)) {
            actionCreator = createArrayAction;
        } else if (isUnitProp(prop)) {
            actionCreator = createUnitAction;
        } else if (color.test(prop)) {
            actionCreator = createColorAction;
        } else if (complex.test(prop)) {
            actionCreator = createComplexAction;
        } else if (typeof prop === 'object') {
            actionCreator = createObjectAction;
        }
        return actionCreator;
    };

    var decay = function (props) {
        if (props === void 0) {
            props = {};
        }
        return action(function (_a) {
            var complete = _a.complete,
                update = _a.update;
            var _b = props.velocity,
                velocity = _b === void 0 ? 0 : _b,
                _c = props.from,
                from = _c === void 0 ? 0 : _c,
                _d = props.power,
                power = _d === void 0 ? 0.8 : _d,
                _e = props.timeConstant,
                timeConstant = _e === void 0 ? 350 : _e,
                _f = props.restDelta,
                restDelta = _f === void 0 ? 0.5 : _f,
                modifyTarget = props.modifyTarget;
            var elapsed = 0;
            var amplitude = power * velocity;
            var idealTarget = Math.round(from + amplitude);
            var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);
            var process = sync.update(function (_a) {
                var frameDelta = _a.delta;
                elapsed += frameDelta;
                var delta = -amplitude * Math.exp(-elapsed / timeConstant);
                var isMoving = delta > restDelta || delta < -restDelta;
                var current = isMoving ? target + delta : target;
                update(current);
                if (!isMoving) {
                    cancelSync.update(process);
                    complete();
                }
            }, true);
            return {
                stop: function () {
                    return cancelSync.update(process);
                }
            };
        });
    };
    var vectorDecay = /*#__PURE__*/createVectorAction(decay, {
        from: number.test,
        modifyTarget: function (func) {
            return typeof func === 'function';
        },
        velocity: number.test
    });

    var scrubber = function (_a) {
        var _b = _a.from,
            from = _b === void 0 ? 0 : _b,
            _c = _a.to,
            to = _c === void 0 ? 1 : _c,
            _d = _a.ease,
            ease = _d === void 0 ? linear : _d;
        return action(function (_a) {
            var update = _a.update;
            return {
                seek: function (progress) {
                    return update(progress);
                }
            };
        }).pipe(ease, function (v) {
            return getValueFromProgress(from, to, v);
        });
    };
    var vectorScrubber = /*#__PURE__*/createVectorAction(scrubber, {
        ease: function (func) {
            return typeof func === 'function';
        },
        from: number.test,
        to: number.test
    });

    var clampProgress = /*#__PURE__*/clamp$1(0, 1);
    var tween = function (props) {
        if (props === void 0) {
            props = {};
        }
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete;
            var _b = props.duration,
                duration = _b === void 0 ? 300 : _b,
                _c = props.ease,
                ease = _c === void 0 ? easeOut : _c,
                _d = props.flip,
                flip = _d === void 0 ? 0 : _d,
                _e = props.loop,
                loop = _e === void 0 ? 0 : _e,
                _f = props.yoyo,
                yoyo = _f === void 0 ? 0 : _f;
            var _g = props.from,
                from = _g === void 0 ? 0 : _g,
                _h = props.to,
                to = _h === void 0 ? 1 : _h,
                _j = props.elapsed,
                elapsed = _j === void 0 ? 0 : _j,
                _k = props.playDirection,
                playDirection = _k === void 0 ? 1 : _k,
                _l = props.flipCount,
                flipCount = _l === void 0 ? 0 : _l,
                _m = props.yoyoCount,
                yoyoCount = _m === void 0 ? 0 : _m,
                _o = props.loopCount,
                loopCount = _o === void 0 ? 0 : _o;
            var playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
            var progress = 0;
            var process;
            var isActive = false;
            var reverseTween = function () {
                return playDirection *= -1;
            };
            var isTweenComplete = function () {
                var _a;
                var isComplete = playDirection === 1 ? isActive && elapsed >= duration : isActive && elapsed <= 0;
                if (!isComplete) return false;
                if (isComplete && !loop && !flip && !yoyo) return true;
                var isStepTaken = false;
                if (loop && loopCount < loop) {
                    elapsed = 0;
                    loopCount++;
                    isStepTaken = true;
                } else if (flip && flipCount < flip) {
                    elapsed = duration - elapsed;
                    _a = [to, from], from = _a[0], to = _a[1];
                    playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
                    flipCount++;
                    isStepTaken = true;
                } else if (yoyo && yoyoCount < yoyo) {
                    reverseTween();
                    yoyoCount++;
                    isStepTaken = true;
                }
                return !isStepTaken;
            };
            var updateTween = function () {
                progress = clampProgress(getProgressFromValue(0, duration, elapsed));
                playhead.seek(progress);
            };
            var startTimer = function () {
                isActive = true;
                process = sync.update(function (_a) {
                    var delta = _a.delta;
                    elapsed += delta * playDirection;
                    updateTween();
                    if (isTweenComplete() && complete) {
                        cancelSync.update(process);
                        sync.update(complete, false, true);
                    }
                }, true);
            };
            var stopTimer = function () {
                isActive = false;
                if (process) cancelSync.update(process);
            };
            startTimer();
            return {
                isActive: function () {
                    return isActive;
                },
                getElapsed: function () {
                    return clamp$1(0, duration)(elapsed);
                },
                getProgress: function () {
                    return progress;
                },
                stop: function () {
                    stopTimer();
                },
                pause: function () {
                    stopTimer();
                    return this;
                },
                resume: function () {
                    if (!isActive) startTimer();
                    return this;
                },
                seek: function (newProgress) {
                    elapsed = getValueFromProgress(0, duration, newProgress);
                    sync.update(updateTween, false, true);
                    return this;
                },
                reverse: function () {
                    reverseTween();
                    return this;
                }
            };
        });
    };

    var clampProgress$1 = /*#__PURE__*/clamp$1(0, 1);
    var defaultEasings = function (values, easing$$1) {
        return values.map(function () {
            return easing$$1 || easeOut;
        }).splice(0, values.length - 1);
    };
    var defaultTimings = function (values) {
        var numValues = values.length;
        return values.map(function (value, i) {
            return i !== 0 ? i / (numValues - 1) : 0;
        });
    };
    var interpolateScrubbers = function (input, scrubbers, update) {
        var rangeLength = input.length;
        var finalInputIndex = rangeLength - 1;
        var finalScrubberIndex = finalInputIndex - 1;
        var subs = scrubbers.map(function (scrub) {
            return scrub.start(update);
        });
        return function (v) {
            if (v <= input[0]) {
                subs[0].seek(0);
            }
            if (v >= input[finalInputIndex]) {
                subs[finalScrubberIndex].seek(1);
            }
            var i = 1;
            for (; i < rangeLength; i++) {
                if (input[i] > v || i === finalInputIndex) break;
            }
            var progressInRange = getProgressFromValue(input[i - 1], input[i], v);
            subs[i - 1].seek(clampProgress$1(progressInRange));
        };
    };
    var keyframes = function (_a) {
        var easings = _a.easings,
            _b = _a.ease,
            ease = _b === void 0 ? linear : _b,
            times = _a.times,
            values = _a.values,
            tweenProps = __rest(_a, ["easings", "ease", "times", "values"]);
        easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
        times = times || defaultTimings(values);
        var scrubbers = easings.map(function (easing$$1, i) {
            return vectorScrubber({
                from: values[i],
                to: values[i + 1],
                ease: easing$$1
            });
        });
        return tween(__assign({}, tweenProps, { ease: ease })).applyMiddleware(function (update) {
            return interpolateScrubbers(times, scrubbers, update);
        });
    };

    var physics = function (props) {
        if (props === void 0) {
            props = {};
        }
        return action(function (_a) {
            var complete = _a.complete,
                update = _a.update;
            var _b = props.acceleration,
                acceleration = _b === void 0 ? 0 : _b,
                _c = props.friction,
                friction = _c === void 0 ? 0 : _c,
                _d = props.velocity,
                velocity = _d === void 0 ? 0 : _d,
                springStrength = props.springStrength,
                to = props.to;
            var _e = props.restSpeed,
                restSpeed = _e === void 0 ? 0.001 : _e,
                _f = props.from,
                from = _f === void 0 ? 0 : _f;
            var current = from;
            var process = sync.update(function (_a) {
                var delta = _a.delta;
                var elapsed = Math.max(delta, 16);
                if (acceleration) velocity += speedPerFrame(acceleration, elapsed);
                if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
                if (springStrength !== undefined && to !== undefined) {
                    var distanceToTarget = to - current;
                    velocity += distanceToTarget * speedPerFrame(springStrength, elapsed);
                }
                current += speedPerFrame(velocity, elapsed);
                update(current);
                var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
                if (isComplete) {
                    cancelSync.update(process);
                    complete();
                }
            }, true);
            return {
                set: function (v) {
                    current = v;
                    return this;
                },
                setAcceleration: function (v) {
                    acceleration = v;
                    return this;
                },
                setFriction: function (v) {
                    friction = v;
                    return this;
                },
                setSpringStrength: function (v) {
                    springStrength = v;
                    return this;
                },
                setSpringTarget: function (v) {
                    to = v;
                    return this;
                },
                setVelocity: function (v) {
                    velocity = v;
                    return this;
                },
                stop: function () {
                    return cancelSync.update(process);
                }
            };
        });
    };
    var vectorPhysics = /*#__PURE__*/createVectorAction(physics, {
        acceleration: number.test,
        friction: number.test,
        velocity: number.test,
        from: number.test,
        to: number.test,
        springStrength: number.test
    });

    var spring = function (props) {
        if (props === void 0) {
            props = {};
        }
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete;
            var _b = props.velocity,
                velocity = _b === void 0 ? 0.0 : _b;
            var _c = props.from,
                from = _c === void 0 ? 0.0 : _c,
                _d = props.to,
                to = _d === void 0 ? 0.0 : _d,
                _e = props.stiffness,
                stiffness = _e === void 0 ? 100 : _e,
                _f = props.damping,
                damping = _f === void 0 ? 10 : _f,
                _g = props.mass,
                mass = _g === void 0 ? 1.0 : _g,
                _h = props.restSpeed,
                restSpeed = _h === void 0 ? 0.01 : _h,
                _j = props.restDelta,
                restDelta = _j === void 0 ? 0.01 : _j;
            var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
            var t = 0;
            var delta = to - from;
            var position = from;
            var prevPosition = position;
            var process = sync.update(function (_a) {
                var timeDelta = _a.delta;
                t += timeDelta;
                var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
                var angularFreq = Math.sqrt(stiffness / mass) / 1000;
                prevPosition = position;
                if (dampingRatio < 1) {
                    var envelope = Math.exp(-dampingRatio * angularFreq * t);
                    var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                    position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
                } else {
                    var envelope = Math.exp(-angularFreq * t);
                    position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
                }
                velocity = speedPerSecond(position - prevPosition, timeDelta);
                var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
                var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
                if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                    position = to;
                    update(position);
                    cancelSync.update(process);
                    complete();
                } else {
                    update(position);
                }
            }, true);
            return {
                stop: function () {
                    return cancelSync.update(process);
                }
            };
        });
    };
    var vectorSpring = /*#__PURE__*/createVectorAction(spring, {
        from: number.test,
        to: number.test,
        stiffness: number.test,
        damping: number.test,
        mass: number.test,
        velocity: number.test
    });

    var listen = function (element, events, options) {
        return action(function (_a) {
            var update = _a.update;
            var eventNames = events.split(' ').map(function (eventName) {
                element.addEventListener(eventName, update, options);
                return eventName;
            });
            return {
                stop: function () {
                    return eventNames.forEach(function (eventName) {
                        return element.removeEventListener(eventName, update, options);
                    });
                }
            };
        });
    };

    var defaultPointerPos = function () {
        return {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            x: 0,
            y: 0
        };
    };
    var eventToPoint = function (e, point) {
        if (point === void 0) {
            point = defaultPointerPos();
        }
        point.clientX = point.x = e.clientX;
        point.clientY = point.y = e.clientY;
        point.pageX = e.pageX;
        point.pageY = e.pageY;
        return point;
    };

    var points = [/*#__PURE__*/defaultPointerPos()];
    var isTouchDevice = false;
    if (typeof document !== 'undefined') {
        var updatePointsLocation = function (_a) {
            var touches = _a.touches;
            isTouchDevice = true;
            var numTouches = touches.length;
            points.length = 0;
            for (var i = 0; i < numTouches; i++) {
                var thisTouch = touches[i];
                points.push(eventToPoint(thisTouch));
            }
        };
        listen(document, 'touchstart touchmove', {
            passive: true,
            capture: true
        }).start(updatePointsLocation);
    }
    var multitouch = function (_a) {
        var _b = _a === void 0 ? {} : _a,
            _c = _b.preventDefault,
            preventDefault = _c === void 0 ? true : _c,
            _d = _b.scale,
            scale$$1 = _d === void 0 ? 1.0 : _d,
            _e = _b.rotate,
            rotate = _e === void 0 ? 0.0 : _e;
        return action(function (_a) {
            var update = _a.update;
            var output = {
                touches: points,
                scale: scale$$1,
                rotate: rotate
            };
            var initialDistance = 0.0;
            var initialRotation = 0.0;
            var isGesture = points.length > 1;
            if (isGesture) {
                var firstTouch = points[0],
                    secondTouch = points[1];
                initialDistance = distance(firstTouch, secondTouch);
                initialRotation = angle(firstTouch, secondTouch);
            }
            var updatePoint = function () {
                if (isGesture) {
                    var firstTouch = points[0],
                        secondTouch = points[1];
                    var newDistance = distance(firstTouch, secondTouch);
                    var newRotation = angle(firstTouch, secondTouch);
                    output.scale = scale$$1 * (newDistance / initialDistance);
                    output.rotate = rotate + (newRotation - initialRotation);
                }
                update(output);
            };
            var onMove = function (e) {
                if (preventDefault || e.touches.length > 1) e.preventDefault();
                sync.update(updatePoint);
            };
            var updateOnMove = listen(document, 'touchmove', {
                passive: !preventDefault
            }).start(onMove);
            if (isTouchDevice) sync.update(updatePoint);
            return {
                stop: function () {
                    cancelSync.update(updatePoint);
                    updateOnMove.stop();
                }
            };
        });
    };
    var getIsTouchDevice = function () {
        return isTouchDevice;
    };

    var point = /*#__PURE__*/defaultPointerPos();
    var isMouseDevice = false;
    if (typeof document !== 'undefined') {
        var updatePointLocation = function (e) {
            isMouseDevice = true;
            eventToPoint(e, point);
        };
        listen(document, 'mousedown mousemove', true).start(updatePointLocation);
    }
    var mouse = function (_a) {
        var _b = (_a === void 0 ? {} : _a).preventDefault,
            preventDefault = _b === void 0 ? true : _b;
        return action(function (_a) {
            var update = _a.update;
            var updatePoint = function () {
                return update(point);
            };
            var onMove = function (e) {
                if (preventDefault) e.preventDefault();
                sync.update(updatePoint);
            };
            var updateOnMove = listen(document, 'mousemove').start(onMove);
            if (isMouseDevice) sync.update(updatePoint);
            return {
                stop: function () {
                    cancelSync.update(updatePoint);
                    updateOnMove.stop();
                }
            };
        });
    };

    var getFirstTouch = function (_a) {
        var firstTouch = _a[0];
        return firstTouch;
    };
    var pointer = function (props) {
        if (props === void 0) {
            props = {};
        }
        return getIsTouchDevice() ? multitouch(props).pipe(function (_a) {
            var touches = _a.touches;
            return touches;
        }, getFirstTouch) : mouse(props);
    };
    var index$1 = function (_a) {
        if (_a === void 0) {
            _a = {};
        }
        var x = _a.x,
            y = _a.y,
            props = __rest(_a, ["x", "y"]);
        if (x !== undefined || y !== undefined) {
            var applyXOffset_1 = applyOffset(x || 0);
            var applyYOffset_1 = applyOffset(y || 0);
            var delta_1 = { x: 0, y: 0 };
            return pointer(props).pipe(function (point) {
                delta_1.x = applyXOffset_1(point.x);
                delta_1.y = applyYOffset_1(point.y);
                return delta_1;
            });
        } else {
            return pointer(props);
        }
    };

    var chain = function () {
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete;
            var i = 0;
            var current;
            var playCurrent = function () {
                current = actions[i].start({
                    complete: function () {
                        i++;
                        i >= actions.length ? complete() : playCurrent();
                    },
                    update: update
                });
            };
            playCurrent();
            return {
                stop: function () {
                    return current && current.stop();
                }
            };
        });
    };

    var delay = function (timeToDelay) {
        return action(function (_a) {
            var complete = _a.complete;
            var timeout = setTimeout(complete, timeToDelay);
            return {
                stop: function () {
                    return clearTimeout(timeout);
                }
            };
        });
    };

    var HEY_LISTEN$3 = 'Hey, listen! ';
    var invariant$3 = function () { };
    {
        invariant$3 = function (check, message) {
            if (!check) {
                throw new Error(HEY_LISTEN$3.toUpperCase() + message);
            }
        };
    }

    var getPoseValues = function (_a) {
        var transition = _a.transition,
            delay = _a.delay,
            delayChildren = _a.delayChildren,
            staggerChildren = _a.staggerChildren,
            staggerDirection = _a.staggerDirection,
            afterChildren = _a.afterChildren,
            beforeChildren = _a.beforeChildren,
            preTransition = _a.preTransition,
            applyAtStart = _a.applyAtStart,
            applyAtEnd = _a.applyAtEnd,
            props = __rest(_a, ["transition", "delay", "delayChildren", "staggerChildren", "staggerDirection", "afterChildren", "beforeChildren", "preTransition", "applyAtStart", "applyAtEnd"]);
        return props;
    };
    var selectPoses = function (_a) {
        var label = _a.label,
            props = _a.props,
            values = _a.values,
            parentValues = _a.parentValues,
            ancestorValues = _a.ancestorValues,
            onChange = _a.onChange,
            passive = _a.passive,
            initialPose = _a.initialPose,
            poses = __rest(_a, ["label", "props", "values", "parentValues", "ancestorValues", "onChange", "passive", "initialPose"]);
        return poses;
    };
    var selectAllValues = function (values, selectValue) {
        var allValues = {};
        values.forEach(function (value, key) {
            return allValues[key] = selectValue(value);
        });
        return allValues;
    };

    var resolveProp = function (target, props) {
        return typeof target === 'function' ? target(props) : target;
    };
    var poseDefault = function (pose, prop, defaultValue, resolveProps) {
        return pose && pose[prop] !== undefined ? resolveProp(pose[prop], resolveProps) : defaultValue;
    };
    var startChildAnimations = function (children, next, pose, props) {
        var animations = [];
        var delay = poseDefault(pose, 'delayChildren', 0, props);
        var stagger = poseDefault(pose, 'staggerChildren', 0, props);
        var staggerDirection = poseDefault(pose, 'staggerDirection', 1, props);
        var maxStaggerDuration = (children.size - 1) * stagger;
        var generateStaggerDuration = staggerDirection === 1 ? function (i) {
            return i * stagger;
        } : function (i) {
            return maxStaggerDuration - i * stagger;
        };
        Array.from(children).forEach(function (child, i) {
            animations.push(child.set(next, __assign({}, props, { delay: delay + generateStaggerDuration(i) })));
        });
        return animations;
    };
    var resolveTransition = function (transition, key, value, props, convertTransitionDefinition, getInstantTransition) {
        var resolvedTransition;
        if (typeof transition === 'function') {
            resolvedTransition = transition(props);
        } else if (transition[key] || transition.default) {
            var keyTransition = transition[key] || transition.default;
            if (typeof keyTransition === 'function') {
                resolvedTransition = keyTransition(props);
            } else {
                resolvedTransition = keyTransition;
            }
        } else {
            resolvedTransition = transition;
        }
        return resolvedTransition === false ? getInstantTransition(value, props) : convertTransitionDefinition(value, resolvedTransition, props);
    };
    var findInsertionIndex = function (poseList, priorityList, priorityIndex) {
        var insertionIndex = 0;
        for (var i = priorityIndex - 1; i >= 0; i--) {
            var nextHighestPriorityIndex = poseList.indexOf(priorityList[i]);
            if (nextHighestPriorityIndex !== -1) {
                insertionIndex = nextHighestPriorityIndex + 1;
                break;
            }
        }
        return insertionIndex;
    };
    var applyValues = function (toApply, values, props, setValue, setValueNative) {
        invariant$3(typeof toApply === 'object', 'applyAtStart and applyAtEnd must be of type object');
        return Object.keys(toApply).forEach(function (key) {
            var valueToSet = resolveProp(toApply[key], props);
            values.has(key) ? setValue(values.get(key), valueToSet) : setValueNative(key, valueToSet, props);
        });
    };
    var createPoseSetter = function (setterProps) {
        var state = setterProps.state,
            poses = setterProps.poses,
            startAction = setterProps.startAction,
            stopAction = setterProps.stopAction,
            getInstantTransition = setterProps.getInstantTransition,
            addActionDelay = setterProps.addActionDelay,
            getTransitionProps = setterProps.getTransitionProps,
            resolveTarget = setterProps.resolveTarget,
            transformPose = setterProps.transformPose,
            posePriority = setterProps.posePriority,
            convertTransitionDefinition = setterProps.convertTransitionDefinition,
            setValue = setterProps.setValue,
            setValueNative = setterProps.setValueNative;
        return function (next, nextProps, propagate) {
            if (nextProps === void 0) {
                nextProps = {};
            }
            if (propagate === void 0) {
                propagate = true;
            }
            var children = state.children,
                values = state.values,
                props = state.props,
                activeActions = state.activeActions,
                activePoses = state.activePoses;
            var _a = nextProps.delay,
                delay = _a === void 0 ? 0 : _a;
            var hasChildren = children.size;
            var baseTransitionProps = __assign({}, props, nextProps);
            var nextPose = poses[next];
            var getChildAnimations = function () {
                return hasChildren && propagate ? startChildAnimations(children, next, nextPose, baseTransitionProps) : [];
            };
            var getParentAnimations = function () {
                if (!nextPose) return [];
                if (transformPose) nextPose = transformPose(nextPose, next, state);
                var preTransition = nextPose.preTransition,
                    getTransition = nextPose.transition,
                    applyAtStart = nextPose.applyAtStart,
                    applyAtEnd = nextPose.applyAtEnd;
                if (preTransition) preTransition(baseTransitionProps);
                if (applyAtStart) {
                    applyValues(applyAtStart, values, baseTransitionProps, setValue, setValueNative);
                }
                var animations = Object.keys(getPoseValues(nextPose)).map(function (key) {
                    var valuePoses = activePoses.has(key) ? activePoses.get(key) : (activePoses.set(key, []), activePoses.get(key));
                    var existingIndex = valuePoses.indexOf(next);
                    if (existingIndex !== -1) valuePoses.splice(existingIndex, 1);
                    var priority = posePriority ? posePriority.indexOf(next) : 0;
                    var insertionIndex = priority <= 0 ? 0 : findInsertionIndex(valuePoses, posePriority, priority);
                    valuePoses.splice(insertionIndex, 0, next);
                    return insertionIndex === 0 ? new Promise(function (complete) {
                        var value = values.get(key);
                        var transitionProps = __assign({}, baseTransitionProps, { key: key,
                            value: value });
                        var target = resolveTarget(value, resolveProp(nextPose[key], transitionProps));
                        if (activeActions.has(key)) stopAction(activeActions.get(key));
                        var resolveTransitionProps = __assign({ to: target }, transitionProps, getTransitionProps(value, target, transitionProps));
                        var transition = resolveTransition(getTransition, key, value, resolveTransitionProps, convertTransitionDefinition, getInstantTransition);
                        var poseDelay = resolveProp(nextPose.delay, transitionProps);
                        if (delay || poseDelay) {
                            transition = addActionDelay(delay || poseDelay, transition);
                        }
                        activeActions.set(key, startAction(value, transition, complete));
                    }) : Promise.resolve();
                });
                return applyAtEnd ? [Promise.all(animations).then(function () {
                    applyValues(applyAtEnd, values, baseTransitionProps, setValue, setValueNative);
                })] : animations;
            };
            if (nextPose && hasChildren) {
                if (resolveProp(nextPose.beforeChildren, baseTransitionProps)) {
                    return Promise.all(getParentAnimations()).then(function () {
                        return Promise.all(getChildAnimations());
                    });
                } else if (resolveProp(nextPose.afterChildren, baseTransitionProps)) {
                    return Promise.all(getChildAnimations()).then(function () {
                        return Promise.all(getParentAnimations());
                    });
                }
            }
            return Promise.all(getParentAnimations().concat(getChildAnimations()));
        };
    };

    var DEFAULT_INITIAL_POSE = 'init';
    var isScale = function (key) {
        return key.includes('scale');
    };
    var defaultReadValueFromSource = function (key) {
        return isScale(key) ? 1 : 0;
    };
    var getInitialValue = function (poses, key, initialPose, props, readValueFromSource, activePoses) {
        if (readValueFromSource === void 0) {
            readValueFromSource = defaultReadValueFromSource;
        }
        var posesToSearch = Array.isArray(initialPose) ? initialPose : [initialPose];
        posesToSearch.push(DEFAULT_INITIAL_POSE);
        var pose = posesToSearch.filter(Boolean).find(function (name) {
            return poses[name] && poses[name][key] !== undefined;
        });
        activePoses.set(key, [pose || DEFAULT_INITIAL_POSE]);
        return pose ? resolveProp(poses[pose][key], props) : readValueFromSource(key, props);
    };
    var createValues = function (values, _a) {
        var userSetValues = _a.userSetValues,
            createValue = _a.createValue,
            convertValue = _a.convertValue,
            readValueFromSource = _a.readValueFromSource,
            initialPose = _a.initialPose,
            poses = _a.poses,
            activePoses = _a.activePoses,
            props = _a.props;
        return function (key) {
            if (values.has(key)) return;
            var value;
            if (userSetValues && userSetValues[key] !== undefined) {
                value = convertValue(userSetValues[key], key, props);
            } else {
                var initValue = getInitialValue(poses, key, initialPose, props, readValueFromSource, activePoses);
                value = createValue(initValue, key, props);
            }
            values.set(key, value);
        };
    };
    var scrapeValuesFromPose = function (values, props) {
        return function (key) {
            var pose = props.poses[key];
            Object.keys(getPoseValues(pose)).forEach(createValues(values, props));
        };
    };
    var getAncestorValue = function (key, fromParent, ancestors) {
        if (fromParent === true) {
            return ancestors[0] && ancestors[0].values.get(key);
        } else {
            var foundAncestor = ancestors.find(function (_a) {
                var label = _a.label;
                return label === fromParent;
            });
            return foundAncestor && foundAncestor.values.get(key);
        }
    };
    var bindPassiveValues = function (values, _a) {
        var passive = _a.passive,
            ancestorValues = _a.ancestorValues,
            createValue = _a.createValue,
            readValue = _a.readValue,
            props = _a.props;
        return function (key) {
            var _a = passive[key],
                valueKey = _a[0],
                passiveProps = _a[1],
                fromParent = _a[2];
            var valueToBind = fromParent && ancestorValues.length ? getAncestorValue(valueKey, fromParent, ancestorValues) : values.has(valueKey) ? values.get(valueKey) : false;
            if (!valueToBind) return;
            var newValue = createValue(readValue(valueToBind), key, props, {
                passiveParentKey: valueKey,
                passiveParent: valueToBind,
                passiveProps: passiveProps
            });
            values.set(key, newValue);
        };
    };
    var createValueMap = function (props) {
        var poses = props.poses,
            passive = props.passive;
        var values = new Map();
        Object.keys(poses).forEach(scrapeValuesFromPose(values, props));
        if (passive) Object.keys(passive).forEach(bindPassiveValues(values, props));
        return values;
    };

    var applyDefaultTransition = function (pose, key, defaultTransitions) {
        return __assign({}, pose, { transition: defaultTransitions.has(key) ? defaultTransitions.get(key) : defaultTransitions.get('default') });
    };
    var generateTransitions = function (poses, defaultTransitions) {
        Object.keys(poses).forEach(function (key) {
            var pose = poses[key];
            invariant$3(typeof pose === 'object', "Pose '" + key + "' is of invalid type. All poses should be objects.");
            poses[key] = pose.transition !== undefined ? pose : applyDefaultTransition(pose, key, defaultTransitions);
        });
        return poses;
    };

    var sortByReversePriority = function (priorityOrder) {
        return function (a, b) {
            var aP = priorityOrder.indexOf(a);
            var bP = priorityOrder.indexOf(b);
            if (aP === -1 && bP !== -1) return -1;
            if (aP !== -1 && bP === -1) return 1;
            return aP - bP;
        };
    };

    var poseFactory = function (_a) {
        var getDefaultProps = _a.getDefaultProps,
            defaultTransitions = _a.defaultTransitions,
            bindOnChange = _a.bindOnChange,
            startAction = _a.startAction,
            stopAction = _a.stopAction,
            readValue = _a.readValue,
            readValueFromSource = _a.readValueFromSource,
            resolveTarget = _a.resolveTarget,
            setValue = _a.setValue,
            setValueNative = _a.setValueNative,
            createValue = _a.createValue,
            convertValue = _a.convertValue,
            getInstantTransition = _a.getInstantTransition,
            getTransitionProps = _a.getTransitionProps,
            addActionDelay = _a.addActionDelay,
            selectValueToRead = _a.selectValueToRead,
            convertTransitionDefinition = _a.convertTransitionDefinition,
            transformPose = _a.transformPose,
            posePriority = _a.posePriority,
            extendAPI = _a.extendAPI;
        return function (config) {
            var parentValues = config.parentValues,
                _a = config.ancestorValues,
                ancestorValues = _a === void 0 ? [] : _a;
            if (parentValues) ancestorValues.unshift({ values: parentValues });
            var activeActions = new Map();
            var activePoses = new Map();
            var children = new Set();
            var poses = generateTransitions(selectPoses(config), defaultTransitions);
            var props = config.props || {};
            if (getDefaultProps) props = __assign({}, props, getDefaultProps(config));
            var passive = config.passive,
                userSetValues = config.values,
                _b = config.initialPose,
                initialPose = _b === void 0 ? DEFAULT_INITIAL_POSE : _b;
            var values = createValueMap({
                poses: poses,
                passive: passive,
                ancestorValues: ancestorValues,
                readValue: readValue,
                createValue: createValue,
                convertValue: convertValue,
                readValueFromSource: readValueFromSource,
                userSetValues: userSetValues,
                initialPose: initialPose,
                activePoses: activePoses,
                props: props
            });
            var state = {
                activeActions: activeActions,
                activePoses: activePoses,
                children: children,
                props: props,
                values: values
            };
            var onChange = config.onChange;
            if (onChange) Object.keys(onChange).forEach(bindOnChange(values, onChange));
            var set = createPoseSetter({
                state: state,
                poses: poses,
                getInstantTransition: getInstantTransition,
                getTransitionProps: getTransitionProps,
                convertTransitionDefinition: convertTransitionDefinition,
                setValue: setValue,
                setValueNative: setValueNative,
                startAction: startAction,
                stopAction: stopAction,
                resolveTarget: resolveTarget,
                addActionDelay: addActionDelay,
                transformPose: transformPose,
                posePriority: posePriority
            });
            var has = function (poseName) {
                return !!poses[poseName];
            };
            var api = {
                set: set,
                unset: function (poseName, poseProps) {
                    var posesToSet = [];
                    activePoses.forEach(function (valuePoses) {
                        var poseIndex = valuePoses.indexOf(poseName);
                        if (poseIndex === -1) return;
                        var currentPose = valuePoses[0];
                        valuePoses.splice(poseIndex, 1);
                        var nextPose = valuePoses[0];
                        if (nextPose === currentPose) return;
                        if (posesToSet.indexOf(nextPose) === -1) {
                            posesToSet.push(nextPose);
                        }
                    });
                    var animationsToResolve = posesToSet.sort(sortByReversePriority(posePriority)).map(function (poseToSet) {
                        return set(poseToSet, poseProps, false);
                    });
                    children.forEach(function (child) {
                        return animationsToResolve.push(child.unset(poseName));
                    });
                    return Promise.all(animationsToResolve);
                },
                get: function (valueName) {
                    return valueName ? selectValueToRead(values.get(valueName)) : selectAllValues(values, selectValueToRead);
                },
                has: has,
                setProps: function (newProps) {
                    return state.props = __assign({}, state.props, newProps);
                },
                _addChild: function (childConfig, factory) {
                    var child = factory(__assign({ initialPose: initialPose }, childConfig, { ancestorValues: [{ label: config.label, values: values }].concat(ancestorValues) }));
                    children.add(child);
                    return child;
                },
                removeChild: function (child) {
                    return children.delete(child);
                },
                clearChildren: function () {
                    children.forEach(function (child) {
                        return child.destroy();
                    });
                    children.clear();
                },
                destroy: function () {
                    activeActions.forEach(stopAction);
                    children.forEach(function (child) {
                        return child.destroy();
                    });
                }
            };
            return extendAPI(api, state, config);
        };
    };

    var HEY_LISTEN$4 = 'Hey, listen! ';
    var warning$5 = function () { };
    var invariant$4 = function () { };
    {
        warning$5 = function (check, message) {
            if (!check && typeof console !== 'undefined') {
                console.warn(HEY_LISTEN$4 + message);
            }
        };
        invariant$4 = function (check, message) {
            if (!check) {
                throw new Error(HEY_LISTEN$4.toUpperCase() + message);
            }
        };
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign$2 = function () {
        __assign$2 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$2.apply(this, arguments);
    };

    function __rest$1(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
        return t;
    }

    var BoundingBoxDimension;
    (function (BoundingBoxDimension) {
        BoundingBoxDimension["width"] = "width";
        BoundingBoxDimension["height"] = "height";
        BoundingBoxDimension["left"] = "left";
        BoundingBoxDimension["right"] = "right";
        BoundingBoxDimension["top"] = "top";
        BoundingBoxDimension["bottom"] = "bottom";
    })(BoundingBoxDimension || (BoundingBoxDimension = {}));

    var measureWithoutTransform = function (element) {
        var transform$$1 = element.style.transform;
        element.style.transform = '';
        var bbox = element.getBoundingClientRect();
        element.style.transform = transform$$1;
        return bbox;
    };
    var resolveProp$1 = function (target, props) {
        return typeof target === 'function' ? target(props) : target;
    };

    var interpolate$1 = transformers.interpolate;
    var singleAxisPointer = function (axis) {
        return function (from) {
            var _a;
            return index$1((_a = {}, _a[axis] = typeof from === 'string' ? parseFloat(from) : from, _a)).pipe(function (v) {
                return v[axis];
            });
        };
    };
    var pointerX = /*#__PURE__*/singleAxisPointer('x');
    var pointerY = /*#__PURE__*/singleAxisPointer('y');
    var createPointer = function (axisPointerCreator, min, max, measurement) {
        return function (transitionProps) {
            var from = transitionProps.from,
                type = transitionProps.type,
                dimensions = transitionProps.dimensions,
                dragBounds = transitionProps.dragBounds;
            var axisPointer = axisPointerCreator(dimensions.measurementAsPixels(measurement, from, type));
            var transformQueue = [];
            if (dragBounds) {
                var resolvedDragBounds_1 = resolveProp$1(dragBounds, transitionProps);
                if (resolvedDragBounds_1[min] !== undefined) {
                    transformQueue.push(function (v) {
                        return Math.max(v, dimensions.measurementAsPixels(measurement, resolvedDragBounds_1[min], type));
                    });
                }
                if (resolvedDragBounds_1[max] !== undefined) {
                    transformQueue.push(function (v) {
                        return Math.min(v, dimensions.measurementAsPixels(measurement, resolvedDragBounds_1[max], type));
                    });
                }
            }
            if (type === percent) {
                transformQueue.push(interpolate$1([0, dimensions.get(measurement)], [0, 100]), function (v) {
                    return v + '%';
                });
            }
            return transformQueue.length ? axisPointer.pipe.apply(axisPointer, transformQueue) : axisPointer;
        };
    };
    var just = function (from) {
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete;
            update(from);
            complete();
        });
    };
    var underDampedSpring = function (_a) {
        var from = _a.from,
            velocity = _a.velocity,
            to = _a.to;
        return vectorSpring({
            from: from,
            to: to,
            velocity: velocity,
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10
        });
    };
    var overDampedSpring = function (_a) {
        var from = _a.from,
            velocity = _a.velocity,
            to = _a.to;
        return vectorSpring({ from: from, to: to, velocity: velocity, stiffness: 700, damping: to === 0 ? 100 : 35 });
    };
    var linearTween = function (_a) {
        var from = _a.from,
            to = _a.to;
        return tween({ from: from, to: to, ease: linear });
    };
    var intelligentTransition = {
        x: underDampedSpring,
        y: underDampedSpring,
        z: underDampedSpring,
        rotate: underDampedSpring,
        rotateX: underDampedSpring,
        rotateY: underDampedSpring,
        rotateZ: underDampedSpring,
        scaleX: overDampedSpring,
        scaleY: overDampedSpring,
        scale: overDampedSpring,
        opacity: linearTween,
        default: tween
    };
    var dragAction = /*#__PURE__*/__assign$2({}, intelligentTransition, { x: /*#__PURE__*/createPointer(pointerX, 'left', 'right', BoundingBoxDimension.width), y: /*#__PURE__*/createPointer(pointerY, 'top', 'bottom', BoundingBoxDimension.height) });
    var justAxis = function (_a) {
        var from = _a.from;
        return just(from);
    };
    var intelligentDragEnd = /*#__PURE__*/__assign$2({}, intelligentTransition, { x: justAxis, y: justAxis });
    var defaultTransitions = /*#__PURE__*/new Map([['default', intelligentTransition], ['drag', dragAction], ['dragEnd', intelligentDragEnd]]);

    var auto = {
        test: function (v) {
            return v === 'auto';
        },
        parse: function (v) {
            return v;
        }
    };
    var valueTypeTests = [number, degrees, percent, px, vw, vh, auto];
    var testValueType = function (v) {
        return function (type) {
            return type.test(v);
        };
    };
    var getValueType$2 = function (v) {
        return valueTypeTests.find(testValueType(v));
    };

    var createPassiveValue = function (init, parent, transform$$1) {
        var raw = value(transform$$1(init));
        parent.raw.subscribe(function (v) {
            return raw.update(transform$$1(v));
        });
        return { raw: raw };
    };
    var createValue = function (init) {
        var type = getValueType$2(init);
        var raw = value(init);
        return { raw: raw, type: type };
    };
    var addActionDelay = function (delay$$1, transition) {
        if (delay$$1 === void 0) {
            delay$$1 = 0;
        }
        return chain(delay(delay$$1), transition);
    };
    var animationLookup = {
        tween: tween,
        spring: vectorSpring,
        decay: vectorDecay,
        keyframes: keyframes,
        physics: vectorPhysics
    };
    var linear$1 = linear,
        easeIn$1 = easeIn,
        easeOut$1 = easeOut,
        easeInOut$1 = easeInOut,
        circIn$1 = circIn,
        circOut$1 = circOut,
        circInOut$1 = circInOut,
        backIn$1 = backIn,
        backOut$1 = backOut,
        backInOut$1 = backInOut,
        anticipate$1 = anticipate;
    var easingLookup = {
        linear: linear$1,
        easeIn: easeIn$1,
        easeOut: easeOut$1,
        easeInOut: easeInOut$1,
        circIn: circIn$1,
        circOut: circOut$1,
        circInOut: circInOut$1,
        backIn: backIn$1,
        backOut: backOut$1,
        backInOut: backInOut$1,
        anticipate: anticipate$1
    };
    var getAction = function (v, _a, _b) {
        var from = _b.from,
            to = _b.to,
            velocity = _b.velocity;
        var _c = _a.type,
            type = _c === void 0 ? 'tween' : _c,
            ease = _a.ease,
            def = __rest$1(_a, ["type", "ease"]);
        invariant$4(animationLookup[type] !== undefined, "Invalid transition type '" + type + "'. Valid transition types are: tween, spring, decay, physics and keyframes.");
        if (type === 'tween') {
            var typeOfEase = typeof ease;
            if (typeOfEase !== 'function') {
                if (typeOfEase === 'string') {
                    invariant$4(easingLookup[ease] !== undefined, "Invalid easing type '" + ease + "'. popmotion.io/pose/api/config");
                    ease = easingLookup[ease];
                } else if (Array.isArray(ease)) {
                    invariant$4(ease.length === 4, "Cubic bezier arrays must contain four numerical values.");
                    var x1 = ease[0],
                        y1 = ease[1],
                        x2 = ease[2],
                        y2 = ease[3];
                    ease = cubicBezier(x1, y1, x2, y2);
                }
            }
        }
        var baseProps = type !== 'keyframes' ? {
            from: from,
            to: to,
            velocity: velocity,
            ease: ease
        } : { ease: ease };
        return animationLookup[type](__assign$2({}, baseProps, def));
    };
    var isAction = function (action$$1) {
        return typeof action$$1.start !== 'undefined';
    };
    var pose = function (_a) {
        var transformPose = _a.transformPose,
            addListenerToValue = _a.addListenerToValue,
            extendAPI = _a.extendAPI,
            readValueFromSource = _a.readValueFromSource,
            posePriority = _a.posePriority,
            setValueNative = _a.setValueNative;
        return poseFactory({
            bindOnChange: function (values, onChange) {
                return function (key) {
                    if (!values.has(key)) return;
                    var raw = values.get(key).raw;
                    raw.subscribe(onChange[key]);
                };
            },
            readValue: function (_a) {
                var raw = _a.raw;
                return raw.get();
            },
            setValue: function (_a, to) {
                var raw = _a.raw;
                return raw.update(to);
            },
            createValue: function (init, key, _a, _b) {
                var elementStyler = _a.elementStyler;
                var _c = _b === void 0 ? {} : _b,
                    passiveParent = _c.passiveParent,
                    passiveProps = _c.passiveProps;
                var val = passiveParent ? createPassiveValue(init, passiveParent, passiveProps) : createValue(init);
                if (addListenerToValue) {
                    val.raw.subscribe(addListenerToValue(key, elementStyler));
                }
                return val;
            },
            convertValue: function (raw, key, _a) {
                var elementStyler = _a.elementStyler;
                if (addListenerToValue) {
                    raw.subscribe(addListenerToValue(key, elementStyler));
                }
                return {
                    raw: raw,
                    type: getValueType$2(raw.get())
                };
            },
            getTransitionProps: function (_a, to) {
                var raw = _a.raw,
                    type = _a.type;
                return {
                    from: raw.get(),
                    velocity: raw.getVelocity(),
                    to: to,
                    type: type
                };
            },
            resolveTarget: function (_, to) {
                return to;
            },
            selectValueToRead: function (_a) {
                var raw = _a.raw;
                return raw;
            },
            startAction: function (_a, action$$1, complete) {
                var raw = _a.raw;
                var reaction = {
                    update: function (v) {
                        return raw.update(v);
                    },
                    complete: complete
                };
                return action$$1.start(reaction);
            },
            stopAction: function (action$$1) {
                return action$$1.stop();
            },
            getInstantTransition: function (_, _a) {
                var to = _a.to;
                return just(to);
            },
            convertTransitionDefinition: function (val, def, props) {
                if (isAction(def)) return def;
                var delay$$1 = def.delay,
                    min = def.min,
                    max = def.max,
                    round = def.round,
                    remainingDef = __rest$1(def, ["delay", "min", "max", "round"]);
                var action$$1 = getAction(val, remainingDef, props);
                var outputPipe = [];
                if (delay$$1) action$$1 = addActionDelay(delay$$1, action$$1);
                if (min !== undefined) outputPipe.push(function (v) {
                    return Math.max(v, min);
                });
                if (max !== undefined) outputPipe.push(function (v) {
                    return Math.min(v, max);
                });
                if (round) outputPipe.push(Math.round);
                return outputPipe.length ? action$$1.pipe.apply(action$$1, outputPipe) : action$$1;
            },
            setValueNative: setValueNative,
            addActionDelay: addActionDelay,
            defaultTransitions: defaultTransitions,
            transformPose: transformPose,
            readValueFromSource: readValueFromSource,
            posePriority: posePriority,
            extendAPI: extendAPI
        });
    };

    var createDimensions = function (element) {
        var hasMeasured = false;
        var current = {
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        return {
            get: function (measurement) {
                return measurement ? current[measurement] : current;
            },
            measure: function () {
                current = element.getBoundingClientRect();
                hasMeasured = true;
                return current;
            },
            measurementAsPixels: function (measurement, value$$1, type) {
                return type === percent ? (typeof value$$1 === 'string' ? parseFloat(value$$1) : value$$1) / 100 * current[measurement] : value$$1;
            },
            has: function () {
                return hasMeasured;
            }
        };
    };

    var makeUIEventApplicator = function (_a) {
        var startEvents = _a.startEvents,
            endEvents = _a.endEvents,
            startPose = _a.startPose,
            endPose = _a.endPose,
            startCallback = _a.startCallback,
            endCallback = _a.endCallback,
            useDocumentToEnd = _a.useDocumentToEnd,
            preventDefault = _a.preventDefault;
        return function (element, activeActions, poser, config) {
            var startListener = startPose + 'Start';
            var endListener = startPose + 'End';
            var eventStartListener = listen(element, startEvents).start(function (startEvent) {
                if (preventDefault) startEvent.preventDefault();
                poser.set(startPose);
                if (startCallback && config[startCallback]) config[startCallback](startEvent);
                var eventEndListener = listen(useDocumentToEnd ? document.documentElement : element, endEvents + (useDocumentToEnd ? ' mouseenter' : '')).start(function (endEvent) {
                    if (useDocumentToEnd && endEvent.type === 'mouseenter' && endEvent.buttons === 1) {
                        return;
                    }
                    if (preventDefault) endEvent.preventDefault();
                    activeActions.get(endListener).stop();
                    poser.unset(startPose);
                    poser.set(endPose);
                    if (endCallback && config[endCallback]) config[endCallback](endEvent);
                });
                activeActions.set(endListener, eventEndListener);
            });
            activeActions.set(startListener, eventStartListener);
        };
    };
    var events = {
        draggable: /*#__PURE__*/makeUIEventApplicator({
            startEvents: 'mousedown touchstart',
            endEvents: 'mouseup touchend',
            startPose: 'drag',
            endPose: 'dragEnd',
            startCallback: 'onDragStart',
            endCallback: 'onDragEnd',
            useDocumentToEnd: true,
            preventDefault: true
        }),
        hoverable: /*#__PURE__*/makeUIEventApplicator({
            startEvents: 'mouseenter',
            endEvents: 'mouseleave',
            startPose: 'hover',
            endPose: 'hoverEnd'
        }),
        focusable: /*#__PURE__*/makeUIEventApplicator({
            startEvents: 'focus',
            endEvents: 'blur',
            startPose: 'focus',
            endPose: 'blur'
        }),
        pressable: /*#__PURE__*/makeUIEventApplicator({
            startEvents: 'mousedown touchstart',
            endEvents: 'mouseup touchend',
            startPose: 'press',
            endPose: 'pressEnd',
            startCallback: 'onPressStart',
            endCallback: 'onPressEnd',
            useDocumentToEnd: true
        })
    };
    var eventKeys = /*#__PURE__*/Object.keys(events);
    var appendEventListeners = function (element, activeActions, poser, _a) {
        var props = _a.props;
        return eventKeys.forEach(function (key) {
            if (props[key]) events[key](element, activeActions, poser, props);
        });
    };

    var ORIGIN_START = 0;
    var ORIGIN_CENTER = '50%';
    var ORIGIN_END = '100%';
    var findCenter = function (_a) {
        var top = _a.top,
            right = _a.right,
            bottom = _a.bottom,
            left = _a.left;
        return {
            x: (left + right) / 2,
            y: (top + bottom) / 2
        };
    };
    var positionalProps = ['width', 'height', 'top', 'left', 'bottom', 'right'];
    var positionalPropsDict = /*#__PURE__*/new Set(positionalProps);
    var checkPositionalProp = function (key) {
        return positionalPropsDict.has(key);
    };
    var hasPositionalProps = function (pose) {
        return Object.keys(pose).some(checkPositionalProp);
    };
    var isFlipPose = function (flip, key, state) {
        return state.props.element instanceof HTMLElement && (flip === true || key === 'flip');
    };
    var setValue = function (_a, key, to) {
        var values = _a.values,
            props = _a.props;
        if (values.has(key)) {
            var raw = values.get(key).raw;
            raw.update(to);
            raw.update(to);
        } else {
            values.set(key, {
                raw: value(to, function (v) {
                    return props.elementStyler.set(key, v);
                })
            });
        }
    };
    var explicitlyFlipPose = function (state, nextPose) {
        var _a = state.props,
            dimensions = _a.dimensions,
            elementStyler = _a.elementStyler;
        dimensions.measure();
        var width = nextPose.width,
            height = nextPose.height,
            top = nextPose.top,
            left = nextPose.left,
            bottom = nextPose.bottom,
            right = nextPose.right,
            position = nextPose.position,
            remainingPose = __rest$1(nextPose, ["width", "height", "top", "left", "bottom", "right", "position"]);
        var propsToSet = positionalProps.concat('position').reduce(function (acc, key) {
            if (nextPose[key] !== undefined) {
                acc[key] = resolveProp$1(nextPose[key], state.props);
            }
            return acc;
        }, {});
        elementStyler.set(propsToSet).render();
        return implicitlyFlipPose(state, remainingPose);
    };
    var implicitlyFlipPose = function (state, nextPose) {
        var _a = state.props,
            dimensions = _a.dimensions,
            element = _a.element,
            elementStyler = _a.elementStyler;
        if (!dimensions.has()) return {};
        var prev = dimensions.get();
        var next = measureWithoutTransform(element);
        var originX = prev.left === next.left ? ORIGIN_START : prev.right === next.right ? ORIGIN_END : ORIGIN_CENTER;
        var originY = prev.top === next.top ? ORIGIN_START : prev.bottom === next.bottom ? ORIGIN_END : ORIGIN_CENTER;
        elementStyler.set({ originX: originX, originY: originY });
        var flipPoseProps = {};
        if (prev.width !== next.width) {
            setValue(state, 'scaleX', prev.width / next.width);
            flipPoseProps.scaleX = 1;
        }
        if (prev.height !== next.height) {
            setValue(state, 'scaleY', prev.height / next.height);
            flipPoseProps.scaleY = 1;
        }
        var prevCenter = findCenter(prev);
        var nextCenter = findCenter(next);
        if (originX === ORIGIN_CENTER) {
            setValue(state, 'x', prevCenter.x - nextCenter.x);
            flipPoseProps.x = 0;
        }
        if (originY === ORIGIN_CENTER) {
            setValue(state, 'y', prevCenter.y - nextCenter.y);
            flipPoseProps.y = 0;
        }
        elementStyler.render();
        return __assign$2({}, nextPose, flipPoseProps);
    };
    var flipPose = function (props, nextPose) {
        return hasPositionalProps(nextPose) ? explicitlyFlipPose(props, nextPose) : implicitlyFlipPose(props, nextPose);
    };

    var getPosFromMatrix = function (matrix, pos) {
        return parseFloat(matrix.split(', ')[pos]);
    };
    var getTranslateFromMatrix = function (pos2, pos3) {
        return function (element, bbox, _a) {
            var transform$$1 = _a.transform;
            if (transform$$1 === 'none') return 0;
            var matrix3d = transform$$1.match(/^matrix3d\((.+)\)$/);
            if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
            return getPosFromMatrix(transform$$1.match(/^matrix\((.+)\)$/)[1], pos2);
        };
    };
    var positionalValues = {
        width: function (element, _a) {
            var width = _a.width;
            return width;
        },
        height: function (element, _a) {
            var height = _a.height;
            return height;
        },
        top: function (element, bbox, _a) {
            var top = _a.top;
            return parseFloat(top);
        },
        left: function (element, bbox, _a) {
            var left = _a.left;
            return parseFloat(left);
        },
        bottom: function (element, _a, _b) {
            var height = _a.height;
            var top = _b.top;
            return parseFloat(top) + height;
        },
        right: function (element, _a, _b) {
            var width = _a.width;
            var left = _b.left;
            return parseFloat(left) + width;
        },
        x: /*#__PURE__*/getTranslateFromMatrix(4, 13),
        y: /*#__PURE__*/getTranslateFromMatrix(5, 14)
    };
    var isPositionalKey = function (v) {
        return positionalValues[v] !== undefined;
    };
    var isPositional = function (pose) {
        return Object.keys(pose).some(isPositionalKey);
    };
    var convertPositionalUnits = function (state, pose) {
        var values = state.values,
            props = state.props;
        var element = props.element,
            elementStyler = props.elementStyler;
        var positionalPoseKeys = Object.keys(pose).filter(isPositionalKey);
        var changedPositionalKeys = [];
        var elementComputedStyle = getComputedStyle(element);
        positionalPoseKeys.forEach(function (key) {
            var value$$1 = values.get(key);
            var fromValueType = getValueType$2(value$$1.raw.get());
            var to = resolveProp$1(pose[key], props);
            var toValueType = getValueType$2(to);
            if (fromValueType !== toValueType) {
                changedPositionalKeys.push(key);
                pose.applyAtEnd = pose.applyAtEnd || {};
                pose.applyAtEnd[key] = pose.applyAtEnd[key] || pose[key];
                setValue(state, key, to);
            }
        });
        if (!changedPositionalKeys.length) return pose;
        var originBbox = element.getBoundingClientRect();
        var top = elementComputedStyle.top,
            left = elementComputedStyle.left,
            bottom = elementComputedStyle.bottom,
            right = elementComputedStyle.right,
            transform$$1 = elementComputedStyle.transform;
        var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform$$1 };
        elementStyler.render();
        var targetBbox = element.getBoundingClientRect();
        var newPose = __assign$2({}, pose);
        changedPositionalKeys.forEach(function (key) {
            setValue(state, key, positionalValues[key](element, originBbox, originComputedStyle));
            newPose[key] = positionalValues[key](element, targetBbox, elementComputedStyle);
        });
        elementStyler.render();
        return newPose;
    };

    var dragPoses = function (draggable) {
        var drag = {
            preTransition: function (_a) {
                var dimensions = _a.dimensions;
                return dimensions.measure();
            }
        };
        var dragEnd = {};
        if (draggable === true || draggable === 'x') drag.x = dragEnd.x = 0;
        if (draggable === true || draggable === 'y') drag.y = dragEnd.y = 0;
        return { drag: drag, dragEnd: dragEnd };
    };
    var createPoseConfig = function (element, _a) {
        var onDragStart = _a.onDragStart,
            onDragEnd = _a.onDragEnd,
            onPressStart = _a.onPressStart,
            onPressEnd = _a.onPressEnd,
            draggable = _a.draggable,
            hoverable = _a.hoverable,
            focusable = _a.focusable,
            pressable = _a.pressable,
            dragBounds = _a.dragBounds,
            config = __rest$1(_a, ["onDragStart", "onDragEnd", "onPressStart", "onPressEnd", "draggable", "hoverable", "focusable", "pressable", "dragBounds"]);
        var poseConfig = __assign$2({ flip: {} }, config, { props: __assign$2({}, config.props, { onDragStart: onDragStart,
                onDragEnd: onDragEnd,
                onPressStart: onPressStart,
                onPressEnd: onPressEnd,
                dragBounds: dragBounds,
                draggable: draggable,
                hoverable: hoverable,
                focusable: focusable,
                pressable: pressable,
                element: element, elementStyler: index(element, { preparseOutput: false }), dimensions: createDimensions(element) }) });
        if (draggable) {
            var _b = dragPoses(draggable),
                drag = _b.drag,
                dragEnd = _b.dragEnd;
            poseConfig.drag = __assign$2({}, poseConfig.drag, drag);
            poseConfig.dragEnd = __assign$2({}, poseConfig.dragEnd, dragEnd);
        }
        return poseConfig;
    };
    var domPose = /*#__PURE__*/pose({
        posePriority: ['drag', 'press', 'focus', 'hover'],
        transformPose: function (_a, name, state) {
            var flip = _a.flip,
                pose$$1 = __rest$1(_a, ["flip"]);
            if (isFlipPose(flip, name, state)) {
                return flipPose(state, pose$$1);
            } else if (isPositional(pose$$1)) {
                return convertPositionalUnits(state, pose$$1);
            }
            return pose$$1;
        },
        addListenerToValue: function (key, elementStyler) {
            return function (v) {
                return elementStyler.set(key, v);
            };
        },
        readValueFromSource: function (key, _a) {
            var elementStyler = _a.elementStyler,
                dragBounds = _a.dragBounds;
            var value$$1 = elementStyler.get(key);
            if (dragBounds && (key === 'x' || key === 'y')) {
                var bound = key === 'x' ? dragBounds.left || dragBounds.right : dragBounds.top || dragBounds.bottom;
                if (bound) {
                    var boundType = getValueType$2(bound);
                    value$$1 = boundType.transform(value$$1);
                }
            }
            return isNaN(value$$1) ? value$$1 : parseFloat(value$$1);
        },
        setValueNative: function (key, to, _a) {
            var elementStyler = _a.elementStyler;
            return elementStyler.set(key, to);
        },
        extendAPI: function (api, _a, config) {
            var props = _a.props,
                activeActions = _a.activeActions;
            var measure = props.dimensions.measure;
            var poserApi = __assign$2({}, api, { addChild: function (element, childConfig) {
                    return api._addChild(createPoseConfig(element, childConfig), domPose);
                }, measure: measure, flip: function (op) {
                    if (op) {
                        measure();
                        op();
                    }
                    return api.set('flip');
                } });
            props.elementStyler.render();
            appendEventListeners(props.element, activeActions, poserApi, config);
            return poserApi;
        }
    });
    var domPose$1 = function (element, config) {
        return domPose(createPoseConfig(element, config));
    };

    function memoize(fn) {
      var cache = {};
      return function (arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
      };
    }

    var memoize_cjs = memoize;

    function _interopDefault$1 (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

    var memoize$1 = _interopDefault$1(memoize_cjs);

    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i;
    var index$2 = memoize$1(reactPropsRegex.test.bind(reactPropsRegex));

    var isPropValid_cjs = index$2;

    var hasChanged = function (prev, next) {
        if (prev === next)
            return false;
        var prevIsArray = Array.isArray(prev);
        var nextIsArray = Array.isArray(next);
        if (prevIsArray !== nextIsArray || (!prevIsArray && !nextIsArray)) {
            return true;
        }
        else if (prevIsArray && nextIsArray) {
            var numPrev = prev.length;
            var numNext = next.length;
            if (numPrev !== numNext)
                return true;
            for (var i = numPrev; i < numPrev; i++) {
                if (prev[i] !== next[i])
                    return true;
            }
        }
        return false;
    };

    var pickAssign = function (shouldPick, sources) {
        return sources.reduce(function (picked, source) {
            for (var key in source) {
                if (shouldPick(key)) {
                    picked[key] = source[key];
                }
            }
            return picked;
        }, {});
    };

    var PoseParentContext = createContext({});
    var calcPopFromFlowStyle = function (el) {
        var offsetTop = el.offsetTop, offsetLeft = el.offsetLeft, offsetWidth = el.offsetWidth, offsetHeight = el.offsetHeight;
        return {
            position: 'absolute',
            top: offsetTop,
            left: offsetLeft,
            width: offsetWidth,
            height: offsetHeight
        };
    };
    var hasPose = function (pose, key) {
        return Array.isArray(pose) ? pose.indexOf(key) !== -1 : pose === key;
    };
    var objectToMap = function (obj) {
        return Object.keys(obj).reduce(function (map, key) {
            map.set(key, { raw: obj[key] });
            return map;
        }, new Map());
    };
    var testAlwaysTrue = function () { return true; };
    var filterProps = function (_a) {
        var elementType = _a.elementType, poseConfig = _a.poseConfig, onValueChange = _a.onValueChange, innerRef = _a.innerRef, _pose = _a._pose, pose = _a.pose, initialPose = _a.initialPose, poseKey = _a.poseKey, onPoseComplete = _a.onPoseComplete, getParentPoseConfig = _a.getParentPoseConfig, registerChild = _a.registerChild, onUnmount = _a.onUnmount, getInitialPoseFromParent = _a.getInitialPoseFromParent, popFromFlow = _a.popFromFlow, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd, props = __rest(_a, ["elementType", "poseConfig", "onValueChange", "innerRef", "_pose", "pose", "initialPose", "poseKey", "onPoseComplete", "getParentPoseConfig", "registerChild", "onUnmount", "getInitialPoseFromParent", "popFromFlow", "values", "parentValues", "onDragStart", "onDragEnd", "onPressStart", "onPressEnd"]);
        return props;
    };
    var PoseElement = (function (_super) {
        __extends(PoseElement, _super);
        function PoseElement(props) {
            var _this = _super.call(this, props) || this;
            _this.children = new Set();
            _this.childrenHandlers = {
                registerChild: function (props) {
                    _this.children.add(props);
                    if (_this.poser)
                        _this.flushChildren();
                },
                onUnmount: function (child) { return _this.poser.removeChild(child); },
                getParentPoseConfig: function () { return _this.poseConfig; },
                getInitialPoseFromParent: function () { return _this.getInitialPose(); }
            };
            _this.getRefs = function () {
                var refs = {};
                var elementType = _this.props.elementType;
                if (typeof elementType === 'string') {
                    refs.ref = _this.setRef;
                }
                else {
                    refs.innerRef = _this.setRef;
                    refs.hostRef = _this.setRef;
                }
                return refs;
            };
            _this.setRef = function (ref) {
                if (ref instanceof Element || (_this.ref && ref === null)) {
                    var innerRef = _this.props.innerRef;
                    if (innerRef) {
                        if (typeof innerRef === 'function') {
                            innerRef(ref);
                        }
                        else {
                            innerRef.current = ref;
                        }
                    }
                    _this.ref = ref;
                }
            };
            _this.shouldForwardProp =
                typeof _this.props.elementType === 'string' ? isPropValid_cjs : testAlwaysTrue;
            var poseConfig = _this.props.poseConfig;
            _this.poseConfig =
                typeof poseConfig === 'function'
                    ? poseConfig(filterProps(props))
                    : poseConfig;
            return _this;
        }
        PoseElement.prototype.getInitialPose = function () {
            var _a = this.props, getInitialPoseFromParent = _a.getInitialPoseFromParent, pose = _a.pose, _pose = _a._pose, initialPose = _a.initialPose;
            if (initialPose) {
                return initialPose;
            }
            else {
                var parentPose = getInitialPoseFromParent && getInitialPoseFromParent();
                var initialPoses = (Array.isArray(parentPose)
                    ? parentPose
                    : [parentPose])
                    .concat(pose, _pose)
                    .filter(Boolean);
                return initialPoses.length > 0 ? initialPoses : undefined;
            }
        };
        PoseElement.prototype.getFirstPose = function () {
            var _a = this.props, initialPose = _a.initialPose, pose = _a.pose, _pose = _a._pose;
            if (!initialPose)
                return;
            var firstPose = (Array.isArray(pose) ? pose : [pose])
                .concat(_pose)
                .filter(Boolean);
            return firstPose.length === 1 ? firstPose[0] : firstPose;
        };
        PoseElement.prototype.getSetProps = function () {
            var props = filterProps(this.props);
            if (this.props.popFromFlow && this.ref && this.ref instanceof HTMLElement) {
                if (!this.popStyle) {
                    props.style = __assign({}, props.style, calcPopFromFlowStyle(this.ref));
                    this.popStyle = props.style;
                }
                else {
                    props.style = this.popStyle;
                }
            }
            else {
                this.popStyle = null;
            }
            return props;
        };
        PoseElement.prototype.componentDidMount = function () {
            var _this = this;
            invariant$4(typeof this.ref !== 'undefined', "No DOM ref found. If you're converting an existing component via posed(Component), you must ensure you're passing the hostRef prop to your underlying DOM element.");
            var _a = this.props, onValueChange = _a.onValueChange, registerChild = _a.registerChild, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd;
            var config = __assign({}, this.poseConfig, { initialPose: this.getInitialPose(), values: values || this.poseConfig.values, parentValues: parentValues ? objectToMap(parentValues) : undefined, props: this.getSetProps(), onDragStart: onDragStart,
                onDragEnd: onDragEnd,
                onPressStart: onPressStart,
                onPressEnd: onPressEnd, onChange: onValueChange });
            if (!registerChild) {
                this.initPoser(domPose$1(this.ref, config));
            }
            else {
                registerChild({
                    element: this.ref,
                    poseConfig: config,
                    onRegistered: function (poser) { return _this.initPoser(poser); }
                });
            }
        };
        PoseElement.prototype.componentWillUpdate = function (_a) {
            var pose = _a.pose, _pose = _a._pose;
            if (hasPose(pose, 'flip') || hasPose(_pose, 'flip'))
                this.poser.measure();
        };
        PoseElement.prototype.componentDidUpdate = function (prevProps) {
            var _a = this.props, pose = _a.pose, _pose = _a._pose, poseKey = _a.poseKey;
            this.poser.setProps(this.getSetProps());
            if (poseKey !== prevProps.poseKey ||
                hasChanged(prevProps.pose, pose) ||
                pose === 'flip') {
                this.setPose(pose);
            }
            if (_pose !== prevProps._pose || _pose === 'flip')
                this.setPose(_pose);
        };
        PoseElement.prototype.componentWillUnmount = function () {
            if (!this.poser)
                return;
            var onUnmount = this.props.onUnmount;
            if (onUnmount)
                onUnmount(this.poser);
            this.poser.destroy();
        };
        PoseElement.prototype.initPoser = function (poser) {
            this.poser = poser;
            this.flushChildren();
            var firstPose = this.getFirstPose();
            if (firstPose)
                this.setPose(firstPose);
        };
        PoseElement.prototype.setPose = function (pose) {
            var _this = this;
            var onPoseComplete = this.props.onPoseComplete;
            var poseList = Array.isArray(pose) ? pose : [pose];
            Promise.all(poseList.map(function (key) { return key && _this.poser.set(key); })).then(function () { return onPoseComplete && onPoseComplete(pose); });
        };
        PoseElement.prototype.flushChildren = function () {
            var _this = this;
            this.children.forEach(function (_a) {
                var element = _a.element, poseConfig = _a.poseConfig, onRegistered = _a.onRegistered;
                return onRegistered(_this.poser.addChild(element, poseConfig));
            });
            this.children.clear();
        };
        PoseElement.prototype.render = function () {
            var elementType = this.props.elementType;
            return (React.createElement(PoseParentContext.Provider, { value: this.childrenHandlers }, React.createElement(elementType, pickAssign(this.shouldForwardProp, [
                this.getSetProps(),
                this.getRefs()
            ]))));
        };
        return PoseElement;
    }(React.PureComponent));

    var supportedElements = [
        'a',
        'article',
        'aside',
        'audio',
        'b',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dialog',
        'div',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'i',
        'iframe',
        'img',
        'input',
        'label',
        'legend',
        'li',
        'nav',
        'object',
        'ol',
        'option',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'section',
        'select',
        'span',
        'strong',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'ul',
        'video',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan'
    ];

    var componentCache = new Map();
    var createComponentFactory = function (key) {
        var componentFactory = function (poseConfig) {
            if (poseConfig === void 0) { poseConfig = {}; }
            return function (_a) {
                var _b = _a.withParent, withParent = _b === void 0 ? true : _b, props = __rest(_a, ["withParent"]);
                return !withParent || props.parentValues ? (React.createElement(PoseElement, __assign({ poseConfig: poseConfig, elementType: key }, props))) : (React.createElement(PoseParentContext.Consumer, null, function (parentCtx) { return (React.createElement(PoseElement, __assign({ poseConfig: poseConfig, elementType: key }, props, parentCtx))); }));
            };
        };
        componentCache.set(key, componentFactory);
        return componentFactory;
    };
    var getComponentFactory = function (key) {
        return componentCache.has(key)
            ? componentCache.get(key)
            : createComponentFactory(key);
    };
    var posed = (function (component) {
        return getComponentFactory(component);
    });
    supportedElements.reduce(function (acc, key) {
        acc[key] = getComponentFactory(key);
        return acc;
    }, posed);

    var getKey = function (child) {
        invariant$4(child && child.key !== null, 'Every child of Transition must be given a unique key');
        var childKey = typeof child.key === 'number' ? child.key.toString() : child.key;
        return childKey.replace('.$', '');
    };
    var prependProps = function (element, props) {
        return React.createElement(element.type, __assign({ key: element.key, ref: element.ref }, props, element.props));
    };
    var handleTransition = function (_a, _b) {
        var displayedChildren = _b.displayedChildren, finishedLeaving = _b.finishedLeaving, hasInitialized = _b.hasInitialized, prevChildren = _b.indexedChildren, scheduleChildRemoval = _b.scheduleChildRemoval;
        var incomingChildren = _a.children, preEnterPose = _a.preEnterPose, enterPose = _a.enterPose, exitPose = _a.exitPose, animateOnMount = _a.animateOnMount, enterAfterExit = _a.enterAfterExit, flipMove = _a.flipMove, onRest = _a.onRest, propsForChildren = __rest(_a, ["children", "preEnterPose", "enterPose", "exitPose", "animateOnMount", "enterAfterExit", "flipMove", "onRest"]);
        var targetChildren = makeChildList(incomingChildren);
        var nextState = {
            displayedChildren: [],
            indexedChildren: {},
        };
        {
            warning$5(!propsForChildren.onPoseComplete, "<Transition/> (or <PoseGroup/>) doesn't accept onPoseComplete prop.");
        }
        var prevKeys = displayedChildren.map(getKey);
        var nextKeys = targetChildren.map(getKey);
        var hasPropsForChildren = Object.keys(propsForChildren).length !== 0;
        var entering = new Set(nextKeys.filter(function (key) { return finishedLeaving.hasOwnProperty(key) || prevKeys.indexOf(key) === -1; }));
        entering.forEach(function (key) { return delete finishedLeaving[key]; });
        var leaving = [];
        var newlyLeaving = {};
        prevKeys.forEach(function (key) {
            if (entering.has(key)) {
                return;
            }
            var isLeaving = finishedLeaving.hasOwnProperty(key);
            if (!isLeaving && nextKeys.indexOf(key) !== -1) {
                return;
            }
            leaving.push(key);
            if (!isLeaving) {
                finishedLeaving[key] = false;
                newlyLeaving[key] = true;
            }
        });
        var moving = new Set(prevKeys.filter(function (key, i) {
            if (entering.has(key)) {
                return false;
            }
            var nextIndex = nextKeys.indexOf(key);
            return nextIndex !== -1 && i !== nextIndex;
        }));
        targetChildren.forEach(function (child) {
            var newChildProps = {};
            if (entering.has(child.key)) {
                if (hasInitialized || animateOnMount) {
                    newChildProps.initialPose = preEnterPose;
                }
                newChildProps._pose = enterPose;
            }
            else if (moving.has(child.key) && flipMove) {
                newChildProps._pose = [enterPose, 'flip'];
            }
            else {
                newChildProps._pose = enterPose;
            }
            var newChild = React.cloneElement(child, newChildProps);
            nextState.indexedChildren[child.key] = newChild;
            nextState.displayedChildren.push(hasPropsForChildren
                ? prependProps(newChild, propsForChildren)
                : newChild);
        });
        leaving.forEach(function (key) {
            var child = prevChildren[key];
            var newChild = newlyLeaving[key]
                ? React.cloneElement(child, {
                    _pose: exitPose,
                    onPoseComplete: function (pose) {
                        scheduleChildRemoval(key);
                        var onPoseComplete = child.props.onPoseComplete;
                        onPoseComplete && onPoseComplete(pose);
                    },
                    popFromFlow: flipMove,
                })
                : child;
            var insertionIndex = prevKeys.indexOf(key);
            nextState.indexedChildren[child.key] = newChild;
            nextState.displayedChildren.splice(insertionIndex, 0, hasPropsForChildren
                ? prependProps(newChild, propsForChildren)
                : newChild);
        });
        return nextState;
    };
    var handleChildrenTransitions = (function (props, state) { return (__assign({ hasInitialized: true }, handleTransition(props, state))); });
    var makeChildList = function (children) {
        var list = [];
        React.Children.forEach(children, function (child) { return child && list.push(child); });
        return list;
    };

    var Transition = (function (_super) {
        __extends(Transition, _super);
        function Transition() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                displayedChildren: [],
                finishedLeaving: {},
                hasInitialized: false,
                indexedChildren: {},
                scheduleChildRemoval: function (key) { return _this.removeChild(key); }
            };
            _this.setDerivedState = function (props) {
                if (props === void 0) { props = _this.props; }
                var derivedState = handleChildrenTransitions(props, _this.state);
                if (derivedState !== _this.state) {
                    _this.setState(derivedState);
                }
            };
            return _this;
        }
        Transition.prototype.componentWillReceiveProps = function (nextProps) {
            this.setDerivedState(nextProps);
        };
        Transition.prototype.componentWillMount = function () {
            this.setDerivedState(this.props);
        };
        Transition.prototype.removeChild = function (key) {
            var _a = this.state, displayedChildren = _a.displayedChildren, finishedLeaving = _a.finishedLeaving;
            var _b = this.props, enterAfterExit = _b.enterAfterExit, onRest = _b.onRest;
            if (!finishedLeaving.hasOwnProperty(key))
                return;
            finishedLeaving[key] = true;
            if (!Object.keys(finishedLeaving).every(function (leavingKey) { return finishedLeaving[leavingKey]; })) {
                return;
            }
            var targetChildren = displayedChildren.filter(function (child) { return !finishedLeaving.hasOwnProperty(child.key); });
            var newState = enterAfterExit
                ? __assign({ finishedLeaving: {} }, handleChildrenTransitions(__assign({}, this.props, { enterAfterExit: false }), __assign({}, this.state, { displayedChildren: targetChildren }))) : {
                finishedLeaving: {},
                displayedChildren: targetChildren
            };
            this.setState(newState, onRest);
        };
        Transition.prototype.shouldComponentUpdate = function (nextProps, nextState) {
            return this.state !== nextState;
        };
        Transition.prototype.render = function () {
            var displayedChildren = this.state.displayedChildren;
            var hasChildren = Array.isArray(displayedChildren) && displayedChildren.length;
            return hasChildren ? (React.createElement("div", { className: "ReactPoseTransitionGroup" }, displayedChildren)) : null;
        };
        Transition.defaultProps = {
            flipMove: false,
            enterAfterExit: false,
            preEnterPose: 'exit',
            enterPose: 'enter',
            exitPose: 'exit'
        };
        return Transition;
    }(React.Component));

    var PoseGroup = (function (_super) {
        __extends(PoseGroup, _super);
        function PoseGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PoseGroup.prototype.render = function () {
            return React.createElement(Transition, __assign({}, this.props));
        };
        PoseGroup.defaultProps = {
            flipMove: true
        };
        return PoseGroup;
    }(React.Component));

    exports.default = posed;
    exports.Transition = Transition;
    exports.PoseGroup = PoseGroup;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
