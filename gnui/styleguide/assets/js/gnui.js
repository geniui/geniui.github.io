(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.gnui = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var _global = {exports: {}};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$j = _global.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global$j; // eslint-disable-line no-undef

	var _globalExports = _global.exports;

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var _core = {exports: {}};

	var core$4 = _core.exports = { version: '2.6.12' };
	if (typeof __e == 'number') __e = core$4; // eslint-disable-line no-undef

	var _coreExports = _core.exports;

	var _objectDp = {};

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var isObject$q = _isObject;
	var _anObject = function (it) {
	  if (!isObject$q(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _domCreate;
	var hasRequired_domCreate;

	function require_domCreate () {
		if (hasRequired_domCreate) return _domCreate;
		hasRequired_domCreate = 1;
		var isObject = _isObject;
		var document = _globalExports.document;
		// typeof document.createElement is 'object' in old IE
		var is = isObject(document) && isObject(document.createElement);
		_domCreate = function (it) {
		  return is ? document.createElement(it) : {};
		};
		return _domCreate;
	}

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(require_domCreate()('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject$p = _isObject;
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!isObject$p(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject$p(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject$p(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject$p(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var anObject$q = _anObject;
	var IE8_DOM_DEFINE$1 = _ie8DomDefine;
	var toPrimitive$6 = _toPrimitive;
	var dP$9 = Object.defineProperty;

	_objectDp.f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$q(O);
	  P = toPrimitive$6(P, true);
	  anObject$q(Attributes);
	  if (IE8_DOM_DEFINE$1) try {
	    return dP$9(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide;
	var hasRequired_hide;

	function require_hide () {
		if (hasRequired_hide) return _hide;
		hasRequired_hide = 1;
		var dP = _objectDp;
		var createDesc = _propertyDesc;
		_hide = _descriptors ? function (object, key, value) {
		  return dP.f(object, key, createDesc(1, value));
		} : function (object, key, value) {
		  object[key] = value;
		  return object;
		};
		return _hide;
	}

	var _redefine = {exports: {}};

	var id$2 = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$2 + px).toString(36));
	};

	var _shared = {exports: {}};

	var _library;
	var hasRequired_library;

	function require_library () {
		if (hasRequired_library) return _library;
		hasRequired_library = 1;
		_library = false;
		return _library;
	}

	var core$3 = _coreExports;
	var global$i = _globalExports;
	var SHARED = '__core-js_shared__';
	var store$1 = global$i[SHARED] || (global$i[SHARED] = {});

	(_shared.exports = function (key, value) {
	  return store$1[key] || (store$1[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core$3.version,
	  mode: require_library() ? 'pure' : 'global',
	  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	});

	var _sharedExports = _shared.exports;

	var _functionToString = _sharedExports('native-function-to-string', Function.toString);

	var global$h = _globalExports;
	var hide$4 = require_hide();
	var has$a = _has;
	var SRC = _uid('src');
	var $toString$2 = _functionToString;
	var TO_STRING$2 = 'toString';
	var TPL = ('' + $toString$2).split(TO_STRING$2);

	_coreExports.inspectSource = function (it) {
	  return $toString$2.call(it);
	};

	(_redefine.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has$a(val, 'name') || hide$4(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has$a(val, SRC) || hide$4(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global$h) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    hide$4(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    hide$4(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING$2, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString$2.call(this);
	});

	var _redefineExports = _redefine.exports;

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding
	var aFunction$8 = _aFunction;
	var _ctx = function (fn, that, length) {
	  aFunction$8(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var global$g = _globalExports;
	var core$2 = _coreExports;
	var hide$3 = require_hide();
	var redefine$3 = _redefineExports;
	var ctx$8 = _ctx;
	var PROTOTYPE$3 = 'prototype';

	var $export$1w = function (type, name, source) {
	  var IS_FORCED = type & $export$1w.F;
	  var IS_GLOBAL = type & $export$1w.G;
	  var IS_STATIC = type & $export$1w.S;
	  var IS_PROTO = type & $export$1w.P;
	  var IS_BIND = type & $export$1w.B;
	  var target = IS_GLOBAL ? global$g : IS_STATIC ? global$g[name] || (global$g[name] = {}) : (global$g[name] || {})[PROTOTYPE$3];
	  var exports = IS_GLOBAL ? core$2 : core$2[name] || (core$2[name] = {});
	  var expProto = exports[PROTOTYPE$3] || (exports[PROTOTYPE$3] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx$8(out, global$g) : IS_PROTO && typeof out == 'function' ? ctx$8(Function.call, out) : out;
	    // extend global
	    if (target) redefine$3(target, key, out, type & $export$1w.U);
	    // export
	    if (exports[key] != out) hide$3(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global$g.core = core$2;
	// type bitmap
	$export$1w.F = 1;   // forced
	$export$1w.G = 2;   // global
	$export$1w.S = 4;   // static
	$export$1w.P = 8;   // proto
	$export$1w.B = 16;  // bind
	$export$1w.W = 32;  // wrap
	$export$1w.U = 64;  // safe
	$export$1w.R = 128; // real proto method for `library`
	var _export = $export$1w;

	var _meta = {exports: {}};

	var META$1 = _uid('meta');
	var isObject$o = _isObject;
	var has$9 = _has;
	var setDesc = _objectDp.f;
	var id$1 = 0;
	var isExtensible$1 = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !_fails(function () {
	  return isExtensible$1(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META$1, { value: {
	    i: 'O' + ++id$1, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey$1 = function (it, create) {
	  // return primitive with prefix
	  if (!isObject$o(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has$9(it, META$1)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META$1].i;
	};
	var getWeak$2 = function (it, create) {
	  if (!has$9(it, META$1)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META$1].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta$4.NEED && isExtensible$1(it) && !has$9(it, META$1)) setMeta(it);
	  return it;
	};
	var meta$4 = _meta.exports = {
	  KEY: META$1,
	  NEED: false,
	  fastKey: fastKey$1,
	  getWeak: getWeak$2,
	  onFreeze: onFreeze
	};

	var _metaExports = _meta.exports;

	var _wks = {exports: {}};

	var store = _sharedExports('wks');
	var uid$4 = _uid;
	var Symbol$1 = _globalExports.Symbol;
	var USE_SYMBOL = typeof Symbol$1 == 'function';

	var $exports = _wks.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol$1[name] || (USE_SYMBOL ? Symbol$1 : uid$4)('Symbol.' + name));
	};

	$exports.store = store;

	var _wksExports = _wks.exports;

	var def = _objectDp.f;
	var has$8 = _has;
	var TAG$2 = _wksExports('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !has$8(it = stat ? it : it.prototype, TAG$2)) def(it, TAG$2, { configurable: true, value: tag });
	};

	var _wksExt = {};

	_wksExt.f = _wksExports;

	var global$f = _globalExports;
	var core$1 = _coreExports;
	var LIBRARY$2 = require_library();
	var wksExt$1 = _wksExt;
	var defineProperty$1 = _objectDp.f;
	var _wksDefine = function (name) {
	  var $Symbol = core$1.Symbol || (core$1.Symbol = LIBRARY$2 ? {} : global$f.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$1($Symbol, name, { value: wksExt$1.f(name) });
	};

	var toString$1 = {}.toString;

	var _cof = function (it) {
	  return toString$1.call(it).slice(8, -1);
	};

	var _iobject;
	var hasRequired_iobject;

	function require_iobject () {
		if (hasRequired_iobject) return _iobject;
		hasRequired_iobject = 1;
		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = _cof;
		// eslint-disable-next-line no-prototype-builtins
		_iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};
		return _iobject;
	}

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject$2 = require_iobject();
	var defined$6 = _defined;
	var _toIobject = function (it) {
	  return IObject$2(defined$6(it));
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor$3 = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor$3 : ceil)(it);
	};

	// 7.1.15 ToLength
	var toInteger$9 = _toInteger;
	var min$2 = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min$2(toInteger$9(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var toInteger$8 = _toInteger;
	var max$1 = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = toInteger$8(index);
	  return index < 0 ? max$1(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject$b = _toIobject;
	var toLength$i = _toLength;
	var toAbsoluteIndex$4 = _toAbsoluteIndex;
	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject$b($this);
	    var length = toLength$i(O.length);
	    var index = toAbsoluteIndex$4(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var shared$1 = _sharedExports('keys');
	var uid$3 = _uid;
	var _sharedKey = function (key) {
	  return shared$1[key] || (shared$1[key] = uid$3(key));
	};

	var has$7 = _has;
	var toIObject$a = _toIobject;
	var arrayIndexOf$1 = _arrayIncludes(false);
	var IE_PROTO$2 = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = toIObject$a(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO$2) has$7(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has$7(O, key = names[i++])) {
	    ~arrayIndexOf$1(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys$3 = _objectKeysInternal;
	var enumBugKeys$1 = _enumBugKeys;

	var _objectKeys = Object.keys || function keys(O) {
	  return $keys$3(O, enumBugKeys$1);
	};

	var _objectGops = {};

	_objectGops.f = Object.getOwnPropertySymbols;

	var _objectPie = {};

	var hasRequired_objectPie;

	function require_objectPie () {
		if (hasRequired_objectPie) return _objectPie;
		hasRequired_objectPie = 1;
		_objectPie.f = {}.propertyIsEnumerable;
		return _objectPie;
	}

	// all enumerable object keys, includes symbols
	var getKeys$2 = _objectKeys;
	var gOPS$1 = _objectGops;
	var pIE$1 = require_objectPie();
	var _enumKeys = function (it) {
	  var result = getKeys$2(it);
	  var getSymbols = gOPS$1.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE$1.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};

	// 7.2.2 IsArray(argument)
	var cof$5 = _cof;
	var _isArray = Array.isArray || function isArray(arg) {
	  return cof$5(arg) == 'Array';
	};

	// 7.1.13 ToObject(argument)
	var defined$5 = _defined;
	var _toObject = function (it) {
	  return Object(defined$5(it));
	};

	var _objectDps;
	var hasRequired_objectDps;

	function require_objectDps () {
		if (hasRequired_objectDps) return _objectDps;
		hasRequired_objectDps = 1;
		var dP = _objectDp;
		var anObject = _anObject;
		var getKeys = _objectKeys;

		_objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
		  anObject(O);
		  var keys = getKeys(Properties);
		  var length = keys.length;
		  var i = 0;
		  var P;
		  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
		  return O;
		};
		return _objectDps;
	}

	var document$1 = _globalExports.document;
	var _html = document$1 && document$1.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject$p = _anObject;
	var dPs = require_objectDps();
	var enumBugKeys = _enumBugKeys;
	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$2 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = require_domCreate()('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$2][enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$2] = anObject$p(O);
	    result = new Empty();
	    Empty[PROTOTYPE$2] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

	var _objectGopnExt = {};

	var _objectGopn = {};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys$2 = _objectKeysInternal;
	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	_objectGopn.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys$2(O, hiddenKeys);
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject$9 = _toIobject;
	var gOPN$5 = _objectGopn.f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN$5(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	_objectGopnExt.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$5(toIObject$9(it));
	};

	var _objectGopd = {};

	var pIE = require_objectPie();
	var createDesc$3 = _propertyDesc;
	var toIObject$8 = _toIobject;
	var toPrimitive$5 = _toPrimitive;
	var has$6 = _has;
	var IE8_DOM_DEFINE = _ie8DomDefine;
	var gOPD$9 = Object.getOwnPropertyDescriptor;

	_objectGopd.f = _descriptors ? gOPD$9 : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject$8(O);
	  P = toPrimitive$5(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD$9(O, P);
	  } catch (e) { /* empty */ }
	  if (has$6(O, P)) return createDesc$3(!pIE.f.call(O, P), O[P]);
	};

	// ECMAScript 6 symbols shim
	var global$e = _globalExports;
	var has$5 = _has;
	var DESCRIPTORS$4 = _descriptors;
	var $export$1v = _export;
	var redefine$2 = _redefineExports;
	var META = _metaExports.KEY;
	var $fails$1 = _fails;
	var shared = _sharedExports;
	var setToStringTag = _setToStringTag;
	var uid$2 = _uid;
	var wks$2 = _wksExports;
	var wksExt = _wksExt;
	var wksDefine = _wksDefine;
	var enumKeys = _enumKeys;
	var isArray$4 = _isArray;
	var anObject$o = _anObject;
	var isObject$n = _isObject;
	var toObject$b = _toObject;
	var toIObject$7 = _toIobject;
	var toPrimitive$4 = _toPrimitive;
	var createDesc$2 = _propertyDesc;
	var _create = _objectCreate;
	var gOPNExt = _objectGopnExt;
	var $GOPD$1 = _objectGopd;
	var $GOPS = _objectGops;
	var $DP$1 = _objectDp;
	var $keys$1 = _objectKeys;
	var gOPD$8 = $GOPD$1.f;
	var dP$8 = $DP$1.f;
	var gOPN$4 = gOPNExt.f;
	var $Symbol = global$e.Symbol;
	var $JSON = global$e.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE$1 = 'prototype';
	var HIDDEN = wks$2('_hidden');
	var TO_PRIMITIVE$1 = wks$2('toPrimitive');
	var isEnum$1 = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto$1 = Object[PROTOTYPE$1];
	var USE_NATIVE$1 = typeof $Symbol == 'function' && !!$GOPS.f;
	var QObject = global$e.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS$4 && $fails$1(function () {
	  return _create(dP$8({}, 'a', {
	    get: function () { return dP$8(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$8(ObjectProto$1, key);
	  if (protoDesc) delete ObjectProto$1[key];
	  dP$8(it, key, D);
	  if (protoDesc && it !== ObjectProto$1) dP$8(ObjectProto$1, key, protoDesc);
	} : dP$8;

	var wrap$1 = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE$1]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE$1 && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty$1 = function defineProperty(it, key, D) {
	  if (it === ObjectProto$1) $defineProperty$1(OPSymbols, key, D);
	  anObject$o(it);
	  key = toPrimitive$4(key, true);
	  anObject$o(D);
	  if (has$5(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has$5(it, HIDDEN)) dP$8(it, HIDDEN, createDesc$2(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has$5(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc$2(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$8(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject$o(it);
	  var keys = enumKeys(P = toIObject$7(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty$1(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum$1.call(this, key = toPrimitive$4(key, true));
	  if (this === ObjectProto$1 && has$5(AllSymbols, key) && !has$5(OPSymbols, key)) return false;
	  return E || !has$5(this, key) || !has$5(AllSymbols, key) || has$5(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject$7(it);
	  key = toPrimitive$4(key, true);
	  if (it === ObjectProto$1 && has$5(AllSymbols, key) && !has$5(OPSymbols, key)) return;
	  var D = gOPD$8(it, key);
	  if (D && has$5(AllSymbols, key) && !(has$5(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$4(toIObject$7(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has$5(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto$1;
	  var names = gOPN$4(IS_OP ? OPSymbols : toIObject$7(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has$5(AllSymbols, key = names[i++]) && (IS_OP ? has$5(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE$1) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid$2(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto$1) $set.call(OPSymbols, value);
	      if (has$5(this, HIDDEN) && has$5(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc$2(1, value));
	    };
	    if (DESCRIPTORS$4 && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
	    return wrap$1(tag);
	  };
	  redefine$2($Symbol[PROTOTYPE$1], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD$1.f = $getOwnPropertyDescriptor$1;
	  $DP$1.f = $defineProperty$1;
	  _objectGopn.f = gOPNExt.f = $getOwnPropertyNames;
	  require_objectPie().f = $propertyIsEnumerable;
	  $GOPS.f = $getOwnPropertySymbols;

	  if (DESCRIPTORS$4 && !require_library()) {
	    redefine$2(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap$1(wks$2(name));
	  };
	}

	$export$1v($export$1v.G + $export$1v.W + $export$1v.F * !USE_NATIVE$1, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j$1 = 0; es6Symbols.length > j$1;)wks$2(es6Symbols[j$1++]);

	for (var wellKnownSymbols = $keys$1(wks$2.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export$1v($export$1v.S + $export$1v.F * !USE_NATIVE$1, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has$5(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export$1v($export$1v.S + $export$1v.F * !USE_NATIVE$1, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty$1,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$1,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FAILS_ON_PRIMITIVES = $fails$1(function () { $GOPS.f(1); });

	$export$1v($export$1v.S + $export$1v.F * FAILS_ON_PRIMITIVES, 'Object', {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return $GOPS.f(toObject$b(it));
	  }
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export$1v($export$1v.S + $export$1v.F * (!USE_NATIVE$1 || $fails$1(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject$n(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray$4(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$1][TO_PRIMITIVE$1] || require_hide()($Symbol[PROTOTYPE$1], TO_PRIMITIVE$1, $Symbol[PROTOTYPE$1].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global$e.JSON, 'JSON', true);

	var $export$1u = _export;
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export$1u($export$1u.S, 'Object', { create: _objectCreate });

	var $export$1t = _export;
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export$1t($export$1t.S + $export$1t.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

	var $export$1s = _export;
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export$1s($export$1s.S + $export$1s.F * !_descriptors, 'Object', { defineProperties: require_objectDps() });

	var _objectSap;
	var hasRequired_objectSap;

	function require_objectSap () {
		if (hasRequired_objectSap) return _objectSap;
		hasRequired_objectSap = 1;
		// most Object methods by ES6 should accept primitives
		var $export = _export;
		var core = _coreExports;
		var fails = _fails;
		_objectSap = function (KEY, exec) {
		  var fn = (core.Object || {})[KEY] || Object[KEY];
		  var exp = {};
		  exp[KEY] = exec(fn);
		  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
		};
		return _objectSap;
	}

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject$6 = _toIobject;
	var $getOwnPropertyDescriptor = _objectGopd.f;

	require_objectSap()('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject$6(it), key);
	  };
	});

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has$4 = _has;
	var toObject$a = _toObject;
	var IE_PROTO = _sharedKey('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = toObject$a(O);
	  if (has$4(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject$9 = _toObject;
	var $getPrototypeOf = _objectGpo;

	require_objectSap()('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject$9(it));
	  };
	});

	// 19.1.2.14 Object.keys(O)
	var toObject$8 = _toObject;
	var $keys = _objectKeys;

	require_objectSap()('keys', function () {
	  return function keys(it) {
	    return $keys(toObject$8(it));
	  };
	});

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	require_objectSap()('getOwnPropertyNames', function () {
	  return _objectGopnExt.f;
	});

	// 19.1.2.5 Object.freeze(O)
	var isObject$m = _isObject;
	var meta$3 = _metaExports.onFreeze;

	require_objectSap()('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject$m(it) ? $freeze(meta$3(it)) : it;
	  };
	});

	// 19.1.2.17 Object.seal(O)
	var isObject$l = _isObject;
	var meta$2 = _metaExports.onFreeze;

	require_objectSap()('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject$l(it) ? $seal(meta$2(it)) : it;
	  };
	});

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject$k = _isObject;
	var meta$1 = _metaExports.onFreeze;

	require_objectSap()('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject$k(it) ? $preventExtensions(meta$1(it)) : it;
	  };
	});

	// 19.1.2.12 Object.isFrozen(O)
	var isObject$j = _isObject;

	require_objectSap()('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject$j(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

	// 19.1.2.13 Object.isSealed(O)
	var isObject$i = _isObject;

	require_objectSap()('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject$i(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

	// 19.1.2.11 Object.isExtensible(O)
	var isObject$h = _isObject;

	require_objectSap()('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject$h(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

	var _objectAssign;
	var hasRequired_objectAssign;

	function require_objectAssign () {
		if (hasRequired_objectAssign) return _objectAssign;
		hasRequired_objectAssign = 1;
		// 19.1.2.1 Object.assign(target, source, ...)
		var DESCRIPTORS = _descriptors;
		var getKeys = _objectKeys;
		var gOPS = _objectGops;
		var pIE = require_objectPie();
		var toObject = _toObject;
		var IObject = require_iobject();
		var $assign = Object.assign;

		// should work with symbols and should have deterministic property order (V8 bug)
		_objectAssign = !$assign || _fails(function () {
		  var A = {};
		  var B = {};
		  // eslint-disable-next-line no-undef
		  var S = Symbol();
		  var K = 'abcdefghijklmnopqrst';
		  A[S] = 7;
		  K.split('').forEach(function (k) { B[k] = k; });
		  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
		}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
		  var T = toObject(target);
		  var aLen = arguments.length;
		  var index = 1;
		  var getSymbols = gOPS.f;
		  var isEnum = pIE.f;
		  while (aLen > index) {
		    var S = IObject(arguments[index++]);
		    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
		    var length = keys.length;
		    var j = 0;
		    var key;
		    while (length > j) {
		      key = keys[j++];
		      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
		    }
		  } return T;
		} : $assign;
		return _objectAssign;
	}

	// 19.1.3.1 Object.assign(target, source)
	var $export$1r = _export;

	$export$1r($export$1r.S + $export$1r.F, 'Object', { assign: require_objectAssign() });

	var _sameValue;
	var hasRequired_sameValue;

	function require_sameValue () {
		if (hasRequired_sameValue) return _sameValue;
		hasRequired_sameValue = 1;
		// 7.2.9 SameValue(x, y)
		_sameValue = Object.is || function is(x, y) {
		  // eslint-disable-next-line no-self-compare
		  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
		};
		return _sameValue;
	}

	// 19.1.3.10 Object.is(value1, value2)
	var $export$1q = _export;
	$export$1q($export$1q.S, 'Object', { is: require_sameValue() });

	var _setProto;
	var hasRequired_setProto;

	function require_setProto () {
		if (hasRequired_setProto) return _setProto;
		hasRequired_setProto = 1;
		// Works with __proto__ only. Old v8 can't work with null proto objects.
		/* eslint-disable no-proto */
		var isObject = _isObject;
		var anObject = _anObject;
		var check = function (O, proto) {
		  anObject(O);
		  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
		};
		_setProto = {
		  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
		    function (test, buggy, set) {
		      try {
		        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
		        set(test, []);
		        buggy = !(test instanceof Array);
		      } catch (e) { buggy = true; }
		      return function setPrototypeOf(O, proto) {
		        check(O, proto);
		        if (buggy) O.__proto__ = proto;
		        else set(O, proto);
		        return O;
		      };
		    }({}, false) : undefined),
		  check: check
		};
		return _setProto;
	}

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export$1p = _export;
	$export$1p($export$1p.S, 'Object', { setPrototypeOf: require_setProto().set });

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof$4 = _cof;
	var TAG$1 = _wksExports('toStringTag');
	// ES3 wrong here
	var ARG = cof$4(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof$4(O)
	    // ES3 arguments fallback
	    : (B = cof$4(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	// 19.1.3.6 Object.prototype.toString()
	var classof$4 = _classof;
	var test$1 = {};
	test$1[_wksExports('toStringTag')] = 'z';
	if (test$1 + '' != '[object z]') {
	  _redefineExports(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof$4(this) + ']';
	  }, true);
	}

	var _invoke;
	var hasRequired_invoke;

	function require_invoke () {
		if (hasRequired_invoke) return _invoke;
		hasRequired_invoke = 1;
		// fast apply, http://jsperf.lnkit.com/fast-apply/5
		_invoke = function (fn, args, that) {
		  var un = that === undefined;
		  switch (args.length) {
		    case 0: return un ? fn()
		                      : fn.call(that);
		    case 1: return un ? fn(args[0])
		                      : fn.call(that, args[0]);
		    case 2: return un ? fn(args[0], args[1])
		                      : fn.call(that, args[0], args[1]);
		    case 3: return un ? fn(args[0], args[1], args[2])
		                      : fn.call(that, args[0], args[1], args[2]);
		    case 4: return un ? fn(args[0], args[1], args[2], args[3])
		                      : fn.call(that, args[0], args[1], args[2], args[3]);
		  } return fn.apply(that, args);
		};
		return _invoke;
	}

	var _bind;
	var hasRequired_bind;

	function require_bind () {
		if (hasRequired_bind) return _bind;
		hasRequired_bind = 1;
		var aFunction = _aFunction;
		var isObject = _isObject;
		var invoke = require_invoke();
		var arraySlice = [].slice;
		var factories = {};

		var construct = function (F, len, args) {
		  if (!(len in factories)) {
		    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
		    // eslint-disable-next-line no-new-func
		    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
		  } return factories[len](F, args);
		};

		_bind = Function.bind || function bind(that /* , ...args */) {
		  var fn = aFunction(this);
		  var partArgs = arraySlice.call(arguments, 1);
		  var bound = function (/* args... */) {
		    var args = partArgs.concat(arraySlice.call(arguments));
		    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
		  };
		  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
		  return bound;
		};
		return _bind;
	}

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export$1o = _export;

	$export$1o($export$1o.P, 'Function', { bind: require_bind() });

	var dP$7 = _objectDp.f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME$1 = 'name';

	// 19.2.4.2 name
	NAME$1 in FProto || _descriptors && dP$7(FProto, NAME$1, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});

	var isObject$g = _isObject;
	var getPrototypeOf$3 = _objectGpo;
	var HAS_INSTANCE = _wksExports('hasInstance');
	var FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) _objectDp.f(FunctionProto, HAS_INSTANCE, { value: function (O) {
	  if (typeof this != 'function' || !isObject$g(O)) return false;
	  if (!isObject$g(this.prototype)) return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while (O = getPrototypeOf$3(O)) if (this.prototype === O) return true;
	  return false;
	} });

	var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var $export$1n = _export;
	var defined$4 = _defined;
	var fails$7 = _fails;
	var spaces = _stringWs;
	var space = '[' + spaces + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');

	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails$7(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim$1) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export$1n($export$1n.P + $export$1n.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim$1 = exporter.trim = function (string, TYPE) {
	  string = String(defined$4(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};

	var _stringTrim = exporter;

	var $parseInt$2 = _globalExports.parseInt;
	var $trim$2 = _stringTrim.trim;
	var ws = _stringWs;
	var hex = /^[-+]?0[xX]/;

	var _parseInt = $parseInt$2(ws + '08') !== 8 || $parseInt$2(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim$2(String(str), 3);
	  return $parseInt$2(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt$2;

	var $export$1m = _export;
	var $parseInt$1 = _parseInt;
	// 18.2.5 parseInt(string, radix)
	$export$1m($export$1m.G + $export$1m.F * (parseInt != $parseInt$1), { parseInt: $parseInt$1 });

	var $parseFloat$2 = _globalExports.parseFloat;
	var $trim$1 = _stringTrim.trim;

	var _parseFloat = 1 / $parseFloat$2(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim$1(String(str), 3);
	  var result = $parseFloat$2(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat$2;

	var $export$1l = _export;
	var $parseFloat$1 = _parseFloat;
	// 18.2.4 parseFloat(string)
	$export$1l($export$1l.G + $export$1l.F * (parseFloat != $parseFloat$1), { parseFloat: $parseFloat$1 });

	var isObject$f = _isObject;
	var setPrototypeOf = require_setProto().set;
	var _inheritIfRequired = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject$f(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};

	var global$d = _globalExports;
	var has$3 = _has;
	var cof$3 = _cof;
	var inheritIfRequired$1 = _inheritIfRequired;
	var toPrimitive$3 = _toPrimitive;
	var fails$6 = _fails;
	var gOPN$3 = _objectGopn.f;
	var gOPD$7 = _objectGopd.f;
	var dP$6 = _objectDp.f;
	var $trim = _stringTrim.trim;
	var NUMBER = 'Number';
	var $Number = global$d[NUMBER];
	var Base$1 = $Number;
	var proto$4 = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = cof$3(_objectCreate(proto$4)) == NUMBER;
	var TRIM = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber$1 = function (argument) {
	  var it = toPrimitive$3(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails$6(function () { proto$4.valueOf.call(that); }) : cof$3(that) != NUMBER)
	        ? inheritIfRequired$1(new Base$1(toNumber$1(it)), that, $Number) : toNumber$1(it);
	  };
	  for (var keys$1 = _descriptors ? gOPN$3(Base$1) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key$1; keys$1.length > j; j++) {
	    if (has$3(Base$1, key$1 = keys$1[j]) && !has$3($Number, key$1)) {
	      dP$6($Number, key$1, gOPD$7(Base$1, key$1));
	    }
	  }
	  $Number.prototype = proto$4;
	  proto$4.constructor = $Number;
	  _redefineExports(global$d, NUMBER, $Number);
	}

	var cof$2 = _cof;
	var _aNumberValue = function (it, msg) {
	  if (typeof it != 'number' && cof$2(it) != 'Number') throw TypeError(msg);
	  return +it;
	};

	var toInteger$7 = _toInteger;
	var defined$3 = _defined;

	var _stringRepeat = function repeat(count) {
	  var str = String(defined$3(this));
	  var res = '';
	  var n = toInteger$7(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
	};

	var $export$1k = _export;
	var toInteger$6 = _toInteger;
	var aNumberValue$1 = _aNumberValue;
	var repeat$1 = _stringRepeat;
	var $toFixed = 1.0.toFixed;
	var floor$2 = Math.floor;
	var data$1 = [0, 0, 0, 0, 0, 0];
	var ERROR = 'Number.toFixed: incorrect invocation!';
	var ZERO = '0';

	var multiply = function (n, c) {
	  var i = -1;
	  var c2 = c;
	  while (++i < 6) {
	    c2 += n * data$1[i];
	    data$1[i] = c2 % 1e7;
	    c2 = floor$2(c2 / 1e7);
	  }
	};
	var divide = function (n) {
	  var i = 6;
	  var c = 0;
	  while (--i >= 0) {
	    c += data$1[i];
	    data$1[i] = floor$2(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function () {
	  var i = 6;
	  var s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data$1[i] !== 0) {
	      var t = String(data$1[i]);
	      s = s === '' ? t : s + repeat$1.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function (x) {
	  var n = 0;
	  var x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
	};

	$export$1k($export$1k.P + $export$1k.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !_fails(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue$1(this, ERROR);
	    var f = toInteger$6(fractionDigits);
	    var s = '';
	    var m = ZERO;
	    var e, z, j, k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat$1.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat$1.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

	var $export$1j = _export;
	var $fails = _fails;
	var aNumberValue = _aNumberValue;
	var $toPrecision = 1.0.toPrecision;

	$export$1j($export$1j.P + $export$1j.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});

	// 20.1.2.1 Number.EPSILON
	var $export$1i = _export;

	$export$1i($export$1i.S, 'Number', { EPSILON: Math.pow(2, -52) });

	// 20.1.2.2 Number.isFinite(number)
	var $export$1h = _export;
	var _isFinite = _globalExports.isFinite;

	$export$1h($export$1h.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

	// 20.1.2.3 Number.isInteger(number)
	var isObject$e = _isObject;
	var floor$1 = Math.floor;
	var _isInteger = function isInteger(it) {
	  return !isObject$e(it) && isFinite(it) && floor$1(it) === it;
	};

	// 20.1.2.3 Number.isInteger(number)
	var $export$1g = _export;

	$export$1g($export$1g.S, 'Number', { isInteger: _isInteger });

	// 20.1.2.4 Number.isNaN(number)
	var $export$1f = _export;

	$export$1f($export$1f.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
	});

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export$1e = _export;
	var isInteger = _isInteger;
	var abs$1 = Math.abs;

	$export$1e($export$1e.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs$1(number) <= 0x1fffffffffffff;
	  }
	});

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export$1d = _export;

	$export$1d($export$1d.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export$1c = _export;

	$export$1c($export$1c.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

	var $export$1b = _export;
	var $parseFloat = _parseFloat;
	// 20.1.2.12 Number.parseFloat(string)
	$export$1b($export$1b.S + $export$1b.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

	var $export$1a = _export;
	var $parseInt = _parseInt;
	// 20.1.2.13 Number.parseInt(string, radix)
	$export$1a($export$1a.S + $export$1a.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

	// 20.2.2.20 Math.log1p(x)
	var _mathLog1p = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

	// 20.2.2.3 Math.acosh(x)
	var $export$19 = _export;
	var log1p = _mathLog1p;
	var sqrt = Math.sqrt;
	var $acosh = Math.acosh;

	$export$19($export$19.S + $export$19.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

	// 20.2.2.5 Math.asinh(x)
	var $export$18 = _export;
	var $asinh = Math.asinh;

	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0
	$export$18($export$18.S + $export$18.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

	// 20.2.2.7 Math.atanh(x)
	var $export$17 = _export;
	var $atanh = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0
	$export$17($export$17.S + $export$17.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

	// 20.2.2.28 Math.sign(x)
	var _mathSign = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

	// 20.2.2.9 Math.cbrt(x)
	var $export$16 = _export;
	var sign = _mathSign;

	$export$16($export$16.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

	// 20.2.2.11 Math.clz32(x)
	var $export$15 = _export;

	$export$15($export$15.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

	// 20.2.2.12 Math.cosh(x)
	var $export$14 = _export;
	var exp$2 = Math.exp;

	$export$14($export$14.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp$2(x = +x) + exp$2(-x)) / 2;
	  }
	});

	// 20.2.2.14 Math.expm1(x)
	var $expm1$1 = Math.expm1;
	var _mathExpm1 = (!$expm1$1
	  // Old FF bug
	  || $expm1$1(10) > 22025.465794806719 || $expm1$1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1$1(-2e-17) != -2e-17
	) ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1$1;

	// 20.2.2.14 Math.expm1(x)
	var $export$13 = _export;
	var $expm1 = _mathExpm1;

	$export$13($export$13.S + $export$13.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

	var _mathFround;
	var hasRequired_mathFround;

	function require_mathFround () {
		if (hasRequired_mathFround) return _mathFround;
		hasRequired_mathFround = 1;
		// 20.2.2.16 Math.fround(x)
		var sign = _mathSign;
		var pow = Math.pow;
		var EPSILON = pow(2, -52);
		var EPSILON32 = pow(2, -23);
		var MAX32 = pow(2, 127) * (2 - EPSILON32);
		var MIN32 = pow(2, -126);

		var roundTiesToEven = function (n) {
		  return n + 1 / EPSILON - 1 / EPSILON;
		};

		_mathFround = Math.fround || function fround(x) {
		  var $abs = Math.abs(x);
		  var $sign = sign(x);
		  var a, result;
		  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
		  a = (1 + EPSILON32 / EPSILON) * $abs;
		  result = a - (a - $abs);
		  // eslint-disable-next-line no-self-compare
		  if (result > MAX32 || result != result) return $sign * Infinity;
		  return $sign * result;
		};
		return _mathFround;
	}

	// 20.2.2.16 Math.fround(x)
	var $export$12 = _export;

	$export$12($export$12.S, 'Math', { fround: require_mathFround() });

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export$11 = _export;
	var abs = Math.abs;

	$export$11($export$11.S, 'Math', {
	  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	    var sum = 0;
	    var i = 0;
	    var aLen = arguments.length;
	    var larg = 0;
	    var arg, div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

	// 20.2.2.18 Math.imul(x, y)
	var $export$10 = _export;
	var $imul = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export$10($export$10.S + $export$10.F * _fails(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff;
	    var xn = +x;
	    var yn = +y;
	    var xl = UINT16 & xn;
	    var yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

	// 20.2.2.21 Math.log10(x)
	var $export$$ = _export;

	$export$$($export$$.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) * Math.LOG10E;
	  }
	});

	// 20.2.2.20 Math.log1p(x)
	var $export$_ = _export;

	$export$_($export$_.S, 'Math', { log1p: _mathLog1p });

	// 20.2.2.22 Math.log2(x)
	var $export$Z = _export;

	$export$Z($export$Z.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});

	// 20.2.2.28 Math.sign(x)
	var $export$Y = _export;

	$export$Y($export$Y.S, 'Math', { sign: _mathSign });

	// 20.2.2.30 Math.sinh(x)
	var $export$X = _export;
	var expm1$1 = _mathExpm1;
	var exp$1 = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export$X($export$X.S + $export$X.F * _fails(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1
	      ? (expm1$1(x) - expm1$1(-x)) / 2
	      : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
	  }
	});

	// 20.2.2.33 Math.tanh(x)
	var $export$W = _export;
	var expm1 = _mathExpm1;
	var exp = Math.exp;

	$export$W($export$W.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x);
	    var b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

	// 20.2.2.34 Math.trunc(x)
	var $export$V = _export;

	$export$V($export$V.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

	var $export$U = _export;
	var toAbsoluteIndex$3 = _toAbsoluteIndex;
	var fromCharCode = String.fromCharCode;
	var $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export$U($export$U.S + $export$U.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
	    var res = [];
	    var aLen = arguments.length;
	    var i = 0;
	    var code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex$3(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

	var $export$T = _export;
	var toIObject$5 = _toIobject;
	var toLength$h = _toLength;

	$export$T($export$T.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject$5(callSite.raw);
	    var len = toLength$h(tpl.length);
	    var aLen = arguments.length;
	    var res = [];
	    var i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

	// 21.1.3.25 String.prototype.trim()
	_stringTrim('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});

	var toInteger$5 = _toInteger;
	var defined$2 = _defined;
	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined$2(that));
	    var i = toInteger$5(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var _iterators = {};

	var _iterCreate;
	var hasRequired_iterCreate;

	function require_iterCreate () {
		if (hasRequired_iterCreate) return _iterCreate;
		hasRequired_iterCreate = 1;
		var create = _objectCreate;
		var descriptor = _propertyDesc;
		var setToStringTag = _setToStringTag;
		var IteratorPrototype = {};

		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		require_hide()(IteratorPrototype, _wksExports('iterator'), function () { return this; });

		_iterCreate = function (Constructor, NAME, next) {
		  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
		  setToStringTag(Constructor, NAME + ' Iterator');
		};
		return _iterCreate;
	}

	var _iterDefine;
	var hasRequired_iterDefine;

	function require_iterDefine () {
		if (hasRequired_iterDefine) return _iterDefine;
		hasRequired_iterDefine = 1;
		var LIBRARY = require_library();
		var $export = _export;
		var redefine = _redefineExports;
		var hide = require_hide();
		var Iterators = _iterators;
		var $iterCreate = require_iterCreate();
		var setToStringTag = _setToStringTag;
		var getPrototypeOf = _objectGpo;
		var ITERATOR = _wksExports('iterator');
		var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
		var FF_ITERATOR = '@@iterator';
		var KEYS = 'keys';
		var VALUES = 'values';

		var returnThis = function () { return this; };

		_iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
		  $iterCreate(Constructor, NAME, next);
		  var getMethod = function (kind) {
		    if (!BUGGY && kind in proto) return proto[kind];
		    switch (kind) {
		      case KEYS: return function keys() { return new Constructor(this, kind); };
		      case VALUES: return function values() { return new Constructor(this, kind); };
		    } return function entries() { return new Constructor(this, kind); };
		  };
		  var TAG = NAME + ' Iterator';
		  var DEF_VALUES = DEFAULT == VALUES;
		  var VALUES_BUG = false;
		  var proto = Base.prototype;
		  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
		  var $default = $native || getMethod(DEFAULT);
		  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
		  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
		  var methods, key, IteratorPrototype;
		  // Fix native
		  if ($anyNative) {
		    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
		    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
		      // Set @@toStringTag to native iterators
		      setToStringTag(IteratorPrototype, TAG, true);
		      // fix for some old engines
		      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
		    }
		  }
		  // fix Array#{values, @@iterator}.name in V8 / FF
		  if (DEF_VALUES && $native && $native.name !== VALUES) {
		    VALUES_BUG = true;
		    $default = function values() { return $native.call(this); };
		  }
		  // Define iterator
		  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
		    hide(proto, ITERATOR, $default);
		  }
		  // Plug for library
		  Iterators[NAME] = $default;
		  Iterators[TAG] = returnThis;
		  if (DEFAULT) {
		    methods = {
		      values: DEF_VALUES ? $default : getMethod(VALUES),
		      keys: IS_SET ? $default : getMethod(KEYS),
		      entries: $entries
		    };
		    if (FORCED) for (key in methods) {
		      if (!(key in proto)) redefine(proto, key, methods[key]);
		    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
		  }
		  return methods;
		};
		return _iterDefine;
	}

	var $at$1 = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	require_iterDefine()(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at$1(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	var $export$S = _export;
	var $at = _stringAt(false);
	$export$S($export$S.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});

	// 7.2.8 IsRegExp(argument)
	var isObject$d = _isObject;
	var cof$1 = _cof;
	var MATCH = _wksExports('match');
	var _isRegexp = function (it) {
	  var isRegExp;
	  return isObject$d(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof$1(it) == 'RegExp');
	};

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp$2 = _isRegexp;
	var defined$1 = _defined;

	var _stringContext = function (that, searchString, NAME) {
	  if (isRegExp$2(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined$1(that));
	};

	var _failsIsRegexp;
	var hasRequired_failsIsRegexp;

	function require_failsIsRegexp () {
		if (hasRequired_failsIsRegexp) return _failsIsRegexp;
		hasRequired_failsIsRegexp = 1;
		var MATCH = _wksExports('match');
		_failsIsRegexp = function (KEY) {
		  var re = /./;
		  try {
		    '/./'[KEY](re);
		  } catch (e) {
		    try {
		      re[MATCH] = false;
		      return !'/./'[KEY](re);
		    } catch (f) { /* empty */ }
		  } return true;
		};
		return _failsIsRegexp;
	}

	var $export$R = _export;
	var toLength$g = _toLength;
	var context$2 = _stringContext;
	var ENDS_WITH = 'endsWith';
	var $endsWith = ''[ENDS_WITH];

	$export$R($export$R.P + $export$R.F * require_failsIsRegexp()(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = context$2(this, searchString, ENDS_WITH);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = toLength$g(that.length);
	    var end = endPosition === undefined ? len : Math.min(toLength$g(endPosition), len);
	    var search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

	var $export$Q = _export;
	var context$1 = _stringContext;
	var INCLUDES = 'includes';

	$export$Q($export$Q.P + $export$Q.F * require_failsIsRegexp()(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~context$1(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $export$P = _export;

	$export$P($export$P.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: _stringRepeat
	});

	var $export$O = _export;
	var toLength$f = _toLength;
	var context = _stringContext;
	var STARTS_WITH = 'startsWith';
	var $startsWith = ''[STARTS_WITH];

	$export$O($export$O.P + $export$O.F * require_failsIsRegexp()(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH);
	    var index = toLength$f(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

	var _stringHtml;
	var hasRequired_stringHtml;

	function require_stringHtml () {
		if (hasRequired_stringHtml) return _stringHtml;
		hasRequired_stringHtml = 1;
		var $export = _export;
		var fails = _fails;
		var defined = _defined;
		var quot = /"/g;
		// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
		var createHTML = function (string, tag, attribute, value) {
		  var S = String(defined(string));
		  var p1 = '<' + tag;
		  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
		  return p1 + '>' + S + '</' + tag + '>';
		};
		_stringHtml = function (NAME, exec) {
		  var O = {};
		  O[NAME] = exec(createHTML);
		  $export($export.P + $export.F * fails(function () {
		    var test = ''[NAME]('"');
		    return test !== test.toLowerCase() || test.split('"').length > 3;
		  }), 'String', O);
		};
		return _stringHtml;
	}

	// B.2.3.2 String.prototype.anchor(name)
	require_stringHtml()('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});

	// B.2.3.3 String.prototype.big()
	require_stringHtml()('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});

	// B.2.3.4 String.prototype.blink()
	require_stringHtml()('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});

	// B.2.3.5 String.prototype.bold()
	require_stringHtml()('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});

	// B.2.3.6 String.prototype.fixed()
	require_stringHtml()('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});

	// B.2.3.7 String.prototype.fontcolor(color)
	require_stringHtml()('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});

	// B.2.3.8 String.prototype.fontsize(size)
	require_stringHtml()('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});

	// B.2.3.9 String.prototype.italics()
	require_stringHtml()('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});

	// B.2.3.10 String.prototype.link(url)
	require_stringHtml()('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});

	// B.2.3.11 String.prototype.small()
	require_stringHtml()('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});

	// B.2.3.12 String.prototype.strike()
	require_stringHtml()('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});

	// B.2.3.13 String.prototype.sub()
	require_stringHtml()('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});

	// B.2.3.14 String.prototype.sup()
	require_stringHtml()('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export$N = _export;

	$export$N($export$N.S, 'Date', { now: function () { return new Date().getTime(); } });

	var $export$M = _export;
	var toObject$7 = _toObject;
	var toPrimitive$2 = _toPrimitive;

	$export$M($export$M.P + $export$M.F * _fails(function () {
	  return new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
	}), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    var O = toObject$7(this);
	    var pv = toPrimitive$2(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var fails$5 = _fails;
	var getTime$1 = Date.prototype.getTime;
	var $toISOString = Date.prototype.toISOString;

	var lz = function (num) {
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	var _dateToIsoString = (fails$5(function () {
	  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
	}) || !fails$5(function () {
	  $toISOString.call(new Date(NaN));
	})) ? function toISOString() {
	  if (!isFinite(getTime$1.call(this))) throw RangeError('Invalid time value');
	  var d = this;
	  var y = d.getUTCFullYear();
	  var m = d.getUTCMilliseconds();
	  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	} : $toISOString;

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export$L = _export;
	var toISOString = _dateToIsoString;

	// PhantomJS / old WebKit has a broken implementations
	$export$L($export$L.P + $export$L.F * (Date.prototype.toISOString !== toISOString), 'Date', {
	  toISOString: toISOString
	});

	var DateProto = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING$1 = 'toString';
	var $toString$1 = DateProto[TO_STRING$1];
	var getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  _redefineExports(DateProto, TO_STRING$1, function toString() {
	    var value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString$1.call(this) : INVALID_DATE;
	  });
	}

	var _dateToPrimitive;
	var hasRequired_dateToPrimitive;

	function require_dateToPrimitive () {
		if (hasRequired_dateToPrimitive) return _dateToPrimitive;
		hasRequired_dateToPrimitive = 1;
		var anObject = _anObject;
		var toPrimitive = _toPrimitive;
		var NUMBER = 'number';

		_dateToPrimitive = function (hint) {
		  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
		  return toPrimitive(anObject(this), hint != NUMBER);
		};
		return _dateToPrimitive;
	}

	var TO_PRIMITIVE = _wksExports('toPrimitive');
	var proto$3 = Date.prototype;

	if (!(TO_PRIMITIVE in proto$3)) require_hide()(proto$3, TO_PRIMITIVE, require_dateToPrimitive());

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export$K = _export;

	$export$K($export$K.S, 'Array', { isArray: _isArray });

	// call something on iterator step with safe closing on error
	var anObject$n = _anObject;
	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject$n(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject$n(ret.call(iterator));
	    throw e;
	  }
	};

	// check on default Array iterator
	var Iterators$4 = _iterators;
	var ITERATOR$3 = _wksExports('iterator');
	var ArrayProto$2 = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (Iterators$4.Array === it || ArrayProto$2[ITERATOR$3] === it);
	};

	var $defineProperty = _objectDp;
	var createDesc$1 = _propertyDesc;

	var _createProperty = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc$1(0, value));
	  else object[index] = value;
	};

	var classof$3 = _classof;
	var ITERATOR$2 = _wksExports('iterator');
	var Iterators$3 = _iterators;
	var core_getIteratorMethod = _coreExports.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$2]
	    || it['@@iterator']
	    || Iterators$3[classof$3(it)];
	};

	var _iterDetect;
	var hasRequired_iterDetect;

	function require_iterDetect () {
		if (hasRequired_iterDetect) return _iterDetect;
		hasRequired_iterDetect = 1;
		var ITERATOR = _wksExports('iterator');
		var SAFE_CLOSING = false;

		try {
		  var riter = [7][ITERATOR]();
		  riter['return'] = function () { SAFE_CLOSING = true; };
		  // eslint-disable-next-line no-throw-literal
		  Array.from(riter, function () { throw 2; });
		} catch (e) { /* empty */ }

		_iterDetect = function (exec, skipClosing) {
		  if (!skipClosing && !SAFE_CLOSING) return false;
		  var safe = false;
		  try {
		    var arr = [7];
		    var iter = arr[ITERATOR]();
		    iter.next = function () { return { done: safe = true }; };
		    arr[ITERATOR] = function () { return iter; };
		    exec(arr);
		  } catch (e) { /* empty */ }
		  return safe;
		};
		return _iterDetect;
	}

	var ctx$7 = _ctx;
	var $export$J = _export;
	var toObject$6 = _toObject;
	var call$1 = _iterCall;
	var isArrayIter$2 = _isArrayIter;
	var toLength$e = _toLength;
	var createProperty$2 = _createProperty;
	var getIterFn$2 = core_getIteratorMethod;

	$export$J($export$J.S + $export$J.F * !require_iterDetect()(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject$6(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn$2(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx$7(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter$2(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty$2(result, index, mapping ? call$1(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength$e(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty$2(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

	var $export$I = _export;
	var createProperty$1 = _createProperty;

	// WebKit Array.of isn't generic
	$export$I($export$I.S + $export$I.F * _fails(function () {
	  function F() { /* empty */ }
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */) {
	    var index = 0;
	    var aLen = arguments.length;
	    var result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) createProperty$1(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

	var fails$4 = _fails;

	var _strictMethod = function (method, arg) {
	  return !!method && fails$4(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
	  });
	};

	// 22.1.3.13 Array.prototype.join(separator)
	var $export$H = _export;
	var toIObject$4 = _toIobject;
	var arrayJoin$1 = [].join;

	// fallback for not array-like strings
	$export$H($export$H.P + $export$H.F * (require_iobject() != Object || !_strictMethod(arrayJoin$1)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin$1.call(toIObject$4(this), separator === undefined ? ',' : separator);
	  }
	});

	var $export$G = _export;
	var html$2 = _html;
	var cof = _cof;
	var toAbsoluteIndex$2 = _toAbsoluteIndex;
	var toLength$d = _toLength;
	var arraySlice$1 = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export$G($export$G.P + $export$G.F * _fails(function () {
	  if (html$2) arraySlice$1.call(html$2);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength$d(this.length);
	    var klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice$1.call(this, begin, end);
	    var start = toAbsoluteIndex$2(begin, len);
	    var upTo = toAbsoluteIndex$2(end, len);
	    var size = toLength$d(upTo - start);
	    var cloned = new Array(size);
	    var i = 0;
	    for (; i < size; i++) cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

	var $export$F = _export;
	var aFunction$7 = _aFunction;
	var toObject$5 = _toObject;
	var fails$3 = _fails;
	var $sort = [].sort;
	var test = [1, 2, 3];

	$export$F($export$F.P + $export$F.F * (fails$3(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails$3(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !_strictMethod($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? $sort.call(toObject$5(this))
	      : $sort.call(toObject$5(this), aFunction$7(comparefn));
	  }
	});

	var isObject$c = _isObject;
	var isArray$3 = _isArray;
	var SPECIES$2 = _wksExports('species');

	var _arraySpeciesConstructor = function (original) {
	  var C;
	  if (isArray$3(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray$3(C.prototype))) C = undefined;
	    if (isObject$c(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor$5 = _arraySpeciesConstructor;

	var _arraySpeciesCreate = function (original, length) {
	  return new (speciesConstructor$5(original))(length);
	};

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx$6 = _ctx;
	var IObject$1 = require_iobject();
	var toObject$4 = _toObject;
	var toLength$c = _toLength;
	var asc = _arraySpeciesCreate;
	var _arrayMethods = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject$4($this);
	    var self = IObject$1(O);
	    var f = ctx$6(callbackfn, that, 3);
	    var length = toLength$c(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

	var $export$E = _export;
	var $forEach = _arrayMethods(0);
	var STRICT = _strictMethod([].forEach, true);

	$export$E($export$E.P + $export$E.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

	var $export$D = _export;
	var $map$1 = _arrayMethods(1);

	$export$D($export$D.P + $export$D.F * !_strictMethod([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map$1(this, callbackfn, arguments[1]);
	  }
	});

	var $export$C = _export;
	var $filter = _arrayMethods(2);

	$export$C($export$C.P + $export$C.F * !_strictMethod([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

	var $export$B = _export;
	var $some = _arrayMethods(3);

	$export$B($export$B.P + $export$B.F * !_strictMethod([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

	var $export$A = _export;
	var $every = _arrayMethods(4);

	$export$A($export$A.P + $export$A.F * !_strictMethod([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

	var aFunction$6 = _aFunction;
	var toObject$3 = _toObject;
	var IObject = require_iobject();
	var toLength$b = _toLength;

	var _arrayReduce = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction$6(callbackfn);
	  var O = toObject$3(that);
	  var self = IObject(O);
	  var length = toLength$b(O.length);
	  var index = isRight ? length - 1 : 0;
	  var i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

	var $export$z = _export;
	var $reduce$1 = _arrayReduce;

	$export$z($export$z.P + $export$z.F * !_strictMethod([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce$1(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

	var $export$y = _export;
	var $reduce = _arrayReduce;

	$export$y($export$y.P + $export$y.F * !_strictMethod([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

	var $export$x = _export;
	var $indexOf = _arrayIncludes(false);
	var $native$1 = [].indexOf;
	var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].indexOf(1, -0) < 0;

	$export$x($export$x.P + $export$x.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO$1
	      // convert -0 to +0
	      ? $native$1.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

	var $export$w = _export;
	var toIObject$3 = _toIobject;
	var toInteger$4 = _toInteger;
	var toLength$a = _toLength;
	var $native = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export$w($export$w.P + $export$w.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject$3(this);
	    var length = toLength$a(O.length);
	    var index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger$4(arguments[1]));
	    if (index < 0) index = length + index;
	    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
	    return -1;
	  }
	});

	var _arrayCopyWithin;
	var hasRequired_arrayCopyWithin;

	function require_arrayCopyWithin () {
		if (hasRequired_arrayCopyWithin) return _arrayCopyWithin;
		hasRequired_arrayCopyWithin = 1;
		var toObject = _toObject;
		var toAbsoluteIndex = _toAbsoluteIndex;
		var toLength = _toLength;

		_arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
		  var O = toObject(this);
		  var len = toLength(O.length);
		  var to = toAbsoluteIndex(target, len);
		  var from = toAbsoluteIndex(start, len);
		  var end = arguments.length > 2 ? arguments[2] : undefined;
		  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
		  var inc = 1;
		  if (from < to && to < from + count) {
		    inc = -1;
		    from += count - 1;
		    to += count - 1;
		  }
		  while (count-- > 0) {
		    if (from in O) O[to] = O[from];
		    else delete O[to];
		    to += inc;
		    from += inc;
		  } return O;
		};
		return _arrayCopyWithin;
	}

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = _wksExports('unscopables');
	var ArrayProto$1 = Array.prototype;
	if (ArrayProto$1[UNSCOPABLES] == undefined) require_hide()(ArrayProto$1, UNSCOPABLES, {});
	var _addToUnscopables = function (key) {
	  ArrayProto$1[UNSCOPABLES][key] = true;
	};

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export$v = _export;

	$export$v($export$v.P, 'Array', { copyWithin: require_arrayCopyWithin() });

	_addToUnscopables('copyWithin');

	var _arrayFill;
	var hasRequired_arrayFill;

	function require_arrayFill () {
		if (hasRequired_arrayFill) return _arrayFill;
		hasRequired_arrayFill = 1;
		var toObject = _toObject;
		var toAbsoluteIndex = _toAbsoluteIndex;
		var toLength = _toLength;
		_arrayFill = function fill(value /* , start = 0, end = @length */) {
		  var O = toObject(this);
		  var length = toLength(O.length);
		  var aLen = arguments.length;
		  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
		  var end = aLen > 2 ? arguments[2] : undefined;
		  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
		  while (endPos > index) O[index++] = value;
		  return O;
		};
		return _arrayFill;
	}

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export$u = _export;

	$export$u($export$u.P, 'Array', { fill: require_arrayFill() });

	_addToUnscopables('fill');

	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export$t = _export;
	var $find$1 = _arrayMethods(5);
	var KEY$1 = 'find';
	var forced$1 = true;
	// Shouldn't skip holes
	if (KEY$1 in []) Array(1)[KEY$1](function () { forced$1 = false; });
	$export$t($export$t.P + $export$t.F * forced$1, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY$1);

	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export$s = _export;
	var $find = _arrayMethods(6);
	var KEY = 'findIndex';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export$s($export$s.P + $export$s.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY);

	var global$c = _globalExports;
	var dP$5 = _objectDp;
	var DESCRIPTORS$3 = _descriptors;
	var SPECIES$1 = _wksExports('species');

	var _setSpecies = function (KEY) {
	  var C = global$c[KEY];
	  if (DESCRIPTORS$3 && C && !C[SPECIES$1]) dP$5.f(C, SPECIES$1, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};

	_setSpecies('Array');

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	var addToUnscopables = _addToUnscopables;
	var step$1 = _iterStep;
	var Iterators$2 = _iterators;
	var toIObject$2 = _toIobject;

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = require_iterDefine()(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject$2(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step$1(1);
	  }
	  if (kind == 'keys') return step$1(0, index);
	  if (kind == 'values') return step$1(0, O[index]);
	  return step$1(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators$2.Arguments = Iterators$2.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

	// 21.2.5.3 get RegExp.prototype.flags
	var anObject$m = _anObject;
	var _flags = function () {
	  var that = anObject$m(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var global$b = _globalExports;
	var inheritIfRequired = _inheritIfRequired;
	var dP$4 = _objectDp.f;
	var gOPN$2 = _objectGopn.f;
	var isRegExp$1 = _isRegexp;
	var $flags$1 = _flags;
	var $RegExp = global$b.RegExp;
	var Base = $RegExp;
	var proto$2 = $RegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g;
	// "new" creates a new object, old webkit buggy here
	var CORRECT_NEW = new $RegExp(re1) !== re1;

	if (_descriptors && (!CORRECT_NEW || _fails(function () {
	  re2[_wksExports('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp;
	    var piRE = isRegExp$1(p);
	    var fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags$1.call(p) : f)
	      , tiRE ? this : proto$2, $RegExp);
	  };
	  var proxy = function (key) {
	    key in $RegExp || dP$4($RegExp, key, {
	      configurable: true,
	      get: function () { return Base[key]; },
	      set: function (it) { Base[key] = it; }
	    });
	  };
	  for (var keys = gOPN$2(Base), i$2 = 0; keys.length > i$2;) proxy(keys[i$2++]);
	  proto$2.constructor = $RegExp;
	  $RegExp.prototype = proto$2;
	  _redefineExports(global$b, 'RegExp', $RegExp);
	}

	_setSpecies('RegExp');

	var regexpFlags = _flags;

	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;

	var patchedExec = nativeExec;

	var LAST_INDEX$1 = 'lastIndex';

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/,
	      re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1[LAST_INDEX$1] !== 0 || re2[LAST_INDEX$1] !== 0;
	})();

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX$1];

	    match = nativeExec.call(re, str);

	    if (UPDATES_LAST_INDEX_WRONG && match) {
	      re[LAST_INDEX$1] = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      // eslint-disable-next-line no-loop-func
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	var _regexpExec = patchedExec;

	var regexpExec$1 = _regexpExec;
	_export({
	  target: 'RegExp',
	  proto: true,
	  forced: regexpExec$1 !== /./.exec
	}, {
	  exec: regexpExec$1
	});

	// 21.2.5.3 get RegExp.prototype.flags()
	if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: _flags
	});

	var anObject$l = _anObject;
	var $flags = _flags;
	var DESCRIPTORS$2 = _descriptors;
	var TO_STRING = 'toString';
	var $toString = /./[TO_STRING];

	var define = function (fn) {
	  _redefineExports(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = anObject$l(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS$2 && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}

	var at = _stringAt(true);

	 // `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex
	var _advanceStringIndex = function (S, index, unicode) {
	  return index + (unicode ? at(S, index).length : 1);
	};

	var classof$2 = _classof;
	var builtinExec = RegExp.prototype.exec;

	 // `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec
	var _regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw new TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }
	  if (classof$2(R) !== 'RegExp') {
	    throw new TypeError('RegExp#exec called on incompatible receiver');
	  }
	  return builtinExec.call(R, S);
	};

	var _fixReWks;
	var hasRequired_fixReWks;

	function require_fixReWks () {
		if (hasRequired_fixReWks) return _fixReWks;
		hasRequired_fixReWks = 1;

		var redefine = _redefineExports;
		var hide = require_hide();
		var fails = _fails;
		var defined = _defined;
		var wks = _wksExports;
		var regexpExec = _regexpExec;

		var SPECIES = wks('species');

		var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
		  // #replace needs built-in support for named groups.
		  // #match works fine because it just return the exec results, even if it has
		  // a "grops" property.
		  var re = /./;
		  re.exec = function () {
		    var result = [];
		    result.groups = { a: '7' };
		    return result;
		  };
		  return ''.replace(re, '$<a>') !== '7';
		});

		var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
		  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
		  var re = /(?:)/;
		  var originalExec = re.exec;
		  re.exec = function () { return originalExec.apply(this, arguments); };
		  var result = 'ab'.split(re);
		  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
		})();

		_fixReWks = function (KEY, length, exec) {
		  var SYMBOL = wks(KEY);

		  var DELEGATES_TO_SYMBOL = !fails(function () {
		    // String methods call symbol-named RegEp methods
		    var O = {};
		    O[SYMBOL] = function () { return 7; };
		    return ''[KEY](O) != 7;
		  });

		  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
		    // Symbol-named RegExp methods call .exec
		    var execCalled = false;
		    var re = /a/;
		    re.exec = function () { execCalled = true; return null; };
		    if (KEY === 'split') {
		      // RegExp[@@split] doesn't call the regex's exec method, but first creates
		      // a new one. We need to return the patched regex when creating the new one.
		      re.constructor = {};
		      re.constructor[SPECIES] = function () { return re; };
		    }
		    re[SYMBOL]('');
		    return !execCalled;
		  }) : undefined;

		  if (
		    !DELEGATES_TO_SYMBOL ||
		    !DELEGATES_TO_EXEC ||
		    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
		    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
		  ) {
		    var nativeRegExpMethod = /./[SYMBOL];
		    var fns = exec(
		      defined,
		      SYMBOL,
		      ''[KEY],
		      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
		        if (regexp.exec === regexpExec) {
		          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
		            // The native String method already delegates to @@method (this
		            // polyfilled function), leasing to infinite recursion.
		            // We avoid it by directly calling the native @@method method.
		            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
		          }
		          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
		        }
		        return { done: false };
		      }
		    );
		    var strfn = fns[0];
		    var rxfn = fns[1];

		    redefine(String.prototype, KEY, strfn);
		    hide(RegExp.prototype, SYMBOL, length == 2
		      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
		      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
		      ? function (string, arg) { return rxfn.call(string, this, arg); }
		      // 21.2.5.6 RegExp.prototype[@@match](string)
		      // 21.2.5.9 RegExp.prototype[@@search](string)
		      : function (string) { return rxfn.call(string, this); }
		    );
		  }
		};
		return _fixReWks;
	}

	var anObject$k = _anObject;
	var toLength$9 = _toLength;
	var advanceStringIndex$2 = _advanceStringIndex;
	var regExpExec$2 = _regexpExecAbstract;

	// @@match logic
	require_fixReWks()('match', 1, function (defined, MATCH, $match, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = defined(this);
	      var fn = regexp == undefined ? undefined : regexp[MATCH];
	      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
	    function (regexp) {
	      var res = maybeCallNative($match, regexp, this);
	      if (res.done) return res.value;
	      var rx = anObject$k(regexp);
	      var S = String(this);
	      if (!rx.global) return regExpExec$2(rx, S);
	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = regExpExec$2(rx, S)) !== null) {
	        var matchStr = String(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$9(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});

	var anObject$j = _anObject;
	var toObject$2 = _toObject;
	var toLength$8 = _toLength;
	var toInteger$3 = _toInteger;
	var advanceStringIndex$1 = _advanceStringIndex;
	var regExpExec$1 = _regexpExecAbstract;
	var max = Math.max;
	var min = Math.min;
	var floor = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// @@replace logic
	require_fixReWks()('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
	  return [
	    // `String.prototype.replace` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = defined(this);
	      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return fn !== undefined
	        ? fn.call(searchValue, O, replaceValue)
	        : $replace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      var res = maybeCallNative($replace, regexp, this, replaceValue);
	      if (res.done) return res.value;

	      var rx = anObject$j(regexp);
	      var S = String(this);
	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);
	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regExpExec$1(rx, S);
	        if (result === null) break;
	        results.push(result);
	        if (!global) break;
	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$8(rx.lastIndex), fullUnicode);
	      }
	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];
	        var matched = String(result[0]);
	        var position = max(min(toInteger$3(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];

	    // https://tc39.github.io/ecma262/#sec-getsubstitution
	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	    if (namedCaptures !== undefined) {
	      namedCaptures = toObject$2(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }
	    return $replace.call(replacement, symbols, function (match, ch) {
	      var capture;
	      switch (ch.charAt(0)) {
	        case '$': return '$';
	        case '&': return matched;
	        case '`': return str.slice(0, position);
	        case "'": return str.slice(tailPos);
	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;
	        default: // \d\d?
	          var n = +ch;
	          if (n === 0) return match;
	          if (n > m) {
	            var f = floor(n / 10);
	            if (f === 0) return match;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return match;
	          }
	          capture = captures[n - 1];
	      }
	      return capture === undefined ? '' : capture;
	    });
	  }
	});

	var anObject$i = _anObject;
	var sameValue = require_sameValue();
	var regExpExec = _regexpExecAbstract;

	// @@search logic
	require_fixReWks()('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
	  return [
	    // `String.prototype.search` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.search
	    function search(regexp) {
	      var O = defined(this);
	      var fn = regexp == undefined ? undefined : regexp[SEARCH];
	      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	    },
	    // `RegExp.prototype[@@search]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
	    function (regexp) {
	      var res = maybeCallNative($search, regexp, this);
	      if (res.done) return res.value;
	      var rx = anObject$i(regexp);
	      var S = String(this);
	      var previousLastIndex = rx.lastIndex;
	      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
	      var result = regExpExec(rx, S);
	      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
	      return result === null ? -1 : result.index;
	    }
	  ];
	});

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject$h = _anObject;
	var aFunction$5 = _aFunction;
	var SPECIES = _wksExports('species');
	var _speciesConstructor = function (O, D) {
	  var C = anObject$h(O).constructor;
	  var S;
	  return C === undefined || (S = anObject$h(C)[SPECIES]) == undefined ? D : aFunction$5(S);
	};

	var isRegExp = _isRegexp;
	var anObject$g = _anObject;
	var speciesConstructor$4 = _speciesConstructor;
	var advanceStringIndex = _advanceStringIndex;
	var toLength$7 = _toLength;
	var callRegExpExec = _regexpExecAbstract;
	var regexpExec = _regexpExec;
	var fails$2 = _fails;
	var $min = Math.min;
	var $push = [].push;
	var $SPLIT = 'split';
	var LENGTH = 'length';
	var LAST_INDEX = 'lastIndex';
	var MAX_UINT32 = 0xffffffff;

	// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
	var SUPPORTS_Y = !fails$2(function () { RegExp(MAX_UINT32, 'y'); });

	// @@split logic
	require_fixReWks()('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return $split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy[LAST_INDEX];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
	    };
	  } else {
	    internalSplit = $split;
	  }

	  return [
	    // `String.prototype.split` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = defined(this);
	      var splitter = separator == undefined ? undefined : separator[SPLIT];
	      return splitter !== undefined
	        ? splitter.call(separator, O, limit)
	        : internalSplit.call(String(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (regexp, limit) {
	      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
	      if (res.done) return res.value;

	      var rx = anObject$g(regexp);
	      var S = String(this);
	      var C = speciesConstructor$4(rx, RegExp);

	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (SUPPORTS_Y ? 'y' : 'g');

	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = SUPPORTS_Y ? q : 0;
	        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
	        var e;
	        if (
	          z === null ||
	          (e = $min(toLength$7(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          A.push(S.slice(p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            A.push(z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      A.push(S.slice(p));
	      return A;
	    }
	  ];
	});

	var _anInstance = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

	var _forOf = {exports: {}};

	var ctx$5 = _ctx;
	var call = _iterCall;
	var isArrayIter$1 = _isArrayIter;
	var anObject$f = _anObject;
	var toLength$6 = _toLength;
	var getIterFn$1 = core_getIteratorMethod;
	var BREAK = {};
	var RETURN = {};
	var exports$1 = _forOf.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn$1(iterable);
	  var f = ctx$5(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter$1(iterFn)) for (length = toLength$6(iterable.length); length > index; index++) {
	    result = entries ? f(anObject$f(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports$1.BREAK = BREAK;
	exports$1.RETURN = RETURN;

	var _forOfExports = _forOf.exports;

	var ctx$4 = _ctx;
	var invoke = require_invoke();
	var html$1 = _html;
	var cel = require_domCreate();
	var global$a = _globalExports;
	var process$2 = global$a.process;
	var setTask = global$a.setImmediate;
	var clearTask = global$a.clearImmediate;
	var MessageChannel = global$a.MessageChannel;
	var Dispatch = global$a.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (_cof(process$2) == 'process') {
	    defer = function (id) {
	      process$2.nextTick(ctx$4(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx$4(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx$4(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global$a.addEventListener && typeof postMessage == 'function' && !global$a.importScripts) {
	    defer = function (id) {
	      global$a.postMessage(id + '', '*');
	    };
	    global$a.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html$1.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html$1.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx$4(run, id, 1), 0);
	    };
	  }
	}
	var _task = {
	  set: setTask,
	  clear: clearTask
	};

	var global$9 = _globalExports;
	var macrotask = _task.set;
	var Observer = global$9.MutationObserver || global$9.WebKitMutationObserver;
	var process$1 = global$9.process;
	var Promise$1 = global$9.Promise;
	var isNode$2 = _cof(process$1) == 'process';

	var _microtask = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode$2 && (parent = process$1.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode$2) {
	    notify = function () {
	      process$1.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global$9.navigator && global$9.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise$1.resolve(undefined);
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global$9, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};

	var _newPromiseCapability = {};

	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction$4 = _aFunction;

	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction$4(resolve);
	  this.reject = aFunction$4(reject);
	}

	_newPromiseCapability.f = function (C) {
	  return new PromiseCapability(C);
	};

	var _perform = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};

	var global$8 = _globalExports;
	var navigator$1 = global$8.navigator;

	var _userAgent = navigator$1 && navigator$1.userAgent || '';

	var anObject$e = _anObject;
	var isObject$b = _isObject;
	var newPromiseCapability$1 = _newPromiseCapability;

	var _promiseResolve = function (C, x) {
	  anObject$e(C);
	  if (isObject$b(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability$1.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var _redefineAll;
	var hasRequired_redefineAll;

	function require_redefineAll () {
		if (hasRequired_redefineAll) return _redefineAll;
		hasRequired_redefineAll = 1;
		var redefine = _redefineExports;
		_redefineAll = function (target, src, safe) {
		  for (var key in src) redefine(target, key, src[key], safe);
		  return target;
		};
		return _redefineAll;
	}

	var LIBRARY$1 = require_library();
	var global$7 = _globalExports;
	var ctx$3 = _ctx;
	var classof$1 = _classof;
	var $export$r = _export;
	var isObject$a = _isObject;
	var aFunction$3 = _aFunction;
	var anInstance$3 = _anInstance;
	var forOf$2 = _forOfExports;
	var speciesConstructor$3 = _speciesConstructor;
	var task = _task.set;
	var microtask = _microtask();
	var newPromiseCapabilityModule = _newPromiseCapability;
	var perform = _perform;
	var userAgent$3 = _userAgent;
	var promiseResolve$1 = _promiseResolve;
	var PROMISE = 'Promise';
	var TypeError$2 = global$7.TypeError;
	var process = global$7.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = global$7[PROMISE];
	var isNode$1 = classof$1(process) == 'process';
	var empty$1 = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[_wksExports('species')] = function (exec) {
	      exec(empty$1, empty$1);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode$1 || typeof PromiseRejectionEvent == 'function')
	      && promise.then(empty$1) instanceof FakePromise
	      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	      // we can't detect it synchronously, so just check versions
	      && v8.indexOf('6.6') !== 0
	      && userAgent$3.indexOf('Chrome/66') === -1;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject$a(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError$2('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global$7, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode$1) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global$7.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global$7.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global$7, function () {
	    var handler;
	    if (isNode$1) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global$7.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError$2("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx$3($resolve, wrapper, 1), ctx$3($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance$3(this, $Promise, PROMISE, '_h');
	    aFunction$3(executor);
	    Internal.call(this);
	    try {
	      executor(ctx$3($resolve, this, 1), ctx$3($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = require_redefineAll()($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor$3(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode$1 ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx$3($resolve, promise, 1);
	    this.reject = ctx$3($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$export$r($export$r.G + $export$r.W + $export$r.F * !USE_NATIVE, { Promise: $Promise });
	_setToStringTag($Promise, PROMISE);
	_setSpecies(PROMISE);
	Wrapper = _coreExports[PROMISE];

	// statics
	$export$r($export$r.S + $export$r.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export$r($export$r.S + $export$r.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve$1(LIBRARY$1 && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export$r($export$r.S + $export$r.F * !(USE_NATIVE && require_iterDetect()(function (iter) {
	  $Promise.all(iter)['catch'](empty$1);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf$2(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf$2(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});

	var isObject$9 = _isObject;
	var _validateCollection = function (it, TYPE) {
	  if (!isObject$9(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};

	var dP$3 = _objectDp.f;
	var create$2 = _objectCreate;
	var redefineAll$2 = require_redefineAll();
	var ctx$2 = _ctx;
	var anInstance$2 = _anInstance;
	var forOf$1 = _forOfExports;
	var $iterDefine = require_iterDefine();
	var step = _iterStep;
	var setSpecies$1 = _setSpecies;
	var DESCRIPTORS$1 = _descriptors;
	var fastKey = _metaExports.fastKey;
	var validate$6 = _validateCollection;
	var SIZE = DESCRIPTORS$1 ? '_s' : 'size';

	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};

	var _collectionStrong = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance$2(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create$2(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf$1(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll$2(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate$6(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = validate$6(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate$6(this, NAME);
	        var f = ctx$2(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate$6(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS$1) dP$3(C.prototype, 'size', {
	      get: function () {
	        return validate$6(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate$6(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies$1(NAME);
	  }
	};

	var _collection;
	var hasRequired_collection;

	function require_collection () {
		if (hasRequired_collection) return _collection;
		hasRequired_collection = 1;
		var global = _globalExports;
		var $export = _export;
		var redefine = _redefineExports;
		var redefineAll = require_redefineAll();
		var meta = _metaExports;
		var forOf = _forOfExports;
		var anInstance = _anInstance;
		var isObject = _isObject;
		var fails = _fails;
		var $iterDetect = require_iterDetect();
		var setToStringTag = _setToStringTag;
		var inheritIfRequired = _inheritIfRequired;

		_collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
		  var Base = global[NAME];
		  var C = Base;
		  var ADDER = IS_MAP ? 'set' : 'add';
		  var proto = C && C.prototype;
		  var O = {};
		  var fixMethod = function (KEY) {
		    var fn = proto[KEY];
		    redefine(proto, KEY,
		      KEY == 'delete' ? function (a) {
		        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
		      } : KEY == 'has' ? function has(a) {
		        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
		      } : KEY == 'get' ? function get(a) {
		        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
		      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
		        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
		    );
		  };
		  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
		    new C().entries().next();
		  }))) {
		    // create collection constructor
		    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
		    redefineAll(C.prototype, methods);
		    meta.NEED = true;
		  } else {
		    var instance = new C();
		    // early implementations not supports chaining
		    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
		    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
		    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
		    // most early implementations doesn't supports iterables, most modern - not close it correctly
		    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
		    // for early implementations -0 and +0 not the same
		    var BUGGY_ZERO = !IS_WEAK && fails(function () {
		      // V8 ~ Chromium 42- fails only with 5+ elements
		      var $instance = new C();
		      var index = 5;
		      while (index--) $instance[ADDER](index, index);
		      return !$instance.has(-0);
		    });
		    if (!ACCEPT_ITERABLES) {
		      C = wrapper(function (target, iterable) {
		        anInstance(target, C, NAME);
		        var that = inheritIfRequired(new Base(), target, C);
		        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
		        return that;
		      });
		      C.prototype = proto;
		      proto.constructor = C;
		    }
		    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
		      fixMethod('delete');
		      fixMethod('has');
		      IS_MAP && fixMethod('get');
		    }
		    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
		    // weak collections should not contains .clear method
		    if (IS_WEAK && proto.clear) delete proto.clear;
		  }

		  setToStringTag(C, NAME);

		  O[NAME] = C;
		  $export($export.G + $export.W + $export.F * (C != Base), O);

		  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

		  return C;
		};
		return _collection;
	}

	var strong$1 = _collectionStrong;
	var validate$5 = _validateCollection;
	var MAP = 'Map';

	// 23.1 Map Objects
	require_collection()(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong$1.getEntry(validate$5(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong$1.def(validate$5(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, strong$1, true);

	var strong = _collectionStrong;
	var validate$4 = _validateCollection;
	var SET = 'Set';

	// 23.2 Set Objects
	require_collection()(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate$4(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, strong);

	var redefineAll$1 = require_redefineAll();
	var getWeak$1 = _metaExports.getWeak;
	var anObject$d = _anObject;
	var isObject$8 = _isObject;
	var anInstance$1 = _anInstance;
	var forOf = _forOfExports;
	var createArrayMethod$1 = _arrayMethods;
	var $has = _has;
	var validate$3 = _validateCollection;
	var arrayFind$1 = createArrayMethod$1(5);
	var arrayFindIndex$1 = createArrayMethod$1(6);
	var id = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore$1 = function (that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function () {
	  this.a = [];
	};
	var findUncaughtFrozen = function (store, key) {
	  return arrayFind$1(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = arrayFindIndex$1(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	var _collectionWeak = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance$1(that, C, NAME, '_i');
	      that._t = NAME;      // collection type
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll$1(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function (key) {
	        if (!isObject$8(key)) return false;
	        var data = getWeak$1(key);
	        if (data === true) return uncaughtFrozenStore$1(validate$3(this, NAME))['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject$8(key)) return false;
	        var data = getWeak$1(key);
	        if (data === true) return uncaughtFrozenStore$1(validate$3(this, NAME)).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var data = getWeak$1(anObject$d(key), true);
	    if (data === true) uncaughtFrozenStore$1(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore$1
	};

	var global$6 = _globalExports;
	var each$1 = _arrayMethods(0);
	var redefine$1 = _redefineExports;
	var meta = _metaExports;
	var assign$2 = require_objectAssign();
	var weak$1 = _collectionWeak;
	var isObject$7 = _isObject;
	var validate$2 = _validateCollection;
	var NATIVE_WEAK_MAP = _validateCollection;
	var IS_IE11 = !global$6.ActiveXObject && 'ActiveXObject' in global$6;
	var WEAK_MAP = 'WeakMap';
	var getWeak = meta.getWeak;
	var isExtensible = Object.isExtensible;
	var uncaughtFrozenStore = weak$1.ufstore;
	var InternalMap;

	var wrapper = function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject$7(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(validate$2(this, WEAK_MAP)).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak$1.def(validate$2(this, WEAK_MAP), key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = require_collection()(WEAK_MAP, wrapper, methods, weak$1, true, true);

	// IE11 WeakMap frozen keys fix
	if (NATIVE_WEAK_MAP && IS_IE11) {
	  InternalMap = weak$1.getConstructor(wrapper, WEAK_MAP);
	  assign$2(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each$1(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype;
	    var method = proto[key];
	    redefine$1(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject$7(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

	var weak = _collectionWeak;
	var validate$1 = _validateCollection;
	var WEAK_SET = 'WeakSet';

	// 23.4 WeakSet Objects
	require_collection()(WEAK_SET, function (get) {
	  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(validate$1(this, WEAK_SET), value, true);
	  }
	}, weak, false, true);

	var global$5 = _globalExports;
	var hide$2 = require_hide();
	var uid$1 = _uid;
	var TYPED = uid$1('typed_array');
	var VIEW$2 = uid$1('view');
	var ABV = !!(global$5.ArrayBuffer && global$5.DataView);
	var CONSTR = ABV;
	var i$1 = 0;
	var l = 9;
	var Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while (i$1 < l) {
	  if (Typed = global$5[TypedArrayConstructors[i$1++]]) {
	    hide$2(Typed.prototype, TYPED, true);
	    hide$2(Typed.prototype, VIEW$2, true);
	  } else CONSTR = false;
	}

	var _typed = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW$2
	};

	var _typedBuffer = {};

	// https://tc39.github.io/ecma262/#sec-toindex
	var toInteger$2 = _toInteger;
	var toLength$5 = _toLength;
	var _toIndex = function (it) {
	  if (it === undefined) return 0;
	  var number = toInteger$2(it);
	  var length = toLength$5(number);
	  if (number !== length) throw RangeError('Wrong length!');
	  return length;
	};

	(function (exports) {
		var global = _globalExports;
		var DESCRIPTORS = _descriptors;
		var LIBRARY = require_library();
		var $typed = _typed;
		var hide = require_hide();
		var redefineAll = require_redefineAll();
		var fails = _fails;
		var anInstance = _anInstance;
		var toInteger = _toInteger;
		var toLength = _toLength;
		var toIndex = _toIndex;
		var gOPN = _objectGopn.f;
		var dP = _objectDp.f;
		var arrayFill = require_arrayFill();
		var setToStringTag = _setToStringTag;
		var ARRAY_BUFFER = 'ArrayBuffer';
		var DATA_VIEW = 'DataView';
		var PROTOTYPE = 'prototype';
		var WRONG_LENGTH = 'Wrong length!';
		var WRONG_INDEX = 'Wrong index!';
		var $ArrayBuffer = global[ARRAY_BUFFER];
		var $DataView = global[DATA_VIEW];
		var Math = global.Math;
		var RangeError = global.RangeError;
		// eslint-disable-next-line no-shadow-restricted-names
		var Infinity = global.Infinity;
		var BaseBuffer = $ArrayBuffer;
		var abs = Math.abs;
		var pow = Math.pow;
		var floor = Math.floor;
		var log = Math.log;
		var LN2 = Math.LN2;
		var BUFFER = 'buffer';
		var BYTE_LENGTH = 'byteLength';
		var BYTE_OFFSET = 'byteOffset';
		var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
		var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
		var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

		// IEEE754 conversions based on https://github.com/feross/ieee754
		function packIEEE754(value, mLen, nBytes) {
		  var buffer = new Array(nBytes);
		  var eLen = nBytes * 8 - mLen - 1;
		  var eMax = (1 << eLen) - 1;
		  var eBias = eMax >> 1;
		  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
		  var i = 0;
		  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
		  var e, m, c;
		  value = abs(value);
		  // eslint-disable-next-line no-self-compare
		  if (value != value || value === Infinity) {
		    // eslint-disable-next-line no-self-compare
		    m = value != value ? 1 : 0;
		    e = eMax;
		  } else {
		    e = floor(log(value) / LN2);
		    if (value * (c = pow(2, -e)) < 1) {
		      e--;
		      c *= 2;
		    }
		    if (e + eBias >= 1) {
		      value += rt / c;
		    } else {
		      value += rt * pow(2, 1 - eBias);
		    }
		    if (value * c >= 2) {
		      e++;
		      c /= 2;
		    }
		    if (e + eBias >= eMax) {
		      m = 0;
		      e = eMax;
		    } else if (e + eBias >= 1) {
		      m = (value * c - 1) * pow(2, mLen);
		      e = e + eBias;
		    } else {
		      m = value * pow(2, eBias - 1) * pow(2, mLen);
		      e = 0;
		    }
		  }
		  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
		  e = e << mLen | m;
		  eLen += mLen;
		  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
		  buffer[--i] |= s * 128;
		  return buffer;
		}
		function unpackIEEE754(buffer, mLen, nBytes) {
		  var eLen = nBytes * 8 - mLen - 1;
		  var eMax = (1 << eLen) - 1;
		  var eBias = eMax >> 1;
		  var nBits = eLen - 7;
		  var i = nBytes - 1;
		  var s = buffer[i--];
		  var e = s & 127;
		  var m;
		  s >>= 7;
		  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
		  m = e & (1 << -nBits) - 1;
		  e >>= -nBits;
		  nBits += mLen;
		  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
		  if (e === 0) {
		    e = 1 - eBias;
		  } else if (e === eMax) {
		    return m ? NaN : s ? -Infinity : Infinity;
		  } else {
		    m = m + pow(2, mLen);
		    e = e - eBias;
		  } return (s ? -1 : 1) * m * pow(2, e - mLen);
		}

		function unpackI32(bytes) {
		  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
		}
		function packI8(it) {
		  return [it & 0xff];
		}
		function packI16(it) {
		  return [it & 0xff, it >> 8 & 0xff];
		}
		function packI32(it) {
		  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
		}
		function packF64(it) {
		  return packIEEE754(it, 52, 8);
		}
		function packF32(it) {
		  return packIEEE754(it, 23, 4);
		}

		function addGetter(C, key, internal) {
		  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
		}

		function get(view, bytes, index, isLittleEndian) {
		  var numIndex = +index;
		  var intIndex = toIndex(numIndex);
		  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
		  var store = view[$BUFFER]._b;
		  var start = intIndex + view[$OFFSET];
		  var pack = store.slice(start, start + bytes);
		  return isLittleEndian ? pack : pack.reverse();
		}
		function set(view, bytes, index, conversion, value, isLittleEndian) {
		  var numIndex = +index;
		  var intIndex = toIndex(numIndex);
		  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
		  var store = view[$BUFFER]._b;
		  var start = intIndex + view[$OFFSET];
		  var pack = conversion(+value);
		  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
		}

		if (!$typed.ABV) {
		  $ArrayBuffer = function ArrayBuffer(length) {
		    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
		    var byteLength = toIndex(length);
		    this._b = arrayFill.call(new Array(byteLength), 0);
		    this[$LENGTH] = byteLength;
		  };

		  $DataView = function DataView(buffer, byteOffset, byteLength) {
		    anInstance(this, $DataView, DATA_VIEW);
		    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
		    var bufferLength = buffer[$LENGTH];
		    var offset = toInteger(byteOffset);
		    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
		    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
		    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
		    this[$BUFFER] = buffer;
		    this[$OFFSET] = offset;
		    this[$LENGTH] = byteLength;
		  };

		  if (DESCRIPTORS) {
		    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
		    addGetter($DataView, BUFFER, '_b');
		    addGetter($DataView, BYTE_LENGTH, '_l');
		    addGetter($DataView, BYTE_OFFSET, '_o');
		  }

		  redefineAll($DataView[PROTOTYPE], {
		    getInt8: function getInt8(byteOffset) {
		      return get(this, 1, byteOffset)[0] << 24 >> 24;
		    },
		    getUint8: function getUint8(byteOffset) {
		      return get(this, 1, byteOffset)[0];
		    },
		    getInt16: function getInt16(byteOffset /* , littleEndian */) {
		      var bytes = get(this, 2, byteOffset, arguments[1]);
		      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
		    },
		    getUint16: function getUint16(byteOffset /* , littleEndian */) {
		      var bytes = get(this, 2, byteOffset, arguments[1]);
		      return bytes[1] << 8 | bytes[0];
		    },
		    getInt32: function getInt32(byteOffset /* , littleEndian */) {
		      return unpackI32(get(this, 4, byteOffset, arguments[1]));
		    },
		    getUint32: function getUint32(byteOffset /* , littleEndian */) {
		      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
		    },
		    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
		      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
		    },
		    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
		      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
		    },
		    setInt8: function setInt8(byteOffset, value) {
		      set(this, 1, byteOffset, packI8, value);
		    },
		    setUint8: function setUint8(byteOffset, value) {
		      set(this, 1, byteOffset, packI8, value);
		    },
		    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
		      set(this, 2, byteOffset, packI16, value, arguments[2]);
		    },
		    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
		      set(this, 2, byteOffset, packI16, value, arguments[2]);
		    },
		    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
		      set(this, 4, byteOffset, packI32, value, arguments[2]);
		    },
		    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
		      set(this, 4, byteOffset, packI32, value, arguments[2]);
		    },
		    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
		      set(this, 4, byteOffset, packF32, value, arguments[2]);
		    },
		    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
		      set(this, 8, byteOffset, packF64, value, arguments[2]);
		    }
		  });
		} else {
		  if (!fails(function () {
		    $ArrayBuffer(1);
		  }) || !fails(function () {
		    new $ArrayBuffer(-1); // eslint-disable-line no-new
		  }) || fails(function () {
		    new $ArrayBuffer(); // eslint-disable-line no-new
		    new $ArrayBuffer(1.5); // eslint-disable-line no-new
		    new $ArrayBuffer(NaN); // eslint-disable-line no-new
		    return $ArrayBuffer.name != ARRAY_BUFFER;
		  })) {
		    $ArrayBuffer = function ArrayBuffer(length) {
		      anInstance(this, $ArrayBuffer);
		      return new BaseBuffer(toIndex(length));
		    };
		    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
		    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
		      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
		    }
		    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
		  }
		  // iOS Safari 7.x bug
		  var view = new $DataView(new $ArrayBuffer(2));
		  var $setInt8 = $DataView[PROTOTYPE].setInt8;
		  view.setInt8(0, 2147483648);
		  view.setInt8(1, 2147483649);
		  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
		    setInt8: function setInt8(byteOffset, value) {
		      $setInt8.call(this, byteOffset, value << 24 >> 24);
		    },
		    setUint8: function setUint8(byteOffset, value) {
		      $setInt8.call(this, byteOffset, value << 24 >> 24);
		    }
		  }, true);
		}
		setToStringTag($ArrayBuffer, ARRAY_BUFFER);
		setToStringTag($DataView, DATA_VIEW);
		hide($DataView[PROTOTYPE], $typed.VIEW, true);
		exports[ARRAY_BUFFER] = $ArrayBuffer;
		exports[DATA_VIEW] = $DataView; 
	} (_typedBuffer));

	var $export$q = _export;
	var $typed$1 = _typed;
	var buffer = _typedBuffer;
	var anObject$c = _anObject;
	var toAbsoluteIndex$1 = _toAbsoluteIndex;
	var toLength$4 = _toLength;
	var isObject$6 = _isObject;
	var ArrayBuffer = _globalExports.ArrayBuffer;
	var speciesConstructor$2 = _speciesConstructor;
	var $ArrayBuffer$1 = buffer.ArrayBuffer;
	var $DataView$1 = buffer.DataView;
	var $isView = $typed$1.ABV && ArrayBuffer.isView;
	var $slice$1 = $ArrayBuffer$1.prototype.slice;
	var VIEW$1 = $typed$1.VIEW;
	var ARRAY_BUFFER$1 = 'ArrayBuffer';

	$export$q($export$q.G + $export$q.W + $export$q.F * (ArrayBuffer !== $ArrayBuffer$1), { ArrayBuffer: $ArrayBuffer$1 });

	$export$q($export$q.S + $export$q.F * !$typed$1.CONSTR, ARRAY_BUFFER$1, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject$6(it) && VIEW$1 in it;
	  }
	});

	$export$q($export$q.P + $export$q.U + $export$q.F * _fails(function () {
	  return !new $ArrayBuffer$1(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER$1, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice$1 !== undefined && end === undefined) return $slice$1.call(anObject$c(this), start); // FF fix
	    var len = anObject$c(this).byteLength;
	    var first = toAbsoluteIndex$1(start, len);
	    var fin = toAbsoluteIndex$1(end === undefined ? len : end, len);
	    var result = new (speciesConstructor$2(this, $ArrayBuffer$1))(toLength$4(fin - first));
	    var viewS = new $DataView$1(this);
	    var viewT = new $DataView$1(result);
	    var index = 0;
	    while (first < fin) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	_setSpecies(ARRAY_BUFFER$1);

	var $export$p = _export;
	$export$p($export$p.G + $export$p.W + $export$p.F * !_typed.ABV, {
	  DataView: _typedBuffer.DataView
	});

	var _typedArray = {exports: {}};

	if (_descriptors) {
	  var LIBRARY = require_library();
	  var global$4 = _globalExports;
	  var fails$1 = _fails;
	  var $export$o = _export;
	  var $typed = _typed;
	  var $buffer = _typedBuffer;
	  var ctx$1 = _ctx;
	  var anInstance = _anInstance;
	  var propertyDesc = _propertyDesc;
	  var hide$1 = require_hide();
	  var redefineAll = require_redefineAll();
	  var toInteger$1 = _toInteger;
	  var toLength$3 = _toLength;
	  var toIndex = _toIndex;
	  var toAbsoluteIndex = _toAbsoluteIndex;
	  var toPrimitive$1 = _toPrimitive;
	  var has$2 = _has;
	  var classof = _classof;
	  var isObject$5 = _isObject;
	  var toObject$1 = _toObject;
	  var isArrayIter = _isArrayIter;
	  var create$1 = _objectCreate;
	  var getPrototypeOf$2 = _objectGpo;
	  var gOPN$1 = _objectGopn.f;
	  var getIterFn = core_getIteratorMethod;
	  var uid = _uid;
	  var wks$1 = _wksExports;
	  var createArrayMethod = _arrayMethods;
	  var createArrayIncludes = _arrayIncludes;
	  var speciesConstructor$1 = _speciesConstructor;
	  var ArrayIterators = es6_array_iterator;
	  var Iterators$1 = _iterators;
	  var $iterDetect = require_iterDetect();
	  var setSpecies = _setSpecies;
	  var arrayFill = require_arrayFill();
	  var arrayCopyWithin = require_arrayCopyWithin();
	  var $DP = _objectDp;
	  var $GOPD = _objectGopd;
	  var dP$2 = $DP.f;
	  var gOPD$6 = $GOPD.f;
	  var RangeError$1 = global$4.RangeError;
	  var TypeError$1 = global$4.TypeError;
	  var Uint8Array = global$4.Uint8Array;
	  var ARRAY_BUFFER = 'ArrayBuffer';
	  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
	  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	  var PROTOTYPE = 'prototype';
	  var ArrayProto = Array[PROTOTYPE];
	  var $ArrayBuffer = $buffer.ArrayBuffer;
	  var $DataView = $buffer.DataView;
	  var arrayForEach = createArrayMethod(0);
	  var arrayFilter = createArrayMethod(2);
	  var arraySome = createArrayMethod(3);
	  var arrayEvery = createArrayMethod(4);
	  var arrayFind = createArrayMethod(5);
	  var arrayFindIndex = createArrayMethod(6);
	  var arrayIncludes = createArrayIncludes(true);
	  var arrayIndexOf = createArrayIncludes(false);
	  var arrayValues = ArrayIterators.values;
	  var arrayKeys = ArrayIterators.keys;
	  var arrayEntries = ArrayIterators.entries;
	  var arrayLastIndexOf = ArrayProto.lastIndexOf;
	  var arrayReduce = ArrayProto.reduce;
	  var arrayReduceRight = ArrayProto.reduceRight;
	  var arrayJoin = ArrayProto.join;
	  var arraySort = ArrayProto.sort;
	  var arraySlice = ArrayProto.slice;
	  var arrayToString = ArrayProto.toString;
	  var arrayToLocaleString = ArrayProto.toLocaleString;
	  var ITERATOR$1 = wks$1('iterator');
	  var TAG = wks$1('toStringTag');
	  var TYPED_CONSTRUCTOR = uid('typed_constructor');
	  var DEF_CONSTRUCTOR = uid('def_constructor');
	  var ALL_CONSTRUCTORS = $typed.CONSTR;
	  var TYPED_ARRAY = $typed.TYPED;
	  var VIEW = $typed.VIEW;
	  var WRONG_LENGTH = 'Wrong length!';

	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor$1(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails$1(function () {
	    // eslint-disable-next-line no-undef
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails$1(function () {
	    new Uint8Array(1).set({});
	  });

	  var toOffset = function (it, BYTES) {
	    var offset = toInteger$1(it);
	    if (offset < 0 || offset % BYTES) throw RangeError$1('Wrong offset!');
	    return offset;
	  };

	  var validate = function (it) {
	    if (isObject$5(it) && TYPED_ARRAY in it) return it;
	    throw TypeError$1(it + ' is not a typed array!');
	  };

	  var allocate = function (C, length) {
	    if (!(isObject$5(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError$1('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function (O, list) {
	    return fromList(speciesConstructor$1(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function (C, list) {
	    var index = 0;
	    var length = list.length;
	    var result = allocate(C, length);
	    while (length > index) result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function (it, key, internal) {
	    dP$2(it, key, { get: function () { return this._d[internal]; } });
	  };

	  var $from = function from(source /* , mapfn, thisArg */) {
	    var O = toObject$1(source);
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var iterFn = getIterFn(O);
	    var i, length, values, result, step, iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      } O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx$1(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength$3(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/* ...items */) {
	    var index = 0;
	    var length = arguments.length;
	    var result = allocate(this, length);
	    while (length > index) result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails$1(function () { arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto$1 = {
	    copyWithin: function copyWithin(target, start /* , end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /* , thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /* , thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /* , thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /* , thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /* , thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /* , fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /* , fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) { // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /* , thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this;
	      var length = validate(that).length;
	      var middle = Math.floor(length / 2);
	      var index = 0;
	      var value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      } return that;
	    },
	    some: function some(callbackfn /* , thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this);
	      var length = O.length;
	      var $begin = toAbsoluteIndex(begin, length);
	      return new (speciesConstructor$1(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength$3((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /* , offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1);
	    var length = this.length;
	    var src = toObject$1(arrayLike);
	    var len = toLength$3(src.length);
	    var index = 0;
	    if (len + offset > length) throw RangeError$1(WRONG_LENGTH);
	    while (index < len) this[offset + index] = src[index++];
	  };

	  var $iterators$1 = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function (target, key) {
	    return isObject$5(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive$1(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD$6(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive$1(key, true))
	      && isObject$5(desc)
	      && has$2(desc, 'value')
	      && !has$2(desc, 'get')
	      && !has$2(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has$2(desc, 'writable') || desc.writable)
	      && (!has$2(desc, 'enumerable') || desc.enumerable)
	    ) {
	      target[key] = desc.value;
	      return target;
	    } return dP$2(target, key, desc);
	  };

	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }

	  $export$o($export$o.S + $export$o.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });

	  if (fails$1(function () { arrayToString.call({}); })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto$1);
	  redefineAll($TypedArrayPrototype$, $iterators$1);
	  hide$1($TypedArrayPrototype$, ITERATOR$1, $iterators$1.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function () { /* noop */ },
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP$2($TypedArrayPrototype$, TAG, {
	    get: function () { return this[TYPED_ARRAY]; }
	  });

	  // eslint-disable-next-line max-statements
	  _typedArray.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + KEY;
	    var SETTER = 'set' + KEY;
	    var TypedArray = global$4[NAME];
	    var Base = TypedArray || {};
	    var TAC = TypedArray && getPrototypeOf$2(TypedArray);
	    var FORCED = !TypedArray || !$typed.ABV;
	    var O = {};
	    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function (that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function (that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function (that, index) {
	      dP$2(that, index, {
	        get: function () {
	          return getter(this, index);
	        },
	        set: function (value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0;
	        var offset = 0;
	        var buffer, byteLength, length, klass;
	        if (!isObject$5(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError$1(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError$1(WRONG_LENGTH);
	          } else {
	            byteLength = toLength$3($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError$1(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide$1(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create$1($TypedArrayPrototype$);
	      hide$1(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!fails$1(function () {
	      TypedArray(1);
	    }) || !fails$1(function () {
	      new TypedArray(-1); // eslint-disable-line no-new
	    }) || !$iterDetect(function (iter) {
	      new TypedArray(); // eslint-disable-line no-new
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(1.5); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject$5(data)) return new Base(toIndex(data));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN$1(Base).concat(gOPN$1(TAC)) : gOPN$1(Base), function (key) {
	        if (!(key in TypedArray)) hide$1(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR$1];
	    var CORRECT_ITER_NAME = !!$nativeIterator
	      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
	    var $iterator = $iterators$1.values;
	    hide$1(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide$1(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide$1(TypedArrayPrototype, VIEW, true);
	    hide$1(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP$2(TypedArrayPrototype, TAG, {
	        get: function () { return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export$o($export$o.G + $export$o.W + $export$o.F * (TypedArray != Base), O);

	    $export$o($export$o.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES
	    });

	    $export$o($export$o.S + $export$o.F * fails$1(function () { Base.of.call(TypedArray, 1); }), NAME, {
	      from: $from,
	      of: $of
	    });

	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide$1(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export$o($export$o.P, NAME, proto$1);

	    setSpecies(NAME);

	    $export$o($export$o.P + $export$o.F * FORCED_SET, NAME, { set: $set });

	    $export$o($export$o.P + $export$o.F * !CORRECT_ITER_NAME, NAME, $iterators$1);

	    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

	    $export$o($export$o.P + $export$o.F * fails$1(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });

	    $export$o($export$o.P + $export$o.F * (fails$1(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails$1(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });

	    Iterators$1[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide$1(TypedArrayPrototype, ITERATOR$1, $iterator);
	  };
	} else _typedArray.exports = function () { /* empty */ };

	var _typedArrayExports = _typedArray.exports;

	_typedArrayExports('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArrayExports('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArrayExports('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);

	_typedArrayExports('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArrayExports('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArrayExports('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArrayExports('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArrayExports('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArrayExports('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export$n = _export;
	var aFunction$2 = _aFunction;
	var anObject$b = _anObject;
	var rApply = (_globalExports.Reflect || {}).apply;
	var fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export$n($export$n.S + $export$n.F * !_fails(function () {
	  rApply(function () { /* empty */ });
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction$2(target);
	    var L = anObject$b(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export$m = _export;
	var create = _objectCreate;
	var aFunction$1 = _aFunction;
	var anObject$a = _anObject;
	var isObject$4 = _isObject;
	var fails = _fails;
	var bind = require_bind();
	var rConstruct = (_globalExports.Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() { /* empty */ }
	  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () { /* empty */ });
	});

	$export$m($export$m.S + $export$m.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    aFunction$1(Target);
	    anObject$a(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction$1(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = create(isObject$4(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject$4(result) ? result : instance;
	  }
	});

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP$1 = _objectDp;
	var $export$l = _export;
	var anObject$9 = _anObject;
	var toPrimitive = _toPrimitive;

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export$l($export$l.S + $export$l.F * _fails(function () {
	  // eslint-disable-next-line no-undef
	  Reflect.defineProperty(dP$1.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject$9(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject$9(attributes);
	    try {
	      dP$1.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export$k = _export;
	var gOPD$5 = _objectGopd.f;
	var anObject$8 = _anObject;

	$export$k($export$k.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD$5(anObject$8(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

	// 26.1.5 Reflect.enumerate(target)
	var $export$j = _export;
	var anObject$7 = _anObject;
	var Enumerate = function (iterated) {
	  this._t = anObject$7(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = [];      // keys
	  var key;
	  for (key in iterated) keys.push(key);
	};
	require_iterCreate()(Enumerate, 'Object', function () {
	  var that = this;
	  var keys = that._k;
	  var key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});

	$export$j($export$j.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD$4 = _objectGopd;
	var getPrototypeOf$1 = _objectGpo;
	var has$1 = _has;
	var $export$i = _export;
	var isObject$3 = _isObject;
	var anObject$6 = _anObject;

	function get(target, propertyKey /* , receiver */) {
	  var receiver = arguments.length < 3 ? target : arguments[2];
	  var desc, proto;
	  if (anObject$6(target) === receiver) return target[propertyKey];
	  if (desc = gOPD$4.f(target, propertyKey)) return has$1(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if (isObject$3(proto = getPrototypeOf$1(target))) return get(proto, propertyKey, receiver);
	}

	$export$i($export$i.S, 'Reflect', { get: get });

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD$3 = _objectGopd;
	var $export$h = _export;
	var anObject$5 = _anObject;

	$export$h($export$h.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD$3.f(anObject$5(target), propertyKey);
	  }
	});

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export$g = _export;
	var getProto = _objectGpo;
	var anObject$4 = _anObject;

	$export$g($export$g.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject$4(target));
	  }
	});

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export$f = _export;

	$export$f($export$f.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});

	// 26.1.10 Reflect.isExtensible(target)
	var $export$e = _export;
	var anObject$3 = _anObject;
	var $isExtensible = Object.isExtensible;

	$export$e($export$e.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject$3(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

	// all object keys, includes non-enumerable and symbols
	var gOPN = _objectGopn;
	var gOPS = _objectGops;
	var anObject$2 = _anObject;
	var Reflect$1 = _globalExports.Reflect;
	var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject$2(it));
	  var getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

	// 26.1.11 Reflect.ownKeys(target)
	var $export$d = _export;

	$export$d($export$d.S, 'Reflect', { ownKeys: _ownKeys });

	// 26.1.12 Reflect.preventExtensions(target)
	var $export$c = _export;
	var anObject$1 = _anObject;
	var $preventExtensions = Object.preventExtensions;

	$export$c($export$c.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject$1(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = _objectDp;
	var gOPD$2 = _objectGopd;
	var getPrototypeOf = _objectGpo;
	var has = _has;
	var $export$b = _export;
	var createDesc = _propertyDesc;
	var anObject = _anObject;
	var isObject$2 = _isObject;

	function set(target, propertyKey, V /* , receiver */) {
	  var receiver = arguments.length < 4 ? target : arguments[3];
	  var ownDesc = gOPD$2.f(anObject(target), propertyKey);
	  var existingDescriptor, proto;
	  if (!ownDesc) {
	    if (isObject$2(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject$2(receiver)) return false;
	    if (existingDescriptor = gOPD$2.f(receiver, propertyKey)) {
	      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
	      existingDescriptor.value = V;
	      dP.f(receiver, propertyKey, existingDescriptor);
	    } else dP.f(receiver, propertyKey, createDesc(0, V));
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export$b($export$b.S, 'Reflect', { set: set });

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export$a = _export;
	var setProto = require_setProto();

	if (setProto) $export$a($export$a.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

	// https://github.com/tc39/Array.prototype.includes
	var $export$9 = _export;
	var $includes = _arrayIncludes(true);

	$export$9($export$9.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	_addToUnscopables('includes');

	_coreExports.Array.includes;

	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
	var isArray$2 = _isArray;
	var isObject$1 = _isObject;
	var toLength$2 = _toLength;
	var ctx = _ctx;
	var IS_CONCAT_SPREADABLE = _wksExports('isConcatSpreadable');

	function flattenIntoArray$1(target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
	  var element, spreadable;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      spreadable = false;
	      if (isObject$1(element)) {
	        spreadable = element[IS_CONCAT_SPREADABLE];
	        spreadable = spreadable !== undefined ? !!spreadable : isArray$2(element);
	      }

	      if (spreadable && depth > 0) {
	        targetIndex = flattenIntoArray$1(target, original, element, toLength$2(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	}

	var _flattenIntoArray = flattenIntoArray$1;

	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
	var $export$8 = _export;
	var flattenIntoArray = _flattenIntoArray;
	var toObject = _toObject;
	var toLength$1 = _toLength;
	var aFunction = _aFunction;
	var arraySpeciesCreate = _arraySpeciesCreate;

	$export$8($export$8.P, 'Array', {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = toObject(this);
	    var sourceLen, A;
	    aFunction(callbackfn);
	    sourceLen = toLength$1(O.length);
	    A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
	    return A;
	  }
	});

	_addToUnscopables('flatMap');

	_coreExports.Array.flatMap;

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = _toLength;
	var repeat = _stringRepeat;
	var defined = _defined;

	var _stringPad = function (that, maxLength, fillString, left) {
	  var S = String(defined(that));
	  var stringLength = S.length;
	  var fillStr = fillString === undefined ? ' ' : String(fillString);
	  var intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength;
	  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

	// https://github.com/tc39/proposal-string-pad-start-end
	var $export$7 = _export;
	var $pad$1 = _stringPad;
	var userAgent$2 = _userAgent;

	// https://github.com/zloirock/core-js/issues/280
	var WEBKIT_BUG$1 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent$2);

	$export$7($export$7.P + $export$7.F * WEBKIT_BUG$1, 'String', {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return $pad$1(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

	_coreExports.String.padStart;

	// https://github.com/tc39/proposal-string-pad-start-end
	var $export$6 = _export;
	var $pad = _stringPad;
	var userAgent$1 = _userAgent;

	// https://github.com/zloirock/core-js/issues/280
	var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent$1);

	$export$6($export$6.P + $export$6.F * WEBKIT_BUG, 'String', {
	  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

	_coreExports.String.padEnd;

	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	_stringTrim('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');

	_coreExports.String.trimLeft;

	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	_stringTrim('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

	_coreExports.String.trimRight;

	_wksDefine('asyncIterator');

	_wksExt.f('asyncIterator');

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export$5 = _export;
	var ownKeys = _ownKeys;
	var toIObject$1 = _toIobject;
	var gOPD$1 = _objectGopd;
	var createProperty = _createProperty;

	$export$5($export$5.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject$1(object);
	    var getDesc = gOPD$1.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var i = 0;
	    var key, desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) createProperty(result, key, desc);
	    }
	    return result;
	  }
	});

	_coreExports.Object.getOwnPropertyDescriptors;

	var DESCRIPTORS = _descriptors;
	var getKeys$1 = _objectKeys;
	var toIObject = _toIobject;
	var isEnum = require_objectPie().f;
	var _objectToArray = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys$1(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!DESCRIPTORS || isEnum.call(O, key)) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	// https://github.com/tc39/proposal-object-values-entries
	var $export$4 = _export;
	var $values = _objectToArray(false);

	$export$4($export$4.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});

	_coreExports.Object.values;

	// https://github.com/tc39/proposal-object-values-entries
	var $export$3 = _export;
	var $entries = _objectToArray(true);

	$export$3($export$3.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});

	_coreExports.Object.entries;

	var $export$2 = _export;
	var core = _coreExports;
	var global$3 = _globalExports;
	var speciesConstructor = _speciesConstructor;
	var promiseResolve = _promiseResolve;

	$export$2($export$2.P + $export$2.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global$3.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });

	_coreExports.Promise['finally'];

	// ie9- setTimeout & setInterval additional parameters fix
	var global$2 = _globalExports;
	var $export$1 = _export;
	var userAgent = _userAgent;
	var slice = [].slice;
	var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
	var wrap = function (set) {
	  return function (fn, time /* , ...args */) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice.call(arguments, 2) : false;
	    return set(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
	    } : fn, time);
	  };
	};
	$export$1($export$1.G + $export$1.B + $export$1.F * MSIE, {
	  setTimeout: wrap(global$2.setTimeout),
	  setInterval: wrap(global$2.setInterval)
	});

	var $export = _export;
	var $task = _task;
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});

	var $iterators = es6_array_iterator;
	var getKeys = _objectKeys;
	var redefine = _redefineExports;
	var global$1 = _globalExports;
	var hide = require_hide();
	var Iterators = _iterators;
	var wks = _wksExports;
	var ITERATOR = wks('iterator');
	var TO_STRING_TAG = wks('toStringTag');
	var ArrayValues = Iterators.Array;

	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};

	for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = global$1[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
	  }
	}

	var runtime = {exports: {}};

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (module) {
		var runtime = (function (exports) {

		  var Op = Object.prototype;
		  var hasOwn = Op.hasOwnProperty;
		  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
		  var undefined$1; // More compressible than void 0.
		  var $Symbol = typeof Symbol === "function" ? Symbol : {};
		  var iteratorSymbol = $Symbol.iterator || "@@iterator";
		  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
		  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

		  function define(obj, key, value) {
		    Object.defineProperty(obj, key, {
		      value: value,
		      enumerable: true,
		      configurable: true,
		      writable: true
		    });
		    return obj[key];
		  }
		  try {
		    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
		    define({}, "");
		  } catch (err) {
		    define = function(obj, key, value) {
		      return obj[key] = value;
		    };
		  }

		  function wrap(innerFn, outerFn, self, tryLocsList) {
		    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
		    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
		    var generator = Object.create(protoGenerator.prototype);
		    var context = new Context(tryLocsList || []);

		    // The ._invoke method unifies the implementations of the .next,
		    // .throw, and .return methods.
		    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

		    return generator;
		  }
		  exports.wrap = wrap;

		  // Try/catch helper to minimize deoptimizations. Returns a completion
		  // record like context.tryEntries[i].completion. This interface could
		  // have been (and was previously) designed to take a closure to be
		  // invoked without arguments, but in all the cases we care about we
		  // already have an existing method we want to call, so there's no need
		  // to create a new function object. We can even get away with assuming
		  // the method takes exactly one argument, since that happens to be true
		  // in every case, so we don't have to touch the arguments object. The
		  // only additional allocation required is the completion record, which
		  // has a stable shape and so hopefully should be cheap to allocate.
		  function tryCatch(fn, obj, arg) {
		    try {
		      return { type: "normal", arg: fn.call(obj, arg) };
		    } catch (err) {
		      return { type: "throw", arg: err };
		    }
		  }

		  var GenStateSuspendedStart = "suspendedStart";
		  var GenStateSuspendedYield = "suspendedYield";
		  var GenStateExecuting = "executing";
		  var GenStateCompleted = "completed";

		  // Returning this object from the innerFn has the same effect as
		  // breaking out of the dispatch switch statement.
		  var ContinueSentinel = {};

		  // Dummy constructor functions that we use as the .constructor and
		  // .constructor.prototype properties for functions that return Generator
		  // objects. For full spec compliance, you may wish to configure your
		  // minifier not to mangle the names of these two functions.
		  function Generator() {}
		  function GeneratorFunction() {}
		  function GeneratorFunctionPrototype() {}

		  // This is a polyfill for %IteratorPrototype% for environments that
		  // don't natively support it.
		  var IteratorPrototype = {};
		  define(IteratorPrototype, iteratorSymbol, function () {
		    return this;
		  });

		  var getProto = Object.getPrototypeOf;
		  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
		  if (NativeIteratorPrototype &&
		      NativeIteratorPrototype !== Op &&
		      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
		    // This environment has a native %IteratorPrototype%; use it instead
		    // of the polyfill.
		    IteratorPrototype = NativeIteratorPrototype;
		  }

		  var Gp = GeneratorFunctionPrototype.prototype =
		    Generator.prototype = Object.create(IteratorPrototype);
		  GeneratorFunction.prototype = GeneratorFunctionPrototype;
		  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
		  defineProperty(
		    GeneratorFunctionPrototype,
		    "constructor",
		    { value: GeneratorFunction, configurable: true }
		  );
		  GeneratorFunction.displayName = define(
		    GeneratorFunctionPrototype,
		    toStringTagSymbol,
		    "GeneratorFunction"
		  );

		  // Helper for defining the .next, .throw, and .return methods of the
		  // Iterator interface in terms of a single ._invoke method.
		  function defineIteratorMethods(prototype) {
		    ["next", "throw", "return"].forEach(function(method) {
		      define(prototype, method, function(arg) {
		        return this._invoke(method, arg);
		      });
		    });
		  }

		  exports.isGeneratorFunction = function(genFun) {
		    var ctor = typeof genFun === "function" && genFun.constructor;
		    return ctor
		      ? ctor === GeneratorFunction ||
		        // For the native GeneratorFunction constructor, the best we can
		        // do is to check its .name property.
		        (ctor.displayName || ctor.name) === "GeneratorFunction"
		      : false;
		  };

		  exports.mark = function(genFun) {
		    if (Object.setPrototypeOf) {
		      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
		    } else {
		      genFun.__proto__ = GeneratorFunctionPrototype;
		      define(genFun, toStringTagSymbol, "GeneratorFunction");
		    }
		    genFun.prototype = Object.create(Gp);
		    return genFun;
		  };

		  // Within the body of any async function, `await x` is transformed to
		  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
		  // `hasOwn.call(value, "__await")` to determine if the yielded value is
		  // meant to be awaited.
		  exports.awrap = function(arg) {
		    return { __await: arg };
		  };

		  function AsyncIterator(generator, PromiseImpl) {
		    function invoke(method, arg, resolve, reject) {
		      var record = tryCatch(generator[method], generator, arg);
		      if (record.type === "throw") {
		        reject(record.arg);
		      } else {
		        var result = record.arg;
		        var value = result.value;
		        if (value &&
		            typeof value === "object" &&
		            hasOwn.call(value, "__await")) {
		          return PromiseImpl.resolve(value.__await).then(function(value) {
		            invoke("next", value, resolve, reject);
		          }, function(err) {
		            invoke("throw", err, resolve, reject);
		          });
		        }

		        return PromiseImpl.resolve(value).then(function(unwrapped) {
		          // When a yielded Promise is resolved, its final value becomes
		          // the .value of the Promise<{value,done}> result for the
		          // current iteration.
		          result.value = unwrapped;
		          resolve(result);
		        }, function(error) {
		          // If a rejected Promise was yielded, throw the rejection back
		          // into the async generator function so it can be handled there.
		          return invoke("throw", error, resolve, reject);
		        });
		      }
		    }

		    var previousPromise;

		    function enqueue(method, arg) {
		      function callInvokeWithMethodAndArg() {
		        return new PromiseImpl(function(resolve, reject) {
		          invoke(method, arg, resolve, reject);
		        });
		      }

		      return previousPromise =
		        // If enqueue has been called before, then we want to wait until
		        // all previous Promises have been resolved before calling invoke,
		        // so that results are always delivered in the correct order. If
		        // enqueue has not been called before, then it is important to
		        // call invoke immediately, without waiting on a callback to fire,
		        // so that the async generator function has the opportunity to do
		        // any necessary setup in a predictable way. This predictability
		        // is why the Promise constructor synchronously invokes its
		        // executor callback, and why async functions synchronously
		        // execute code before the first await. Since we implement simple
		        // async functions in terms of async generators, it is especially
		        // important to get this right, even though it requires care.
		        previousPromise ? previousPromise.then(
		          callInvokeWithMethodAndArg,
		          // Avoid propagating failures to Promises returned by later
		          // invocations of the iterator.
		          callInvokeWithMethodAndArg
		        ) : callInvokeWithMethodAndArg();
		    }

		    // Define the unified helper method that is used to implement .next,
		    // .throw, and .return (see defineIteratorMethods).
		    defineProperty(this, "_invoke", { value: enqueue });
		  }

		  defineIteratorMethods(AsyncIterator.prototype);
		  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
		    return this;
		  });
		  exports.AsyncIterator = AsyncIterator;

		  // Note that simple async functions are implemented on top of
		  // AsyncIterator objects; they just return a Promise for the value of
		  // the final result produced by the iterator.
		  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
		    if (PromiseImpl === void 0) PromiseImpl = Promise;

		    var iter = new AsyncIterator(
		      wrap(innerFn, outerFn, self, tryLocsList),
		      PromiseImpl
		    );

		    return exports.isGeneratorFunction(outerFn)
		      ? iter // If outerFn is a generator, return the full iterator.
		      : iter.next().then(function(result) {
		          return result.done ? result.value : iter.next();
		        });
		  };

		  function makeInvokeMethod(innerFn, self, context) {
		    var state = GenStateSuspendedStart;

		    return function invoke(method, arg) {
		      if (state === GenStateExecuting) {
		        throw new Error("Generator is already running");
		      }

		      if (state === GenStateCompleted) {
		        if (method === "throw") {
		          throw arg;
		        }

		        // Be forgiving, per 25.3.3.3.3 of the spec:
		        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
		        return doneResult();
		      }

		      context.method = method;
		      context.arg = arg;

		      while (true) {
		        var delegate = context.delegate;
		        if (delegate) {
		          var delegateResult = maybeInvokeDelegate(delegate, context);
		          if (delegateResult) {
		            if (delegateResult === ContinueSentinel) continue;
		            return delegateResult;
		          }
		        }

		        if (context.method === "next") {
		          // Setting context._sent for legacy support of Babel's
		          // function.sent implementation.
		          context.sent = context._sent = context.arg;

		        } else if (context.method === "throw") {
		          if (state === GenStateSuspendedStart) {
		            state = GenStateCompleted;
		            throw context.arg;
		          }

		          context.dispatchException(context.arg);

		        } else if (context.method === "return") {
		          context.abrupt("return", context.arg);
		        }

		        state = GenStateExecuting;

		        var record = tryCatch(innerFn, self, context);
		        if (record.type === "normal") {
		          // If an exception is thrown from innerFn, we leave state ===
		          // GenStateExecuting and loop back for another invocation.
		          state = context.done
		            ? GenStateCompleted
		            : GenStateSuspendedYield;

		          if (record.arg === ContinueSentinel) {
		            continue;
		          }

		          return {
		            value: record.arg,
		            done: context.done
		          };

		        } else if (record.type === "throw") {
		          state = GenStateCompleted;
		          // Dispatch the exception by looping back around to the
		          // context.dispatchException(context.arg) call above.
		          context.method = "throw";
		          context.arg = record.arg;
		        }
		      }
		    };
		  }

		  // Call delegate.iterator[context.method](context.arg) and handle the
		  // result, either by returning a { value, done } result from the
		  // delegate iterator, or by modifying context.method and context.arg,
		  // setting context.delegate to null, and returning the ContinueSentinel.
		  function maybeInvokeDelegate(delegate, context) {
		    var methodName = context.method;
		    var method = delegate.iterator[methodName];
		    if (method === undefined$1) {
		      // A .throw or .return when the delegate iterator has no .throw
		      // method, or a missing .next mehtod, always terminate the
		      // yield* loop.
		      context.delegate = null;

		      // Note: ["return"] must be used for ES3 parsing compatibility.
		      if (methodName === "throw" && delegate.iterator["return"]) {
		        // If the delegate iterator has a return method, give it a
		        // chance to clean up.
		        context.method = "return";
		        context.arg = undefined$1;
		        maybeInvokeDelegate(delegate, context);

		        if (context.method === "throw") {
		          // If maybeInvokeDelegate(context) changed context.method from
		          // "return" to "throw", let that override the TypeError below.
		          return ContinueSentinel;
		        }
		      }
		      if (methodName !== "return") {
		        context.method = "throw";
		        context.arg = new TypeError(
		          "The iterator does not provide a '" + methodName + "' method");
		      }

		      return ContinueSentinel;
		    }

		    var record = tryCatch(method, delegate.iterator, context.arg);

		    if (record.type === "throw") {
		      context.method = "throw";
		      context.arg = record.arg;
		      context.delegate = null;
		      return ContinueSentinel;
		    }

		    var info = record.arg;

		    if (! info) {
		      context.method = "throw";
		      context.arg = new TypeError("iterator result is not an object");
		      context.delegate = null;
		      return ContinueSentinel;
		    }

		    if (info.done) {
		      // Assign the result of the finished delegate to the temporary
		      // variable specified by delegate.resultName (see delegateYield).
		      context[delegate.resultName] = info.value;

		      // Resume execution at the desired location (see delegateYield).
		      context.next = delegate.nextLoc;

		      // If context.method was "throw" but the delegate handled the
		      // exception, let the outer generator proceed normally. If
		      // context.method was "next", forget context.arg since it has been
		      // "consumed" by the delegate iterator. If context.method was
		      // "return", allow the original .return call to continue in the
		      // outer generator.
		      if (context.method !== "return") {
		        context.method = "next";
		        context.arg = undefined$1;
		      }

		    } else {
		      // Re-yield the result returned by the delegate method.
		      return info;
		    }

		    // The delegate iterator is finished, so forget it and continue with
		    // the outer generator.
		    context.delegate = null;
		    return ContinueSentinel;
		  }

		  // Define Generator.prototype.{next,throw,return} in terms of the
		  // unified ._invoke helper method.
		  defineIteratorMethods(Gp);

		  define(Gp, toStringTagSymbol, "Generator");

		  // A Generator should always return itself as the iterator object when the
		  // @@iterator function is called on it. Some browsers' implementations of the
		  // iterator prototype chain incorrectly implement this, causing the Generator
		  // object to not be returned from this call. This ensures that doesn't happen.
		  // See https://github.com/facebook/regenerator/issues/274 for more details.
		  define(Gp, iteratorSymbol, function() {
		    return this;
		  });

		  define(Gp, "toString", function() {
		    return "[object Generator]";
		  });

		  function pushTryEntry(locs) {
		    var entry = { tryLoc: locs[0] };

		    if (1 in locs) {
		      entry.catchLoc = locs[1];
		    }

		    if (2 in locs) {
		      entry.finallyLoc = locs[2];
		      entry.afterLoc = locs[3];
		    }

		    this.tryEntries.push(entry);
		  }

		  function resetTryEntry(entry) {
		    var record = entry.completion || {};
		    record.type = "normal";
		    delete record.arg;
		    entry.completion = record;
		  }

		  function Context(tryLocsList) {
		    // The root entry object (effectively a try statement without a catch
		    // or a finally block) gives us a place to store values thrown from
		    // locations where there is no enclosing try statement.
		    this.tryEntries = [{ tryLoc: "root" }];
		    tryLocsList.forEach(pushTryEntry, this);
		    this.reset(true);
		  }

		  exports.keys = function(val) {
		    var object = Object(val);
		    var keys = [];
		    for (var key in object) {
		      keys.push(key);
		    }
		    keys.reverse();

		    // Rather than returning an object with a next method, we keep
		    // things simple and return the next function itself.
		    return function next() {
		      while (keys.length) {
		        var key = keys.pop();
		        if (key in object) {
		          next.value = key;
		          next.done = false;
		          return next;
		        }
		      }

		      // To avoid creating an additional object, we just hang the .value
		      // and .done properties off the next function object itself. This
		      // also ensures that the minifier will not anonymize the function.
		      next.done = true;
		      return next;
		    };
		  };

		  function values(iterable) {
		    if (iterable) {
		      var iteratorMethod = iterable[iteratorSymbol];
		      if (iteratorMethod) {
		        return iteratorMethod.call(iterable);
		      }

		      if (typeof iterable.next === "function") {
		        return iterable;
		      }

		      if (!isNaN(iterable.length)) {
		        var i = -1, next = function next() {
		          while (++i < iterable.length) {
		            if (hasOwn.call(iterable, i)) {
		              next.value = iterable[i];
		              next.done = false;
		              return next;
		            }
		          }

		          next.value = undefined$1;
		          next.done = true;

		          return next;
		        };

		        return next.next = next;
		      }
		    }

		    // Return an iterator with no values.
		    return { next: doneResult };
		  }
		  exports.values = values;

		  function doneResult() {
		    return { value: undefined$1, done: true };
		  }

		  Context.prototype = {
		    constructor: Context,

		    reset: function(skipTempReset) {
		      this.prev = 0;
		      this.next = 0;
		      // Resetting context._sent for legacy support of Babel's
		      // function.sent implementation.
		      this.sent = this._sent = undefined$1;
		      this.done = false;
		      this.delegate = null;

		      this.method = "next";
		      this.arg = undefined$1;

		      this.tryEntries.forEach(resetTryEntry);

		      if (!skipTempReset) {
		        for (var name in this) {
		          // Not sure about the optimal order of these conditions:
		          if (name.charAt(0) === "t" &&
		              hasOwn.call(this, name) &&
		              !isNaN(+name.slice(1))) {
		            this[name] = undefined$1;
		          }
		        }
		      }
		    },

		    stop: function() {
		      this.done = true;

		      var rootEntry = this.tryEntries[0];
		      var rootRecord = rootEntry.completion;
		      if (rootRecord.type === "throw") {
		        throw rootRecord.arg;
		      }

		      return this.rval;
		    },

		    dispatchException: function(exception) {
		      if (this.done) {
		        throw exception;
		      }

		      var context = this;
		      function handle(loc, caught) {
		        record.type = "throw";
		        record.arg = exception;
		        context.next = loc;

		        if (caught) {
		          // If the dispatched exception was caught by a catch block,
		          // then let that catch block handle the exception normally.
		          context.method = "next";
		          context.arg = undefined$1;
		        }

		        return !! caught;
		      }

		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        var record = entry.completion;

		        if (entry.tryLoc === "root") {
		          // Exception thrown outside of any try block that could handle
		          // it, so set the completion value of the entire function to
		          // throw the exception.
		          return handle("end");
		        }

		        if (entry.tryLoc <= this.prev) {
		          var hasCatch = hasOwn.call(entry, "catchLoc");
		          var hasFinally = hasOwn.call(entry, "finallyLoc");

		          if (hasCatch && hasFinally) {
		            if (this.prev < entry.catchLoc) {
		              return handle(entry.catchLoc, true);
		            } else if (this.prev < entry.finallyLoc) {
		              return handle(entry.finallyLoc);
		            }

		          } else if (hasCatch) {
		            if (this.prev < entry.catchLoc) {
		              return handle(entry.catchLoc, true);
		            }

		          } else if (hasFinally) {
		            if (this.prev < entry.finallyLoc) {
		              return handle(entry.finallyLoc);
		            }

		          } else {
		            throw new Error("try statement without catch or finally");
		          }
		        }
		      }
		    },

		    abrupt: function(type, arg) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.tryLoc <= this.prev &&
		            hasOwn.call(entry, "finallyLoc") &&
		            this.prev < entry.finallyLoc) {
		          var finallyEntry = entry;
		          break;
		        }
		      }

		      if (finallyEntry &&
		          (type === "break" ||
		           type === "continue") &&
		          finallyEntry.tryLoc <= arg &&
		          arg <= finallyEntry.finallyLoc) {
		        // Ignore the finally entry if control is not jumping to a
		        // location outside the try/catch block.
		        finallyEntry = null;
		      }

		      var record = finallyEntry ? finallyEntry.completion : {};
		      record.type = type;
		      record.arg = arg;

		      if (finallyEntry) {
		        this.method = "next";
		        this.next = finallyEntry.finallyLoc;
		        return ContinueSentinel;
		      }

		      return this.complete(record);
		    },

		    complete: function(record, afterLoc) {
		      if (record.type === "throw") {
		        throw record.arg;
		      }

		      if (record.type === "break" ||
		          record.type === "continue") {
		        this.next = record.arg;
		      } else if (record.type === "return") {
		        this.rval = this.arg = record.arg;
		        this.method = "return";
		        this.next = "end";
		      } else if (record.type === "normal" && afterLoc) {
		        this.next = afterLoc;
		      }

		      return ContinueSentinel;
		    },

		    finish: function(finallyLoc) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.finallyLoc === finallyLoc) {
		          this.complete(entry.completion, entry.afterLoc);
		          resetTryEntry(entry);
		          return ContinueSentinel;
		        }
		      }
		    },

		    "catch": function(tryLoc) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.tryLoc === tryLoc) {
		          var record = entry.completion;
		          if (record.type === "throw") {
		            var thrown = record.arg;
		            resetTryEntry(entry);
		          }
		          return thrown;
		        }
		      }

		      // The context.catch method must only be called with a location
		      // argument that corresponds to a known catch block.
		      throw new Error("illegal catch attempt");
		    },

		    delegateYield: function(iterable, resultName, nextLoc) {
		      this.delegate = {
		        iterator: values(iterable),
		        resultName: resultName,
		        nextLoc: nextLoc
		      };

		      if (this.method === "next") {
		        // Deliberately forget the last sent value so that we don't
		        // accidentally pass it on to the delegate.
		        this.arg = undefined$1;
		      }

		      return ContinueSentinel;
		    }
		  };

		  // Regardless of whether this script is executing as a CommonJS module
		  // or not, return the runtime object so that we can declare the variable
		  // regeneratorRuntime in the outer scope, which allows this module to be
		  // injected easily by `bin/regenerator --include-runtime script.js`.
		  return exports;

		}(
		  // If this script is executing as a CommonJS module, use module.exports
		  // as the regeneratorRuntime namespace. Otherwise create a new empty
		  // object. Either way, the resulting object will be used to initialize
		  // the regeneratorRuntime variable at the top of this file.
		  module.exports 
		));

		try {
		  regeneratorRuntime = runtime;
		} catch (accidentalStrictMode) {
		  // This module should not be running in strict mode, so the above
		  // assignment should always work unless something is misconfigured. Just
		  // in case runtime.js accidentally runs in strict mode, in modern engines
		  // we can explicitly access globalThis. In older engines we can escape
		  // strict mode using a global Function call. This could conceivably fail
		  // if a Content Security Policy forbids using Function, but in that case
		  // the proper solution is to fix the accidental strict mode problem. If
		  // you've misconfigured your bundler to force strict mode and applied a
		  // CSP to forbid Function, and you're not willing to fix either of those
		  // problems, please detail your unique predicament in a GitHub issue.
		  if (typeof globalThis === "object") {
		    globalThis.regeneratorRuntime = runtime;
		  } else {
		    Function("r", "regeneratorRuntime = r")(runtime);
		  }
		} 
	} (runtime));

	function commonjsRequire(path) {
		throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
	}

	var jsonpath = {exports: {}};

	/*! jsonpath 1.1.1 */

	(function (module, exports) {
		(function(f){{module.exports=f();}})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof commonjsRequire=="function"&&commonjsRequire;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./aesprim":[function(require,module,exports){
		/*
		  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
		  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
		  Copyright (C) 2013 Mathias Bynens <mathias@qiwi.be>
		  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
		  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
		  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
		  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
		  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
		  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
		  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

		  Redistribution and use in source and binary forms, with or without
		  modification, are permitted provided that the following conditions are met:

		    * Redistributions of source code must retain the above copyright
		      notice, this list of conditions and the following disclaimer.
		    * Redistributions in binary form must reproduce the above copyright
		      notice, this list of conditions and the following disclaimer in the
		      documentation and/or other materials provided with the distribution.

		  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
		  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
		  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
		  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
		  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
		  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
		  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
		  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		*/

		/*jslint bitwise:true plusplus:true */
		/*global esprima:true, define:true, exports:true, window: true,
		throwErrorTolerant: true,
		throwError: true, generateStatement: true, peek: true,
		parseAssignmentExpression: true, parseBlock: true, parseExpression: true,
		parseFunctionDeclaration: true, parseFunctionExpression: true,
		parseFunctionSourceElements: true, parseVariableIdentifier: true,
		parseLeftHandSideExpression: true,
		parseUnaryExpression: true,
		parseStatement: true, parseSourceElement: true */

		(function (root, factory) {

		    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
		    // Rhino, and plain browser loading.

		    /* istanbul ignore next */
		    if (typeof exports !== 'undefined') {
		        factory(exports);
		    } else {
		        factory((root.esprima = {}));
		    }
		}(this, function (exports) {

		    var Token,
		        TokenName,
		        FnExprTokens,
		        Syntax,
		        PropertyKind,
		        Messages,
		        Regex,
		        SyntaxTreeDelegate,
		        source,
		        strict,
		        index,
		        lineNumber,
		        lineStart,
		        length,
		        delegate,
		        lookahead,
		        state,
		        extra;

		    Token = {
		        BooleanLiteral: 1,
		        EOF: 2,
		        Identifier: 3,
		        Keyword: 4,
		        NullLiteral: 5,
		        NumericLiteral: 6,
		        Punctuator: 7,
		        StringLiteral: 8,
		        RegularExpression: 9
		    };

		    TokenName = {};
		    TokenName[Token.BooleanLiteral] = 'Boolean';
		    TokenName[Token.EOF] = '<end>';
		    TokenName[Token.Identifier] = 'Identifier';
		    TokenName[Token.Keyword] = 'Keyword';
		    TokenName[Token.NullLiteral] = 'Null';
		    TokenName[Token.NumericLiteral] = 'Numeric';
		    TokenName[Token.Punctuator] = 'Punctuator';
		    TokenName[Token.StringLiteral] = 'String';
		    TokenName[Token.RegularExpression] = 'RegularExpression';

		    // A function following one of those tokens is an expression.
		    FnExprTokens = ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
		                    'return', 'case', 'delete', 'throw', 'void',
		                    // assignment operators
		                    '=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=',
		                    '&=', '|=', '^=', ',',
		                    // binary/unary operators
		                    '+', '-', '*', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
		                    '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
		                    '<=', '<', '>', '!=', '!=='];

		    Syntax = {
		        AssignmentExpression: 'AssignmentExpression',
		        ArrayExpression: 'ArrayExpression',
		        BlockStatement: 'BlockStatement',
		        BinaryExpression: 'BinaryExpression',
		        BreakStatement: 'BreakStatement',
		        CallExpression: 'CallExpression',
		        CatchClause: 'CatchClause',
		        ConditionalExpression: 'ConditionalExpression',
		        ContinueStatement: 'ContinueStatement',
		        DoWhileStatement: 'DoWhileStatement',
		        DebuggerStatement: 'DebuggerStatement',
		        EmptyStatement: 'EmptyStatement',
		        ExpressionStatement: 'ExpressionStatement',
		        ForStatement: 'ForStatement',
		        ForInStatement: 'ForInStatement',
		        FunctionDeclaration: 'FunctionDeclaration',
		        FunctionExpression: 'FunctionExpression',
		        Identifier: 'Identifier',
		        IfStatement: 'IfStatement',
		        Literal: 'Literal',
		        LabeledStatement: 'LabeledStatement',
		        LogicalExpression: 'LogicalExpression',
		        MemberExpression: 'MemberExpression',
		        NewExpression: 'NewExpression',
		        ObjectExpression: 'ObjectExpression',
		        Program: 'Program',
		        Property: 'Property',
		        ReturnStatement: 'ReturnStatement',
		        SequenceExpression: 'SequenceExpression',
		        SwitchStatement: 'SwitchStatement',
		        SwitchCase: 'SwitchCase',
		        ThisExpression: 'ThisExpression',
		        ThrowStatement: 'ThrowStatement',
		        TryStatement: 'TryStatement',
		        UnaryExpression: 'UnaryExpression',
		        UpdateExpression: 'UpdateExpression',
		        VariableDeclaration: 'VariableDeclaration',
		        VariableDeclarator: 'VariableDeclarator',
		        WhileStatement: 'WhileStatement',
		        WithStatement: 'WithStatement'
		    };

		    PropertyKind = {
		        Data: 1,
		        Get: 2,
		        Set: 4
		    };

		    // Error messages should be identical to V8.
		    Messages = {
		        UnexpectedToken:  'Unexpected token %0',
		        UnexpectedNumber:  'Unexpected number',
		        UnexpectedString:  'Unexpected string',
		        UnexpectedIdentifier:  'Unexpected identifier',
		        UnexpectedReserved:  'Unexpected reserved word',
		        UnexpectedEOS:  'Unexpected end of input',
		        NewlineAfterThrow:  'Illegal newline after throw',
		        InvalidRegExp: 'Invalid regular expression',
		        UnterminatedRegExp:  'Invalid regular expression: missing /',
		        InvalidLHSInAssignment:  'Invalid left-hand side in assignment',
		        InvalidLHSInForIn:  'Invalid left-hand side in for-in',
		        MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
		        NoCatchOrFinally:  'Missing catch or finally after try',
		        UnknownLabel: 'Undefined label \'%0\'',
		        Redeclaration: '%0 \'%1\' has already been declared',
		        IllegalContinue: 'Illegal continue statement',
		        IllegalBreak: 'Illegal break statement',
		        IllegalReturn: 'Illegal return statement',
		        StrictModeWith:  'Strict mode code may not include a with statement',
		        StrictCatchVariable:  'Catch variable may not be eval or arguments in strict mode',
		        StrictVarName:  'Variable name may not be eval or arguments in strict mode',
		        StrictParamName:  'Parameter name eval or arguments is not allowed in strict mode',
		        StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
		        StrictFunctionName:  'Function name may not be eval or arguments in strict mode',
		        StrictOctalLiteral:  'Octal literals are not allowed in strict mode.',
		        StrictDelete:  'Delete of an unqualified identifier in strict mode.',
		        StrictDuplicateProperty:  'Duplicate data property in object literal not allowed in strict mode',
		        AccessorDataProperty:  'Object literal may not have data and accessor property with the same name',
		        AccessorGetSet:  'Object literal may not have multiple get/set accessors with the same name',
		        StrictLHSAssignment:  'Assignment to eval or arguments is not allowed in strict mode',
		        StrictLHSPostfix:  'Postfix increment/decrement may not have eval or arguments operand in strict mode',
		        StrictLHSPrefix:  'Prefix increment/decrement may not have eval or arguments operand in strict mode',
		        StrictReservedWord:  'Use of future reserved word in strict mode'
		    };

		    // See also tools/generate-unicode-regex.py.
		    Regex = {
		        NonAsciiIdentifierStart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]'),
		        NonAsciiIdentifierPart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0\u08A2-\u08AC\u08E4-\u08FE\u0900-\u0963\u0966-\u096F\u0971-\u0977\u0979-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191C\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1D00-\u1DE6\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA697\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7B\uAA80-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]')
		    };

		    // Ensure the condition is true, otherwise throw an error.
		    // This is only to have a better contract semantic, i.e. another safety net
		    // to catch a logic error. The condition shall be fulfilled in normal case.
		    // Do NOT use this to enforce a certain condition on any user input.

		    function assert(condition, message) {
		        /* istanbul ignore if */
		        if (!condition) {
		            throw new Error('ASSERT: ' + message);
		        }
		    }

		    function isDecimalDigit(ch) {
		        return (ch >= 48 && ch <= 57);   // 0..9
		    }

		    function isHexDigit(ch) {
		        return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
		    }

		    function isOctalDigit(ch) {
		        return '01234567'.indexOf(ch) >= 0;
		    }


		    // 7.2 White Space

		    function isWhiteSpace(ch) {
		        return (ch === 0x20) || (ch === 0x09) || (ch === 0x0B) || (ch === 0x0C) || (ch === 0xA0) ||
		            (ch >= 0x1680 && [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(ch) >= 0);
		    }

		    // 7.3 Line Terminators

		    function isLineTerminator(ch) {
		        return (ch === 0x0A) || (ch === 0x0D) || (ch === 0x2028) || (ch === 0x2029);
		    }

		    // 7.6 Identifier Names and Identifiers

		    function isIdentifierStart(ch) {
		        return (ch == 0x40) ||  (ch === 0x24) || (ch === 0x5F) ||  // $ (dollar) and _ (underscore)
		            (ch >= 0x41 && ch <= 0x5A) ||         // A..Z
		            (ch >= 0x61 && ch <= 0x7A) ||         // a..z
		            (ch === 0x5C) ||                      // \ (backslash)
		            ((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch)));
		    }

		    function isIdentifierPart(ch) {
		        return (ch === 0x24) || (ch === 0x5F) ||  // $ (dollar) and _ (underscore)
		            (ch >= 0x41 && ch <= 0x5A) ||         // A..Z
		            (ch >= 0x61 && ch <= 0x7A) ||         // a..z
		            (ch >= 0x30 && ch <= 0x39) ||         // 0..9
		            (ch === 0x5C) ||                      // \ (backslash)
		            ((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch)));
		    }

		    // 7.6.1.2 Future Reserved Words

		    function isFutureReservedWord(id) {
		        switch (id) {
		        case 'class':
		        case 'enum':
		        case 'export':
		        case 'extends':
		        case 'import':
		        case 'super':
		            return true;
		        default:
		            return false;
		        }
		    }

		    function isStrictModeReservedWord(id) {
		        switch (id) {
		        case 'implements':
		        case 'interface':
		        case 'package':
		        case 'private':
		        case 'protected':
		        case 'public':
		        case 'static':
		        case 'yield':
		        case 'let':
		            return true;
		        default:
		            return false;
		        }
		    }

		    function isRestrictedWord(id) {
		        return id === 'eval' || id === 'arguments';
		    }

		    // 7.6.1.1 Keywords

		    function isKeyword(id) {
		        if (strict && isStrictModeReservedWord(id)) {
		            return true;
		        }

		        // 'const' is specialized as Keyword in V8.
		        // 'yield' and 'let' are for compatiblity with SpiderMonkey and ES.next.
		        // Some others are from future reserved words.

		        switch (id.length) {
		        case 2:
		            return (id === 'if') || (id === 'in') || (id === 'do');
		        case 3:
		            return (id === 'var') || (id === 'for') || (id === 'new') ||
		                (id === 'try') || (id === 'let');
		        case 4:
		            return (id === 'this') || (id === 'else') || (id === 'case') ||
		                (id === 'void') || (id === 'with') || (id === 'enum');
		        case 5:
		            return (id === 'while') || (id === 'break') || (id === 'catch') ||
		                (id === 'throw') || (id === 'const') || (id === 'yield') ||
		                (id === 'class') || (id === 'super');
		        case 6:
		            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
		                (id === 'switch') || (id === 'export') || (id === 'import');
		        case 7:
		            return (id === 'default') || (id === 'finally') || (id === 'extends');
		        case 8:
		            return (id === 'function') || (id === 'continue') || (id === 'debugger');
		        case 10:
		            return (id === 'instanceof');
		        default:
		            return false;
		        }
		    }

		    // 7.4 Comments

		    function addComment(type, value, start, end, loc) {
		        var comment;

		        assert(typeof start === 'number', 'Comment must have valid position');

		        // Because the way the actual token is scanned, often the comments
		        // (if any) are skipped twice during the lexical analysis.
		        // Thus, we need to skip adding a comment if the comment array already
		        // handled it.
		        if (state.lastCommentStart >= start) {
		            return;
		        }
		        state.lastCommentStart = start;

		        comment = {
		            type: type,
		            value: value
		        };
		        if (extra.range) {
		            comment.range = [start, end];
		        }
		        if (extra.loc) {
		            comment.loc = loc;
		        }
		        extra.comments.push(comment);
		        if (extra.attachComment) {
		            extra.leadingComments.push(comment);
		            extra.trailingComments.push(comment);
		        }
		    }

		    function skipSingleLineComment(offset) {
		        var start, loc, ch, comment;

		        start = index - offset;
		        loc = {
		            start: {
		                line: lineNumber,
		                column: index - lineStart - offset
		            }
		        };

		        while (index < length) {
		            ch = source.charCodeAt(index);
		            ++index;
		            if (isLineTerminator(ch)) {
		                if (extra.comments) {
		                    comment = source.slice(start + offset, index - 1);
		                    loc.end = {
		                        line: lineNumber,
		                        column: index - lineStart - 1
		                    };
		                    addComment('Line', comment, start, index - 1, loc);
		                }
		                if (ch === 13 && source.charCodeAt(index) === 10) {
		                    ++index;
		                }
		                ++lineNumber;
		                lineStart = index;
		                return;
		            }
		        }

		        if (extra.comments) {
		            comment = source.slice(start + offset, index);
		            loc.end = {
		                line: lineNumber,
		                column: index - lineStart
		            };
		            addComment('Line', comment, start, index, loc);
		        }
		    }

		    function skipMultiLineComment() {
		        var start, loc, ch, comment;

		        if (extra.comments) {
		            start = index - 2;
		            loc = {
		                start: {
		                    line: lineNumber,
		                    column: index - lineStart - 2
		                }
		            };
		        }

		        while (index < length) {
		            ch = source.charCodeAt(index);
		            if (isLineTerminator(ch)) {
		                if (ch === 0x0D && source.charCodeAt(index + 1) === 0x0A) {
		                    ++index;
		                }
		                ++lineNumber;
		                ++index;
		                lineStart = index;
		                if (index >= length) {
		                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		                }
		            } else if (ch === 0x2A) {
		                // Block comment ends with '*/'.
		                if (source.charCodeAt(index + 1) === 0x2F) {
		                    ++index;
		                    ++index;
		                    if (extra.comments) {
		                        comment = source.slice(start + 2, index - 2);
		                        loc.end = {
		                            line: lineNumber,
		                            column: index - lineStart
		                        };
		                        addComment('Block', comment, start, index, loc);
		                    }
		                    return;
		                }
		                ++index;
		            } else {
		                ++index;
		            }
		        }

		        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		    }

		    function skipComment() {
		        var ch, start;

		        start = (index === 0);
		        while (index < length) {
		            ch = source.charCodeAt(index);

		            if (isWhiteSpace(ch)) {
		                ++index;
		            } else if (isLineTerminator(ch)) {
		                ++index;
		                if (ch === 0x0D && source.charCodeAt(index) === 0x0A) {
		                    ++index;
		                }
		                ++lineNumber;
		                lineStart = index;
		                start = true;
		            } else if (ch === 0x2F) { // U+002F is '/'
		                ch = source.charCodeAt(index + 1);
		                if (ch === 0x2F) {
		                    ++index;
		                    ++index;
		                    skipSingleLineComment(2);
		                    start = true;
		                } else if (ch === 0x2A) {  // U+002A is '*'
		                    ++index;
		                    ++index;
		                    skipMultiLineComment();
		                } else {
		                    break;
		                }
		            } else if (start && ch === 0x2D) { // U+002D is '-'
		                // U+003E is '>'
		                if ((source.charCodeAt(index + 1) === 0x2D) && (source.charCodeAt(index + 2) === 0x3E)) {
		                    // '-->' is a single-line comment
		                    index += 3;
		                    skipSingleLineComment(3);
		                } else {
		                    break;
		                }
		            } else if (ch === 0x3C) { // U+003C is '<'
		                if (source.slice(index + 1, index + 4) === '!--') {
		                    ++index; // `<`
		                    ++index; // `!`
		                    ++index; // `-`
		                    ++index; // `-`
		                    skipSingleLineComment(4);
		                } else {
		                    break;
		                }
		            } else {
		                break;
		            }
		        }
		    }

		    function scanHexEscape(prefix) {
		        var i, len, ch, code = 0;

		        len = (prefix === 'u') ? 4 : 2;
		        for (i = 0; i < len; ++i) {
		            if (index < length && isHexDigit(source[index])) {
		                ch = source[index++];
		                code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
		            } else {
		                return '';
		            }
		        }
		        return String.fromCharCode(code);
		    }

		    function getEscapedIdentifier() {
		        var ch, id;

		        ch = source.charCodeAt(index++);
		        id = String.fromCharCode(ch);

		        // '\u' (U+005C, U+0075) denotes an escaped character.
		        if (ch === 0x5C) {
		            if (source.charCodeAt(index) !== 0x75) {
		                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		            }
		            ++index;
		            ch = scanHexEscape('u');
		            if (!ch || ch === '\\' || !isIdentifierStart(ch.charCodeAt(0))) {
		                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		            }
		            id = ch;
		        }

		        while (index < length) {
		            ch = source.charCodeAt(index);
		            if (!isIdentifierPart(ch)) {
		                break;
		            }
		            ++index;
		            id += String.fromCharCode(ch);

		            // '\u' (U+005C, U+0075) denotes an escaped character.
		            if (ch === 0x5C) {
		                id = id.substr(0, id.length - 1);
		                if (source.charCodeAt(index) !== 0x75) {
		                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		                }
		                ++index;
		                ch = scanHexEscape('u');
		                if (!ch || ch === '\\' || !isIdentifierPart(ch.charCodeAt(0))) {
		                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		                }
		                id += ch;
		            }
		        }

		        return id;
		    }

		    function getIdentifier() {
		        var start, ch;

		        start = index++;
		        while (index < length) {
		            ch = source.charCodeAt(index);
		            if (ch === 0x5C) {
		                // Blackslash (U+005C) marks Unicode escape sequence.
		                index = start;
		                return getEscapedIdentifier();
		            }
		            if (isIdentifierPart(ch)) {
		                ++index;
		            } else {
		                break;
		            }
		        }

		        return source.slice(start, index);
		    }

		    function scanIdentifier() {
		        var start, id, type;

		        start = index;

		        // Backslash (U+005C) starts an escaped character.
		        id = (source.charCodeAt(index) === 0x5C) ? getEscapedIdentifier() : getIdentifier();

		        // There is no keyword or literal with only one character.
		        // Thus, it must be an identifier.
		        if (id.length === 1) {
		            type = Token.Identifier;
		        } else if (isKeyword(id)) {
		            type = Token.Keyword;
		        } else if (id === 'null') {
		            type = Token.NullLiteral;
		        } else if (id === 'true' || id === 'false') {
		            type = Token.BooleanLiteral;
		        } else {
		            type = Token.Identifier;
		        }

		        return {
		            type: type,
		            value: id,
		            lineNumber: lineNumber,
		            lineStart: lineStart,
		            start: start,
		            end: index
		        };
		    }


		    // 7.7 Punctuators

		    function scanPunctuator() {
		        var start = index,
		            code = source.charCodeAt(index),
		            code2,
		            ch1 = source[index],
		            ch2,
		            ch3,
		            ch4;

		        switch (code) {

		        // Check for most common single-character punctuators.
		        case 0x2E:  // . dot
		        case 0x28:  // ( open bracket
		        case 0x29:  // ) close bracket
		        case 0x3B:  // ; semicolon
		        case 0x2C:  // , comma
		        case 0x7B:  // { open curly brace
		        case 0x7D:  // } close curly brace
		        case 0x5B:  // [
		        case 0x5D:  // ]
		        case 0x3A:  // :
		        case 0x3F:  // ?
		        case 0x7E:  // ~
		            ++index;
		            if (extra.tokenize) {
		                if (code === 0x28) {
		                    extra.openParenToken = extra.tokens.length;
		                } else if (code === 0x7B) {
		                    extra.openCurlyToken = extra.tokens.length;
		                }
		            }
		            return {
		                type: Token.Punctuator,
		                value: String.fromCharCode(code),
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };

		        default:
		            code2 = source.charCodeAt(index + 1);

		            // '=' (U+003D) marks an assignment or comparison operator.
		            if (code2 === 0x3D) {
		                switch (code) {
		                case 0x2B:  // +
		                case 0x2D:  // -
		                case 0x2F:  // /
		                case 0x3C:  // <
		                case 0x3E:  // >
		                case 0x5E:  // ^
		                case 0x7C:  // |
		                case 0x25:  // %
		                case 0x26:  // &
		                case 0x2A:  // *
		                    index += 2;
		                    return {
		                        type: Token.Punctuator,
		                        value: String.fromCharCode(code) + String.fromCharCode(code2),
		                        lineNumber: lineNumber,
		                        lineStart: lineStart,
		                        start: start,
		                        end: index
		                    };

		                case 0x21: // !
		                case 0x3D: // =
		                    index += 2;

		                    // !== and ===
		                    if (source.charCodeAt(index) === 0x3D) {
		                        ++index;
		                    }
		                    return {
		                        type: Token.Punctuator,
		                        value: source.slice(start, index),
		                        lineNumber: lineNumber,
		                        lineStart: lineStart,
		                        start: start,
		                        end: index
		                    };
		                }
		            }
		        }

		        // 4-character punctuator: >>>=

		        ch4 = source.substr(index, 4);

		        if (ch4 === '>>>=') {
		            index += 4;
		            return {
		                type: Token.Punctuator,
		                value: ch4,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };
		        }

		        // 3-character punctuators: === !== >>> <<= >>=

		        ch3 = ch4.substr(0, 3);

		        if (ch3 === '>>>' || ch3 === '<<=' || ch3 === '>>=') {
		            index += 3;
		            return {
		                type: Token.Punctuator,
		                value: ch3,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };
		        }

		        // Other 2-character punctuators: ++ -- << >> && ||
		        ch2 = ch3.substr(0, 2);

		        if ((ch1 === ch2[1] && ('+-<>&|'.indexOf(ch1) >= 0)) || ch2 === '=>') {
		            index += 2;
		            return {
		                type: Token.Punctuator,
		                value: ch2,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };
		        }

		        // 1-character punctuators: < > = ! + - * % & | ^ /
		        if ('<>=!+-*%&|^/'.indexOf(ch1) >= 0) {
		            ++index;
		            return {
		                type: Token.Punctuator,
		                value: ch1,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };
		        }

		        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		    }

		    // 7.8.3 Numeric Literals

		    function scanHexLiteral(start) {
		        var number = '';

		        while (index < length) {
		            if (!isHexDigit(source[index])) {
		                break;
		            }
		            number += source[index++];
		        }

		        if (number.length === 0) {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }

		        if (isIdentifierStart(source.charCodeAt(index))) {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }

		        return {
		            type: Token.NumericLiteral,
		            value: parseInt('0x' + number, 16),
		            lineNumber: lineNumber,
		            lineStart: lineStart,
		            start: start,
		            end: index
		        };
		    }

		    function scanOctalLiteral(start) {
		        var number = '0' + source[index++];
		        while (index < length) {
		            if (!isOctalDigit(source[index])) {
		                break;
		            }
		            number += source[index++];
		        }

		        if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }

		        return {
		            type: Token.NumericLiteral,
		            value: parseInt(number, 8),
		            octal: true,
		            lineNumber: lineNumber,
		            lineStart: lineStart,
		            start: start,
		            end: index
		        };
		    }

		    function scanNumericLiteral() {
		        var number, start, ch;

		        ch = source[index];
		        assert(isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'),
		            'Numeric literal must start with a decimal digit or a decimal point');

		        start = index;
		        number = '';
		        if (ch !== '.') {
		            number = source[index++];
		            ch = source[index];

		            // Hex number starts with '0x'.
		            // Octal number starts with '0'.
		            if (number === '0') {
		                if (ch === 'x' || ch === 'X') {
		                    ++index;
		                    return scanHexLiteral(start);
		                }
		                if (isOctalDigit(ch)) {
		                    return scanOctalLiteral(start);
		                }

		                // decimal number starts with '0' such as '09' is illegal.
		                if (ch && isDecimalDigit(ch.charCodeAt(0))) {
		                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		                }
		            }

		            while (isDecimalDigit(source.charCodeAt(index))) {
		                number += source[index++];
		            }
		            ch = source[index];
		        }

		        if (ch === '.') {
		            number += source[index++];
		            while (isDecimalDigit(source.charCodeAt(index))) {
		                number += source[index++];
		            }
		            ch = source[index];
		        }

		        if (ch === 'e' || ch === 'E') {
		            number += source[index++];

		            ch = source[index];
		            if (ch === '+' || ch === '-') {
		                number += source[index++];
		            }
		            if (isDecimalDigit(source.charCodeAt(index))) {
		                while (isDecimalDigit(source.charCodeAt(index))) {
		                    number += source[index++];
		                }
		            } else {
		                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		            }
		        }

		        if (isIdentifierStart(source.charCodeAt(index))) {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }

		        return {
		            type: Token.NumericLiteral,
		            value: parseFloat(number),
		            lineNumber: lineNumber,
		            lineStart: lineStart,
		            start: start,
		            end: index
		        };
		    }

		    // 7.8.4 String Literals

		    function scanStringLiteral() {
		        var str = '', quote, start, ch, code, unescaped, restore, octal = false, startLineNumber, startLineStart;
		        startLineNumber = lineNumber;
		        startLineStart = lineStart;

		        quote = source[index];
		        assert((quote === '\'' || quote === '"'),
		            'String literal must starts with a quote');

		        start = index;
		        ++index;

		        while (index < length) {
		            ch = source[index++];

		            if (ch === quote) {
		                quote = '';
		                break;
		            } else if (ch === '\\') {
		                ch = source[index++];
		                if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
		                    switch (ch) {
		                    case 'u':
		                    case 'x':
		                        restore = index;
		                        unescaped = scanHexEscape(ch);
		                        if (unescaped) {
		                            str += unescaped;
		                        } else {
		                            index = restore;
		                            str += ch;
		                        }
		                        break;
		                    case 'n':
		                        str += '\n';
		                        break;
		                    case 'r':
		                        str += '\r';
		                        break;
		                    case 't':
		                        str += '\t';
		                        break;
		                    case 'b':
		                        str += '\b';
		                        break;
		                    case 'f':
		                        str += '\f';
		                        break;
		                    case 'v':
		                        str += '\x0B';
		                        break;

		                    default:
		                        if (isOctalDigit(ch)) {
		                            code = '01234567'.indexOf(ch);

		                            // \0 is not octal escape sequence
		                            if (code !== 0) {
		                                octal = true;
		                            }

		                            if (index < length && isOctalDigit(source[index])) {
		                                octal = true;
		                                code = code * 8 + '01234567'.indexOf(source[index++]);

		                                // 3 digits are only allowed when string starts
		                                // with 0, 1, 2, 3
		                                if ('0123'.indexOf(ch) >= 0 &&
		                                        index < length &&
		                                        isOctalDigit(source[index])) {
		                                    code = code * 8 + '01234567'.indexOf(source[index++]);
		                                }
		                            }
		                            str += String.fromCharCode(code);
		                        } else {
		                            str += ch;
		                        }
		                        break;
		                    }
		                } else {
		                    ++lineNumber;
		                    if (ch ===  '\r' && source[index] === '\n') {
		                        ++index;
		                    }
		                    lineStart = index;
		                }
		            } else if (isLineTerminator(ch.charCodeAt(0))) {
		                break;
		            } else {
		                str += ch;
		            }
		        }

		        if (quote !== '') {
		            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		        }

		        return {
		            type: Token.StringLiteral,
		            value: str,
		            octal: octal,
		            startLineNumber: startLineNumber,
		            startLineStart: startLineStart,
		            lineNumber: lineNumber,
		            lineStart: lineStart,
		            start: start,
		            end: index
		        };
		    }

		    function testRegExp(pattern, flags) {
		        var value;
		        try {
		            value = new RegExp(pattern, flags);
		        } catch (e) {
		            throwError({}, Messages.InvalidRegExp);
		        }
		        return value;
		    }

		    function scanRegExpBody() {
		        var ch, str, classMarker, terminated, body;

		        ch = source[index];
		        assert(ch === '/', 'Regular expression literal must start with a slash');
		        str = source[index++];

		        classMarker = false;
		        terminated = false;
		        while (index < length) {
		            ch = source[index++];
		            str += ch;
		            if (ch === '\\') {
		                ch = source[index++];
		                // ECMA-262 7.8.5
		                if (isLineTerminator(ch.charCodeAt(0))) {
		                    throwError({}, Messages.UnterminatedRegExp);
		                }
		                str += ch;
		            } else if (isLineTerminator(ch.charCodeAt(0))) {
		                throwError({}, Messages.UnterminatedRegExp);
		            } else if (classMarker) {
		                if (ch === ']') {
		                    classMarker = false;
		                }
		            } else {
		                if (ch === '/') {
		                    terminated = true;
		                    break;
		                } else if (ch === '[') {
		                    classMarker = true;
		                }
		            }
		        }

		        if (!terminated) {
		            throwError({}, Messages.UnterminatedRegExp);
		        }

		        // Exclude leading and trailing slash.
		        body = str.substr(1, str.length - 2);
		        return {
		            value: body,
		            literal: str
		        };
		    }

		    function scanRegExpFlags() {
		        var ch, str, flags, restore;

		        str = '';
		        flags = '';
		        while (index < length) {
		            ch = source[index];
		            if (!isIdentifierPart(ch.charCodeAt(0))) {
		                break;
		            }

		            ++index;
		            if (ch === '\\' && index < length) {
		                ch = source[index];
		                if (ch === 'u') {
		                    ++index;
		                    restore = index;
		                    ch = scanHexEscape('u');
		                    if (ch) {
		                        flags += ch;
		                        for (str += '\\u'; restore < index; ++restore) {
		                            str += source[restore];
		                        }
		                    } else {
		                        index = restore;
		                        flags += 'u';
		                        str += '\\u';
		                    }
		                    throwErrorTolerant({}, Messages.UnexpectedToken, 'ILLEGAL');
		                } else {
		                    str += '\\';
		                    throwErrorTolerant({}, Messages.UnexpectedToken, 'ILLEGAL');
		                }
		            } else {
		                flags += ch;
		                str += ch;
		            }
		        }

		        return {
		            value: flags,
		            literal: str
		        };
		    }

		    function scanRegExp() {
		        var start, body, flags, value;

		        lookahead = null;
		        skipComment();
		        start = index;

		        body = scanRegExpBody();
		        flags = scanRegExpFlags();
		        value = testRegExp(body.value, flags.value);

		        if (extra.tokenize) {
		            return {
		                type: Token.RegularExpression,
		                value: value,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: start,
		                end: index
		            };
		        }

		        return {
		            literal: body.literal + flags.literal,
		            value: value,
		            start: start,
		            end: index
		        };
		    }

		    function collectRegex() {
		        var pos, loc, regex, token;

		        skipComment();

		        pos = index;
		        loc = {
		            start: {
		                line: lineNumber,
		                column: index - lineStart
		            }
		        };

		        regex = scanRegExp();
		        loc.end = {
		            line: lineNumber,
		            column: index - lineStart
		        };

		        /* istanbul ignore next */
		        if (!extra.tokenize) {
		            // Pop the previous token, which is likely '/' or '/='
		            if (extra.tokens.length > 0) {
		                token = extra.tokens[extra.tokens.length - 1];
		                if (token.range[0] === pos && token.type === 'Punctuator') {
		                    if (token.value === '/' || token.value === '/=') {
		                        extra.tokens.pop();
		                    }
		                }
		            }

		            extra.tokens.push({
		                type: 'RegularExpression',
		                value: regex.literal,
		                range: [pos, index],
		                loc: loc
		            });
		        }

		        return regex;
		    }

		    function isIdentifierName(token) {
		        return token.type === Token.Identifier ||
		            token.type === Token.Keyword ||
		            token.type === Token.BooleanLiteral ||
		            token.type === Token.NullLiteral;
		    }

		    function advanceSlash() {
		        var prevToken,
		            checkToken;
		        // Using the following algorithm:
		        // https://github.com/mozilla/sweet.js/wiki/design
		        prevToken = extra.tokens[extra.tokens.length - 1];
		        if (!prevToken) {
		            // Nothing before that: it cannot be a division.
		            return collectRegex();
		        }
		        if (prevToken.type === 'Punctuator') {
		            if (prevToken.value === ']') {
		                return scanPunctuator();
		            }
		            if (prevToken.value === ')') {
		                checkToken = extra.tokens[extra.openParenToken - 1];
		                if (checkToken &&
		                        checkToken.type === 'Keyword' &&
		                        (checkToken.value === 'if' ||
		                         checkToken.value === 'while' ||
		                         checkToken.value === 'for' ||
		                         checkToken.value === 'with')) {
		                    return collectRegex();
		                }
		                return scanPunctuator();
		            }
		            if (prevToken.value === '}') {
		                // Dividing a function by anything makes little sense,
		                // but we have to check for that.
		                if (extra.tokens[extra.openCurlyToken - 3] &&
		                        extra.tokens[extra.openCurlyToken - 3].type === 'Keyword') {
		                    // Anonymous function.
		                    checkToken = extra.tokens[extra.openCurlyToken - 4];
		                    if (!checkToken) {
		                        return scanPunctuator();
		                    }
		                } else if (extra.tokens[extra.openCurlyToken - 4] &&
		                        extra.tokens[extra.openCurlyToken - 4].type === 'Keyword') {
		                    // Named function.
		                    checkToken = extra.tokens[extra.openCurlyToken - 5];
		                    if (!checkToken) {
		                        return collectRegex();
		                    }
		                } else {
		                    return scanPunctuator();
		                }
		                // checkToken determines whether the function is
		                // a declaration or an expression.
		                if (FnExprTokens.indexOf(checkToken.value) >= 0) {
		                    // It is an expression.
		                    return scanPunctuator();
		                }
		                // It is a declaration.
		                return collectRegex();
		            }
		            return collectRegex();
		        }
		        if (prevToken.type === 'Keyword') {
		            return collectRegex();
		        }
		        return scanPunctuator();
		    }

		    function advance() {
		        var ch;

		        skipComment();

		        if (index >= length) {
		            return {
		                type: Token.EOF,
		                lineNumber: lineNumber,
		                lineStart: lineStart,
		                start: index,
		                end: index
		            };
		        }

		        ch = source.charCodeAt(index);

		        if (isIdentifierStart(ch)) {
		            return scanIdentifier();
		        }

		        // Very common: ( and ) and ;
		        if (ch === 0x28 || ch === 0x29 || ch === 0x3B) {
		            return scanPunctuator();
		        }

		        // String literal starts with single quote (U+0027) or double quote (U+0022).
		        if (ch === 0x27 || ch === 0x22) {
		            return scanStringLiteral();
		        }


		        // Dot (.) U+002E can also start a floating-point number, hence the need
		        // to check the next character.
		        if (ch === 0x2E) {
		            if (isDecimalDigit(source.charCodeAt(index + 1))) {
		                return scanNumericLiteral();
		            }
		            return scanPunctuator();
		        }

		        if (isDecimalDigit(ch)) {
		            return scanNumericLiteral();
		        }

		        // Slash (/) U+002F can also start a regex.
		        if (extra.tokenize && ch === 0x2F) {
		            return advanceSlash();
		        }

		        return scanPunctuator();
		    }

		    function collectToken() {
		        var loc, token, value;

		        skipComment();
		        loc = {
		            start: {
		                line: lineNumber,
		                column: index - lineStart
		            }
		        };

		        token = advance();
		        loc.end = {
		            line: lineNumber,
		            column: index - lineStart
		        };

		        if (token.type !== Token.EOF) {
		            value = source.slice(token.start, token.end);
		            extra.tokens.push({
		                type: TokenName[token.type],
		                value: value,
		                range: [token.start, token.end],
		                loc: loc
		            });
		        }

		        return token;
		    }

		    function lex() {
		        var token;

		        token = lookahead;
		        index = token.end;
		        lineNumber = token.lineNumber;
		        lineStart = token.lineStart;

		        lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();

		        index = token.end;
		        lineNumber = token.lineNumber;
		        lineStart = token.lineStart;

		        return token;
		    }

		    function peek() {
		        var pos, line, start;

		        pos = index;
		        line = lineNumber;
		        start = lineStart;
		        lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();
		        index = pos;
		        lineNumber = line;
		        lineStart = start;
		    }

		    function Position(line, column) {
		        this.line = line;
		        this.column = column;
		    }

		    function SourceLocation(startLine, startColumn, line, column) {
		        this.start = new Position(startLine, startColumn);
		        this.end = new Position(line, column);
		    }

		    SyntaxTreeDelegate = {

		        name: 'SyntaxTree',

		        processComment: function (node) {
		            var lastChild, trailingComments;

		            if (node.type === Syntax.Program) {
		                if (node.body.length > 0) {
		                    return;
		                }
		            }

		            if (extra.trailingComments.length > 0) {
		                if (extra.trailingComments[0].range[0] >= node.range[1]) {
		                    trailingComments = extra.trailingComments;
		                    extra.trailingComments = [];
		                } else {
		                    extra.trailingComments.length = 0;
		                }
		            } else {
		                if (extra.bottomRightStack.length > 0 &&
		                        extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments &&
		                        extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments[0].range[0] >= node.range[1]) {
		                    trailingComments = extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
		                    delete extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
		                }
		            }

		            // Eating the stack.
		            while (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].range[0] >= node.range[0]) {
		                lastChild = extra.bottomRightStack.pop();
		            }

		            if (lastChild) {
		                if (lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0]) {
		                    node.leadingComments = lastChild.leadingComments;
		                    delete lastChild.leadingComments;
		                }
		            } else if (extra.leadingComments.length > 0 && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0]) {
		                node.leadingComments = extra.leadingComments;
		                extra.leadingComments = [];
		            }


		            if (trailingComments) {
		                node.trailingComments = trailingComments;
		            }

		            extra.bottomRightStack.push(node);
		        },

		        markEnd: function (node, startToken) {
		            if (extra.range) {
		                node.range = [startToken.start, index];
		            }
		            if (extra.loc) {
		                node.loc = new SourceLocation(
		                    startToken.startLineNumber === undefined ?  startToken.lineNumber : startToken.startLineNumber,
		                    startToken.start - (startToken.startLineStart === undefined ?  startToken.lineStart : startToken.startLineStart),
		                    lineNumber,
		                    index - lineStart
		                );
		                this.postProcess(node);
		            }

		            if (extra.attachComment) {
		                this.processComment(node);
		            }
		            return node;
		        },

		        postProcess: function (node) {
		            if (extra.source) {
		                node.loc.source = extra.source;
		            }
		            return node;
		        },

		        createArrayExpression: function (elements) {
		            return {
		                type: Syntax.ArrayExpression,
		                elements: elements
		            };
		        },

		        createAssignmentExpression: function (operator, left, right) {
		            return {
		                type: Syntax.AssignmentExpression,
		                operator: operator,
		                left: left,
		                right: right
		            };
		        },

		        createBinaryExpression: function (operator, left, right) {
		            var type = (operator === '||' || operator === '&&') ? Syntax.LogicalExpression :
		                        Syntax.BinaryExpression;
		            return {
		                type: type,
		                operator: operator,
		                left: left,
		                right: right
		            };
		        },

		        createBlockStatement: function (body) {
		            return {
		                type: Syntax.BlockStatement,
		                body: body
		            };
		        },

		        createBreakStatement: function (label) {
		            return {
		                type: Syntax.BreakStatement,
		                label: label
		            };
		        },

		        createCallExpression: function (callee, args) {
		            return {
		                type: Syntax.CallExpression,
		                callee: callee,
		                'arguments': args
		            };
		        },

		        createCatchClause: function (param, body) {
		            return {
		                type: Syntax.CatchClause,
		                param: param,
		                body: body
		            };
		        },

		        createConditionalExpression: function (test, consequent, alternate) {
		            return {
		                type: Syntax.ConditionalExpression,
		                test: test,
		                consequent: consequent,
		                alternate: alternate
		            };
		        },

		        createContinueStatement: function (label) {
		            return {
		                type: Syntax.ContinueStatement,
		                label: label
		            };
		        },

		        createDebuggerStatement: function () {
		            return {
		                type: Syntax.DebuggerStatement
		            };
		        },

		        createDoWhileStatement: function (body, test) {
		            return {
		                type: Syntax.DoWhileStatement,
		                body: body,
		                test: test
		            };
		        },

		        createEmptyStatement: function () {
		            return {
		                type: Syntax.EmptyStatement
		            };
		        },

		        createExpressionStatement: function (expression) {
		            return {
		                type: Syntax.ExpressionStatement,
		                expression: expression
		            };
		        },

		        createForStatement: function (init, test, update, body) {
		            return {
		                type: Syntax.ForStatement,
		                init: init,
		                test: test,
		                update: update,
		                body: body
		            };
		        },

		        createForInStatement: function (left, right, body) {
		            return {
		                type: Syntax.ForInStatement,
		                left: left,
		                right: right,
		                body: body,
		                each: false
		            };
		        },

		        createFunctionDeclaration: function (id, params, defaults, body) {
		            return {
		                type: Syntax.FunctionDeclaration,
		                id: id,
		                params: params,
		                defaults: defaults,
		                body: body,
		                rest: null,
		                generator: false,
		                expression: false
		            };
		        },

		        createFunctionExpression: function (id, params, defaults, body) {
		            return {
		                type: Syntax.FunctionExpression,
		                id: id,
		                params: params,
		                defaults: defaults,
		                body: body,
		                rest: null,
		                generator: false,
		                expression: false
		            };
		        },

		        createIdentifier: function (name) {
		            return {
		                type: Syntax.Identifier,
		                name: name
		            };
		        },

		        createIfStatement: function (test, consequent, alternate) {
		            return {
		                type: Syntax.IfStatement,
		                test: test,
		                consequent: consequent,
		                alternate: alternate
		            };
		        },

		        createLabeledStatement: function (label, body) {
		            return {
		                type: Syntax.LabeledStatement,
		                label: label,
		                body: body
		            };
		        },

		        createLiteral: function (token) {
		            return {
		                type: Syntax.Literal,
		                value: token.value,
		                raw: source.slice(token.start, token.end)
		            };
		        },

		        createMemberExpression: function (accessor, object, property) {
		            return {
		                type: Syntax.MemberExpression,
		                computed: accessor === '[',
		                object: object,
		                property: property
		            };
		        },

		        createNewExpression: function (callee, args) {
		            return {
		                type: Syntax.NewExpression,
		                callee: callee,
		                'arguments': args
		            };
		        },

		        createObjectExpression: function (properties) {
		            return {
		                type: Syntax.ObjectExpression,
		                properties: properties
		            };
		        },

		        createPostfixExpression: function (operator, argument) {
		            return {
		                type: Syntax.UpdateExpression,
		                operator: operator,
		                argument: argument,
		                prefix: false
		            };
		        },

		        createProgram: function (body) {
		            return {
		                type: Syntax.Program,
		                body: body
		            };
		        },

		        createProperty: function (kind, key, value) {
		            return {
		                type: Syntax.Property,
		                key: key,
		                value: value,
		                kind: kind
		            };
		        },

		        createReturnStatement: function (argument) {
		            return {
		                type: Syntax.ReturnStatement,
		                argument: argument
		            };
		        },

		        createSequenceExpression: function (expressions) {
		            return {
		                type: Syntax.SequenceExpression,
		                expressions: expressions
		            };
		        },

		        createSwitchCase: function (test, consequent) {
		            return {
		                type: Syntax.SwitchCase,
		                test: test,
		                consequent: consequent
		            };
		        },

		        createSwitchStatement: function (discriminant, cases) {
		            return {
		                type: Syntax.SwitchStatement,
		                discriminant: discriminant,
		                cases: cases
		            };
		        },

		        createThisExpression: function () {
		            return {
		                type: Syntax.ThisExpression
		            };
		        },

		        createThrowStatement: function (argument) {
		            return {
		                type: Syntax.ThrowStatement,
		                argument: argument
		            };
		        },

		        createTryStatement: function (block, guardedHandlers, handlers, finalizer) {
		            return {
		                type: Syntax.TryStatement,
		                block: block,
		                guardedHandlers: guardedHandlers,
		                handlers: handlers,
		                finalizer: finalizer
		            };
		        },

		        createUnaryExpression: function (operator, argument) {
		            if (operator === '++' || operator === '--') {
		                return {
		                    type: Syntax.UpdateExpression,
		                    operator: operator,
		                    argument: argument,
		                    prefix: true
		                };
		            }
		            return {
		                type: Syntax.UnaryExpression,
		                operator: operator,
		                argument: argument,
		                prefix: true
		            };
		        },

		        createVariableDeclaration: function (declarations, kind) {
		            return {
		                type: Syntax.VariableDeclaration,
		                declarations: declarations,
		                kind: kind
		            };
		        },

		        createVariableDeclarator: function (id, init) {
		            return {
		                type: Syntax.VariableDeclarator,
		                id: id,
		                init: init
		            };
		        },

		        createWhileStatement: function (test, body) {
		            return {
		                type: Syntax.WhileStatement,
		                test: test,
		                body: body
		            };
		        },

		        createWithStatement: function (object, body) {
		            return {
		                type: Syntax.WithStatement,
		                object: object,
		                body: body
		            };
		        }
		    };

		    // Return true if there is a line terminator before the next token.

		    function peekLineTerminator() {
		        var pos, line, start, found;

		        pos = index;
		        line = lineNumber;
		        start = lineStart;
		        skipComment();
		        found = lineNumber !== line;
		        index = pos;
		        lineNumber = line;
		        lineStart = start;

		        return found;
		    }

		    // Throw an exception

		    function throwError(token, messageFormat) {
		        var error,
		            args = Array.prototype.slice.call(arguments, 2),
		            msg = messageFormat.replace(
		                /%(\d)/g,
		                function (whole, index) {
		                    assert(index < args.length, 'Message reference must be in range');
		                    return args[index];
		                }
		            );

		        if (typeof token.lineNumber === 'number') {
		            error = new Error('Line ' + token.lineNumber + ': ' + msg);
		            error.index = token.start;
		            error.lineNumber = token.lineNumber;
		            error.column = token.start - lineStart + 1;
		        } else {
		            error = new Error('Line ' + lineNumber + ': ' + msg);
		            error.index = index;
		            error.lineNumber = lineNumber;
		            error.column = index - lineStart + 1;
		        }

		        error.description = msg;
		        throw error;
		    }

		    function throwErrorTolerant() {
		        try {
		            throwError.apply(null, arguments);
		        } catch (e) {
		            if (extra.errors) {
		                extra.errors.push(e);
		            } else {
		                throw e;
		            }
		        }
		    }


		    // Throw an exception because of the token.

		    function throwUnexpected(token) {
		        if (token.type === Token.EOF) {
		            throwError(token, Messages.UnexpectedEOS);
		        }

		        if (token.type === Token.NumericLiteral) {
		            throwError(token, Messages.UnexpectedNumber);
		        }

		        if (token.type === Token.StringLiteral) {
		            throwError(token, Messages.UnexpectedString);
		        }

		        if (token.type === Token.Identifier) {
		            throwError(token, Messages.UnexpectedIdentifier);
		        }

		        if (token.type === Token.Keyword) {
		            if (isFutureReservedWord(token.value)) {
		                throwError(token, Messages.UnexpectedReserved);
		            } else if (strict && isStrictModeReservedWord(token.value)) {
		                throwErrorTolerant(token, Messages.StrictReservedWord);
		                return;
		            }
		            throwError(token, Messages.UnexpectedToken, token.value);
		        }

		        // BooleanLiteral, NullLiteral, or Punctuator.
		        throwError(token, Messages.UnexpectedToken, token.value);
		    }

		    // Expect the next token to match the specified punctuator.
		    // If not, an exception will be thrown.

		    function expect(value) {
		        var token = lex();
		        if (token.type !== Token.Punctuator || token.value !== value) {
		            throwUnexpected(token);
		        }
		    }

		    // Expect the next token to match the specified keyword.
		    // If not, an exception will be thrown.

		    function expectKeyword(keyword) {
		        var token = lex();
		        if (token.type !== Token.Keyword || token.value !== keyword) {
		            throwUnexpected(token);
		        }
		    }

		    // Return true if the next token matches the specified punctuator.

		    function match(value) {
		        return lookahead.type === Token.Punctuator && lookahead.value === value;
		    }

		    // Return true if the next token matches the specified keyword

		    function matchKeyword(keyword) {
		        return lookahead.type === Token.Keyword && lookahead.value === keyword;
		    }

		    // Return true if the next token is an assignment operator

		    function matchAssign() {
		        var op;

		        if (lookahead.type !== Token.Punctuator) {
		            return false;
		        }
		        op = lookahead.value;
		        return op === '=' ||
		            op === '*=' ||
		            op === '/=' ||
		            op === '%=' ||
		            op === '+=' ||
		            op === '-=' ||
		            op === '<<=' ||
		            op === '>>=' ||
		            op === '>>>=' ||
		            op === '&=' ||
		            op === '^=' ||
		            op === '|=';
		    }

		    function consumeSemicolon() {
		        var line;

		        // Catch the very common case first: immediately a semicolon (U+003B).
		        if (source.charCodeAt(index) === 0x3B || match(';')) {
		            lex();
		            return;
		        }

		        line = lineNumber;
		        skipComment();
		        if (lineNumber !== line) {
		            return;
		        }

		        if (lookahead.type !== Token.EOF && !match('}')) {
		            throwUnexpected(lookahead);
		        }
		    }

		    // Return true if provided expression is LeftHandSideExpression

		    function isLeftHandSide(expr) {
		        return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
		    }

		    // 11.1.4 Array Initialiser

		    function parseArrayInitialiser() {
		        var elements = [], startToken;

		        startToken = lookahead;
		        expect('[');

		        while (!match(']')) {
		            if (match(',')) {
		                lex();
		                elements.push(null);
		            } else {
		                elements.push(parseAssignmentExpression());

		                if (!match(']')) {
		                    expect(',');
		                }
		            }
		        }

		        lex();

		        return delegate.markEnd(delegate.createArrayExpression(elements), startToken);
		    }

		    // 11.1.5 Object Initialiser

		    function parsePropertyFunction(param, first) {
		        var previousStrict, body, startToken;

		        previousStrict = strict;
		        startToken = lookahead;
		        body = parseFunctionSourceElements();
		        if (first && strict && isRestrictedWord(param[0].name)) {
		            throwErrorTolerant(first, Messages.StrictParamName);
		        }
		        strict = previousStrict;
		        return delegate.markEnd(delegate.createFunctionExpression(null, param, [], body), startToken);
		    }

		    function parseObjectPropertyKey() {
		        var token, startToken;

		        startToken = lookahead;
		        token = lex();

		        // Note: This function is called only from parseObjectProperty(), where
		        // EOF and Punctuator tokens are already filtered out.

		        if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
		            if (strict && token.octal) {
		                throwErrorTolerant(token, Messages.StrictOctalLiteral);
		            }
		            return delegate.markEnd(delegate.createLiteral(token), startToken);
		        }

		        return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
		    }

		    function parseObjectProperty() {
		        var token, key, id, value, param, startToken;

		        token = lookahead;
		        startToken = lookahead;

		        if (token.type === Token.Identifier) {

		            id = parseObjectPropertyKey();

		            // Property Assignment: Getter and Setter.

		            if (token.value === 'get' && !match(':')) {
		                key = parseObjectPropertyKey();
		                expect('(');
		                expect(')');
		                value = parsePropertyFunction([]);
		                return delegate.markEnd(delegate.createProperty('get', key, value), startToken);
		            }
		            if (token.value === 'set' && !match(':')) {
		                key = parseObjectPropertyKey();
		                expect('(');
		                token = lookahead;
		                if (token.type !== Token.Identifier) {
		                    expect(')');
		                    throwErrorTolerant(token, Messages.UnexpectedToken, token.value);
		                    value = parsePropertyFunction([]);
		                } else {
		                    param = [ parseVariableIdentifier() ];
		                    expect(')');
		                    value = parsePropertyFunction(param, token);
		                }
		                return delegate.markEnd(delegate.createProperty('set', key, value), startToken);
		            }
		            expect(':');
		            value = parseAssignmentExpression();
		            return delegate.markEnd(delegate.createProperty('init', id, value), startToken);
		        }
		        if (token.type === Token.EOF || token.type === Token.Punctuator) {
		            throwUnexpected(token);
		        } else {
		            key = parseObjectPropertyKey();
		            expect(':');
		            value = parseAssignmentExpression();
		            return delegate.markEnd(delegate.createProperty('init', key, value), startToken);
		        }
		    }

		    function parseObjectInitialiser() {
		        var properties = [], property, name, key, kind, map = {}, toString = String, startToken;

		        startToken = lookahead;

		        expect('{');

		        while (!match('}')) {
		            property = parseObjectProperty();

		            if (property.key.type === Syntax.Identifier) {
		                name = property.key.name;
		            } else {
		                name = toString(property.key.value);
		            }
		            kind = (property.kind === 'init') ? PropertyKind.Data : (property.kind === 'get') ? PropertyKind.Get : PropertyKind.Set;

		            key = '$' + name;
		            if (Object.prototype.hasOwnProperty.call(map, key)) {
		                if (map[key] === PropertyKind.Data) {
		                    if (strict && kind === PropertyKind.Data) {
		                        throwErrorTolerant({}, Messages.StrictDuplicateProperty);
		                    } else if (kind !== PropertyKind.Data) {
		                        throwErrorTolerant({}, Messages.AccessorDataProperty);
		                    }
		                } else {
		                    if (kind === PropertyKind.Data) {
		                        throwErrorTolerant({}, Messages.AccessorDataProperty);
		                    } else if (map[key] & kind) {
		                        throwErrorTolerant({}, Messages.AccessorGetSet);
		                    }
		                }
		                map[key] |= kind;
		            } else {
		                map[key] = kind;
		            }

		            properties.push(property);

		            if (!match('}')) {
		                expect(',');
		            }
		        }

		        expect('}');

		        return delegate.markEnd(delegate.createObjectExpression(properties), startToken);
		    }

		    // 11.1.6 The Grouping Operator

		    function parseGroupExpression() {
		        var expr;

		        expect('(');

		        expr = parseExpression();

		        expect(')');

		        return expr;
		    }


		    // 11.1 Primary Expressions

		    function parsePrimaryExpression() {
		        var type, token, expr, startToken;

		        if (match('(')) {
		            return parseGroupExpression();
		        }

		        if (match('[')) {
		            return parseArrayInitialiser();
		        }

		        if (match('{')) {
		            return parseObjectInitialiser();
		        }

		        type = lookahead.type;
		        startToken = lookahead;

		        if (type === Token.Identifier) {
		            expr =  delegate.createIdentifier(lex().value);
		        } else if (type === Token.StringLiteral || type === Token.NumericLiteral) {
		            if (strict && lookahead.octal) {
		                throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
		            }
		            expr = delegate.createLiteral(lex());
		        } else if (type === Token.Keyword) {
		            if (matchKeyword('function')) {
		                return parseFunctionExpression();
		            }
		            if (matchKeyword('this')) {
		                lex();
		                expr = delegate.createThisExpression();
		            } else {
		                throwUnexpected(lex());
		            }
		        } else if (type === Token.BooleanLiteral) {
		            token = lex();
		            token.value = (token.value === 'true');
		            expr = delegate.createLiteral(token);
		        } else if (type === Token.NullLiteral) {
		            token = lex();
		            token.value = null;
		            expr = delegate.createLiteral(token);
		        } else if (match('/') || match('/=')) {
		            if (typeof extra.tokens !== 'undefined') {
		                expr = delegate.createLiteral(collectRegex());
		            } else {
		                expr = delegate.createLiteral(scanRegExp());
		            }
		            peek();
		        } else {
		            throwUnexpected(lex());
		        }

		        return delegate.markEnd(expr, startToken);
		    }

		    // 11.2 Left-Hand-Side Expressions

		    function parseArguments() {
		        var args = [];

		        expect('(');

		        if (!match(')')) {
		            while (index < length) {
		                args.push(parseAssignmentExpression());
		                if (match(')')) {
		                    break;
		                }
		                expect(',');
		            }
		        }

		        expect(')');

		        return args;
		    }

		    function parseNonComputedProperty() {
		        var token, startToken;

		        startToken = lookahead;
		        token = lex();

		        if (!isIdentifierName(token)) {
		            throwUnexpected(token);
		        }

		        return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
		    }

		    function parseNonComputedMember() {
		        expect('.');

		        return parseNonComputedProperty();
		    }

		    function parseComputedMember() {
		        var expr;

		        expect('[');

		        expr = parseExpression();

		        expect(']');

		        return expr;
		    }

		    function parseNewExpression() {
		        var callee, args, startToken;

		        startToken = lookahead;
		        expectKeyword('new');
		        callee = parseLeftHandSideExpression();
		        args = match('(') ? parseArguments() : [];

		        return delegate.markEnd(delegate.createNewExpression(callee, args), startToken);
		    }

		    function parseLeftHandSideExpressionAllowCall() {
		        var previousAllowIn, expr, args, property, startToken;

		        startToken = lookahead;

		        previousAllowIn = state.allowIn;
		        state.allowIn = true;
		        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
		        state.allowIn = previousAllowIn;

		        for (;;) {
		            if (match('.')) {
		                property = parseNonComputedMember();
		                expr = delegate.createMemberExpression('.', expr, property);
		            } else if (match('(')) {
		                args = parseArguments();
		                expr = delegate.createCallExpression(expr, args);
		            } else if (match('[')) {
		                property = parseComputedMember();
		                expr = delegate.createMemberExpression('[', expr, property);
		            } else {
		                break;
		            }
		            delegate.markEnd(expr, startToken);
		        }

		        return expr;
		    }

		    function parseLeftHandSideExpression() {
		        var previousAllowIn, expr, property, startToken;

		        startToken = lookahead;

		        previousAllowIn = state.allowIn;
		        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
		        state.allowIn = previousAllowIn;

		        while (match('.') || match('[')) {
		            if (match('[')) {
		                property = parseComputedMember();
		                expr = delegate.createMemberExpression('[', expr, property);
		            } else {
		                property = parseNonComputedMember();
		                expr = delegate.createMemberExpression('.', expr, property);
		            }
		            delegate.markEnd(expr, startToken);
		        }

		        return expr;
		    }

		    // 11.3 Postfix Expressions

		    function parsePostfixExpression() {
		        var expr, token, startToken = lookahead;

		        expr = parseLeftHandSideExpressionAllowCall();

		        if (lookahead.type === Token.Punctuator) {
		            if ((match('++') || match('--')) && !peekLineTerminator()) {
		                // 11.3.1, 11.3.2
		                if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
		                    throwErrorTolerant({}, Messages.StrictLHSPostfix);
		                }

		                if (!isLeftHandSide(expr)) {
		                    throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
		                }

		                token = lex();
		                expr = delegate.markEnd(delegate.createPostfixExpression(token.value, expr), startToken);
		            }
		        }

		        return expr;
		    }

		    // 11.4 Unary Operators

		    function parseUnaryExpression() {
		        var token, expr, startToken;

		        if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
		            expr = parsePostfixExpression();
		        } else if (match('++') || match('--')) {
		            startToken = lookahead;
		            token = lex();
		            expr = parseUnaryExpression();
		            // 11.4.4, 11.4.5
		            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
		                throwErrorTolerant({}, Messages.StrictLHSPrefix);
		            }

		            if (!isLeftHandSide(expr)) {
		                throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
		            }

		            expr = delegate.createUnaryExpression(token.value, expr);
		            expr = delegate.markEnd(expr, startToken);
		        } else if (match('+') || match('-') || match('~') || match('!')) {
		            startToken = lookahead;
		            token = lex();
		            expr = parseUnaryExpression();
		            expr = delegate.createUnaryExpression(token.value, expr);
		            expr = delegate.markEnd(expr, startToken);
		        } else if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
		            startToken = lookahead;
		            token = lex();
		            expr = parseUnaryExpression();
		            expr = delegate.createUnaryExpression(token.value, expr);
		            expr = delegate.markEnd(expr, startToken);
		            if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
		                throwErrorTolerant({}, Messages.StrictDelete);
		            }
		        } else {
		            expr = parsePostfixExpression();
		        }

		        return expr;
		    }

		    function binaryPrecedence(token, allowIn) {
		        var prec = 0;

		        if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
		            return 0;
		        }

		        switch (token.value) {
		        case '||':
		            prec = 1;
		            break;

		        case '&&':
		            prec = 2;
		            break;

		        case '|':
		            prec = 3;
		            break;

		        case '^':
		            prec = 4;
		            break;

		        case '&':
		            prec = 5;
		            break;

		        case '==':
		        case '!=':
		        case '===':
		        case '!==':
		            prec = 6;
		            break;

		        case '<':
		        case '>':
		        case '<=':
		        case '>=':
		        case 'instanceof':
		            prec = 7;
		            break;

		        case 'in':
		            prec = allowIn ? 7 : 0;
		            break;

		        case '<<':
		        case '>>':
		        case '>>>':
		            prec = 8;
		            break;

		        case '+':
		        case '-':
		            prec = 9;
		            break;

		        case '*':
		        case '/':
		        case '%':
		            prec = 11;
		            break;
		        }

		        return prec;
		    }

		    // 11.5 Multiplicative Operators
		    // 11.6 Additive Operators
		    // 11.7 Bitwise Shift Operators
		    // 11.8 Relational Operators
		    // 11.9 Equality Operators
		    // 11.10 Binary Bitwise Operators
		    // 11.11 Binary Logical Operators

		    function parseBinaryExpression() {
		        var marker, markers, expr, token, prec, stack, right, operator, left, i;

		        marker = lookahead;
		        left = parseUnaryExpression();

		        token = lookahead;
		        prec = binaryPrecedence(token, state.allowIn);
		        if (prec === 0) {
		            return left;
		        }
		        token.prec = prec;
		        lex();

		        markers = [marker, lookahead];
		        right = parseUnaryExpression();

		        stack = [left, token, right];

		        while ((prec = binaryPrecedence(lookahead, state.allowIn)) > 0) {

		            // Reduce: make a binary expression from the three topmost entries.
		            while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
		                right = stack.pop();
		                operator = stack.pop().value;
		                left = stack.pop();
		                expr = delegate.createBinaryExpression(operator, left, right);
		                markers.pop();
		                marker = markers[markers.length - 1];
		                delegate.markEnd(expr, marker);
		                stack.push(expr);
		            }

		            // Shift.
		            token = lex();
		            token.prec = prec;
		            stack.push(token);
		            markers.push(lookahead);
		            expr = parseUnaryExpression();
		            stack.push(expr);
		        }

		        // Final reduce to clean-up the stack.
		        i = stack.length - 1;
		        expr = stack[i];
		        markers.pop();
		        while (i > 1) {
		            expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
		            i -= 2;
		            marker = markers.pop();
		            delegate.markEnd(expr, marker);
		        }

		        return expr;
		    }


		    // 11.12 Conditional Operator

		    function parseConditionalExpression() {
		        var expr, previousAllowIn, consequent, alternate, startToken;

		        startToken = lookahead;

		        expr = parseBinaryExpression();

		        if (match('?')) {
		            lex();
		            previousAllowIn = state.allowIn;
		            state.allowIn = true;
		            consequent = parseAssignmentExpression();
		            state.allowIn = previousAllowIn;
		            expect(':');
		            alternate = parseAssignmentExpression();

		            expr = delegate.createConditionalExpression(expr, consequent, alternate);
		            delegate.markEnd(expr, startToken);
		        }

		        return expr;
		    }

		    // 11.13 Assignment Operators

		    function parseAssignmentExpression() {
		        var token, left, right, node, startToken;

		        token = lookahead;
		        startToken = lookahead;

		        node = left = parseConditionalExpression();

		        if (matchAssign()) {
		            // LeftHandSideExpression
		            if (!isLeftHandSide(left)) {
		                throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
		            }

		            // 11.13.1
		            if (strict && left.type === Syntax.Identifier && isRestrictedWord(left.name)) {
		                throwErrorTolerant(token, Messages.StrictLHSAssignment);
		            }

		            token = lex();
		            right = parseAssignmentExpression();
		            node = delegate.markEnd(delegate.createAssignmentExpression(token.value, left, right), startToken);
		        }

		        return node;
		    }

		    // 11.14 Comma Operator

		    function parseExpression() {
		        var expr, startToken = lookahead;

		        expr = parseAssignmentExpression();

		        if (match(',')) {
		            expr = delegate.createSequenceExpression([ expr ]);

		            while (index < length) {
		                if (!match(',')) {
		                    break;
		                }
		                lex();
		                expr.expressions.push(parseAssignmentExpression());
		            }

		            delegate.markEnd(expr, startToken);
		        }

		        return expr;
		    }

		    // 12.1 Block

		    function parseStatementList() {
		        var list = [],
		            statement;

		        while (index < length) {
		            if (match('}')) {
		                break;
		            }
		            statement = parseSourceElement();
		            if (typeof statement === 'undefined') {
		                break;
		            }
		            list.push(statement);
		        }

		        return list;
		    }

		    function parseBlock() {
		        var block, startToken;

		        startToken = lookahead;
		        expect('{');

		        block = parseStatementList();

		        expect('}');

		        return delegate.markEnd(delegate.createBlockStatement(block), startToken);
		    }

		    // 12.2 Variable Statement

		    function parseVariableIdentifier() {
		        var token, startToken;

		        startToken = lookahead;
		        token = lex();

		        if (token.type !== Token.Identifier) {
		            throwUnexpected(token);
		        }

		        return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
		    }

		    function parseVariableDeclaration(kind) {
		        var init = null, id, startToken;

		        startToken = lookahead;
		        id = parseVariableIdentifier();

		        // 12.2.1
		        if (strict && isRestrictedWord(id.name)) {
		            throwErrorTolerant({}, Messages.StrictVarName);
		        }

		        if (kind === 'const') {
		            expect('=');
		            init = parseAssignmentExpression();
		        } else if (match('=')) {
		            lex();
		            init = parseAssignmentExpression();
		        }

		        return delegate.markEnd(delegate.createVariableDeclarator(id, init), startToken);
		    }

		    function parseVariableDeclarationList(kind) {
		        var list = [];

		        do {
		            list.push(parseVariableDeclaration(kind));
		            if (!match(',')) {
		                break;
		            }
		            lex();
		        } while (index < length);

		        return list;
		    }

		    function parseVariableStatement() {
		        var declarations;

		        expectKeyword('var');

		        declarations = parseVariableDeclarationList();

		        consumeSemicolon();

		        return delegate.createVariableDeclaration(declarations, 'var');
		    }

		    // kind may be `const` or `let`
		    // Both are experimental and not in the specification yet.
		    // see http://wiki.ecmascript.org/doku.php?id=harmony:const
		    // and http://wiki.ecmascript.org/doku.php?id=harmony:let
		    function parseConstLetDeclaration(kind) {
		        var declarations, startToken;

		        startToken = lookahead;

		        expectKeyword(kind);

		        declarations = parseVariableDeclarationList(kind);

		        consumeSemicolon();

		        return delegate.markEnd(delegate.createVariableDeclaration(declarations, kind), startToken);
		    }

		    // 12.3 Empty Statement

		    function parseEmptyStatement() {
		        expect(';');
		        return delegate.createEmptyStatement();
		    }

		    // 12.4 Expression Statement

		    function parseExpressionStatement() {
		        var expr = parseExpression();
		        consumeSemicolon();
		        return delegate.createExpressionStatement(expr);
		    }

		    // 12.5 If statement

		    function parseIfStatement() {
		        var test, consequent, alternate;

		        expectKeyword('if');

		        expect('(');

		        test = parseExpression();

		        expect(')');

		        consequent = parseStatement();

		        if (matchKeyword('else')) {
		            lex();
		            alternate = parseStatement();
		        } else {
		            alternate = null;
		        }

		        return delegate.createIfStatement(test, consequent, alternate);
		    }

		    // 12.6 Iteration Statements

		    function parseDoWhileStatement() {
		        var body, test, oldInIteration;

		        expectKeyword('do');

		        oldInIteration = state.inIteration;
		        state.inIteration = true;

		        body = parseStatement();

		        state.inIteration = oldInIteration;

		        expectKeyword('while');

		        expect('(');

		        test = parseExpression();

		        expect(')');

		        if (match(';')) {
		            lex();
		        }

		        return delegate.createDoWhileStatement(body, test);
		    }

		    function parseWhileStatement() {
		        var test, body, oldInIteration;

		        expectKeyword('while');

		        expect('(');

		        test = parseExpression();

		        expect(')');

		        oldInIteration = state.inIteration;
		        state.inIteration = true;

		        body = parseStatement();

		        state.inIteration = oldInIteration;

		        return delegate.createWhileStatement(test, body);
		    }

		    function parseForVariableDeclaration() {
		        var token, declarations, startToken;

		        startToken = lookahead;
		        token = lex();
		        declarations = parseVariableDeclarationList();

		        return delegate.markEnd(delegate.createVariableDeclaration(declarations, token.value), startToken);
		    }

		    function parseForStatement() {
		        var init, test, update, left, right, body, oldInIteration;

		        init = test = update = null;

		        expectKeyword('for');

		        expect('(');

		        if (match(';')) {
		            lex();
		        } else {
		            if (matchKeyword('var') || matchKeyword('let')) {
		                state.allowIn = false;
		                init = parseForVariableDeclaration();
		                state.allowIn = true;

		                if (init.declarations.length === 1 && matchKeyword('in')) {
		                    lex();
		                    left = init;
		                    right = parseExpression();
		                    init = null;
		                }
		            } else {
		                state.allowIn = false;
		                init = parseExpression();
		                state.allowIn = true;

		                if (matchKeyword('in')) {
		                    // LeftHandSideExpression
		                    if (!isLeftHandSide(init)) {
		                        throwErrorTolerant({}, Messages.InvalidLHSInForIn);
		                    }

		                    lex();
		                    left = init;
		                    right = parseExpression();
		                    init = null;
		                }
		            }

		            if (typeof left === 'undefined') {
		                expect(';');
		            }
		        }

		        if (typeof left === 'undefined') {

		            if (!match(';')) {
		                test = parseExpression();
		            }
		            expect(';');

		            if (!match(')')) {
		                update = parseExpression();
		            }
		        }

		        expect(')');

		        oldInIteration = state.inIteration;
		        state.inIteration = true;

		        body = parseStatement();

		        state.inIteration = oldInIteration;

		        return (typeof left === 'undefined') ?
		                delegate.createForStatement(init, test, update, body) :
		                delegate.createForInStatement(left, right, body);
		    }

		    // 12.7 The continue statement

		    function parseContinueStatement() {
		        var label = null, key;

		        expectKeyword('continue');

		        // Optimize the most common form: 'continue;'.
		        if (source.charCodeAt(index) === 0x3B) {
		            lex();

		            if (!state.inIteration) {
		                throwError({}, Messages.IllegalContinue);
		            }

		            return delegate.createContinueStatement(null);
		        }

		        if (peekLineTerminator()) {
		            if (!state.inIteration) {
		                throwError({}, Messages.IllegalContinue);
		            }

		            return delegate.createContinueStatement(null);
		        }

		        if (lookahead.type === Token.Identifier) {
		            label = parseVariableIdentifier();

		            key = '$' + label.name;
		            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
		                throwError({}, Messages.UnknownLabel, label.name);
		            }
		        }

		        consumeSemicolon();

		        if (label === null && !state.inIteration) {
		            throwError({}, Messages.IllegalContinue);
		        }

		        return delegate.createContinueStatement(label);
		    }

		    // 12.8 The break statement

		    function parseBreakStatement() {
		        var label = null, key;

		        expectKeyword('break');

		        // Catch the very common case first: immediately a semicolon (U+003B).
		        if (source.charCodeAt(index) === 0x3B) {
		            lex();

		            if (!(state.inIteration || state.inSwitch)) {
		                throwError({}, Messages.IllegalBreak);
		            }

		            return delegate.createBreakStatement(null);
		        }

		        if (peekLineTerminator()) {
		            if (!(state.inIteration || state.inSwitch)) {
		                throwError({}, Messages.IllegalBreak);
		            }

		            return delegate.createBreakStatement(null);
		        }

		        if (lookahead.type === Token.Identifier) {
		            label = parseVariableIdentifier();

		            key = '$' + label.name;
		            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
		                throwError({}, Messages.UnknownLabel, label.name);
		            }
		        }

		        consumeSemicolon();

		        if (label === null && !(state.inIteration || state.inSwitch)) {
		            throwError({}, Messages.IllegalBreak);
		        }

		        return delegate.createBreakStatement(label);
		    }

		    // 12.9 The return statement

		    function parseReturnStatement() {
		        var argument = null;

		        expectKeyword('return');

		        if (!state.inFunctionBody) {
		            throwErrorTolerant({}, Messages.IllegalReturn);
		        }

		        // 'return' followed by a space and an identifier is very common.
		        if (source.charCodeAt(index) === 0x20) {
		            if (isIdentifierStart(source.charCodeAt(index + 1))) {
		                argument = parseExpression();
		                consumeSemicolon();
		                return delegate.createReturnStatement(argument);
		            }
		        }

		        if (peekLineTerminator()) {
		            return delegate.createReturnStatement(null);
		        }

		        if (!match(';')) {
		            if (!match('}') && lookahead.type !== Token.EOF) {
		                argument = parseExpression();
		            }
		        }

		        consumeSemicolon();

		        return delegate.createReturnStatement(argument);
		    }

		    // 12.10 The with statement

		    function parseWithStatement() {
		        var object, body;

		        if (strict) {
		            // TODO(ikarienator): Should we update the test cases instead?
		            skipComment();
		            throwErrorTolerant({}, Messages.StrictModeWith);
		        }

		        expectKeyword('with');

		        expect('(');

		        object = parseExpression();

		        expect(')');

		        body = parseStatement();

		        return delegate.createWithStatement(object, body);
		    }

		    // 12.10 The swith statement

		    function parseSwitchCase() {
		        var test, consequent = [], statement, startToken;

		        startToken = lookahead;
		        if (matchKeyword('default')) {
		            lex();
		            test = null;
		        } else {
		            expectKeyword('case');
		            test = parseExpression();
		        }
		        expect(':');

		        while (index < length) {
		            if (match('}') || matchKeyword('default') || matchKeyword('case')) {
		                break;
		            }
		            statement = parseStatement();
		            consequent.push(statement);
		        }

		        return delegate.markEnd(delegate.createSwitchCase(test, consequent), startToken);
		    }

		    function parseSwitchStatement() {
		        var discriminant, cases, clause, oldInSwitch, defaultFound;

		        expectKeyword('switch');

		        expect('(');

		        discriminant = parseExpression();

		        expect(')');

		        expect('{');

		        cases = [];

		        if (match('}')) {
		            lex();
		            return delegate.createSwitchStatement(discriminant, cases);
		        }

		        oldInSwitch = state.inSwitch;
		        state.inSwitch = true;
		        defaultFound = false;

		        while (index < length) {
		            if (match('}')) {
		                break;
		            }
		            clause = parseSwitchCase();
		            if (clause.test === null) {
		                if (defaultFound) {
		                    throwError({}, Messages.MultipleDefaultsInSwitch);
		                }
		                defaultFound = true;
		            }
		            cases.push(clause);
		        }

		        state.inSwitch = oldInSwitch;

		        expect('}');

		        return delegate.createSwitchStatement(discriminant, cases);
		    }

		    // 12.13 The throw statement

		    function parseThrowStatement() {
		        var argument;

		        expectKeyword('throw');

		        if (peekLineTerminator()) {
		            throwError({}, Messages.NewlineAfterThrow);
		        }

		        argument = parseExpression();

		        consumeSemicolon();

		        return delegate.createThrowStatement(argument);
		    }

		    // 12.14 The try statement

		    function parseCatchClause() {
		        var param, body, startToken;

		        startToken = lookahead;
		        expectKeyword('catch');

		        expect('(');
		        if (match(')')) {
		            throwUnexpected(lookahead);
		        }

		        param = parseVariableIdentifier();
		        // 12.14.1
		        if (strict && isRestrictedWord(param.name)) {
		            throwErrorTolerant({}, Messages.StrictCatchVariable);
		        }

		        expect(')');
		        body = parseBlock();
		        return delegate.markEnd(delegate.createCatchClause(param, body), startToken);
		    }

		    function parseTryStatement() {
		        var block, handlers = [], finalizer = null;

		        expectKeyword('try');

		        block = parseBlock();

		        if (matchKeyword('catch')) {
		            handlers.push(parseCatchClause());
		        }

		        if (matchKeyword('finally')) {
		            lex();
		            finalizer = parseBlock();
		        }

		        if (handlers.length === 0 && !finalizer) {
		            throwError({}, Messages.NoCatchOrFinally);
		        }

		        return delegate.createTryStatement(block, [], handlers, finalizer);
		    }

		    // 12.15 The debugger statement

		    function parseDebuggerStatement() {
		        expectKeyword('debugger');

		        consumeSemicolon();

		        return delegate.createDebuggerStatement();
		    }

		    // 12 Statements

		    function parseStatement() {
		        var type = lookahead.type,
		            expr,
		            labeledBody,
		            key,
		            startToken;

		        if (type === Token.EOF) {
		            throwUnexpected(lookahead);
		        }

		        if (type === Token.Punctuator && lookahead.value === '{') {
		            return parseBlock();
		        }

		        startToken = lookahead;

		        if (type === Token.Punctuator) {
		            switch (lookahead.value) {
		            case ';':
		                return delegate.markEnd(parseEmptyStatement(), startToken);
		            case '(':
		                return delegate.markEnd(parseExpressionStatement(), startToken);
		            }
		        }

		        if (type === Token.Keyword) {
		            switch (lookahead.value) {
		            case 'break':
		                return delegate.markEnd(parseBreakStatement(), startToken);
		            case 'continue':
		                return delegate.markEnd(parseContinueStatement(), startToken);
		            case 'debugger':
		                return delegate.markEnd(parseDebuggerStatement(), startToken);
		            case 'do':
		                return delegate.markEnd(parseDoWhileStatement(), startToken);
		            case 'for':
		                return delegate.markEnd(parseForStatement(), startToken);
		            case 'function':
		                return delegate.markEnd(parseFunctionDeclaration(), startToken);
		            case 'if':
		                return delegate.markEnd(parseIfStatement(), startToken);
		            case 'return':
		                return delegate.markEnd(parseReturnStatement(), startToken);
		            case 'switch':
		                return delegate.markEnd(parseSwitchStatement(), startToken);
		            case 'throw':
		                return delegate.markEnd(parseThrowStatement(), startToken);
		            case 'try':
		                return delegate.markEnd(parseTryStatement(), startToken);
		            case 'var':
		                return delegate.markEnd(parseVariableStatement(), startToken);
		            case 'while':
		                return delegate.markEnd(parseWhileStatement(), startToken);
		            case 'with':
		                return delegate.markEnd(parseWithStatement(), startToken);
		            }
		        }

		        expr = parseExpression();

		        // 12.12 Labelled Statements
		        if ((expr.type === Syntax.Identifier) && match(':')) {
		            lex();

		            key = '$' + expr.name;
		            if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
		                throwError({}, Messages.Redeclaration, 'Label', expr.name);
		            }

		            state.labelSet[key] = true;
		            labeledBody = parseStatement();
		            delete state.labelSet[key];
		            return delegate.markEnd(delegate.createLabeledStatement(expr, labeledBody), startToken);
		        }

		        consumeSemicolon();

		        return delegate.markEnd(delegate.createExpressionStatement(expr), startToken);
		    }

		    // 13 Function Definition

		    function parseFunctionSourceElements() {
		        var sourceElement, sourceElements = [], token, directive, firstRestricted,
		            oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, startToken;

		        startToken = lookahead;
		        expect('{');

		        while (index < length) {
		            if (lookahead.type !== Token.StringLiteral) {
		                break;
		            }
		            token = lookahead;

		            sourceElement = parseSourceElement();
		            sourceElements.push(sourceElement);
		            if (sourceElement.expression.type !== Syntax.Literal) {
		                // this is not directive
		                break;
		            }
		            directive = source.slice(token.start + 1, token.end - 1);
		            if (directive === 'use strict') {
		                strict = true;
		                if (firstRestricted) {
		                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
		                }
		            } else {
		                if (!firstRestricted && token.octal) {
		                    firstRestricted = token;
		                }
		            }
		        }

		        oldLabelSet = state.labelSet;
		        oldInIteration = state.inIteration;
		        oldInSwitch = state.inSwitch;
		        oldInFunctionBody = state.inFunctionBody;

		        state.labelSet = {};
		        state.inIteration = false;
		        state.inSwitch = false;
		        state.inFunctionBody = true;

		        while (index < length) {
		            if (match('}')) {
		                break;
		            }
		            sourceElement = parseSourceElement();
		            if (typeof sourceElement === 'undefined') {
		                break;
		            }
		            sourceElements.push(sourceElement);
		        }

		        expect('}');

		        state.labelSet = oldLabelSet;
		        state.inIteration = oldInIteration;
		        state.inSwitch = oldInSwitch;
		        state.inFunctionBody = oldInFunctionBody;

		        return delegate.markEnd(delegate.createBlockStatement(sourceElements), startToken);
		    }

		    function parseParams(firstRestricted) {
		        var param, params = [], token, stricted, paramSet, key, message;
		        expect('(');

		        if (!match(')')) {
		            paramSet = {};
		            while (index < length) {
		                token = lookahead;
		                param = parseVariableIdentifier();
		                key = '$' + token.value;
		                if (strict) {
		                    if (isRestrictedWord(token.value)) {
		                        stricted = token;
		                        message = Messages.StrictParamName;
		                    }
		                    if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
		                        stricted = token;
		                        message = Messages.StrictParamDupe;
		                    }
		                } else if (!firstRestricted) {
		                    if (isRestrictedWord(token.value)) {
		                        firstRestricted = token;
		                        message = Messages.StrictParamName;
		                    } else if (isStrictModeReservedWord(token.value)) {
		                        firstRestricted = token;
		                        message = Messages.StrictReservedWord;
		                    } else if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
		                        firstRestricted = token;
		                        message = Messages.StrictParamDupe;
		                    }
		                }
		                params.push(param);
		                paramSet[key] = true;
		                if (match(')')) {
		                    break;
		                }
		                expect(',');
		            }
		        }

		        expect(')');

		        return {
		            params: params,
		            stricted: stricted,
		            firstRestricted: firstRestricted,
		            message: message
		        };
		    }

		    function parseFunctionDeclaration() {
		        var id, params = [], body, token, stricted, tmp, firstRestricted, message, previousStrict, startToken;

		        startToken = lookahead;

		        expectKeyword('function');
		        token = lookahead;
		        id = parseVariableIdentifier();
		        if (strict) {
		            if (isRestrictedWord(token.value)) {
		                throwErrorTolerant(token, Messages.StrictFunctionName);
		            }
		        } else {
		            if (isRestrictedWord(token.value)) {
		                firstRestricted = token;
		                message = Messages.StrictFunctionName;
		            } else if (isStrictModeReservedWord(token.value)) {
		                firstRestricted = token;
		                message = Messages.StrictReservedWord;
		            }
		        }

		        tmp = parseParams(firstRestricted);
		        params = tmp.params;
		        stricted = tmp.stricted;
		        firstRestricted = tmp.firstRestricted;
		        if (tmp.message) {
		            message = tmp.message;
		        }

		        previousStrict = strict;
		        body = parseFunctionSourceElements();
		        if (strict && firstRestricted) {
		            throwError(firstRestricted, message);
		        }
		        if (strict && stricted) {
		            throwErrorTolerant(stricted, message);
		        }
		        strict = previousStrict;

		        return delegate.markEnd(delegate.createFunctionDeclaration(id, params, [], body), startToken);
		    }

		    function parseFunctionExpression() {
		        var token, id = null, stricted, firstRestricted, message, tmp, params = [], body, previousStrict, startToken;

		        startToken = lookahead;
		        expectKeyword('function');

		        if (!match('(')) {
		            token = lookahead;
		            id = parseVariableIdentifier();
		            if (strict) {
		                if (isRestrictedWord(token.value)) {
		                    throwErrorTolerant(token, Messages.StrictFunctionName);
		                }
		            } else {
		                if (isRestrictedWord(token.value)) {
		                    firstRestricted = token;
		                    message = Messages.StrictFunctionName;
		                } else if (isStrictModeReservedWord(token.value)) {
		                    firstRestricted = token;
		                    message = Messages.StrictReservedWord;
		                }
		            }
		        }

		        tmp = parseParams(firstRestricted);
		        params = tmp.params;
		        stricted = tmp.stricted;
		        firstRestricted = tmp.firstRestricted;
		        if (tmp.message) {
		            message = tmp.message;
		        }

		        previousStrict = strict;
		        body = parseFunctionSourceElements();
		        if (strict && firstRestricted) {
		            throwError(firstRestricted, message);
		        }
		        if (strict && stricted) {
		            throwErrorTolerant(stricted, message);
		        }
		        strict = previousStrict;

		        return delegate.markEnd(delegate.createFunctionExpression(id, params, [], body), startToken);
		    }

		    // 14 Program

		    function parseSourceElement() {
		        if (lookahead.type === Token.Keyword) {
		            switch (lookahead.value) {
		            case 'const':
		            case 'let':
		                return parseConstLetDeclaration(lookahead.value);
		            case 'function':
		                return parseFunctionDeclaration();
		            default:
		                return parseStatement();
		            }
		        }

		        if (lookahead.type !== Token.EOF) {
		            return parseStatement();
		        }
		    }

		    function parseSourceElements() {
		        var sourceElement, sourceElements = [], token, directive, firstRestricted;

		        while (index < length) {
		            token = lookahead;
		            if (token.type !== Token.StringLiteral) {
		                break;
		            }

		            sourceElement = parseSourceElement();
		            sourceElements.push(sourceElement);
		            if (sourceElement.expression.type !== Syntax.Literal) {
		                // this is not directive
		                break;
		            }
		            directive = source.slice(token.start + 1, token.end - 1);
		            if (directive === 'use strict') {
		                strict = true;
		                if (firstRestricted) {
		                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
		                }
		            } else {
		                if (!firstRestricted && token.octal) {
		                    firstRestricted = token;
		                }
		            }
		        }

		        while (index < length) {
		            sourceElement = parseSourceElement();
		            /* istanbul ignore if */
		            if (typeof sourceElement === 'undefined') {
		                break;
		            }
		            sourceElements.push(sourceElement);
		        }
		        return sourceElements;
		    }

		    function parseProgram() {
		        var body, startToken;

		        skipComment();
		        peek();
		        startToken = lookahead;
		        strict = false;

		        body = parseSourceElements();
		        return delegate.markEnd(delegate.createProgram(body), startToken);
		    }

		    function filterTokenLocation() {
		        var i, entry, token, tokens = [];

		        for (i = 0; i < extra.tokens.length; ++i) {
		            entry = extra.tokens[i];
		            token = {
		                type: entry.type,
		                value: entry.value
		            };
		            if (extra.range) {
		                token.range = entry.range;
		            }
		            if (extra.loc) {
		                token.loc = entry.loc;
		            }
		            tokens.push(token);
		        }

		        extra.tokens = tokens;
		    }

		    function tokenize(code, options) {
		        var toString,
		            token,
		            tokens;

		        toString = String;
		        if (typeof code !== 'string' && !(code instanceof String)) {
		            code = toString(code);
		        }

		        delegate = SyntaxTreeDelegate;
		        source = code;
		        index = 0;
		        lineNumber = (source.length > 0) ? 1 : 0;
		        lineStart = 0;
		        length = source.length;
		        lookahead = null;
		        state = {
		            allowIn: true,
		            labelSet: {},
		            inFunctionBody: false,
		            inIteration: false,
		            inSwitch: false,
		            lastCommentStart: -1
		        };

		        extra = {};

		        // Options matching.
		        options = options || {};

		        // Of course we collect tokens here.
		        options.tokens = true;
		        extra.tokens = [];
		        extra.tokenize = true;
		        // The following two fields are necessary to compute the Regex tokens.
		        extra.openParenToken = -1;
		        extra.openCurlyToken = -1;

		        extra.range = (typeof options.range === 'boolean') && options.range;
		        extra.loc = (typeof options.loc === 'boolean') && options.loc;

		        if (typeof options.comment === 'boolean' && options.comment) {
		            extra.comments = [];
		        }
		        if (typeof options.tolerant === 'boolean' && options.tolerant) {
		            extra.errors = [];
		        }

		        try {
		            peek();
		            if (lookahead.type === Token.EOF) {
		                return extra.tokens;
		            }

		            token = lex();
		            while (lookahead.type !== Token.EOF) {
		                try {
		                    token = lex();
		                } catch (lexError) {
		                    token = lookahead;
		                    if (extra.errors) {
		                        extra.errors.push(lexError);
		                        // We have to break on the first error
		                        // to avoid infinite loops.
		                        break;
		                    } else {
		                        throw lexError;
		                    }
		                }
		            }

		            filterTokenLocation();
		            tokens = extra.tokens;
		            if (typeof extra.comments !== 'undefined') {
		                tokens.comments = extra.comments;
		            }
		            if (typeof extra.errors !== 'undefined') {
		                tokens.errors = extra.errors;
		            }
		        } catch (e) {
		            throw e;
		        } finally {
		            extra = {};
		        }
		        return tokens;
		    }

		    function parse(code, options) {
		        var program, toString;

		        toString = String;
		        if (typeof code !== 'string' && !(code instanceof String)) {
		            code = toString(code);
		        }

		        delegate = SyntaxTreeDelegate;
		        source = code;
		        index = 0;
		        lineNumber = (source.length > 0) ? 1 : 0;
		        lineStart = 0;
		        length = source.length;
		        lookahead = null;
		        state = {
		            allowIn: true,
		            labelSet: {},
		            inFunctionBody: false,
		            inIteration: false,
		            inSwitch: false,
		            lastCommentStart: -1
		        };

		        extra = {};
		        if (typeof options !== 'undefined') {
		            extra.range = (typeof options.range === 'boolean') && options.range;
		            extra.loc = (typeof options.loc === 'boolean') && options.loc;
		            extra.attachComment = (typeof options.attachComment === 'boolean') && options.attachComment;

		            if (extra.loc && options.source !== null && options.source !== undefined) {
		                extra.source = toString(options.source);
		            }

		            if (typeof options.tokens === 'boolean' && options.tokens) {
		                extra.tokens = [];
		            }
		            if (typeof options.comment === 'boolean' && options.comment) {
		                extra.comments = [];
		            }
		            if (typeof options.tolerant === 'boolean' && options.tolerant) {
		                extra.errors = [];
		            }
		            if (extra.attachComment) {
		                extra.range = true;
		                extra.comments = [];
		                extra.bottomRightStack = [];
		                extra.trailingComments = [];
		                extra.leadingComments = [];
		            }
		        }

		        try {
		            program = parseProgram();
		            if (typeof extra.comments !== 'undefined') {
		                program.comments = extra.comments;
		            }
		            if (typeof extra.tokens !== 'undefined') {
		                filterTokenLocation();
		                program.tokens = extra.tokens;
		            }
		            if (typeof extra.errors !== 'undefined') {
		                program.errors = extra.errors;
		            }
		        } catch (e) {
		            throw e;
		        } finally {
		            extra = {};
		        }

		        return program;
		    }

		    // Sync with *.json manifests.
		    exports.version = '1.2.2';

		    exports.tokenize = tokenize;

		    exports.parse = parse;

		    // Deep copy.
		   /* istanbul ignore next */
		    exports.Syntax = (function () {
		        var name, types = {};

		        if (typeof Object.create === 'function') {
		            types = Object.create(null);
		        }

		        for (name in Syntax) {
		            if (Syntax.hasOwnProperty(name)) {
		                types[name] = Syntax[name];
		            }
		        }

		        if (typeof Object.freeze === 'function') {
		            Object.freeze(types);
		        }

		        return types;
		    }());

		}));
		/* vim: set sw=4 ts=4 et tw=80 : */

		},{}],1:[function(require,module,exports){
		(function (process){
		/* parser generated by jison 0.4.13 */
		/*
		  Returns a Parser object of the following structure:

		  Parser: {
		    yy: {}
		  }

		  Parser.prototype: {
		    yy: {},
		    trace: function(),
		    symbols_: {associative list: name ==> number},
		    terminals_: {associative list: number ==> name},
		    productions_: [...],
		    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
		    table: [...],
		    defaultActions: {...},
		    parseError: function(str, hash),
		    parse: function(input),

		    lexer: {
		        EOF: 1,
		        parseError: function(str, hash),
		        setInput: function(input),
		        input: function(),
		        unput: function(str),
		        more: function(),
		        less: function(n),
		        pastInput: function(),
		        upcomingInput: function(),
		        showPosition: function(),
		        test_match: function(regex_match_array, rule_index),
		        next: function(),
		        lex: function(),
		        begin: function(condition),
		        popState: function(),
		        _currentRules: function(),
		        topState: function(),
		        pushState: function(condition),

		        options: {
		            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
		            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
		            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
		        },

		        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
		        rules: [...],
		        conditions: {associative list: name ==> set},
		    }
		  }


		  token location info (@$, _$, etc.): {
		    first_line: n,
		    last_line: n,
		    first_column: n,
		    last_column: n,
		    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
		  }


		  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
		    text:        (matched text)
		    token:       (the produced terminal token, if any)
		    line:        (yylineno)
		  }
		  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
		    loc:         (yylloc)
		    expected:    (string describing the set of expected tokens)
		    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
		  }
		*/
		var parser = (function(){
		var parser = {trace: function trace() { },
		yy: {},
		symbols_: {"error":2,"JSON_PATH":3,"DOLLAR":4,"PATH_COMPONENTS":5,"LEADING_CHILD_MEMBER_EXPRESSION":6,"PATH_COMPONENT":7,"MEMBER_COMPONENT":8,"SUBSCRIPT_COMPONENT":9,"CHILD_MEMBER_COMPONENT":10,"DESCENDANT_MEMBER_COMPONENT":11,"DOT":12,"MEMBER_EXPRESSION":13,"DOT_DOT":14,"STAR":15,"IDENTIFIER":16,"SCRIPT_EXPRESSION":17,"INTEGER":18,"END":19,"CHILD_SUBSCRIPT_COMPONENT":20,"DESCENDANT_SUBSCRIPT_COMPONENT":21,"[":22,"SUBSCRIPT":23,"]":24,"SUBSCRIPT_EXPRESSION":25,"SUBSCRIPT_EXPRESSION_LIST":26,"SUBSCRIPT_EXPRESSION_LISTABLE":27,",":28,"STRING_LITERAL":29,"ARRAY_SLICE":30,"FILTER_EXPRESSION":31,"QQ_STRING":32,"Q_STRING":33,"$accept":0,"$end":1},
		terminals_: {2:"error",4:"DOLLAR",12:"DOT",14:"DOT_DOT",15:"STAR",16:"IDENTIFIER",17:"SCRIPT_EXPRESSION",18:"INTEGER",19:"END",22:"[",24:"]",28:",",30:"ARRAY_SLICE",31:"FILTER_EXPRESSION",32:"QQ_STRING",33:"Q_STRING"},
		productions_: [0,[3,1],[3,2],[3,1],[3,2],[5,1],[5,2],[7,1],[7,1],[8,1],[8,1],[10,2],[6,1],[11,2],[13,1],[13,1],[13,1],[13,1],[13,1],[9,1],[9,1],[20,3],[21,4],[23,1],[23,1],[26,1],[26,3],[27,1],[27,1],[27,1],[25,1],[25,1],[25,1],[29,1],[29,1]],
		performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */
		/**/) {
		/* this == yyval */
		if (!yy.ast) {
		    yy.ast = _ast;
		    _ast.initialize();
		}

		var $0 = $$.length - 1;
		switch (yystate) {
		case 1:yy.ast.set({ expression: { type: "root", value: $$[$0] } }); yy.ast.unshift(); return yy.ast.yield()
		case 2:yy.ast.set({ expression: { type: "root", value: $$[$0-1] } }); yy.ast.unshift(); return yy.ast.yield()
		case 3:yy.ast.unshift(); return yy.ast.yield()
		case 4:yy.ast.set({ operation: "member", scope: "child", expression: { type: "identifier", value: $$[$0-1] }}); yy.ast.unshift(); return yy.ast.yield()
		case 5:
		break;
		case 6:
		break;
		case 7:yy.ast.set({ operation: "member" }); yy.ast.push();
		break;
		case 8:yy.ast.set({ operation: "subscript" }); yy.ast.push(); 
		break;
		case 9:yy.ast.set({ scope: "child" });
		break;
		case 10:yy.ast.set({ scope: "descendant" });
		break;
		case 11:
		break;
		case 12:yy.ast.set({ scope: "child", operation: "member" });
		break;
		case 13:
		break;
		case 14:yy.ast.set({ expression: { type: "wildcard", value: $$[$0] } });
		break;
		case 15:yy.ast.set({ expression: { type: "identifier", value: $$[$0] } });
		break;
		case 16:yy.ast.set({ expression: { type: "script_expression", value: $$[$0] } });
		break;
		case 17:yy.ast.set({ expression: { type: "numeric_literal", value: parseInt($$[$0]) } });
		break;
		case 18:
		break;
		case 19:yy.ast.set({ scope: "child" });
		break;
		case 20:yy.ast.set({ scope: "descendant" });
		break;
		case 21:
		break;
		case 22:
		break;
		case 23:
		break;
		case 24:$$[$0].length > 1? yy.ast.set({ expression: { type: "union", value: $$[$0] } }) : this.$ = $$[$0];
		break;
		case 25:this.$ = [$$[$0]];
		break;
		case 26:this.$ = $$[$0-2].concat($$[$0]);
		break;
		case 27:this.$ = { expression: { type: "numeric_literal", value: parseInt($$[$0]) } }; yy.ast.set(this.$);
		break;
		case 28:this.$ = { expression: { type: "string_literal", value: $$[$0] } }; yy.ast.set(this.$);
		break;
		case 29:this.$ = { expression: { type: "slice", value: $$[$0] } }; yy.ast.set(this.$);
		break;
		case 30:this.$ = { expression: { type: "wildcard", value: $$[$0] } }; yy.ast.set(this.$);
		break;
		case 31:this.$ = { expression: { type: "script_expression", value: $$[$0] } }; yy.ast.set(this.$);
		break;
		case 32:this.$ = { expression: { type: "filter_expression", value: $$[$0] } }; yy.ast.set(this.$);
		break;
		case 33:this.$ = $$[$0];
		break;
		case 34:this.$ = $$[$0];
		break;
		}
		},
		table: [{3:1,4:[1,2],6:3,13:4,15:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9]},{1:[3]},{1:[2,1],5:10,7:11,8:12,9:13,10:14,11:15,12:[1,18],14:[1,19],20:16,21:17,22:[1,20]},{1:[2,3],5:21,7:11,8:12,9:13,10:14,11:15,12:[1,18],14:[1,19],20:16,21:17,22:[1,20]},{1:[2,12],12:[2,12],14:[2,12],22:[2,12]},{1:[2,14],12:[2,14],14:[2,14],22:[2,14]},{1:[2,15],12:[2,15],14:[2,15],22:[2,15]},{1:[2,16],12:[2,16],14:[2,16],22:[2,16]},{1:[2,17],12:[2,17],14:[2,17],22:[2,17]},{1:[2,18],12:[2,18],14:[2,18],22:[2,18]},{1:[2,2],7:22,8:12,9:13,10:14,11:15,12:[1,18],14:[1,19],20:16,21:17,22:[1,20]},{1:[2,5],12:[2,5],14:[2,5],22:[2,5]},{1:[2,7],12:[2,7],14:[2,7],22:[2,7]},{1:[2,8],12:[2,8],14:[2,8],22:[2,8]},{1:[2,9],12:[2,9],14:[2,9],22:[2,9]},{1:[2,10],12:[2,10],14:[2,10],22:[2,10]},{1:[2,19],12:[2,19],14:[2,19],22:[2,19]},{1:[2,20],12:[2,20],14:[2,20],22:[2,20]},{13:23,15:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9]},{13:24,15:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],22:[1,25]},{15:[1,29],17:[1,30],18:[1,33],23:26,25:27,26:28,27:32,29:34,30:[1,35],31:[1,31],32:[1,36],33:[1,37]},{1:[2,4],7:22,8:12,9:13,10:14,11:15,12:[1,18],14:[1,19],20:16,21:17,22:[1,20]},{1:[2,6],12:[2,6],14:[2,6],22:[2,6]},{1:[2,11],12:[2,11],14:[2,11],22:[2,11]},{1:[2,13],12:[2,13],14:[2,13],22:[2,13]},{15:[1,29],17:[1,30],18:[1,33],23:38,25:27,26:28,27:32,29:34,30:[1,35],31:[1,31],32:[1,36],33:[1,37]},{24:[1,39]},{24:[2,23]},{24:[2,24],28:[1,40]},{24:[2,30]},{24:[2,31]},{24:[2,32]},{24:[2,25],28:[2,25]},{24:[2,27],28:[2,27]},{24:[2,28],28:[2,28]},{24:[2,29],28:[2,29]},{24:[2,33],28:[2,33]},{24:[2,34],28:[2,34]},{24:[1,41]},{1:[2,21],12:[2,21],14:[2,21],22:[2,21]},{18:[1,33],27:42,29:34,30:[1,35],32:[1,36],33:[1,37]},{1:[2,22],12:[2,22],14:[2,22],22:[2,22]},{24:[2,26],28:[2,26]}],
		defaultActions: {27:[2,23],29:[2,30],30:[2,31],31:[2,32]},
		parseError: function parseError(str, hash) {
		    if (hash.recoverable) {
		        this.trace(str);
		    } else {
		        throw new Error(str);
		    }
		},
		parse: function parse(input) {
		    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, TERROR = 2, EOF = 1;
		    var args = lstack.slice.call(arguments, 1);
		    this.lexer.setInput(input);
		    this.lexer.yy = this.yy;
		    this.yy.lexer = this.lexer;
		    this.yy.parser = this;
		    if (typeof this.lexer.yylloc == 'undefined') {
		        this.lexer.yylloc = {};
		    }
		    var yyloc = this.lexer.yylloc;
		    lstack.push(yyloc);
		    var ranges = this.lexer.options && this.lexer.options.ranges;
		    if (typeof this.yy.parseError === 'function') {
		        this.parseError = this.yy.parseError;
		    } else {
		        this.parseError = Object.getPrototypeOf(this).parseError;
		    }
		    function lex() {
		        var token;
		        token = self.lexer.lex() || EOF;
		        if (typeof token !== 'number') {
		            token = self.symbols_[token] || token;
		        }
		        return token;
		    }
		    var symbol, state, action, r, yyval = {}, p, len, newState, expected;
		    while (true) {
		        state = stack[stack.length - 1];
		        if (this.defaultActions[state]) {
		            action = this.defaultActions[state];
		        } else {
		            if (symbol === null || typeof symbol == 'undefined') {
		                symbol = lex();
		            }
		            action = table[state] && table[state][symbol];
		        }
		                    if (typeof action === 'undefined' || !action.length || !action[0]) {
		                var errStr = '';
		                expected = [];
		                for (p in table[state]) {
		                    if (this.terminals_[p] && p > TERROR) {
		                        expected.push('\'' + this.terminals_[p] + '\'');
		                    }
		                }
		                if (this.lexer.showPosition) {
		                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
		                } else {
		                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
		                }
		                this.parseError(errStr, {
		                    text: this.lexer.match,
		                    token: this.terminals_[symbol] || symbol,
		                    line: this.lexer.yylineno,
		                    loc: yyloc,
		                    expected: expected
		                });
		            }
		        if (action[0] instanceof Array && action.length > 1) {
		            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
		        }
		        switch (action[0]) {
		        case 1:
		            stack.push(symbol);
		            vstack.push(this.lexer.yytext);
		            lstack.push(this.lexer.yylloc);
		            stack.push(action[1]);
		            symbol = null;
		            {
		                yyleng = this.lexer.yyleng;
		                yytext = this.lexer.yytext;
		                yylineno = this.lexer.yylineno;
		                yyloc = this.lexer.yylloc;
		            }
		            break;
		        case 2:
		            len = this.productions_[action[1]][1];
		            yyval.$ = vstack[vstack.length - len];
		            yyval._$ = {
		                first_line: lstack[lstack.length - (len || 1)].first_line,
		                last_line: lstack[lstack.length - 1].last_line,
		                first_column: lstack[lstack.length - (len || 1)].first_column,
		                last_column: lstack[lstack.length - 1].last_column
		            };
		            if (ranges) {
		                yyval._$.range = [
		                    lstack[lstack.length - (len || 1)].range[0],
		                    lstack[lstack.length - 1].range[1]
		                ];
		            }
		            r = this.performAction.apply(yyval, [
		                yytext,
		                yyleng,
		                yylineno,
		                this.yy,
		                action[1],
		                vstack,
		                lstack
		            ].concat(args));
		            if (typeof r !== 'undefined') {
		                return r;
		            }
		            if (len) {
		                stack = stack.slice(0, -1 * len * 2);
		                vstack = vstack.slice(0, -1 * len);
		                lstack = lstack.slice(0, -1 * len);
		            }
		            stack.push(this.productions_[action[1]][0]);
		            vstack.push(yyval.$);
		            lstack.push(yyval._$);
		            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
		            stack.push(newState);
		            break;
		        case 3:
		            return true;
		        }
		    }
		    return true;
		}};
		var _ast = {

		  initialize: function() {
		    this._nodes = [];
		    this._node = {};
		    this._stash = [];
		  },

		  set: function(props) {
		    for (var k in props) this._node[k] = props[k];
		    return this._node;
		  },

		  node: function(obj) {
		    if (arguments.length) this._node = obj;
		    return this._node;
		  },

		  push: function() {
		    this._nodes.push(this._node);
		    this._node = {};
		  },

		  unshift: function() {
		    this._nodes.unshift(this._node);
		    this._node = {};
		  },

		  yield: function() {
		    var _nodes = this._nodes;
		    this.initialize();
		    return _nodes;
		  }
		};
		/* generated by jison-lex 0.2.1 */
		var lexer = (function(){
		var lexer = {

		EOF:1,

		parseError:function parseError(str, hash) {
		        if (this.yy.parser) {
		            this.yy.parser.parseError(str, hash);
		        } else {
		            throw new Error(str);
		        }
		    },

		// resets the lexer, sets new input
		setInput:function (input) {
		        this._input = input;
		        this._more = this._backtrack = this.done = false;
		        this.yylineno = this.yyleng = 0;
		        this.yytext = this.matched = this.match = '';
		        this.conditionStack = ['INITIAL'];
		        this.yylloc = {
		            first_line: 1,
		            first_column: 0,
		            last_line: 1,
		            last_column: 0
		        };
		        if (this.options.ranges) {
		            this.yylloc.range = [0,0];
		        }
		        this.offset = 0;
		        return this;
		    },

		// consumes and returns one char from the input
		input:function () {
		        var ch = this._input[0];
		        this.yytext += ch;
		        this.yyleng++;
		        this.offset++;
		        this.match += ch;
		        this.matched += ch;
		        var lines = ch.match(/(?:\r\n?|\n).*/g);
		        if (lines) {
		            this.yylineno++;
		            this.yylloc.last_line++;
		        } else {
		            this.yylloc.last_column++;
		        }
		        if (this.options.ranges) {
		            this.yylloc.range[1]++;
		        }

		        this._input = this._input.slice(1);
		        return ch;
		    },

		// unshifts one char (or a string) into the input
		unput:function (ch) {
		        var len = ch.length;
		        var lines = ch.split(/(?:\r\n?|\n)/g);

		        this._input = ch + this._input;
		        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
		        //this.yyleng -= len;
		        this.offset -= len;
		        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
		        this.match = this.match.substr(0, this.match.length - 1);
		        this.matched = this.matched.substr(0, this.matched.length - 1);

		        if (lines.length - 1) {
		            this.yylineno -= lines.length - 1;
		        }
		        var r = this.yylloc.range;

		        this.yylloc = {
		            first_line: this.yylloc.first_line,
		            last_line: this.yylineno + 1,
		            first_column: this.yylloc.first_column,
		            last_column: lines ?
		                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
		                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
		              this.yylloc.first_column - len
		        };

		        if (this.options.ranges) {
		            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
		        }
		        this.yyleng = this.yytext.length;
		        return this;
		    },

		// When called from action, caches matched text and appends it on next action
		more:function () {
		        this._more = true;
		        return this;
		    },

		// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
		reject:function () {
		        if (this.options.backtrack_lexer) {
		            this._backtrack = true;
		        } else {
		            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
		                text: "",
		                token: null,
		                line: this.yylineno
		            });

		        }
		        return this;
		    },

		// retain first n characters of the match
		less:function (n) {
		        this.unput(this.match.slice(n));
		    },

		// displays already matched input, i.e. for error messages
		pastInput:function () {
		        var past = this.matched.substr(0, this.matched.length - this.match.length);
		        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
		    },

		// displays upcoming input, i.e. for error messages
		upcomingInput:function () {
		        var next = this.match;
		        if (next.length < 20) {
		            next += this._input.substr(0, 20-next.length);
		        }
		        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
		    },

		// displays the character position where the lexing error occurred, i.e. for error messages
		showPosition:function () {
		        var pre = this.pastInput();
		        var c = new Array(pre.length + 1).join("-");
		        return pre + this.upcomingInput() + "\n" + c + "^";
		    },

		// test the lexed token: return FALSE when not a match, otherwise return token
		test_match:function (match, indexed_rule) {
		        var token,
		            lines,
		            backup;

		        if (this.options.backtrack_lexer) {
		            // save context
		            backup = {
		                yylineno: this.yylineno,
		                yylloc: {
		                    first_line: this.yylloc.first_line,
		                    last_line: this.last_line,
		                    first_column: this.yylloc.first_column,
		                    last_column: this.yylloc.last_column
		                },
		                yytext: this.yytext,
		                match: this.match,
		                matches: this.matches,
		                matched: this.matched,
		                yyleng: this.yyleng,
		                offset: this.offset,
		                _more: this._more,
		                _input: this._input,
		                yy: this.yy,
		                conditionStack: this.conditionStack.slice(0),
		                done: this.done
		            };
		            if (this.options.ranges) {
		                backup.yylloc.range = this.yylloc.range.slice(0);
		            }
		        }

		        lines = match[0].match(/(?:\r\n?|\n).*/g);
		        if (lines) {
		            this.yylineno += lines.length;
		        }
		        this.yylloc = {
		            first_line: this.yylloc.last_line,
		            last_line: this.yylineno + 1,
		            first_column: this.yylloc.last_column,
		            last_column: lines ?
		                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
		                         this.yylloc.last_column + match[0].length
		        };
		        this.yytext += match[0];
		        this.match += match[0];
		        this.matches = match;
		        this.yyleng = this.yytext.length;
		        if (this.options.ranges) {
		            this.yylloc.range = [this.offset, this.offset += this.yyleng];
		        }
		        this._more = false;
		        this._backtrack = false;
		        this._input = this._input.slice(match[0].length);
		        this.matched += match[0];
		        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
		        if (this.done && this._input) {
		            this.done = false;
		        }
		        if (token) {
		            return token;
		        } else if (this._backtrack) {
		            // recover context
		            for (var k in backup) {
		                this[k] = backup[k];
		            }
		            return false; // rule action called reject() implying the next rule should be tested instead.
		        }
		        return false;
		    },

		// return next match in input
		next:function () {
		        if (this.done) {
		            return this.EOF;
		        }
		        if (!this._input) {
		            this.done = true;
		        }

		        var token,
		            match,
		            tempMatch,
		            index;
		        if (!this._more) {
		            this.yytext = '';
		            this.match = '';
		        }
		        var rules = this._currentRules();
		        for (var i = 0; i < rules.length; i++) {
		            tempMatch = this._input.match(this.rules[rules[i]]);
		            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
		                match = tempMatch;
		                index = i;
		                if (this.options.backtrack_lexer) {
		                    token = this.test_match(tempMatch, rules[i]);
		                    if (token !== false) {
		                        return token;
		                    } else if (this._backtrack) {
		                        match = false;
		                        continue; // rule action called reject() implying a rule MISmatch.
		                    } else {
		                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
		                        return false;
		                    }
		                } else if (!this.options.flex) {
		                    break;
		                }
		            }
		        }
		        if (match) {
		            token = this.test_match(match, rules[index]);
		            if (token !== false) {
		                return token;
		            }
		            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
		            return false;
		        }
		        if (this._input === "") {
		            return this.EOF;
		        } else {
		            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
		                text: "",
		                token: null,
		                line: this.yylineno
		            });
		        }
		    },

		// return next match that has a token
		lex:function lex() {
		        var r = this.next();
		        if (r) {
		            return r;
		        } else {
		            return this.lex();
		        }
		    },

		// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
		begin:function begin(condition) {
		        this.conditionStack.push(condition);
		    },

		// pop the previously active lexer condition state off the condition stack
		popState:function popState() {
		        var n = this.conditionStack.length - 1;
		        if (n > 0) {
		            return this.conditionStack.pop();
		        } else {
		            return this.conditionStack[0];
		        }
		    },

		// produce the lexer rule set which is active for the currently active lexer condition state
		_currentRules:function _currentRules() {
		        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
		            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
		        } else {
		            return this.conditions["INITIAL"].rules;
		        }
		    },

		// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
		topState:function topState(n) {
		        n = this.conditionStack.length - 1 - Math.abs(n || 0);
		        if (n >= 0) {
		            return this.conditionStack[n];
		        } else {
		            return "INITIAL";
		        }
		    },

		// alias for begin(condition)
		pushState:function pushState(condition) {
		        this.begin(condition);
		    },

		// return the number of states currently on the stack
		stateStackSize:function stateStackSize() {
		        return this.conditionStack.length;
		    },
		options: {},
		performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START
		/**/) {
		switch($avoiding_name_collisions) {
		case 0:return 4
		case 1:return 14
		case 2:return 12
		case 3:return 15
		case 4:return 16
		case 5:return 22
		case 6:return 24
		case 7:return 28
		case 8:return 30
		case 9:return 18
		case 10:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 32;
		case 11:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 33;
		case 12:return 17
		case 13:return 31
		}
		},
		rules: [/^(?:\$)/,/^(?:\.\.)/,/^(?:\.)/,/^(?:\*)/,/^(?:[a-zA-Z_]+[a-zA-Z0-9_]*)/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?:((-?(?:0|[1-9][0-9]*)))?\:((-?(?:0|[1-9][0-9]*)))?(\:((-?(?:0|[1-9][0-9]*)))?)?)/,/^(?:(-?(?:0|[1-9][0-9]*)))/,/^(?:"(?:\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*")/,/^(?:'(?:\\['bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^'\\])*')/,/^(?:\(.+?\)(?=\]))/,/^(?:\?\(.+?\)(?=\]))/],
		conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}}
		};
		return lexer;
		})();
		parser.lexer = lexer;
		function Parser () {
		  this.yy = {};
		}
		Parser.prototype = parser;parser.Parser = Parser;
		return new Parser;
		})();


		if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
		exports.parser = parser;
		exports.Parser = parser.Parser;
		exports.parse = function () { return parser.parse.apply(parser, arguments); };
		exports.main = function commonjsMain(args) {
		    if (!args[1]) {
		        console.log('Usage: '+args[0]+' FILE');
		        process.exit(1);
		    }
		    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
		    return exports.parser.parse(source);
		};
		if (typeof module !== 'undefined' && require.main === module) {
		  exports.main(process.argv.slice(1));
		}
		}

		}).call(this,require('_process'));
		},{"_process":14,"fs":12,"path":13}],2:[function(require,module,exports){
		module.exports = {
		  identifier: "[a-zA-Z_]+[a-zA-Z0-9_]*",
		  integer: "-?(?:0|[1-9][0-9]*)",
		  qq_string: "\"(?:\\\\[\"bfnrt/\\\\]|\\\\u[a-fA-F0-9]{4}|[^\"\\\\])*\"",
		  q_string: "'(?:\\\\[\'bfnrt/\\\\]|\\\\u[a-fA-F0-9]{4}|[^\'\\\\])*'"
		};

		},{}],3:[function(require,module,exports){
		var dict = require('./dict');
		var fs = require('fs');
		var grammar = {

		    lex: {

		        macros: {
		            esc: "\\\\",
		            int: dict.integer
		        },

		        rules: [
		            ["\\$", "return 'DOLLAR'"],
		            ["\\.\\.", "return 'DOT_DOT'"],
		            ["\\.", "return 'DOT'"],
		            ["\\*", "return 'STAR'"],
		            [dict.identifier, "return 'IDENTIFIER'"],
		            ["\\[", "return '['"],
		            ["\\]", "return ']'"],
		            [",", "return ','"],
		            ["({int})?\\:({int})?(\\:({int})?)?", "return 'ARRAY_SLICE'"],
		            ["{int}", "return 'INTEGER'"],
		            [dict.qq_string, "yytext = yytext.substr(1,yyleng-2); return 'QQ_STRING';"],
		            [dict.q_string, "yytext = yytext.substr(1,yyleng-2); return 'Q_STRING';"],
		            ["\\(.+?\\)(?=\\])", "return 'SCRIPT_EXPRESSION'"],
		            ["\\?\\(.+?\\)(?=\\])", "return 'FILTER_EXPRESSION'"]
		        ]
		    },

		    start: "JSON_PATH",

		    bnf: {

		        JSON_PATH: [
		                [ 'DOLLAR',                 'yy.ast.set({ expression: { type: "root", value: $1 } }); yy.ast.unshift(); return yy.ast.yield()' ],
		                [ 'DOLLAR PATH_COMPONENTS', 'yy.ast.set({ expression: { type: "root", value: $1 } }); yy.ast.unshift(); return yy.ast.yield()' ],
		                [ 'LEADING_CHILD_MEMBER_EXPRESSION',                 'yy.ast.unshift(); return yy.ast.yield()' ],
		                [ 'LEADING_CHILD_MEMBER_EXPRESSION PATH_COMPONENTS', 'yy.ast.set({ operation: "member", scope: "child", expression: { type: "identifier", value: $1 }}); yy.ast.unshift(); return yy.ast.yield()' ] ],

		        PATH_COMPONENTS: [
		                [ 'PATH_COMPONENT',                 '' ],
		                [ 'PATH_COMPONENTS PATH_COMPONENT', '' ] ],

		        PATH_COMPONENT: [
		                [ 'MEMBER_COMPONENT',    'yy.ast.set({ operation: "member" }); yy.ast.push()' ],
		                [ 'SUBSCRIPT_COMPONENT', 'yy.ast.set({ operation: "subscript" }); yy.ast.push() ' ] ],

		        MEMBER_COMPONENT: [
		                [ 'CHILD_MEMBER_COMPONENT',      'yy.ast.set({ scope: "child" })' ],
		                [ 'DESCENDANT_MEMBER_COMPONENT', 'yy.ast.set({ scope: "descendant" })' ] ],

		        CHILD_MEMBER_COMPONENT: [
		                [ 'DOT MEMBER_EXPRESSION', '' ] ],

		        LEADING_CHILD_MEMBER_EXPRESSION: [
		                [ 'MEMBER_EXPRESSION', 'yy.ast.set({ scope: "child", operation: "member" })' ] ],

		        DESCENDANT_MEMBER_COMPONENT: [
		                [ 'DOT_DOT MEMBER_EXPRESSION', '' ] ],

		        MEMBER_EXPRESSION: [
		                [ 'STAR',              'yy.ast.set({ expression: { type: "wildcard", value: $1 } })' ],
		                [ 'IDENTIFIER',        'yy.ast.set({ expression: { type: "identifier", value: $1 } })' ],
		                [ 'SCRIPT_EXPRESSION', 'yy.ast.set({ expression: { type: "script_expression", value: $1 } })' ],
		                [ 'INTEGER',           'yy.ast.set({ expression: { type: "numeric_literal", value: parseInt($1) } })' ],
		                [ 'END',               '' ] ],

		        SUBSCRIPT_COMPONENT: [
		                [ 'CHILD_SUBSCRIPT_COMPONENT',      'yy.ast.set({ scope: "child" })' ],
		                [ 'DESCENDANT_SUBSCRIPT_COMPONENT', 'yy.ast.set({ scope: "descendant" })' ] ],

		        CHILD_SUBSCRIPT_COMPONENT: [
		                [ '[ SUBSCRIPT ]', '' ] ],

		        DESCENDANT_SUBSCRIPT_COMPONENT: [
		                [ 'DOT_DOT [ SUBSCRIPT ]', '' ] ],

		        SUBSCRIPT: [
		                [ 'SUBSCRIPT_EXPRESSION', '' ],
		                [ 'SUBSCRIPT_EXPRESSION_LIST', '$1.length > 1? yy.ast.set({ expression: { type: "union", value: $1 } }) : $$ = $1' ] ],

		        SUBSCRIPT_EXPRESSION_LIST: [
		                [ 'SUBSCRIPT_EXPRESSION_LISTABLE', '$$ = [$1]'],
		                [ 'SUBSCRIPT_EXPRESSION_LIST , SUBSCRIPT_EXPRESSION_LISTABLE', '$$ = $1.concat($3)' ] ],

		        SUBSCRIPT_EXPRESSION_LISTABLE: [
		                [ 'INTEGER',           '$$ = { expression: { type: "numeric_literal", value: parseInt($1) } }; yy.ast.set($$)' ],
		                [ 'STRING_LITERAL',    '$$ = { expression: { type: "string_literal", value: $1 } }; yy.ast.set($$)' ],
		                [ 'ARRAY_SLICE',       '$$ = { expression: { type: "slice", value: $1 } }; yy.ast.set($$)' ] ],

		        SUBSCRIPT_EXPRESSION: [
		                [ 'STAR',              '$$ = { expression: { type: "wildcard", value: $1 } }; yy.ast.set($$)' ],
		                [ 'SCRIPT_EXPRESSION', '$$ = { expression: { type: "script_expression", value: $1 } }; yy.ast.set($$)' ],
		                [ 'FILTER_EXPRESSION', '$$ = { expression: { type: "filter_expression", value: $1 } }; yy.ast.set($$)' ] ],

		        STRING_LITERAL: [
		                [ 'QQ_STRING', "$$ = $1" ],
		                [ 'Q_STRING',  "$$ = $1" ] ]
		    }
		};
		if (fs.readFileSync) {
		  grammar.moduleInclude = fs.readFileSync(require.resolve("../include/module.js"));
		  grammar.actionInclude = fs.readFileSync(require.resolve("../include/action.js"));
		}

		module.exports = grammar;

		},{"./dict":2,"fs":12}],4:[function(require,module,exports){
		var aesprim = require('./aesprim');
		var slice = require('./slice');
		var _evaluate = require('static-eval');
		var _uniq = require('underscore').uniq;

		var Handlers = function() {
		  return this.initialize.apply(this, arguments);
		};

		Handlers.prototype.initialize = function() {
		  this.traverse = traverser(true);
		  this.descend = traverser();
		};

		Handlers.prototype.keys = Object.keys;

		Handlers.prototype.resolve = function(component) {

		  var key = [ component.operation, component.scope, component.expression.type ].join('-');
		  var method = this._fns[key];

		  if (!method) throw new Error("couldn't resolve key: " + key);
		  return method.bind(this);
		};

		Handlers.prototype.register = function(key, handler) {

		  if (!handler instanceof Function) {
		    throw new Error("handler must be a function");
		  }

		  this._fns[key] = handler;
		};

		Handlers.prototype._fns = {

		  'member-child-identifier': function(component, partial) {
		    var key = component.expression.value;
		    var value = partial.value;
		    if (value instanceof Object && key in value) {
		      return [ { value: value[key], path: partial.path.concat(key) } ]
		    }
		  },

		  'member-descendant-identifier':
		    _traverse(function(key, value, ref) { return key == ref }),

		  'subscript-child-numeric_literal':
		    _descend(function(key, value, ref) { return key === ref }),

		  'member-child-numeric_literal':
		    _descend(function(key, value, ref) { return String(key) === String(ref) }),

		  'subscript-descendant-numeric_literal':
		    _traverse(function(key, value, ref) { return key === ref }),

		  'member-child-wildcard':
		    _descend(function() { return true }),

		  'member-descendant-wildcard':
		    _traverse(function() { return true }),

		  'subscript-descendant-wildcard':
		    _traverse(function() { return true }),

		  'subscript-child-wildcard':
		    _descend(function() { return true }),

		  'subscript-child-slice': function(component, partial) {
		    if (is_array(partial.value)) {
		      var args = component.expression.value.split(':').map(_parse_nullable_int);
		      var values = partial.value.map(function(v, i) { return { value: v, path: partial.path.concat(i) } });
		      return slice.apply(null, [values].concat(args));
		    }
		  },

		  'subscript-child-union': function(component, partial) {
		    var results = [];
		    component.expression.value.forEach(function(component) {
		      var _component = { operation: 'subscript', scope: 'child', expression: component.expression };
		      var handler = this.resolve(_component);
		      var _results = handler(_component, partial);
		      if (_results) {
		        results = results.concat(_results);
		      }
		    }, this);

		    return unique(results);
		  },

		  'subscript-descendant-union': function(component, partial, count) {

		    var jp = require('..');
		    var self = this;

		    var results = [];
		    var nodes = jp.nodes(partial, '$..*').slice(1);

		    nodes.forEach(function(node) {
		      if (results.length >= count) return;
		      component.expression.value.forEach(function(component) {
		        var _component = { operation: 'subscript', scope: 'child', expression: component.expression };
		        var handler = self.resolve(_component);
		        var _results = handler(_component, node);
		        results = results.concat(_results);
		      });
		    });

		    return unique(results);
		  },

		  'subscript-child-filter_expression': function(component, partial, count) {

		    // slice out the expression from ?(expression)
		    var src = component.expression.value.slice(2, -1);
		    var ast = aesprim.parse(src).body[0].expression;

		    var passable = function(key, value) {
		      return evaluate(ast, { '@': value });
		    };

		    return this.descend(partial, null, passable, count);

		  },

		  'subscript-descendant-filter_expression': function(component, partial, count) {

		    // slice out the expression from ?(expression)
		    var src = component.expression.value.slice(2, -1);
		    var ast = aesprim.parse(src).body[0].expression;

		    var passable = function(key, value) {
		      return evaluate(ast, { '@': value });
		    };

		    return this.traverse(partial, null, passable, count);
		  },

		  'subscript-child-script_expression': function(component, partial) {
		    var exp = component.expression.value.slice(1, -1);
		    return eval_recurse(partial, exp, '$[{{value}}]');
		  },

		  'member-child-script_expression': function(component, partial) {
		    var exp = component.expression.value.slice(1, -1);
		    return eval_recurse(partial, exp, '$.{{value}}');
		  },

		  'member-descendant-script_expression': function(component, partial) {
		    var exp = component.expression.value.slice(1, -1);
		    return eval_recurse(partial, exp, '$..value');
		  }
		};

		Handlers.prototype._fns['subscript-child-string_literal'] =
			Handlers.prototype._fns['member-child-identifier'];

		Handlers.prototype._fns['member-descendant-numeric_literal'] =
		    Handlers.prototype._fns['subscript-descendant-string_literal'] =
		    Handlers.prototype._fns['member-descendant-identifier'];

		function eval_recurse(partial, src, template) {

		  var jp = require('./index');
		  var ast = aesprim.parse(src).body[0].expression;
		  var value = evaluate(ast, { '@': partial.value });
		  var path = template.replace(/\{\{\s*value\s*\}\}/g, value);

		  var results = jp.nodes(partial.value, path);
		  results.forEach(function(r) {
		    r.path = partial.path.concat(r.path.slice(1));
		  });

		  return results;
		}

		function is_array(val) {
		  return Array.isArray(val);
		}

		function is_object(val) {
		  // is this a non-array, non-null object?
		  return val && !(val instanceof Array) && val instanceof Object;
		}

		function traverser(recurse) {

		  return function(partial, ref, passable, count) {

		    var value = partial.value;
		    var path = partial.path;

		    var results = [];

		    var descend = function(value, path) {

		      if (is_array(value)) {
		        value.forEach(function(element, index) {
		          if (results.length >= count) { return }
		          if (passable(index, element, ref)) {
		            results.push({ path: path.concat(index), value: element });
		          }
		        });
		        value.forEach(function(element, index) {
		          if (results.length >= count) { return }
		          if (recurse) {
		            descend(element, path.concat(index));
		          }
		        });
		      } else if (is_object(value)) {
		        this.keys(value).forEach(function(k) {
		          if (results.length >= count) { return }
		          if (passable(k, value[k], ref)) {
		            results.push({ path: path.concat(k), value: value[k] });
		          }
		        });
		        this.keys(value).forEach(function(k) {
		          if (results.length >= count) { return }
		          if (recurse) {
		            descend(value[k], path.concat(k));
		          }
		        });
		      }
		    }.bind(this);
		    descend(value, path);
		    return results;
		  }
		}

		function _descend(passable) {
		  return function(component, partial, count) {
		    return this.descend(partial, component.expression.value, passable, count);
		  }
		}

		function _traverse(passable) {
		  return function(component, partial, count) {
		    return this.traverse(partial, component.expression.value, passable, count);
		  }
		}

		function evaluate() {
		  try { return _evaluate.apply(this, arguments) }
		  catch (e) { }
		}

		function unique(results) {
		  results = results.filter(function(d) { return d });
		  return _uniq(
		    results,
		    function(r) { return r.path.map(function(c) { return String(c).replace('-', '--') }).join('-') }
		  );
		}

		function _parse_nullable_int(val) {
		  var sval = String(val);
		  return sval.match(/^-?[0-9]+$/) ? parseInt(sval) : null;
		}

		module.exports = Handlers;

		},{"..":"jsonpath","./aesprim":"./aesprim","./index":5,"./slice":7,"static-eval":15,"underscore":12}],5:[function(require,module,exports){
		var assert = require('assert');
		var dict = require('./dict');
		var Parser = require('./parser');
		var Handlers = require('./handlers');

		var JSONPath = function() {
		  this.initialize.apply(this, arguments);
		};

		JSONPath.prototype.initialize = function() {
		  this.parser = new Parser();
		  this.handlers = new Handlers();
		};

		JSONPath.prototype.parse = function(string) {
		  assert.ok(_is_string(string), "we need a path");
		  return this.parser.parse(string);
		};

		JSONPath.prototype.parent = function(obj, string) {

		  assert.ok(obj instanceof Object, "obj needs to be an object");
		  assert.ok(string, "we need a path");

		  var node = this.nodes(obj, string)[0];
		  node.path.pop(); /* jshint unused:false */
		  return this.value(obj, node.path);
		};

		JSONPath.prototype.apply = function(obj, string, fn) {

		  assert.ok(obj instanceof Object, "obj needs to be an object");
		  assert.ok(string, "we need a path");
		  assert.equal(typeof fn, "function", "fn needs to be function");

		  var nodes = this.nodes(obj, string).sort(function(a, b) {
		    // sort nodes so we apply from the bottom up
		    return b.path.length - a.path.length;
		  });

		  nodes.forEach(function(node) {
		    var key = node.path.pop();
		    var parent = this.value(obj, this.stringify(node.path));
		    var val = node.value = fn.call(obj, parent[key]);
		    parent[key] = val;
		  }, this);

		  return nodes;
		};

		JSONPath.prototype.value = function(obj, path, value) {

		  assert.ok(obj instanceof Object, "obj needs to be an object");
		  assert.ok(path, "we need a path");

		  if (arguments.length >= 3) {
		    var node = this.nodes(obj, path).shift();
		    if (!node) return this._vivify(obj, path, value);
		    var key = node.path.slice(-1).shift();
		    var parent = this.parent(obj, this.stringify(node.path));
		    parent[key] = value;
		  }
		  return this.query(obj, this.stringify(path), 1).shift();
		};

		JSONPath.prototype._vivify = function(obj, string, value) {

		  var self = this;

		  assert.ok(obj instanceof Object, "obj needs to be an object");
		  assert.ok(string, "we need a path");

		  var path = this.parser.parse(string)
		    .map(function(component) { return component.expression.value });

		  var setValue = function(path, value) {
		    var key = path.pop();
		    var node = self.value(obj, path);
		    if (!node) {
		      setValue(path.concat(), typeof key === 'string' ? {} : []);
		      node = self.value(obj, path);
		    }
		    node[key] = value;
		  };
		  setValue(path, value);
		  return this.query(obj, string)[0];
		};

		JSONPath.prototype.query = function(obj, string, count) {

		  assert.ok(obj instanceof Object, "obj needs to be an object");
		  assert.ok(_is_string(string), "we need a path");

		  var results = this.nodes(obj, string, count)
		    .map(function(r) { return r.value });

		  return results;
		};

		JSONPath.prototype.paths = function(obj, string, count) {

		  assert.ok(obj instanceof Object, "obj needs to be an object");
		  assert.ok(string, "we need a path");

		  var results = this.nodes(obj, string, count)
		    .map(function(r) { return r.path });

		  return results;
		};

		JSONPath.prototype.nodes = function(obj, string, count) {

		  assert.ok(obj instanceof Object, "obj needs to be an object");
		  assert.ok(string, "we need a path");

		  if (count === 0) return [];

		  var path = this.parser.parse(string);
		  var handlers = this.handlers;

		  var partials = [ { path: ['$'], value: obj } ];
		  var matches = [];

		  if (path.length && path[0].expression.type == 'root') path.shift();

		  if (!path.length) return partials;

		  path.forEach(function(component, index) {

		    if (matches.length >= count) return;
		    var handler = handlers.resolve(component);
		    var _partials = [];

		    partials.forEach(function(p) {

		      if (matches.length >= count) return;
		      var results = handler(component, p, count);

		      if (index == path.length - 1) {
		        // if we're through the components we're done
		        matches = matches.concat(results || []);
		      } else {
		        // otherwise accumulate and carry on through
		        _partials = _partials.concat(results || []);
		      }
		    });

		    partials = _partials;

		  });

		  return count ? matches.slice(0, count) : matches;
		};

		JSONPath.prototype.stringify = function(path) {

		  assert.ok(path, "we need a path");

		  var string = '$';

		  var templates = {
		    'descendant-member': '..{{value}}',
		    'child-member': '.{{value}}',
		    'descendant-subscript': '..[{{value}}]',
		    'child-subscript': '[{{value}}]'
		  };

		  path = this._normalize(path);

		  path.forEach(function(component) {

		    if (component.expression.type == 'root') return;

		    var key = [component.scope, component.operation].join('-');
		    var template = templates[key];
		    var value;

		    if (component.expression.type == 'string_literal') {
		      value = JSON.stringify(component.expression.value);
		    } else {
		      value = component.expression.value;
		    }

		    if (!template) throw new Error("couldn't find template " + key);

		    string += template.replace(/{{value}}/, value);
		  });

		  return string;
		};

		JSONPath.prototype._normalize = function(path) {

		  assert.ok(path, "we need a path");

		  if (typeof path == "string") {

		    return this.parser.parse(path);

		  } else if (Array.isArray(path) && typeof path[0] == "string") {

		    var _path = [ { expression: { type: "root", value: "$" } } ];

		    path.forEach(function(component, index) {

		      if (component == '$' && index === 0) return;

		      if (typeof component == "string" && component.match("^" + dict.identifier + "$")) {

		        _path.push({
		          operation: 'member',
		          scope: 'child',
		          expression: { value: component, type: 'identifier' }
		        });

		      } else {

		        var type = typeof component == "number" ?
		          'numeric_literal' : 'string_literal';

		        _path.push({
		          operation: 'subscript',
		          scope: 'child',
		          expression: { value: component, type: type }
		        });
		      }
		    });

		    return _path;

		  } else if (Array.isArray(path) && typeof path[0] == "object") {

		    return path
		  }

		  throw new Error("couldn't understand path " + path);
		};

		function _is_string(obj) {
		  return Object.prototype.toString.call(obj) == '[object String]';
		}

		JSONPath.Handlers = Handlers;
		JSONPath.Parser = Parser;

		var instance = new JSONPath;
		instance.JSONPath = JSONPath;

		module.exports = instance;

		},{"./dict":2,"./handlers":4,"./parser":6,"assert":8}],6:[function(require,module,exports){
		var grammar = require('./grammar');
		var gparser = require('../generated/parser');

		var Parser = function() {

		  var parser = new gparser.Parser();

		  var _parseError = parser.parseError;
		  parser.yy.parseError = function() {
		    if (parser.yy.ast) {
		      parser.yy.ast.initialize();
		    }
		    _parseError.apply(parser, arguments);
		  };

		  return parser;

		};

		Parser.grammar = grammar;
		module.exports = Parser;

		},{"../generated/parser":1,"./grammar":3}],7:[function(require,module,exports){
		module.exports = function(arr, start, end, step) {

		  if (typeof start == 'string') throw new Error("start cannot be a string");
		  if (typeof end == 'string') throw new Error("end cannot be a string");
		  if (typeof step == 'string') throw new Error("step cannot be a string");

		  var len = arr.length;

		  if (step === 0) throw new Error("step cannot be zero");
		  step = step ? integer(step) : 1;

		  // normalize negative values
		  start = start < 0 ? len + start : start;
		  end = end < 0 ? len + end : end;

		  // default extents to extents
		  start = integer(start === 0 ? 0 : !start ? (step > 0 ? 0 : len - 1) : start);
		  end = integer(end === 0 ? 0 : !end ? (step > 0 ? len : -1) : end);

		  // clamp extents
		  start = step > 0 ? Math.max(0, start) : Math.min(len, start);
		  end = step > 0 ? Math.min(end, len) : Math.max(-1, end);

		  // return empty if extents are backwards
		  if (step > 0 && end <= start) return [];
		  if (step < 0 && start <= end) return [];

		  var result = [];

		  for (var i = start; i != end; i += step) {
		    if ((step < 0 && i <= end) || (step > 0 && i >= end)) break;
		    result.push(arr[i]);
		  }

		  return result;
		};

		function integer(val) {
		  return String(val).match(/^[0-9]+$/) ? parseInt(val) :
		    Number.isFinite(val) ? parseInt(val, 10) : 0;
		}

		},{}],8:[function(require,module,exports){
		// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
		//
		// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
		//
		// Originally from narwhal.js (http://narwhaljs.org)
		// Copyright (c) 2009 Thomas Robinson <280north.com>
		//
		// Permission is hereby granted, free of charge, to any person obtaining a copy
		// of this software and associated documentation files (the 'Software'), to
		// deal in the Software without restriction, including without limitation the
		// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
		// sell copies of the Software, and to permit persons to whom the Software is
		// furnished to do so, subject to the following conditions:
		//
		// The above copyright notice and this permission notice shall be included in
		// all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
		// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
		// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

		// when used in node, this will actually load the util module we depend on
		// versus loading the builtin util module as happens otherwise
		// this is a bug in node module loading as far as I am concerned
		var util = require('util/');

		var pSlice = Array.prototype.slice;
		var hasOwn = Object.prototype.hasOwnProperty;

		// 1. The assert module provides functions that throw
		// AssertionError's when particular conditions are not met. The
		// assert module must conform to the following interface.

		var assert = module.exports = ok;

		// 2. The AssertionError is defined in assert.
		// new assert.AssertionError({ message: message,
		//                             actual: actual,
		//                             expected: expected })

		assert.AssertionError = function AssertionError(options) {
		  this.name = 'AssertionError';
		  this.actual = options.actual;
		  this.expected = options.expected;
		  this.operator = options.operator;
		  if (options.message) {
		    this.message = options.message;
		    this.generatedMessage = false;
		  } else {
		    this.message = getMessage(this);
		    this.generatedMessage = true;
		  }
		  var stackStartFunction = options.stackStartFunction || fail;

		  if (Error.captureStackTrace) {
		    Error.captureStackTrace(this, stackStartFunction);
		  }
		  else {
		    // non v8 browsers so we can have a stacktrace
		    var err = new Error();
		    if (err.stack) {
		      var out = err.stack;

		      // try to strip useless frames
		      var fn_name = stackStartFunction.name;
		      var idx = out.indexOf('\n' + fn_name);
		      if (idx >= 0) {
		        // once we have located the function frame
		        // we need to strip out everything before it (and its line)
		        var next_line = out.indexOf('\n', idx + 1);
		        out = out.substring(next_line + 1);
		      }

		      this.stack = out;
		    }
		  }
		};

		// assert.AssertionError instanceof Error
		util.inherits(assert.AssertionError, Error);

		function replacer(key, value) {
		  if (util.isUndefined(value)) {
		    return '' + value;
		  }
		  if (util.isNumber(value) && !isFinite(value)) {
		    return value.toString();
		  }
		  if (util.isFunction(value) || util.isRegExp(value)) {
		    return value.toString();
		  }
		  return value;
		}

		function truncate(s, n) {
		  if (util.isString(s)) {
		    return s.length < n ? s : s.slice(0, n);
		  } else {
		    return s;
		  }
		}

		function getMessage(self) {
		  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
		         self.operator + ' ' +
		         truncate(JSON.stringify(self.expected, replacer), 128);
		}

		// At present only the three keys mentioned above are used and
		// understood by the spec. Implementations or sub modules can pass
		// other keys to the AssertionError's constructor - they will be
		// ignored.

		// 3. All of the following functions must throw an AssertionError
		// when a corresponding condition is not met, with a message that
		// may be undefined if not provided.  All assertion methods provide
		// both the actual and expected values to the assertion error for
		// display purposes.

		function fail(actual, expected, message, operator, stackStartFunction) {
		  throw new assert.AssertionError({
		    message: message,
		    actual: actual,
		    expected: expected,
		    operator: operator,
		    stackStartFunction: stackStartFunction
		  });
		}

		// EXTENSION! allows for well behaved errors defined elsewhere.
		assert.fail = fail;

		// 4. Pure assertion tests whether a value is truthy, as determined
		// by !!guard.
		// assert.ok(guard, message_opt);
		// This statement is equivalent to assert.equal(true, !!guard,
		// message_opt);. To test strictly for the value true, use
		// assert.strictEqual(true, guard, message_opt);.

		function ok(value, message) {
		  if (!value) fail(value, true, message, '==', assert.ok);
		}
		assert.ok = ok;

		// 5. The equality assertion tests shallow, coercive equality with
		// ==.
		// assert.equal(actual, expected, message_opt);

		assert.equal = function equal(actual, expected, message) {
		  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
		};

		// 6. The non-equality assertion tests for whether two objects are not equal
		// with != assert.notEqual(actual, expected, message_opt);

		assert.notEqual = function notEqual(actual, expected, message) {
		  if (actual == expected) {
		    fail(actual, expected, message, '!=', assert.notEqual);
		  }
		};

		// 7. The equivalence assertion tests a deep equality relation.
		// assert.deepEqual(actual, expected, message_opt);

		assert.deepEqual = function deepEqual(actual, expected, message) {
		  if (!_deepEqual(actual, expected)) {
		    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
		  }
		};

		function _deepEqual(actual, expected) {
		  // 7.1. All identical values are equivalent, as determined by ===.
		  if (actual === expected) {
		    return true;

		  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
		    if (actual.length != expected.length) return false;

		    for (var i = 0; i < actual.length; i++) {
		      if (actual[i] !== expected[i]) return false;
		    }

		    return true;

		  // 7.2. If the expected value is a Date object, the actual value is
		  // equivalent if it is also a Date object that refers to the same time.
		  } else if (util.isDate(actual) && util.isDate(expected)) {
		    return actual.getTime() === expected.getTime();

		  // 7.3 If the expected value is a RegExp object, the actual value is
		  // equivalent if it is also a RegExp object with the same source and
		  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
		  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
		    return actual.source === expected.source &&
		           actual.global === expected.global &&
		           actual.multiline === expected.multiline &&
		           actual.lastIndex === expected.lastIndex &&
		           actual.ignoreCase === expected.ignoreCase;

		  // 7.4. Other pairs that do not both pass typeof value == 'object',
		  // equivalence is determined by ==.
		  } else if (!util.isObject(actual) && !util.isObject(expected)) {
		    return actual == expected;

		  // 7.5 For all other Object pairs, including Array objects, equivalence is
		  // determined by having the same number of owned properties (as verified
		  // with Object.prototype.hasOwnProperty.call), the same set of keys
		  // (although not necessarily the same order), equivalent values for every
		  // corresponding key, and an identical 'prototype' property. Note: this
		  // accounts for both named and indexed properties on Arrays.
		  } else {
		    return objEquiv(actual, expected);
		  }
		}

		function isArguments(object) {
		  return Object.prototype.toString.call(object) == '[object Arguments]';
		}

		function objEquiv(a, b) {
		  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
		    return false;
		  // an identical 'prototype' property.
		  if (a.prototype !== b.prototype) return false;
		  // if one is a primitive, the other must be same
		  if (util.isPrimitive(a) || util.isPrimitive(b)) {
		    return a === b;
		  }
		  var aIsArgs = isArguments(a),
		      bIsArgs = isArguments(b);
		  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
		    return false;
		  if (aIsArgs) {
		    a = pSlice.call(a);
		    b = pSlice.call(b);
		    return _deepEqual(a, b);
		  }
		  var ka = objectKeys(a),
		      kb = objectKeys(b),
		      key, i;
		  // having the same number of owned properties (keys incorporates
		  // hasOwnProperty)
		  if (ka.length != kb.length)
		    return false;
		  //the same set of keys (although not necessarily the same order),
		  ka.sort();
		  kb.sort();
		  //~~~cheap key test
		  for (i = ka.length - 1; i >= 0; i--) {
		    if (ka[i] != kb[i])
		      return false;
		  }
		  //equivalent values for every corresponding key, and
		  //~~~possibly expensive deep test
		  for (i = ka.length - 1; i >= 0; i--) {
		    key = ka[i];
		    if (!_deepEqual(a[key], b[key])) return false;
		  }
		  return true;
		}

		// 8. The non-equivalence assertion tests for any deep inequality.
		// assert.notDeepEqual(actual, expected, message_opt);

		assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
		  if (_deepEqual(actual, expected)) {
		    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
		  }
		};

		// 9. The strict equality assertion tests strict equality, as determined by ===.
		// assert.strictEqual(actual, expected, message_opt);

		assert.strictEqual = function strictEqual(actual, expected, message) {
		  if (actual !== expected) {
		    fail(actual, expected, message, '===', assert.strictEqual);
		  }
		};

		// 10. The strict non-equality assertion tests for strict inequality, as
		// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

		assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
		  if (actual === expected) {
		    fail(actual, expected, message, '!==', assert.notStrictEqual);
		  }
		};

		function expectedException(actual, expected) {
		  if (!actual || !expected) {
		    return false;
		  }

		  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
		    return expected.test(actual);
		  } else if (actual instanceof expected) {
		    return true;
		  } else if (expected.call({}, actual) === true) {
		    return true;
		  }

		  return false;
		}

		function _throws(shouldThrow, block, expected, message) {
		  var actual;

		  if (util.isString(expected)) {
		    message = expected;
		    expected = null;
		  }

		  try {
		    block();
		  } catch (e) {
		    actual = e;
		  }

		  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
		            (message ? ' ' + message : '.');

		  if (shouldThrow && !actual) {
		    fail(actual, expected, 'Missing expected exception' + message);
		  }

		  if (!shouldThrow && expectedException(actual, expected)) {
		    fail(actual, expected, 'Got unwanted exception' + message);
		  }

		  if ((shouldThrow && actual && expected &&
		      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
		    throw actual;
		  }
		}

		// 11. Expected to throw an error:
		// assert.throws(block, Error_opt, message_opt);

		assert.throws = function(block, /*optional*/error, /*optional*/message) {
		  _throws.apply(this, [true].concat(pSlice.call(arguments)));
		};

		// EXTENSION! This is annoying to write outside this module.
		assert.doesNotThrow = function(block, /*optional*/message) {
		  _throws.apply(this, [false].concat(pSlice.call(arguments)));
		};

		assert.ifError = function(err) { if (err) {throw err;}};

		var objectKeys = Object.keys || function (obj) {
		  var keys = [];
		  for (var key in obj) {
		    if (hasOwn.call(obj, key)) keys.push(key);
		  }
		  return keys;
		};

		},{"util/":11}],9:[function(require,module,exports){
		if (typeof Object.create === 'function') {
		  // implementation from standard node.js 'util' module
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor;
		    ctor.prototype = Object.create(superCtor.prototype, {
		      constructor: {
		        value: ctor,
		        enumerable: false,
		        writable: true,
		        configurable: true
		      }
		    });
		  };
		} else {
		  // old school shim for old browsers
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor;
		    var TempCtor = function () {};
		    TempCtor.prototype = superCtor.prototype;
		    ctor.prototype = new TempCtor();
		    ctor.prototype.constructor = ctor;
		  };
		}

		},{}],10:[function(require,module,exports){
		module.exports = function isBuffer(arg) {
		  return arg && typeof arg === 'object'
		    && typeof arg.copy === 'function'
		    && typeof arg.fill === 'function'
		    && typeof arg.readUInt8 === 'function';
		};
		},{}],11:[function(require,module,exports){
		(function (process,global){
		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		var formatRegExp = /%[sdj%]/g;
		exports.format = function(f) {
		  if (!isString(f)) {
		    var objects = [];
		    for (var i = 0; i < arguments.length; i++) {
		      objects.push(inspect(arguments[i]));
		    }
		    return objects.join(' ');
		  }

		  var i = 1;
		  var args = arguments;
		  var len = args.length;
		  var str = String(f).replace(formatRegExp, function(x) {
		    if (x === '%%') return '%';
		    if (i >= len) return x;
		    switch (x) {
		      case '%s': return String(args[i++]);
		      case '%d': return Number(args[i++]);
		      case '%j':
		        try {
		          return JSON.stringify(args[i++]);
		        } catch (_) {
		          return '[Circular]';
		        }
		      default:
		        return x;
		    }
		  });
		  for (var x = args[i]; i < len; x = args[++i]) {
		    if (isNull(x) || !isObject(x)) {
		      str += ' ' + x;
		    } else {
		      str += ' ' + inspect(x);
		    }
		  }
		  return str;
		};


		// Mark that a method should not be used.
		// Returns a modified function which warns once by default.
		// If --no-deprecation is set, then it is a no-op.
		exports.deprecate = function(fn, msg) {
		  // Allow for deprecating things in the process of starting up.
		  if (isUndefined(global.process)) {
		    return function() {
		      return exports.deprecate(fn, msg).apply(this, arguments);
		    };
		  }

		  if (process.noDeprecation === true) {
		    return fn;
		  }

		  var warned = false;
		  function deprecated() {
		    if (!warned) {
		      if (process.throwDeprecation) {
		        throw new Error(msg);
		      } else if (process.traceDeprecation) {
		        console.trace(msg);
		      } else {
		        console.error(msg);
		      }
		      warned = true;
		    }
		    return fn.apply(this, arguments);
		  }

		  return deprecated;
		};


		var debugs = {};
		var debugEnviron;
		exports.debuglog = function(set) {
		  if (isUndefined(debugEnviron))
		    debugEnviron = process.env.NODE_DEBUG || '';
		  set = set.toUpperCase();
		  if (!debugs[set]) {
		    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
		      var pid = process.pid;
		      debugs[set] = function() {
		        var msg = exports.format.apply(exports, arguments);
		        console.error('%s %d: %s', set, pid, msg);
		      };
		    } else {
		      debugs[set] = function() {};
		    }
		  }
		  return debugs[set];
		};


		/**
		 * Echos the value of a value. Trys to print the value out
		 * in the best way possible given the different types.
		 *
		 * @param {Object} obj The object to print out.
		 * @param {Object} opts Optional options object that alters the output.
		 */
		/* legacy: obj, showHidden, depth, colors*/
		function inspect(obj, opts) {
		  // default options
		  var ctx = {
		    seen: [],
		    stylize: stylizeNoColor
		  };
		  // legacy...
		  if (arguments.length >= 3) ctx.depth = arguments[2];
		  if (arguments.length >= 4) ctx.colors = arguments[3];
		  if (isBoolean(opts)) {
		    // legacy...
		    ctx.showHidden = opts;
		  } else if (opts) {
		    // got an "options" object
		    exports._extend(ctx, opts);
		  }
		  // set default options
		  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
		  if (isUndefined(ctx.depth)) ctx.depth = 2;
		  if (isUndefined(ctx.colors)) ctx.colors = false;
		  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
		  if (ctx.colors) ctx.stylize = stylizeWithColor;
		  return formatValue(ctx, obj, ctx.depth);
		}
		exports.inspect = inspect;


		// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
		inspect.colors = {
		  'bold' : [1, 22],
		  'italic' : [3, 23],
		  'underline' : [4, 24],
		  'inverse' : [7, 27],
		  'white' : [37, 39],
		  'grey' : [90, 39],
		  'black' : [30, 39],
		  'blue' : [34, 39],
		  'cyan' : [36, 39],
		  'green' : [32, 39],
		  'magenta' : [35, 39],
		  'red' : [31, 39],
		  'yellow' : [33, 39]
		};

		// Don't use 'blue' not visible on cmd.exe
		inspect.styles = {
		  'special': 'cyan',
		  'number': 'yellow',
		  'boolean': 'yellow',
		  'undefined': 'grey',
		  'null': 'bold',
		  'string': 'green',
		  'date': 'magenta',
		  // "name": intentionally not styling
		  'regexp': 'red'
		};


		function stylizeWithColor(str, styleType) {
		  var style = inspect.styles[styleType];

		  if (style) {
		    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
		           '\u001b[' + inspect.colors[style][1] + 'm';
		  } else {
		    return str;
		  }
		}


		function stylizeNoColor(str, styleType) {
		  return str;
		}


		function arrayToHash(array) {
		  var hash = {};

		  array.forEach(function(val, idx) {
		    hash[val] = true;
		  });

		  return hash;
		}


		function formatValue(ctx, value, recurseTimes) {
		  // Provide a hook for user-specified inspect functions.
		  // Check that value is an object with an inspect function on it
		  if (ctx.customInspect &&
		      value &&
		      isFunction(value.inspect) &&
		      // Filter out the util module, it's inspect function is special
		      value.inspect !== exports.inspect &&
		      // Also filter out any prototype objects using the circular check.
		      !(value.constructor && value.constructor.prototype === value)) {
		    var ret = value.inspect(recurseTimes, ctx);
		    if (!isString(ret)) {
		      ret = formatValue(ctx, ret, recurseTimes);
		    }
		    return ret;
		  }

		  // Primitive types cannot have properties
		  var primitive = formatPrimitive(ctx, value);
		  if (primitive) {
		    return primitive;
		  }

		  // Look up the keys of the object.
		  var keys = Object.keys(value);
		  var visibleKeys = arrayToHash(keys);

		  if (ctx.showHidden) {
		    keys = Object.getOwnPropertyNames(value);
		  }

		  // IE doesn't make error fields non-enumerable
		  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
		  if (isError(value)
		      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
		    return formatError(value);
		  }

		  // Some type of object without properties can be shortcutted.
		  if (keys.length === 0) {
		    if (isFunction(value)) {
		      var name = value.name ? ': ' + value.name : '';
		      return ctx.stylize('[Function' + name + ']', 'special');
		    }
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    }
		    if (isDate(value)) {
		      return ctx.stylize(Date.prototype.toString.call(value), 'date');
		    }
		    if (isError(value)) {
		      return formatError(value);
		    }
		  }

		  var base = '', array = false, braces = ['{', '}'];

		  // Make Array say that they are Array
		  if (isArray(value)) {
		    array = true;
		    braces = ['[', ']'];
		  }

		  // Make functions say that they are functions
		  if (isFunction(value)) {
		    var n = value.name ? ': ' + value.name : '';
		    base = ' [Function' + n + ']';
		  }

		  // Make RegExps say that they are RegExps
		  if (isRegExp(value)) {
		    base = ' ' + RegExp.prototype.toString.call(value);
		  }

		  // Make dates with properties first say the date
		  if (isDate(value)) {
		    base = ' ' + Date.prototype.toUTCString.call(value);
		  }

		  // Make error with message first say the error
		  if (isError(value)) {
		    base = ' ' + formatError(value);
		  }

		  if (keys.length === 0 && (!array || value.length == 0)) {
		    return braces[0] + base + braces[1];
		  }

		  if (recurseTimes < 0) {
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    } else {
		      return ctx.stylize('[Object]', 'special');
		    }
		  }

		  ctx.seen.push(value);

		  var output;
		  if (array) {
		    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
		  } else {
		    output = keys.map(function(key) {
		      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
		    });
		  }

		  ctx.seen.pop();

		  return reduceToSingleString(output, base, braces);
		}


		function formatPrimitive(ctx, value) {
		  if (isUndefined(value))
		    return ctx.stylize('undefined', 'undefined');
		  if (isString(value)) {
		    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
		                                             .replace(/'/g, "\\'")
		                                             .replace(/\\"/g, '"') + '\'';
		    return ctx.stylize(simple, 'string');
		  }
		  if (isNumber(value))
		    return ctx.stylize('' + value, 'number');
		  if (isBoolean(value))
		    return ctx.stylize('' + value, 'boolean');
		  // For some reason typeof null is "object", so special case here.
		  if (isNull(value))
		    return ctx.stylize('null', 'null');
		}


		function formatError(value) {
		  return '[' + Error.prototype.toString.call(value) + ']';
		}


		function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
		  var output = [];
		  for (var i = 0, l = value.length; i < l; ++i) {
		    if (hasOwnProperty(value, String(i))) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          String(i), true));
		    } else {
		      output.push('');
		    }
		  }
		  keys.forEach(function(key) {
		    if (!key.match(/^\d+$/)) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          key, true));
		    }
		  });
		  return output;
		}


		function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
		  var name, str, desc;
		  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
		  if (desc.get) {
		    if (desc.set) {
		      str = ctx.stylize('[Getter/Setter]', 'special');
		    } else {
		      str = ctx.stylize('[Getter]', 'special');
		    }
		  } else {
		    if (desc.set) {
		      str = ctx.stylize('[Setter]', 'special');
		    }
		  }
		  if (!hasOwnProperty(visibleKeys, key)) {
		    name = '[' + key + ']';
		  }
		  if (!str) {
		    if (ctx.seen.indexOf(desc.value) < 0) {
		      if (isNull(recurseTimes)) {
		        str = formatValue(ctx, desc.value, null);
		      } else {
		        str = formatValue(ctx, desc.value, recurseTimes - 1);
		      }
		      if (str.indexOf('\n') > -1) {
		        if (array) {
		          str = str.split('\n').map(function(line) {
		            return '  ' + line;
		          }).join('\n').substr(2);
		        } else {
		          str = '\n' + str.split('\n').map(function(line) {
		            return '   ' + line;
		          }).join('\n');
		        }
		      }
		    } else {
		      str = ctx.stylize('[Circular]', 'special');
		    }
		  }
		  if (isUndefined(name)) {
		    if (array && key.match(/^\d+$/)) {
		      return str;
		    }
		    name = JSON.stringify('' + key);
		    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
		      name = name.substr(1, name.length - 2);
		      name = ctx.stylize(name, 'name');
		    } else {
		      name = name.replace(/'/g, "\\'")
		                 .replace(/\\"/g, '"')
		                 .replace(/(^"|"$)/g, "'");
		      name = ctx.stylize(name, 'string');
		    }
		  }

		  return name + ': ' + str;
		}


		function reduceToSingleString(output, base, braces) {
		  var length = output.reduce(function(prev, cur) {
		    if (cur.indexOf('\n') >= 0) ;
		    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
		  }, 0);

		  if (length > 60) {
		    return braces[0] +
		           (base === '' ? '' : base + '\n ') +
		           ' ' +
		           output.join(',\n  ') +
		           ' ' +
		           braces[1];
		  }

		  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
		}


		// NOTE: These type checking functions intentionally don't use `instanceof`
		// because it is fragile and can be easily faked with `Object.create()`.
		function isArray(ar) {
		  return Array.isArray(ar);
		}
		exports.isArray = isArray;

		function isBoolean(arg) {
		  return typeof arg === 'boolean';
		}
		exports.isBoolean = isBoolean;

		function isNull(arg) {
		  return arg === null;
		}
		exports.isNull = isNull;

		function isNullOrUndefined(arg) {
		  return arg == null;
		}
		exports.isNullOrUndefined = isNullOrUndefined;

		function isNumber(arg) {
		  return typeof arg === 'number';
		}
		exports.isNumber = isNumber;

		function isString(arg) {
		  return typeof arg === 'string';
		}
		exports.isString = isString;

		function isSymbol(arg) {
		  return typeof arg === 'symbol';
		}
		exports.isSymbol = isSymbol;

		function isUndefined(arg) {
		  return arg === void 0;
		}
		exports.isUndefined = isUndefined;

		function isRegExp(re) {
		  return isObject(re) && objectToString(re) === '[object RegExp]';
		}
		exports.isRegExp = isRegExp;

		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}
		exports.isObject = isObject;

		function isDate(d) {
		  return isObject(d) && objectToString(d) === '[object Date]';
		}
		exports.isDate = isDate;

		function isError(e) {
		  return isObject(e) &&
		      (objectToString(e) === '[object Error]' || e instanceof Error);
		}
		exports.isError = isError;

		function isFunction(arg) {
		  return typeof arg === 'function';
		}
		exports.isFunction = isFunction;

		function isPrimitive(arg) {
		  return arg === null ||
		         typeof arg === 'boolean' ||
		         typeof arg === 'number' ||
		         typeof arg === 'string' ||
		         typeof arg === 'symbol' ||  // ES6 symbol
		         typeof arg === 'undefined';
		}
		exports.isPrimitive = isPrimitive;

		exports.isBuffer = require('./support/isBuffer');

		function objectToString(o) {
		  return Object.prototype.toString.call(o);
		}


		function pad(n) {
		  return n < 10 ? '0' + n.toString(10) : n.toString(10);
		}


		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
		              'Oct', 'Nov', 'Dec'];

		// 26 Feb 16:19:34
		function timestamp() {
		  var d = new Date();
		  var time = [pad(d.getHours()),
		              pad(d.getMinutes()),
		              pad(d.getSeconds())].join(':');
		  return [d.getDate(), months[d.getMonth()], time].join(' ');
		}


		// log is just a thin wrapper to console.log that prepends a timestamp
		exports.log = function() {
		  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
		};


		/**
		 * Inherit the prototype methods from one constructor into another.
		 *
		 * The Function.prototype.inherits from lang.js rewritten as a standalone
		 * function (not on Function.prototype). NOTE: If this file is to be loaded
		 * during bootstrapping this function needs to be rewritten using some native
		 * functions as prototype setup using normal JavaScript does not work as
		 * expected during bootstrapping (see mirror.js in r114903).
		 *
		 * @param {function} ctor Constructor function which needs to inherit the
		 *     prototype.
		 * @param {function} superCtor Constructor function to inherit prototype from.
		 */
		exports.inherits = require('inherits');

		exports._extend = function(origin, add) {
		  // Don't do anything if add isn't an object
		  if (!add || !isObject(add)) return origin;

		  var keys = Object.keys(add);
		  var i = keys.length;
		  while (i--) {
		    origin[keys[i]] = add[keys[i]];
		  }
		  return origin;
		};

		function hasOwnProperty(obj, prop) {
		  return Object.prototype.hasOwnProperty.call(obj, prop);
		}

		}).call(this,require('_process'),typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		},{"./support/isBuffer":10,"_process":14,"inherits":9}],12:[function(require,module,exports){

		},{}],13:[function(require,module,exports){
		(function (process){
		// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
		// backported and transplited with Babel, with backwards-compat fixes

		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		// resolves . and .. elements in a path array with directory names there
		// must be no slashes, empty elements, or device names (c:\) in the array
		// (so also no leading and trailing slashes - it does not distinguish
		// relative and absolute paths)
		function normalizeArray(parts, allowAboveRoot) {
		  // if the path tries to go above the root, `up` ends up > 0
		  var up = 0;
		  for (var i = parts.length - 1; i >= 0; i--) {
		    var last = parts[i];
		    if (last === '.') {
		      parts.splice(i, 1);
		    } else if (last === '..') {
		      parts.splice(i, 1);
		      up++;
		    } else if (up) {
		      parts.splice(i, 1);
		      up--;
		    }
		  }

		  // if the path is allowed to go above the root, restore leading ..s
		  if (allowAboveRoot) {
		    for (; up--; up) {
		      parts.unshift('..');
		    }
		  }

		  return parts;
		}

		// path.resolve([from ...], to)
		// posix version
		exports.resolve = function() {
		  var resolvedPath = '',
		      resolvedAbsolute = false;

		  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
		    var path = (i >= 0) ? arguments[i] : process.cwd();

		    // Skip empty and invalid entries
		    if (typeof path !== 'string') {
		      throw new TypeError('Arguments to path.resolve must be strings');
		    } else if (!path) {
		      continue;
		    }

		    resolvedPath = path + '/' + resolvedPath;
		    resolvedAbsolute = path.charAt(0) === '/';
		  }

		  // At this point the path should be resolved to a full absolute path, but
		  // handle relative paths to be safe (might happen when process.cwd() fails)

		  // Normalize the path
		  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
		    return !!p;
		  }), !resolvedAbsolute).join('/');

		  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
		};

		// path.normalize(path)
		// posix version
		exports.normalize = function(path) {
		  var isAbsolute = exports.isAbsolute(path),
		      trailingSlash = substr(path, -1) === '/';

		  // Normalize the path
		  path = normalizeArray(filter(path.split('/'), function(p) {
		    return !!p;
		  }), !isAbsolute).join('/');

		  if (!path && !isAbsolute) {
		    path = '.';
		  }
		  if (path && trailingSlash) {
		    path += '/';
		  }

		  return (isAbsolute ? '/' : '') + path;
		};

		// posix version
		exports.isAbsolute = function(path) {
		  return path.charAt(0) === '/';
		};

		// posix version
		exports.join = function() {
		  var paths = Array.prototype.slice.call(arguments, 0);
		  return exports.normalize(filter(paths, function(p, index) {
		    if (typeof p !== 'string') {
		      throw new TypeError('Arguments to path.join must be strings');
		    }
		    return p;
		  }).join('/'));
		};


		// path.relative(from, to)
		// posix version
		exports.relative = function(from, to) {
		  from = exports.resolve(from).substr(1);
		  to = exports.resolve(to).substr(1);

		  function trim(arr) {
		    var start = 0;
		    for (; start < arr.length; start++) {
		      if (arr[start] !== '') break;
		    }

		    var end = arr.length - 1;
		    for (; end >= 0; end--) {
		      if (arr[end] !== '') break;
		    }

		    if (start > end) return [];
		    return arr.slice(start, end - start + 1);
		  }

		  var fromParts = trim(from.split('/'));
		  var toParts = trim(to.split('/'));

		  var length = Math.min(fromParts.length, toParts.length);
		  var samePartsLength = length;
		  for (var i = 0; i < length; i++) {
		    if (fromParts[i] !== toParts[i]) {
		      samePartsLength = i;
		      break;
		    }
		  }

		  var outputParts = [];
		  for (var i = samePartsLength; i < fromParts.length; i++) {
		    outputParts.push('..');
		  }

		  outputParts = outputParts.concat(toParts.slice(samePartsLength));

		  return outputParts.join('/');
		};

		exports.sep = '/';
		exports.delimiter = ':';

		exports.dirname = function (path) {
		  if (typeof path !== 'string') path = path + '';
		  if (path.length === 0) return '.';
		  var code = path.charCodeAt(0);
		  var hasRoot = code === 47 /*/*/;
		  var end = -1;
		  var matchedSlash = true;
		  for (var i = path.length - 1; i >= 1; --i) {
		    code = path.charCodeAt(i);
		    if (code === 47 /*/*/) {
		        if (!matchedSlash) {
		          end = i;
		          break;
		        }
		      } else {
		      // We saw the first non-path separator
		      matchedSlash = false;
		    }
		  }

		  if (end === -1) return hasRoot ? '/' : '.';
		  if (hasRoot && end === 1) {
		    // return '//';
		    // Backwards-compat fix:
		    return '/';
		  }
		  return path.slice(0, end);
		};

		function basename(path) {
		  if (typeof path !== 'string') path = path + '';

		  var start = 0;
		  var end = -1;
		  var matchedSlash = true;
		  var i;

		  for (i = path.length - 1; i >= 0; --i) {
		    if (path.charCodeAt(i) === 47 /*/*/) {
		        // If we reached a path separator that was not part of a set of path
		        // separators at the end of the string, stop now
		        if (!matchedSlash) {
		          start = i + 1;
		          break;
		        }
		      } else if (end === -1) {
		      // We saw the first non-path separator, mark this as the end of our
		      // path component
		      matchedSlash = false;
		      end = i + 1;
		    }
		  }

		  if (end === -1) return '';
		  return path.slice(start, end);
		}

		// Uses a mixed approach for backwards-compatibility, as ext behavior changed
		// in new Node.js versions, so only basename() above is backported here
		exports.basename = function (path, ext) {
		  var f = basename(path);
		  if (ext && f.substr(-1 * ext.length) === ext) {
		    f = f.substr(0, f.length - ext.length);
		  }
		  return f;
		};

		exports.extname = function (path) {
		  if (typeof path !== 'string') path = path + '';
		  var startDot = -1;
		  var startPart = 0;
		  var end = -1;
		  var matchedSlash = true;
		  // Track the state of characters (if any) we see before our first dot and
		  // after any path separator we find
		  var preDotState = 0;
		  for (var i = path.length - 1; i >= 0; --i) {
		    var code = path.charCodeAt(i);
		    if (code === 47 /*/*/) {
		        // If we reached a path separator that was not part of a set of path
		        // separators at the end of the string, stop now
		        if (!matchedSlash) {
		          startPart = i + 1;
		          break;
		        }
		        continue;
		      }
		    if (end === -1) {
		      // We saw the first non-path separator, mark this as the end of our
		      // extension
		      matchedSlash = false;
		      end = i + 1;
		    }
		    if (code === 46 /*.*/) {
		        // If this is our first dot, mark it as the start of our extension
		        if (startDot === -1)
		          startDot = i;
		        else if (preDotState !== 1)
		          preDotState = 1;
		    } else if (startDot !== -1) {
		      // We saw a non-dot and non-path separator before our dot, so we should
		      // have a good chance at having a non-empty extension
		      preDotState = -1;
		    }
		  }

		  if (startDot === -1 || end === -1 ||
		      // We saw a non-dot character immediately before the dot
		      preDotState === 0 ||
		      // The (right-most) trimmed path component is exactly '..'
		      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
		    return '';
		  }
		  return path.slice(startDot, end);
		};

		function filter (xs, f) {
		    if (xs.filter) return xs.filter(f);
		    var res = [];
		    for (var i = 0; i < xs.length; i++) {
		        if (f(xs[i], i, xs)) res.push(xs[i]);
		    }
		    return res;
		}

		// String.prototype.substr - negative index don't work in IE8
		var substr = 'ab'.substr(-1) === 'b'
		    ? function (str, start, len) { return str.substr(start, len) }
		    : function (str, start, len) {
		        if (start < 0) start = str.length + start;
		        return str.substr(start, len);
		    }
		;

		}).call(this,require('_process'));
		},{"_process":14}],14:[function(require,module,exports){
		// shim for using process in browser
		var process = module.exports = {};

		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.

		var cachedSetTimeout;
		var cachedClearTimeout;

		function defaultSetTimout() {
		    throw new Error('setTimeout has not been defined');
		}
		function defaultClearTimeout () {
		    throw new Error('clearTimeout has not been defined');
		}
		(function () {
		    try {
		        if (typeof setTimeout === 'function') {
		            cachedSetTimeout = setTimeout;
		        } else {
		            cachedSetTimeout = defaultSetTimout;
		        }
		    } catch (e) {
		        cachedSetTimeout = defaultSetTimout;
		    }
		    try {
		        if (typeof clearTimeout === 'function') {
		            cachedClearTimeout = clearTimeout;
		        } else {
		            cachedClearTimeout = defaultClearTimeout;
		        }
		    } catch (e) {
		        cachedClearTimeout = defaultClearTimeout;
		    }
		} ());
		function runTimeout(fun) {
		    if (cachedSetTimeout === setTimeout) {
		        //normal enviroments in sane situations
		        return setTimeout(fun, 0);
		    }
		    // if setTimeout wasn't available but was latter defined
		    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
		        cachedSetTimeout = setTimeout;
		        return setTimeout(fun, 0);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedSetTimeout(fun, 0);
		    } catch(e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
		            return cachedSetTimeout.call(null, fun, 0);
		        } catch(e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
		            return cachedSetTimeout.call(this, fun, 0);
		        }
		    }


		}
		function runClearTimeout(marker) {
		    if (cachedClearTimeout === clearTimeout) {
		        //normal enviroments in sane situations
		        return clearTimeout(marker);
		    }
		    // if clearTimeout wasn't available but was latter defined
		    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
		        cachedClearTimeout = clearTimeout;
		        return clearTimeout(marker);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedClearTimeout(marker);
		    } catch (e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
		            return cachedClearTimeout.call(null, marker);
		        } catch (e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
		            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
		            return cachedClearTimeout.call(this, marker);
		        }
		    }



		}
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;

		function cleanUpNextTick() {
		    if (!draining || !currentQueue) {
		        return;
		    }
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}

		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = runTimeout(cleanUpNextTick);
		    draining = true;

		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    runClearTimeout(timeout);
		}

		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        runTimeout(drainQueue);
		    }
		};

		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;
		process.prependListener = noop;
		process.prependOnceListener = noop;

		process.listeners = function (name) { return [] };

		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};

		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };

		},{}],15:[function(require,module,exports){
		var unparse = require('escodegen').generate;

		module.exports = function (ast, vars) {
		    if (!vars) vars = {};
		    var FAIL = {};
		    
		    var result = (function walk (node, scopeVars) {
		        if (node.type === 'Literal') {
		            return node.value;
		        }
		        else if (node.type === 'UnaryExpression'){
		            var val = walk(node.argument);
		            if (node.operator === '+') return +val
		            if (node.operator === '-') return -val
		            if (node.operator === '~') return ~val
		            if (node.operator === '!') return !val
		            return FAIL
		        }
		        else if (node.type === 'ArrayExpression') {
		            var xs = [];
		            for (var i = 0, l = node.elements.length; i < l; i++) {
		                var x = walk(node.elements[i]);
		                if (x === FAIL) return FAIL;
		                xs.push(x);
		            }
		            return xs;
		        }
		        else if (node.type === 'ObjectExpression') {
		            var obj = {};
		            for (var i = 0; i < node.properties.length; i++) {
		                var prop = node.properties[i];
		                var value = prop.value === null
		                    ? prop.value
		                    : walk(prop.value)
		                ;
		                if (value === FAIL) return FAIL;
		                obj[prop.key.value || prop.key.name] = value;
		            }
		            return obj;
		        }
		        else if (node.type === 'BinaryExpression' ||
		                 node.type === 'LogicalExpression') {
		            var l = walk(node.left);
		            if (l === FAIL) return FAIL;
		            var r = walk(node.right);
		            if (r === FAIL) return FAIL;
		            
		            var op = node.operator;
		            if (op === '==') return l == r;
		            if (op === '===') return l === r;
		            if (op === '!=') return l != r;
		            if (op === '!==') return l !== r;
		            if (op === '+') return l + r;
		            if (op === '-') return l - r;
		            if (op === '*') return l * r;
		            if (op === '/') return l / r;
		            if (op === '%') return l % r;
		            if (op === '<') return l < r;
		            if (op === '<=') return l <= r;
		            if (op === '>') return l > r;
		            if (op === '>=') return l >= r;
		            if (op === '|') return l | r;
		            if (op === '&') return l & r;
		            if (op === '^') return l ^ r;
		            if (op === '&&') return l && r;
		            if (op === '||') return l || r;
		            
		            return FAIL;
		        }
		        else if (node.type === 'Identifier') {
		            if ({}.hasOwnProperty.call(vars, node.name)) {
		                return vars[node.name];
		            }
		            else return FAIL;
		        }
		        else if (node.type === 'ThisExpression') {
		            if ({}.hasOwnProperty.call(vars, 'this')) {
		                return vars['this'];
		            }
		            else return FAIL;
		        }
		        else if (node.type === 'CallExpression') {
		            var callee = walk(node.callee);
		            if (callee === FAIL) return FAIL;
		            if (typeof callee !== 'function') return FAIL;
		            
		            var ctx = node.callee.object ? walk(node.callee.object) : FAIL;
		            if (ctx === FAIL) ctx = null;

		            var args = [];
		            for (var i = 0, l = node.arguments.length; i < l; i++) {
		                var x = walk(node.arguments[i]);
		                if (x === FAIL) return FAIL;
		                args.push(x);
		            }
		            return callee.apply(ctx, args);
		        }
		        else if (node.type === 'MemberExpression') {
		            var obj = walk(node.object);
		            // do not allow access to methods on Function 
		            if((obj === FAIL) || (typeof obj == 'function')){
		                return FAIL;
		            }
		            if (node.property.type === 'Identifier') {
		                return obj[node.property.name];
		            }
		            var prop = walk(node.property);
		            if (prop === FAIL) return FAIL;
		            return obj[prop];
		        }
		        else if (node.type === 'ConditionalExpression') {
		            var val = walk(node.test);
		            if (val === FAIL) return FAIL;
		            return val ? walk(node.consequent) : walk(node.alternate)
		        }
		        else if (node.type === 'ExpressionStatement') {
		            var val = walk(node.expression);
		            if (val === FAIL) return FAIL;
		            return val;
		        }
		        else if (node.type === 'ReturnStatement') {
		            return walk(node.argument)
		        }
		        else if (node.type === 'FunctionExpression') {
		            
		            var bodies = node.body.body;
		            
		            // Create a "scope" for our arguments
		            var oldVars = {};
		            Object.keys(vars).forEach(function(element){
		                oldVars[element] = vars[element];
		            });

		            for(var i=0; i<node.params.length; i++){
		                var key = node.params[i];
		                if(key.type == 'Identifier'){
		                  vars[key.name] = null;
		                }
		                else return FAIL;
		            }
		            for(var i in bodies){
		                if(walk(bodies[i]) === FAIL){
		                    return FAIL;
		                }
		            }
		            // restore the vars and scope after we walk
		            vars = oldVars;
		            
		            var keys = Object.keys(vars);
		            var vals = keys.map(function(key) {
		                return vars[key];
		            });
		            return Function(keys.join(', '), 'return ' + unparse(node)).apply(null, vals);
		        }
		        else if (node.type === 'TemplateLiteral') {
		            var str = '';
		            for (var i = 0; i < node.expressions.length; i++) {
		                str += walk(node.quasis[i]);
		                str += walk(node.expressions[i]);
		            }
		            str += walk(node.quasis[i]);
		            return str;
		        }
		        else if (node.type === 'TaggedTemplateExpression') {
		            var tag = walk(node.tag);
		            var quasi = node.quasi;
		            var strings = quasi.quasis.map(walk);
		            var values = quasi.expressions.map(walk);
		            return tag.apply(null, [strings].concat(values));
		        }
		        else if (node.type === 'TemplateElement') {
		            return node.value.cooked;
		        }
		        else return FAIL;
		    })(ast);
		    
		    return result === FAIL ? undefined : result;
		};

		},{"escodegen":12}],"jsonpath":[function(require,module,exports){
		module.exports = require('./lib/index');

		},{"./lib/index":5}]},{},["jsonpath"])("jsonpath")
		}); 
	} (jsonpath));

	var jsonpathExports = jsonpath.exports;
	var JSONPath = /*@__PURE__*/getDefaultExportFromCjs(jsonpathExports);

	function getBrowser() {
	    const userAgent = navigator.userAgent;
	    let browser = 'unkown';
	    // Detect browser name
	    browser = /ucbrowser/i.test(userAgent) ? 'UCBrowser' : browser;
	    browser = /edg/i.test(userAgent) ? 'Edge' : browser;
	    browser = /googlebot/i.test(userAgent) ? 'GoogleBot' : browser;
	    browser = /chromium/i.test(userAgent) ? 'Chromium' : browser;
	    browser = /Whale/i.test(userAgent) ? 'Whale' : browser;
	    browser = /firefox|fxios/i.test(userAgent) && !/seamonkey/i.test(userAgent) ? 'Firefox' : browser;
	    browser = /; msie|trident/i.test(userAgent) && !/ucbrowser/i.test(userAgent) ? 'IE' : browser;
	    browser = /chrome|crios/i.test(userAgent) && !/opr|opera|chromium|edg|ucbrowser|googlebot|Whale/i.test(userAgent) ? 'Chrome' : browser;
	    browser = /safari/i.test(userAgent) && !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(userAgent) ? 'Safari' : browser;
	    browser = /opr|opera/i.test(userAgent) ? 'Opera' : browser;
	    return browser.toLowerCase();
	}
	function getOS() {
	    let os;
	    const ua = navigator.userAgent;
	    if (ua.match(/Win(dows )?NT 6\.0/)) {
	        os = 'Windows Vista';
	    }
	    else if (ua.match(/Win(dows )?(NT 5\.1|XP)/)) {
	        os = 'Windows XP';
	    }
	    else {
	        if (ua.indexOf('Windows NT 5.1') != -1 || ua.indexOf('Windows XP') != -1) {
	            os = 'Windows XP';
	        }
	        else if (ua.indexOf('Windows NT 7.0') != -1 || ua.indexOf('Windows NT 6.1') != -1) {
	            os = 'Windows 7';
	        }
	        else if (ua.indexOf('Windows NT 8.0') != -1 || ua.indexOf('Windows NT 6.2') != -1) {
	            os = 'Windows 8';
	        }
	        else if (ua.indexOf('Windows NT 8.1') != -1 || ua.indexOf('Windows NT 6.3') != -1) {
	            os = 'Windows 8.1';
	        }
	        else if (ua.indexOf('Windows NT 10.0') != -1 || ua.indexOf('Windows NT 6.4') != -1) {
	            os = 'Windows 10';
	        }
	        else if (ua.indexOf('iPad') != -1 || ua.indexOf('iPhone') != -1 || ua.indexOf('iPod') != -1) {
	            os = 'Apple iOS';
	        }
	        else if (ua.indexOf('Android') != -1) {
	            os = 'Android OS';
	        }
	        else if (ua.match(/Win(dows )?NT( 4\.0)?/)) {
	            os = 'Windows NT';
	        }
	        else if (ua.match(/Mac|PPC/)) {
	            os = 'Mac OS';
	        }
	        else if (ua.match(/Linux/)) {
	            os = 'Linux';
	        }
	        else if (ua.match(/(Free|Net|Open)BSD/)) {
	            os = RegExp.$1 + 'BSD';
	        }
	        else if (ua.match(/SunOS/)) {
	            os = 'Solaris';
	        }
	    }
	    if (os.indexOf('Windows') != -1) {
	        if (navigator.userAgent.indexOf('WOW64') > -1 || navigator.userAgent.indexOf('Win64') > -1) {
	            os += ' 64bit';
	        }
	        else {
	            os += ' 32bit';
	        }
	    }
	    return os;
	}
	const isIE = getBrowser() === 'ie';
	const hyphenateCache = {};
	const hyphenateRe = /([a-z\d])([A-Z])/g;
	const INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e308;
	function hyphenate(str) {
	    if (!(str in hyphenateCache)) {
	        hyphenateCache[str] = str.replace(hyphenateRe, '$1-$2').toLowerCase();
	    }
	    return hyphenateCache[str];
	}
	const camelizeRe = /-(\w)/g;
	function camelize(str) {
	    return str.replace(camelizeRe, toUpper);
	}
	function trim(str) {
	    return str.split(' ').join('');
	}
	function toUpper(_, c) {
	    return c ? c.toUpperCase() : '';
	}
	function hasOwn$1(obj, key) {
	    return Object.prototype.hasOwnProperty.call(obj, key);
	}
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	function isObject(obj) {
	    return obj !== null && typeof obj === 'object';
	}
	function isNull(obj) {
	    return obj === null;
	}
	function isArray$1(obj) {
	    return Array.isArray(obj);
	}
	function isPlainObject$1(obj) {
	    return Object.prototype.toString.call(obj) === '[object Object]';
	}
	function isWindow(obj) {
	    return isObject(obj) && obj === obj.window;
	}
	function isDocument(obj) {
	    return isObject(obj) && obj.nodeType === 9;
	}
	function isNode(obj) {
	    return isObject(obj) && obj.nodeType >= 1;
	}
	function isElement$2(obj) {
	    return isObject(obj) && obj.nodeType === 1;
	}
	function isNodeCollection(obj) {
	    return Object.prototype.toString.call(obj).match(/^\[object (NodeList|HTMLCollection)\]$/);
	}
	function isString(value) {
	    return typeof value === 'string';
	}
	function isDate(value) {
	    switch (typeof value) {
	        case 'number':
	            return true;
	        case 'string':
	            return !isNaN(Date.parse(value));
	        case 'object':
	            if (value instanceof Date) {
	                return !isNaN(value.getTime());
	            }
	        default:
	            return false;
	    }
	}
	function isBoolean(value) {
	    return typeof value === 'boolean';
	}
	function isNumber(value) {
	    return typeof value === 'number';
	}
	function isNumeric(value) {
	    return isNumber(value) || (isString(value) && !isNaN(value - parseFloat(value)));
	}
	function isEmpty(obj) {
	    return !(Array.isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
	}
	function isUndefined(value) {
	    return value === void 0;
	}
	function isHtml(str) {
	    return isString(str) && (str[0] === '<' || str.match(/^\s*</));
	}
	function toBoolean(value) {
	    return isBoolean(value) ? value : value === 'true' || value === '1' || value === '' ? true : value === 'false' || value === '0' ? false : value;
	}
	function toFinite(value) {
	    if (!value) {
	        return value === 0 ? value : 0;
	    }
	    value = toNumber(value);
	    if (value === INFINITY || value === -INFINITY) {
	        const sign = value < 0 ? -1 : 1;
	        return sign * MAX_INTEGER;
	    }
	    return value === value ? value : 0;
	}
	function toInteger(value) {
	    const result = toFinite(value), remainder = result % 1;
	    return result === result ? (remainder ? result - remainder : result) : 0;
	}
	function toNumber(value) {
	    const number = Number(value);
	    return !isNaN(number) ? number : 0;
	}
	function getNumber(value) {
	    return toNumber(/^[-0-9]+/.exec(value)) || 0;
	}
	function toFloat(value) {
	    return parseFloat(value) || 0;
	}
	function toNode(element) {
	    return isNode(element) ? element : isNodeCollection(element) ? element[0] : Array.isArray(element) ? toNode(element[0]) : null;
	}
	function toNodes(element) {
	    return isNode(element) ? [element] : isNodeCollection(element) ? Array.prototype.slice.call(element) : Array.isArray(element) ? element.map(toNode).filter(Boolean) : [];
	}
	function toWindow(element) {
	    if (isWindow(element)) {
	        return element;
	    }
	    element = toNode(element);
	    return element ? (isDocument(element) ? element : element.ownerDocument).defaultView : window;
	}
	function toList(value) {
	    return isArray$1(value) ? value : isString(value) ? value.split(/,(?![^(]*\))/).map((value) => (isNumeric(value) ? toNumber(value) : toBoolean(value.trim()))) : [value];
	}
	function toMs(time) {
	    return !time ? 0 : endsWith(time, 'ms') ? toFloat(time) : toFloat(time) * 1000;
	}
	function toDate(value) {
	    if (!isDate(value)) {
	        return;
	    }
	    switch (typeof value) {
	        case 'number':
	        case 'string':
	            return new Date(value);
	        case 'object':
	            if (value instanceof Date) {
	                return value;
	            }
	        default:
	            return;
	    }
	}
	function toJson(str) {
	    return JSON.parse(str.replace(/\r/gi, '\\r').replace(/\n/gi, '\\n').replace(/\t/gi, '\\t').replace(/\f/gi, '\\f'));
	}
	function isEqual(value, other) {
	    return value === other || (isObject(value) && isObject(other) && Object.keys(value).length === Object.keys(other).length && each(value, (val, key) => val === other[key]));
	}
	// MAC
	function normalizeMacFormat(mac) {
	    let temp = '';
	    let result = '';
	    if (isEmpty(mac) && (isMAC(mac, ':') || isMAC(mac, '-'))) {
	        if (typeof mac === 'string' && isFunction(mac.replace)) {
	            temp = mac.replace(/[^a-zA-Z0-9]*/g, '');
	        }
	        if (temp !== null && temp.length === 12) {
	            temp = temp.toUpperCase();
	            result = temp.substring(0, 2) + ':';
	            result += temp.substring(2, 4) + ':';
	            result += temp.substring(4, 6) + ':';
	            result += temp.substring(6, 8) + ':';
	            result += temp.substring(8, 10) + ':';
	            result += temp.substring(10, 12);
	            return result;
	        }
	    }
	    return mac;
	}
	function isMAC(macStr, sep = ':') {
	    let result = true;
	    if (!sep) {
	        sep = ':';
	    }
	    if (!macStr) {
	        result = false;
	    }
	    else {
	        try {
	            const st = macStr.split(sep);
	            const macLen = 6;
	            // 표시형식 검사
	            if (macStr.length === 17 && st.length === macLen) {
	                for (let i = 0; i < macLen; i++) {
	                    const thisByte = parseInt(st[i], 16);
	                    // 유효한 값 검사
	                    if (thisByte < 0 || thisByte > 255) {
	                        result = false;
	                        break;
	                    }
	                }
	            }
	            else {
	                result = false;
	            }
	        }
	        catch (e) {
	            result = false;
	        }
	    }
	    return result;
	}
	function isNetworkAndBroadcastAddr(ipStr) {
	    if (ipStr === '0.0.0.0' || ipStr === '255.255.255.255') {
	        return true;
	    }
	    return false;
	}
	function isIPv4(ipStr) {
	    if (!ipStr || ipStr.includes('/') || ipStr.includes('-')) {
	        return false;
	    }
	    const parts = ipStr.split('.').map(part => parseInt(part, 10));
	    return parts.length === 4 && parts.every(part => isNumeric(part) && part >= 0 && part <= 255);
	}
	/** 마지막 자리에 0 또는 255 올 수 없음 */
	function isIPv4Exclusive(ipStr) {
	    if (!ipStr || ipStr.includes('/') || ipStr.includes('-')) {
	        return false;
	    }
	    const parts = ipStr.split('.').map(part => parseInt(part, 10));
	    return (parts.length === 4 &&
	        parts.every((part, idx) => {
	            if (idx === 3) {
	                return isNumeric(part) && part >= 1 && part <= 254;
	            }
	            return isNumeric(part) && part >= 0 && part <= 255;
	        }));
	}
	function isIPv6(ipStr) {
	    if (!ipStr || ipStr.includes('.') || ipStr.includes('/') || ipStr.includes('-')) {
	        return false;
	    }
	    return ipStr.split(':').every(part => part.length <= 4);
	}
	/** cidr 표기법의 IP 주소인지 확인, 1.1.1.1/7 */
	function isCidrIPv4(ipStr) {
	    if (!ipStr || ipStr.includes('-')) {
	        return false;
	    }
	    const cidrPattern = ipStr.split('/');
	    const [cidrIp, cidrPrefix] = cidrPattern;
	    const cidrPrefixCheck = isNumeric(cidrPrefix) && parseInt(cidrPrefix) >= 0 && parseInt(cidrPrefix) <= 32 && !cidrPrefix.includes('.');
	    return cidrPattern.length === 2 && isIPv4(cidrIp) && cidrPrefixCheck;
	}
	function isCidrIPv6(ipStr) {
	    if (!ipStr || ipStr.includes('-')) {
	        return false;
	    }
	    const cidrPattern = ipStr.split('/');
	    const [cidrIp, cidrPrefix] = cidrPattern;
	    const cidrPrefixCheck = isNumeric(cidrPrefix) && parseInt(cidrPrefix) >= 0 && parseInt(cidrPrefix) <= 128 && !cidrPrefix.includes(':');
	    return cidrPattern.length === 2 && isIPv6(cidrIp) && cidrPrefixCheck;
	}
	/** 축약한 IP의 범위인지 확인, 1.1.1.1-2 */
	function isRangeIPv4(ipStr) {
	    if (!ipStr || ipStr.includes('/')) {
	        return false;
	    }
	    const rangePattern = ipStr.split('-');
	    const [startIp, endPrefix] = rangePattern;
	    const startIpLast = +startIp.split('.')[3];
	    const endPrefixCheck = isNumeric(endPrefix) && parseInt(endPrefix) > startIpLast && parseInt(endPrefix) <= 255 && !endPrefix.includes('.');
	    return rangePattern.length === 2 && isIPv4(startIp) && endPrefixCheck;
	}
	function isRangeIPv6(ipStr) {
	    if (!ipStr || ipStr.includes('/')) {
	        return false;
	    }
	    const rangePattern = ipStr.split('-');
	    const [startIp, endPrefix] = rangePattern;
	    const startIpLast = parseInt(startIp.split(':')[7], 16);
	    const endIpLast = parseInt(endPrefix, 16);
	    const endPrefixCheck = isNumeric(endIpLast) && endIpLast > startIpLast && !endPrefix.includes('.');
	    return rangePattern.length === 2 && isIPv6(startIp) && endPrefixCheck;
	}
	/** IP의 범위인지 확인, 1.1.1.1-1.1.1.2 */
	function isLongRangeIPv4(ipStr) {
	    if (!ipStr || ipStr.includes('/')) {
	        return false;
	    }
	    const rangePattern = ipStr.split('-');
	    const [startIp, endIp] = rangePattern;
	    const compareIps = (startIp, endIp) => {
	        const startIpParts = startIp.split('.').map(Number);
	        const endIpParts = endIp.split('.').map(Number);
	        for (let i = 0; i < 4; i++) {
	            if (i === 3) {
	                if (startIpParts[i] >= endIpParts[i]) {
	                    return false;
	                }
	            }
	            else {
	                if (startIpParts[i] > endIpParts[i]) {
	                    return false;
	                }
	            }
	        }
	        return true;
	    };
	    return rangePattern.length === 2 && isIPv4(startIp) && isIPv4(endIp) && compareIps(startIp, endIp);
	}
	function isLongRangeIPv6(ipStr) {
	    if (!ipStr || ipStr.includes('/')) {
	        return false;
	    }
	    const rangePattern = ipStr.split('-');
	    const [startIp, endIp] = rangePattern;
	    const compareIps = (startIp, endIp) => {
	        const startIpParts = startIp.split(':').map(part => parseInt(part, 16));
	        const endIpParts = endIp.split(':').map(part => parseInt(part, 16));
	        for (let i = 0; i < 8; i++) {
	            if (i === 7) {
	                if (startIpParts[i] >= endIpParts[i]) {
	                    return false;
	                }
	            }
	            else {
	                if (startIpParts[i] > endIpParts[i]) {
	                    return false;
	                }
	            }
	        }
	        return true;
	    };
	    return rangePattern.length === 2 && isIPv6(startIp) && isIPv6(endIp) && compareIps(startIp, endIp);
	}
	/** 특정 패턴의 IPv4 주소인지 확인, ipPattern값이 없으면 모두 체크 (ipstr|cidr|range|longRange)  */
	function isIPv4Pattern(ipStr, ipPattern = 'all', isSubnetMask = false) {
	    if (!ipStr) {
	        return false;
	    }
	    if (ipPattern === 'all') {
	        return isCidrIPv4(ipStr) || isRangeIPv4(ipStr) || isLongRangeIPv4(ipStr) || isIPv4(ipStr);
	    }
	    const patternChecks = {
	        ipstr: isSubnetMask ? isIPv4 : isIPv4Exclusive,
	        cidr: isCidrIPv4,
	        range: isRangeIPv4,
	        longRange: isLongRangeIPv4
	    };
	    return ipPattern.split('|').some(pattern => { var _a; return (_a = patternChecks[pattern]) === null || _a === void 0 ? void 0 : _a.call(patternChecks, ipStr); });
	}
	/** 특정 패턴의 IPv6 주소인지 확인, ipPattern값이 없으면 모두 체크 (ipstr|cidr|range|longRange)  */
	function isIPv6Pattern(ipStr, ipPattern = 'all') {
	    if (!ipStr) {
	        return false;
	    }
	    if (ipPattern === 'all') {
	        return isCidrIPv6(ipStr) || isRangeIPv6(ipStr) || isLongRangeIPv6(ipStr) || isIPv6(ipStr);
	    }
	    const patternChecks = {
	        ipstr: isIPv6,
	        cidr: isCidrIPv6,
	        range: isRangeIPv6,
	        longRange: isLongRangeIPv6
	    };
	    return ipPattern.split('|').some(pattern => { var _a; return (_a = patternChecks[pattern]) === null || _a === void 0 ? void 0 : _a.call(patternChecks, ipStr); });
	}
	/** 버전과 패턴을 받아서 IP 주소인지 검증*/
	function isIP(ipStr, version = 'all', ipPattern = 'all') {
	    switch (version) {
	        case 'v4':
	            return isIPv4Pattern(ipStr, ipPattern);
	        case 'v6':
	            return isIPv6Pattern(ipStr, ipPattern);
	        default:
	            return isIPv4Pattern(ipStr, ipPattern) || isIPv6Pattern(ipStr, ipPattern);
	    }
	}
	const strPrototype = String.prototype;
	const startsWithFn = strPrototype.startsWith ||
	    function (search) {
	        return this.lastIndexOf(search, 0) === 0;
	    };
	function startsWith(str, search) {
	    return startsWithFn.call(str, search);
	}
	const endsWithFn = strPrototype.endsWith ||
	    function (search) {
	        return this.substr(-search.length) === search;
	    };
	function endsWith(str, search) {
	    return endsWithFn.call(str, search);
	}
	const arrPrototype = Array.prototype;
	const includesFn = function (search, i) {
	    return ~this.indexOf(search, i);
	};
	const includesStr = strPrototype.includes || includesFn;
	const includesArray = arrPrototype.includes || includesFn;
	function includes(obj, search) {
	    return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
	}
	function each(obj, cb) {
	    for (const key in obj) {
	        if (false === cb(obj[key], key)) {
	            return false;
	        }
	    }
	    return true;
	}
	const assign$1 = Object.assign ||
	    function (target, ...args) {
	        target = Object(target);
	        for (let i = 0; i < args.length; i++) {
	            const source = args[i];
	            if (source !== null) {
	                for (const key in source) {
	                    if (hasOwn$1(source, key)) {
	                        target[key] = source[key];
	                    }
	                }
	            }
	        }
	        return target;
	    };
	function drop(array, n, guard) {
	    const length = array == null ? 0 : array.length;
	    if (!length) {
	        return [];
	    }
	    n = guard || n === undefined ? 1 : toInteger(n);
	    return baseSlice(array, n < 0 ? 0 : n, length);
	}
	function dropRight(array, n = 1, guard) {
	    const length = array == null ? 0 : array.length;
	    if (!length) {
	        return [];
	    }
	    n = guard || n === undefined ? 1 : toInteger(n);
	    n = length - n;
	    return baseSlice(array, 0, n < 0 ? 0 : n);
	}
	function baseSlice(array, start, end) {
	    let index = -1, length = array.length;
	    if (start < 0) {
	        start = -start > length ? 0 : length + start;
	    }
	    end = end > length ? length : end;
	    if (end < 0) {
	        end += length;
	    }
	    length = start > end ? 0 : (end - start) >>> 0;
	    start >>>= 0;
	    const result = Array(length);
	    while (++index < length) {
	        result[index] = array[index + start];
	    }
	    return result;
	}
	function last(array) {
	    const length = array == null ? 0 : array.length;
	    return length ? array[length - 1] : undefined;
	}
	function clamp(number, min = 0, max = 1) {
	    return Math.min(Math.max(toNumber(number) || 0, min), max);
	}
	// shallow extend
	function extend$2(defaults, options) {
	    const extended = {};
	    for (const prop in defaults) {
	        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
	            extended[prop] = defaults[prop];
	        }
	    }
	    for (const prop in options) {
	        if (Object.prototype.hasOwnProperty.call(options, prop)) {
	            extended[prop] = options[prop];
	        }
	    }
	    return extended;
	}
	function objExtends(...args) {
	    let extended = {};
	    if (!args) {
	        return {};
	    }
	    if (args.length > 1) {
	        args.forEach(obj => {
	            extended = extend$2(extended, obj);
	        });
	        return extended;
	    }
	    else {
	        return args[0];
	    }
	}
	function objClone(obj) {
	    return JSON.parse(JSON.stringify(obj));
	}
	function findPath(obj, key) {
	    for (const prop in obj) {
	        if (prop == key) {
	            return key;
	        }
	        else if (typeof obj[prop] == 'object') {
	            const result = findPath(obj[prop], key);
	            if (result) {
	                return prop + '.' + result;
	            }
	        }
	    }
	    return null;
	}
	function findValue(obj, pathString) {
	    if (!obj || !pathString) {
	        return '';
	    }
	    if (isString(pathString)) {
	        pathString = pathString.split('.');
	    }
	    const currentPath = pathString.splice(0, 1)[0];
	    if (obj[currentPath] !== undefined) {
	        return pathString.length ? findValue(obj[currentPath], pathString) : obj[currentPath];
	    }
	    else {
	        return '';
	    }
	}
	function findProperty(obj, predicate) {
	    let result = [];
	    for (const prop in obj) {
	        if (isPlainObject$1(obj[prop])) {
	            result = result.concat(findProperty(obj[prop], predicate));
	        }
	        else if (predicate(obj[prop], prop)) {
	            result.push(obj);
	        }
	    }
	    return result;
	}
	function merge(target, source) {
	    if (!isObject(target) || !isObject(source)) {
	        return source;
	    }
	    Object.keys(source).forEach(key => {
	        const targetValue = target[key];
	        const sourceValue = source[key];
	        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
	            target[key] = targetValue.concat(sourceValue);
	        }
	        else if (isObject(targetValue) && isObject(sourceValue)) {
	            target[key] = merge(Object.assign({}, targetValue), sourceValue);
	        }
	        else {
	            target[key] = sourceValue;
	        }
	    });
	    return target;
	}
	const sorters = {
	    string: function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    },
	    number: function (a, b) {
	        return a - b;
	    }
	};
	function sortBy(array, prop) {
	    if (!array[0][prop]) {
	        return array;
	    }
	    const type = typeof array[0][prop] || 'string';
	    return array.sort(function (a, b) {
	        return sorters[type](a[prop] || 0, b[prop] || 0);
	    });
	}
	function removeBy(array, predicate) {
	    const removeIndexs = [];
	    array.forEach((a, idx) => {
	        if (!!predicate(a)) {
	            removeIndexs.push(idx);
	        }
	    });
	    removeIndexs.reverse().forEach((idx) => {
	        array.splice(idx, 1);
	    });
	    return array;
	}
	function sumBy(array, prop) {
	    return prop ? array.map(x => x[prop] || 0).reduce((a, b) => a + b) : array.reduce((a, b) => a + b);
	}
	function uniqBy(array, prop) {
	    const uniqList = [];
	    array.forEach((item) => {
	        uniqList.every(a => {
	            return isString(a) ? a !== item : a[prop] !== item[prop];
	        }) && uniqList.push(item);
	    });
	    return uniqList;
	}
	function numberFormat(org, n, x, s, c) {
	    const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')', num = org.toFixed(Math.max(0, ~~n));
	    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
	}
	function getByteSize(str) {
	    return new Blob([str]).size;
	}
	function byteSize(orgValue, n) {
	    if (!isNumeric(orgValue)) {
	        return;
	    }
	    let newValue = toNumber(orgValue), unit = ' byte', valueFixer = '';
	    if (orgValue < 0) {
	        valueFixer = '-';
	        orgValue *= -1;
	    }
	    if (orgValue >= 1073741824) {
	        newValue = orgValue / 1073741824;
	        unit = ' GB';
	    }
	    else if (orgValue >= 1048576) {
	        newValue = orgValue / 1048576;
	        unit = ' MB';
	    }
	    else if (orgValue >= 1024) {
	        newValue = orgValue / 1024;
	        unit = ' KB';
	    }
	    return isNumeric(newValue) && newValue > 0 ? valueFixer + numberFormat(newValue, n ? n : 0) + unit : valueFixer + newValue;
	}
	function commaNum(num) {
	    if (!isNumeric(num)) {
	        return num;
	    }
	    return numberFormat(toNumber(num));
	}
	function escapeHTML(str) {
	    return str.replace(new RegExp('&', 'g'), '&amp;').replace(new RegExp('<', 'g'), '&lt;').replace(new RegExp('>', 'g'), '&gt;');
	}
	function escapeEntity(str) {
	    return str.replace(new RegExp('&amp;', 'g'), '&').replace(new RegExp('&lt;', 'g'), '<').replace(new RegExp('&gt;', 'g'), '>');
	}
	const JsonPath$1 = JSONPath;
	function interpolateURL(url, source) {
	    const _source = Object.assign({}, source);
	    const dmustach = new RegExp(/\{{([^{}]*)}}/gm);
	    const result = url.replace(dmustach, (match, offset, string) => {
	        let _tmp = Object.assign({}, _source);
	        const _fields = match.replace(/\{{|\}}/gm, '');
	        if (startsWith(_fields, '$') && isObject(source.root)) {
	            _tmp = JsonPath$1.query(_tmp.root, _fields);
	        }
	        else {
	            _fields.split('.').forEach(field => {
	                _tmp = !isUndefined(_tmp[field]) ? _tmp[field] : _tmp;
	            });
	        }
	        return !isObject(_tmp) ? encodeURI(_tmp) : _tmp;
	    });
	    return dmustach.test(result) ? interpolateURL(result, source) : result;
	}
	function interpolateCop(textCondition, data, parent, $) {
	    const dmustach = new RegExp(/\{{([^{}]*)}}/gm);
	    const result = textCondition.replace(dmustach, (match) => {
	        const conditionalOp = match.replace(/\{{|\}}/gm, '');
	        return new Function('data', 'parent', '$', 'return ' + conditionalOp)(data, parent, $);
	    });
	    return dmustach.test(result) ? this.interpolateCop(result, data, parent, $) : result;
	}
	/** locale 에 맞는 표시 라벨 리턴 */
	function parseBundle(text, locale) {
	    let _value = text;
	    locale = locale.split('-')[0] || locale;
	    if (text.includes(`{${locale}}`)) {
	        _value = _value.split(`{${locale}}`)[1];
	        _value = _value.split(`{/${locale}}`)[0];
	    }
	    else if (text.includes(`{/default}`)) {
	        _value = _value.split(`{/default}`)[0];
	    }
	    return _value;
	}
	/** 언어와 표시 라벨을 객체화, Start Date{/default}{ko}사용시작{/ko} ->  {default: 'Start Date', ko: '사용시작'}*/
	function textToMultiLangs(text) {
	    var _a;
	    const languages = (_a = text.match(/\{\/(.*?)\}/g)) === null || _a === void 0 ? void 0 : _a.map(langTag => langTag.replace(/[{/}]/g, ''));
	    const multiLangs = {};
	    for (const index in languages) {
	        const lang = languages[index];
	        if (lang === 'default') {
	            const defaultMatch = text.match(`(.*?)\\{/${lang}}`);
	            multiLangs[lang] = defaultMatch[1];
	            continue;
	        }
	        const langMatch = text.match(`{${lang}}(.*?)\\{/${lang}}`);
	        multiLangs[lang] = langMatch[1];
	    }
	    return multiLangs;
	}
	/**
	 * 전달받은 텍스트를 클립보드에 저장한다.
	 * @param text
	 */
	function copyToClipboard(text) {
	    if (navigator.clipboard && window.isSecureContext) {
	        navigator.clipboard.writeText(text);
	    }
	    else {
	        const textArea = document.createElement('textarea');
	        textArea.value = text;
	        textArea.style.position = 'absolute';
	        textArea.style.left = '-999999px';
	        document.body.prepend(textArea);
	        textArea.select();
	        try {
	            document.execCommand('copy');
	        }
	        catch (error) {
	            console.error(error);
	        }
	        finally {
	            textArea.remove();
	        }
	    }
	}
	/**
	 * 컨텐츠에 포함된 html을 제거할 때 사용한다.
	 * @param content
	 */
	function toPlainText(content) {
	    const tmp = document.createElement('div');
	    tmp.textContent = content;
	    return tmp.innerHTML;
	}
	/** {0},{1},, 포함한 문자열 포맷팅 */
	function formatString(str, args) {
	    return str.replace(/{(\d+)}/g, (match, index) => {
	        return typeof args[index] !== 'undefined' ? args[index] : match;
	    });
	}
	function generateUUID() {
	    let d = new Date().getTime();
	    if (window.performance && typeof window.performance.now === 'function') {
	        d += performance.now();
	    }
	    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	        const r = (d + Math.random() * 16) % 16 | 0;
	        d = Math.floor(d / 16);
	        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	    });
	    return uuid;
	}

	function style(element, name, value) {
	    if (!element) {
	        return;
	    }
	    const target = element;
	    if (isString(name) && undefined === value) {
	        return getComputedStyle(target)[name];
	    }
	    else if ('length' !== name && 'parentRule' !== name) {
	        target.style[name] = value;
	    }
	}
	function styles(element, styles) {
	    if (!element) {
	        return;
	    }
	    const target = element;
	    each(styles, (value, key) => {
	        if ('length' !== key && 'parentRule' !== key) {
	            target.style[key] = value;
	        }
	    });
	}
	function removeStyle(element, name) {
	    if (!element) {
	        return;
	    }
	    const target = element;
	    if (Array.isArray(name)) {
	        name.forEach((prop) => {
	            target.style.removeProperty(prop);
	        });
	    }
	    else {
	        target.style.removeProperty(name);
	    }
	}
	const cssNumber = [
	    'animation-iteration-count',
	    'column-count',
	    'fill-opacity',
	    'flex-grow',
	    'flex-shrink',
	    'font-weight',
	    'line-height',
	    'opacity',
	    'order',
	    'orphans',
	    'stroke-dasharray',
	    'stroke-dashoffset',
	    'widows',
	    'z-index',
	    'zoom'
	];
	function css(element, property, value) {
	    return toNodes(element).map(element => {
	        if (isString(property)) {
	            property = propName(property);
	            if (isUndefined(value)) {
	                return getStyle(element, property);
	            }
	            else if (!value && !isNumber(value)) {
	                element.style.removeProperty(property);
	            }
	            else {
	                element.style[property] = getUnit(property, value);
	            }
	        }
	        else if (isArray$1(property)) {
	            const styles = getStyles(element);
	            return property.reduce((props, property) => {
	                props[property] = styles[propName(property)];
	                return props;
	            }, {});
	        }
	        else if (isObject(property)) {
	            each(property, (value, property) => css(element, property, value));
	        }
	        return element;
	    })[0];
	}
	function getUnit(property, value) {
	    return isNumeric(value) && !cssNumber.includes(property) ? `${value}px` : value;
	}
	function getStyles(element, pseudoElt) {
	    element = toNode(element);
	    return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElt);
	}
	function getStyle(element, property, pseudoElt) {
	    return getStyles(element, pseudoElt)[property];
	}
	const cssProps = {};
	function propName(name) {
	    let ret = cssProps[name];
	    if (!ret) {
	        ret = cssProps[name] = vendorPropName(name) || name;
	    }
	    return ret;
	}
	const cssPrefixes = ['webkit', 'moz', 'ms'];
	function vendorPropName(name) {
	    name = hyphenate(name);
	    const { style } = document.documentElement;
	    if (name in style) {
	        return name;
	    }
	    let i = cssPrefixes.length, prefixedName;
	    while (i--) {
	        prefixedName = `-${cssPrefixes[i]}-${name}`;
	        if (prefixedName in style) {
	            return prefixedName;
	        }
	    }
	}
	function styleToVNodeStyle(styleStr) {
	    if (!styleStr || !styleStr.trim()) {
	        return {};
	    }
	    const styleArr = styleStr.split(';').filter(style => style.trim() !== '');
	    const styleObj = {};
	    for (let i = 0; i < styleArr.length; i++) {
	        const [key, value] = styleArr[i].split(':').map(style => style.trim());
	        styleObj[key] = value;
	    }
	    return styleObj;
	}

	function slideup(element, duration = 300) {
	    const target = element;
	    styles(target, {
	        transitionProperty: 'height, margin, padding',
	        transitionDuration: duration + 'ms',
	        boxSizing: 'border-box',
	        height: target.offsetHeight + 'px'
	    });
	    styles(target, {
	        height: '0',
	        paddingTop: '0',
	        paddingBottom: '0',
	        marginTop: '0',
	        marginBottom: '0',
	        overflow: 'hidden'
	    });
	    window.setTimeout(() => {
	        style(target, 'display', 'none');
	        target.style.removeProperty('height');
	        target.style.removeProperty('padding-top');
	        target.style.removeProperty('padding-bottom');
	        target.style.removeProperty('margin-top');
	        target.style.removeProperty('margin-bottom');
	        target.style.removeProperty('overflow');
	        target.style.removeProperty('transition-duration');
	        target.style.removeProperty('transition-property');
	    }, duration);
	}
	function fadeout(element, duration = 300) {
	    const target = element;
	    styles(target, {
	        transitionProperty: 'opacity',
	        transitionDuration: duration + 'ms',
	        opacity: '1'
	    });
	    styles(target, {
	        opacity: '0'
	    });
	    window.setTimeout(() => {
	        style(target, 'display', 'none');
	        target.style.removeProperty('opacity');
	        target.style.removeProperty('transition-duration');
	        target.style.removeProperty('transition-property');
	    }, duration);
	}

	var animation = /*#__PURE__*/Object.freeze({
		__proto__: null,
		fadeout: fadeout,
		slideup: slideup
	});

	function attr(element, name, value) {
	    if (isObject(name)) {
	        for (const key in name) {
	            attr(element, key, name[key]);
	        }
	        return;
	    }
	    if (isUndefined(value)) {
	        element = toNode(element);
	        return element && element.getAttribute(name);
	    }
	    else {
	        toNodes(element).forEach(element => {
	            if (isFunction(value)) {
	                value = value.call(element, attr(element, name));
	            }
	            if (value === null) {
	                removeAttr(element, name);
	            }
	            else {
	                element.setAttribute(name, value);
	            }
	        });
	    }
	}
	function hasAttr(element, name) {
	    return toNodes(element).some(element => element.hasAttribute(name));
	}
	function removeAttr(element, name) {
	    element = toNodes(element);
	    name.split(' ').forEach(name => element.forEach((element) => element.hasAttribute(name) && element.removeAttribute(name)));
	}
	function data(element, attribute) {
	    for (let i = 0, attrs = [attribute, `data-${attribute}`]; i < attrs.length; i++) {
	        if (hasAttr(element, attrs[i])) {
	            return attr(element, attrs[i]);
	        }
	    }
	}

	function addClass(element, ...args) {
	    apply(element, args, 'add');
	}
	function removeClass(element, ...args) {
	    apply(element, args, 'remove');
	}
	function removeClasses(element, cls) {
	    attr(element, 'class', (value) => (value || '').replace(new RegExp(`\\b${cls}\\b`, 'g'), ''));
	}
	function replaceClass(element, ...args) {
	    args[0] && removeClass(element, args[0]);
	    args[1] && addClass(element, args[1]);
	}
	function hasClass(element, cls) {
	    return cls && toNodes(element).some(element => element.classList.contains(cls.split(' ')[0]));
	}
	function toggleClass(element, ...args) {
	    if (!args.length) {
	        return;
	    }
	    args = getArgs$1(args);
	    const force = !isString(last(args)) ? args.pop() : []; // in iOS 9.3 force === undefined evaluates to false
	    args = args.filter(Boolean);
	    toNodes(element).forEach(({ classList }) => {
	        for (let i = 0; i < args.length; i++) {
	            supports.Force ? classList.toggle(...[args[i]].concat(force)) : classList[(!isUndefined(force) ? force : !classList.contains(args[i])) ? 'add' : 'remove'](args[i]);
	        }
	    });
	}
	function apply(element, args, fn) {
	    args = getArgs$1(args).filter(Boolean);
	    args.length &&
	        toNodes(element).forEach(({ classList }) => {
	            supports.Multiple ? classList[fn](...args) : args.forEach(cls => classList[fn](cls));
	        });
	}
	function getArgs$1(args) {
	    return args.reduce((args, arg) => args.concat.call(args, isString(arg) && includes(arg, ' ') ? arg.trim().split(' ') : arg), []);
	}
	const supports = {
	    get Multiple() {
	        return this.get('_multiple');
	    },
	    get Force() {
	        return this.get('_force');
	    },
	    get(key) {
	        if (!hasOwn$1(this, key)) {
	            const { classList } = document.createElement('_');
	            classList.add('a', 'b');
	            classList.toggle('c', false);
	            this._multiple = classList.contains('b');
	            this._force = !classList.contains('c');
	        }
	        return this[key];
	    }
	};

	function hslToRgb([h, s, l]) {
	    s = s / 100;
	    l = l / 100;
	    const c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2;
	    let r, g, b;
	    switch (true) {
	        case h > -1 && h < 60:
	            r = c;
	            g = x;
	            b = 0;
	            break;
	        case h > 59 && h < 120:
	            r = x;
	            g = c;
	            b = 0;
	            break;
	        case h > 119 && h < 180:
	            r = 0;
	            g = c;
	            b = x;
	            break;
	        case h > 179 && h < 240:
	            r = 0;
	            g = x;
	            b = c;
	            break;
	        case h > 239 && h < 300:
	            r = x;
	            g = 0;
	            b = c;
	            break;
	        case h > 299 && h <= 360:
	            r = c;
	            g = 0;
	            b = x;
	            break;
	    }
	    return [Math.floor((r + m) * 255), Math.floor((g + m) * 255), Math.floor((b + m) * 255)];
	}
	function rgbToHsl(color) {
	    let arr = [];
	    if (color.indexOf('rgb') > -1 || color.indexOf('RGB') > -1) {
	        arr = color.split('(')[1].split(')')[0].split(',');
	    }
	    else {
	        arr = color.split(',');
	    }
	    const r = +arr[0] / 255, g = +arr[1] / 255, b = +arr[2] / 255;
	    const max = Math.max(r, g, b), min = Math.min(r, g, b);
	    let h, s, l = (max + min) / 2;
	    if (max === min) {
	        h = s = 0;
	    }
	    else {
	        const d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch (max) {
	            case r:
	                h = ((g - b) / d) * 60 + (g < b ? 360 : 0);
	                break;
	            case g:
	                h = ((b - r) / d) * 60 + 120;
	                break;
	            case b:
	                h = ((r - g) / d) * 60 + 240;
	                break;
	        }
	    }
	    h = h * 1;
	    s = s * 100;
	    l = l * 100;
	    return [h, s, l];
	}
	function hexToRgb(color) {
	    /* color: 6자리 컬러 hex 값 */
	    const colorArr = color.split('');
	    const trans = [];
	    let preW = '';
	    colorArr.forEach((c, idx) => {
	        if (idx % 2 !== 0 || idx === 0) {
	            preW = preW + '' + c;
	            if (idx === colorArr.length - 1) {
	                trans.push(preW);
	            }
	        }
	        else {
	            trans.push(preW);
	            preW = c;
	        }
	    });
	    return trans.map((t) => parseInt(t, 16));
	}
	function hexPrefix(hexCode) {
	    hexCode = hexCode < 0 ? 0 : hexCode;
	    return hexCode.toString(16).length === 1 ? '0' + hexCode.toString(16) : hexCode.toString(16);
	}
	function contrastColor(hex) {
	    if (hex.indexOf('#') === 0) {
	        hex = hex.slice(1);
	    }
	    if (hex.length === 3) {
	        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	    }
	    const r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16);
	    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
	}
	function rgbToHwb([r, g, b]) {
	    const max = Math.max(r, g, b);
	    const min = Math.min(r, g, b);
	    if (max === min) {
	        return [
	            0, // hue       (from 0 to 360 in degrees)
	            (100 * min) / 255, // whiteness (from 0 to 100 in %)
	            100 - (100 * max) / 255 // blackness (from 0 to 100 in %)
	        ];
	    }
	    let tmp = 0.0;
	    switch (max) {
	        case r:
	            tmp = (g - b) / (max - min) + 0.0;
	            break;
	        case g:
	            tmp = (b - r) / (max - min) + 2.0;
	            break;
	        case b:
	            tmp = (r - g) / (max - min) + 4.0;
	            break;
	    }
	    const hue = ((tmp + 6.0) % 6.0) / 6.0;
	    return [
	        360 * hue, // hue       (from 0 to 360 in degrees)
	        (100 * min) / 255, // whiteness (from 0 to 100 in %)
	        100 - (100 * max) / 255 // blackness (from 0 to 100 in %)
	    ];
	}
	function rgbToHex(color) {
	    /* color: [r, g, b] */
	    return hexPrefix(color[0]) + hexPrefix(color[1]) + hexPrefix(color[2]);
	}
	function hslToHex([h, s, l]) {
	    return rgbToHex(hslToRgb([h, s, l]));
	}
	function hexToHsl(color) {
	    /* color: 6자리 컬러 hex 값 */
	    return rgbToHsl(hexToRgb(color.replace('#', '')).join(','));
	}
	function hexToHwb(color) {
	    /* color: 6자리 컬러 hex 값 */
	    return rgbToHwb(hexToRgb(color.replace('#', '')));
	}
	/** 헥사 코드인지 검사, #123 #27290e*/
	function isHexPattern(color) {
	    return /^#(?:[0-9A-Fa-f]{3}){1,2}$/i.test(color);
	}

	function dayOfMonth(year, month) {
	    return new Date(year, month, 0).getDate();
	}
	function dateDiff(date1, date2) {
	    let diffDate1 = date1 instanceof Date ? date1 : new Date(date1);
	    let diffDate2 = date2 instanceof Date ? date2 : new Date(date2);
	    diffDate1 = new Date(diffDate1.getFullYear(), diffDate1.getMonth() + 1, diffDate1.getDate());
	    diffDate2 = new Date(diffDate2.getFullYear(), diffDate2.getMonth() + 1, diffDate2.getDate());
	    let diff = diffDate2.getTime() - diffDate1.getTime();
	    diff = Math.ceil(diff / (1000 * 3600 * 24));
	    return diff;
	}
	function calcDate(date, param) {
	    // date 를 날짜 형식으로 만들어준다
	    date = date instanceof Date ? date : new Date(date);
	    // param 날짜인 경우 그냥 리턴
	    if (param instanceof Date || isDate(param)) {
	        return toDate(param);
	    }
	    // param을 확인함
	    const units = ['d', 'W', 'M', 'Y'];
	    units.forEach((unit) => {
	        if (param.indexOf(unit) > -1) {
	            const numeric = toNumber(param.replace(unit, ''));
	            switch (unit) {
	                case 'd':
	                    date.setDate(date.getDate() + numeric);
	                    break;
	                case 'W':
	                    date.setDate(date.getDate() + Math.abs(numeric) * 7 * (numeric / Math.abs(numeric)));
	                    break;
	                case 'M':
	                    date.setMonth(date.getMonth() + numeric);
	                    break;
	                case 'Y':
	                    date.setFullYear(date.getFullYear() + numeric);
	                    break;
	            }
	        }
	    });
	    return date;
	}
	function dateTimeDiff(date1, date2) {
	    const diffDate1 = date1 instanceof Date ? date1 : new Date(date1);
	    const diffDate2 = date2 instanceof Date ? date2 : new Date(date2);
	    let diff = diffDate2.getTime() - diffDate1.getTime();
	    diff = Math.ceil(diff / 1000);
	    return diff;
	}
	function tempDateByTime(timeStr, datestr = dateFormat(new Date(), 'yyyy-MM-dd')) {
	    return new Date(datestr + ' ' + timeStr);
	}
	function strLength(str, len) {
	    let s = '', i = 0;
	    while (i++ < len) {
	        s += str;
	    }
	    return s;
	}
	function zf(str, len) {
	    return strLength('0', len - str.length) + str;
	}
	function dateFormat(date, format) {
	    if (!date || !date.valueOf()) {
	        return ' ';
	    }
	    return format.replace(/(yyyy|YYYY|yy|YY|SM|MM|dd|DD|hh|HH|mm|ss)/gi, function ($1) {
	        switch ($1) {
	            case 'yyyy':
	            case 'YYYY':
	                return date.getFullYear();
	            case 'yy':
	            case 'YY':
	                return zf((date.getFullYear() % 1000) + '', 2);
	            case 'MM':
	                return zf(date.getMonth() + 1 + '', 2);
	            case 'SM':
	                return date.getMonth() + 1;
	            case 'dd':
	                return date.getDate();
	            case 'DD':
	                return zf(date.getDate() + '', 2);
	            case 'hh':
	                return zf(date.getHours() + '', 2);
	            case 'HH':
	                return date.getHours();
	            case 'mm':
	                return zf(date.getMinutes() + '', 2);
	            case 'ss':
	                return zf(date.getSeconds() + '', 2);
	            default:
	                return $1;
	        }
	    });
	}
	function monthData(locale) {
	    return [
	        { value: 1, text: '1월' }, //text: 'January'
	        { value: 2, text: '2월' }, //text: 'February'
	        { value: 3, text: '3월' }, //text: 'March'
	        { value: 4, text: '4월' }, //text: 'April'
	        { value: 5, text: '5월' }, //text: 'May'
	        { value: 6, text: '6월' }, //text: 'June'
	        { value: 7, text: '7월' }, //text: 'July'
	        { value: 8, text: '8월' }, //text: 'August'
	        { value: 9, text: '9월' }, //text: 'September'
	        { value: 10, text: '10월' }, //text: 'October'
	        { value: 11, text: '11월' }, //text: 'November'
	        { value: 12, text: '12월' } //text: 'December'
	    ];
	}
	function dateData(locale) {
	    return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
	}
	function objToDate({ year, month, day, hour, minute, second }) {
	    if (hour === undefined) {
	        hour = '00';
	    }
	    if (minute === undefined) {
	        minute = '00';
	    }
	    if (second === undefined) {
	        second = '00';
	    }
	    return tempDateByTime(hour + ':' + minute + ':' + second).setFullYear(year, month - 1, day);
	}

	function query(selector, context) {
	    return toNode(selector) || find(selector, getContext(selector, context));
	}
	function queryAll(selector, context) {
	    const nodes = toNodes(selector);
	    return (nodes.length && nodes) || findAll(selector, getContext(selector, context));
	}
	function getContext(selector, context = document) {
	    return isContextSelector(selector) || isDocument(context) ? context : context.ownerDocument;
	}
	function find(selector, context) {
	    return toNode(_query(selector, context, 'querySelector'));
	}
	function findAll(selector, context = document) {
	    return toNodes(_query(selector, context, 'querySelectorAll'));
	}
	function _query(selector, context = document, queryFn) {
	    if (!selector || !isString(selector)) {
	        return null;
	    }
	    selector = selector.replace(contextSanitizeRe, '$1 *');
	    let removes;
	    if (isContextSelector(selector)) {
	        removes = [];
	        selector = splitSelector(selector)
	            .map((selector, i) => {
	            let ctx = context;
	            if (selector[0] === '!') {
	                const selectors = selector.substr(1).trim().split(' ');
	                ctx = closest(parent(context), selectors[0]);
	                selector = selectors.slice(1).join(' ').trim();
	            }
	            if (selector[0] === '-') {
	                const selectors = selector.substr(1).trim().split(' ');
	                const prev = (ctx || context).previousElementSibling;
	                ctx = matches(prev, selector.substr(1)) ? prev : null;
	                selector = selectors.slice(1).join(' ');
	            }
	            if (!ctx) {
	                return null;
	            }
	            if (!ctx.id) {
	                ctx.id = `gn-${Date.now()}${i}`;
	                removes.push(() => removeAttr(ctx, 'id'));
	            }
	            return `#${escape(ctx.id)} ${selector}`;
	        })
	            .filter(Boolean)
	            .join(',');
	        context = document;
	    }
	    try {
	        return context[queryFn](selector);
	    }
	    catch (e) {
	        return null;
	    }
	    finally {
	        removes && removes.forEach(remove => remove());
	    }
	}
	const contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
	const contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
	function isContextSelector(selector) {
	    return isString(selector) && selector.match(contextSelectorRe);
	}
	const selectorRe = /.*?[^\\](?:,|$)/g;
	function splitSelector(selector) {
	    return selector.match(selectorRe).map((selector) => selector.replace(/,$/, '').trim());
	}
	const elProto = Element.prototype;
	const matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector;
	function matches(element, selector) {
	    return toNodes(element).some(element => matchesFn.call(element, selector));
	}
	const closestFn = elProto.closest ||
	    function (selector) {
	        let ancestor = this;
	        do {
	            if (matches(ancestor, selector)) {
	                return ancestor;
	            }
	        } while ((ancestor = parent(ancestor)));
	    };
	function closest(element, selector) {
	    if (startsWith(selector, '>')) {
	        selector = selector.slice(1);
	    }
	    return isElement$2(element)
	        ? closestFn.call(element, selector)
	        : toNodes(element)
	            .map(element => closest(element, selector))
	            .filter(Boolean);
	}
	function parent(element) {
	    element = toNode(element);
	    return element && isElement$2(element.parentNode) && element.parentNode;
	}
	function parents(element, selector) {
	    const elements = [];
	    while ((element = parent(element))) {
	        if (!selector || matches(element, selector)) {
	            elements.push(element);
	        }
	    }
	    return elements;
	}
	function children(element, selector) {
	    element = toNode(element);
	    const children = element ? toNodes(element.children) : [];
	    return selector ? children.filter(element => matches(element, selector)) : children;
	}
	function next(element) {
	    element = toNode(element);
	    return toNodes(element.nextElementSibling);
	}
	function nextUntil(element, selector) {
	    element = toNode(element);
	    let isNext = false;
	    const nextSiblings = element
	        ? toNodes([...element.parentElement.children].filter((e) => {
	            if (e == element) {
	                isNext = true;
	                return false;
	            }
	            return isNext;
	        }))
	        : [];
	    return selector
	        ? nextSiblings.filter(element => {
	            if (matches(element, selector)) {
	                isNext = false;
	                return false;
	            }
	            return isNext;
	        })
	        : nextSiblings;
	}
	function index$1(element) {
	    element = toNode(element);
	    return element && [...element.parentElement.children].findIndex((e) => e == element);
	}
	function prev(element) {
	    element = toNode(element);
	    return toNodes(element.previousElementSibling);
	}
	function prevUntil(element, selector) {
	    element = toNode(element);
	    let isPrev = true;
	    const prevSiblings = element
	        ? toNodes([...element.parentElement.children].filter((e) => {
	            if (e == element) {
	                isPrev = false;
	                return false;
	            }
	            return isPrev;
	        }))
	        : [];
	    prevSiblings.reverse();
	    isPrev = true;
	    return selector
	        ? prevSiblings.filter(element => {
	            if (matches(element, selector)) {
	                isPrev = false;
	                return true;
	            }
	            return isPrev;
	        })
	        : prevSiblings;
	}
	function siblings(element, selector) {
	    element = toNode(element);
	    const siblings = element
	        ? toNodes([...element.parentElement.children].filter((e) => {
	            return e != element;
	        }))
	        : [];
	    return selector ? siblings.filter(element => matches(element, selector)) : siblings;
	}
	const escapeFn = (window.CSS && CSS.escape) ||
	    function (css) {
	        return css.replace(/([^\x7f-\uFFFF\w-])/g, match => `\\${match}`);
	    };
	function escape(css) {
	    return isString(css) ? escapeFn.call(null, css) : '';
	}
	// jquery object equals
	function isEquals(compareFrom, compareTo) {
	    if (!compareFrom || !compareTo || compareFrom.length != compareTo.length) {
	        return false;
	    }
	    for (let i = 0; i < compareFrom.length; ++i) {
	        if (compareFrom[i] !== compareTo[i]) {
	            return false;
	        }
	    }
	    return true;
	}

	const voidElements = 'area,base,br,col,embed,hr,img,input,keygen,link,menuitem,meta,param,source,track,wbr';
	function isVoidElement(element) {
	    return toNodes(element).some(element => matches(element, voidElements));
	}
	function isVisible(element) {
	    return toNodes(element).some(element => element.offsetWidth || element.offsetHeight || element.getClientRects().length);
	}
	const selInput = 'input,select,textarea,button';
	function isInput(element) {
	    return toNodes(element).some(element => matches(element, selInput));
	}
	function filter(element, selector) {
	    return toNodes(element).filter(element => matches(element, selector));
	}
	function within(element, selector) {
	    return !isString(selector)
	        ? element === selector || (isDocument(selector) ? selector.documentElement : toNode(selector)).contains(toNode(element)) // IE 11 document does not implement contains
	        : matches(element, selector) || closest(element, selector);
	}

	function offset(element, coordinates) {
	    if (!coordinates) {
	        return getDimensions(element);
	    }
	    const currentOffset = offset(element);
	    const pos = css(element, 'position');
	    ['left', 'top'].forEach((prop) => {
	        if (prop in coordinates) {
	            const value = css(element, prop);
	            css(element, prop, coordinates[prop] - currentOffset[prop] + toFloat(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value));
	        }
	    });
	}
	function position(element, parent) {
	    parent = parent || toNode(element).offsetParent || toWindow(element).document.documentElement;
	    const elementOffset = offset(element);
	    const parentOffset = offset(parent);
	    return {
	        top: elementOffset.top - parentOffset.top - toFloat(css(parent, 'borderTopWidth')),
	        bottom: elementOffset.bottom - parentOffset.top - toFloat(css(parent, 'borderTopWidth')),
	        left: elementOffset.left - parentOffset.left - toFloat(css(parent, 'borderLeftWidth'))
	    };
	}
	function getDimensions(element) {
	    if (!element) {
	        return {};
	    }
	    const { pageYOffset: top, pageXOffset: left } = toWindow(element);
	    if (isWindow(element)) {
	        const height = element.innerHeight;
	        const width = element.innerWidth;
	        return {
	            top,
	            left,
	            height,
	            width,
	            bottom: top + height,
	            right: left + width
	        };
	    }
	    let style, hidden;
	    if (!isVisible(element) && css(element, 'display') === 'none') {
	        style = attr(element, 'style');
	        hidden = attr(element, 'hidden');
	        attr(element, {
	            style: `${style || ''};display:block !important;`,
	            hidden: null
	        });
	    }
	    element = toNode(element);
	    const rect = element.getBoundingClientRect();
	    if (!isUndefined(style)) {
	        attr(element, { style, hidden });
	    }
	    return {
	        height: rect.height,
	        width: rect.width,
	        top: rect.top + top,
	        left: rect.left + left,
	        bottom: rect.bottom + top,
	        right: rect.right + left
	    };
	}

	function $(selector, context) {
	    return !isString(selector) ? toNode(selector) : isHtml(selector) ? toNode(fragment(selector)) : find(selector, context);
	}
	function $$(selector, context) {
	    return !isString(selector) ? toNodes(selector) : isHtml(selector) ? toNodes(fragment(selector)) : findAll(selector, context);
	}
	const fragmentRe = /^\s*<(\w+|!)[^>]*>/;
	const singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
	function fragment(html) {
	    const matches = singleTagRe.exec(html);
	    if (matches) {
	        return document.createElement(matches[1]);
	    }
	    const container = document.createElement('div');
	    if (fragmentRe.test(html)) {
	        container.insertAdjacentHTML('beforeend', html.trim());
	    }
	    else {
	        container.textContent = html;
	    }
	    return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild;
	}
	function empty(element) {
	    element = $(element);
	    if (element) {
	        element.innerHTML = '';
	    }
	    return element;
	}
	function html(parent, html) {
	    parent = $(parent);
	    return isUndefined(html) ? parent.innerHTML : append(parent.hasChildNodes() ? empty(parent) : parent, html);
	}
	function text$1(parent, text) {
	    parent = $(parent);
	    if (isUndefined(text)) {
	        return parent.textContent;
	    }
	    else {
	        parent.textContent = text;
	    }
	}
	function val(parent, text) {
	    parent = $(parent);
	    if (isUndefined(text)) {
	        return parent.value;
	    }
	    else {
	        parent.value = text;
	    }
	}
	function prepend(parent, element) {
	    parent = $(parent);
	    if (!parent.hasChildNodes()) {
	        return append(parent, element);
	    }
	    else {
	        return insertNodes(element, (element) => parent.insertBefore(element, parent.firstChild));
	    }
	}
	function append(parent, element) {
	    parent = $(parent);
	    return insertNodes(element, (element) => parent.appendChild(element));
	}
	function before(ref, element) {
	    ref = $(ref);
	    return insertNodes(element, (element) => ref.parentNode.insertBefore(element, ref));
	}
	function after(ref, element) {
	    ref = $(ref);
	    return insertNodes(element, (element) => (ref.nextSibling ? before(ref.nextSibling, element) : append(ref.parentNode, element)));
	}
	function insertNodes(element, fn) {
	    element = isString(element) ? fragment(element) : element;
	    return element ? ('length' in element ? toNodes(element).map(fn) : fn(element)) : null;
	}
	function remove(element) {
	    toNodes(element).map(element => element.parentNode && element.parentNode.removeChild(element));
	}

	function on(...args) {
	    let [targets, type, selector, listener, useCapture] = getArgs(args);
	    targets = toEventTargets(targets);
	    if (listener.length > 1) {
	        listener = detail(listener);
	    }
	    if (useCapture && useCapture.self) {
	        listener = selfFilter(listener);
	    }
	    if (selector) {
	        listener = delegate(targets, selector, listener);
	    }
	    useCapture = useCaptureFilter(useCapture);
	    type.split(' ').forEach((type) => targets.forEach((target) => target.addEventListener(type, listener, useCapture)));
	    return () => off(targets, type, listener, useCapture);
	}
	function off(targets, type, listener, useCapture = false) {
	    useCapture = useCaptureFilter(useCapture);
	    targets = toEventTargets(targets);
	    type.split(' ').forEach((type) => targets.forEach((target) => target.removeEventListener(type, listener, useCapture)));
	}
	function once(...args) {
	    const [element, type, selector, listener, useCapture, condition] = getArgs(args);
	    const off = on(element, type, selector, (e) => {
	        const result = !condition || condition(e);
	        if (result) {
	            off();
	            listener(e, result);
	        }
	    }, useCapture);
	    return off;
	}
	function trigger(targets, event, detail) {
	    return toEventTargets(targets).reduce((notCanceled, target) => notCanceled && target.dispatchEvent(createEvent(event, true, true, detail)), true);
	}
	function createEvent(e, bubbles = true, cancelable = false, detail) {
	    if (isString(e)) {
	        const event = document.createEvent('CustomEvent'); // IE 11
	        event.initCustomEvent(e, bubbles, cancelable, detail);
	        e = event;
	    }
	    return e;
	}
	function getArgs(args) {
	    if (isFunction(args[2])) {
	        args.splice(2, 0, false);
	    }
	    return args;
	}
	function delegate(delegates, selector, listener) {
	    return (e) => {
	        delegates.forEach(delegate => {
	            const current = selector[0] === '>'
	                ? findAll(selector, delegate)
	                    .reverse()
	                    .filter((element) => within(e.target, element))[0]
	                : closest(e.target, selector);
	            if (current) {
	                e.delegate = delegate;
	                e.current = current;
	                listener.call(this, e);
	            }
	        });
	    };
	}
	function detail(listener) {
	    return (e) => (isArray$1(e.detail) ? listener(e, ...e.detail) : listener(e));
	}
	function selfFilter(listener) {
	    return function (e) {
	        if (e.target === e.currentTarget || e.target === e.current) {
	            return listener.call(null, e);
	        }
	    };
	}
	function useCaptureFilter(options) {
	    return options && isIE && !isBoolean(options) ? !!options.capture : options;
	}
	function isEventTarget(target) {
	    return target && 'addEventListener' in target;
	}
	function toEventTarget(target) {
	    return isEventTarget(target) ? target : toNode(target);
	}
	function toEventTargets(target) {
	    return isArray$1(target) ? target.map(toEventTarget).filter(Boolean) : isString(target) ? findAll(target) : isEventTarget(target) ? [target] : toNodes(target);
	}
	function isTouch(e) {
	    return e.pointerType === 'touch' || !!e.touches;
	}
	function getEventPos(e, prop = 'client') {
	    const { touches, changedTouches } = e;
	    const { [`${prop}X`]: x, [`${prop}Y`]: y } = (touches && touches[0]) || (changedTouches && changedTouches[0]) || e;
	    return { x, y };
	}

	function random(min, max) {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function drag(element, events = {}) {
	    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	    let evtMouseUp, evtMouseMove;
	    function elementDrag(e) {
	        // e = e || window.event;
	        e.preventDefault();
	        // calculate the new cursor position:
	        pos1 = pos3 - e.clientX;
	        pos2 = pos4 - e.clientY;
	        pos3 = e.clientX;
	        pos4 = e.clientY;
	        events.drag && events.drag(e, element);
	        // set the element's new position:
	        css(element, {
	            top: getUnit('top', getNumber(css(element, 'top')) - pos2),
	            left: getUnit('left', getNumber(css(element, 'left')) - pos1)
	        });
	    }
	    function closeDragElement(e) {
	        evtMouseUp();
	        evtMouseMove();
	        events.dragEnd && events.dragEnd(e, element);
	    }
	    function dragMouseDown(e) {
	        // e = e || window.event;
	        e.preventDefault();
	        // get the mouse cursor position at startup:
	        pos3 = e.clientX;
	        pos4 = e.clientY;
	        evtMouseUp = on(document, 'mouseup', closeDragElement);
	        evtMouseMove = on(document, 'mousemove', elementDrag);
	        events.dragStart && events.dragStart(e);
	    }
	    const dragHeader = find('.modal-header', element) || find('.color-header', element);
	    if (dragHeader) {
	        on(dragHeader, 'mousedown', dragMouseDown);
	    }
	    else {
	        on(element, 'mousedown', dragMouseDown);
	    }
	}
	/*
	  드래그 영역을 가로 또는 세로로 제한할 경우 사용한다.
	  boundary: 드래그 제한 영역 [top, left, bottom, right]
	    => [0, 0, 0, 100] : 가로방향 100px 드래그 가능
	    => [90, 0, 100, 0] : 세로방향 90px ~ 100px 드래그 가능
	    => [0, 0, 100, 100] : 가로세로 100px 영역 내에서 드래그 가능
	  events : 드래그 이벤트 발생 트리거 이벤트 { drag, dragStart, dragEnd }
	*/
	function dragLayout(element, boundary, events = {}) {
	    const pos = {
	        y: 0,
	        x: 0
	    };
	    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	    let evtMouseUp, evtMouseMove;
	    function elementDrag(e) {
	        // e = e || window.event;
	        e.preventDefault();
	        // calculate the new cursor position:
	        pos1 = pos2 - e.clientY;
	        pos2 = e.clientY;
	        pos3 = pos4 - e.clientX;
	        pos4 = e.clientX;
	        if (pos.y - pos1 >= boundary[0] && pos.y - pos1 <= boundary[2]) {
	            pos.y = pos.y - pos1;
	        }
	        if (pos.x - pos3 >= boundary[1] && pos.x - pos3 <= boundary[3]) {
	            pos.x = pos.x - pos3;
	        }
	        events.drag && events.drag(e, pos, element);
	        // set the element's new position:
	        css(element, {
	            top: getUnit('top', pos.y),
	            left: getUnit('left', pos.x)
	        });
	    }
	    function closeDragElement(e) {
	        evtMouseUp();
	        evtMouseMove();
	        events.dragEnd && events.dragEnd(e, element);
	    }
	    function dragMouseDown(e) {
	        // e = e || window.event;
	        e.preventDefault();
	        // get the mouse cursor position at startup:
	        pos2 = e.clientY;
	        pos.y = getNumber(css(element, 'top'));
	        pos4 = e.clientX;
	        pos.x = getNumber(css(element, 'left'));
	        evtMouseUp = on(document, 'mouseup', closeDragElement);
	        evtMouseMove = on(document, 'mousemove', elementDrag);
	        events.dragStart && events.dragStart(e);
	    }
	    on(element, 'mousedown', dragMouseDown);
	}
	/*
	  대상객체를 리사이징 할 수 있도록 변경
	  boundary: [minH, minW, maxH, maxW]
	*/
	function resize(element, boundary, events = {}) {
	    const pos = { y: 0, x: 0 };
	    const size = { w: 0, h: 0 };
	    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	    let evtMouseUp, evtMouseMove;
	    const handle = $('<div class="modal-resize-handle"></div>');
	    if (css(element, 'position') === 'static') {
	        css(element, 'position', 'relative');
	    }
	    append(element, handle);
	    function dragMouseDown(e) {
	        e.preventDefault();
	        size.w = offset(element).width;
	        size.h = offset(element).height;
	        // get the mouse cursor position at startup:
	        pos2 = e.clientY;
	        pos.y = getNumber(css(handle, 'top'));
	        pos4 = e.clientX;
	        pos.x = getNumber(css(handle, 'left'));
	        function handleDrag(e) {
	            e.preventDefault();
	            // calculate the new cursor position:
	            pos1 = pos2 - e.clientY;
	            pos2 = e.clientY;
	            pos3 = pos4 - e.clientX;
	            pos4 = e.clientX;
	            if (size.h - pos1 >= boundary[0] && size.h - pos1 <= boundary[2]) {
	                pos.y = pos.y - pos1;
	                size.h -= pos1;
	            }
	            if (size.w - pos3 >= boundary[1] && size.w - pos3 <= boundary[3]) {
	                pos.x = pos.x - pos3;
	                size.w -= pos3;
	            }
	            events.drag && events.drag(e, pos, element);
	            // set the element's new position:
	            css(handle, {
	                top: getUnit('top', pos.y),
	                left: getUnit('left', pos.x)
	            });
	            css(element, {
	                width: getUnit('width', size.w),
	                height: getUnit('height', size.h)
	            });
	        }
	        function closeHandleElement(e) {
	            evtMouseUp();
	            evtMouseMove();
	            events.dragEnd && events.dragEnd(e, element);
	        }
	        evtMouseUp = on(document, 'mouseup', closeHandleElement);
	        evtMouseMove = on(document, 'mousemove', handleDrag);
	        events.dragStart && events.dragStart(e);
	    }
	    on(handle, 'mousedown', dragMouseDown);
	}

	function scrollTop(element, top) {
	    if (isWindow(element) || isDocument(element)) {
	        element = getScrollingElement(element);
	    }
	    else {
	        element = toNode(element);
	    }
	    element.scrollTop = top;
	}
	function scrollIntoView(element, offsetBy = 0) {
	    if (!isVisible(element)) {
	        return;
	    }
	    const parents = overflowParents(element).concat(element);
	    let promise = Promise.resolve();
	    for (let i = 0; i < parents.length - 1; i++) {
	        promise = promise.then(() => new Promise(resolve => {
	            const scrollElement = parents[i];
	            const element = parents[i + 1];
	            const { scrollTop: scroll } = scrollElement;
	            const top = Math.ceil(position(element, getViewport(scrollElement)).top - offsetBy);
	            const duration = getDuration(Math.abs(top));
	            const start = Date.now();
	            const step = () => {
	                const percent = ease(clamp((Date.now() - start) / duration));
	                scrollTop(scrollElement, scroll + top * percent);
	                // scroll more if we have not reached our destination
	                if (percent !== 1) {
	                    requestAnimationFrame(step);
	                }
	                else {
	                    resolve();
	                }
	            };
	            step();
	        }));
	    }
	    return promise;
	    function getDuration(dist) {
	        return 40 * Math.pow(dist, 0.375);
	    }
	    function ease(k) {
	        return 0.5 * (1 - Math.cos(Math.PI * k));
	    }
	}
	function scrollParents(element, overflowRe = /auto|scroll/) {
	    const scrollEl = getScrollingElement(element);
	    const scrollParents = parents(element)
	        .filter((parent) => parent === scrollEl || overflowRe.test(style(parent, 'overflow')))
	        .reverse();
	    return scrollParents.length ? scrollParents : [scrollEl];
	}
	function getViewport(scrollElement) {
	    return scrollElement === getScrollingElement(scrollElement) ? window : scrollElement;
	}
	function overflowParents(element) {
	    return scrollParents(element, /auto|scroll|hidden/);
	}
	function getScrollingElement(element) {
	    const { document } = toWindow(element);
	    return document.scrollingElement || document.documentElement;
	}
	function getCenterX(scroll) {
	    return scroll ? window.innerWidth / 2 + (window.scrollX || window.pageXOffset) : window.innerWidth / 2;
	}
	function getCenterY(scroll) {
	    return scroll ? window.innerHeight / 2 + (window.scrollY || window.pageYOffset) : window.innerHeight / 2;
	}
	function getPositionX(element, scroll = true) {
	    return getCenterX(scroll) - getNumber(css(element, 'width')) / 2;
	}
	function getPositionY(element, scroll = true) {
	    return getCenterY(scroll) - getNumber(css(element, 'height')) / 2;
	}

	var utils = /*#__PURE__*/Object.freeze({
		__proto__: null,
		$: $,
		$$: $$,
		addClass: addClass,
		after: after,
		append: append,
		assign: assign$1,
		attr: attr,
		baseSlice: baseSlice,
		before: before,
		byteSize: byteSize,
		calcDate: calcDate,
		camelize: camelize,
		children: children,
		clamp: clamp,
		closest: closest,
		commaNum: commaNum,
		contrastColor: contrastColor,
		copyToClipboard: copyToClipboard,
		createEvent: createEvent,
		css: css,
		data: data,
		dateData: dateData,
		dateDiff: dateDiff,
		dateFormat: dateFormat,
		dateTimeDiff: dateTimeDiff,
		dayOfMonth: dayOfMonth,
		drag: drag,
		dragLayout: dragLayout,
		drop: drop,
		dropRight: dropRight,
		each: each,
		empty: empty,
		endsWith: endsWith,
		escape: escape,
		escapeEntity: escapeEntity,
		escapeHTML: escapeHTML,
		extend: extend$2,
		fadeout: fadeout,
		filter: filter,
		find: find,
		findAll: findAll,
		findPath: findPath,
		findProperty: findProperty,
		findValue: findValue,
		formatString: formatString,
		fragment: fragment,
		generateUUID: generateUUID,
		getBrowser: getBrowser,
		getByteSize: getByteSize,
		getCenterX: getCenterX,
		getCenterY: getCenterY,
		getEventPos: getEventPos,
		getNumber: getNumber,
		getOS: getOS,
		getPositionX: getPositionX,
		getPositionY: getPositionY,
		getStyle: getStyle,
		getStyles: getStyles,
		getUnit: getUnit,
		getViewport: getViewport,
		hasAttr: hasAttr,
		hasClass: hasClass,
		hasOwn: hasOwn$1,
		hexPrefix: hexPrefix,
		hexToHsl: hexToHsl,
		hexToHwb: hexToHwb,
		hexToRgb: hexToRgb,
		hslToHex: hslToHex,
		hslToRgb: hslToRgb,
		html: html,
		hyphenate: hyphenate,
		includes: includes,
		index: index$1,
		interpolateCop: interpolateCop,
		interpolateURL: interpolateURL,
		isArray: isArray$1,
		isBoolean: isBoolean,
		isCidrIPv4: isCidrIPv4,
		isCidrIPv6: isCidrIPv6,
		isDate: isDate,
		isDocument: isDocument,
		isElement: isElement$2,
		isEmpty: isEmpty,
		isEqual: isEqual,
		isEquals: isEquals,
		isFunction: isFunction,
		isHexPattern: isHexPattern,
		isHtml: isHtml,
		isIE: isIE,
		isIP: isIP,
		isIPv4: isIPv4,
		isIPv4Exclusive: isIPv4Exclusive,
		isIPv4Pattern: isIPv4Pattern,
		isIPv6: isIPv6,
		isIPv6Pattern: isIPv6Pattern,
		isInput: isInput,
		isLongRangeIPv4: isLongRangeIPv4,
		isLongRangeIPv6: isLongRangeIPv6,
		isMAC: isMAC,
		isNetworkAndBroadcastAddr: isNetworkAndBroadcastAddr,
		isNode: isNode,
		isNodeCollection: isNodeCollection,
		isNull: isNull,
		isNumber: isNumber,
		isNumeric: isNumeric,
		isObject: isObject,
		isPlainObject: isPlainObject$1,
		isRangeIPv4: isRangeIPv4,
		isRangeIPv6: isRangeIPv6,
		isString: isString,
		isTouch: isTouch,
		isUndefined: isUndefined,
		isVisible: isVisible,
		isVoidElement: isVoidElement,
		isWindow: isWindow,
		last: last,
		matches: matches,
		merge: merge,
		monthData: monthData,
		next: next,
		nextUntil: nextUntil,
		normalizeMacFormat: normalizeMacFormat,
		objClone: objClone,
		objExtends: objExtends,
		objToDate: objToDate,
		off: off,
		offset: offset,
		on: on,
		once: once,
		parent: parent,
		parents: parents,
		parseBundle: parseBundle,
		position: position,
		prepend: prepend,
		prev: prev,
		prevUntil: prevUntil,
		propName: propName,
		query: query,
		queryAll: queryAll,
		random: random,
		remove: remove,
		removeAttr: removeAttr,
		removeBy: removeBy,
		removeClass: removeClass,
		removeClasses: removeClasses,
		removeStyle: removeStyle,
		replaceClass: replaceClass,
		resize: resize,
		rgbToHex: rgbToHex,
		rgbToHsl: rgbToHsl,
		rgbToHwb: rgbToHwb,
		scrollIntoView: scrollIntoView,
		scrollParents: scrollParents,
		scrollTop: scrollTop,
		selInput: selInput,
		siblings: siblings,
		slideup: slideup,
		sortBy: sortBy,
		startsWith: startsWith,
		style: style,
		styleToVNodeStyle: styleToVNodeStyle,
		styles: styles,
		sumBy: sumBy,
		tempDateByTime: tempDateByTime,
		text: text$1,
		textToMultiLangs: textToMultiLangs,
		toBoolean: toBoolean,
		toDate: toDate,
		toEventTargets: toEventTargets,
		toFinite: toFinite,
		toFloat: toFloat,
		toInteger: toInteger,
		toJson: toJson,
		toList: toList,
		toMs: toMs,
		toNode: toNode,
		toNodes: toNodes,
		toNumber: toNumber,
		toPlainText: toPlainText,
		toWindow: toWindow,
		toggleClass: toggleClass,
		trigger: trigger,
		trim: trim,
		uniqBy: uniqBy,
		val: val,
		within: within,
		zf: zf
	});

	function createElement$1(tagName, options) {
	    return document.createElement(tagName, options);
	}
	function createElementNS(namespaceURI, qualifiedName, options) {
	    return document.createElementNS(namespaceURI, qualifiedName, options);
	}
	function createDocumentFragment() {
	    return parseFragment(document.createDocumentFragment());
	}
	function createTextNode(text) {
	    return document.createTextNode(text);
	}
	function createComment(text) {
	    return document.createComment(text);
	}
	function insertBefore(parentNode, newNode, referenceNode) {
	    if (isDocumentFragment$1(parentNode)) {
	        let node = parentNode;
	        while (node && isDocumentFragment$1(node)) {
	            const fragment = parseFragment(node);
	            node = fragment.parent;
	        }
	        parentNode = node !== null && node !== void 0 ? node : parentNode;
	    }
	    if (isDocumentFragment$1(newNode)) {
	        newNode = parseFragment(newNode, parentNode);
	    }
	    if (referenceNode && isDocumentFragment$1(referenceNode)) {
	        referenceNode = parseFragment(referenceNode).firstChildNode;
	    }
	    parentNode.insertBefore(newNode, referenceNode);
	}
	function removeChild(node, child) {
	    node.removeChild(child);
	}
	function appendChild(node, child) {
	    if (isDocumentFragment$1(child)) {
	        child = parseFragment(child, node);
	    }
	    node.appendChild(child);
	}
	function parentNode(node) {
	    if (isDocumentFragment$1(node)) {
	        while (node && isDocumentFragment$1(node)) {
	            const fragment = parseFragment(node);
	            node = fragment.parent;
	        }
	        return node !== null && node !== void 0 ? node : null;
	    }
	    return node.parentNode;
	}
	function nextSibling(node) {
	    var _a;
	    if (isDocumentFragment$1(node)) {
	        const fragment = parseFragment(node);
	        const parent = parentNode(fragment);
	        if (parent && fragment.lastChildNode) {
	            const children = Array.from(parent.childNodes);
	            const index = children.indexOf(fragment.lastChildNode);
	            return (_a = children[index + 1]) !== null && _a !== void 0 ? _a : null;
	        }
	        return null;
	    }
	    return node.nextSibling;
	}
	function tagName(elm) {
	    return elm.tagName;
	}
	function setTextContent(node, text) {
	    node.textContent = text;
	}
	function getTextContent(node) {
	    return node.textContent;
	}
	function isElement$1(node) {
	    return node.nodeType === 1;
	}
	function isText(node) {
	    return node.nodeType === 3;
	}
	function isComment(node) {
	    return node.nodeType === 8;
	}
	function isDocumentFragment$1(node) {
	    return node.nodeType === 11;
	}
	function parseFragment(fragmentNode, parentNode) {
	    var _a, _b, _c;
	    const fragment = fragmentNode;
	    (_a = fragment.parent) !== null && _a !== void 0 ? _a : (fragment.parent = parentNode !== null && parentNode !== void 0 ? parentNode : null);
	    (_b = fragment.firstChildNode) !== null && _b !== void 0 ? _b : (fragment.firstChildNode = fragmentNode.firstChild);
	    (_c = fragment.lastChildNode) !== null && _c !== void 0 ? _c : (fragment.lastChildNode = fragmentNode.lastChild);
	    return fragment;
	}
	const htmlDomApi = {
	    createElement: createElement$1,
	    createElementNS,
	    createTextNode,
	    createDocumentFragment,
	    createComment,
	    insertBefore,
	    removeChild,
	    appendChild,
	    parentNode,
	    nextSibling,
	    tagName,
	    setTextContent,
	    getTextContent,
	    isElement: isElement$1,
	    isText,
	    isComment,
	    isDocumentFragment: isDocumentFragment$1,
	};

	function vnode$1(sel, data, children, text, elm) {
	    const key = data === undefined ? undefined : data.key;
	    return { sel, data, children, text, elm, key };
	}

	const array$1 = Array.isArray;
	function primitive(s) {
	    return (typeof s === "string" ||
	        typeof s === "number" ||
	        s instanceof String ||
	        s instanceof Number);
	}

	function isUndef(s) {
	    return s === undefined;
	}
	function isDef(s) {
	    return s !== undefined;
	}
	const emptyNode = vnode$1("", {}, [], undefined, undefined);
	function sameVnode(vnode1, vnode2) {
	    var _a, _b;
	    const isSameKey = vnode1.key === vnode2.key;
	    const isSameIs = ((_a = vnode1.data) === null || _a === void 0 ? void 0 : _a.is) === ((_b = vnode2.data) === null || _b === void 0 ? void 0 : _b.is);
	    const isSameSel = vnode1.sel === vnode2.sel;
	    const isSameTextOrFragment = !vnode1.sel && vnode1.sel === vnode2.sel
	        ? typeof vnode1.text === typeof vnode2.text
	        : true;
	    return isSameSel && isSameKey && isSameIs && isSameTextOrFragment;
	}
	/**
	 * @todo Remove this function when the document fragment is considered stable.
	 */
	function documentFragmentIsNotSupported() {
	    throw new Error("The document fragment is not supported on this platform.");
	}
	function isElement(api, vnode) {
	    return api.isElement(vnode);
	}
	function isDocumentFragment(api, vnode) {
	    return api.isDocumentFragment(vnode);
	}
	function createKeyToOldIdx(children, beginIdx, endIdx) {
	    var _a;
	    const map = {};
	    for (let i = beginIdx; i <= endIdx; ++i) {
	        const key = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.key;
	        if (key !== undefined) {
	            map[key] = i;
	        }
	    }
	    return map;
	}
	const hooks = [
	    "create",
	    "update",
	    "remove",
	    "destroy",
	    "pre",
	    "post",
	];
	function init(modules, domApi, options) {
	    const cbs = {
	        create: [],
	        update: [],
	        remove: [],
	        destroy: [],
	        pre: [],
	        post: [],
	    };
	    const api = domApi !== undefined ? domApi : htmlDomApi;
	    for (const hook of hooks) {
	        for (const module of modules) {
	            const currentHook = module[hook];
	            if (currentHook !== undefined) {
	                cbs[hook].push(currentHook);
	            }
	        }
	    }
	    function emptyNodeAt(elm) {
	        const id = elm.id ? "#" + elm.id : "";
	        // elm.className doesn't return a string when elm is an SVG element inside a shadowRoot.
	        // https://stackoverflow.com/questions/29454340/detecting-classname-of-svganimatedstring
	        const classes = elm.getAttribute("class");
	        const c = classes ? "." + classes.split(" ").join(".") : "";
	        return vnode$1(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
	    }
	    function emptyDocumentFragmentAt(frag) {
	        return vnode$1(undefined, {}, [], undefined, frag);
	    }
	    function createRmCb(childElm, listeners) {
	        return function rmCb() {
	            if (--listeners === 0) {
	                const parent = api.parentNode(childElm);
	                api.removeChild(parent, childElm);
	            }
	        };
	    }
	    function createElm(vnode, insertedVnodeQueue) {
	        var _a, _b, _c, _d;
	        let i;
	        let data = vnode.data;
	        if (data !== undefined) {
	            const init = (_a = data.hook) === null || _a === void 0 ? void 0 : _a.init;
	            if (isDef(init)) {
	                init(vnode);
	                data = vnode.data;
	            }
	        }
	        const children = vnode.children;
	        const sel = vnode.sel;
	        if (sel === "!") {
	            if (isUndef(vnode.text)) {
	                vnode.text = "";
	            }
	            vnode.elm = api.createComment(vnode.text);
	        }
	        else if (sel !== undefined) {
	            // Parse selector
	            const hashIdx = sel.indexOf("#");
	            const dotIdx = sel.indexOf(".", hashIdx);
	            const hash = hashIdx > 0 ? hashIdx : sel.length;
	            const dot = dotIdx > 0 ? dotIdx : sel.length;
	            const tag = hashIdx !== -1 || dotIdx !== -1
	                ? sel.slice(0, Math.min(hash, dot))
	                : sel;
	            const elm = (vnode.elm =
	                isDef(data) && isDef((i = data.ns))
	                    ? api.createElementNS(i, tag, data)
	                    : api.createElement(tag, data));
	            if (hash < dot)
	                elm.setAttribute("id", sel.slice(hash + 1, dot));
	            if (dotIdx > 0)
	                elm.setAttribute("class", sel.slice(dot + 1).replace(/\./g, " "));
	            for (i = 0; i < cbs.create.length; ++i)
	                cbs.create[i](emptyNode, vnode);
	            if (array$1(children)) {
	                for (i = 0; i < children.length; ++i) {
	                    const ch = children[i];
	                    if (ch != null) {
	                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));
	                    }
	                }
	            }
	            else if (primitive(vnode.text)) {
	                api.appendChild(elm, api.createTextNode(vnode.text));
	            }
	            const hook = vnode.data.hook;
	            if (isDef(hook)) {
	                (_b = hook.create) === null || _b === void 0 ? void 0 : _b.call(hook, emptyNode, vnode);
	                if (hook.insert) {
	                    insertedVnodeQueue.push(vnode);
	                }
	            }
	        }
	        else if (((_c = options === null || options === void 0 ? void 0 : options.experimental) === null || _c === void 0 ? void 0 : _c.fragments) && vnode.children) {
	            vnode.elm = ((_d = api.createDocumentFragment) !== null && _d !== void 0 ? _d : documentFragmentIsNotSupported)();
	            for (i = 0; i < cbs.create.length; ++i)
	                cbs.create[i](emptyNode, vnode);
	            for (i = 0; i < vnode.children.length; ++i) {
	                const ch = vnode.children[i];
	                if (ch != null) {
	                    api.appendChild(vnode.elm, createElm(ch, insertedVnodeQueue));
	                }
	            }
	        }
	        else {
	            vnode.elm = api.createTextNode(vnode.text);
	        }
	        return vnode.elm;
	    }
	    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	        for (; startIdx <= endIdx; ++startIdx) {
	            const ch = vnodes[startIdx];
	            if (ch != null) {
	                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
	            }
	        }
	    }
	    function invokeDestroyHook(vnode) {
	        var _a, _b;
	        const data = vnode.data;
	        if (data !== undefined) {
	            (_b = (_a = data === null || data === void 0 ? void 0 : data.hook) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, vnode);
	            for (let i = 0; i < cbs.destroy.length; ++i)
	                cbs.destroy[i](vnode);
	            if (vnode.children !== undefined) {
	                for (let j = 0; j < vnode.children.length; ++j) {
	                    const child = vnode.children[j];
	                    if (child != null && typeof child !== "string") {
	                        invokeDestroyHook(child);
	                    }
	                }
	            }
	        }
	    }
	    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
	        var _a, _b;
	        for (; startIdx <= endIdx; ++startIdx) {
	            let listeners;
	            let rm;
	            const ch = vnodes[startIdx];
	            if (ch != null) {
	                if (isDef(ch.sel)) {
	                    invokeDestroyHook(ch);
	                    listeners = cbs.remove.length + 1;
	                    rm = createRmCb(ch.elm, listeners);
	                    for (let i = 0; i < cbs.remove.length; ++i)
	                        cbs.remove[i](ch, rm);
	                    const removeHook = (_b = (_a = ch === null || ch === void 0 ? void 0 : ch.data) === null || _a === void 0 ? void 0 : _a.hook) === null || _b === void 0 ? void 0 : _b.remove;
	                    if (isDef(removeHook)) {
	                        removeHook(ch, rm);
	                    }
	                    else {
	                        rm();
	                    }
	                }
	                else if (ch.children) {
	                    // Fragment node
	                    invokeDestroyHook(ch);
	                    removeVnodes(parentElm, ch.children, 0, ch.children.length - 1);
	                }
	                else {
	                    // Text node
	                    api.removeChild(parentElm, ch.elm);
	                }
	            }
	        }
	    }
	    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
	        let oldStartIdx = 0;
	        let newStartIdx = 0;
	        let oldEndIdx = oldCh.length - 1;
	        let oldStartVnode = oldCh[0];
	        let oldEndVnode = oldCh[oldEndIdx];
	        let newEndIdx = newCh.length - 1;
	        let newStartVnode = newCh[0];
	        let newEndVnode = newCh[newEndIdx];
	        let oldKeyToIdx;
	        let idxInOld;
	        let elmToMove;
	        let before;
	        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	            if (oldStartVnode == null) {
	                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
	            }
	            else if (oldEndVnode == null) {
	                oldEndVnode = oldCh[--oldEndIdx];
	            }
	            else if (newStartVnode == null) {
	                newStartVnode = newCh[++newStartIdx];
	            }
	            else if (newEndVnode == null) {
	                newEndVnode = newCh[--newEndIdx];
	            }
	            else if (sameVnode(oldStartVnode, newStartVnode)) {
	                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	                oldStartVnode = oldCh[++oldStartIdx];
	                newStartVnode = newCh[++newStartIdx];
	            }
	            else if (sameVnode(oldEndVnode, newEndVnode)) {
	                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	                oldEndVnode = oldCh[--oldEndIdx];
	                newEndVnode = newCh[--newEndIdx];
	            }
	            else if (sameVnode(oldStartVnode, newEndVnode)) {
	                // Vnode moved right
	                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
	                oldStartVnode = oldCh[++oldStartIdx];
	                newEndVnode = newCh[--newEndIdx];
	            }
	            else if (sameVnode(oldEndVnode, newStartVnode)) {
	                // Vnode moved left
	                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	                oldEndVnode = oldCh[--oldEndIdx];
	                newStartVnode = newCh[++newStartIdx];
	            }
	            else {
	                if (oldKeyToIdx === undefined) {
	                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
	                }
	                idxInOld = oldKeyToIdx[newStartVnode.key];
	                if (isUndef(idxInOld)) {
	                    // New element
	                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	                }
	                else {
	                    elmToMove = oldCh[idxInOld];
	                    if (elmToMove.sel !== newStartVnode.sel) {
	                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	                    }
	                    else {
	                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	                        oldCh[idxInOld] = undefined;
	                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
	                    }
	                }
	                newStartVnode = newCh[++newStartIdx];
	            }
	        }
	        if (newStartIdx <= newEndIdx) {
	            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
	            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	        }
	        if (oldStartIdx <= oldEndIdx) {
	            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	        }
	    }
	    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
	        var _a, _b, _c, _d, _e, _f, _g, _h;
	        const hook = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.hook;
	        (_b = hook === null || hook === void 0 ? void 0 : hook.prepatch) === null || _b === void 0 ? void 0 : _b.call(hook, oldVnode, vnode);
	        const elm = (vnode.elm = oldVnode.elm);
	        if (oldVnode === vnode)
	            return;
	        if (vnode.data !== undefined ||
	            (isDef(vnode.text) && vnode.text !== oldVnode.text)) {
	            (_c = vnode.data) !== null && _c !== void 0 ? _c : (vnode.data = {});
	            (_d = oldVnode.data) !== null && _d !== void 0 ? _d : (oldVnode.data = {});
	            for (let i = 0; i < cbs.update.length; ++i)
	                cbs.update[i](oldVnode, vnode);
	            (_g = (_f = (_e = vnode.data) === null || _e === void 0 ? void 0 : _e.hook) === null || _f === void 0 ? void 0 : _f.update) === null || _g === void 0 ? void 0 : _g.call(_f, oldVnode, vnode);
	        }
	        const oldCh = oldVnode.children;
	        const ch = vnode.children;
	        if (isUndef(vnode.text)) {
	            if (isDef(oldCh) && isDef(ch)) {
	                if (oldCh !== ch)
	                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
	            }
	            else if (isDef(ch)) {
	                if (isDef(oldVnode.text))
	                    api.setTextContent(elm, "");
	                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	            }
	            else if (isDef(oldCh)) {
	                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	            }
	            else if (isDef(oldVnode.text)) {
	                api.setTextContent(elm, "");
	            }
	        }
	        else if (oldVnode.text !== vnode.text) {
	            if (isDef(oldCh)) {
	                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	            }
	            api.setTextContent(elm, vnode.text);
	        }
	        (_h = hook === null || hook === void 0 ? void 0 : hook.postpatch) === null || _h === void 0 ? void 0 : _h.call(hook, oldVnode, vnode);
	    }
	    return function patch(oldVnode, vnode) {
	        let i, elm, parent;
	        const insertedVnodeQueue = [];
	        for (i = 0; i < cbs.pre.length; ++i)
	            cbs.pre[i]();
	        if (isElement(api, oldVnode)) {
	            oldVnode = emptyNodeAt(oldVnode);
	        }
	        else if (isDocumentFragment(api, oldVnode)) {
	            oldVnode = emptyDocumentFragmentAt(oldVnode);
	        }
	        if (sameVnode(oldVnode, vnode)) {
	            patchVnode(oldVnode, vnode, insertedVnodeQueue);
	        }
	        else {
	            elm = oldVnode.elm;
	            parent = api.parentNode(elm);
	            createElm(vnode, insertedVnodeQueue);
	            if (parent !== null) {
	                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
	                removeVnodes(parent, [oldVnode], 0, 0);
	            }
	        }
	        for (i = 0; i < insertedVnodeQueue.length; ++i) {
	            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
	        }
	        for (i = 0; i < cbs.post.length; ++i)
	            cbs.post[i]();
	        return vnode;
	    };
	}

	function addNS(data, children, sel) {
	    data.ns = "http://www.w3.org/2000/svg";
	    if (sel !== "foreignObject" && children !== undefined) {
	        for (let i = 0; i < children.length; ++i) {
	            const child = children[i];
	            if (typeof child === "string")
	                continue;
	            const childData = child.data;
	            if (childData !== undefined) {
	                addNS(childData, child.children, child.sel);
	            }
	        }
	    }
	}

	function toVNode(node, domApi) {
	    const api = domApi !== undefined ? domApi : htmlDomApi;
	    let text;
	    if (api.isElement(node)) {
	        const id = node.id ? "#" + node.id : "";
	        const cn = node.getAttribute("class");
	        const c = cn ? "." + cn.split(" ").join(".") : "";
	        const sel = api.tagName(node).toLowerCase() + id + c;
	        const attrs = {};
	        const dataset = {};
	        const data = {};
	        const children = [];
	        let name;
	        let i, n;
	        const elmAttrs = node.attributes;
	        const elmChildren = node.childNodes;
	        for (i = 0, n = elmAttrs.length; i < n; i++) {
	            name = elmAttrs[i].nodeName;
	            if (name[0] === "d" &&
	                name[1] === "a" &&
	                name[2] === "t" &&
	                name[3] === "a" &&
	                name[4] === "-") {
	                dataset[name.slice(5)] = elmAttrs[i].nodeValue || "";
	            }
	            else if (name !== "id" && name !== "class") {
	                attrs[name] = elmAttrs[i].nodeValue;
	            }
	        }
	        for (i = 0, n = elmChildren.length; i < n; i++) {
	            children.push(toVNode(elmChildren[i], domApi));
	        }
	        if (Object.keys(attrs).length > 0)
	            data.attrs = attrs;
	        if (Object.keys(dataset).length > 0)
	            data.dataset = dataset;
	        if (sel[0] === "s" &&
	            sel[1] === "v" &&
	            sel[2] === "g" &&
	            (sel.length === 3 || sel[3] === "." || sel[3] === "#")) {
	            addNS(data, children, sel);
	        }
	        return vnode$1(sel, data, children, undefined, node);
	    }
	    else if (api.isText(node)) {
	        text = api.getTextContent(node);
	        return vnode$1(undefined, undefined, undefined, text, node);
	    }
	    else if (api.isComment(node)) {
	        text = api.getTextContent(node);
	        return vnode$1("!", {}, [], text, node);
	    }
	    else {
	        return vnode$1("", {}, [], undefined, node);
	    }
	}

	function updateClass(oldVnode, vnode) {
	    let cur;
	    let name;
	    const elm = vnode.elm;
	    let oldClass = oldVnode.data.class;
	    let klass = vnode.data.class;
	    if (!oldClass && !klass)
	        return;
	    if (oldClass === klass)
	        return;
	    oldClass = oldClass || {};
	    klass = klass || {};
	    for (name in oldClass) {
	        if (oldClass[name] && !Object.prototype.hasOwnProperty.call(klass, name)) {
	            // was `true` and now not provided
	            elm.classList.remove(name);
	        }
	    }
	    for (name in klass) {
	        cur = klass[name];
	        if (cur !== oldClass[name]) {
	            elm.classList[cur ? "add" : "remove"](name);
	        }
	    }
	}
	const classModule = { create: updateClass, update: updateClass };

	const CAPS_REGEX = /[A-Z]/g;
	function updateDataset(oldVnode, vnode) {
	    const elm = vnode.elm;
	    let oldDataset = oldVnode.data.dataset;
	    let dataset = vnode.data.dataset;
	    let key;
	    if (!oldDataset && !dataset)
	        return;
	    if (oldDataset === dataset)
	        return;
	    oldDataset = oldDataset || {};
	    dataset = dataset || {};
	    const d = elm.dataset;
	    for (key in oldDataset) {
	        if (!dataset[key]) {
	            if (d) {
	                if (key in d) {
	                    delete d[key];
	                }
	            }
	            else {
	                elm.removeAttribute("data-" + key.replace(CAPS_REGEX, "-$&").toLowerCase());
	            }
	        }
	    }
	    for (key in dataset) {
	        if (oldDataset[key] !== dataset[key]) {
	            if (d) {
	                d[key] = dataset[key];
	            }
	            else {
	                elm.setAttribute("data-" + key.replace(CAPS_REGEX, "-$&").toLowerCase(), dataset[key]);
	            }
	        }
	    }
	}
	const datasetModule = {
	    create: updateDataset,
	    update: updateDataset,
	};

	function invokeHandler(handler, vnode, event) {
	    if (typeof handler === "function") {
	        // call function handler
	        handler.call(vnode, event, vnode);
	    }
	    else if (typeof handler === "object") {
	        // call multiple handlers
	        for (let i = 0; i < handler.length; i++) {
	            invokeHandler(handler[i], vnode, event);
	        }
	    }
	}
	function handleEvent(event, vnode) {
	    const name = event.type;
	    const on = vnode.data.on;
	    // call event handler(s) if exists
	    if (on && on[name]) {
	        invokeHandler(on[name], vnode, event);
	    }
	}
	function createListener() {
	    return function handler(event) {
	        handleEvent(event, handler.vnode);
	    };
	}
	function updateEventListeners(oldVnode, vnode) {
	    const oldOn = oldVnode.data.on;
	    const oldListener = oldVnode.listener;
	    const oldElm = oldVnode.elm;
	    const on = vnode && vnode.data.on;
	    const elm = (vnode && vnode.elm);
	    let name;
	    // optimization for reused immutable handlers
	    if (oldOn === on) {
	        return;
	    }
	    // remove existing listeners which no longer used
	    if (oldOn && oldListener) {
	        // if element changed or deleted we remove all existing listeners unconditionally
	        if (!on) {
	            for (name in oldOn) {
	                // remove listener if element was changed or existing listeners removed
	                oldElm.removeEventListener(name, oldListener, false);
	            }
	        }
	        else {
	            for (name in oldOn) {
	                // remove listener if existing listener removed
	                if (!on[name]) {
	                    oldElm.removeEventListener(name, oldListener, false);
	                }
	            }
	        }
	    }
	    // add new listeners which has not already attached
	    if (on) {
	        // reuse existing listener or create new
	        const listener = (vnode.listener =
	            oldVnode.listener || createListener());
	        // update vnode for listener
	        listener.vnode = vnode;
	        // if element changed or added we add all needed listeners unconditionally
	        if (!oldOn) {
	            for (name in on) {
	                // add listener if element was changed or new listeners added
	                elm.addEventListener(name, listener, false);
	            }
	        }
	        else {
	            for (name in on) {
	                // add listener if new listener added
	                if (!oldOn[name]) {
	                    elm.addEventListener(name, listener, false);
	                }
	            }
	        }
	    }
	}
	const eventListenersModule = {
	    create: updateEventListeners,
	    update: updateEventListeners,
	    destroy: updateEventListeners,
	};

	function updateProps(oldVnode, vnode) {
	    let key;
	    let cur;
	    let old;
	    const elm = vnode.elm;
	    let oldProps = oldVnode.data.props;
	    let props = vnode.data.props;
	    if (!oldProps && !props)
	        return;
	    if (oldProps === props)
	        return;
	    oldProps = oldProps || {};
	    props = props || {};
	    for (key in props) {
	        cur = props[key];
	        old = oldProps[key];
	        if (old !== cur && (key !== "value" || elm[key] !== cur)) {
	            elm[key] = cur;
	        }
	    }
	}
	const propsModule = { create: updateProps, update: updateProps };

	// Bindig `requestAnimationFrame` like this fixes a bug in IE/Edge. See #360 and #409.
	const raf = (typeof window !== "undefined" &&
	    window.requestAnimationFrame.bind(window)) ||
	    setTimeout;
	const nextFrame = function (fn) {
	    raf(function () {
	        raf(fn);
	    });
	};
	let reflowForced = false;
	function setNextFrame(obj, prop, val) {
	    nextFrame(function () {
	        obj[prop] = val;
	    });
	}
	function updateStyle(oldVnode, vnode) {
	    let cur;
	    let name;
	    const elm = vnode.elm;
	    let oldStyle = oldVnode.data.style;
	    let style = vnode.data.style;
	    if (!oldStyle && !style)
	        return;
	    if (oldStyle === style)
	        return;
	    oldStyle = oldStyle || {};
	    style = style || {};
	    const oldHasDel = "delayed" in oldStyle;
	    for (name in oldStyle) {
	        if (!style[name]) {
	            if (name[0] === "-" && name[1] === "-") {
	                elm.style.removeProperty(name);
	            }
	            else {
	                elm.style[name] = "";
	            }
	        }
	    }
	    for (name in style) {
	        cur = style[name];
	        if (name === "delayed" && style.delayed) {
	            for (const name2 in style.delayed) {
	                cur = style.delayed[name2];
	                if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
	                    setNextFrame(elm.style, name2, cur);
	                }
	            }
	        }
	        else if (name !== "remove" && cur !== oldStyle[name]) {
	            if (name[0] === "-" && name[1] === "-") {
	                elm.style.setProperty(name, cur);
	            }
	            else {
	                elm.style[name] = cur;
	            }
	        }
	    }
	}
	function applyDestroyStyle(vnode) {
	    let style;
	    let name;
	    const elm = vnode.elm;
	    const s = vnode.data.style;
	    if (!s || !(style = s.destroy))
	        return;
	    for (name in style) {
	        elm.style[name] = style[name];
	    }
	}
	function applyRemoveStyle(vnode, rm) {
	    const s = vnode.data.style;
	    if (!s || !s.remove) {
	        rm();
	        return;
	    }
	    if (!reflowForced) {
	        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
	        vnode.elm.offsetLeft;
	        reflowForced = true;
	    }
	    let name;
	    const elm = vnode.elm;
	    let i = 0;
	    const style = s.remove;
	    let amount = 0;
	    const applied = [];
	    for (name in style) {
	        applied.push(name);
	        elm.style[name] = style[name];
	    }
	    const compStyle = getComputedStyle(elm);
	    const props = compStyle["transition-property"].split(", ");
	    for (; i < props.length; ++i) {
	        if (applied.indexOf(props[i]) !== -1)
	            amount++;
	    }
	    elm.addEventListener("transitionend", function (ev) {
	        if (ev.target === elm)
	            --amount;
	        if (amount === 0)
	            rm();
	    });
	}
	function forceReflow() {
	    reflowForced = false;
	}
	const styleModule = {
	    pre: forceReflow,
	    create: updateStyle,
	    update: updateStyle,
	    destroy: applyDestroyStyle,
	    remove: applyRemoveStyle,
	};

	const patch = init([datasetModule, propsModule, classModule, styleModule, eventListenersModule]);
	class GNCoreView {
	    constructor(selector, template) {
	        this.selector = selector;
	        this.template = template;
	        this.vnode = null;
	    }
	    render() {
	        const newVNode = this.template;
	        if (!this.vnode) {
	            this.vnode = toVNode(this.selector);
	        }
	        this.vnode = patch(this.vnode, newVNode);
	        return this.vnode;
	    }
	    reRender(oldNode, newNode) {
	        this.vnode = toVNode(oldNode);
	        this.template = newNode;
	        return this.render();
	    }
	}

	class GNCoreEventManager {
	    constructor() {
	        this._eventMap = {}; // 이벤트 데이터 초기화
	    }
	    static getInstance() {
	        if (!GNCoreEventManager.instance) {
	            GNCoreEventManager.instance = new GNCoreEventManager();
	        }
	        return GNCoreEventManager.instance;
	    }
	    // life cycle event add
	    stateAdd(uid, name, handler) {
	        return this.add(undefined, uid, name, handler);
	    }
	    add(target, uid, name, handler) {
	        if (!this._eventMap[uid]) {
	            this._eventMap[uid] = []; // 해당 uid에 대한 이벤트가 없는 경우 초기화
	        }
	        const eid = this._getEventId(uid); // eventID 생성
	        this._eventMap[uid].push(target
	            ? {
	                target,
	                eid,
	                uid,
	                name,
	                handler
	            }
	            : {
	                eid,
	                uid,
	                name,
	                handler
	            });
	        target && on(target, name, handler); // 이벤트 바인딩
	        return eid;
	    }
	    remove(uid, name) {
	        const _events = this._getEvent(uid, name);
	        // 이벤트 해제
	        if (_events.length) {
	            _events.forEach((_event) => {
	                off(_event.target, _event.name, _event.handler);
	                // eventMap에서 해당 이벤트 삭제
	                this._eventMap[uid].some(event => event.eid === _event.eid) &&
	                    this._eventMap[uid].splice(this._eventMap[uid].findIndex(event => event.eid === _event.eid), 1);
	            });
	            // uid에 대한 이벤트가 남아있지 않은 경우 uid 키 삭제
	            if (!this._eventMap[uid].length) {
	                delete this._eventMap[uid];
	            }
	        }
	    }
	    removeAll(uid) {
	        if (!this._eventMap[uid]) {
	            return;
	        }
	        // 이벤트 해제
	        this._eventMap[uid].forEach(event => {
	            if (event.target) {
	                off(event.target, event.name, event.handler);
	            }
	        });
	        // 이벤트 삭제
	        delete this._eventMap[uid];
	    }
	    dispatch(uid, name, ...params) {
	        const _events = this._getEvent(uid, name);
	        if (_events.length) {
	            _events.forEach((_event) => {
	                _event.target ? _event.handler.call(_event.target, ...params) : _event.handler.call(this, ...params);
	            });
	        }
	    }
	    _getEvent(uid, name) {
	        // parameters에 해당하는 이벤트 반환
	        return this._eventMap[uid]
	            ? this._eventMap[uid].filter(event => {
	                return event.name === name;
	            }) || []
	            : [];
	    }
	    _getEventId(uid) {
	        // event ID 생성
	        return `ev_${uid}${this._eventMap[uid].length}`;
	    }
	}

	const GN_CONSTANT = Object.freeze({
	    SPLITTER: '__gnui__',
	    PREFIX: 'gn-',
	    VERSION: 0.1,
	    LIFE_CYCLE: ['created', 'beforeMount', 'beforeBind', 'completed', 'destroy', 'destroyed'],
	    COLOR_SET: ['white', 'black', 'light', 'dark', 'primary', 'secondary', 'mono', 'link', 'info', 'cancel', 'success', 'warning', 'danger', 'trans', 'error', 'trans', 'guide'],
	    SEARCH_ITEM: 'search item'
	});

	// components state
	class GNUIState {
	    constructor() {
	        this._init();
	    }
	    // singleton 적용
	    static getInstance() {
	        if (!GNUIState.instance) {
	            GNUIState.instance = new GNUIState();
	        }
	        return GNUIState.instance;
	    }
	    // 컴포넌트 init
	    _init() {
	        this._initObserver();
	        this._componentMap = {};
	    }
	    // 최초 생성 후 state에 등록 - created
	    _addComponent(component) {
	        const uid = component._uid;
	        if (uid && !this._componentMap[uid]) {
	            this._componentMap[uid] = {
	                component: component,
	                selector: component.$selector,
	                uid: uid,
	                status: 'created'
	            };
	        }
	    }
	    // this._componentMap 에서 찾는다.
	    _getComponent(selector) {
	        if (!selector) {
	            return;
	        }
	        const _selector = $(selector);
	        let _findComponent;
	        if (!_selector) {
	            return undefined;
	        }
	        Object.values(this._componentMap).forEach(n => {
	            // 동일한 selector 인지 비교
	            if (isEquals(n.uid, _selector) || isEquals(_selector.id, n.uid)) {
	                _findComponent = n.component;
	                _findComponent._status = n.status;
	                return false;
	            }
	        });
	        return _findComponent;
	    }
	    // 등록된 컴포넌트 제거
	    _removeComponent(selector) {
	        if (!selector) {
	            return;
	        }
	        const _selector = $(selector);
	        Object.values(this._componentMap).forEach(n => {
	            // 동일한 selector 인지 비교해서 동일한 component의 selector이면 제거 처리
	            if (isEquals(n.selector, _selector)) {
	                delete this._componentMap[_selector._uid];
	            }
	        });
	    }
	    // 컴포넌트 life cycle에 따른 eventManager dispatch
	    _detectedCycle(uid, name) {
	        // component 마지막 status 업데이트
	        if (this._componentMap[uid]) {
	            this._componentMap[uid].status = name;
	        }
	        // event manager를 이용해 해당 uid 이벤트 dispatch
	        const eventManager = GNCoreEventManager.getInstance();
	        // 호출 후
	        eventManager.dispatch(uid, name);
	        // 이벤트 해제 - life cycle 은 컴포넌트 별로 한번씩만 존재하므로..
	        eventManager.remove(uid, name);
	    }
	    // document DOM observer 실행
	    // - DOM 변환 이벤트 감지해서 removedNodes 가 생기면 해당 node와 일치하는 component를 찾아 제거한다.
	    // TODO : 성능 확인 필요
	    _initObserver() {
	        // eslint-disable-next-line @typescript-eslint/no-this-alias
	        const closerThis = this;
	        // node 삭제됨 -> state manager 통해서 componentMap에서 제거 처리
	        function _removedNode(removed) {
	            Array.prototype.forEach.call(removed, (rm) => {
	                // 삭제노드 연관 컴포넌트 (ex. tooltip) 삭제
	                const dependents = findAll('[data-gnui]', rm);
	                each(dependents, (dependent) => {
	                    if (isElement$2(dependent)) {
	                        const $dependent = $('#' + attr(dependent, 'data-gnui'));
	                        if ($dependent) {
	                            remove($dependent);
	                        }
	                    }
	                });
	                if (isElement$2(rm) && attr(rm, 'data-gnui')) {
	                    remove($('#' + attr(rm, 'data-gnui')));
	                }
	                const findComponent = closerThis._getComponent($(rm));
	                if (findComponent && findComponent._uid && !findComponent.$el.parentNode) {
	                    // state manager 에서 component 삭제
	                    closerThis._removeComponent(rm);
	                    // event manager 에서 unbind
	                    GNCoreEventManager.getInstance().removeAll(findComponent._uid);
	                }
	            });
	        }
	        // element(document.body) 내 DOM 변환 이벤트 감지
	        const observer = new MutationObserver((mutations) => {
	            if (isArray$1(mutations) && mutations.length) {
	                mutations.forEach(mt => {
	                    mt.removedNodes.length && _removedNode(mt.removedNodes);
	                });
	            }
	        });
	        observer.observe(document.body, { childList: true, subtree: true });
	        // TODO: observer.disconnect() 수행 필요여부 확인
	    }
	}

	// component instance
	class GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        var _a;
	        this.$name = name;
	        this.$selector = selector ? $(selector) : null;
	        this.$options = options;
	        // random uniqueId 생성
	        const uuid = () => {
	            if (window.crypto && window.crypto.randomUUID) {
	                return window.crypto.randomUUID();
	            }
	            return generateUUID();
	        };
	        this._uid = ((_a = this.$selector) === null || _a === void 0 ? void 0 : _a.id) || `${GN_CONSTANT.PREFIX}${uuid()}`;
	    }
	    $reset() { }
	    $init(component, options) {
	        const stateManager = GNUIState.getInstance();
	        this.$create(component, options);
	        // state manager에 component 최초 등록
	        stateManager._addComponent(component);
	        // component.$options.states => 사용자가 정의한 lifecycle callback handler
	        this.$stateBind(component);
	        // stateManager를 통해 beforeMount 상태 dispatch
	        stateManager._detectedCycle(component._uid, 'beforeMount');
	        this.$mount(component, this.$selector);
	        this.$render(component.$options);
	        // stateManager를 통해 beforeBind 상태 dispatch
	        stateManager._detectedCycle(component._uid, 'beforeBind');
	        this.$bind(component);
	        // stateManager를 통해 completed 상태 dispatch
	        stateManager._detectedCycle(component._uid, 'completed');
	    }
	    $create(component, options) {
	        // extend options
	        each(component.config, (val, key) => {
	            if (key === 'textSets' && isPlainObject$1(component.config[key] && options[key])) {
	                // textSets
	                each(component.config[key], (v, k) => {
	                    if (options[key][k] === undefined) {
	                        this.$options[key][k] = v;
	                    }
	                });
	            }
	            else if (options[key] !== undefined) {
	                // 기본값이 없는 config의 경우 options로 대체
	                this.$options[key] = options[key];
	            }
	            else {
	                // option으로 전달되지 않은 경우 config 값을 사용
	                this.$options[key] = val;
	            }
	        });
	        // bind state event
	        const stateEvents = {};
	        GN_CONSTANT.LIFE_CYCLE.forEach((lc) => {
	            if (this.$options[lc]) {
	                stateEvents[lc] = this.$options[lc];
	                this.$options[lc] = null;
	                delete this.$options[lc];
	            }
	        });
	        this.$options.states = stateEvents;
	        // bind user events
	        each(component.events, (val, key) => {
	            if (this.$options[key]) {
	                if (isPlainObject$1(val)) {
	                    val.handler = this.$options[key];
	                    this.$options[key] = null;
	                    delete this.$options[key];
	                }
	                else {
	                    component.events[key] = component.$options[key];
	                }
	            }
	            else {
	                delete component.events[key];
	            }
	        });
	        // bind methods - 외부에 제공하는 methods 연결
	        if (isPlainObject$1(component.methods)) {
	            each(component.methods, (val, key) => {
	                component[key] = val;
	            });
	            component.methods = null;
	            delete component.methods;
	        }
	    }
	    // lifecycle 관련 이벤트 add to eventManager
	    $stateBind(component) {
	        const eventManager = GNCoreEventManager.getInstance();
	        // lifecycle 관련 이벤트 add to eventManager
	        GN_CONSTANT.LIFE_CYCLE.forEach((ev) => {
	            eventManager.stateAdd(component._uid, ev, (...args) => {
	                // 해당 life cycle 상태에 해당하는 함수가 각 컴포넌트 내부에 정의되어 있으면 호출한다.
	                if (isFunction(component[ev])) {
	                    component[ev](args);
	                }
	                // 사용자가 life cycle에 대한 콜백 함수를 등록한 경우 호출해준다.
	                if (component.$options.states && component.$options.states[ev] && isFunction(component.$options.states[ev])) {
	                    component.$options.states[ev](args);
	                }
	            });
	        });
	    }
	    // patch가 아닌 append 되어야 하는 컴포넌트 처리
	    appendTarget() {
	        const newRoot = $('<div>');
	        append(this.$selector, newRoot);
	        this.$selector = newRoot;
	    }
	    // 가상돔 컴포넌트 처리
	    virtualTarget() {
	        const newRoot = $('<div>');
	        this.$selector = newRoot;
	    }
	    // Element 받아서 DOM 생성
	    $mount(component, selector) {
	        if (component.template) {
	            // template 가 있는 경우에만
	            component.$template = new GNCoreView(selector, component.template(component.$options));
	            const rendered = component.$template.render();
	            // 객체 엘리먼트를 생성된 엘리먼트로 변경
	            this.$el = rendered.elm;
	            // inherit selector dataset
	            if (!isEmpty(selector.dataset)) {
	                each(selector.dataset, (value, field) => {
	                    attr(this.$el, `data-${field}`, value);
	                });
	            }
	            // inherit selector class
	            selector.className && addClass(this.$el, selector.className);
	        }
	        else {
	            this.$el = $(this.$selector);
	        }
	        // delegates 바인딩
	        each(this.$options.delegates, (val, key) => {
	            if (isString(val)) {
	                this.$options.delegates[key] = find(val, this.$el);
	            }
	        });
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $render(config) { }
	    // Event binding
	    // 기본적인 컴포넌트의 이벤트는 jsx 를 통해 바인딩
	    // user event 를 전달받아 eventManager로 관리하도록 추가
	    $bind(component, events) {
	        events = events || component.events;
	        if (!isEmpty(events)) {
	            // bind events
	            const eventManager = GNCoreEventManager.getInstance();
	            each(events, (event, name) => {
	                if (isFunction(event)) {
	                    eventManager.add(this.$el, this._uid, event.name || name, event);
	                }
	                else if (isPlainObject$1(event)) {
	                    const delegate = isFunction(event.delegate) ? event.delegate() : event.delegate;
	                    eventManager.add(delegate, this._uid, event.name, event.handler);
	                }
	            });
	        }
	        if (events === component.events) {
	            delete component.events;
	        }
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $update(element = this.$el, e) { }
	    $event(component, name, ...params) {
	        const eventManager = GNCoreEventManager.getInstance();
	        eventManager.dispatch(component._uid, name, params);
	    }
	    $destroy(component = this, removeEl = true) {
	        const stateManager = GNUIState.getInstance();
	        // state manager 를 통해 destroy 상태 dispatch
	        stateManager._detectedCycle(component._uid, 'destroy');
	        // remove Component in state manager
	        stateManager._removeComponent(component.$selector);
	        // remove DOM (by removeEl)
	        if (removeEl) {
	            style(component.$el, 'display', 'none');
	            remove(component.$el);
	        }
	        // state manager 를 통해 destroy 상태 dispatch
	        stateManager._detectedCycle(component._uid, 'destroyed');
	        // event manager 에서 등록 해제가 가장 마지막..
	        GNCoreEventManager.getInstance().removeAll(component._uid);
	    }
	}

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var defineProperty = Object.defineProperty;
	var gOPD = Object.getOwnPropertyDescriptor;

	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}

		return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}

		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) { /**/ }

		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};

	// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
	var setProperty = function setProperty(target, options) {
		if (defineProperty && options.name === '__proto__') {
			defineProperty(target, options.name, {
				enumerable: true,
				configurable: true,
				value: options.newValue,
				writable: true
			});
		} else {
			target[options.name] = options.newValue;
		}
	};

	// Return undefined instead of __proto__ if '__proto__' is not an own property
	var getProperty = function getProperty(obj, name) {
		if (name === '__proto__') {
			if (!hasOwn.call(obj, name)) {
				return void 0;
			} else if (gOPD) {
				// In early versions of node, obj['__proto__'] is buggy when obj has
				// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
				return gOPD(obj, name).value;
			}
		}

		return obj[name];
	};

	var extend$1 = function extend() {
		var options, name, src, copy, copyIsArray, clone;
		var target = arguments[0];
		var i = 1;
		var length = arguments.length;
		var deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}
		if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = getProperty(target, name);
					copy = getProperty(options, name);

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							setProperty(target, { name: name, newValue: copy });
						}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	var _extend = /*@__PURE__*/getDefaultExportFromCjs(extend$1);

	var undefinedv = function (v) { return v === undefined; };

	var number = function (v) { return typeof v === 'number'; };

	var string = function (v) { return typeof v === 'string'; };

	var text = function (v) { return string(v) || number(v); };

	var array = function (v) { return Array.isArray(v); };

	var object = function (v) { return typeof v === 'object' && v !== null; };

	var fun = function (v) { return typeof v === 'function'; };

	var vnode = function (v) { return object(v) && 'sel' in v && 'data' in v && 'children' in v && 'text' in v; };

	var svgPropsMap = { svg: 1, circle: 1, ellipse: 1, line: 1, polygon: 1,
	  polyline: 1, rect: 1, g: 1, path: 1, text: 1 };

	var svg = function (v) { return v.sel in svgPropsMap; };

	// TODO: stop using extend here
	var extend = function () {
	  var objs = [], len = arguments.length;
	  while ( len-- ) objs[ len ] = arguments[ len ];

	  return _extend.apply(void 0, [ true ].concat( objs ));
	};

	var assign = function () {
	  var objs = [], len = arguments.length;
	  while ( len-- ) objs[ len ] = arguments[ len ];

	  return _extend.apply(void 0, [ false ].concat( objs ));
	};

	var reduceDeep = function (arr, fn, initial) {
	  var result = initial;
	  for (var i = 0; i < arr.length; i++) {
	    var value = arr[i];
	    if (array(value)) {
	      result = reduceDeep(value, fn, result);
	    } else {
	      result = fn(result, value);
	    }
	  }
	  return result
	};

	var mapObject = function (obj, fn) { return Object.keys(obj).map(
	  function (key) { return fn(key, obj[key]); }
	).reduce(
	  function (acc, curr) { return extend(acc, curr); },
	  {}
	); };

	var deepifyKeys = function (obj, modules) { return mapObject(obj,
	  function (key, val) {
	    var dashIndex = key.indexOf('-');
	    if (dashIndex > -1 && modules[key.slice(0, dashIndex)] !== undefined) {
	      var moduleData = {};
	      moduleData[key.slice(dashIndex + 1)] = val;
	      return ( obj = {}, obj[key.slice(0, dashIndex)] = moduleData, obj )
	      var obj;
	    }
	    return ( obj$1 = {}, obj$1[key] = val, obj$1 )
	    var obj$1;
	  }
	); };



	var omit = function (key, obj) { return mapObject(obj,
	  function (mod, data) { return mod !== key ? (( obj = {}, obj[mod] = data, obj )) : {}
	    var obj; }
	); };

	// Const fnName = (...params) => guard ? default : ...

	var createTextElement = function (text$$1) { return !text(text$$1) ? undefined : {
	  text: text$$1,
	  sel: undefined,
	  data: undefined,
	  children: undefined,
	  elm: undefined,
	  key: undefined
	}; };

	var considerSvg = function (vnode$$1) { return !svg(vnode$$1) ? vnode$$1 :
	  assign(vnode$$1,
	    { data: omit('props', extend(vnode$$1.data,
	      { ns: 'http://www.w3.org/2000/svg', attrs: omit('className', extend(vnode$$1.data.props,
	        { class: vnode$$1.data.props ? vnode$$1.data.props.className : undefined }
	      )) }
	    )) },
	    { children: undefinedv(vnode$$1.children) ? undefined :
	      vnode$$1.children.map(function (child) { return considerSvg(child); })
	    }
	  ); };

	var rewrites = {
	  for: 'attrs',
	  role: 'attrs',
	  tabindex: 'attrs',
	  'aria-*': 'attrs',
	  key: null
	};

	var rewriteModules = function (data, modules) { return mapObject(data, function (key, val) {
	  var inner = {};
	  inner[key] = val;
	  if (rewrites[key] && modules[rewrites[key]] !== undefined) {
	    return ( obj = {}, obj[rewrites[key]] = inner, obj )
	    var obj;
	  }
	  if (rewrites[key] === null) {
	    return {}
	  }
	  var keys = Object.keys(rewrites);
	  for (var i = 0; i < keys.length; i++) {
	    var k = keys[i];
	    if (k.charAt(k.length - 1) === '*' && key.indexOf(k.slice(0, -1)) === 0 && modules[rewrites[k]] !== undefined) {
	      return ( obj$1 = {}, obj$1[rewrites[k]] = inner, obj$1 )
	      var obj$1;
	    }
	  }
	  if (modules[key] !== undefined) {
	    return ( obj$2 = {}, obj$2[modules[key] ? modules[key] : key] = val, obj$2 )
	    var obj$2;
	  }
	  if (modules.props !== undefined) {
	    return { props: inner }
	  }
	  return inner
	}); };

	var sanitizeData = function (data, modules) { return considerSvg(rewriteModules(deepifyKeys(data, modules), modules)); };

	var sanitizeText = function (children) { return children.length > 1 || !text(children[0]) ? undefined : children[0]; };

	var sanitizeChildren = function (children) { return reduceDeep(children, function (acc, child) {
	  var vnode$$1 = vnode(child) ? child : createTextElement(child);
	  acc.push(vnode$$1);
	  return acc
	}
	, []); };

	var defaultModules = {
	  attrs: '',
	  props: '',
	  class: '',
	  data: 'dataset',
	  style: '',
	  hook: '',
	  on: ''
	};

	var createElementWithModules = function (modules) {
	  return function (sel, data) {
	    var children = [], len = arguments.length - 2;
	    while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

	    if (fun(sel)) {
	      return sel(data || {}, children)
	    }
	    var text$$1 = sanitizeText(children);
	    return considerSvg({
	      sel: sel,
	      data: data ? sanitizeData(data, modules) : {},
	      children: text$$1 ? undefined : sanitizeChildren(children),
	      text: text$$1,
	      elm: undefined,
	      key: data ? data.key : undefined
	    })
	  }
	};

	var createElement = createElementWithModules(defaultModules);

	var index = {
	  createElement: createElement,
	  createElementWithModules: createElementWithModules
	};

	var Snabbdom = /*#__PURE__*/Object.freeze({
		__proto__: null,
		createElement: createElement,
		createElementWithModules: createElementWithModules,
		default: index
	});

	/* TODO: 사용자의 추가적인 DOM 생성없이 사용할 수 있도록 utility component로 제공 추가
	=> Gn.alert , Gn.confirm */
	class Alert extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            close: () => {
	                this.$event(this, 'onClose');
	                this._hidden.out();
	            },
	            confirm: () => {
	                this._hidden.out();
	            },
	            out: () => {
	                fadeout(this.$el, this.$options.duration);
	                // eslint-disable-next-line @typescript-eslint/no-this-alias
	                const closerThis = this;
	                const closeTimer = setTimeout(function () {
	                    closerThis.$destroy(closerThis, true);
	                    clearTimeout(closeTimer);
	                }, this.$options.duration);
	            }
	        };
	        this.config = {
	            textSets: {
	                alertText: this.$selector ? this.$selector.textContent : '', // 기본 값은 선택된 엘리먼트의 textContent
	                confirm: '확인',
	                cancel: '취소'
	            },
	            width: 400,
	            hasConfirm: false,
	            hasCancel: false,
	            hasClose: true,
	            delegates: {
	                btnConfirm: '.gn-alert-confirm'
	            },
	            currentActived: undefined
	        };
	        this.events = {
	            // # lifecycle에 따른 events (e.g created, mounted, destroyed...)
	            // # state change에 따른 events (e.g onchange, onkeyup...)
	            onConfirm: {
	                // 1. 이벤트 전달자와 이벤트를 정의해 EventManager에 추가하도록 함
	                name: 'click',
	                delegate: () => {
	                    return this.config.delegates.btnConfirm;
	                }
	            },
	            onClose: true, // 2. 이벤트만 정의 후, user options에서 전달받은 핸들러 등록 후 close()메서드 수행 시 트리거 되도록 함
	            afterClose: true // 사용할 수 있지만 options으로 전달되지 않은 경우는 제거됨
	        };
	        this.methods = {
	            close() {
	                this._hidden.close();
	            }
	        };
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {
	            position: 'fixed',
	            top: '50%',
	            left: '50%',
	            transform: 'translate(-50%, -50%)',
	            zIndex: '999'
	        };
	        if (config.width) {
	            /* inline style이 필요한 경우는 이렇게 사용 */
	            styles.width = getUnit('width', config.width);
	        }
	        return (createElement("div", { id: this._uid, className: 'gn-alert' + (config.color ? ' is-' + config.color : '') /* 색상 클래스 추가 */ + (config.size ? ' is-' + config.size : ''), style: styles },
	            createElement("p", { innerHTML: config.textSets.alertText }),
	            config.hasClose && (createElement("span", { className: "gn-icon is-close", "on-click": this._hidden.close },
	                createElement("i", { className: "fas fa-times" }))),
	            (config.hasConfirm || config.hasCancel) /* 확인/취소 옵션 확인 */ && (createElement("div", { className: 'alert-controls' + (getNumber(config.width) > 400 ? ' has-text-right' : '') },
	                config.hasConfirm && (createElement("button", { type: "button", className: 'gn-button gn-alert-confirm' + (config.color ? ' is-outline is-trans' : ''), "on-click": this._hidden.confirm }, config.textSets.confirm)),
	                ' ' /* TODO: 간격이 없어 inline-block의 간격이 발생하지 않음 */,
	                config.hasCancel && (createElement("button", { type: "button", className: "gn-button is-cancel", "on-click": this._hidden.close }, config.textSets.cancel))))));
	    }
	    beforeMount() {
	        if (!this.$selector) {
	            // dimmed-layer 추가
	            append(document.body, $('<div class="gn-dimmed-layer"></div>'));
	            style(document.body, 'overflow', 'hidden');
	            append(document.body, $(`<div id="${this._uid}"></div>`));
	            this.$selector = $(`#${this._uid}`);
	        }
	    }
	    completed() {
	        if (this.$options.hasConfirm) {
	            find('.gn-alert-confirm', this.$el).focus();
	        }
	    }
	    destroyed() {
	        removeStyle(document.body, 'overflow');
	        remove($('.gn-dimmed-layer'));
	    }
	}

	class Button extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            click: (e) => {
	                !this.$options.disabled && this.$event(this, 'onClick', e);
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            textSets: {
	                buttonText: this.$selector ? this.$selector.textContent : ''
	            },
	            name: this.$selector.name
	        };
	        this.events = {
	            onClick: true
	        };
	        this.methods = {
	            click() {
	                this._hidden.click();
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        return (createElement("button", { id: this._uid, type: "button", className: 'gn-button' + (config.color ? ' is-' + config.color : '') + (config.size ? ' is-' + config.size : '') + (config.disabled ? ' is-disabled' : ''), "on-click": this._hidden.click, style: styleToVNodeStyle(this.$selector.style.cssText) },
	            config.icon && (createElement("span", { className: 'gn-icon is-' + (config.size === 'large' ? 'medium' : config.size === 'medium' ? 'normal' : 'small') },
	                createElement("i", { className: 'fas fa-' + config.icon }),
	                ' ')),
	            config.textSets.buttonText));
	    }
	}

	class Dropdown extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            change: (option) => {
	                var _a;
	                if (isEmpty(option)) {
	                    option = {
	                        value: '',
	                        text: ''
	                    };
	                }
	                (_a = this.$options.onChange) === null || _a === void 0 ? void 0 : _a.call(this, option.value, option.text, this.$options.value); // user onChange event
	            },
	            toggle: () => {
	                if (this.$options.disabled) {
	                    return;
	                }
	                const scrollParent = last(scrollParents(this.$el)) || document.body;
	                const bodyHeight = scrollParent.offsetHeight;
	                const bodyWidth = scrollParent.offsetWidth;
	                const { top, bottom, left } = position(this.$el, scrollParent);
	                const scrollHeight = this._hidden.getScrollHeight(this.$options.scrollHeight);
	                if (isNumber(bodyHeight) && isNumber(top) && isNumber(scrollHeight) && bodyHeight - top > scrollHeight && bodyHeight - bottom < scrollHeight) {
	                    addClass(this.$el, 'is-top');
	                }
	                if (isNumber(bodyWidth) && isNumber(left) && bodyWidth - left < 300) {
	                    addClass(this.$el, 'is-right');
	                }
	                if (isNumber(bodyWidth) && isNumber(bottom) && isNumber(scrollHeight) && bodyHeight - bottom < scrollHeight) {
	                    css(find('.dropdown-items', this.$el), 'max-height', bodyHeight - bottom - 2);
	                }
	                !this.$options.disabled && toggleClass(this.$el, 'is-open');
	            },
	            getScrollHeight: (customHeight) => {
	                if (!customHeight) {
	                    return 'auto';
	                }
	                return isNumber(customHeight) ? customHeight : customHeight.includes('px') ? (isNumeric(customHeight.replace('px', '')) ? Number(customHeight.replace('px', '')) : 'auto') : 'auto';
	            },
	            open: () => {
	                addClass(this.$el, 'is-open');
	            },
	            close: () => {
	                this.$options.hasSearch && this._hidden.resetSearch();
	                removeClass(this.$el, 'is-open');
	            },
	            blur: (e) => {
	                // focus가 옮겨간 객체가 해당 컴포넌트가 아닌경우 close 수행
	                if (!e.relatedTarget || (!parents(e.relatedTarget, `#${this._uid}`).length && attr(e.relatedTarget, 'id') !== this._uid)) {
	                    this._hidden.close();
	                }
	            },
	            select: (option, e) => {
	                if (this.$options.disabled || this.$options.readonly) {
	                    return;
	                }
	                if (this.$options.multiple) {
	                    // 대상 옵션 확인
	                    const target = e instanceof Event ? $(e.currentTarget) : find(`[data-value=${option.value}]`, this.$el);
	                    e instanceof Event && e.stopPropagation();
	                    // toggle 처리
	                    if (hasClass(target, 'is-active')) {
	                        removeClass(target, 'is-active');
	                        find('input[type=checkbox]', target).checked = false;
	                    }
	                    else {
	                        addClass(target, 'is-active');
	                        find('input[type=checkbox]', target).checked = true;
	                    }
	                    const selected = findAll('.dropdown-item.is-active', this.$el).map((item) => data(item, 'data-value'));
	                    this.$options.value = this.$options.data.filter((opt) => selected.includes(opt.value));
	                    // text 표시
	                    const selectText = this.$options.value.map((v) => v.text).join(',');
	                    text$1(find('.dropdown-text', this.$el), selectText.length ? escapeEntity(selectText) : this.$options.textSets && this.$options.textSets.selectText ? this.$options.textSets.selectText : '');
	                    this._hidden.change(option);
	                }
	                else {
	                    // 선택된 값 표시
	                    removeClass(findAll('.is-active', this.$el), 'is-active');
	                    if (isEmpty(option)) {
	                        find('select', this.$el).value = '';
	                        this._hidden.change();
	                        return;
	                    }
	                    if (e instanceof Event) {
	                        e.stopPropagation();
	                        addClass($(e.currentTarget), 'is-active');
	                    }
	                    else {
	                        addClass(find(`[data-value=${option.value}]`, this.$el), 'is-active');
	                    }
	                    // text 표시
	                    const selectText = find('.dropdown-text', this.$el);
	                    text$1(selectText, escapeEntity(option.text));
	                    // select 선택값 변경
	                    find('select', this.$el).value = option.value;
	                    this.$options.value = option;
	                    this._hidden.change(option);
	                    this._hidden.close();
	                }
	            },
	            setValue: (value) => {
	                if (this.$options.multiple) {
	                    // 기존 선택을 모두 해제한 후
	                    removeClass(findAll('.is-active', this.$el), 'is-active');
	                    findAll('input[type=checkbox]', this.$el).forEach((check) => {
	                        check.checked = false;
	                    });
	                    value.split(',').forEach((v) => {
	                        this._hidden.select(this.$options.flatData.find((item) => {
	                            return item.value === v;
	                        }));
	                    });
	                    // 전달 받은 값 설정
	                }
	                else {
	                    this._hidden.select(this.$options.flatData.find((item) => {
	                        return item.value === value;
	                    }));
	                }
	            },
	            getValue: () => {
	                return this.$options.multiple
	                    ? findAll('.dropdown-item.is-active', this.$el)
	                        .map((item) => data(item, 'data-value'))
	                        .join(',')
	                    : find('select', this.$el).value;
	            },
	            changeData: (data) => {
	                this.$options.data = data;
	                this._hidden.flatData();
	                this.$options.hasSearch && this._hidden.resetSearch();
	                this.$template.reRender(find('.dropdown-text', this.$el), this._hidden.renderLabel());
	                this.$template.reRender(find('.dropdown-items > div:not(.dropdown-search)', this.$el), this._hidden.renderSub(data));
	            },
	            search: (e) => {
	                clearTimeout(this.$options.timer);
	                this.$options.timer = setTimeout(() => {
	                    this._hidden.filter($(e.target).value);
	                }, 300);
	            },
	            resetSearch: () => {
	                val(find('.search-input', this.$el), '');
	                css(findAll('.dropdown-item', this.$el), 'display', 'block');
	            },
	            filter: (q) => {
	                css(findAll('.dropdown-item', this.$el), 'display', 'block');
	                if (q === '') {
	                    return;
	                }
	                findAll('.dropdown-item', this.$el).forEach((option) => {
	                    if (!includes(data(option, 'value').toUpperCase(), q.toUpperCase()) && !includes(text$1(find('.dropdown-text', option)).toUpperCase(), q.toUpperCase())) {
	                        css(option, 'display', 'none');
	                    }
	                });
	            },
	            renderLabel: () => {
	                const _labelText = this.$options.value
	                    ? isArray$1(this.$options.value)
	                        ? this.$options.value.map((v) => v.text).join(',')
	                        : this.$options.value.text
	                    : this.$options.textSets && this.$options.textSets.selectText
	                        ? this.$options.textSets.selectText
	                        : this.$options.flatData.length
	                            ? this.$options.flatData[0].text
	                            : '';
	                return createElement("span", { className: "dropdown-text" }, escapeEntity(_labelText));
	            },
	            renderSub: (data) => {
	                return createElement("div", null, isArray$1(data) && data.length && isArray$1(data[0]) ? data.map((items) => this._hidden.renderOpts(items)) : this._hidden.renderOpts(data));
	            },
	            renderOpts: (items) => {
	                if (this.$options.type === 'opened' && !items.length) {
	                    return createElement("div", { className: 'dropdown-nodata' }, this.$options.textSets.noData);
	                }
	                return (createElement("ul", null, items.map((option, index) => (createElement("li", { className: 'dropdown-item' +
	                        (option.text ? '' : ' is-unselectable') +
	                        (this.$options.value &&
	                            (isArray$1(this.$options.value) ? this.$options.value.find((v) => v.value === option.value) : option.value === this.$options.value.value)
	                            ? ' is-active'
	                            : ''), "on-click": isArray$1(option.value) || !option.text ? null : this._hidden.select.bind(this, option), "data-value": isArray$1(option.value) ? '' : option.value },
	                    createElement("span", { className: "dropdown-text", innerHTML: option.html ? option.html : '' },
	                        option.html ? ('') : this.$options.multiple ? (createElement("div", { className: "gn-checks is-small is-no-padding" },
	                            createElement("input", { type: "checkbox", id: 'chk_' + index, defaultChecked: this.$options.value &&
	                                    (isArray$1(this.$options.value) ? this.$options.value.find((v) => v.value === option.value) : option.value === this.$options.value.value), disabled: this.$options.disabled }),
	                            createElement("label", { for: 'chk_' + index }, escapeEntity(option.text)))) : option.icon ? (createElement("span", null,
	                            createElement("span", { className: 'gn-icon is-left' + (this.$options.size ? ' is-' + this.$options.size : '') },
	                                createElement("i", { className: `fa fa-${option.icon}` })),
	                            escapeEntity(option.text))) : (escapeEntity(option.text)),
	                        isArray$1(option.value) && (createElement("span", { className: "gn-icon is-small submenu-icon" },
	                            createElement("i", { className: "fas fa-angle-right" })))),
	                    isArray$1(option.value) && this._hidden.renderSub(option.value))))));
	            },
	            flatData: () => {
	                // data 검색 편의성을 위해 depth를 없앤 flatdata 생성
	                this.$options.flatData = [];
	                this.$options.data.forEach((option) => {
	                    if (isArray$1(option)) {
	                        option.forEach((option) => {
	                            if (isArray$1(option.value)) {
	                                this.$options.flatData = this.$options.flatData.concat(option.value);
	                            }
	                            else {
	                                this.$options.flatData.push(option);
	                            }
	                        });
	                    }
	                    else {
	                        if (isArray$1(option.value)) {
	                            this.$options.flatData = this.$options.flatData.concat(option.value);
	                        }
	                        else {
	                            this.$options.flatData.push(option);
	                        }
	                    }
	                });
	                if (this.$options.value) {
	                    if (this.$options.multiple) {
	                        const values = this.$options.value.split(',');
	                        this.$options.value = this.$options.flatData.filter((opt) => values.includes(opt.value) && opt.text);
	                    }
	                    else {
	                        this.$options.value = this.$options.flatData.find((opt) => opt.value === this.$options.value && opt.text);
	                    }
	                }
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                removeClass(this.$el, 'is-open');
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            name: this.$selector.name || this._uid,
	            data: (() => {
	                return findAll('option', this.$selector).map((option) => {
	                    return { value: option.value, text: option.textContent };
	                });
	            })(),
	            textSets: {
	                noData: 'No records available.'
	            },
	            hasSearch: false,
	            scrollHeight: 0,
	            timer: 0,
	            disabled: false,
	            multiple: false
	        };
	        this.events = {
	            onChange: true
	        };
	        this.methods = {
	            setValue(value) {
	                this._hidden.setValue(value);
	            },
	            getValue() {
	                return this._hidden.getValue();
	            },
	            setData(data) {
	                this._hidden.changeData(data);
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        var _a, _b;
	        const styles = {};
	        if (config.width) {
	            styles.width = getUnit('width', config.width);
	        }
	        if (config.type === 'opened' && config.data.length) {
	            styles.height = config.scrollHeight ? getUnit('height', config.scrollHeight) : 'auto';
	            styles['max-height'] = config.maxHeight ? getUnit('height', config.maxHeight) : 'auto';
	        }
	        const renderOption = (item) => {
	            return createElement("option", { value: item.value }, item.text);
	        };
	        return (createElement("div", { id: this._uid, className: 'gn-dropdown' +
	                (config.color ? ' is-' + config.color : '') +
	                (config.size ? ' is-' + config.size : '') +
	                (config.type ? ' is-' + config.type : '') +
	                (config.className ? ' ' + config.className : '') +
	                (config.disabled ? ' is-disabled' : '') +
	                (config.state ? ' is-' + config.state : ''), style: styles, "on-blur": this._hidden.blur, tabIndex: "0" },
	            createElement("div", { className: "dropdown-label", "on-click": this._hidden.toggle },
	                this._hidden.renderLabel(),
	                createElement("span", { className: "gn-icon is-small dropdown-icon" },
	                    createElement("i", { className: "fas fa-angle-down" }))),
	            createElement("div", { className: "dropdown-items", style: config.scrollHeight ? { maxHeight: getUnit('height', config.scrollHeight), overflowY: 'auto' } : {} },
	                config.hasSearch && (createElement("div", { className: "dropdown-search" },
	                    createElement("div", { className: "gn-control has-icon-right is-full" },
	                        createElement("span", { className: "gn-icon is-right" },
	                            createElement("i", { className: "fas fa-search" })),
	                        createElement("input", { type: "text", className: "gn-input is-full search-input", placeholder: (_b = (_a = this.$options.textSets) === null || _a === void 0 ? void 0 : _a.searchText) !== null && _b !== void 0 ? _b : GN_CONSTANT.SEARCH_ITEM, "on-keyup": this._hidden.search, "on-blur": this._hidden.blur })))),
	                this._hidden.renderSub(config.data)),
	            createElement("select", { name: config.name, multiple: this.$options.multiple },
	                this.$options.textSets && this.$options.textSets.selectText ? createElement("option", { value: "" }) : '',
	                config.flatData.map((option) => renderOption(option)))));
	    }
	    beforeMount() {
	        if (this.$options.multiple && this.$options.type !== 'opened' && !this.$options.textSets.selectText) {
	            // 다중선택이 가능한 경우, '선택하세요' 기본 값
	            this.$options.textSets.selectText = '선택하세요';
	        }
	        this._hidden.flatData();
	        if (!this.$options.value && !this.$options.multiple && (!this.$options.textSets || !this.$options.textSets.selectText)) {
	            this.$options.value = this.$options.flatData[0];
	        }
	    }
	    completed() {
	        function setValue(value, options) {
	            const opt = options.find(opt => opt.value === value.value);
	            opt && attr(opt, 'selected', 'selected');
	        }
	        if (this.$options.value) {
	            const options = findAll('select option', this.$el);
	            if (isArray$1(this.$options.value)) {
	                this.$options.value.forEach((value) => setValue(value, options));
	            }
	            else {
	                setValue(this.$options.value, options);
	            }
	        }
	    }
	}

	class Time extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            update: () => {
	                // 시간 셋팅
	                val(this.$options.delegates.hour, this.$options.parseTime.hour);
	                val(this.$options.delegates.minute, this.$options.parseTime.minute);
	                this.$options.delegates.second && val(this.$options.delegates.second, this.$options.parseTime.second);
	            },
	            timeSet: (type) => {
	                if (this.$options.disabled || this.$options.readonly) {
	                    return;
	                }
	                if (type === 'min') {
	                    this.$options.value = tempDateByTime('00:00:00', dateFormat(this.$options.value, this.$options.dateFormat));
	                }
	                else {
	                    this.$options.value = tempDateByTime('23:59:59', dateFormat(this.$options.value, this.$options.dateFormat));
	                }
	                this._hidden.setParseTime();
	                this._hidden.update();
	                this.$options.onChange && this.$options.onChange.call(this, this._hidden.getTime()); // user onChange event
	            },
	            timeChange: (e) => {
	                const _target = $(e.target);
	                // 숫자가 아니면
	                !isNumeric(val(_target)) && e.preventDefault();
	                // 범위를 넘어가면 변경 전 값으로 업데이트
	                if (toInteger(val(_target)) > toInteger(attr(_target, 'max')) || toInteger(val(_target)) < 0) {
	                    val(_target, zf(this.$options.parseTime[data(_target, 'field')], 2));
	                    e.preventDefault();
	                }
	                // 두자리 숫자형태로 변경
	                val(_target, zf(val(_target), 2));
	                this.$options.parseTime[data(_target, 'field')] = val(_target) || '00';
	                this.$options.value = tempDateByTime(this.$options.parseTime.hour + ':' + this.$options.parseTime.minute + ':' + this.$options.parseTime.second, dateFormat(this.$options.value, 'yyyy-MM-dd'));
	                this.$options.onChange && this.$options.onChange.call(this, this._hidden.getTime()); // user onChange event
	            },
	            setParseTime: () => {
	                this.$options.parseTime = {
	                    hour: dateFormat(this.$options.value, 'hh'),
	                    minute: dateFormat(this.$options.value, 'mm'),
	                    second: this.$options.timeFormat.indexOf('ss') > -1 ? dateFormat(this.$options.value, 'ss') : '00'
	                };
	            },
	            getTime: () => {
	                return dateFormat(this.$options.value, this.$options.timeFormat);
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                attr(findAll('input', this.$el), 'disabled', true);
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeAttr(findAll('input', this.$el), 'disabled');
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            dateFormat: 'yyyy-MM-DD',
	            timeFormat: 'hh:mm:ss',
	            value: new Date(),
	            delegates: {
	                hour: '.time-hour',
	                minute: '.time-minute',
	                second: '.time-second'
	            },
	            hasControls: true
	        };
	        this.events = {
	            onChange: true
	        };
	        this.methods = {
	            setTime(time) {
	                this.$options.value = !isDate(time) ? tempDateByTime(this.$options.value) : new Date(time);
	                this._hidden.setParseTime();
	                this._hidden.update();
	            },
	            getTime() {
	                return this._hidden.getTime();
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        return (createElement("div", { className: 'gn-time' + (config.disabled ? ' is-disabled' : '') + (config.readonly ? ' is-readonly' : ''), id: this._uid },
	            createElement("div", { className: "picker-controls picker-times" },
	                createElement("span", { className: "gn-icon" },
	                    createElement("i", { className: "fa fa-clock" })),
	                createElement("div", { className: "picker-time" },
	                    createElement("input", { className: "gn-input is-medium time-hour", "data-field": "hour", type: "number", min: "0", max: "23", maxLength: "2", "on-change": (e) => {
	                            this._hidden.timeChange.call(this, e);
	                        }, value: config.parseTime.hour, disabled: config.disabled, readOnly: config.readonly })),
	                createElement("div", { className: "picker-time" },
	                    createElement("input", { className: "gn-input is-medium time-minute", "data-field": "minute", type: "number", min: "0", max: "59", maxLength: "2", "on-change": (e) => {
	                            this._hidden.timeChange.call(this, e);
	                        }, value: config.parseTime.minute, disabled: config.disabled, readOnly: config.readonly })),
	                config.timeFormat.indexOf('ss') > -1 && (createElement("div", { className: "picker-time" },
	                    createElement("input", { className: "gn-input is-medium time-second", "data-field": "second", type: "number", min: "0", max: "59", maxLength: "2", "on-change": (e) => {
	                            this._hidden.timeChange.call(this, e);
	                        }, value: config.parseTime.second, disabled: config.disabled, readOnly: config.readonly }))),
	                config.hasControls && (createElement("div", { className: "time-setter" },
	                    createElement("span", { className: "gn-icon is-tiny", "on-click": this._hidden.timeSet.bind(this, 'max') },
	                        createElement("i", { className: "fas fa-step-backward" })),
	                    createElement("span", { className: "gn-icon is-tiny", "on-click": this._hidden.timeSet.bind(this, 'min') },
	                        createElement("i", { className: "fas fa-step-forward" })))))));
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $render(config) { }
	    beforeMount() {
	        if (!this.$selector) {
	            append(document.body, $(`<div id="${this._uid}"></div>`));
	            this.$selector = $(`#${this._uid}`);
	        }
	        if (!isDate(this.$options.value)) {
	            this.$options.value = tempDateByTime(this.$options.value);
	        }
	        this._hidden.setParseTime();
	    }
	}

	class Calendar extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            show: (options) => {
	                if (options) {
	                    if (options.position) {
	                        css(this.$el, options.position);
	                    }
	                    if (options.dateType && this.$options.dateType !== options.dateType) {
	                        // dateType 이 바뀌면 시간선택 패널을 조정한다.
	                        this.$options.dateType = options.dateType;
	                        if (options.dateType === 'datetime') {
	                            removeClass($('.picker-time'), 'is-hidden');
	                            removeClass($('.picker-setter'), 'is-hidden');
	                        }
	                        else {
	                            addClass($('.picker-time'), 'is-hidden');
	                            addClass($('.picker-setter'), 'is-hidden');
	                        }
	                    }
	                    if (options.value) {
	                        this.$options.value = new Date(options.value);
	                    }
	                    else {
	                        this.$options.value = new Date();
	                    }
	                    this.$options.min = options.min || '';
	                    this.$options.max = options.max || '';
	                    this._hidden.setRange();
	                    this._hidden.setParseDate();
	                    this._hidden.update();
	                    this._hidden.updatePreview();
	                    this.$options.parent = options.parent || this.$options.parent;
	                }
	                addClass(this.$el, 'is-active');
	            },
	            hide: () => {
	                removeClass(this.$el, 'is-active');
	            },
	            setDays: () => {
	                const dayRange = dayOfMonth(this.$options.parseDate.year, this.$options.parseDate.month);
	                const firstDay = new Date(this.$options.parseDate.year, this.$options.parseDate.month - 1).getDay();
	                let daysList = Array(firstDay).fill('');
	                let minDay = 1, maxDay = dayRange;
	                daysList = daysList.concat(Array.from(Array(dayRange), (_, i) => i + 1 + ''));
	                if (daysList.length % 7) {
	                    daysList = daysList.concat(Array(7 - (daysList.length % 7)).fill(''));
	                }
	                if (this.$options.min) {
	                    if (this.$options.parseDate.year === this.$options.min.year && this.$options.parseDate.month === this.$options.min.month) {
	                        minDay = this.$options.min.day;
	                    }
	                    else if (this.$options.parseDate.year < this.$options.min.year || (this.$options.parseDate.year === this.$options.min.year && this.$options.parseDate.month < this.$options.min.month)) {
	                        minDay = dayRange + 1;
	                    }
	                }
	                if (this.$options.max) {
	                    if (this.$options.parseDate.year === this.$options.max.year && this.$options.parseDate.month === this.$options.max.month) {
	                        maxDay = this.$options.max.day;
	                    }
	                    else if (this.$options.parseDate.year > this.$options.max.year || (this.$options.parseDate.year === this.$options.max.year && this.$options.parseDate.month > this.$options.max.month)) {
	                        maxDay = 0;
	                    }
	                }
	                this._hidden.renderDays(daysList, minDay, maxDay);
	            },
	            renderDays: (days, min, max) => {
	                const newDates = (createElement("div", { className: "picker-date" }, days.map((day) => (createElement("div", { className: 'date-item' +
	                        (dateFormat(this.$options.today, 'dd') == day &&
	                            dateFormat(this.$options.today, 'yyyy') == this.$options.parseDate.year &&
	                            dateFormat(this.$options.today, 'SM') == this.$options.parseDate.month
	                            ? ' today'
	                            : '') +
	                        (dateFormat(this.$options.value, 'dd') == day &&
	                            dateFormat(this.$options.value, 'yyyy') == this.$options.parseDate.year &&
	                            dateFormat(this.$options.value, 'SM') == this.$options.parseDate.month
	                            ? ' selected'
	                            : '' + (!day.length || (toNumber(day) >= min && toNumber(day) <= max) ? '' : ' disabled')), "on-click": (e) => {
	                        day && toNumber(day) >= min && toNumber(day) <= max && this._hidden.onSelect.call(this, e);
	                    } }, day)))));
	                this.$template.reRender(find('.picker-date', this.$el), newDates);
	            },
	            update: () => {
	                this._hidden.updateDate();
	                this.$options.dateType === 'datetime' && this._hidden.updateTime();
	            },
	            updateDate: () => {
	                text$1(this.$options.delegates.year, this.$options.parseDate.year);
	                this.$options.delegates.month.setValue(this.$options.parseDate.month);
	                this._hidden.setDays();
	            },
	            updateTime: () => {
	                this._time.setTime(this.$options.value);
	            },
	            updatePreview: () => {
	                text$1(this.$options.delegates.preview, dateFormat(this.$options.value, this.$options.dateType === 'datetime' ? this.$options.dateFormat + ' ' + this.$options.timeFormat : this.$options.dateFormat));
	            },
	            timeChange: (time) => {
	                this.$options.value = tempDateByTime(time, dateFormat(this.$options.value, 'yyyy-MM-dd'));
	                this._hidden.setParseDate();
	                this._hidden.updatePreview();
	            },
	            onSelect: (e) => {
	                const target = $(e.target);
	                this.$options.parseDate.day = toInteger(text$1(target));
	                this.$options.value = new Date(objToDate(this.$options.parseDate));
	                removeClass(findAll('.date-item.selected', this.$el), 'selected');
	                addClass(target, 'selected');
	                if (this.$options.dateType === 'datetime') {
	                    this._hidden.updatePreview();
	                }
	                this.$options.dateType !== 'datetime' && isFunction(this.$options.onSelect) && this.$options.onSelect.call(this, dateFormat(this.$options.value, this.$options.dateFormat));
	            },
	            onConfirm: () => {
	                // type이 datetime인 경우 확인버튼 클릭
	                isFunction(this.$options.onSelect) && this.$options.onSelect.call(this, dateFormat(this.$options.value, this.$options.dateFormat + ' ' + this.$options.timeFormat));
	            },
	            setParseDate: () => {
	                this.$options.parseDate = {
	                    year: toInteger(dateFormat(this.$options.value, 'yyyy')),
	                    month: toInteger(dateFormat(this.$options.value, 'SM')),
	                    day: toInteger(dateFormat(this.$options.value, 'dd')),
	                    hour: dateFormat(this.$options.value, 'hh'),
	                    minute: dateFormat(this.$options.value, 'mm'),
	                    second: dateFormat(this.$options.value, 'ss')
	                };
	            },
	            setNow: () => {
	                this.$options.value = new Date();
	                this._hidden.setParseDate();
	                this._hidden.update();
	                this._hidden.updatePreview();
	                if (isFunction(this.$options.onSelect)) {
	                    this.$options.dateType !== 'datetime'
	                        ? this.$options.onSelect.call(this, dateFormat(this.$options.value, this.$options.dateFormat))
	                        : this.$options.onSelect.call(this, dateFormat(this.$options.value, this.$options.dateFormat + ' ' + this.$options.timeFormat));
	                }
	            },
	            setRange: () => {
	                this.$options.setNow = true;
	                if (this.$options.min) {
	                    const tmpMin = calcDate(new Date(), this.$options.min);
	                    if (tmpMin instanceof Date) {
	                        this.$options.min = {
	                            year: toInteger(dateFormat(tmpMin, 'yyyy')),
	                            month: toInteger(dateFormat(tmpMin, 'SM')),
	                            day: toInteger(dateFormat(tmpMin, 'dd'))
	                        };
	                        if (dateDiff(tmpMin, new Date()) < 0) {
	                            this.$options.setNow = false;
	                        }
	                    }
	                    else {
	                        this.$options.min = null;
	                    }
	                }
	                if (this.$options.max) {
	                    const tmpMax = calcDate(new Date(), this.$options.max);
	                    if (tmpMax instanceof Date) {
	                        this.$options.max = {
	                            year: toInteger(dateFormat(tmpMax, 'yyyy')),
	                            month: toInteger(dateFormat(tmpMax, 'SM')),
	                            day: toInteger(dateFormat(tmpMax, 'dd'))
	                        };
	                        if (dateDiff(tmpMax, new Date()) > 0) {
	                            this.$options.setNow = false;
	                        }
	                    }
	                    else {
	                        this.$options.max = null;
	                    }
	                }
	                this.$options.setNow ? removeAttr(this.$options.delegates.nowset, 'disabled') : attr(this.$options.delegates.nowset, 'disabled', 'disabled');
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            dateFormat: 'yyyy-MM-DD',
	            timeFormat: 'hh:mm:ss',
	            value: new Date(),
	            delegates: {
	                year: '.input-year',
	                preview: '.value-preview',
	                nowset: '.btn-setnow'
	            },
	            today: new Date(),
	            setNow: true,
	            dateType: 'date'
	        };
	        this.events = {
	            onSelect: true
	        };
	        this.methods = {
	            setDate(date) {
	                this.$options.value = new Date(date);
	                this._hidden.setParseDate();
	                this._hidden.update();
	            },
	            show(options) {
	                this._hidden.show(options);
	            },
	            hide() {
	                this._hidden.hide();
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        return (createElement("div", { className: 'gn-calendar' + (config.type === 'picker' ? ' is-picker' : ''), id: this._uid },
	            createElement("div", { className: "picker-controls" },
	                createElement("div", { className: "control-set gn-control is-small has-arrange" },
	                    createElement("button", { className: "btn-year-decrease" }),
	                    createElement("div", { className: "control-input" },
	                        createElement("span", { className: "gn-plain is-medium has-text-center input-year" }, config.parseDate.year)),
	                    createElement("button", { className: "btn-year-increase" })),
	                createElement("div", { className: "control-set gn-control is-small has-arrange" },
	                    createElement("button", { className: "btn-month-decrease" }),
	                    createElement("div", { className: "control-input" },
	                        createElement("div", { className: "is-picker input-month" })),
	                    createElement("button", { className: "btn-month-increase" }))),
	            createElement("div", { className: "picker-panel" },
	                createElement("div", { className: "picker-days" }, dateData().map((date) => (createElement("div", { className: "day-item" }, date)))),
	                createElement("div", { className: "picker-date" })),
	            createElement("div", { className: 'picker-controls picker-time' + (config.dateType === 'datetime' ? '' : ' is-hidden') },
	                createElement("div", { className: "timePicker" })),
	            createElement("div", { className: 'picker-controls picker-setter' + (config.dateType === 'datetime' ? '' : ' is-hidden') },
	                createElement("button", { className: "gn-button is-mono is-small btn-setnow", disabled: config.setNow ? undefined : 'disabled', "on-click": this._hidden.setNow }, "NOW"),
	                createElement("span", { className: "gn-plain value-preview" }, dateFormat(config.value, config.dateFormat + ' ' + config.timeFormat)),
	                createElement("button", { className: "gn-button is-confirm is-normal", "on-click": this._hidden.onConfirm }, "OK"))));
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $render(config) {
	        this.$options.delegates.month = new Dropdown('dropdown', find('.input-month', this.$el), {
	            data: monthData(),
	            value: this.$options.parseDate.month,
	            width: '50px',
	            size: 'medium',
	            scrollHeight: '210px',
	            onChange: (val) => {
	                this.$options.parseDate.month = val;
	                this._hidden.setDays();
	            }
	        });
	        new Button('button', find('.btn-year-decrease', this.$el), {
	            size: 'small',
	            color: 'invert',
	            icon: 'angle-left',
	            onClick: () => {
	                --this.$options.parseDate.year;
	                this._hidden.update();
	            }
	        });
	        new Button('button', find('.btn-year-increase', this.$el), {
	            size: 'small',
	            color: 'invert',
	            icon: 'angle-right',
	            onClick: () => {
	                ++this.$options.parseDate.year;
	                this._hidden.update();
	            }
	        });
	        new Button('button', find('.btn-month-decrease', this.$el), {
	            size: 'small',
	            color: 'invert',
	            icon: 'angle-left',
	            onClick: () => {
	                if (this.$options.parseDate.month < 2) {
	                    this.$options.parseDate.month = 12;
	                }
	                else {
	                    --this.$options.parseDate.month;
	                }
	                this._hidden.update();
	            }
	        });
	        new Button('button', find('.btn-month-increase', this.$el), {
	            size: 'small',
	            color: 'invert',
	            icon: 'angle-right',
	            onClick: () => {
	                if (this.$options.parseDate.month > 11) {
	                    this.$options.parseDate.month = 1;
	                }
	                else {
	                    ++this.$options.parseDate.month;
	                }
	                this._hidden.update();
	            }
	        });
	        this._time = new Time('time', find('.timePicker', this.$el), {
	            value: this.$options.value ? dateFormat(this.$options.value, 'hh:mm:ss') : '',
	            onChange: (time) => {
	                this._hidden.timeChange(time);
	            }
	        });
	        this._hidden.setDays();
	    }
	    beforeMount() {
	        if (!this.$selector) {
	            append(document.body, $(`<div id="${this._uid}"></div>`));
	            this.$selector = $(`#${this._uid}`);
	        }
	        this._hidden.setRange();
	        this.$options.value = new Date(this.$options.value);
	        this._hidden.setParseDate();
	    }
	}

	var apexcharts_common = {exports: {}};

	/*!
	 * ApexCharts v3.45.0
	 * (c) 2018-2023 ApexCharts
	 * Released under the MIT License.
	 */

	(function (module, exports) {
		/*! svg.filter.js - v2.0.2 - 2016-02-24
		* https://github.com/wout/svg.filter.js
		* Copyright (c) 2016 Wout Fierens; Licensed MIT */
		function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(t,e){return this.add(t,e),!t.attr("in")&&this.autoSetIn&&t.attr("in",this.source),t.attr("result")||t.attr("result",t),t},blend:function(t,e,i){return this.put(new SVG.BlendEffect(t,e,i))},colorMatrix:function(t,e){return this.put(new SVG.ColorMatrixEffect(t,e))},convolveMatrix:function(t){return this.put(new SVG.ConvolveMatrixEffect(t))},componentTransfer:function(t){return this.put(new SVG.ComponentTransferEffect(t))},composite:function(t,e,i){return this.put(new SVG.CompositeEffect(t,e,i))},flood:function(t,e){return this.put(new SVG.FloodEffect(t,e))},offset:function(t,e){return this.put(new SVG.OffsetEffect(t,e))},image:function(t){return this.put(new SVG.ImageEffect(t))},merge:function(){var t=[void 0];for(var e in arguments)t.push(arguments[e]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,t)))},gaussianBlur:function(t,e){return this.put(new SVG.GaussianBlurEffect(t,e))},morphology:function(t,e){return this.put(new SVG.MorphologyEffect(t,e))},diffuseLighting:function(t,e,i){return this.put(new SVG.DiffuseLightingEffect(t,e,i))},displacementMap:function(t,e,i,a,s){return this.put(new SVG.DisplacementMapEffect(t,e,i,a,s))},specularLighting:function(t,e,i,a){return this.put(new SVG.SpecularLightingEffect(t,e,i,a))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(t,e,i,a,s){return this.put(new SVG.TurbulenceEffect(t,e,i,a,s))},toString:function(){return "url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(t){var e=this.put(new SVG.Filter);return "function"==typeof t&&t.call(e,e),e}}),SVG.extend(SVG.Container,{filter:function(t){return this.defs().filter(t)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(t){return this.filterer=t instanceof SVG.Element?t:this.doc().filter(t),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(t){return this.filterer&&!0===t&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this);},inherit:SVG.Element,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this);},inherit:SVG.Parent,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}});var t={blend:function(t,e){return this.parent()&&this.parent().blend(this,t,e)},colorMatrix:function(t,e){return this.parent()&&this.parent().colorMatrix(t,e).in(this)},convolveMatrix:function(t){return this.parent()&&this.parent().convolveMatrix(t).in(this)},componentTransfer:function(t){return this.parent()&&this.parent().componentTransfer(t).in(this)},composite:function(t,e){return this.parent()&&this.parent().composite(this,t,e)},flood:function(t,e){return this.parent()&&this.parent().flood(t,e)},offset:function(t,e){return this.parent()&&this.parent().offset(t,e).in(this)},image:function(t){return this.parent()&&this.parent().image(t)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(t,e){return this.parent()&&this.parent().gaussianBlur(t,e).in(this)},morphology:function(t,e){return this.parent()&&this.parent().morphology(t,e).in(this)},diffuseLighting:function(t,e,i){return this.parent()&&this.parent().diffuseLighting(t,e,i).in(this)},displacementMap:function(t,e,i,a){return this.parent()&&this.parent().displacementMap(this,t,e,i,a)},specularLighting:function(t,e,i,a){return this.parent()&&this.parent().specularLighting(t,e,i,a).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(t,e,i,a,s){return this.parent()&&this.parent().turbulence(t,e,i,a,s).in(this)}};SVG.extend(SVG.Effect,t),SVG.extend(SVG.ParentEffect,t),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this);},inherit:SVG.Element,extend:{in:function(t){this.attr("in",t);}}});var e={blend:function(t,e,i){this.attr({in:t,in2:e,mode:i||"normal"});},colorMatrix:function(t,e){"matrix"==t&&(e=s(e)),this.attr({type:t,values:void 0===e?null:e});},convolveMatrix:function(t){t=s(t),this.attr({order:Math.sqrt(t.split(" ").length),kernelMatrix:t});},composite:function(t,e,i){this.attr({in:t,in2:e,operator:i});},flood:function(t,e){this.attr("flood-color",t),null!=e&&this.attr("flood-opacity",e);},offset:function(t,e){this.attr({dx:t,dy:e});},image:function(t){this.attr("href",t,SVG.xlink);},displacementMap:function(t,e,i,a,s){this.attr({in:t,in2:e,scale:i,xChannelSelector:a,yChannelSelector:s});},gaussianBlur:function(t,e){null!=t||null!=e?this.attr("stdDeviation",function(t){if(!Array.isArray(t))return t;for(var e=0,i=t.length,a=[];e<i;e++)a.push(t[e]);return a.join(" ")}(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0");},morphology:function(t,e){this.attr({operator:t,radius:e});},tile:function(){},turbulence:function(t,e,i,a,s){this.attr({numOctaves:e,seed:i,stitchTiles:a,baseFrequency:t,type:s});}},i={merge:function(){var t;if(arguments[0]instanceof SVG.Set){var e=this;arguments[0].each((function(t){this instanceof SVG.MergeNode?e.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&e.put(new SVG.MergeNode(this));}));}else {t=Array.isArray(arguments[0])?arguments[0]:arguments;for(var i=0;i<t.length;i++)t[i]instanceof SVG.MergeNode?this.put(t[i]):this.put(new SVG.MergeNode(t[i]));}},componentTransfer:function(t){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(t){this[t]=new(SVG["Func"+t.toUpperCase()])("identity"),this.rgb.add(this[t]),this.node.appendChild(this[t].node);}.bind(this)),t)for(var e in t.rgb&&(["r","g","b"].forEach(function(e){this[e].attr(t.rgb);}.bind(this)),delete t.rgb),t)this[e].attr(t[e]);},diffuseLighting:function(t,e,i){this.attr({surfaceScale:t,diffuseConstant:e,kernelUnitLength:i});},specularLighting:function(t,e,i,a){this.attr({surfaceScale:t,diffuseConstant:e,specularExponent:i,kernelUnitLength:a});}},a={distantLight:function(t,e){this.attr({azimuth:t,elevation:e});},pointLight:function(t,e,i){this.attr({x:t,y:e,z:i});},spotLight:function(t,e,i,a,s,r){this.attr({x:t,y:e,z:i,pointsAtX:a,pointsAtY:s,pointsAtZ:r});},mergeNode:function(t){this.attr("in",t);}};function s(t){return Array.isArray(t)&&(t=new SVG.Array(t)),t.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function r(){var t=function(){};for(var e in "function"==typeof arguments[arguments.length-1]&&(t=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var i in arguments[e])t(arguments[e][i],i,arguments[e]);}["r","g","b","a"].forEach((function(t){a["Func"+t.toUpperCase()]=function(t){switch(this.attr("type",t),t){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2]);}};})),r(e,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out");},inherit:SVG.Effect,extend:{}});})),r(i,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out");},inherit:SVG.ParentEffect,extend:{}});})),r(a,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments);},inherit:SVG.ChildEffect,extend:{}});})),SVG.extend(SVG.MergeEffect,{in:function(t){return t instanceof SVG.MergeNode?this.add(t,0):this.add(new SVG.MergeNode(t),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",t)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]};}.call(void 0),function(){function t(t,s,r,o,n,l,h){for(var c=t.slice(s,r||h),d=o.slice(n,l||h),g=0,u={pos:[0,0],start:[0,0]},p={pos:[0,0],start:[0,0]};;){if(c[g]=e.call(u,c[g]),d[g]=e.call(p,d[g]),c[g][0]!=d[g][0]||"M"==c[g][0]||"A"==c[g][0]&&(c[g][4]!=d[g][4]||c[g][5]!=d[g][5])?(Array.prototype.splice.apply(c,[g,1].concat(a.call(u,c[g]))),Array.prototype.splice.apply(d,[g,1].concat(a.call(p,d[g])))):(c[g]=i.call(u,c[g]),d[g]=i.call(p,d[g])),++g==c.length&&g==d.length)break;g==c.length&&c.push(["C",u.pos[0],u.pos[1],u.pos[0],u.pos[1],u.pos[0],u.pos[1]]),g==d.length&&d.push(["C",p.pos[0],p.pos[1],p.pos[0],p.pos[1],p.pos[0],p.pos[1]]);}return {start:c,dest:d}}function e(t){switch(t[0]){case"z":case"Z":t[0]="L",t[1]=this.start[0],t[2]=this.start[1];break;case"H":t[0]="L",t[2]=this.pos[1];break;case"V":t[0]="L",t[2]=t[1],t[1]=this.pos[0];break;case"T":t[0]="Q",t[3]=t[1],t[4]=t[2],t[1]=this.reflection[1],t[2]=this.reflection[0];break;case"S":t[0]="C",t[6]=t[4],t[5]=t[3],t[4]=t[2],t[3]=t[1],t[2]=this.reflection[1],t[1]=this.reflection[0];}return t}function i(t){var e=t.length;return this.pos=[t[e-2],t[e-1]],-1!="SCQT".indexOf(t[0])&&(this.reflection=[2*this.pos[0]-t[e-4],2*this.pos[1]-t[e-3]]),t}function a(t){var e=[t];switch(t[0]){case"M":return this.pos=this.start=[t[1],t[2]],e;case"L":t[5]=t[3]=t[1],t[6]=t[4]=t[2],t[1]=this.pos[0],t[2]=this.pos[1];break;case"Q":t[6]=t[4],t[5]=t[3],t[4]=1*t[4]/3+2*t[2]/3,t[3]=1*t[3]/3+2*t[1]/3,t[2]=1*this.pos[1]/3+2*t[2]/3,t[1]=1*this.pos[0]/3+2*t[1]/3;break;case"A":e=function(t,e){var i,a,s,r,o,n,l,h,c,d,g,u,p,f,x,b,v,m,y,w,k,A,S,C,L,P,I=Math.abs(e[1]),T=Math.abs(e[2]),M=e[3]%360,z=e[4],X=e[5],E=e[6],Y=e[7],F=new SVG.Point(t),R=new SVG.Point(E,Y),H=[];if(0===I||0===T||F.x===R.x&&F.y===R.y)return [["C",F.x,F.y,R.x,R.y,R.x,R.y]];i=new SVG.Point((F.x-R.x)/2,(F.y-R.y)/2).transform((new SVG.Matrix).rotate(M)),(a=i.x*i.x/(I*I)+i.y*i.y/(T*T))>1&&(I*=a=Math.sqrt(a),T*=a);s=(new SVG.Matrix).rotate(M).scale(1/I,1/T).rotate(-M),F=F.transform(s),R=R.transform(s),r=[R.x-F.x,R.y-F.y],n=r[0]*r[0]+r[1]*r[1],o=Math.sqrt(n),r[0]/=o,r[1]/=o,l=n<4?Math.sqrt(1-n/4):0,z===X&&(l*=-1);h=new SVG.Point((R.x+F.x)/2+l*-r[1],(R.y+F.y)/2+l*r[0]),c=new SVG.Point(F.x-h.x,F.y-h.y),d=new SVG.Point(R.x-h.x,R.y-h.y),g=Math.acos(c.x/Math.sqrt(c.x*c.x+c.y*c.y)),c.y<0&&(g*=-1);u=Math.acos(d.x/Math.sqrt(d.x*d.x+d.y*d.y)),d.y<0&&(u*=-1);X&&g>u&&(u+=2*Math.PI);!X&&g<u&&(u-=2*Math.PI);for(f=Math.ceil(2*Math.abs(g-u)/Math.PI),b=[],v=g,p=(u-g)/f,x=4*Math.tan(p/4)/3,k=0;k<=f;k++)y=Math.cos(v),m=Math.sin(v),w=new SVG.Point(h.x+y,h.y+m),b[k]=[new SVG.Point(w.x+x*m,w.y-x*y),w,new SVG.Point(w.x-x*m,w.y+x*y)],v+=p;for(b[0][0]=b[0][1].clone(),b[b.length-1][2]=b[b.length-1][1].clone(),s=(new SVG.Matrix).rotate(M).scale(I,T).rotate(-M),k=0,A=b.length;k<A;k++)b[k][0]=b[k][0].transform(s),b[k][1]=b[k][1].transform(s),b[k][2]=b[k][2].transform(s);for(k=1,A=b.length;k<A;k++)S=(w=b[k-1][2]).x,C=w.y,L=(w=b[k][0]).x,P=w.y,E=(w=b[k][1]).x,Y=w.y,H.push(["C",S,C,L,P,E,Y]);return H}(this.pos,t),t=e[0];}return t[0]="C",this.pos=[t[5],t[6]],this.reflection=[2*t[5]-t[3],2*t[6]-t[4]],e}function s(t,e){if(!1===e)return !1;for(var i=e,a=t.length;i<a;++i)if("M"==t[i][0])return i;return !1}SVG.extend(SVG.PathArray,{morph:function(e){for(var i=this.value,a=this.parse(e),r=0,o=0,n=!1,l=!1;!1!==r||!1!==o;){var h;n=s(i,!1!==r&&r+1),l=s(a,!1!==o&&o+1),!1===r&&(r=0==(h=new SVG.PathArray(c.start).bbox()).height||0==h.width?i.push(i[0])-1:i.push(["M",h.x+h.width/2,h.y+h.height/2])-1),!1===o&&(o=0==(h=new SVG.PathArray(c.dest).bbox()).height||0==h.width?a.push(a[0])-1:a.push(["M",h.x+h.width/2,h.y+h.height/2])-1);var c=t(i,r,n,a,o,l);i=i.slice(0,r).concat(c.start,!1===n?[]:i.slice(n)),a=a.slice(0,o).concat(c.dest,!1===l?[]:a.slice(l)),r=!1!==n&&r+c.start.length,o=!1!==l&&o+c.dest.length;}return this.value=i,this.destination=new SVG.PathArray,this.destination.value=a,this}});}(),
		/*! svg.draggable.js - v2.2.2 - 2019-01-08
		* https://github.com/svgdotjs/svg.draggable.js
		* Copyright (c) 2019 Wout Fierens; Licensed MIT */
		function(){function t(t){t.remember("_draggable",this),this.el=t;}t.prototype.init=function(t,e){var i=this;this.constraint=t,this.value=e,this.el.on("mousedown.drag",(function(t){i.start(t);})),this.el.on("touchstart.drag",(function(t){i.start(t);}));},t.prototype.transformPoint=function(t,e){var i=(t=t||window.event).changedTouches&&t.changedTouches[0]||t;return this.p.x=i.clientX-(e||0),this.p.y=i.clientY,this.p.matrixTransform(this.m)},t.prototype.getBBox=function(){var t=this.el.bbox();return this.el instanceof SVG.Nested&&(t=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(t.x=this.el.x(),t.y=this.el.y()),t},t.prototype.start=function(t){if("click"!=t.type&&"mousedown"!=t.type&&"mousemove"!=t.type||1==(t.which||t.buttons)){var e=this;if(this.el.fire("beforedrag",{event:t,handler:this}),!this.el.event().defaultPrevented){t.preventDefault(),t.stopPropagation(),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var i,a=this.getBBox();if(this.el instanceof SVG.Text)switch(i=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":i/=2;break;case"start":i=0;}this.startPoints={point:this.transformPoint(t,i),box:a,transform:this.el.transform()},SVG.on(window,"mousemove.drag",(function(t){e.drag(t);})),SVG.on(window,"touchmove.drag",(function(t){e.drag(t);})),SVG.on(window,"mouseup.drag",(function(t){e.end(t);})),SVG.on(window,"touchend.drag",(function(t){e.end(t);})),this.el.fire("dragstart",{event:t,p:this.startPoints.point,m:this.m,handler:this});}}},t.prototype.drag=function(t){var e=this.getBBox(),i=this.transformPoint(t),a=this.startPoints.box.x+i.x-this.startPoints.point.x,s=this.startPoints.box.y+i.y-this.startPoints.point.y,r=this.constraint,o=i.x-this.startPoints.point.x,n=i.y-this.startPoints.point.y;if(this.el.fire("dragmove",{event:t,p:i,m:this.m,handler:this}),this.el.event().defaultPrevented)return i;if("function"==typeof r){var l=r.call(this.el,a,s,this.m);"boolean"==typeof l&&(l={x:l,y:l}),!0===l.x?this.el.x(a):!1!==l.x&&this.el.x(l.x),!0===l.y?this.el.y(s):!1!==l.y&&this.el.y(l.y);}else "object"==typeof r&&(null!=r.minX&&a<r.minX?o=(a=r.minX)-this.startPoints.box.x:null!=r.maxX&&a>r.maxX-e.width&&(o=(a=r.maxX-e.width)-this.startPoints.box.x),null!=r.minY&&s<r.minY?n=(s=r.minY)-this.startPoints.box.y:null!=r.maxY&&s>r.maxY-e.height&&(n=(s=r.maxY-e.height)-this.startPoints.box.y),null!=r.snapToGrid&&(a-=a%r.snapToGrid,s-=s%r.snapToGrid,o-=o%r.snapToGrid,n-=n%r.snapToGrid),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:o,y:n},!0):this.el.move(a,s));return i},t.prototype.end=function(t){var e=this.drag(t);this.el.fire("dragend",{event:t,p:e,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag");},SVG.extend(SVG.Element,{draggable:function(e,i){"function"!=typeof e&&"object"!=typeof e||(i=e,e=!0);var a=this.remember("_draggable")||new t(this);return (e=void 0===e||e)?a.init(i||{},e):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}});}.call(void 0),function(){function t(t){this.el=t,t.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1},this.pointsList={lt:[0,0],rt:["width",0],rb:["width","height"],lb:[0,"height"],t:["width",0],r:["width","height"],b:["width","height"],l:[0,"height"]},this.pointCoord=function(t,e,i){var a="string"!=typeof t?t:e[t];return i?a/2:a},this.pointCoords=function(t,e){var i=this.pointsList[t];return {x:this.pointCoord(i[0],e,"t"===t||"b"===t),y:this.pointCoord(i[1],e,"r"===t||"l"===t)}};}t.prototype.init=function(t,e){var i=this.el.bbox();this.options={};var a=this.el.selectize.defaults.points;for(var s in this.el.selectize.defaults)this.options[s]=this.el.selectize.defaults[s],void 0!==e[s]&&(this.options[s]=e[s]);var r=["points","pointsExclude"];for(var s in r){var o=this.options[r[s]];"string"==typeof o?o=o.length>0?o.split(/\s*,\s*/i):[]:"boolean"==typeof o&&"points"===r[s]&&(o=o?a:[]),this.options[r[s]]=o;}this.options.points=[a,this.options.points].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)>-1}))})),this.options.points=[this.options.points,this.options.pointsExclude].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)<0}))})),this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(i.x,i.y)),this.options.deepSelect&&-1!==["line","polyline","polygon"].indexOf(this.el.type)?this.selectPoints(t):this.selectRect(t),this.observe(),this.cleanup();},t.prototype.selectPoints=function(t){return this.pointSelection.isSelected=t,this.pointSelection.set||(this.pointSelection.set=this.parent.set(),this.drawPoints()),this},t.prototype.getPointArray=function(){var t=this.el.bbox();return this.el.array().valueOf().map((function(e){return [e[0]-t.x,e[1]-t.y]}))},t.prototype.drawPoints=function(){for(var t=this,e=this.getPointArray(),i=0,a=e.length;i<a;++i){var s=function(e){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;t.el.fire("point",{x:a,y:s,i:e,event:i});}}(i),r=this.drawPoint(e[i][0],e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",s).on("mousedown",s);this.pointSelection.set.add(r);}},t.prototype.drawPoint=function(t,e){var i=this.options.pointType;switch(i){case"circle":return this.drawCircle(t,e);case"rect":return this.drawRect(t,e);default:if("function"==typeof i)return i.call(this,t,e);throw new Error("Unknown "+i+" point type!")}},t.prototype.drawCircle=function(t,e){return this.nested.circle(this.options.pointSize).center(t,e)},t.prototype.drawRect=function(t,e){return this.nested.rect(this.options.pointSize,this.options.pointSize).center(t,e)},t.prototype.updatePointSelection=function(){var t=this.getPointArray();this.pointSelection.set.each((function(e){this.cx()===t[e][0]&&this.cy()===t[e][1]||this.center(t[e][0],t[e][1]);}));},t.prototype.updateRectSelection=function(){var t=this,e=this.el.bbox();if(this.rectSelection.set.get(0).attr({width:e.width,height:e.height}),this.options.points.length&&this.options.points.map((function(i,a){var s=t.pointCoords(i,e);t.rectSelection.set.get(a+1).center(s.x,s.y);})),this.options.rotationPoint){var i=this.rectSelection.set.length();this.rectSelection.set.get(i-1).center(e.width/2,20);}},t.prototype.selectRect=function(t){var e=this,i=this.el.bbox();function a(t){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;e.el.fire(t,{x:a,y:s,event:i});}}if(this.rectSelection.isSelected=t,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(i.width,i.height).addClass(this.options.classRect)),this.options.points.length&&this.rectSelection.set.length()<2){this.options.points.map((function(t,s){var r=e.pointCoords(t,i),o=e.drawPoint(r.x,r.y).attr("class",e.options.classPoints+"_"+t).on("mousedown",a(t)).on("touchstart",a(t));e.rectSelection.set.add(o);})),this.rectSelection.set.each((function(){this.addClass(e.options.classPoints);}));}if(this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var s=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation();var i=t.pageX||t.touches[0].pageX,a=t.pageY||t.touches[0].pageY;e.el.fire("rot",{x:i,y:a,event:t});},r=this.drawPoint(i.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",s).on("mousedown",s);this.rectSelection.set.add(r);}},t.prototype.handler=function(){var t=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(t.x,t.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection();},t.prototype.observe=function(){var t=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver((function(){t.handler();})),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst;}catch(t){}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",(function(){t.handler();}));},t.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each((function(){this.remove();})),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each((function(){this.remove();})),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested);},SVG.extend(SVG.Element,{selectize:function(e,i){return "object"==typeof e&&(i=e,e=!0),(this.remember("_selectHandler")||new t(this)).init(void 0===e||e,i||{}),this}}),SVG.Element.prototype.selectize.defaults={points:["lt","rt","rb","lb","t","r","b","l"],pointsExclude:[],classRect:"svg_select_boundingRect",classPoints:"svg_select_points",pointSize:7,rotationPoint:!0,deepSelect:!1,pointType:"circle"};}(),function(){(function(){function t(t){t.remember("_resizeHandler",this),this.el=t,this.parameters={},this.lastUpdateCall=null,this.p=t.doc().node.createSVGPoint();}t.prototype.transformPoint=function(t,e,i){return this.p.x=t-(this.offset.x-window.pageXOffset),this.p.y=e-(this.offset.y-window.pageYOffset),this.p.matrixTransform(i||this.m)},t.prototype._extractPosition=function(t){return {x:null!=t.clientX?t.clientX:t.touches[0].clientX,y:null!=t.clientY?t.clientY:t.touches[0].clientY}},t.prototype.init=function(t){var e=this;if(this.stop(),"stop"!==t){for(var i in this.options={},this.el.resize.defaults)this.options[i]=this.el.resize.defaults[i],void 0!==t[i]&&(this.options[i]=t[i]);this.el.on("lt.resize",(function(t){e.resize(t||window.event);})),this.el.on("rt.resize",(function(t){e.resize(t||window.event);})),this.el.on("rb.resize",(function(t){e.resize(t||window.event);})),this.el.on("lb.resize",(function(t){e.resize(t||window.event);})),this.el.on("t.resize",(function(t){e.resize(t||window.event);})),this.el.on("r.resize",(function(t){e.resize(t||window.event);})),this.el.on("b.resize",(function(t){e.resize(t||window.event);})),this.el.on("l.resize",(function(t){e.resize(t||window.event);})),this.el.on("rot.resize",(function(t){e.resize(t||window.event);})),this.el.on("point.resize",(function(t){e.resize(t||window.event);})),this.update();}},t.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},t.prototype.resize=function(t){var e=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var i=this._extractPosition(t.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(i.x,i.y),x:t.detail.x,y:t.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},"text"===this.el.type&&(this.parameters.fontSize=this.el.attr()["font-size"]),void 0!==t.detail.i){var a=this.el.array().valueOf();this.parameters.i=t.detail.i,this.parameters.pointCoords=[a[t.detail.i][0],a[t.detail.i][1]];}switch(t.type){case"lt":this.calc=function(t,e){var i=this.snapToGrid(t,e);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y+i[1]).size(this.parameters.box.width-i[0],this.parameters.box.height-i[1]);}};break;case"rt":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).size(this.parameters.box.width+i[0],this.parameters.box.height-i[1]);}};break;case"rb":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+i[0],this.parameters.box.height+i[1]);}};break;case"lb":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).size(this.parameters.box.width-i[0],this.parameters.box.height+i[1]);}};break;case"t":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).height(this.parameters.box.height-i[1]);}};break;case"r":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+i[0]);}};break;case"b":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+i[1]);}};break;case"l":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).width(this.parameters.box.width-i[0]);}};break;case"rot":this.calc=function(t,e){var i=t+this.parameters.p.x,a=e+this.parameters.p.y,s=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),r=Math.atan2(a-this.parameters.box.y-this.parameters.box.height/2,i-this.parameters.box.x-this.parameters.box.width/2),o=this.parameters.rotation+180*(r-s)/Math.PI+this.options.snapToAngle/2;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(o-o%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy);};break;case"point":this.calc=function(t,e){var i=this.snapToGrid(t,e,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),a=this.el.array().valueOf();a[this.parameters.i][0]=this.parameters.pointCoords[0]+i[0],a[this.parameters.i][1]=this.parameters.pointCoords[1]+i[1],this.el.plot(a);};}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:t}),SVG.on(window,"touchmove.resize",(function(t){e.update(t||window.event);})),SVG.on(window,"touchend.resize",(function(){e.done();})),SVG.on(window,"mousemove.resize",(function(t){e.update(t||window.event);})),SVG.on(window,"mouseup.resize",(function(){e.done();}));},t.prototype.update=function(t){if(t){var e=this._extractPosition(t),i=this.transformPoint(e.x,e.y),a=i.x-this.parameters.p.x,s=i.y-this.parameters.p.y;this.lastUpdateCall=[a,s],this.calc(a,s),this.el.fire("resizing",{dx:a,dy:s,event:t});}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1]);},t.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone");},t.prototype.snapToGrid=function(t,e,i,a){var s;return void 0!==a?s=[(i+t)%this.options.snapToGrid,(a+e)%this.options.snapToGrid]:(i=null==i?3:i,s=[(this.parameters.box.x+t+(1&i?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+e+(2&i?0:this.parameters.box.height))%this.options.snapToGrid]),t<0&&(s[0]-=this.options.snapToGrid),e<0&&(s[1]-=this.options.snapToGrid),t-=Math.abs(s[0])<this.options.snapToGrid/2?s[0]:s[0]-(t<0?-this.options.snapToGrid:this.options.snapToGrid),e-=Math.abs(s[1])<this.options.snapToGrid/2?s[1]:s[1]-(e<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(t,e,i,a)},t.prototype.constraintToBox=function(t,e,i,a){var s,r,o=this.options.constraint||{};return void 0!==a?(s=i,r=a):(s=this.parameters.box.x+(1&i?0:this.parameters.box.width),r=this.parameters.box.y+(2&i?0:this.parameters.box.height)),void 0!==o.minX&&s+t<o.minX&&(t=o.minX-s),void 0!==o.maxX&&s+t>o.maxX&&(t=o.maxX-s),void 0!==o.minY&&r+e<o.minY&&(e=o.minY-r),void 0!==o.maxY&&r+e>o.maxY&&(e=o.maxY-r),[t,e]},t.prototype.checkAspectRatio=function(t,e){if(!this.options.saveAspectRatio)return t;var i=t.slice(),a=this.parameters.box.width/this.parameters.box.height,s=this.parameters.box.width+t[0],r=this.parameters.box.height-t[1],o=s/r;return o<a?(i[1]=s/a-this.parameters.box.height,e&&(i[1]=-i[1])):o>a&&(i[0]=this.parameters.box.width-r*a,e&&(i[0]=-i[0])),i},SVG.extend(SVG.Element,{resize:function(e){return (this.remember("_resizeHandler")||new t(this)).init(e||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1};}).call(this);}(),void 0===window.Apex&&(window.Apex={});var Gt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;}return r(t,[{key:"initModules",value:function(){this.ctx.publicMethods=["updateOptions","updateSeries","appendData","appendSeries","isSeriesHidden","toggleSeries","showSeries","hideSeries","setLocale","resetSeries","zoomX","toggleDataPointSelection","dataURI","exportToCSV","addXaxisAnnotation","addYaxisAnnotation","addPointAnnotation","clearAnnotations","removeAnnotation","paper","destroy"],this.ctx.eventList=["click","mousedown","mousemove","mouseleave","touchstart","touchmove","touchleave","mouseup","touchend"],this.ctx.animations=new b(this.ctx),this.ctx.axes=new J(this.ctx),this.ctx.core=new Wt(this.ctx.el,this.ctx),this.ctx.config=new E({}),this.ctx.data=new W(this.ctx),this.ctx.grid=new j(this.ctx),this.ctx.graphics=new m(this.ctx),this.ctx.coreUtils=new y(this.ctx),this.ctx.crosshairs=new Q(this.ctx),this.ctx.events=new Z(this.ctx),this.ctx.exports=new G(this.ctx),this.ctx.localization=new $(this.ctx),this.ctx.options=new L,this.ctx.responsive=new K(this.ctx),this.ctx.series=new N(this.ctx),this.ctx.theme=new tt(this.ctx),this.ctx.formatters=new T(this.ctx),this.ctx.titleSubtitle=new et(this.ctx),this.ctx.legend=new lt(this.ctx),this.ctx.toolbar=new ht(this.ctx),this.ctx.tooltip=new bt(this.ctx),this.ctx.dimensions=new ot(this.ctx),this.ctx.updateHelpers=new Bt(this.ctx),this.ctx.zoomPanSelection=new ct(this.ctx),this.ctx.w.globals.tooltip=new bt(this.ctx);}}]),t}(),Vt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;}return r(t,[{key:"clear",value:function(t){var e=t.isUpdating;this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(),this.ctx.toolbar&&this.ctx.toolbar.destroy(),this.ctx.animations=null,this.ctx.axes=null,this.ctx.annotations=null,this.ctx.core=null,this.ctx.data=null,this.ctx.grid=null,this.ctx.series=null,this.ctx.responsive=null,this.ctx.theme=null,this.ctx.formatters=null,this.ctx.titleSubtitle=null,this.ctx.legend=null,this.ctx.dimensions=null,this.ctx.options=null,this.ctx.crosshairs=null,this.ctx.zoomPanSelection=null,this.ctx.updateHelpers=null,this.ctx.toolbar=null,this.ctx.localization=null,this.ctx.w.globals.tooltip=null,this.clearDomElements({isUpdating:e});}},{key:"killSVG",value:function(t){t.each((function(t,e){this.removeClass("*"),this.off(),this.stop();}),!0),t.ungroup(),t.clear();}},{key:"clearDomElements",value:function(t){var e=this,i=t.isUpdating,a=this.w.globals.dom.Paper.node;a.parentNode&&a.parentNode.parentNode&&!i&&(a.parentNode.parentNode.style.minHeight="unset");var s=this.w.globals.dom.baseEl;s&&this.ctx.eventList.forEach((function(t){s.removeEventListener(t,e.ctx.events.documentEvent);}));var r=this.w.globals.dom;if(null!==this.ctx.el)for(;this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);this.killSVG(r.Paper),r.Paper.remove(),r.elWrap=null,r.elGraphical=null,r.elLegendWrap=null,r.elLegendForeign=null,r.baseEl=null,r.elGridRect=null,r.elGridRectMask=null,r.elGridRectMarkerMask=null,r.elForecastMask=null,r.elNonForecastMask=null,r.elDefs=null;}}]),t}(),jt=new WeakMap;var _t=function(){function t(e,i){a(this,t),this.opts=i,this.ctx=this,this.w=new F(i).init(),this.el=e,this.w.globals.cuid=x.randomId(),this.w.globals.chartID=this.w.config.chart.id?x.escapeString(this.w.config.chart.id):this.w.globals.cuid,new Gt(this).initModules(),this.create=x.bind(this.create,this),this.windowResizeHandler=this._windowResizeHandler.bind(this),this.parentResizeHandler=this._parentResizeCallback.bind(this);}return r(t,[{key:"render",value:function(){var t=this;return new Promise((function(e,i){if(null!==t.el){void 0===Apex._chartInstances&&(Apex._chartInstances=[]),t.w.config.chart.id&&Apex._chartInstances.push({id:t.w.globals.chartID,group:t.w.config.chart.group,chart:t}),t.setLocale(t.w.config.chart.defaultLocale);var a=t.w.config.chart.events.beforeMount;if("function"==typeof a&&a(t,t.w),t.events.fireEvent("beforeMount",[t,t.w]),window.addEventListener("resize",t.windowResizeHandler),function(t,e){var i=!1;if(t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE){var a=t.getBoundingClientRect();"none"!==t.style.display&&0!==a.width||(i=!0);}var s=new ResizeObserver((function(a){i&&e.call(t,a),i=!0;}));t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Array.from(t.children).forEach((function(t){return s.observe(t)})):s.observe(t),jt.set(e,s);}(t.el.parentNode,t.parentResizeHandler),!t.css){var s=t.el.getRootNode&&t.el.getRootNode(),r=x.is("ShadowRoot",s),o=t.el.ownerDocument,n=o.getElementById("apexcharts-css");if(r||!n){var l;t.css=document.createElement("style"),t.css.id="apexcharts-css",t.css.textContent='@keyframes opaque {\n  0% {\n      opacity: 0\n  }\n\n  to {\n      opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n  0%,to {\n      opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\n.legend-mouseover-inactive {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255,255,255,.96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30,30,30,.8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0,0,0,.7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,.apexcharts-tooltip-text-y-value,.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,.apexcharts-tooltip-text-goals-value:empty,.apexcharts-tooltip-text-y-label:empty,.apexcharts-tooltip-text-y-value:empty,.apexcharts-tooltip-text-z-value:empty,.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0!important\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_boundingRect,.svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_boundingRect,.apexcharts-selection-rect+g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_points_l,.apexcharts-selection-rect+g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,.apexcharts-pan-icon,.apexcharts-reset-icon,.apexcharts-selection-icon,.apexcharts-toolbar-custom-icon,.apexcharts-zoom-icon,.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,.apexcharts-reset-icon svg,.apexcharts-zoom-icon svg,.apexcharts-zoomin-icon svg,.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,.apexcharts-theme-dark .apexcharts-pan-icon svg,.apexcharts-theme-dark .apexcharts-reset-icon svg,.apexcharts-theme-dark .apexcharts-selection-icon svg,.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,.apexcharts-theme-dark .apexcharts-zoom-icon svg,.apexcharts-theme-dark .apexcharts-zoomin-icon svg,.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,.apexcharts-theme-light .apexcharts-reset-icon:hover svg,.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,.apexcharts-reset-icon,.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0,0,0,.7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n      opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,.apexcharts-datalabel.apexcharts-element-hidden,.apexcharts-hide .apexcharts-series-points {\n  opacity: 0\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n.apexcharts-datalabel,.apexcharts-datalabel-label,.apexcharts-datalabel-value,.apexcharts-datalabels,.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,.apexcharts-area-series .apexcharts-area,.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-gridline,.apexcharts-line,.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-point-annotation-label,.apexcharts-radar-series path,.apexcharts-radar-series polygon,.apexcharts-toolbar svg,.apexcharts-tooltip .apexcharts-marker,.apexcharts-xaxis-annotation-label,.apexcharts-yaxis-annotation-label,.apexcharts-zoom-rect {\n  pointer-events: none\n}\n\n.apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,.resize-triggers,.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers{\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows{\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers{\n  pointer-events: none\n}';var h=(null===(l=t.opts.chart)||void 0===l?void 0:l.nonce)||t.w.config.chart.nonce;h&&t.css.setAttribute("nonce",h),r?s.prepend(t.css):o.head.appendChild(t.css);}}var c=t.create(t.w.config.series,{});if(!c)return e(t);t.mount(c).then((function(){"function"==typeof t.w.config.chart.events.mounted&&t.w.config.chart.events.mounted(t,t.w),t.events.fireEvent("mounted",[t,t.w]),e(c);})).catch((function(t){i(t);}));}else i(new Error("Element not found"));}))}},{key:"create",value:function(t,e){var i=this.w;new Gt(this).initModules();var a=this.w.globals;(a.noData=!1,a.animationEnded=!1,this.responsive.checkResponsiveConfig(e),i.config.xaxis.convertedCatToNumeric)&&new X(i.config).convertCatToNumericXaxis(i.config,this.ctx);if(null===this.el)return a.animationEnded=!0,null;if(this.core.setupElements(),"treemap"===i.config.chart.type&&(i.config.grid.show=!1,i.config.yaxis[0].show=!1),0===a.svgWidth)return a.animationEnded=!0,null;var s=y.checkComboSeries(t);a.comboCharts=s.comboCharts,a.comboBarCount=s.comboBarCount;var r=t.every((function(t){return t.data&&0===t.data.length}));(0===t.length||r)&&this.series.handleNoData(),this.events.setupEventHandlers(),this.data.parseData(t),this.theme.init(),new H(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),a.noData&&a.collapsedSeries.length!==a.series.length&&!i.config.legend.showForSingleSeries||this.legend.init(),this.series.hasAllSeriesEqualX(),a.axisCharts&&(this.core.coreCalculations(),"category"!==i.config.xaxis.type&&this.formatters.setLabelFormatters(),this.ctx.toolbar.minX=i.globals.minX,this.ctx.toolbar.maxX=i.globals.maxX),this.formatters.heatmapLabelFormatters(),new y(this).getLargestMarkerSize(),this.dimensions.plotCoords();var o=this.core.xySettings();this.grid.createGridMask();var n=this.core.plotChartType(t,o),l=new O(this);return l.bringForward(),i.config.dataLabels.background.enabled&&l.dataLabelsBackground(),this.core.shiftGraphPosition(),{elGraph:n,xyRatios:o,dimensions:{plot:{left:i.globals.translateX,top:i.globals.translateY,width:i.globals.gridWidth,height:i.globals.gridHeight}}}}},{key:"mount",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=this,a=i.w;return new Promise((function(s,r){if(null===i.el)return r(new Error("Not enough data to display or target element not found"));(null===e||a.globals.allSeriesCollapsed)&&i.series.handleNoData(),i.grid=new j(i);var o,n,l=i.grid.drawGrid();(i.annotations=new P(i),i.annotations.drawImageAnnos(),i.annotations.drawTextAnnos(),"back"===a.config.grid.position)&&(l&&a.globals.dom.elGraphical.add(l.el),null!=l&&null!==(o=l.elGridBorders)&&void 0!==o&&o.node&&a.globals.dom.elGraphical.add(l.elGridBorders));if(Array.isArray(e.elGraph))for(var h=0;h<e.elGraph.length;h++)a.globals.dom.elGraphical.add(e.elGraph[h]);else a.globals.dom.elGraphical.add(e.elGraph);"front"===a.config.grid.position&&(l&&a.globals.dom.elGraphical.add(l.el),null!=l&&null!==(n=l.elGridBorders)&&void 0!==n&&n.node&&a.globals.dom.elGraphical.add(l.elGridBorders));"front"===a.config.xaxis.crosshairs.position&&i.crosshairs.drawXCrosshairs(),"front"===a.config.yaxis[0].crosshairs.position&&i.crosshairs.drawYCrosshairs(),"treemap"!==a.config.chart.type&&i.axes.drawAxis(a.config.chart.type,l);var c=new V(t.ctx,l),d=new q(t.ctx,l);if(null!==l&&(c.xAxisLabelCorrections(l.xAxisTickWidth),d.setYAxisTextAlignments(),a.config.yaxis.map((function(t,e){-1===a.globals.ignoreYAxisIndexes.indexOf(e)&&d.yAxisTitleRotate(e,t.opposite);}))),i.annotations.drawAxesAnnotations(),!a.globals.noData){if(a.config.tooltip.enabled&&!a.globals.noData&&i.w.globals.tooltip.drawTooltip(e.xyRatios),a.globals.axisCharts&&(a.globals.isXNumeric||a.config.xaxis.convertedCatToNumeric||a.globals.isRangeBar))(a.config.chart.zoom.enabled||a.config.chart.selection&&a.config.chart.selection.enabled||a.config.chart.pan&&a.config.chart.pan.enabled)&&i.zoomPanSelection.init({xyRatios:e.xyRatios});else {var g=a.config.chart.toolbar.tools;["zoom","zoomin","zoomout","selection","pan","reset"].forEach((function(t){g[t]=!1;}));}a.config.chart.toolbar.show&&!a.globals.allSeriesCollapsed&&i.toolbar.createToolbar();}a.globals.memory.methodsToExec.length>0&&a.globals.memory.methodsToExec.forEach((function(t){t.method(t.params,!1,t.context);})),a.globals.axisCharts||a.globals.noData||i.core.resizeNonAxisCharts(),s(i);}))}},{key:"destroy",value:function(){var t,e;window.removeEventListener("resize",this.windowResizeHandler),this.el.parentNode,t=this.parentResizeHandler,(e=jt.get(t))&&(e.disconnect(),jt.delete(t));var i=this.w.config.chart.id;i&&Apex._chartInstances.forEach((function(t,e){t.id===x.escapeString(i)&&Apex._chartInstances.splice(e,1);})),new Vt(this.ctx).clear({isUpdating:!1});}},{key:"updateOptions",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=this.w;return o.globals.selection=void 0,t.series&&(this.series.resetSeries(!1,!0,!1),t.series.length&&t.series[0].data&&(t.series=t.series.map((function(t,i){return e.updateHelpers._extendSeries(t,i)}))),this.updateHelpers.revertDefaultAxisMinMax()),t.xaxis&&(t=this.updateHelpers.forceXAxisUpdate(t)),t.yaxis&&(t=this.updateHelpers.forceYAxisUpdate(t)),o.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(),t.theme&&(t=this.theme.updateThemeOptions(t)),this.updateHelpers._updateOptions(t,i,a,s,r)}},{key:"updateSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(t,e,i)}},{key:"appendSeries",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w.config.series.slice();return a.push(t),this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(a,e,i)}},{key:"appendData",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this;i.w.globals.dataChanged=!0,i.series.getPreviousPaths();for(var a=i.w.config.series.slice(),s=0;s<a.length;s++)if(null!==t[s]&&void 0!==t[s])for(var r=0;r<t[s].data.length;r++)a[s].data.push(t[s].data[r]);return i.w.config.series=a,e&&(i.w.globals.initialSeries=x.clone(i.w.config.series)),this.update()}},{key:"update",value:function(t){var e=this;return new Promise((function(i,a){new Vt(e.ctx).clear({isUpdating:!0});var s=e.create(e.w.config.series,t);if(!s)return i(e);e.mount(s).then((function(){"function"==typeof e.w.config.chart.events.updated&&e.w.config.chart.events.updated(e,e.w),e.events.fireEvent("updated",[e,e.w]),e.w.globals.isDirty=!0,i(e);})).catch((function(t){a(t);}));}))}},{key:"getSyncedCharts",value:function(){var t=this.getGroupedCharts(),e=[this];return t.length&&(e=[],t.forEach((function(t){e.push(t);}))),e}},{key:"getGroupedCharts",value:function(){var t=this;return Apex._chartInstances.filter((function(t){if(t.group)return !0})).map((function(e){return t.w.config.chart.group===e.group?e.chart:t}))}},{key:"toggleSeries",value:function(t){return this.series.toggleSeries(t)}},{key:"highlightSeriesOnLegendHover",value:function(t,e){return this.series.toggleSeriesOnHover(t,e)}},{key:"showSeries",value:function(t){this.series.showSeries(t);}},{key:"hideSeries",value:function(t){this.series.hideSeries(t);}},{key:"isSeriesHidden",value:function(t){this.series.isSeriesHidden(t);}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.series.resetSeries(t,e);}},{key:"addEventListener",value:function(t,e){this.events.addEventListener(t,e);}},{key:"removeEventListener",value:function(t,e){this.events.removeEventListener(t,e);}},{key:"addXaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addXaxisAnnotationExternal(t,e,a);}},{key:"addYaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addYaxisAnnotationExternal(t,e,a);}},{key:"addPointAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addPointAnnotationExternal(t,e,a);}},{key:"clearAnnotations",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this;t&&(e=t),e.annotations.clearAnnotations(e);}},{key:"removeAnnotation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=this;e&&(i=e),i.annotations.removeAnnotation(i,t);}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(t,e){return this.coreUtils.getSeriesTotalsXRange(t,e)}},{key:"getHighestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new U(this.ctx).getMinYMaxY(t).highestY}},{key:"getLowestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new U(this.ctx).getMinYMaxY(t).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"toggleDataPointSelection",value:function(t,e){return this.updateHelpers.toggleDataPointSelection(t,e)}},{key:"zoomX",value:function(t,e){this.ctx.toolbar.zoomUpdateOptions(t,e);}},{key:"setLocale",value:function(t){this.localization.setCurrentLocaleValues(t);}},{key:"dataURI",value:function(t){return new G(this.ctx).dataURI(t)}},{key:"exportToCSV",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new G(this.ctx).exportToCSV(t)}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"_parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize();}},{key:"_windowResize",value:function(){var t=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout((function(){t.w.globals.resized=!0,t.w.globals.dataChanged=!1,t.ctx.update();}),150);}},{key:"_windowResizeHandler",value:function(){var t=this.w.config.chart.redrawOnWindowResize;"function"==typeof t&&(t=t()),t&&this._windowResize();}}],[{key:"getChartByID",value:function(t){var e=x.escapeString(t);if(Apex._chartInstances){var i=Apex._chartInstances.filter((function(t){return t.id===e}))[0];return i&&i.chart}}},{key:"initOnLoad",value:function(){for(var e=document.querySelectorAll("[data-apexcharts]"),i=0;i<e.length;i++){new t(e[i],JSON.parse(e[i].getAttribute("data-options"))).render();}}},{key:"exec",value:function(t,e){var i=this.getChartByID(t);if(i){i.w.globals.isExecCalled=!0;var a=null;if(-1!==i.publicMethods.indexOf(e)){for(var s=arguments.length,r=new Array(s>2?s-2:0),o=2;o<s;o++)r[o-2]=arguments[o];a=i[e].apply(i,r);}return a}}},{key:"merge",value:function(t,e){return x.extend(t,e)}}]),t}();module.exports=_t; 
	} (apexcharts_common, apexcharts_common.exports));

	var apexcharts_commonExports = apexcharts_common.exports;
	var ApexCharts$1 = /*@__PURE__*/getDefaultExportFromCjs(apexcharts_commonExports);

	// 사용할 수 있는 차트 옵션
	const apexOptions = [
	    'annotations',
	    'chart',
	    'colors',
	    'dataLabels',
	    'fill',
	    'grid',
	    'labels',
	    'legend',
	    'markers',
	    'noData',
	    'plotOptions',
	    'responsive',
	    'series',
	    'states',
	    'stroke',
	    'subtitle',
	    'theme',
	    'title',
	    'tooltip',
	    'xaxis',
	    'yaxis'
	];
	// 타입별 추가 설정 - overwrite 불가
	const typesDefault = {
	    line: {
	        chart: {
	            type: 'line'
	        }
	    },
	    spline: {
	        chart: {
	            type: 'area'
	        },
	        dataLabels: {
	            enabled: false
	        },
	        stroke: {
	            curve: 'smooth'
	        }
	    },
	    sparkline: {
	        chart: {
	            type: 'area',
	            sparkline: {
	                enabled: true
	            }
	        },
	        tooltip: {
	            enabled: false
	        },
	        stroke: {
	            curve: 'straight',
	            width: 2
	        }
	    },
	    column: {
	        chart: {
	            type: 'bar'
	        },
	        plotOptions: {
	            bar: {
	                horizontal: false,
	                columnWidth: '70%'
	            }
	        },
	        dataLabels: {
	            position: 'top',
	            hideOverflowingLabels: true,
	            orientation: 'vertical'
	        }
	    },
	    bar: {
	        chart: {
	            type: 'bar'
	        },
	        plotOptions: {
	            bar: {
	                horizontal: true
	            }
	        }
	    },
	    pie: {
	        chart: {
	            type: 'pie'
	        }
	    },
	    donut: {
	        chart: {
	            type: 'donut'
	        }
	    },
	    gauge: {
	        chart: {
	            type: 'radialBar'
	            // offsetY: -20
	        },
	        plotOptions: {
	            radialBar: {
	                startAngle: -90,
	                endAngle: 90,
	                dataLabels: {
	                    name: {
	                        offsetY: 20
	                    },
	                    value: {
	                        offsetY: -20,
	                        fontSize: '24px'
	                    }
	                }
	            }
	        }
	    },
	    radial: {
	        chart: {
	            type: 'radialBar'
	        },
	        plotOptions: {
	            radialBar: {
	                dataLabels: {
	                    name: {
	                        offsetY: 20
	                    },
	                    value: {
	                        fontSize: '24px',
	                        offsetY: -20
	                    }
	                }
	            }
	        }
	    }
	};
	class Chart extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {};
	        this.hasSelector = true;
	        this.config = {};
	        this.events = {};
	        this.methods = {
	            render() {
	                this.$options.chart.render();
	            },
	            exec(chartID, methodName, options) {
	                this.$options.chart.exec(chartID, methodName, options);
	            },
	            updateOptions(newOptions, redrawPaths, animate, updateSyncedCharts) {
	                this.$options.chart.updateOptions(newOptions, redrawPaths, animate, updateSyncedCharts);
	            },
	            updateSeries(newSeries, animate) {
	                this.$options.chart.updateSeries(newSeries, animate);
	            },
	            appendSeries(newSeries, animate) {
	                this.$options.chart.appendSeries(newSeries, animate);
	            },
	            toggleSeries(seriesName) {
	                this.$options.chart.toggleSeries(seriesName);
	            },
	            showSeries(seriesName) {
	                this.$options.chart.showSeries(seriesName);
	            },
	            hideSeries(seriesName) {
	                this.$options.chart.hideSeries(seriesName);
	            },
	            zoomX(startX, endX) {
	                this.$options.chart.zoomX(startX, endX);
	            },
	            resetSeries(shouldUpdateChart, shouldResetZoom) {
	                this.$options.chart.resetSeries(shouldUpdateChart, shouldResetZoom);
	            },
	            appendData(newData) {
	                this.$options.chart.appendData(newData);
	            },
	            addDataPointSelection(seriesIndex, dataPointIndex) {
	                this.$options.chart.addDataPointSelection(seriesIndex, dataPointIndex);
	            },
	            toggleDataPointSelection(seriesIndex, dataPointIndex) {
	                this.$options.chart.toggleDataPointSelection(seriesIndex, dataPointIndex);
	            },
	            addXaxisAnnotation(options, pushToMemory) {
	                this.$options.chart.addXaxisAnnotation(options, pushToMemory);
	            },
	            addYaxisAnnotation(options, pushToMemory) {
	                this.$options.chart.addYaxisAnnotation(options, pushToMemory);
	            },
	            addPointAnnotation(options, pushToMemory) {
	                this.$options.chart.addPointAnnotation(options, pushToMemory);
	            },
	            removeAnnotation(id) {
	                this.$options.chart.removeAnnotation(id);
	            },
	            clearAnnotations(localeName) {
	                this.$options.chart.clearAnnotations(localeName);
	            },
	            dataURI() {
	                this.$options.chart.dataURI();
	            },
	            destroy() {
	                this.$options.chart.destroy();
	            }
	        };
	        // 기본 설정
	        this.chartDefault = {
	            chart: {
	                toolbar: {
	                    show: false,
	                    tools: {
	                        download: false,
	                        zoomin: false,
	                        zoomout: false,
	                        pan: false,
	                        reset: false
	                    }
	                }
	            }
	        };
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        if (config.width) {
	            styles.width = getUnit('width', config.width);
	        }
	        return createElement("div", { id: this._uid, className: 'gn-chart', style: styles });
	    }
	    beforeMount() {
	        if (!this.$selector) {
	            this.hasSelector = false;
	            this.virtualTarget();
	        }
	    }
	    completed() {
	        const chartOptions = {
	            chart: {
	                type: this.$options.series ? this.$options.type : 'line',
	                zoom: {
	                    enabled: false
	                }
	            }
	        };
	        each(this.$options, (value, key) => {
	            if (apexOptions.includes(key)) {
	                chartOptions[key] = value;
	            }
	        });
	        const newOptions = merge(this.chartDefault, merge(chartOptions, typesDefault[this.$options.type] || {}));
	        if (!newOptions.theme) {
	            newOptions.theme = {
	                palette: 'palette4'
	            };
	        }
	        this.$options.chart = new ApexCharts$1(this.$el, newOptions);
	        this.hasSelector && this.$options.chart.render();
	    }
	}

	const DEFAULT_COLOR = '#ff0000';
	const NONE_COLOR = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==)';
	const PICK_A_COLOR = 'pick a color';
	const COLOR_VALUE_WIDTH = 180;
	const COLOR_VALUE_HEIGHT = 150;
	let palette;
	class Colorpalette extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            change: () => {
	                !this.$options.disabled && this.$options.parent.change($('.color-palette-preview').textContent);
	                this._hidden.hide();
	            },
	            show: (options) => {
	                if (options) {
	                    (options.x || options.y) && css(this.$el, { left: options.x || 0, top: options.y || 0 });
	                    options.color && this._hidden.setColor(options.color);
	                    this.$options.parent = options.parent || this.$options.parent;
	                }
	                addClass(this.$el, 'is-active');
	                const parentOptions = this.$options.parent.$options;
	                const parentEl = this.$options.parent.$el;
	                if (parentOptions.direction) {
	                    this._hidden.setPosition(parentOptions, parentEl, this.$el);
	                }
	            },
	            hide: () => {
	                removeClass(this.$el, 'is-active');
	            },
	            movePointer: (e) => {
	                if (hasClass(e.target, 'color-pointer')) {
	                    return;
	                }
	                const positionX = e.offsetX;
	                const positionY = e.offsetY;
	                css(this.$options.delegates.pointer, { top: positionY, left: positionX });
	                this.$options.saturation = this._hidden.getSaturation(positionX);
	                this.$options.lightness = this._hidden.getLightness(positionY, positionX);
	                this._hidden.changeColor();
	            },
	            dragPointer: (e, position) => {
	                this.$options.saturation = this._hidden.getSaturation(position.x);
	                this.$options.lightness = this._hidden.getLightness(position.y, position.x);
	                this._hidden.changeColor();
	            },
	            moveBar: (e) => {
	                if (e.target !== e.currentTarget) {
	                    return;
	                }
	                const position = e.offsetY;
	                css(this.$options.delegates.slideBar, 'top', position);
	                this.$options.hue = this._hidden.getHue(position);
	                this._hidden.changeColor();
	            },
	            dragBar: (e, position) => {
	                this.$options.hue = this._hidden.getHue(position.y);
	                this._hidden.changeColor();
	            },
	            setColor: (color) => {
	                const [hue, saturation, lightness] = hexToHsl(color);
	                // eslint-disable-next-line @typescript-eslint/no-unused-vars
	                const [_h, whiteness, blackness] = hexToHwb(color);
	                this.$options.hue = hue;
	                this.$options.saturation = saturation;
	                this.$options.lightness = lightness;
	                // 슬라이더, 팔레트 아이콘 위치 변경
	                this._hidden.setHue();
	                this._hidden.setLightness(whiteness, blackness);
	                // 미리보기 색상 지정, 코드값 표시
	                this._hidden.changeColor(color);
	            },
	            changeColor: (color) => {
	                const bgString = `hsl(${this.$options.hue}, ${this.$options.saturation}%, ${this.$options.lightness}%)`;
	                // 전체 팔레트는 hue 값만 변경
	                css(this.$options.delegates.palette, 'background-color', `hsl(${this.$options.hue}, 100%, 50%)`);
	                css(this.$options.delegates.slideBar, 'background-color', `hsl(${this.$options.hue}, 100%, 50%)`);
	                // 다른 컬러셋은 saturation, lightness 포함하여 변경
	                css(this.$options.delegates.pointer, 'background-color', bgString);
	                css(this.$options.delegates.slider, 'background-color', bgString);
	                // 미리보기 영역은 hex 코드로 변경하여 적용
	                const pickColor = hslToHex([this.$options.hue, this.$options.saturation, this.$options.lightness]);
	                text$1(this.$options.delegates.preview, color ? color : `#${pickColor}`);
	                css(this.$options.delegates.preview, {
	                    color: `${contrastColor(pickColor)}`,
	                    backgroundColor: `#${pickColor}`
	                });
	            },
	            /* 슬라이더의 전체 높이 중 이벤트 발생 지점의 deg 0 ~ 360 */
	            getHue: (offset) => {
	                return Math.floor(360 - (360 / COLOR_VALUE_HEIGHT) * offset);
	            },
	            /* 슬라이더의 전체 높이 중 hue 값에 따른 위치 설정 */
	            setHue: () => {
	                css(this.$options.delegates.slideBar, 'top', Math.floor(COLOR_VALUE_HEIGHT - (COLOR_VALUE_HEIGHT / 360) * this.$options.hue));
	            },
	            /* 컬러팔레트의 전체 너비 중 이벤트 발생 지점의 비율과 높이 비율의  0% ~ 100% */
	            getLightness: (offsetY, offsetX) => {
	                return Math.floor((100 - (50 / COLOR_VALUE_WIDTH) * offsetX) * ((100 - (100 / COLOR_VALUE_HEIGHT) * offsetY) / 100));
	            },
	            /* 컬러팔레트의 전체 너비 중 lightness 값에 따른 위치 설정 */
	            setLightness: (whiteness, blackness) => {
	                css(this.$options.delegates.pointer, {
	                    top: blackness / (100 / COLOR_VALUE_HEIGHT),
	                    left: COLOR_VALUE_WIDTH - whiteness / (100 / COLOR_VALUE_WIDTH)
	                });
	            },
	            /* 컬러팔레트의 전체 너비 중 이벤트 발생 지점의 비율 0% ~ 100% */
	            getSaturation: (offset) => {
	                return Math.floor((100 / COLOR_VALUE_WIDTH) * offset);
	            },
	            /* 컬러팔레트의 전체 너비 중 saturation 값에 따른 위치 설정 */
	            setSaturation: () => {
	                css(this.$options.delegates.pointer, 'left', Math.floor(this.$options.saturation / (100 / COLOR_VALUE_WIDTH)));
	            },
	            setPosition: (options, parentEl, currentEl) => {
	                let _position = {
	                    top: 0,
	                    left: 0
	                };
	                const parentOffset = offset(parentEl);
	                const currentOffset = offset(currentEl);
	                switch (options.direction) {
	                    case 'top':
	                        _position = {
	                            left: parentOffset.left + 'px',
	                            top: parentOffset.top - currentOffset.height - 2 + 'px'
	                        };
	                        break;
	                    case 'bottom':
	                        _position = {
	                            left: parentOffset.left + 'px',
	                            top: parentOffset.bottom + 2 + 'px'
	                        };
	                        break;
	                    case 'right':
	                        _position = {
	                            left: parentOffset.right + 2 + 'px',
	                            top: parentOffset.top + 'px'
	                        };
	                        break;
	                    case 'left':
	                        _position = {
	                            left: parentOffset.left - currentOffset.width - 2 + 'px',
	                            top: parentOffset.top + 'px'
	                        };
	                        break;
	                }
	                css(currentEl, _position);
	            }
	        };
	        this.config = {
	            hue: 360,
	            saturation: 100,
	            lightness: 50,
	            delegates: {
	                palette: '.color-palette',
	                pointer: '.color-pointer',
	                slider: '.color-slider',
	                slideBar: '.color-slide-bar',
	                preview: '.color-palette-preview'
	            }
	        };
	        this.events = {
	            onChange: true
	        };
	        this.methods = {
	            show(position) {
	                this._hidden.show(position);
	            },
	            hide() {
	                this._hidden.hide();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {
	            top: config.y + 'px',
	            left: config.x + 'px'
	        };
	        return (createElement("div", { className: "gn-colorpicker", style: styles },
	            createElement("div", { className: "color-header is-draggable" },
	                PICK_A_COLOR,
	                createElement("span", { className: "color-cancel gn-icon is-close ", "on-click": this._hidden.hide },
	                    createElement("i", { className: "fas fa-times" }))),
	            createElement("div", { className: "color-controls" },
	                createElement("div", { className: "color-palette", "on-click": this._hidden.movePointer },
	                    createElement("div", { className: "color-saturation" }),
	                    createElement("div", { className: "color-value" }),
	                    createElement("div", { className: "color-pointer" })),
	                createElement("div", { className: "color-slider", "on-click": this._hidden.moveBar },
	                    createElement("div", { className: "color-slide-bar" }))),
	            createElement("div", { className: "color-set" },
	                createElement("div", { className: "color-palette-preview" }, DEFAULT_COLOR),
	                createElement("button", { className: "gn-button color-confirm", "on-click": this._hidden.change.bind(this) }, "OK"))));
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $render(config) {
	        const colorpicker = $(this.$el);
	        attr(colorpicker, 'tabindex', '-1');
	        drag(colorpicker, {
	            dragStart: () => {
	                colorpicker.focus();
	            }
	        });
	    }
	    beforeMount() {
	        var _a;
	        if (!this.$selector) {
	            append(document.body, $(`<div id="${this._uid}"></div>`));
	            this.$selector = $(`#${this._uid}`);
	        }
	        // disabled
	        if ((_a = this.config._confOptions) === null || _a === void 0 ? void 0 : _a.DISABLED) {
	            this.config.disabled = true;
	        }
	    }
	    completed() {
	        dragLayout(this.config.delegates.slideBar, [0, 0, COLOR_VALUE_HEIGHT, 0], {
	            drag: this._hidden.dragBar
	        });
	        dragLayout(this.config.delegates.pointer, [0, 0, COLOR_VALUE_HEIGHT, COLOR_VALUE_WIDTH], {
	            drag: this._hidden.dragPointer
	        });
	    }
	}
	class Colorpicker extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            change: (color) => {
	                this.$options.value = (color[0] === '#' ? '' : '#') + color || '';
	                css(this.$options.delegates.preview, 'background', this.$options.value);
	                val(this.$options.delegates.value, this.$options.value);
	                this.$event(this, 'onChange', this.$options.value);
	            },
	            show: (e) => {
	                if (this.$options.readonly) {
	                    return;
	                }
	                if (!palette) {
	                    palette = new Colorpalette('colorpalette', '', {
	                        parent: this
	                    });
	                }
	                if (!this.$options.palette) {
	                    this.$options.palette = palette;
	                }
	                if (!isHexPattern(this.$options.value)) {
	                    this.$options.value = DEFAULT_COLOR;
	                }
	                this.$options.palette.show({
	                    x: e.pageX,
	                    y: e.pageY,
	                    color: this._hidden.convertToSixDigitHex(this.$options.value),
	                    parent: this
	                });
	            },
	            removeColor: () => {
	                this.$options.color = '';
	                css(this.$options.delegates.preview, 'background', NONE_COLOR);
	                val(this.$options.delegates.value, '');
	                this.$event(this, 'onChange', '');
	            },
	            typeColor: (e) => {
	                const targetValue = val(e.target).toLowerCase();
	                this._hidden.change(targetValue);
	            },
	            convertToSixDigitHex: (shortHex) => {
	                if (shortHex.length === 7) {
	                    return shortHex;
	                }
	                if (shortHex.length >= 4) {
	                    return shortHex
	                        .split('')
	                        .map(el => el + el)
	                        .join('')
	                        .slice(1, 8);
	                }
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                attr(find('button', this.$el), 'disabled', true);
	                attr(find('input', this.$el), 'disabled', true);
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeAttr(find('button', this.$el), 'disabled');
	                removeAttr(find('input', this.$el), 'disabled');
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            name: this.$selector.name || this._uid,
	            direction: undefined,
	            delegates: {
	                preview: '.color-preview',
	                value: '.color-value'
	            },
	            editable: false
	        };
	        this.events = {
	            onChange: true
	        };
	        this.methods = {
	            change(color) {
	                this._hidden.change(color);
	            },
	            getValue() {
	                return this.$options.value;
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        return (createElement("div", { id: this._uid, className: 'gn-colorinput' + (config.size ? ' is-' + config.size : '') + (config.readonly ? ' is-readonly' : '') + (config.disabled ? ' is-disabled' : '') },
	            createElement("div", { className: "gn-control has-icon-left has-icon-right" },
	                createElement("button", { className: "color-preview", "on-click": this._hidden.show, style: {
	                        background: config.value || NONE_COLOR
	                    }, disabled: config.disabled }),
	                createElement("input", { type: "text", name: config.name, className: 'gn-input color-value' + (config.size ? ' is-' + config.size : ''), placeholder: PICK_A_COLOR, style: { width: '160px' }, value: config.value, readOnly: !config.editable || config.readonly, disabled: config.disabled, "on-keyup": this._hidden.typeColor }),
	                createElement("span", { className: "gn-icon is-cancel is-right color-remover", "on-click": this._hidden.removeColor },
	                    createElement("i", { className: "fas fa-times" })))));
	    }
	}

	let pickPanel;
	class Datepicker extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            change: (date) => {
	                this.$options.value = isDate(date) ? new Date(date) : '';
	                const formatValue = this.$options.value
	                    ? this.$options.type === 'date'
	                        ? dateFormat(this.$options.value, this.$options.dateFormat)
	                        : dateFormat(this.$options.value, this.$options.dateFormat + ' ' + this.$options.timeFormat)
	                    : '';
	                val(this.$options.delegates.date, formatValue);
	                isFunction(this.$options.onChange) && this.$options.onChange.call(this, formatValue);
	            },
	            getDate: () => {
	                return this.$options.type
	                    ? this.$options.type === 'date'
	                        ? dateFormat(toDate(this.$options.value), this.$options.dateFormat)
	                        : dateFormat(toDate(this.$options.value), this.$options.dateFormat + ' ' + this.$options.timeFormat)
	                    : '';
	            },
	            show: (e) => {
	                if (this.$options.disabled || this.$options.readonly) {
	                    return;
	                }
	                if (!this.$options.picker) {
	                    if (!pickPanel) {
	                        pickPanel = new Calendar('calendar', '', {
	                            parent: this,
	                            type: 'picker',
	                            dateType: this.$options.type,
	                            min: this.$options.min || null,
	                            max: this.$options.max || null,
	                            onSelect: (date) => {
	                                pickPanel.$options.parent.change(date);
	                                pickPanel.hide();
	                            }
	                        });
	                    }
	                    this.$options.picker = pickPanel;
	                    // 해당 컴포넌트 외 클릭 시 picker panel 숨김
	                    this.$options._destroy = on(document.body, 'click', (e) => {
	                        if (!parents(e.target, '#' + this.$options.picker._uid).length && !parents(e.target, '.gn-dateinput').length) {
	                            this.$options.picker.hide();
	                        }
	                    });
	                }
	                const pos = offset(e.target);
	                const posX = pos.left;
	                const posY = pos.top + pos.height;
	                const bodyHeight = getNumber(css(document.body, 'height'));
	                const bodyWidth = getNumber(css(document.body, 'width'));
	                const setPosition = {
	                    top: 'auto',
	                    left: 'auto',
	                    right: 'auto',
	                    bottom: 'auto'
	                };
	                if (isNumber(bodyHeight) && isNumber(posY) && bodyHeight - posY < 320) {
	                    setPosition.top = pos.top - offset(this.$options.picker.$el).height;
	                }
	                else {
	                    setPosition.top = posY || 0;
	                }
	                if (isNumber(bodyWidth) && isNumber(posX) && bodyWidth - posX < 230) {
	                    setPosition.right = 0;
	                }
	                else {
	                    setPosition.left = posX || 0;
	                }
	                this.$options.picker.show({
	                    value: isDate(this.$options.value) ? this.$options.value : '',
	                    parent: this,
	                    dateType: this.$options.type,
	                    dateFormat: this.$options.dateFormat,
	                    timeFormat: this.$options.timeFormat,
	                    min: this.$options.min || null,
	                    max: this.$options.max || null,
	                    position: setPosition
	                });
	            },
	            removeDate: () => {
	                this.$options.value = '';
	                val(this.$options.delegates.date, '');
	                isFunction(this.$options.onChange) && this.$options.onChange.call(this, '');
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                attr(find('input', this.$el), 'disabled', true);
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeAttr(find('input', this.$el), 'disabled');
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            name: this.$selector.name || this._uid,
	            delegates: {
	                date: '.date-value',
	                time: '.time-value'
	            },
	            textSets: {},
	            hasIcon: true,
	            type: 'date',
	            dateFormat: 'yyyy-MM-DD',
	            timeFormat: 'hh:mm:ss',
	            width: '160px'
	        };
	        this.events = {
	            onChange: true
	        };
	        this.methods = {
	            change(date) {
	                this._hidden.change(date);
	            },
	            getDate() {
	                return this._hidden.getDate();
	            },
	            getTime() {
	                return this.$options.value ? new Date(this.$options.value).getTime() : '';
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        var _a;
	        return (createElement("div", { id: this._uid, className: 'gn-dateinput' + (config.size ? ' is-' + config.size : '') + (config.style ? ' is-' + config.style : '') + (config.readonly ? ' is-readonly' : '') + (config.disabled ? ' is-disabled' : '') },
	            createElement("div", { className: 'gn-control has-icon-right' + (config.hasIcon ? ' has-icon-left' : '') },
	                config.hasIcon ? (createElement("span", { className: "gn-icon is-left" },
	                    createElement("i", { className: "fas fa-calendar" }))) : (''),
	                createElement("input", { type: "text", name: config.name, className: 'gn-input date-value is-borderless' + (config.size ? ' is-' + config.size : ''), disabled: config.disabled, readOnly: true, placeholder: (_a = config.textSets.placeholder) !== null && _a !== void 0 ? _a : 'pick a date', style: { width: getUnit('width', config.width) }, value: config.value ? dateFormat(toDate(config.value), config.type === 'datetime' ? config.dateFormat + ' ' + config.timeFormat : config.dateFormat) : '', "on-click": (e) => {
	                        this._hidden.show.call(this, e);
	                    } }),
	                config.readonly ? ('') : (createElement("span", { className: "gn-icon is-cancel is-right date-remover", "on-click": this._hidden.removeDate },
	                    createElement("i", { className: "fas fa-times" }))))));
	    }
	    destroyed() {
	        isFunction(this.$options._destroy) && this.$options._destroy();
	    }
	}

	/* eslint-disable @typescript-eslint/no-unused-vars */
	let rowIdx$1 = 0;
	let _EventTimer$1 = 0;
	const _EventDelay = 200;
	let _EventPrevent = false;
	class DataGrid extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            sort: (column, e) => {
	                var _a;
	                if (hasClass(e.target, 'is-handle')) {
	                    return;
	                }
	                const target = find('.is-ellipsis', e.currentTarget) || e.currentTarget;
	                column.sort = column.sort === 'asc' ? 'desc' : column.sort === 'desc' ? '' : 'asc';
	                this.$options.headers.forEach((x) => {
	                    if (x.key !== column.key) {
	                        x.sort = '';
	                    }
	                });
	                removeClass(target, 'is-asc', 'is-desc');
	                removeClass(findAll('.is-asc', this.$el), 'is-asc');
	                removeClass(findAll('.is-desc', this.$el), 'is-desc');
	                column.sort !== '' && addClass(target, `is-${column.sort}`);
	                this.$options.onSort && ((_a = this.$options) === null || _a === void 0 ? void 0 : _a.onSort.call(this, column));
	            },
	            renderHeader: (columns) => {
	                this.$options.hasOrder &&
	                    !this.$options.readonly &&
	                    columns.push({
	                        label: this.$options.textSets.orderLabel,
	                        key: 'btnOrder',
	                        style: {
	                            width: '50px'
	                        }
	                    });
	                this.$options.hasDelete &&
	                    !this.$options.readonly &&
	                    columns.push({
	                        label: this.$options.textSets.deleteLabel,
	                        key: 'btnDelete',
	                        style: {
	                            width: '30px'
	                        }
	                    });
	                return createElement("div", { className: "gn-datagrid-header-row" },
	                    " ",
	                    columns.map((column, idx) => this._hidden.renderCol(column, idx)));
	            },
	            renderCol: (column, idx) => {
	                const headerStyle = {};
	                if (column.style) {
	                    each(column.style, (value, key) => {
	                        if (key === 'width') {
	                            headerStyle['max-width'] = value;
	                            headerStyle.width = value;
	                            headerStyle['min-width'] = value;
	                        }
	                        else {
	                            headerStyle[key] = value;
	                        }
	                    });
	                }
	                if (isIE) {
	                    headerStyle.display = 'inline-block';
	                }
	                const renderCheck = () => {
	                    return (createElement("label", { className: "gn-checkbox is-no-padding", style: { width: '20px' } },
	                        createElement("input", { type: "checkbox", className: "is-allChecker", "on-click": (e) => {
	                                this._hidden.checkAll.call(this, e);
	                            }, disabled: this.$options.disabled })));
	                };
	                return (createElement("div", { style: headerStyle, className: 'gn-datagrid-header-cell ' +
	                        (column.className ? column.className : '') +
	                        (column.sort ? ' is-' + column.sort : '') +
	                        (column.sortable ? ' is-sortable' : '') +
	                        (column.isHidden ? ' is-unvisible' : ''), "on-click": column.sortable &&
	                        ((e) => {
	                            !this.$options.disabled && this._hidden.sort.call(this, column, e);
	                        }), title: column.label ? column.label : '' },
	                    idx === 0 && this.$options.hasCheck && renderCheck(),
	                    createElement("span", { className: "gn-grid-cell" }, column.label),
	                    column.sortable && createElement("span", { className: "is-sortDir" }),
	                    column.draggable && createElement("span", { className: "is-handle", "data-index": idx })));
	            },
	            renderBody: (data, columns) => {
	                rowIdx$1 = 0;
	                return (createElement("div", { className: "gn-datagrid-body", style: {
	                        maxHeight: this.$options.bodyHeight ? this.$options.bodyHeight : 'auto'
	                    } }, (data === null || data === void 0 ? void 0 : data.length) ? this._hidden.renderRows(data, columns) : this._hidden.renderNodata()));
	            },
	            renderRows: (rows, columns, depth = 0, isOpen = false) => {
	                return rows.map((row) => {
	                    return row[this.$options.childField] && isArray$1(row[this.$options.childField])
	                        ? [this._hidden.renderRow(row, columns, depth, true, isOpen), this._hidden.renderRows(row[this.$options.childField], columns, depth + 1, row.isOpened)]
	                        : this._hidden.renderRow(row, columns, depth, false, isOpen);
	                });
	            },
	            renderRow: (row, columns, depth = 0, hasChild, isOpened, isCheck = false) => {
	                row._depth = depth;
	                const _index = rowIdx$1++;
	                if (row.isChecked) {
	                    isCheck = true;
	                }
	                return (createElement("div", { "on-click": (e) => {
	                        !this.$options.disabled && this._hidden.selectRow.call(this, row, _index, e);
	                    }, "on-dblclick": (e) => {
	                        !this.$options.disabled && this._hidden.doubleSelect.call(this, row, _index, e);
	                    }, className: 'gn-datagrid-body-row' + (hasChild ? ' has-child' : '') + (row.isOpened ? '' : ' is-collapsed') + (depth > 0 && !isOpened ? ' is-hidden' : '') + (row.color ? ` ${row.color}` : ''), "data-depth": depth }, columns.map((col, idx) => {
	                    const cellStyle = {};
	                    if (col.style) {
	                        each(col.style, (value, key) => {
	                            if (key === 'width') {
	                                cellStyle['max-width'] = value;
	                                cellStyle.width = value;
	                                cellStyle['min-width'] = value;
	                            }
	                            else {
	                                cellStyle[key] = value;
	                            }
	                        });
	                    }
	                    if (idx === 0 && depth !== 0) {
	                        cellStyle.paddingLeft = depth * 15 + 10 + 'px';
	                    }
	                    if (isIE) {
	                        cellStyle.display = 'inline-block';
	                    }
	                    if (col.key === 'btnOrder') {
	                        cellStyle.display = 'flex';
	                        cellStyle.padding = '0';
	                        cellStyle['justify-content'] = 'space-evenly';
	                        cellStyle['align-items'] = 'center';
	                        return (createElement("div", { className: 'gn-datagrid-body-cell btn-container ' + (col.key ? col.key : ''), style: cellStyle, "on-click": (e) => {
	                                this._hidden.stopRowSelectEvent(e);
	                            } },
	                            createElement("span", { className: 'gn-icon btn-order ' + (_index == 0 ? 'is-cancel' : 'is-info'), "on-click": () => {
	                                    !this.$options.disabled && this._hidden.moveRowUp.call(this, _index);
	                                } },
	                                createElement("i", { className: "fas fa-arrow-circle-up" })),
	                            createElement("span", { className: 'gn-icon btn-order ' + (_index == this.$options.data.length - 1 ? 'is-cancel' : 'is-info'), "on-click": () => {
	                                    !this.$options.disabled && this._hidden.moveRowDown.call(this, _index);
	                                } },
	                                createElement("i", { className: "fas fa-arrow-circle-down" }))));
	                    }
	                    if (col.key === 'btnDelete') {
	                        cellStyle.display = 'flex';
	                        cellStyle['justify-content'] = 'center';
	                        cellStyle['align-items'] = 'center';
	                        return (createElement("div", { className: 'gn-datagrid-body-cell btn-container ' + (col.key ? col.key : ''), style: cellStyle, "on-click": (e) => {
	                                this._hidden.stopRowSelectEvent(e);
	                            } },
	                            createElement("span", { className: "gn-icon is-small ", "on-click": () => {
	                                    !this.$options.disabled && this._hidden.deleteRow.call(this, _index);
	                                } },
	                                createElement("i", { className: "fas fa-trash" }))));
	                    }
	                    return (createElement("div", { className: 'gn-datagrid-body-cell ' +
	                            (col.bodyClass ? col.bodyClass : col.className ? col.className : '') +
	                            (isFunction(col.onSelect) ? ' is-selectable' : '') +
	                            (col.isHidden ? ' is-unvisible' : ''), style: cellStyle, "on-click": (e) => {
	                            !this.$options.disabled && this._hidden.selectCell.call(this, col, row, _index, e);
	                        }, "on-mouseenter": (e) => {
	                            !this.$options.disabled && this._hidden.hoverCell.call(this, col, row, _index, e);
	                        }, "on-mouseleave": (e) => {
	                            this._hidden.blurCell.call(this, col, row, _index, e);
	                        }, title: col.tipField && row[col.tipField] ? row[col.tipField] : !col.template && row[col.key] ? row[col.key] : '' }, this._hidden.renderCell(row, col, idx, hasChild, isCheck)));
	                })));
	            },
	            renderCell: (row, col, idx, hasChild, isCheck) => {
	                return [
	                    idx === 0 && hasChild ? (createElement("span", { className: "is-toggler", "on-click": (e) => {
	                            !this.$options.disabled && this._hidden.toggle.call(this, row, e);
	                        } })) : (''),
	                    idx === 0 && this.$options.hasCheck && row.noCheck !== true && row.noCheck !== 'true' ? (createElement("label", { className: "gn-checkbox is-no-padding", style: { width: '20px' } },
	                        createElement("input", { type: "checkbox", className: "is-rowChecker", "on-click": (e) => {
	                                this._hidden.check.call(this, row, e);
	                            }, defaultChecked: isCheck, disabled: this.$options.disabled }))) : (''),
	                    col.template ? createElement("span", { className: "gn-grid-cell", innerHTML: col.template(col.key, row) }) : row[col.key] !== undefined ? row[col.key] : ''
	                ];
	            },
	            renderNodata: () => {
	                return (createElement("div", { className: "gn-datagrid-body-row is-nodata" },
	                    createElement("div", { className: "gn-datagrid-body-cell has-text-center" }, this.$options.textSets.noData)));
	            },
	            addChild: (index, addData) => {
	                if (!addData || !addData.length) {
	                    return;
	                }
	                const isRoot = index === null;
	                // index로 상위 row를 찾는다
	                let target = !isRoot ? find(`.gn-datagrid-body > .gn-datagrid-body-row:nth-child(${index * 1 + 1})`, this.$el) : find(`.gn-datagrid-body > .gn-datagrid-body-row:last-child`, this.$el);
	                // 추가되는 row depth를 상위 row의 depth + 1로 지정
	                const _depth = !isRoot ? data(target, 'depth') * 1 + 1 : data(target, 'depth') * 1;
	                const rowData = !isRoot ? this._hidden.findData(index) : last(this.$options.data);
	                let isChecker = false;
	                if (this.$options.hasCheck && this.$options.checkCapturing) {
	                    // 체크박스 옵션이 설정된 경우에 부모의 체크값 확인
	                    isChecker = !isRoot ? find('.is-rowChecker', target) : find('.is-allChecker', this.$el);
	                    if (isChecker) {
	                        isChecker = isChecker.checked;
	                    }
	                }
	                addData.forEach((nRow, idx) => {
	                    const newRow = document.createElement('div');
	                    addClass(newRow, 'gn-datagrid-body-row');
	                    if (isArray$1(rowData[this.$options.childField])) {
	                        rowData[this.$options.childField].splice(idx, 0, nRow);
	                    }
	                    else {
	                        rowData[this.$options.childField] = nRow;
	                    }
	                    after(target, newRow);
	                    this.$template.reRender(newRow, this._hidden.renderRow(nRow, this.$options.headers, _depth, nRow[this.$options.childField] && isArray$1(nRow[this.$options.childField]), true, isChecker));
	                    target = next(target);
	                });
	            },
	            expand: (index) => {
	                const target = find(`.gn-datagrid-body > .gn-datagrid-body-row:nth-child(${index * 1 + 1})`, this.$el);
	                const targetData = this._hidden.findData(index);
	                targetData[this.$options.childField] && this._hidden.toggle(targetData, target, 'expand');
	            },
	            collapse: (index) => {
	                const target = find(`.gn-datagrid-body > .gn-datagrid-body-row:nth-child(${index * 1 + 1})`, this.$el);
	                const targetData = this._hidden.findData(index);
	                targetData[this.$options.childField] && this._hidden.toggle(targetData, target, 'collapse');
	            },
	            toggle: (row, e, type) => {
	                let toggler = e;
	                if (!row) {
	                    return;
	                }
	                if (e instanceof MouseEvent) {
	                    e.stopPropagation();
	                    toggler = parents(e.currentTarget, '.gn-datagrid-body-row');
	                }
	                const children = nextUntil(toggler, '.gn-datagrid-body-row[data-depth="' + row._depth + '"]').filter((x) => {
	                    return x.dataset.depth > row._depth;
	                });
	                type = type ? type : hasClass(toggler, 'is-collapsed') ? 'expand' : 'collapse';
	                if (type === 'collapse') {
	                    addClass(toggler, 'is-collapsed');
	                    //hide childs
	                    addClass(children, 'is-hidden');
	                    addClass(children.filter((x) => {
	                        return hasClass(x, 'has-child');
	                    }), 'is-collapsed');
	                    this.$options.onToggle && this.$options.onToggle.call(this, 'collapsed', row, index$1(toggler));
	                }
	                else {
	                    //show childs
	                    removeClass(toggler, 'is-collapsed');
	                    removeClass(children.filter((x) => {
	                        return x.dataset.depth == row._depth + 1;
	                    }), 'is-hidden');
	                    this.$options.onToggle && this.$options.onToggle.call(this, 'expanded', row, index$1(toggler));
	                }
	            },
	            checkAll: (e) => {
	                e.stopPropagation();
	                findAll('.is-rowChecker', this.$el).forEach((c) => {
	                    c.checked = e.target.checked;
	                });
	                this.$options.onCheckAll && this.$options.onCheckAll.call(this, e.target.checked);
	            },
	            showDetail(index, headerKeys) {
	                const row = find(`.gn-datagrid-body > .gn-datagrid-body-row:nth-child(${index * 1 + 1})`, this.$el);
	                if (next(row) && hasClass(next(row), 'gn-datagrid-body-row-detail')) {
	                    remove(next(row));
	                    return;
	                }
	                const rowData = this.$options.data[index];
	                const newRow = document.createElement('div');
	                addClass(newRow, 'gn-datagrid-body-row-detail');
	                const htmlContent = this.$options.headers.reduce((prev, next) => {
	                    if (!headerKeys || headerKeys.includes(next.key)) {
	                        const rowContent = next.template ? `<dd>${next.template(next.key, rowData)}</dd>` : `<dd>${rowData[next.key] || ''}</dd>`;
	                        return prev + `<dl class="gn-list is-arrange is-borderless"><dt>${next.label}</dt>${rowContent}</dl>`;
	                    }
	                    return prev;
	                }, '');
	                html(newRow, htmlContent);
	                after(row, newRow);
	            },
	            check: (row, e) => {
	                e.stopPropagation();
	                const checker = parents(e.currentTarget, '.gn-datagrid-body-row');
	                const checkerState = e.target.checked;
	                find('.is-allChecker', this.$el).checked = false;
	                // 1. row에 자식노드가 있는지 확인한다.
	                if (this.$options.checkCapturing && row[this.$options.childField] && row[this.$options.childField].length) {
	                    // 2. 자식노드가 있는경우 자식 체크박스도 함께 토글한다.
	                    nextUntil(checker, '.gn-datagrid-body-row[data-depth="' + row._depth + '"]')
	                        .filter((x) => {
	                        return x.dataset.depth > row._depth;
	                    })
	                        .forEach((x) => {
	                        const _checker = find('.is-rowChecker', x);
	                        if (_checker) {
	                            _checker.checked = e.target.checked;
	                        }
	                    });
	                }
	                // 3. 체크 해제인 경우만 부모노드가 있는지 확인한다.
	                if (this.$options.checkCapturing && row._depth > 0 && !checkerState) {
	                    // 4. 부모노드가 체크되어 있는지 확인한다
	                    const exeDepth = [];
	                    prevUntil(checker, '.gn-datagrid-body-row[data-depth="0"]')
	                        .filter((x) => {
	                        const _thisDepth = x.dataset.depth;
	                        if (exeDepth.includes(_thisDepth)) {
	                            return false;
	                        }
	                        exeDepth.push(_thisDepth);
	                        return _thisDepth < row._depth;
	                    })
	                        .forEach((x) => {
	                        const _checker = find('.is-rowChecker', x);
	                        if (_checker) {
	                            _checker.checked = checkerState;
	                        }
	                    });
	                }
	                this.$options.onCheck && this.$options.onCheck.call(this, row, e);
	            },
	            reRender: ({ headers, data, hasCheck }) => {
	                return new Promise(resolve => {
	                    if (hasCheck === undefined) {
	                        hasCheck = this.$options.hasCheck;
	                    }
	                    this.$options.headers = headers;
	                    this.$options.hasCheck = hasCheck;
	                    this.$template.reRender(find('.gn-datagrid-header-row', this.$el), this._hidden.renderHeader(this.$options.headers));
	                    this._hidden.resetData(data ? data.slice() : this.$options.data);
	                    this.$render(this.$options);
	                    isFunction(resolve) && resolve();
	                });
	            },
	            resetData: (data) => {
	                return new Promise(resolve => {
	                    this.$options.data = data;
	                    Array.isArray(data) && data.some((d) => isArray$1(d[this.$options.childField])) ? addClass(this.$el, 'has-left-padding') : removeClass(this.$el, 'has-left-padding');
	                    this.$template.reRender(find('.gn-datagrid-body', this.$el), this._hidden.renderBody(this.$options.data, this.$options.headers));
	                    if (this.$options.fixHeader || this.$options.bodyHeight) {
	                        this._hidden.setBlankHeader();
	                    }
	                    // 체크박스가 있는경우 전체 체크항목을 해제해준다
	                    if (this.$options.hasCheck) {
	                        find('.is-allChecker', this.$el).checked = false;
	                    }
	                    isFunction(resolve) && resolve();
	                });
	            },
	            selectRow: (row, index, e) => {
	                if (this.$options.onSelect) {
	                    if (e) {
	                        e.currentTarget;
	                    }
	                    else {
	                        const rows = findAll('.gn-datagrid-body-row', this.$el);
	                        rows[index];
	                    }
	                    const ClickTrigger = this.$options.onSelect.bind(this, row, index);
	                    _EventTimer$1 = setTimeout(() => {
	                        if (!_EventPrevent) {
	                            ClickTrigger();
	                        }
	                        _EventPrevent = false;
	                    }, _EventDelay);
	                }
	            },
	            selectCell: (col, row, index, e) => {
	                if (isFunction(col.onSelect)) {
	                    col.onSelect.call(this, row, col, index, e);
	                }
	            },
	            stopRowSelectEvent: (e) => {
	                e.stopPropagation();
	            },
	            deleteRow: (index) => {
	                var _a;
	                this.$options.data = this.$options.data.filter((_data, idx) => index !== idx);
	                this._hidden.resetData(this.$options.data);
	                (_a = this.$options.onChange) === null || _a === void 0 ? void 0 : _a.call(this, this.$options.data);
	            },
	            moveRowUp: (index) => {
	                if (index == 0) {
	                    return;
	                }
	                this._hidden.switchRow(index, index - 1);
	            },
	            moveRowDown: (index) => {
	                if (index == this.$options.data.length - 1) {
	                    return;
	                }
	                this._hidden.switchRow(index, index + 1);
	            },
	            switchRow: (index1, index2) => {
	                var _a;
	                [this.$options.data[index2], this.$options.data[index1]] = [this.$options.data[index1], this.$options.data[index2]];
	                this._hidden.resetData(this.$options.data);
	                (_a = this.$options.onChange) === null || _a === void 0 ? void 0 : _a.call(this, this.$options.data);
	            },
	            doubleSelect: (row, index) => {
	                if (this.$options.onDoubleClick) {
	                    clearTimeout(_EventTimer$1);
	                    _EventPrevent = true;
	                    this.$options.onDoubleClick.call(this, row, index);
	                }
	            },
	            hoverCell: (col, row, index, e) => {
	                col.onHover && col.onHover.call(this, row, col, index, e);
	            },
	            blurCell: (col, row, index, e) => {
	                col.offHover && col.offHover.call(this, row, col, index, e);
	            },
	            findData: (index) => {
	                let deter = 0, indexData = null;
	                const findIndex = (datas, index) => {
	                    return datas.some((data) => {
	                        if (index === deter) {
	                            indexData = data;
	                            return true;
	                        }
	                        ++deter;
	                        if (isArray$1(data[this.$options.childField]) && data[this.$options.childField].length) {
	                            return findIndex(data[this.$options.childField], index);
	                        }
	                        return false;
	                    });
	                };
	                findIndex(this.$options.data, index);
	                return indexData;
	            },
	            getChecked: () => {
	                return findAll('.is-rowChecker', this.$el)
	                    .filter((checker) => {
	                    return checker.checked;
	                })
	                    .map((checker) => {
	                    return index$1(parents(checker, '.gn-datagrid-body-row').pop());
	                })
	                    .map((rowIdx) => {
	                    return this._hidden.findData(rowIdx);
	                });
	            },
	            hideCols: (keys) => {
	                const _visibles = [];
	                this.$options.headers.forEach((header) => {
	                    keys.includes(header.key) ? _visibles.push(false) : _visibles.push(true);
	                });
	                this._hidden.toggleCols(_visibles);
	            },
	            showCols: (keys) => {
	                const _visibles = [];
	                this.$options.headers.forEach((header) => {
	                    keys.includes(header.key) ? _visibles.push(true) : _visibles.push(false);
	                });
	                this._hidden.toggleCols(_visibles);
	            },
	            showAll: () => {
	                removeClass(findAll('.is-unvisible', this.$el), 'is-unvisible');
	            },
	            toggleCols: (visibles = []) => {
	                visibles.forEach((visible, index) => {
	                    const colNumber = index + 1;
	                    !visible
	                        ? addClass(findAll('.gn-datagrid-body-cell:nth-child(' + colNumber + ')', this.$el), 'is-unvisible')
	                        : removeClass(findAll('.gn-datagrid-body-cell:nth-child(' + colNumber + ')', this.$el), 'is-unvisible');
	                    !visible
	                        ? addClass(findAll('.gn-datagrid-header-cell:nth-child(' + colNumber + ')', this.$el), 'is-unvisible')
	                        : removeClass(findAll('.gn-datagrid-header-cell:nth-child(' + colNumber + ')', this.$el), 'is-unvisible');
	                });
	            },
	            setBlankHeader: () => {
	                // body영역에 스크롤이 생긴 경우 헤더의 우측에 여백이 생기도록 한다
	                const body = find('.gn-datagrid-body', this.$el);
	                body.scrollHeight > body.clientHeight ? addClass(this.$el, 'has-scroll') : removeClass(this.$el, 'has-scroll');
	            },
	            columnDragEvents: {
	                drag: (e, position, handle) => {
	                    const target = parents(handle, '.gn-datagrid-header-cell');
	                    const rowCells = findAll(`.gn-datagrid-body-row:not(.is-nodata) .gn-datagrid-body-cell:nth-child(${data(handle, 'index') * 1 + 1})`, this.$el);
	                    target &&
	                        styles(target[0], {
	                            'min-width': getUnit('minWidth', position.x + 5),
	                            width: getUnit('width', position.x + 5),
	                            'max-width': getUnit('maxWidth', position.x + 5)
	                        });
	                    rowCells &&
	                        rowCells.forEach((cell) => {
	                            styles(cell, {
	                                'min-width': getUnit('minWidth', position.x + 5),
	                                width: getUnit('width', position.x + 5),
	                                'max-width': getUnit('maxWidth', position.x + 5)
	                            });
	                        });
	                },
	                dragStart: () => { },
	                dragEnd: (e, handle) => {
	                    if (!this.$options.headers[data(handle, 'index')].style) {
	                        this.$options.headers[data(handle, 'index')].style = {};
	                    }
	                    this.$options.headers[data(handle, 'index')].style.width = getUnit('width', position(handle).left + 5);
	                    this.$options.headers[data(handle, 'index')].style['min-width'] = getUnit('minWidth', position(handle).left + 5);
	                    this.$options.headers[data(handle, 'index')].style['max-width'] = getUnit('maxWidth', position(handle).left + 5);
	                    this.$options.onDragEnd && this.$options.onDragEnd.call(this, this.$options.headers[data(handle, 'index')]);
	                }
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                attr(findAll('input', this.$el), 'disabled', true);
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeAttr(findAll('input', this.$el), 'disabled');
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            width: '100%',
	            hasCheck: false,
	            hasOrder: false,
	            hasDelete: false,
	            isEllipsis: false,
	            data: [],
	            textSets: {
	                noData: 'No records available.',
	                orderLabel: '',
	                deleteLabel: ''
	            },
	            childField: 'child',
	            checkCapturing: true
	        };
	        this.events = {
	            onSort: true,
	            onSelect: true,
	            onToggle: true,
	            onCheckAll: true,
	            onCheck: true,
	            onDoubleClick: true,
	            onChange: true
	        };
	        this.methods = {
	            reRender(options) {
	                return this._hidden.reRender(options);
	            },
	            resetData(data) {
	                return this._hidden.resetData(data === null || data === void 0 ? void 0 : data.slice());
	            },
	            addChild(index, data) {
	                this._hidden.addChild(index, data.slice());
	            },
	            addRow(data) {
	                this._hidden.addChild(null, data.slice());
	                this.$options.data = this.$options.data.concat(data);
	            },
	            expand(index) {
	                this._hidden.expand(index);
	            },
	            collapse(index) {
	                this._hidden.collapse(index);
	            },
	            getChecked() {
	                return this._hidden.getChecked();
	            },
	            hideCols(keys) {
	                this._hidden.hideCols(keys);
	            },
	            showCols(keys) {
	                this._hidden.showCols(keys);
	            },
	            showAll() {
	                this._hidden.showAll();
	            },
	            showDetail(index, headerKeys) {
	                this._hidden.showDetail.call(this, index, headerKeys);
	            },
	            selectRow(index, rowData) {
	                let row = rowData;
	                if (!row) {
	                    row = this.$options.data[index];
	                }
	                !this.$options.disable && this._hidden.selectRow(row, index);
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        return (createElement("div", { id: this._uid, className: 'gn-datagrid' +
	                (config.style ? ' is-' + config.style : '') +
	                (config.isEllipsis ? ' is-ellipsis' : '') +
	                (config.bodyHeight ? ' has-fixed-body' : '') +
	                (config.fixHeader ? ' has-fixed-header' : '') +
	                (config.data.some((d) => isArray$1(d[this.$options.childField])) ? ' has-left-padding' : '') +
	                (config.disabled ? ' is-disabled' : ''), style: styles },
	            createElement("div", { className: "gn-datagrid-header" }, this._hidden.renderHeader(config.headers)),
	            createElement("div", { className: "gn-datagrid-contents", style: { marginTop: this.$options.bodyTopMargin ? this.$options.bodyTopMargin : '0' } }, this._hidden.renderBody(config.data.slice(), config.headers))));
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $render(config) {
	        const handles = findAll('.is-handle', this.$el);
	        handles.forEach((handle) => {
	            dragLayout(handle, [0, 30, 0, window.innerWidth], this._hidden.columnDragEvents);
	        });
	        if (isIE) {
	            css(handles, 'display', 'none');
	        }
	        if (this.$options.onDoubleClick && this.$options.onSelect) {
	            console.warn('It is not desirable to bind handlers to both click events and dblick events for the same element.');
	        }
	    }
	    completed() {
	        if (this.$options.fixHeader) {
	            const body = find('.gn-datagrid-contents', this.$el);
	            const header = find('.gn-datagrid-header', this.$el);
	            const _offset = offset(header);
	            this.$options.bodyTopMargin = _offset.height ? _offset.height - 1 + 'px' : '2.4rem';
	            css(body, 'margin-top', this.$options.bodyTopMargin);
	        }
	        if (this.$options.fixHeader || this.$options.bodyHeight) {
	            this._hidden.setBlankHeader();
	            on(window, 'resize', this._hidden.setBlankHeader);
	        }
	    }
	}

	let rowIdx = 0;
	const _EventTimer = 0;
	class DataList extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            renderBody: (data, columns) => {
	                return (createElement("div", { className: "gn-datalist-body", style: {
	                        maxHeight: this.$options.bodyHeight ? this.$options.bodyHeight : 'auto'
	                    } }, data.length ? this._hidden.renderRows(data, columns) : this._hidden.renderNodata()));
	            },
	            renderRows: (rows, columns, depth = 0, isOpen = false) => {
	                return rows.map((row, idx) => {
	                    return row[this.$options.childField] && isArray$1(row[this.$options.childField])
	                        ? [this._hidden.renderRow(row, columns, idx, depth, true, isOpen), this._hidden.renderRows(row[this.$options.childField], columns, depth + 1, row.isOpened)]
	                        : this._hidden.renderRow(row, columns, idx, depth, false, isOpen);
	                });
	            },
	            renderRow: (row, columns, index, depth = 0, hasChild, isOpened) => {
	                row._depth = depth;
	                const _index = rowIdx++;
	                const btnUpdate = {
	                    icon: this.$options.readonly ? 'info-circle' : 'pen',
	                    color: (this.$options.readonly ? 'info' : 'cancel')
	                };
	                return (createElement("div", { "on-dblclick": (e) => {
	                        this._hidden.doubleSelect.call(this, row, _index, e);
	                    }, className: 'gn-datalist-body-row' + (hasChild ? ' has-child' : '') + (row.isOpened ? '' : ' is-collapsed') + (row.isSelectedRow ? ' is-active' : '') + (depth > 0 && !isOpened ? ' is-hidden' : ''), "data-depth": depth, style: { cursor: this.$options.onSelect ? 'pointer' : 'default' } },
	                    createElement("ol", { className: 'gn-datalist-ol-container' }, columns.map((col, idx) => {
	                        const cellStyle = {};
	                        if (col.style) {
	                            each(col.style, (value, key) => {
	                                if (key === 'width') {
	                                    cellStyle['max-width'] = value;
	                                    cellStyle.width = value;
	                                    cellStyle['min-width'] = value;
	                                }
	                                else {
	                                    cellStyle[key] = value;
	                                }
	                            });
	                        }
	                        if (idx === 0 && depth !== 0) {
	                            cellStyle.paddingLeft = depth * 15 + 10 + 'px';
	                        }
	                        if (isIE) {
	                            cellStyle.display = 'inline-block';
	                        }
	                        const isHiddenCell = (this.$options.isHiddenEmpty && row[col.key] === '') || col.isHidden;
	                        return (!isHiddenCell && (createElement("li", null,
	                            this._hidden.renderCol(col, idx),
	                            createElement("span", { className: 'gn-datalist-body-cell ' +
	                                    (col.bodyClass ? col.bodyClass : col.className ? col.className : '') +
	                                    (isFunction(col.onSelect) ? ' is-selectable' : '') +
	                                    (col.isHidden ? ' is-unvisible' : ''), style: cellStyle, "on-mouseenter": (e) => {
	                                    this._hidden.hoverCell.call(this, col, row, _index, e);
	                                }, "on-mouseleave": (e) => {
	                                    this._hidden.blurCell.call(this, col, row, _index, e);
	                                }, title: !col.template && row[col.key] ? row[col.key] : '' }, this._hidden.renderCell(row, col, idx, hasChild)))));
	                    })),
	                    createElement("div", { className: "gn-datalist-btn-container" },
	                        this.$options.hasUpdate
	                            ? this._hidden.renderBtn(btnUpdate.icon, btnUpdate.color, (_e) => {
	                                if (!this.$options.disabled && this.$options.onUpdate) {
	                                    this.$options.onUpdate.call(this, this.$options.data[index], index);
	                                    return;
	                                }
	                            })
	                            : '',
	                        !this.$options.readonly && this.$options.hasDelete
	                            ? this._hidden.renderBtn('trash', 'danger', (_e) => {
	                                !this.$options.disabled && this._hidden.deleteRow(+index);
	                            })
	                            : '')));
	            },
	            renderCol: (column, idx) => {
	                const headerStyle = {};
	                if (column.style) {
	                    each(column.style, (value, key) => {
	                        if (key === 'width') {
	                            headerStyle['max-width'] = value;
	                            headerStyle.width = value;
	                            headerStyle['min-width'] = value;
	                        }
	                        else {
	                            headerStyle[key] = value;
	                        }
	                    });
	                }
	                if (isIE) {
	                    headerStyle.display = 'inline-block';
	                }
	                return (createElement("strong", { style: headerStyle, className: 'gn-datalist-header-cell ' + (column.className ? column.className : '') + (column.isHidden ? ' is-unvisible' : ''), title: column.label ? column.label : '' },
	                    createElement("span", { className: "gn-grid-cell" }, column.label)));
	            },
	            renderCell: (row, col, idx, hasChild) => {
	                return [
	                    idx === 0 && hasChild ? (createElement("span", { className: "is-toggler", "on-click": (e) => {
	                            this._hidden.toggle.call(this, row, e);
	                        } })) : (''),
	                    col.template ? createElement("span", { className: "gn-grid-cell", innerHTML: col.template(col.key, row) }) : row[col.key] !== undefined ? row[col.key] : ''
	                ];
	            },
	            renderBtn: (iconName, color, clickHandler) => {
	                return (createElement("span", { className: 'gn-icon is-small ' + (color ? 'is-' + color : ''), "on-click": clickHandler },
	                    createElement("i", { className: 'fas fa-' + iconName })));
	            },
	            renderNodata: () => {
	                return (createElement("div", { className: "gn-datalist-body-row" },
	                    createElement("div", { className: "gn-datalist-body-cell has-text-center" }, this.$options.textSets.noData)));
	            },
	            addChild: (index, addData) => {
	                if (!addData || !addData.length) {
	                    return;
	                }
	                const isRoot = index === null;
	                // index로 상위 row를 찾는다
	                let target = !isRoot ? find(`.gn-datalist-body > .gn-datalist-body-row:nth-child(${index * 1 + 1})`, this.$el) : find(`.gn-datalist-body > .gn-datalist-body-row:last-child`, this.$el);
	                // 추가되는 row depth를 상위 row의 depth + 1로 지정
	                const _depth = !isRoot ? data(target, 'depth') * 1 + 1 : data(target, 'depth') * 1;
	                const rowData = !isRoot ? this._hidden.findData(index) : last(this.$options.data);
	                addData.forEach((nRow, idx) => {
	                    const newRow = document.createElement('div');
	                    addClass(newRow, 'gn-datalist-body-row');
	                    if (isArray$1(rowData[this.$options.childField])) {
	                        rowData[this.$options.childField].splice(idx, 0, nRow);
	                    }
	                    else {
	                        rowData[this.$options.childField] = nRow;
	                    }
	                    after(target, newRow);
	                    this.$template.reRender(newRow, this._hidden.renderRow(nRow, this.$options.headers, idx, _depth, nRow[this.$options.childField] && isArray$1(nRow[this.$options.childField]), true));
	                    target = next(target);
	                });
	            },
	            expand: (index) => {
	                const target = find(`.gn-datalist-body > .gn-datalist-body-row:nth-child(${index * 1 + 1})`, this.$el);
	                const targetData = this._hidden.findData(index);
	                targetData[this.$options.childField] && this._hidden.toggle(targetData, target, 'expand');
	            },
	            collapse: (index) => {
	                const target = find(`.gn-datalist-body > .gn-datalist-body-row:nth-child(${index * 1 + 1})`, this.$el);
	                const targetData = this._hidden.findData(index);
	                targetData[this.$options.childField] && this._hidden.toggle(targetData, target, 'collapse');
	            },
	            toggle: (row, e, type) => {
	                let toggler = e;
	                if (!row) {
	                    return;
	                }
	                if (e instanceof MouseEvent) {
	                    e.stopPropagation();
	                    toggler = parents(e.currentTarget, '.gn-datalist-body-row');
	                }
	                const children = nextUntil(toggler, '.gn-datalist-body-row[data-depth="' + row._depth + '"]').filter((x) => {
	                    return x.dataset.depth > row._depth;
	                });
	                type = type ? type : hasClass(toggler, 'is-collapsed') ? 'expand' : 'collapse';
	                if (type === 'collapse') {
	                    addClass(toggler, 'is-collapsed');
	                    //hide childs
	                    addClass(children, 'is-hidden');
	                    addClass(children.filter((x) => {
	                        return hasClass(x, 'has-child');
	                    }), 'is-collapsed');
	                    this.$options.onToggle && this.$options.onToggle.call(this, 'collapsed', row, index$1(toggler));
	                }
	                else {
	                    //show childs
	                    removeClass(toggler, 'is-collapsed');
	                    removeClass(children.filter((x) => {
	                        return x.dataset.depth == row._depth + 1;
	                    }), 'is-hidden');
	                    this.$options.onToggle && this.$options.onToggle.call(this, 'expanded', row, index$1(toggler));
	                }
	            },
	            reRender: ({ headers, data }) => {
	                return new Promise(resolve => {
	                    this.$options.headers = headers;
	                    this._hidden.resetData(data ? data.slice() : this.$options.data);
	                    isFunction(resolve) && resolve();
	                });
	            },
	            resetData: (data) => {
	                return new Promise(resolve => {
	                    this.$options.data = data;
	                    data.some((d) => isArray$1(d[this.$options.childField])) ? addClass(this.$el, 'has-left-padding') : removeClass(this.$el, 'has-left-padding');
	                    this.$template.reRender(find('.gn-datalist-body', this.$el), this._hidden.renderBody(this.$options.data, this.$options.headers));
	                    isFunction(resolve) && resolve();
	                });
	            },
	            doubleSelect: (row, index) => {
	                if (this.$options.onDoubleClick) {
	                    clearTimeout(_EventTimer);
	                    this.$options.onDoubleClick.call(this, row, index);
	                }
	            },
	            hoverCell: (col, row, index, e) => {
	                col.onHover && col.onHover.call(this, row, col, index, e);
	            },
	            blurCell: (col, row, index, e) => {
	                col.offHover && col.offHover.call(this, row, col, index, e);
	            },
	            findData: (index) => {
	                let deter = 0, indexData = null;
	                const findIndex = (datas, index) => {
	                    return datas.some((data) => {
	                        if (index === deter) {
	                            indexData = data;
	                            return true;
	                        }
	                        ++deter;
	                        if (isArray$1(data[this.$options.childField]) && data[this.$options.childField].length) {
	                            return findIndex(data[this.$options.childField], index);
	                        }
	                        return false;
	                    });
	                };
	                findIndex(this.$options.data, index);
	                return indexData;
	            },
	            hideCols: (keys) => {
	                const _visibles = [];
	                this.$options.headers.forEach((header) => {
	                    keys.includes(header.key) ? _visibles.push(false) : _visibles.push(true);
	                });
	                this._hidden.toggleCols(_visibles);
	            },
	            showCols: (keys) => {
	                const _visibles = [];
	                this.$options.headers.forEach((header) => {
	                    keys.includes(header.key) ? _visibles.push(true) : _visibles.push(false);
	                });
	                this._hidden.toggleCols(_visibles);
	            },
	            showAll: () => {
	                removeClass(findAll('.is-unvisible', this.$el), 'is-unvisible');
	            },
	            toggleCols: (visibles = []) => {
	                visibles.forEach((visible, index) => {
	                    const colNumber = index + 1;
	                    !visible
	                        ? addClass(findAll('.gn-datalist-body-cell:nth-child(' + colNumber + ')', this.$el), 'is-unvisible')
	                        : removeClass(findAll('.gn-datalist-body-cell:nth-child(' + colNumber + ')', this.$el), 'is-unvisible');
	                    !visible
	                        ? addClass(findAll('.gn-datalist-header-cell:nth-child(' + colNumber + ')', this.$el), 'is-unvisible')
	                        : removeClass(findAll('.gn-datalist-header-cell:nth-child(' + colNumber + ')', this.$el), 'is-unvisible');
	                });
	            },
	            deleteRow: (index) => {
	                var _a;
	                this.$options.data.splice(index, 1);
	                this._hidden.resetData(this.$options.data);
	                (_a = this.$options.onChange) === null || _a === void 0 ? void 0 : _a.call(this, this.$options.data);
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            width: '100%',
	            hasUpdate: false,
	            hasDelete: false,
	            isEllipsis: false,
	            data: [],
	            textSets: {
	                noData: 'No records available.'
	            },
	            childField: 'child',
	            isHiddenEmpty: false
	        };
	        this.events = {
	            onSelect: true,
	            onToggle: true,
	            onDoubleClick: true,
	            onUpdate: true,
	            onDelete: true,
	            onChange: true
	        };
	        this.methods = {
	            reRender(options) {
	                return this._hidden.reRender(options);
	            },
	            resetData(data) {
	                return this._hidden.resetData(data.slice());
	            },
	            addChild(index, data) {
	                this._hidden.addChild(index, data.slice());
	            },
	            addRow(data) {
	                if (data) {
	                    this.$options.data = this.$options.data.concat(data);
	                    this._hidden.resetData(this.$options.data);
	                }
	            },
	            expand(index) {
	                this._hidden.expand(index);
	            },
	            collapse(index) {
	                this._hidden.collapse(index);
	            },
	            hideCols(keys) {
	                this._hidden.hideCols(keys);
	            },
	            showCols(keys) {
	                this._hidden.showCols(keys);
	            },
	            showAll() {
	                this._hidden.showAll();
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        return (createElement("div", { id: this._uid, className: 'gn-datalist' +
	                (config.style ? ' is-' + config.style : '') +
	                (config.isEllipsis ? ' is-ellipsis' : '') +
	                (config.bodyHeight ? ' has-fixed-body' : '') +
	                (config.data.some((d) => isArray$1(d[this.$options.childField])) ? ' has-left-padding' : ''), style: styles },
	            createElement("div", { className: "gn-datalist-contents", style: { marginTop: this.$options.bodyTopMargin ? this.$options.bodyTopMargin : '0' } }, this._hidden.renderBody(config.data.slice(), config.headers))));
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $render(config) { }
	    completed() { }
	}

	class Growl extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            out: () => {
	                // eslint-disable-next-line @typescript-eslint/no-this-alias
	                const closerThis = this;
	                const clearTimer = setTimeout(function () {
	                    fadeout(closerThis.$el, 500);
	                    clearTimeout(clearTimer);
	                    const closeTimer = setTimeout(function () {
	                        closerThis.$destroy(closerThis, true);
	                        clearTimeout(closeTimer);
	                    }, 500);
	                }, closerThis.$options.duration);
	            }
	        };
	        this.config = {
	            textSets: {
	                message: this.$selector ? this.$selector.textContent : ''
	            },
	            width: 400,
	            duration: 1000,
	            positionX: 'center',
	            positionY: 'center'
	        };
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        if (config.width) {
	            /* inline style이 필요한 경우는 이렇게 사용 */
	            styles.width = getUnit('width', config.width);
	        }
	        return (createElement("div", { id: this._uid, className: 'gn-growl' +
	                (config.color ? ' is-' + config.color : '') /* 색상 클래스 추가 */ +
	                (config.style ? ' is-' + config.style : '') /* 스타일 클래스 추가 */ +
	                (config.icon ? ' has-arrange' : '') /* 스타일 클래스 추가 */ +
	                (config.size ? ' is-' + config.size : ''), 
	            /* 크기 클래스 추가 */ style: styles },
	            config.icon ? (createElement("span", { className: "gn-icon is-normal" },
	                createElement("i", { className: 'fas fa-' + config.icon }))) : (''),
	            createElement("p", { innerHTML: config.textSets.message })));
	    }
	    beforeMount() {
	        if (!this.$selector) {
	            const container = $('.gn-growl-container.pos-' + this.$options.positionX + '-' + this.$options.positionY);
	            !container && append(document.body, $('<div class="gn-growl-container pos-' + this.$options.positionX + '-' + this.$options.positionY + '"></div>'));
	            append($('.gn-growl-container.pos-' + this.$options.positionX + '-' + this.$options.positionY), $(`<div id="${this._uid}"></div>`));
	            this.$selector = $(`#${this._uid}`);
	        }
	        if (this.$options.type) {
	            switch (this.$options.type) {
	                // type이 설정된 경우, 색상과 아이콘을 반영한다.
	                case 'error':
	                case 'danger':
	                    this.$options.color = 'danger';
	                    this.$options.icon = 'exclamation-triangle';
	                    break;
	                case 'warning':
	                    this.$options.color = 'warning';
	                    this.$options.icon = 'exclamation-circle';
	                    break;
	                case 'success':
	                    this.$options.color = 'success';
	                    this.$options.icon = 'check';
	                    break;
	                case 'info':
	                    this.$options.color = 'info';
	                    this.$options.icon = 'info-circle';
	                    break;
	                case 'guide':
	                    this.$options.color = 'guide';
	                    this.$options.icon = 'info-circle';
	                    break;
	            }
	        }
	    }
	    completed() {
	        this._hidden.out();
	    }
	    destroyed() {
	        const container = $('.gn-growl-container.pos-' + this.$options.positionX + '-' + this.$options.positionY);
	        if (!container.childElementCount) {
	            remove(container);
	        }
	    }
	}

	class Modal extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            close: () => {
	                removeStyle(document.body, 'position');
	                removeStyle(document.body, 'top');
	                removeStyle(document.body, 'width');
	                window.scrollTo(0, this.scrollPosition);
	                this.$event(this, 'onClose');
	                this.$options.autoDestroy ? this.$destroy(this) : this._hidden.hide();
	            },
	            confirm: () => {
	                this.$event(this, 'onConfirm');
	            },
	            hide: () => {
	                removeClass(this.$el, 'is-active');
	            },
	            show: () => {
	                this.scrollPosition = window.scrollY;
	                if (this.$options.isModal) {
	                    css(document.body, 'position', 'fixed');
	                    css(document.body, 'top', `-${this.scrollPosition}px`);
	                    css(document.body, 'width', '100%');
	                }
	                addClass(this.$el, 'is-active');
	                const modal = find('.modal-content', this.$el);
	                if (this.$options.resizable && css(modal, 'transform') !== 'none') {
	                    css(modal, 'transform', 'none');
	                    css(modal, 'left', getPositionX(modal, false));
	                    css(modal, 'top', getPositionY(modal, false));
	                }
	                this.$event(this, 'onOpen');
	            },
	            toggle: () => {
	                toggleClass(this.$el, 'is-minimized');
	            },
	            focus: () => {
	                const modal = find('.modal-content', this.$el);
	                modal.focus();
	            }
	        };
	        this.config = {
	            textSets: {
	                title: '',
	                confirm: '확인',
	                cancel: '취소'
	            },
	            sizeSets: {
	                confirm: 'normal',
	                cancel: 'normal'
	            },
	            contents: '',
	            width: 400,
	            hasClose: true,
	            hasConfirm: false,
	            hasCancel: false,
	            isModal: true,
	            minimized: false,
	            resizable: false,
	            draggable: false,
	            autoShow: true,
	            autoDestroy: true
	        };
	        this.events = {
	            onClose: true,
	            onConfirm: true,
	            onOpen: true
	        };
	        this.methods = {
	            close() {
	                this._hidden.close();
	            },
	            show() {
	                this._hidden.show();
	            },
	            focus() {
	                this._hidden.focus();
	            }
	        };
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        const contStyles = {};
	        if (config.width) {
	            styles.width = getUnit('width', config.width);
	        }
	        if (config.height) {
	            styles.height = getUnit('height', config.height);
	        }
	        if (config.padding) {
	            contStyles.padding = getUnit('padding', config.padding);
	        }
	        return (createElement("div", { id: this._uid, className: "gn-modal" },
	            config.isModal && createElement("div", { className: "modal-mask" }),
	            createElement("div", { className: "modal-content" },
	                (config.textSets.title || config.minimized || config.hasClose || config.draggable || config.icon) && (createElement("div", { className: 'modal-header' + (config.color ? ' is-' + config.color : '') + (config.draggable ? ' is-draggable' : '') },
	                    createElement("h3", null,
	                        config.icon && (createElement("span", { className: "gn-icon is-normal" },
	                            createElement("i", { className: 'fas fa-' + config.icon }))),
	                        config.textSets.title),
	                    createElement("div", { className: "modal-control" },
	                        config.minimized && (createElement("span", { className: "gn-icon is-small is-minimize", "on-click": this._hidden.toggle },
	                            createElement("i", { className: "fas" }))),
	                        config.hasClose && (createElement("span", { className: "gn-icon is-close", "on-click": this._hidden.close },
	                            createElement("i", { className: "fas fa-times" })))))),
	                createElement("div", { className: "modal-body", style: styles },
	                    createElement("div", { className: "modal-body-content", style: contStyles })),
	                (config.hasConfirm || config.hasCancel) /* 확인/취소 옵션 확인 */ && (createElement("div", { className: "modal-footer has-text-center" },
	                    config.hasConfirm && (createElement("button", { type: "button", className: 'gn-button' + ` is-${config.sizeSets.confirm}`, "on-click": this._hidden.confirm }, config.textSets.confirm)),
	                    config.hasCancel && (createElement("button", { type: "button", className: 'gn-button btnCloseModal is-cancel' + ` is-${config.sizeSets.cancel}`, "on-click": this._hidden.close }, config.textSets.cancel)))))));
	    }
	    $render(config) {
	        if (config.contents) {
	            if (config.contents.sel !== undefined) {
	                append(find('.modal-body-content', this.$el), $('<div class="temp-node"></div>'));
	                this.$template.reRender(find('.temp-node', this.$el), config.contents);
	            }
	            else {
	                append(find('.modal-body-content', this.$el), $(config.contents));
	            }
	        }
	        if (config.draggable) {
	            const modal = find('.modal-content', this.$el);
	            attr(modal, 'tabindex', '-1');
	            drag(modal, {
	                dragStart: () => {
	                    modal.focus();
	                }
	            });
	        }
	    }
	    beforeMount() {
	        if (!this.$selector) {
	            append(document.body, $(`<div id="${this._uid}"></div>`));
	            this.$selector = $(`#${this._uid}`);
	        }
	        if (this.$options.color) {
	            if (!GN_CONSTANT.COLOR_SET.includes(this.$options.color)) {
	                this.$options.color = '';
	            }
	        }
	    }
	    completed() {
	        if (this.$options.resizable) {
	            resize(find('.modal-body', this.$el), [100, 160, window.screen.availHeight, window.screen.availWidth]);
	        }
	        this.$options.autoShow && this._hidden.show();
	    }
	}

	class Tooltip extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            show: () => {
	                this._hidden.setPosition();
	                addClass(this.$el, 'is-active');
	            },
	            hide: () => {
	                removeClass(this.$el, 'is-active');
	            },
	            toggle: () => {
	                hasClass(this.$el, 'is-active') ? this._hidden.hide() : this._hidden.show();
	            },
	            setPosition: () => {
	                let _position = {
	                    top: 0,
	                    left: 0
	                };
	                const _offset = offset(this.$options.delegates.trigger);
	                const width = _offset.width, height = _offset.height;
	                if (this.$options.delegates.trigger) {
	                    _position.top = _offset.top;
	                    _position.left = _offset.left;
	                }
	                const _bodyTop = getNumber(css(document.body, 'top'));
	                if (css(document.body, 'overflow') == 'hidden' && _bodyTop !== 0) {
	                    _position.top += _bodyTop * -1;
	                }
	                switch (this.$options.direction) {
	                    case 'top':
	                        _position = {
	                            left: (_position.left += width / 2) + 'px',
	                            top: (_position.top -= 10) + 'px'
	                        };
	                        break;
	                    case 'bottom':
	                        _position = {
	                            left: (_position.left += width / 2) + 'px',
	                            top: (_position.top += height + 10) + 'px'
	                        };
	                        break;
	                    case 'right':
	                        _position = {
	                            left: (_position.left += width + 10) + 'px',
	                            top: (_position.top += height / 2) + 'px'
	                        };
	                        break;
	                    case 'left':
	                        _position = {
	                            left: (_position.left -= 10) + 'px',
	                            top: (_position.top += height / 2) + 'px'
	                        };
	                        break;
	                    case 'left-top':
	                        _position = {
	                            left: (_position.left -= 10) + 'px',
	                            top: (_position.top += height) + 'px'
	                        };
	                        break;
	                    case 'left-bottom':
	                        _position = {
	                            left: (_position.left -= 10) + 'px',
	                            top: _position.top + 'px'
	                        };
	                        break;
	                    case 'right-top':
	                        _position = {
	                            left: (_position.left += width + 10) + 'px',
	                            top: (_position.top += height) + 'px'
	                        };
	                        break;
	                    case 'right-bottom':
	                        _position = {
	                            left: (_position.left += width + 10) + 'px',
	                            top: _position.top + 'px'
	                        };
	                        break;
	                }
	                css(this.$el, _position);
	            },
	            reRender: (newContents) => {
	                this.$options.contents = newContents;
	                if ($(newContents)) {
	                    this.$el.innerHTML = '';
	                    append(this.$el, $(newContents));
	                }
	                else if (newContents) {
	                    this.$el.innerHTML = newContents;
	                }
	            }
	        };
	        this.config = {
	            direction: 'bottom',
	            delegates: {
	                trigger: undefined
	            },
	            type: 'hover'
	        };
	        this.methods = {
	            show() {
	                this._hidden.show();
	            },
	            hide() {
	                this._hidden.hide();
	            },
	            setContents(newContents) {
	                this.$options.contents = newContents;
	                this._hidden.reRender.call(null, newContents);
	            }
	        };
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        if (config.width) {
	            styles.width = getUnit('width', config.width);
	        }
	        return config.template ? (createElement("div", { id: this._uid, className: 'gn-tooltip' + (' is-' + config.direction) + (config.color ? ' is-' + config.color : ''), style: styles }, config.template)) : (createElement("div", { id: this._uid, className: 'gn-tooltip' + (' is-' + config.direction) + (config.color ? ' is-' + config.color : ''), style: styles, innerHTML: config.contents }));
	    }
	    beforeMount() {
	        const popper = $(`<div id="${this._uid}"></div>`);
	        append(document.body, popper);
	        if (style(this.$selector, 'position') === 'static') {
	            style(this.$selector, 'position', 'relative');
	        }
	        this.config.delegates.trigger = this.$selector;
	        // trigger element 에 대해 종속성을 표시한다.
	        attr(this.config.delegates.trigger, 'data-gnui', this._uid);
	        this.$selector = popper;
	        if (this.$options.type === 'hover') {
	            this.$bind(this, {
	                show: {
	                    name: 'mouseenter',
	                    delegate: this.$options.delegates.trigger,
	                    handler: () => {
	                        this._hidden.show.call(this);
	                    }
	                },
	                hide: {
	                    name: 'mouseleave',
	                    delegate: this.$options.delegates.trigger,
	                    handler: () => {
	                        this._hidden.hide.call(this);
	                    }
	                }
	            });
	        }
	        if (this.$options.type === 'click') {
	            this.$bind(this, {
	                toggle: {
	                    name: 'click',
	                    delegate: this.$options.delegates.trigger,
	                    handler: () => {
	                        this._hidden.toggle.call(this);
	                    }
	                }
	            });
	        }
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $render(config) {
	        const $contents = $(config.contents);
	        if (!isHtml(config.contents) && isElement$2($contents)) {
	            empty(this.$el);
	            append(this.$el, $contents);
	        }
	    }
	}

	const JsonPath = JSONPath;
	const SortIconList = ['sort', 'sort-up', 'sort-down', 'sort'];
	class JsonView extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this.subCharts = {};
	        this.subTooltips = {};
	        this.subCheckboxs = {};
	        this.sortIndex = 0;
	        this._hidden = {
	            reRender: (data, schema) => {
	                this.$template.reRender(find('.jsonview-contents', this.$el), createElement("div", { className: "jsonview-contents" }, schema ? this._hidden.render(data, schema) : this._hidden.renderRaw(data)));
	            },
	            render: (data, schema, parent, key) => {
	                return !!schema // 스키마가 있는경우만 처리
	                    ? this._hidden.renderSub(data, schema, parent, key)
	                    : this._hidden.renderRaw(data); // 스키마 없음
	            },
	            renderSub: (data, schema, parent, key) => {
	                return schema.Type === 'object' || // 타입이 오브젝트이거나
	                    (isArray$1(schema.Type) && schema.Type.includes('object') && isPlainObject$1(data)) // 타입에 오브젝트가 포함되고, 데이터가 오브젝트인 경우
	                    ? this._hidden.objView(data, schema)
	                    : schema.Type === 'array' || // 타입이 배열이거나
	                        (isArray$1(schema.Type) && schema.Type.includes('array') && isArray$1(data)) // 타입에 배열가 포함되고, 데이터가 배열인 경우
	                        ? schema.Items.Type === 'object' // 오브젝트 배열인 경우
	                            ? this._hidden.gridView(data, schema.Items) // 그리드 형식으로 출력
	                            : // : !schema.Items.Type && schema.Items.$ref
	                                // ? this._hidden.defView(data, schema, parent)
	                                this._hidden.arrayView(data, schema.Items) // 일반 배열 형식으로 출력
	                        : // : !schema.Type && schema.$ref
	                            // ? this._hidden.defView(data, schema, parent) // $def, $ref 설정 시
	                            this._hidden.valueView(data, schema, parent, key); // 문자열, 숫자...etc
	            },
	            renderRaw: (data) => {
	                // schema가 없는 경우
	                return isString(data) || isNumeric(data)
	                    ? this._hidden.valueView(data)
	                    : isArray$1(data)
	                        ? data.some(x => isObject(x))
	                            ? this._hidden.gridView(data)
	                            : this._hidden.arrayView(data)
	                        : isObject(data)
	                            ? this._hidden.objView(data)
	                            : this._hidden.valueView(data);
	            },
	            defView: (data, schema) => {
	                let defSchema = schema;
	                const refPath = (schema.$ref || schema.Items.$ref).split('/');
	                refPath.forEach((path) => {
	                    defSchema = path === '#' ? this.$options.schema : defSchema[path];
	                });
	                const subContents = new Modal('modal', '', {
	                    isModal: false,
	                    draggable: true,
	                    autoShow: false,
	                    autoDestroy: false,
	                    textSets: { title: defSchema.Disp || '' },
	                    contents: this._hidden.render(data, defSchema)
	                });
	                return (createElement("a", { "on-click": () => {
	                        subContents.show();
	                    } }, "[more]"));
	            },
	            gridView: (data, schema) => {
	                // 오브젝트 배열인 경우 그리드 형식으로 출력
	                if (!schema && !data.length) {
	                    return;
	                }
	                const keys = schema && schema.Properties ? Object.keys(schema.Properties) : Object.keys(data[0]);
	                const hasHeader = !schema ||
	                    (schema &&
	                        schema.Properties &&
	                        keys.some(key => {
	                            return !!schema.Properties[key].Disp;
	                        }));
	                return (createElement("table", { className: "gn-table is-full is-schema-grid" },
	                    hasHeader && (createElement("thead", null,
	                        createElement("tr", null, keys.map(k => {
	                            return schema && schema.Hidden && schema.Hidden.includes(k) ? ('') : schema && schema.SortItems && schema.SortItems.includes(k) ? (createElement("th", { "on-click": (e) => {
	                                    this._hidden.onSort.call(this, k, schema, e);
	                                }, className: "is-sortable" },
	                                this._hidden.keyView(k, schema),
	                                this._hidden.sortItem())) : (createElement("th", null, this._hidden.keyView(k, schema)));
	                        })))),
	                    createElement("tbody", { className: !hasHeader ? 'is-headless' : '' }, data &&
	                        data.map(d => (createElement("tr", null, keys.map(k => {
	                            var _a;
	                            const value = startsWith(k, '$') ? JsonPath.query(d, k)[0] : d[k];
	                            let tooltipIndex = undefined;
	                            if (schema && schema.Properties[k] && schema.Properties[k].$ref) {
	                                let defSchema = schema;
	                                let defData = d;
	                                const refPath = schema.Properties[k].$ref.split('/');
	                                refPath.forEach((path) => {
	                                    defSchema = path === '#' ? this.$options.schema : defSchema[path];
	                                    defData = path === '#' || path === '$defs' ? defData : d[path];
	                                });
	                                tooltipIndex = Object.keys(this.subTooltips).length + 1;
	                                this.subTooltips[tooltipIndex] = { defData, defSchema };
	                            }
	                            const isSelectable = (!schema || !schema.Disabled || !schema.Disabled.includes(k)) && (!schema || schema.Properties[k].Type !== 'checkbox') && isFunction(this.$options.onSelect);
	                            const dataItem = schema && schema.Hidden && schema.Hidden.includes(k) ? ('') : tooltipIndex ? (createElement("td", { className: isSelectable ? 'is-selectable' : '', "on-click": isSelectable && this._hidden.onSelect.bind(this, value, k, d), "data-tooltip": tooltipIndex }, schema ? this._hidden.render(value, schema.Properties[k], d, k) : this._hidden.renderRaw(value))) : (createElement("td", { className: isSelectable ? 'is-selectable' : '', "data-type": (_a = schema === null || schema === void 0 ? void 0 : schema.Properties[k]) === null || _a === void 0 ? void 0 : _a.Type, "on-click": isSelectable && this._hidden.onSelect.bind(this, value, k, d) }, schema ? this._hidden.render(value, schema.Properties[k], d, k) : this._hidden.renderRaw(value)));
	                            return dataItem;
	                        })))))));
	            },
	            objView: (obj, schema) => {
	                // 오브젝트 형식인 경우 key-value 로 출력
	                const renderTarget = schema && schema.Properties ? Object.keys(schema.Properties) : Object.keys(obj);
	                return (createElement("table", { className: "gn-table is-borderless is-object-grid" }, renderTarget.map(k => {
	                    const value = startsWith(k, '$') ? JsonPath.query(obj, k)[0] : obj[k];
	                    const isSelectable = (!schema || !schema.Disabled || !schema.Disabled.includes(k)) && (!schema || schema.Properties[k].Type !== 'checkbox') && isFunction(this.$options.onSelect);
	                    return schema && schema.Hidden && schema.Hidden.includes(k) ? ('') : (createElement("tr", null,
	                        createElement("th", { style: { width: this.$options.defWidth } }, this._hidden.keyView(k, schema)),
	                        createElement("td", { "on-click": isSelectable && this._hidden.onSelect.bind(this, value, k, obj) }, schema ? this._hidden.render(value, schema.Properties[k], obj, k) : this._hidden.renderRaw(value))));
	                })));
	            },
	            arrayView: (data, schema) => {
	                // 텍스트 배열인 경우 ,로 연결해서 출력
	                const dataArr = data.map((val) => {
	                    return this._hidden.valueView(val, schema, data);
	                });
	                if (!schema || schema.Type !== 'html') {
	                    for (let i = dataArr.length; --i; i) {
	                        dataArr.splice(i, 0, ',');
	                    }
	                }
	                return dataArr;
	            },
	            keyView: (key, schema) => {
	                let keySchema = schema ? schema.Properties[key] : undefined;
	                if (schema && keySchema && !keySchema.Type && keySchema.$ref) {
	                    (keySchema.$ref || keySchema.Items.$ref).split('/').forEach((path) => {
	                        keySchema = path === '#' ? this.$options.schema : keySchema[path];
	                    });
	                }
	                return (createElement("span", { className: schema && keySchema && keySchema.Type === 'number' ? 'is-type-number' : '' },
	                    schema && keySchema && keySchema.Disp !== null && keySchema.Disp !== undefined ? keySchema.Disp : key,
	                    schema && keySchema && keySchema.Description ? (createElement("span", { className: "gn-icon is-small is-help", title: keySchema.Description },
	                        createElement("i", { className: "fas fa-question-circle" }))) : (''),
	                    schema && schema.Required && schema.Required.includes(key) ? ' *' : ''));
	            },
	            valueView: (data, schema, parent, key) => {
	                const val = commaNum(data);
	                return schema && schema.RefURL ? (val === '0' ? (this._hidden.value(data, schema, parent, key)) : (createElement("a", { href: interpolateURL(schema.RefURL, { data, schema, parent, root: this.$options.data }), target: schema.Target ? schema.Target : '_self' }, this._hidden.value(data, schema, parent, key)))) : (this._hidden.value(data, schema, parent, key));
	            },
	            value: (data, schema, parent, key) => {
	                var _a;
	                let valueNode;
	                let valueMode = 'string';
	                if (schema) {
	                    if (schema.Converter && isArray$1(schema.Converter) && this.$options.convert && isFunction(this.$options.convert)) {
	                        const Name = schema.Converter[0];
	                        const Type = schema.Converter[1] || '';
	                        const Value = schema.Converter[2] || '{{data}}';
	                        if (Name) {
	                            const escapeValue = interpolateURL(Value, { data, schema, parent, root: this.$options.data });
	                            data = this.$options.convert.call(this, Name, Type, escapeValue);
	                        }
	                    }
	                    if (schema.Type === 'datetime' || (isArray$1(schema.Type) && schema.Type.includes('datetime') && isDate(data))) {
	                        valueMode = 'datetime';
	                        valueNode = dateFormat(toDate(data), 'YYYY-MM-DD hh:mm:ss');
	                    }
	                    else if (schema.Type === 'byte' || (isArray$1(schema.Type) && schema.Type.includes('byte') && isNumeric(data))) {
	                        valueMode = 'byte';
	                        valueNode = byteSize(data, 2);
	                    }
	                    else if (schema.Type === 'number' || (isArray$1(schema.Type) && schema.Type.includes('number') && isNumeric(data))) {
	                        valueMode = 'number';
	                        valueNode = commaNum(data);
	                    }
	                    else if (schema.Type === 'checkbox' || (isArray$1(schema.Type) && schema.Type.includes('checkbox') && (isNumeric(data) || isString(data) || isBoolean(data) || isPlainObject$1(data)))) {
	                        valueMode = 'checkbox';
	                        const hiddenChecks = data.hidden ? (isString(data.hidden) ? toBoolean(interpolateCop(data.hidden, data, parent, this.$options.data)) : data.hidden) : false;
	                        const checkIndex = Object.keys(this.subCheckboxs).length;
	                        this.subCheckboxs[checkIndex] = parent !== null && parent !== void 0 ? parent : data;
	                        valueNode =
	                            isPlainObject$1(data) && hiddenChecks ? ('') : (createElement("label", { className: "gn-checkbox is-small" },
	                                createElement("input", { type: "checkbox", className: "gn-checkbox-input", name: 'gn-checkbox-' + ((_a = key !== null && key !== void 0 ? key : schema.Disp) !== null && _a !== void 0 ? _a : 'value'), value: isPlainObject$1(data) ? data.value : data, checked: isPlainObject$1(data) ? data.checked : false, "data-check": checkIndex })));
	                    }
	                    else if (schema.Type === 'html' || (isArray$1(schema.Type) && schema.Type.includes('html') && data && data.indexOf('<') > -1 && data.indexOf('>') > -1)) {
	                        valueMode = 'html';
	                        valueNode = createElement("div", { innerHTML: interpolateURL(data, { data, schema, parent, root: this.$options.data }) });
	                    }
	                    else if (schema.Type === 'percent' || (isArray$1(schema.Type) && schema.Type.includes('percent') && isObject(data))) {
	                        valueMode = 'percent';
	                        valueNode = isNumeric(data) ? (createElement("div", { className: "gn-progressbar is-secondary", style: { minWidth: '100px' } },
	                            createElement("span", { className: "gauge", style: { width: data + '%' } }),
	                            createElement("span", { className: 'figure ' + (isNumeric(data) && toNumber(data) > 69 ? 'inner' : '') },
	                                " ",
	                                data,
	                                "%"))) : (createElement("div", null));
	                    }
	                    else if (schema.Type === 'bignumber' || (isArray$1(schema.Type) && schema.Type.includes('bignumber') && isObject(data))) {
	                        valueMode = 'bignumber';
	                        valueNode = Object.keys(data).map((key) => {
	                            return (createElement("div", { className: "gn-bignumber is-small" },
	                                createElement("div", { className: "gn-bignumber-value" }, isObject(data[key]) ? data[key].value : data[key]),
	                                isObject(data[key]) && data[key].data && createElement("div", { className: "gn-chart is-small", "data-sparkline": data[key].data.join(',') }),
	                                createElement("span", { className: "gn-bignumber-label" }, key)));
	                        });
	                    }
	                    else if (schema.Type === 'chart' || (isArray$1(schema.Type) && schema.Type.includes('chart') && isObject(data))) {
	                        valueMode = 'chart';
	                        const chartIndex = Object.keys(this.subCharts).length;
	                        this.subCharts[chartIndex] = data;
	                        valueNode = createElement("div", { "data-chart": chartIndex });
	                    }
	                    else {
	                        valueNode = data;
	                    }
	                }
	                else {
	                    valueNode = data;
	                }
	                return (createElement("span", { className: `is-type-${valueMode} ` + (schema && schema.StyleClass ? interpolateCop(schema.StyleClass, data, parent, this.$options.data) : ''), "on-click": this._hidden.selectValue, style: schema && schema.Style ? styleToVNodeStyle(interpolateCop(schema.Style, data, parent, this.$options.data)) : {} }, valueNode));
	            },
	            sortItem: () => {
	                return (createElement("span", { className: 'gn-icon is-small jsonview-sort ' + SortIconList[this.sortIndex] },
	                    createElement("i", { className: "fa" })));
	            },
	            onSelect: (value, key, obj, e) => {
	                // !(e.target as HTMLInputElement).className.includes('gn-checkbox') &&
	                isFunction(this.$options.onSelect) && this.$options.onSelect.call(this, value, key, obj, e);
	            },
	            selectValue: () => {
	                isFunction(this.$options.onSelectValue) && this.$options.onSelectValue.call(this);
	            },
	            onSort: (key, schema, e) => {
	                const _target = find('.jsonview-sort', e.currentTarget);
	                replaceClass(_target, SortIconList[this.sortIndex], SortIconList[++this.sortIndex]);
	                if (this.sortIndex > 2) {
	                    this.sortIndex = 0;
	                }
	                isFunction(this.$options.onSort) && this.$options.onSort.call(this, key, SortIconList[this.sortIndex], schema);
	            },
	            selectLabel: () => {
	                isFunction(this.$options.onSelectLabel) && this.$options.onSelectLabel.call(this);
	            },
	            formatChecker: (data) => {
	                if (!data) {
	                    return data;
	                }
	                if (!isObject(data) && !isArray$1(data)) {
	                    try {
	                        return JSON.parse(data);
	                    }
	                    catch (_a) {
	                        console.warn("The 'data' should have been in object format.");
	                    }
	                }
	                return data;
	            },
	            getChecked: () => {
	                return findAll('input[type=checkbox]', this.$el)
	                    .filter((checker) => {
	                    return checker.checked;
	                })
	                    .map((checker) => this.subCheckboxs[checker.dataset.check]);
	            }
	        };
	        this.config = {
	            name: (this.$selector && this.$selector.name) || this._uid,
	            defWidth: 'auto'
	        };
	        this.events = {
	            onSelectValue: true,
	            onSelectLabel: true,
	            onSelect: true
	        };
	        this.methods = {
	            reRender(param) {
	                this._hidden.reRender(this._hidden.formatChecker(param.data), this._hidden.formatChecker(param.schema));
	            },
	            getChecked() {
	                return this._hidden.getChecked();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        return (createElement("div", { id: this._uid, className: "gn-jsonview" },
	            config.schema && (config.schema.Disp || config.schema.Description) && (createElement("div", { className: "jsonview-header" },
	                config.schema.Disp && createElement("div", { className: "jsonview-title" }, config.schema.Disp),
	                config.schema.Description && createElement("div", { className: "jsonview-desc" }, config.schema.Description))),
	            createElement("div", { className: "jsonview-contents" }, config.schema ? this._hidden.render(config.data, config.schema) : this._hidden.renderRaw(config.data))));
	    }
	    beforeMount() {
	        this.$options.data = this._hidden.formatChecker(this.$options.data);
	        this.$options.schema = this._hidden.formatChecker(this.$options.schema);
	    }
	    completed() {
	        const $sparklines = $$('[data-sparkline]', this.$el);
	        if ($sparklines.length) {
	            each($sparklines, (sl) => {
	                new Chart('chart', sl, {
	                    type: 'sparkline',
	                    series: [
	                        {
	                            data: data(sl, 'data-sparkline').split(',')
	                        }
	                    ],
	                    chart: {
	                        width: 120,
	                        height: 20
	                    }
	                });
	            });
	        }
	        const $charts = $$('[data-chart]', this.$el);
	        if ($charts.length) {
	            each($charts, (chart) => {
	                const chartIndex = data(chart, 'data-chart');
	                new Chart('chart', chart, Object.assign({}, this.subCharts[chartIndex]));
	            });
	        }
	        const $tooltips = $$('[data-tooltip]', this.$el);
	        if ($tooltips.length) {
	            each($tooltips, (tooltip) => {
	                const tooltipIndex = data(tooltip, 'data-tooltip');
	                new Tooltip('tooltip', tooltip, {
	                    template: this._hidden.render(this.subTooltips[tooltipIndex].defData, this.subTooltips[tooltipIndex].defSchema),
	                    direction: 'bottom',
	                    color: 'dark'
	                });
	            });
	        }
	    }
	}

	class Loader extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            show: (duration) => {
	                const container = $('.gn-loader-container.pos-' + this.$options.positionX + '-' + this.$options.positionY);
	                css(container, 'display', 'block');
	                const closerThis = this;
	                if (duration) {
	                    const clearTimer = setTimeout(function () {
	                        fadeout(closerThis.$el, 500);
	                        clearTimeout(clearTimer);
	                        const closeTimer = setTimeout(function () {
	                            closerThis.hide();
	                            clearTimeout(closeTimer);
	                        }, 500);
	                    }, duration);
	                }
	            },
	            hide: () => {
	                const container = $('.gn-loader-container.pos-' + this.$options.positionX + '-' + this.$options.positionY);
	                css(container, 'display', 'none');
	            }
	        };
	        this.config = {
	            positionX: 'center',
	            positionY: 'center'
	        };
	        this.methods = {
	            show(duration) {
	                this._hidden.show(duration);
	            },
	            hide() {
	                this._hidden.hide();
	            }
	        };
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        if (config.width) {
	            /* inline style이 필요한 경우는 이렇게 사용 */
	            styles.width = getUnit('width', config.width);
	            styles.height = getUnit('height', config.width);
	        }
	        return (createElement("div", { id: this._uid, className: 'gn-loader' +
	                (config.color ? ' is-' + config.color : '') /* 색상 클래스 추가 */ +
	                (config.style ? ' is-' + config.style : '') /* 스타일 클래스 추가 */ +
	                (config.type ? ' is-' + config.type : '') +
	                (config.size ? ' is-' + config.size : ''), 
	            /* 크기 클래스 추가 */ style: styles }));
	    }
	    beforeMount() {
	        if (!this.$selector) {
	            const container = $('.gn-loader-container.pos-' + this.$options.positionX + '-' + this.$options.positionY);
	            !container && append(document.body, $('<div class="gn-loader-container pos-' + this.$options.positionX + '-' + this.$options.positionY + '"></div>'));
	            append($('.gn-loader-container.pos-' + this.$options.positionX + '-' + this.$options.positionY), $(`<div id="${this._uid}"></div>`));
	            this.$selector = $(`#${this._uid}`);
	        }
	    }
	    completed() {
	        this.$options.duration && this._hidden.show(this.$options.duration);
	    }
	    hide() {
	        const container = $('.gn-loader-container.pos-' + this.$options.positionX + '-' + this.$options.positionY);
	        css(container, 'display', 'none');
	    }
	}

	/* TODO: 사용자의 추가적인 DOM 생성없이 사용할 수 있도록 utility component로 제공 추가
	=> Gn.growl */
	class Message extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            close: () => {
	                this.$event(this, 'onClose');
	                animation[this.$options.animation](this.$el, this.$options.duration);
	                // eslint-disable-next-line @typescript-eslint/no-this-alias
	                const closerThis = this;
	                const closeTimer = setTimeout(function () {
	                    closerThis.$destroy(closerThis, true);
	                    clearTimeout(closeTimer);
	                }, this.$options.duration);
	            }
	        };
	        this.config = {
	            animation: 'slideup',
	            textSets: {
	                message: this.$selector ? this.$selector.textContent : ''
	            },
	            hasClose: true,
	            duration: 300
	        };
	        this.events = {
	            onClose: true
	        };
	        this.methods = {
	            close() {
	                this._hidden.close();
	            }
	        };
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        if (config.width) {
	            styles.width = getUnit('width', config.width);
	        }
	        return (createElement("div", { id: this._uid, className: 'gn-message' + (config.color ? ' is-' + config.color : '') + (config.size ? ' is-' + config.size : '') + (config.icon ? ' has-arrange' : ''), style: styles },
	            config.icon && (createElement("span", { className: "gn-icon is-normal" },
	                createElement("i", { className: 'fas fa-' + config.icon }))),
	            createElement("p", { innerHTML: config.textSets.message }),
	            config.hasClose && (createElement("span", { className: "gn-icon is-close is-dark", "on-click": this._hidden.close },
	                createElement("i", { className: "fas fa-times" })))));
	    }
	    beforeMount() {
	        this.appendTarget(); // patch가 아닌 append 되어야 하는 컴포넌트는 beforeMount cycle에서 target을 추가하는 과정을 수행한다.
	        if (!this.$selector) {
	            this.$selector = $(`<div id="${this._uid}"></div>`);
	        }
	    }
	}

	class MenuButton extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            open: () => {
	                addClass(this.$el, 'is-open');
	            },
	            close: () => {
	                removeClass(this.$el, 'is-open');
	            },
	            select: (menu, e) => {
	                this.$options.onSelect && this.$options.onSelect.call(this, menu.value, menu.text, menu, e);
	                this._hidden.close();
	            },
	            changeText: (buttonText) => {
	                this.$options.textSets.buttonText = buttonText;
	                html(find('.menuButton-text', this.$el), buttonText);
	            }
	        };
	        this.config = {
	            textSets: {
	                buttonText: this.$selector.textContent
	            },
	            name: this.$selector.name,
	            data: [],
	            align: 'center'
	        };
	        this.events = {
	            onSelect: true
	        };
	        this.methods = {
	            select() {
	                this._hidden.select();
	            },
	            buttonText(text) {
	                this._hidden.changeText(text);
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        if (config.width) {
	            styles.width = getUnit('width', config.width);
	        }
	        const renderMenus = (menus) => {
	            return (createElement("ul", null, menus.map((menu) => (createElement("li", { className: 'menuButton-menu' + (config.align ? ' has-text-' + config.align : ''), "on-click": (e) => {
	                    this._hidden.select.call(this, menu, e);
	                }, innerHTML: menu.html ? menu.html : '' }, menu.html ? '' : menu.text)))));
	        };
	        const renderSub = (data) => {
	            return createElement("div", null, isArray$1(data) && data.length && isArray$1(data[0]) ? data.map((menus) => renderMenus(menus)) : renderMenus(data));
	        };
	        return (createElement("div", { id: this._uid, className: 'gn-menuButton' + (config.color ? ' is-' + config.color : '') + (config.style ? ' is-' + config.style : '') + (config.size ? ' is-' + config.size : ''), style: styles },
	            createElement("button", { type: "button", className: config.align ? 'has-text-' + config.align : '', "on-click": this._hidden.open },
	                config.icon && (createElement("span", { className: 'gn-icon is-' + (config.size === 'large' ? 'medium' : config.size === 'medium' ? 'normal' : 'small') },
	                    createElement("i", { className: 'fas fa-' + config.icon }),
	                    ' ')),
	                createElement("span", { className: "menuButton-text" }, config.textSets.buttonText),
	                createElement("span", { className: "gn-icon is-small menuButton-icon" },
	                    createElement("i", { className: "fas fa-angle-down" }))),
	            createElement("div", { className: "menuButton-menus" }, renderSub(config.data))));
	    }
	    completed() {
	        // 해당 컴포넌트 외 클릭 시 menu panel 숨김
	        this.$options._destroy = on(document.body, 'click', (e) => {
	            if (!parents(e.target, '#' + this._uid).length) {
	                this._hidden.close();
	            }
	        });
	    }
	    destroyed() {
	        isFunction(this.$options._destroy) && this.$options._destroy();
	    }
	}

	class Tab extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            change: (idx, isInit = false) => {
	                var _a;
	                if (!isInit && this.$options.tabIndex === idx) {
	                    return;
	                } // 활성화 탭 중복 클릭 방지
	                if ((isInit || !this.$options.disabled) && this.$options.contents) {
	                    this.$options.tabIndex = idx;
	                    !isInit && ((_a = this.$options.onChange) === null || _a === void 0 ? void 0 : _a.call(this, idx, this.$el)); // user onChange event
	                    const activeTab = find(`li:nth-child(${idx + 1})`, this.$el);
	                    removeClass(findAll('li', this.$el), 'is-active'); // active 상태 해제
	                    addClass(activeTab, 'is-active'); // active 상태 표시
	                    // 탭 컨텐츠가 있는 경우 컨텐츠 보이기
	                    this._hidden.hideContent();
	                    this._hidden.showContent(attr(find('a', activeTab), 'href'));
	                }
	            },
	            showContent: (selector) => {
	                // 탭 컨텐츠 보이기
	                style(find(selector, $(this.$options.contents)), 'display', 'block');
	            },
	            hideContent: () => {
	                // 탭 컨텐츠 숨기기
	                const $contents = this.$options.contents ? $(this.$options.contents) : undefined;
	                $contents &&
	                    children($contents).forEach((child) => {
	                        style(child, 'display', 'none');
	                    });
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            contents: '',
	            tabIndex: 0,
	            align: 'full'
	        };
	        this.events = {
	            onChange: true
	        };
	        this.methods = {
	            change(idx) {
	                this._hidden.change(idx);
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $render(config) {
	        addClass(this.$el, 'gn-tab');
	        config.size && addClass(this.$el, `is-${config.size}`);
	        config.style && addClass(this.$el, `is-${config.style}`);
	        config.align && addClass(this.$el, `is-${config.align}`);
	        config.disabled && addClass(this.$el, 'is-disabled');
	        attr(this.$el, 'id', this._uid);
	        // 탭 별 인덱스 추가
	        findAll('li > a', this.$el).forEach((tab, idx) => {
	            attr(tab, 'data-tab-index', idx);
	        });
	        // 탭 이벤트 바인딩
	        this.$bind(this, {
	            click: (e) => {
	                e.preventDefault();
	                const tabIndex = attr(e.target, 'data-tab-index') || attr(parents(e.target, '[data-tab-index]'), 'data-tab-index');
	                if (isNumeric(tabIndex)) {
	                    this._hidden.change.call(this, tabIndex * 1);
	                }
	            }
	        });
	        this._hidden.change(config.tabIndex, true); // 초기 탭 활성화
	    }
	}

	class MultiTextArea extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            change: (e) => {
	                const target = e.target;
	                const lang = data(target, 'data-lang');
	                this.$options.value[lang] = val(target);
	                if (this.$options.maxlength) {
	                    text$1(this.$options.delegates[lang], this.$options.value[lang].length);
	                }
	                isFunction(this.$options.onChange) && this.$options.onChange.call(this, this.$options.value);
	            },
	            getValue: () => {
	                return this.$options.value;
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                this._tab.disable();
	                attr(findAll('textarea', this.$el), 'disabled', true);
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                this._tab.enable();
	                removeAttr(findAll('textarea', this.$el), 'disabled');
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            lang: ['en', 'ko'],
	            value: {},
	            delegates: {}
	        };
	        this.events = {
	            onChange: true
	        };
	        this.methods = {
	            getValue() {
	                return this._hidden.getValue();
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        if (config.width) {
	            styles.width = getUnit('width', config.width);
	        }
	        return (createElement("div", { id: this._uid, className: 'gn-multitext' + (config.disabled ? ' is-disabled' : ''), style: styles },
	            createElement("div", { id: this._uid + '_tab' },
	                createElement("ul", null, config.lang.map((l, index) => (createElement("li", { className: index === 0 ? 'is-active' : '' },
	                    createElement("a", { href: '#' + this._uid + '-' + l }, l)))))),
	            createElement("div", { id: this._uid + '_content' }, config.lang.map((l) => (createElement("div", { id: this._uid + '-' + l },
	                createElement("textarea", { className: "gn-textarea", "data-lang": l, rows: config.rows ? config.rows : '', maxLength: config.maxlength ? config.maxlength : 524288, "on-keyup": this._hidden.change, disabled: config.disabled, readOnly: config.readonly }, config.value ? config.value[l] : ''),
	                config.maxlength && (createElement("p", { className: "has-text-right has-text-size6" },
	                    createElement("span", { className: "charLen", "data-lang": l }, config.value && config.value[l] ? config.value[l].length : 0),
	                    "/",
	                    config.maxlength))))))));
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $render(config) {
	        this._tab = new Tab('tab', '#' + this._uid + '_tab', {
	            contents: '#' + this._uid + '_content',
	            size: this.$options.size || 'normal',
	            style: 'border',
	            align: 'left',
	            disabled: this.$options.disabled
	        });
	    }
	    beforeMount() {
	        if (!this.$options.value) {
	            this.$options.value = {};
	        }
	        this.$options.lang.forEach((lang) => {
	            if (!this.$options.value[lang]) {
	                this.$options.value[lang] = '';
	            }
	            if (this.$options.maxlength) {
	                this.$options.delegates[lang] = `.charLen[data-lang=${lang}]`;
	            }
	        });
	    }
	}

	class Picklist extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            search: (obj, e) => {
	                clearTimeout(this.$options.timer);
	                this.$options.timer = setTimeout(() => {
	                    this._hidden.filter(obj, $(e.target).value);
	                }, 300);
	            },
	            filter: (obj, q) => {
	                css(findAll(`.picklist-${obj} .dropdown-item`, this.$el), 'display', 'block');
	                removeClass(findAll(`.picklist-${obj} .dropdown-item`, this.$el), 'is-active');
	                this.$options.data[`filtered-${obj}`] = this.$options.data[obj];
	                if (q === '') {
	                    return;
	                }
	                findAll(`.picklist-${obj} .dropdown-item`, this.$el).forEach((option) => {
	                    if (!includes(data(option, 'value').toUpperCase(), q.toUpperCase()) && !includes(text$1(find('.dropdown-text', option)).toUpperCase(), q.toUpperCase())) {
	                        css(option, 'display', 'none');
	                        this.$options.data[`filtered-${obj}`] = this.$options.data[`filtered-${obj}`].filter((e) => e.value !== option.dataset.value);
	                    }
	                });
	            },
	            toggle: (e) => {
	                !this.$options.disabled && toggleClass(e.currentTarget, 'is-active');
	            },
	            sort: (dir, obj) => {
	                // dir: 'up','down','up-all','down-all'
	                // obj: 'source', 'target'
	                const selected = this._hidden.getSelection(obj);
	                if (!selected.length || selected.length === this.$options.data[obj].length) {
	                    return;
	                }
	                this.$options.data[obj].map((option) => {
	                    option.selected = selected.some((select) => {
	                        return option.value === select.value && option.text === select.text;
	                    });
	                    return option;
	                });
	                if (dir.indexOf('all') > -1) {
	                    // 최상단/최하단 정렬
	                    this.$options.data[obj].sort((a, b) => {
	                        const _sort = dir === 'up-all' ? -1 : 1;
	                        if (a.selected && b.selected) {
	                            return 0;
	                        }
	                        else if (a.selected) {
	                            return _sort;
	                        }
	                        else if (b.selected) {
	                            return _sort * -1;
	                        }
	                        return 0;
	                    });
	                }
	                else {
	                    // 하나씩 정렬
	                    let sortTemp = [], downItem = [];
	                    this.$options.data[obj].forEach((option) => {
	                        if (!option.selected) {
	                            sortTemp.push(option);
	                            if (downItem.length) {
	                                sortTemp = sortTemp.concat(downItem);
	                                downItem = [];
	                            }
	                        }
	                        else if (dir === 'up') {
	                            sortTemp.length ? sortTemp.splice(sortTemp.length - 1, 0, option) : sortTemp.push(option);
	                        }
	                        else if (dir === 'down') {
	                            downItem.push(option);
	                        }
	                    });
	                    if (downItem.length) {
	                        sortTemp = sortTemp.concat(downItem);
	                        downItem = [];
	                    }
	                    this.$options.data[obj] = sortTemp.slice();
	                    sortTemp = [];
	                }
	                this._hidden.reRender(obj);
	                this.$options.data[obj].forEach((option) => {
	                    delete option.selected;
	                });
	                this.$options.onChange && this.$options.onChange.call(this, this.$options.data.source, this.$options.data.target); // user onChange event
	                this.$options.onSort && this.$options.onSort.call(this, this.$options.data.source, this.$options.data.target); // user onSort event
	            },
	            move: (dir, selected = null) => {
	                var _a, _b;
	                if (this.$options.disabled) {
	                    return;
	                }
	                dir = dir.replace('right', 'add').replace('left', 'remove').replace('down', 'add').replace('up', 'remove');
	                if (dir === 'add-all') {
	                    if (!this.$options.data.source.length) {
	                        return;
	                    }
	                    this._hidden.moveTo(this.$options.data.source, this.$options.data.target, ((_a = find('.picklist-source input', this.$el)) === null || _a === void 0 ? void 0 : _a.value) ? this.$options.data['filtered-source'] : objClone(this.$options.data.source));
	                }
	                else if (dir === 'add') {
	                    selected = isArray$1(selected) ? selected : this._hidden.getSelection('source');
	                    if (!selected.length) {
	                        return;
	                    }
	                    this._hidden.moveTo(this.$options.data.source, this.$options.data.target, selected);
	                }
	                else if (dir === 'remove') {
	                    selected = isArray$1(selected) ? selected : this._hidden.getSelection('target');
	                    if (!selected.length) {
	                        return;
	                    }
	                    this._hidden.moveTo(this.$options.data.target, this.$options.data.source, selected);
	                }
	                else if (dir === 'remove-all') {
	                    if (!this.$options.data.target.length) {
	                        return;
	                    }
	                    this._hidden.moveTo(this.$options.data.target, this.$options.data.source, ((_b = find('.picklist-target input', this.$el)) === null || _b === void 0 ? void 0 : _b.value) ? this.$options.data['filtered-target'] : objClone(this.$options.data.target));
	                }
	                this._hidden.reRender('source');
	                this._hidden.reRender('target');
	                this.$options.onChange && this.$options.onChange.call(this, this.$options.data.source, this.$options.data.target); // user onChange event
	                this.$options.onTransfer && this.$options.onTransfer.call(this, this.$options.data.source, this.$options.data.target); // user onTransfer event
	            },
	            moveTo: (source, target, addArr) => {
	                isArray$1(addArr) &&
	                    addArr.forEach((option) => {
	                        const _index = source.findIndex((select) => {
	                            return option.value === select.value && option.text === select.text;
	                        });
	                        target.push(source.splice(_index, 1).pop());
	                    });
	            },
	            reRender: (obj) => {
	                var _a, _b;
	                this.$template.reRender(find('ul', this.$options.delegates[obj]), this._hidden.renderSub(obj));
	                ((_a = find(`.picklist-${obj} input`, this.$el)) === null || _a === void 0 ? void 0 : _a.value) && this._hidden.filter(obj, (_b = find(`.picklist-${obj} input`, this.$el)) === null || _b === void 0 ? void 0 : _b.value);
	            },
	            renderSub: (item) => {
	                const items = this.$options.data[item] || [];
	                return (createElement("ul", null, items.map((option) => (createElement("li", { className: 'dropdown-item' + (option.selected ? ' is-active' : ''), "data-value": option.value, "on-click": this._hidden.toggle.bind(this), "on-dblclick": this._hidden.move.bind(this, item === 'source' ? 'add' : 'remove', [
	                        {
	                            value: option.value,
	                            text: option.text
	                        }
	                    ]) },
	                    createElement("span", { className: "dropdown-text" }, option.text))))));
	            },
	            getSelection: (target) => {
	                return findAll('.is-active', this.$options.delegates[target]).map((select) => {
	                    return { value: attr(select, 'data-value'), text: text$1(select) };
	                });
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                attr(findAll('button', this.$el), 'disabled', true);
	                addClass(find('.gn-dropdown', this.$el), 'is-disabled');
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeAttr(findAll('button', this.$el), 'disabled');
	                removeClass(find('.gn-dropdown', this.$el), 'is-disabled');
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            name: this.$selector.name || this._uid,
	            textSets: {
	                sourceCaption: '',
	                targetCaption: ''
	            },
	            data: {
	                source: (() => {
	                    return findAll('select.gn-source > option', this.$selector).map((option) => {
	                        return { value: option.value, text: option.textContent };
	                    });
	                })() || [],
	                target: (() => {
	                    return findAll('select.gn-target > option', this.$selector).map((option) => {
	                        return { value: option.value, text: option.textContent };
	                    });
	                })() || []
	            },
	            timer: 0,
	            delegates: {
	                source: '.picklist-source > .gn-dropdown',
	                target: '.picklist-target > .gn-dropdown'
	            },
	            hasSourceSearch: false,
	            hasTargetSearch: false,
	            orderable: true,
	            height: 150
	        };
	        this.events = {
	            onChange: true,
	            onSort: true,
	            onTransfer: true
	        };
	        this.methods = {
	            getSource() {
	                return this.$options.data.source;
	            },
	            getTarget() {
	                return this.$options.data.target;
	            },
	            getValue() {
	                return this.$options.data.target.map((d) => d.value).join(',');
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        var _a, _b, _c, _d;
	        const styles = {};
	        if (config.width) {
	            styles.width = getUnit('width', config.width);
	        }
	        if (config.direction === 'vertical' && config.height) {
	            styles.height = getUnit('height', config.height * 2 + 45);
	        }
	        const renderControl = (direction) => {
	            const direction1 = direction !== 'vertical' ? (direction === 'cross' ? 'down' : 'up') : 'right', direction2 = direction !== 'vertical' ? (direction === 'cross' ? 'up' : 'down') : 'left', commandFunc = direction === 'cross' || direction === 'vertical' ? this._hidden.move : this._hidden.sort;
	            return (createElement("div", { className: 'picklist-controls gn-control is-small has-arrange is-center' + (direction === 'cross' ? '' : ' is-vertical') },
	                createElement("button", { type: "button", className: "gn-button is-outline", "on-click": commandFunc.bind(this, `${direction1}-all`, direction), disabled: config.disabled },
	                    createElement("span", { className: "gn-icon" },
	                        createElement("i", { className: 'fa fa-light fa-angle-double-' + direction1 }))),
	                createElement("button", { type: "button", className: "gn-button is-outline", "on-click": commandFunc.bind(this, direction1, direction), disabled: config.disabled },
	                    createElement("span", { className: "gn-icon" },
	                        createElement("i", { className: 'fa fa-light fa-angle-' + direction1 }))),
	                createElement("button", { type: "button", className: "gn-button is-outline", "on-click": commandFunc.bind(this, direction2, direction), disabled: config.disabled },
	                    createElement("span", { className: "gn-icon" },
	                        createElement("i", { className: 'fa fa-light fa-angle-' + direction2 }))),
	                createElement("button", { type: "button", className: "gn-button is-outline", "on-click": commandFunc.bind(this, `${direction2}-all`, direction), disabled: config.disabled },
	                    createElement("span", { className: "gn-icon" },
	                        createElement("i", { className: 'fa fa-light fa-angle-double-' + direction2 })))));
	        };
	        return (createElement("div", { id: this._uid, className: 'gn-picklist' + (config.direction === 'vertical' ? ' is-vertical' : '') + (config.disabled ? ' is-disabled' : ''), style: styles },
	            createElement("div", { className: 'picklist-source ' + (config.orderable === 'target' ? 'no-controls' : '') },
	                (config.orderable === true || config.orderable === 'source') && renderControl('source'),
	                createElement("div", { className: 'gn-dropdown is-opened' + (config.disabled ? ' is-disabled' : '') },
	                    config.textSets.sourceCaption.length > 0 && createElement("div", { className: "picklist-caption" }, config.textSets.sourceCaption),
	                    createElement("div", { className: "dropdown-items", style: config.height
	                            ? {
	                                height: getUnit('height', config.height),
	                                maxHeight: getUnit('height', config.height)
	                            }
	                            : {} },
	                        config.hasSourceSearch && (createElement("div", { className: "dropdown-search" },
	                            createElement("div", { className: "gn-control has-icon-right is-full" },
	                                createElement("span", { className: "gn-icon is-right" },
	                                    createElement("i", { className: "fa fa-light fa-search" })),
	                                createElement("input", { type: "text", className: "gn-input is-full", placeholder: (_b = (_a = this.$options.textSets) === null || _a === void 0 ? void 0 : _a.searchText) !== null && _b !== void 0 ? _b : GN_CONSTANT.SEARCH_ITEM, "on-keyup": this._hidden.search.bind(this, 'source'), disabled: config.disabled })))),
	                        this._hidden.renderSub('source')))),
	            renderControl(config.direction === 'vertical' ? 'cross' : 'vertical'),
	            createElement("div", { className: 'picklist-target ' + (config.orderable === 'source' ? 'no-controls' : '') },
	                (config.orderable === true || config.orderable === 'target') && renderControl('target'),
	                createElement("div", { className: 'gn-dropdown is-opened' + (config.disabled ? ' is-disabled' : '') },
	                    config.textSets.targetCaption.length > 0 && createElement("div", { className: "picklist-caption" }, config.textSets.targetCaption),
	                    createElement("div", { className: "dropdown-items", style: config.height
	                            ? {
	                                height: getUnit('height', config.height),
	                                maxHeight: getUnit('height', config.height)
	                            }
	                            : {} },
	                        config.hasTargetSearch && (createElement("div", { className: "dropdown-search" },
	                            createElement("div", { className: "gn-control has-icon-right is-full" },
	                                createElement("span", { className: "gn-icon is-right" },
	                                    createElement("i", { className: "fa fa-light fa-search" })),
	                                createElement("input", { type: "text", className: "gn-input is-full", placeholder: (_d = (_c = this.$options.textSets) === null || _c === void 0 ? void 0 : _c.searchText) !== null && _d !== void 0 ? _d : GN_CONSTANT.SEARCH_ITEM, "on-keyup": this._hidden.search.bind(this, 'target'), disabled: config.disabled })))),
	                        this._hidden.renderSub('target'))))));
	    }
	    beforeMount() {
	        if (typeof this.$options.height === 'number' && this.$options.height < 100) {
	            this.$options.height = 100;
	        }
	    }
	    completed() {
	        if (this.$options.textSets.sourceCaption.length > 0) {
	            style(find('.picklist-source .dropdown-items', this.$el), 'height', getUnit('height', getNumber(this.$options.height) - getNumber(style(find('.picklist-source .picklist-caption', this.$el), 'height'))));
	        }
	        if (this.$options.textSets.targetCaption.length > 0) {
	            style(find('.picklist-target .dropdown-items', this.$el), 'height', getUnit('height', getNumber(this.$options.height) - getNumber(style(find('.picklist-target .picklist-caption', this.$el), 'height'))));
	        }
	    }
	}

	class Progressbar extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            setValue: (value) => {
	                if (this.$options.indeterminate) {
	                    return;
	                }
	                css(find('.gauge', this.$el), 'width', value + '%');
	                if (this.$options.hasFigure) {
	                    const figure = find('.figure', this.$el);
	                    text$1(figure, value + '%');
	                    value > 95 ? addClass(figure, 'inner') : removeClass(figure, 'inner');
	                }
	            },
	            complete: () => {
	                this.$options.indeterminate = false;
	                removeClass(this.$el, 'is-indeterminate');
	                this._hidden.setValue(100);
	            }
	        };
	        this.config = {
	            value: 0,
	            hasFigure: false,
	            indeterminate: false
	        };
	        this.methods = {
	            setValue(value) {
	                this._hidden.setValue(value);
	            },
	            complete() {
	                this._hidden.complete();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        if (config.value) {
	            styles.width = config.value + '%';
	        }
	        return (createElement("div", { id: this._uid, className: 'gn-progressbar' + (config.color ? ' is-' + config.color : '') + (config.size ? ' is-' + config.size : '') + (config.style ? ' is-' + config.style : '') },
	            createElement("span", { className: "gauge", style: styles }),
	            config.hasFigure && createElement("span", { className: 'figure' + (config.value > 95 ? ' inner' : '') },
	                config.value,
	                "%")));
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $render(config) {
	        if (config.indeterminate) {
	            addClass(this.$el, 'is-indeterminate');
	        }
	    }
	    beforeMount() {
	        this.appendTarget();
	        if (!this.$selector) {
	            this.$selector = $(`<div id="${this._uid}"></div>`);
	        }
	    }
	}

	class SelectButton extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            select: (option) => {
	                var _a, _b, _c, _d, _e, _f;
	                if (this.$options.disabled) {
	                    return;
	                }
	                if (this.$options.multiple) {
	                    const checkItems = findAll('input[name=' + this.config.name + ']', this.$el).filter((item) => {
	                        return item.checked;
	                    });
	                    const newValue = (_b = (_a = checkItems.map((item) => item.value)) === null || _a === void 0 ? void 0 : _a.join(',')) !== null && _b !== void 0 ? _b : '';
	                    const newText = (_d = (_c = checkItems.map((item) => { var _a; return (_a = item === null || item === void 0 ? void 0 : item.dataset) === null || _a === void 0 ? void 0 : _a.text; })) === null || _c === void 0 ? void 0 : _c.join(',')) !== null && _d !== void 0 ? _d : '';
	                    (_e = this.$options.onChange) === null || _e === void 0 ? void 0 : _e.call(this, newValue, newText);
	                }
	                else {
	                    (_f = this.$options.onChange) === null || _f === void 0 ? void 0 : _f.call(this, option.value, option.text);
	                }
	            },
	            change: (value) => {
	                if (this.$options.multiple) {
	                    $$('input[type=checkbox]', this.$el).forEach((option) => {
	                        option.checked = value.includes(option.value);
	                    });
	                }
	                else {
	                    $$('input[type=radio]', this.$el).forEach((option) => {
	                        option.checked = isEqual(option.value, value);
	                    });
	                }
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                attr(findAll('input', this.$el), 'disabled', true);
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeAttr(findAll('input', this.$el), 'disabled');
	                removeClass(this.$el, 'is-disabled');
	            },
	            getValue: () => {
	                return findAll(this.$options.multiple ? 'input[type=checkbox]' : 'input[type=radio]', this.$el)
	                    .filter((item) => item.checked)
	                    .map((item) => item.value)
	                    .join(',');
	            }
	        };
	        this.config = {
	            name: this.$selector.name || this._uid,
	            data: [],
	            disabled: false,
	            multiple: false,
	            align: 'horizontal'
	        };
	        this.events = {
	            onChange: true
	        };
	        this.methods = {
	            change(value) {
	                this._hidden.change(value);
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            },
	            getValue() {
	                return this._hidden.getValue();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        return (createElement("div", { id: this._uid, className: 'gn-selectButton' +
	                (config.color ? ' is-' + config.color : '') +
	                (config.size ? ' is-' + config.size : '') +
	                (config.disabled ? ' is-disabled' : '') +
	                (config.multiple ? ' is-multiple' : '') +
	                (config.align ? ' is-' + config.align : '') }, config.data.map((option, index) => [
	            createElement("input", { type: config.multiple ? 'checkbox' : 'radio', value: option.value, "data-text": option.text, name: config.name, id: this._uid + '_opt_' + index, checked: config.multiple ? config.value.includes(option.value) : config.value === option.value, disabled: config.disabled, "on-change": this._hidden.select.bind(this, option) }),
	            createElement("label", { htmlFor: this._uid + '_opt_' + index },
	                option.icon && (createElement("span", { className: 'gn-icon is-' + (config.size === 'large' ? 'medium' : config.size === 'medium' ? 'normal' : 'small') },
	                    createElement("i", { className: 'fas fa-' + option.icon }),
	                    ' ')),
	                option.text)
	        ])));
	    }
	}

	class Splitter extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            drag: (e, position) => {
	                const attr = this.$options.orientation === 'vertical' ? 'width' : 'height';
	                const pos = this.$options.orientation === 'vertical' ? 'x' : 'y';
	                css(this.$options.panel[0], attr, position[pos] - 1);
	                css(this.$options.panel[1], attr, getNumber(css(this.$el, attr)) - position[pos] - (attr === 'height' ? 7 : 5));
	                trigger(window.document, 'resize');
	                e && this.$event(this, 'onDrag');
	            },
	            dragStart: () => {
	                this.$event(this, 'onDragStart');
	            },
	            dragEnd: (isMounted = false) => {
	                const attrStr = this.$options.orientation === 'vertical' ? 'width' : 'height';
	                const containerSize = offset(this.$el)[attrStr];
	                const panelWidth = offset(this.$options.delegates.panel1)[attrStr];
	                css(this.$options.delegates.panel1, attrStr, (panelWidth / containerSize) * 100 + '%');
	                css(this.$options.delegates.panel2, attrStr, 100 - (panelWidth / containerSize) * 100 - (5 / containerSize) * 100 + '%');
	                css(this.$options.delegates.handle, this.$options.splitStr[0], (panelWidth / containerSize) * 100 + '%');
	                (typeof isMounted !== 'boolean' || !isMounted) && !!this.$options.onDragEnd && this.$options.onDragEnd.call(this, offset(this.$options.delegates.handle));
	            }
	        };
	        this.config = {
	            orientation: 'horizontal',
	            space: 0,
	            minPosition: 30,
	            delegates: {
	                panel1: undefined,
	                panel2: undefined,
	                handle: undefined
	            }
	        };
	        this.events = {
	            onDrag: true,
	            onDragStart: true,
	            onDragEnd: true
	        };
	        this.methods = {};
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    $render(config) {
	        config.splitStr = config.orientation === 'vertical' ? ['left', 'right'] : ['top', 'bottom'];
	        const boundary = config.orientation === 'vertical'
	            ? [0, config.minPosition, 0, getNumber(css(this.$el, 'width')) - config.minPosition]
	            : [config.minPosition, 0, getNumber(css(this.$el, 'height')) - config.minPosition, 0];
	        const handle = $(`<div class="split-gutter ${config.orientation === 'vertical' ? 'vs-gutter' : 'hs-gutter'}"></div>`);
	        this.$options.delegates.handle = handle;
	        if (config.position) {
	            if (isNumeric(config.position)) {
	                config.position = config.position + 'px';
	            }
	            css(handle, config.splitStr[0], config.position);
	            css(handle, config.splitStr[0], `calc(${config.position} - 5px)`);
	        }
	        dragLayout(handle, boundary, this._hidden);
	        addClass(this.$el, 'gn-splitter');
	        !attr(this.$el, 'id') && attr(this.$el, 'id', this._uid);
	        append(this.$el, handle);
	        config.panel.forEach((panel, idx) => {
	            addClass(panel, `split-panel ${config.splitStr[idx]}-panel`);
	            config.space && css(panel, 'padding', getUnit('padding', config.space));
	        });
	    }
	    beforeMount() {
	        this.$options.panel.forEach((panel, idx, panels) => {
	            panels[idx] = find(panel, this.$el);
	        });
	        this.$options.minPosition += this.$options.space * 2;
	    }
	    completed() {
	        this.$options.delegates.panel1 = $(this.$options.panel[0], this.$el);
	        this.$options.delegates.panel2 = $(this.$options.panel[1], this.$el);
	        if (this.$options.position) {
	            this._hidden.drag(undefined, {
	                x: getNumber(css(this.$options.delegates.handle, this.$options.splitStr[0])),
	                y: getNumber(css(this.$options.delegates.handle, this.$options.splitStr[0]))
	            });
	            this._hidden.dragEnd(true);
	        }
	    }
	}

	class Switch extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            toggle: (e) => {
	                this.$options.checked = e.target.checked;
	                this.$event(this, 'onChange');
	            },
	            disable: () => {
	                this.$options.disabled = true;
	                attr(find('input', this.$el), 'disabled', true);
	                addClass(this.$el, 'is-disabled');
	            },
	            enable: () => {
	                this.$options.disabled = false;
	                removeAttr(find('input', this.$el), 'disabled');
	                removeClass(this.$el, 'is-disabled');
	            }
	        };
	        this.config = {
	            textSets: {
	                toggleText: ''
	            },
	            checked: false,
	            disabled: false,
	            delegates: {
	                toggler: '[type=checkbox]'
	            },
	            name: this.$selector.name
	        };
	        this.events = {
	            onToggle: {
	                name: 'click',
	                delegate: () => {
	                    return this.config.delegates.toggler;
	                }
	            }
	        };
	        this.methods = {
	            toggle() {
	                this._hidden.toggle();
	            },
	            getValue() {
	                return this.$options.checked;
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        return (createElement("label", { id: this._uid, className: 'gn-switch' + (config.color ? ' is-' + config.color : '') + (config.size ? ' is-' + config.size : '') + (config.style ? ' is-' + config.style : '') + (config.disabled ? ' is-disabled' : ''), style: styles },
	            createElement("input", { type: "checkbox", name: this.$options.name, "on-click": this._hidden.toggle, defaultChecked: config.checked, disabled: config.disabled }),
	            createElement("span", { className: "switch-toggle" }, "Toggle"),
	            config.textSets.toggleText));
	    }
	}

	var prism$2 = {exports: {}};

	(function (module) {
		/* **********************************************
		     Begin prism-core.js
		********************************************** */

		/// <reference lib="WebWorker"/>

		var _self = (typeof window !== 'undefined')
			? window   // if in browser
			: (
				(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
					? self // if in worker
					: {}   // if in node js
			);

		/**
		 * Prism: Lightweight, robust, elegant syntax highlighting
		 *
		 * @license MIT <https://opensource.org/licenses/MIT>
		 * @author Lea Verou <https://lea.verou.me>
		 * @namespace
		 * @public
		 */
		var Prism = (function (_self) {

			// Private helper vars
			var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
			var uniqueId = 0;

			// The grammar object for plaintext
			var plainTextGrammar = {};


			var _ = {
				/**
				 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
				 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
				 * additional languages or plugins yourself.
				 *
				 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
				 *
				 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
				 * empty Prism object into the global scope before loading the Prism script like this:
				 *
				 * ```js
				 * window.Prism = window.Prism || {};
				 * Prism.manual = true;
				 * // add a new <script> to load Prism's script
				 * ```
				 *
				 * @default false
				 * @type {boolean}
				 * @memberof Prism
				 * @public
				 */
				manual: _self.Prism && _self.Prism.manual,
				/**
				 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
				 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
				 * own worker, you don't want it to do this.
				 *
				 * By setting this value to `true`, Prism will not add its own listeners to the worker.
				 *
				 * You obviously have to change this value before Prism executes. To do this, you can add an
				 * empty Prism object into the global scope before loading the Prism script like this:
				 *
				 * ```js
				 * window.Prism = window.Prism || {};
				 * Prism.disableWorkerMessageHandler = true;
				 * // Load Prism's script
				 * ```
				 *
				 * @default false
				 * @type {boolean}
				 * @memberof Prism
				 * @public
				 */
				disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

				/**
				 * A namespace for utility methods.
				 *
				 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
				 * change or disappear at any time.
				 *
				 * @namespace
				 * @memberof Prism
				 */
				util: {
					encode: function encode(tokens) {
						if (tokens instanceof Token) {
							return new Token(tokens.type, encode(tokens.content), tokens.alias);
						} else if (Array.isArray(tokens)) {
							return tokens.map(encode);
						} else {
							return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
						}
					},

					/**
					 * Returns the name of the type of the given value.
					 *
					 * @param {any} o
					 * @returns {string}
					 * @example
					 * type(null)      === 'Null'
					 * type(undefined) === 'Undefined'
					 * type(123)       === 'Number'
					 * type('foo')     === 'String'
					 * type(true)      === 'Boolean'
					 * type([1, 2])    === 'Array'
					 * type({})        === 'Object'
					 * type(String)    === 'Function'
					 * type(/abc+/)    === 'RegExp'
					 */
					type: function (o) {
						return Object.prototype.toString.call(o).slice(8, -1);
					},

					/**
					 * Returns a unique number for the given object. Later calls will still return the same number.
					 *
					 * @param {Object} obj
					 * @returns {number}
					 */
					objId: function (obj) {
						if (!obj['__id']) {
							Object.defineProperty(obj, '__id', { value: ++uniqueId });
						}
						return obj['__id'];
					},

					/**
					 * Creates a deep clone of the given object.
					 *
					 * The main intended use of this function is to clone language definitions.
					 *
					 * @param {T} o
					 * @param {Record<number, any>} [visited]
					 * @returns {T}
					 * @template T
					 */
					clone: function deepClone(o, visited) {
						visited = visited || {};

						var clone; var id;
						switch (_.util.type(o)) {
							case 'Object':
								id = _.util.objId(o);
								if (visited[id]) {
									return visited[id];
								}
								clone = /** @type {Record<string, any>} */ ({});
								visited[id] = clone;

								for (var key in o) {
									if (o.hasOwnProperty(key)) {
										clone[key] = deepClone(o[key], visited);
									}
								}

								return /** @type {any} */ (clone);

							case 'Array':
								id = _.util.objId(o);
								if (visited[id]) {
									return visited[id];
								}
								clone = [];
								visited[id] = clone;

								(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
									clone[i] = deepClone(v, visited);
								});

								return /** @type {any} */ (clone);

							default:
								return o;
						}
					},

					/**
					 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
					 *
					 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
					 *
					 * @param {Element} element
					 * @returns {string}
					 */
					getLanguage: function (element) {
						while (element) {
							var m = lang.exec(element.className);
							if (m) {
								return m[1].toLowerCase();
							}
							element = element.parentElement;
						}
						return 'none';
					},

					/**
					 * Sets the Prism `language-xxxx` class of the given element.
					 *
					 * @param {Element} element
					 * @param {string} language
					 * @returns {void}
					 */
					setLanguage: function (element, language) {
						// remove all `language-xxxx` classes
						// (this might leave behind a leading space)
						element.className = element.className.replace(RegExp(lang, 'gi'), '');

						// add the new `language-xxxx` class
						// (using `classList` will automatically clean up spaces for us)
						element.classList.add('language-' + language);
					},

					/**
					 * Returns the script element that is currently executing.
					 *
					 * This does __not__ work for line script element.
					 *
					 * @returns {HTMLScriptElement | null}
					 */
					currentScript: function () {
						if (typeof document === 'undefined') {
							return null;
						}
						if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
							return /** @type {any} */ (document.currentScript);
						}

						// IE11 workaround
						// we'll get the src of the current script by parsing IE11's error stack trace
						// this will not work for inline scripts

						try {
							throw new Error();
						} catch (err) {
							// Get file src url from stack. Specifically works with the format of stack traces in IE.
							// A stack will look like this:
							//
							// Error
							//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
							//    at Global code (http://localhost/components/prism-core.js:606:1)

							var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
							if (src) {
								var scripts = document.getElementsByTagName('script');
								for (var i in scripts) {
									if (scripts[i].src == src) {
										return scripts[i];
									}
								}
							}
							return null;
						}
					},

					/**
					 * Returns whether a given class is active for `element`.
					 *
					 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
					 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
					 * given class is just the given class with a `no-` prefix.
					 *
					 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
					 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
					 * ancestors have the given class or the negated version of it, then the default activation will be returned.
					 *
					 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
					 * version of it, the class is considered active.
					 *
					 * @param {Element} element
					 * @param {string} className
					 * @param {boolean} [defaultActivation=false]
					 * @returns {boolean}
					 */
					isActive: function (element, className, defaultActivation) {
						var no = 'no-' + className;

						while (element) {
							var classList = element.classList;
							if (classList.contains(className)) {
								return true;
							}
							if (classList.contains(no)) {
								return false;
							}
							element = element.parentElement;
						}
						return !!defaultActivation;
					}
				},

				/**
				 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
				 *
				 * @namespace
				 * @memberof Prism
				 * @public
				 */
				languages: {
					/**
					 * The grammar for plain, unformatted text.
					 */
					plain: plainTextGrammar,
					plaintext: plainTextGrammar,
					text: plainTextGrammar,
					txt: plainTextGrammar,

					/**
					 * Creates a deep copy of the language with the given id and appends the given tokens.
					 *
					 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
					 * will be overwritten at its original position.
					 *
					 * ## Best practices
					 *
					 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
					 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
					 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
					 *
					 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
					 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
					 *
					 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
					 * @param {Grammar} redef The new tokens to append.
					 * @returns {Grammar} The new language created.
					 * @public
					 * @example
					 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
					 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
					 *     // at its original position
					 *     'comment': { ... },
					 *     // CSS doesn't have a 'color' token, so this token will be appended
					 *     'color': /\b(?:red|green|blue)\b/
					 * });
					 */
					extend: function (id, redef) {
						var lang = _.util.clone(_.languages[id]);

						for (var key in redef) {
							lang[key] = redef[key];
						}

						return lang;
					},

					/**
					 * Inserts tokens _before_ another token in a language definition or any other grammar.
					 *
					 * ## Usage
					 *
					 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
					 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
					 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
					 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
					 * this:
					 *
					 * ```js
					 * Prism.languages.markup.style = {
					 *     // token
					 * };
					 * ```
					 *
					 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
					 * before existing tokens. For the CSS example above, you would use it like this:
					 *
					 * ```js
					 * Prism.languages.insertBefore('markup', 'cdata', {
					 *     'style': {
					 *         // token
					 *     }
					 * });
					 * ```
					 *
					 * ## Special cases
					 *
					 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
					 * will be ignored.
					 *
					 * This behavior can be used to insert tokens after `before`:
					 *
					 * ```js
					 * Prism.languages.insertBefore('markup', 'comment', {
					 *     'comment': Prism.languages.markup.comment,
					 *     // tokens after 'comment'
					 * });
					 * ```
					 *
					 * ## Limitations
					 *
					 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
					 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
					 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
					 * deleting properties which is necessary to insert at arbitrary positions.
					 *
					 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
					 * Instead, it will create a new object and replace all references to the target object with the new one. This
					 * can be done without temporarily deleting properties, so the iteration order is well-defined.
					 *
					 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
					 * you hold the target object in a variable, then the value of the variable will not change.
					 *
					 * ```js
					 * var oldMarkup = Prism.languages.markup;
					 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
					 *
					 * assert(oldMarkup !== Prism.languages.markup);
					 * assert(newMarkup === Prism.languages.markup);
					 * ```
					 *
					 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
					 * object to be modified.
					 * @param {string} before The key to insert before.
					 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
					 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
					 * object to be modified.
					 *
					 * Defaults to `Prism.languages`.
					 * @returns {Grammar} The new grammar object.
					 * @public
					 */
					insertBefore: function (inside, before, insert, root) {
						root = root || /** @type {any} */ (_.languages);
						var grammar = root[inside];
						/** @type {Grammar} */
						var ret = {};

						for (var token in grammar) {
							if (grammar.hasOwnProperty(token)) {

								if (token == before) {
									for (var newToken in insert) {
										if (insert.hasOwnProperty(newToken)) {
											ret[newToken] = insert[newToken];
										}
									}
								}

								// Do not insert token which also occur in insert. See #1525
								if (!insert.hasOwnProperty(token)) {
									ret[token] = grammar[token];
								}
							}
						}

						var old = root[inside];
						root[inside] = ret;

						// Update references in other language definitions
						_.languages.DFS(_.languages, function (key, value) {
							if (value === old && key != inside) {
								this[key] = ret;
							}
						});

						return ret;
					},

					// Traverse a language definition with Depth First Search
					DFS: function DFS(o, callback, type, visited) {
						visited = visited || {};

						var objId = _.util.objId;

						for (var i in o) {
							if (o.hasOwnProperty(i)) {
								callback.call(o, i, o[i], type || i);

								var property = o[i];
								var propertyType = _.util.type(property);

								if (propertyType === 'Object' && !visited[objId(property)]) {
									visited[objId(property)] = true;
									DFS(property, callback, null, visited);
								} else if (propertyType === 'Array' && !visited[objId(property)]) {
									visited[objId(property)] = true;
									DFS(property, callback, i, visited);
								}
							}
						}
					}
				},

				plugins: {},

				/**
				 * This is the most high-level function in Prism’s API.
				 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
				 * each one of them.
				 *
				 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
				 *
				 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
				 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
				 * @memberof Prism
				 * @public
				 */
				highlightAll: function (async, callback) {
					_.highlightAllUnder(document, async, callback);
				},

				/**
				 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
				 * {@link Prism.highlightElement} on each one of them.
				 *
				 * The following hooks will be run:
				 * 1. `before-highlightall`
				 * 2. `before-all-elements-highlight`
				 * 3. All hooks of {@link Prism.highlightElement} for each element.
				 *
				 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
				 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
				 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
				 * @memberof Prism
				 * @public
				 */
				highlightAllUnder: function (container, async, callback) {
					var env = {
						callback: callback,
						container: container,
						selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
					};

					_.hooks.run('before-highlightall', env);

					env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

					_.hooks.run('before-all-elements-highlight', env);

					for (var i = 0, element; (element = env.elements[i++]);) {
						_.highlightElement(element, async === true, env.callback);
					}
				},

				/**
				 * Highlights the code inside a single element.
				 *
				 * The following hooks will be run:
				 * 1. `before-sanity-check`
				 * 2. `before-highlight`
				 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
				 * 4. `before-insert`
				 * 5. `after-highlight`
				 * 6. `complete`
				 *
				 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
				 * the element's language.
				 *
				 * @param {Element} element The element containing the code.
				 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
				 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
				 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
				 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
				 *
				 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
				 * asynchronous highlighting to work. You can build your own bundle on the
				 * [Download page](https://prismjs.com/download.html).
				 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
				 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
				 * @memberof Prism
				 * @public
				 */
				highlightElement: function (element, async, callback) {
					// Find language
					var language = _.util.getLanguage(element);
					var grammar = _.languages[language];

					// Set language on the element, if not present
					_.util.setLanguage(element, language);

					// Set language on the parent, for styling
					var parent = element.parentElement;
					if (parent && parent.nodeName.toLowerCase() === 'pre') {
						_.util.setLanguage(parent, language);
					}

					var code = element.textContent;

					var env = {
						element: element,
						language: language,
						grammar: grammar,
						code: code
					};

					function insertHighlightedCode(highlightedCode) {
						env.highlightedCode = highlightedCode;

						_.hooks.run('before-insert', env);

						env.element.innerHTML = env.highlightedCode;

						_.hooks.run('after-highlight', env);
						_.hooks.run('complete', env);
						callback && callback.call(env.element);
					}

					_.hooks.run('before-sanity-check', env);

					// plugins may change/add the parent/element
					parent = env.element.parentElement;
					if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
						parent.setAttribute('tabindex', '0');
					}

					if (!env.code) {
						_.hooks.run('complete', env);
						callback && callback.call(env.element);
						return;
					}

					_.hooks.run('before-highlight', env);

					if (!env.grammar) {
						insertHighlightedCode(_.util.encode(env.code));
						return;
					}

					if (async && _self.Worker) {
						var worker = new Worker(_.filename);

						worker.onmessage = function (evt) {
							insertHighlightedCode(evt.data);
						};

						worker.postMessage(JSON.stringify({
							language: env.language,
							code: env.code,
							immediateClose: true
						}));
					} else {
						insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
					}
				},

				/**
				 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
				 * and the language definitions to use, and returns a string with the HTML produced.
				 *
				 * The following hooks will be run:
				 * 1. `before-tokenize`
				 * 2. `after-tokenize`
				 * 3. `wrap`: On each {@link Token}.
				 *
				 * @param {string} text A string with the code to be highlighted.
				 * @param {Grammar} grammar An object containing the tokens to use.
				 *
				 * Usually a language definition like `Prism.languages.markup`.
				 * @param {string} language The name of the language definition passed to `grammar`.
				 * @returns {string} The highlighted HTML.
				 * @memberof Prism
				 * @public
				 * @example
				 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
				 */
				highlight: function (text, grammar, language) {
					var env = {
						code: text,
						grammar: grammar,
						language: language
					};
					_.hooks.run('before-tokenize', env);
					if (!env.grammar) {
						throw new Error('The language "' + env.language + '" has no grammar.');
					}
					env.tokens = _.tokenize(env.code, env.grammar);
					_.hooks.run('after-tokenize', env);
					return Token.stringify(_.util.encode(env.tokens), env.language);
				},

				/**
				 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
				 * and the language definitions to use, and returns an array with the tokenized code.
				 *
				 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
				 *
				 * This method could be useful in other contexts as well, as a very crude parser.
				 *
				 * @param {string} text A string with the code to be highlighted.
				 * @param {Grammar} grammar An object containing the tokens to use.
				 *
				 * Usually a language definition like `Prism.languages.markup`.
				 * @returns {TokenStream} An array of strings and tokens, a token stream.
				 * @memberof Prism
				 * @public
				 * @example
				 * let code = `var foo = 0;`;
				 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
				 * tokens.forEach(token => {
				 *     if (token instanceof Prism.Token && token.type === 'number') {
				 *         console.log(`Found numeric literal: ${token.content}`);
				 *     }
				 * });
				 */
				tokenize: function (text, grammar) {
					var rest = grammar.rest;
					if (rest) {
						for (var token in rest) {
							grammar[token] = rest[token];
						}

						delete grammar.rest;
					}

					var tokenList = new LinkedList();
					addAfter(tokenList, tokenList.head, text);

					matchGrammar(text, tokenList, grammar, tokenList.head, 0);

					return toArray(tokenList);
				},

				/**
				 * @namespace
				 * @memberof Prism
				 * @public
				 */
				hooks: {
					all: {},

					/**
					 * Adds the given callback to the list of callbacks for the given hook.
					 *
					 * The callback will be invoked when the hook it is registered for is run.
					 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
					 *
					 * One callback function can be registered to multiple hooks and the same hook multiple times.
					 *
					 * @param {string} name The name of the hook.
					 * @param {HookCallback} callback The callback function which is given environment variables.
					 * @public
					 */
					add: function (name, callback) {
						var hooks = _.hooks.all;

						hooks[name] = hooks[name] || [];

						hooks[name].push(callback);
					},

					/**
					 * Runs a hook invoking all registered callbacks with the given environment variables.
					 *
					 * Callbacks will be invoked synchronously and in the order in which they were registered.
					 *
					 * @param {string} name The name of the hook.
					 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
					 * @public
					 */
					run: function (name, env) {
						var callbacks = _.hooks.all[name];

						if (!callbacks || !callbacks.length) {
							return;
						}

						for (var i = 0, callback; (callback = callbacks[i++]);) {
							callback(env);
						}
					}
				},

				Token: Token
			};
			_self.Prism = _;


			// Typescript note:
			// The following can be used to import the Token type in JSDoc:
			//
			//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

			/**
			 * Creates a new token.
			 *
			 * @param {string} type See {@link Token#type type}
			 * @param {string | TokenStream} content See {@link Token#content content}
			 * @param {string|string[]} [alias] The alias(es) of the token.
			 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
			 * @class
			 * @global
			 * @public
			 */
			function Token(type, content, alias, matchedStr) {
				/**
				 * The type of the token.
				 *
				 * This is usually the key of a pattern in a {@link Grammar}.
				 *
				 * @type {string}
				 * @see GrammarToken
				 * @public
				 */
				this.type = type;
				/**
				 * The strings or tokens contained by this token.
				 *
				 * This will be a token stream if the pattern matched also defined an `inside` grammar.
				 *
				 * @type {string | TokenStream}
				 * @public
				 */
				this.content = content;
				/**
				 * The alias(es) of the token.
				 *
				 * @type {string|string[]}
				 * @see GrammarToken
				 * @public
				 */
				this.alias = alias;
				// Copy of the full string this token was created from
				this.length = (matchedStr || '').length | 0;
			}

			/**
			 * A token stream is an array of strings and {@link Token Token} objects.
			 *
			 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
			 * them.
			 *
			 * 1. No adjacent strings.
			 * 2. No empty strings.
			 *
			 *    The only exception here is the token stream that only contains the empty string and nothing else.
			 *
			 * @typedef {Array<string | Token>} TokenStream
			 * @global
			 * @public
			 */

			/**
			 * Converts the given token or token stream to an HTML representation.
			 *
			 * The following hooks will be run:
			 * 1. `wrap`: On each {@link Token}.
			 *
			 * @param {string | Token | TokenStream} o The token or token stream to be converted.
			 * @param {string} language The name of current language.
			 * @returns {string} The HTML representation of the token or token stream.
			 * @memberof Token
			 * @static
			 */
			Token.stringify = function stringify(o, language) {
				if (typeof o == 'string') {
					return o;
				}
				if (Array.isArray(o)) {
					var s = '';
					o.forEach(function (e) {
						s += stringify(e, language);
					});
					return s;
				}

				var env = {
					type: o.type,
					content: stringify(o.content, language),
					tag: 'span',
					classes: ['token', o.type],
					attributes: {},
					language: language
				};

				var aliases = o.alias;
				if (aliases) {
					if (Array.isArray(aliases)) {
						Array.prototype.push.apply(env.classes, aliases);
					} else {
						env.classes.push(aliases);
					}
				}

				_.hooks.run('wrap', env);

				var attributes = '';
				for (var name in env.attributes) {
					attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
				}

				return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
			};

			/**
			 * @param {RegExp} pattern
			 * @param {number} pos
			 * @param {string} text
			 * @param {boolean} lookbehind
			 * @returns {RegExpExecArray | null}
			 */
			function matchPattern(pattern, pos, text, lookbehind) {
				pattern.lastIndex = pos;
				var match = pattern.exec(text);
				if (match && lookbehind && match[1]) {
					// change the match to remove the text matched by the Prism lookbehind group
					var lookbehindLength = match[1].length;
					match.index += lookbehindLength;
					match[0] = match[0].slice(lookbehindLength);
				}
				return match;
			}

			/**
			 * @param {string} text
			 * @param {LinkedList<string | Token>} tokenList
			 * @param {any} grammar
			 * @param {LinkedListNode<string | Token>} startNode
			 * @param {number} startPos
			 * @param {RematchOptions} [rematch]
			 * @returns {void}
			 * @private
			 *
			 * @typedef RematchOptions
			 * @property {string} cause
			 * @property {number} reach
			 */
			function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
				for (var token in grammar) {
					if (!grammar.hasOwnProperty(token) || !grammar[token]) {
						continue;
					}

					var patterns = grammar[token];
					patterns = Array.isArray(patterns) ? patterns : [patterns];

					for (var j = 0; j < patterns.length; ++j) {
						if (rematch && rematch.cause == token + ',' + j) {
							return;
						}

						var patternObj = patterns[j];
						var inside = patternObj.inside;
						var lookbehind = !!patternObj.lookbehind;
						var greedy = !!patternObj.greedy;
						var alias = patternObj.alias;

						if (greedy && !patternObj.pattern.global) {
							// Without the global flag, lastIndex won't work
							var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
							patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
						}

						/** @type {RegExp} */
						var pattern = patternObj.pattern || patternObj;

						for ( // iterate the token list and keep track of the current token/string position
							var currentNode = startNode.next, pos = startPos;
							currentNode !== tokenList.tail;
							pos += currentNode.value.length, currentNode = currentNode.next
						) {

							if (rematch && pos >= rematch.reach) {
								break;
							}

							var str = currentNode.value;

							if (tokenList.length > text.length) {
								// Something went terribly wrong, ABORT, ABORT!
								return;
							}

							if (str instanceof Token) {
								continue;
							}

							var removeCount = 1; // this is the to parameter of removeBetween
							var match;

							if (greedy) {
								match = matchPattern(pattern, pos, text, lookbehind);
								if (!match || match.index >= text.length) {
									break;
								}

								var from = match.index;
								var to = match.index + match[0].length;
								var p = pos;

								// find the node that contains the match
								p += currentNode.value.length;
								while (from >= p) {
									currentNode = currentNode.next;
									p += currentNode.value.length;
								}
								// adjust pos (and p)
								p -= currentNode.value.length;
								pos = p;

								// the current node is a Token, then the match starts inside another Token, which is invalid
								if (currentNode.value instanceof Token) {
									continue;
								}

								// find the last node which is affected by this match
								for (
									var k = currentNode;
									k !== tokenList.tail && (p < to || typeof k.value === 'string');
									k = k.next
								) {
									removeCount++;
									p += k.value.length;
								}
								removeCount--;

								// replace with the new match
								str = text.slice(pos, p);
								match.index -= pos;
							} else {
								match = matchPattern(pattern, 0, str, lookbehind);
								if (!match) {
									continue;
								}
							}

							// eslint-disable-next-line no-redeclare
							var from = match.index;
							var matchStr = match[0];
							var before = str.slice(0, from);
							var after = str.slice(from + matchStr.length);

							var reach = pos + str.length;
							if (rematch && reach > rematch.reach) {
								rematch.reach = reach;
							}

							var removeFrom = currentNode.prev;

							if (before) {
								removeFrom = addAfter(tokenList, removeFrom, before);
								pos += before.length;
							}

							removeRange(tokenList, removeFrom, removeCount);

							var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
							currentNode = addAfter(tokenList, removeFrom, wrapped);

							if (after) {
								addAfter(tokenList, currentNode, after);
							}

							if (removeCount > 1) {
								// at least one Token object was removed, so we have to do some rematching
								// this can only happen if the current pattern is greedy

								/** @type {RematchOptions} */
								var nestedRematch = {
									cause: token + ',' + j,
									reach: reach
								};
								matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

								// the reach might have been extended because of the rematching
								if (rematch && nestedRematch.reach > rematch.reach) {
									rematch.reach = nestedRematch.reach;
								}
							}
						}
					}
				}
			}

			/**
			 * @typedef LinkedListNode
			 * @property {T} value
			 * @property {LinkedListNode<T> | null} prev The previous node.
			 * @property {LinkedListNode<T> | null} next The next node.
			 * @template T
			 * @private
			 */

			/**
			 * @template T
			 * @private
			 */
			function LinkedList() {
				/** @type {LinkedListNode<T>} */
				var head = { value: null, prev: null, next: null };
				/** @type {LinkedListNode<T>} */
				var tail = { value: null, prev: head, next: null };
				head.next = tail;

				/** @type {LinkedListNode<T>} */
				this.head = head;
				/** @type {LinkedListNode<T>} */
				this.tail = tail;
				this.length = 0;
			}

			/**
			 * Adds a new node with the given value to the list.
			 *
			 * @param {LinkedList<T>} list
			 * @param {LinkedListNode<T>} node
			 * @param {T} value
			 * @returns {LinkedListNode<T>} The added node.
			 * @template T
			 */
			function addAfter(list, node, value) {
				// assumes that node != list.tail && values.length >= 0
				var next = node.next;

				var newNode = { value: value, prev: node, next: next };
				node.next = newNode;
				next.prev = newNode;
				list.length++;

				return newNode;
			}
			/**
			 * Removes `count` nodes after the given node. The given node will not be removed.
			 *
			 * @param {LinkedList<T>} list
			 * @param {LinkedListNode<T>} node
			 * @param {number} count
			 * @template T
			 */
			function removeRange(list, node, count) {
				var next = node.next;
				for (var i = 0; i < count && next !== list.tail; i++) {
					next = next.next;
				}
				node.next = next;
				next.prev = node;
				list.length -= i;
			}
			/**
			 * @param {LinkedList<T>} list
			 * @returns {T[]}
			 * @template T
			 */
			function toArray(list) {
				var array = [];
				var node = list.head.next;
				while (node !== list.tail) {
					array.push(node.value);
					node = node.next;
				}
				return array;
			}


			if (!_self.document) {
				if (!_self.addEventListener) {
					// in Node.js
					return _;
				}

				if (!_.disableWorkerMessageHandler) {
					// In worker
					_self.addEventListener('message', function (evt) {
						var message = JSON.parse(evt.data);
						var lang = message.language;
						var code = message.code;
						var immediateClose = message.immediateClose;

						_self.postMessage(_.highlight(code, _.languages[lang], lang));
						if (immediateClose) {
							_self.close();
						}
					}, false);
				}

				return _;
			}

			// Get current script and highlight
			var script = _.util.currentScript();

			if (script) {
				_.filename = script.src;

				if (script.hasAttribute('data-manual')) {
					_.manual = true;
				}
			}

			function highlightAutomaticallyCallback() {
				if (!_.manual) {
					_.highlightAll();
				}
			}

			if (!_.manual) {
				// If the document state is "loading", then we'll use DOMContentLoaded.
				// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
				// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
				// might take longer one animation frame to execute which can create a race condition where only some plugins have
				// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
				// See https://github.com/PrismJS/prism/issues/2102
				var readyState = document.readyState;
				if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
					document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
				} else {
					if (window.requestAnimationFrame) {
						window.requestAnimationFrame(highlightAutomaticallyCallback);
					} else {
						window.setTimeout(highlightAutomaticallyCallback, 16);
					}
				}
			}

			return _;

		}(_self));

		if (module.exports) {
			module.exports = Prism;
		}

		// hack for components to work correctly in node.js
		if (typeof commonjsGlobal !== 'undefined') {
			commonjsGlobal.Prism = Prism;
		}

		// some additional documentation/types

		/**
		 * The expansion of a simple `RegExp` literal to support additional properties.
		 *
		 * @typedef GrammarToken
		 * @property {RegExp} pattern The regular expression of the token.
		 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
		 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
		 * @property {boolean} [greedy=false] Whether the token is greedy.
		 * @property {string|string[]} [alias] An optional alias or list of aliases.
		 * @property {Grammar} [inside] The nested grammar of this token.
		 *
		 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
		 *
		 * This can be used to make nested and even recursive language definitions.
		 *
		 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
		 * each another.
		 * @global
		 * @public
		 */

		/**
		 * @typedef Grammar
		 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
		 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
		 * @global
		 * @public
		 */

		/**
		 * A function which will invoked after an element was successfully highlighted.
		 *
		 * @callback HighlightCallback
		 * @param {Element} element The element successfully highlighted.
		 * @returns {void}
		 * @global
		 * @public
		 */

		/**
		 * @callback HookCallback
		 * @param {Object<string, any>} env The environment variables of the hook.
		 * @returns {void}
		 * @global
		 * @public
		 */


		/* **********************************************
		     Begin prism-markup.js
		********************************************** */

		Prism.languages.markup = {
			'comment': {
				pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
				greedy: true
			},
			'prolog': {
				pattern: /<\?[\s\S]+?\?>/,
				greedy: true
			},
			'doctype': {
				// https://www.w3.org/TR/xml/#NT-doctypedecl
				pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
				greedy: true,
				inside: {
					'internal-subset': {
						pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
						lookbehind: true,
						greedy: true,
						inside: null // see below
					},
					'string': {
						pattern: /"[^"]*"|'[^']*'/,
						greedy: true
					},
					'punctuation': /^<!|>$|[[\]]/,
					'doctype-tag': /^DOCTYPE/i,
					'name': /[^\s<>'"]+/
				}
			},
			'cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				greedy: true
			},
			'tag': {
				pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
				greedy: true,
				inside: {
					'tag': {
						pattern: /^<\/?[^\s>\/]+/,
						inside: {
							'punctuation': /^<\/?/,
							'namespace': /^[^\s>\/:]+:/
						}
					},
					'special-attr': [],
					'attr-value': {
						pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
						inside: {
							'punctuation': [
								{
									pattern: /^=/,
									alias: 'attr-equals'
								},
								{
									pattern: /^(\s*)["']|["']$/,
									lookbehind: true
								}
							]
						}
					},
					'punctuation': /\/?>/,
					'attr-name': {
						pattern: /[^\s>\/]+/,
						inside: {
							'namespace': /^[^\s>\/:]+:/
						}
					}

				}
			},
			'entity': [
				{
					pattern: /&[\da-z]{1,8};/i,
					alias: 'named-entity'
				},
				/&#x?[\da-f]{1,8};/i
			]
		};

		Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
			Prism.languages.markup['entity'];
		Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

		// Plugin to make entity title show the real entity, idea by Roman Komarov
		Prism.hooks.add('wrap', function (env) {

			if (env.type === 'entity') {
				env.attributes['title'] = env.content.replace(/&amp;/, '&');
			}
		});

		Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
			/**
			 * Adds an inlined language to markup.
			 *
			 * An example of an inlined language is CSS with `<style>` tags.
			 *
			 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
			 * case insensitive.
			 * @param {string} lang The language key.
			 * @example
			 * addInlined('style', 'css');
			 */
			value: function addInlined(tagName, lang) {
				var includedCdataInside = {};
				includedCdataInside['language-' + lang] = {
					pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
					lookbehind: true,
					inside: Prism.languages[lang]
				};
				includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

				var inside = {
					'included-cdata': {
						pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
						inside: includedCdataInside
					}
				};
				inside['language-' + lang] = {
					pattern: /[\s\S]+/,
					inside: Prism.languages[lang]
				};

				var def = {};
				def[tagName] = {
					pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
					lookbehind: true,
					greedy: true,
					inside: inside
				};

				Prism.languages.insertBefore('markup', 'cdata', def);
			}
		});
		Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
			/**
			 * Adds an pattern to highlight languages embedded in HTML attributes.
			 *
			 * An example of an inlined language is CSS with `style` attributes.
			 *
			 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
			 * case insensitive.
			 * @param {string} lang The language key.
			 * @example
			 * addAttribute('style', 'css');
			 */
			value: function (attrName, lang) {
				Prism.languages.markup.tag.inside['special-attr'].push({
					pattern: RegExp(
						/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
						'i'
					),
					lookbehind: true,
					inside: {
						'attr-name': /^[^\s=]+/,
						'attr-value': {
							pattern: /=[\s\S]+/,
							inside: {
								'value': {
									pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
									lookbehind: true,
									alias: [lang, 'language-' + lang],
									inside: Prism.languages[lang]
								},
								'punctuation': [
									{
										pattern: /^=/,
										alias: 'attr-equals'
									},
									/"|'/
								]
							}
						}
					}
				});
			}
		});

		Prism.languages.html = Prism.languages.markup;
		Prism.languages.mathml = Prism.languages.markup;
		Prism.languages.svg = Prism.languages.markup;

		Prism.languages.xml = Prism.languages.extend('markup', {});
		Prism.languages.ssml = Prism.languages.xml;
		Prism.languages.atom = Prism.languages.xml;
		Prism.languages.rss = Prism.languages.xml;


		/* **********************************************
		     Begin prism-css.js
		********************************************** */

		(function (Prism) {

			var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

			Prism.languages.css = {
				'comment': /\/\*[\s\S]*?\*\//,
				'atrule': {
					pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
					inside: {
						'rule': /^@[\w-]+/,
						'selector-function-argument': {
							pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
							lookbehind: true,
							alias: 'selector'
						},
						'keyword': {
							pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
							lookbehind: true
						}
						// See rest below
					}
				},
				'url': {
					// https://drafts.csswg.org/css-values-3/#urls
					pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
					greedy: true,
					inside: {
						'function': /^url/i,
						'punctuation': /^\(|\)$/,
						'string': {
							pattern: RegExp('^' + string.source + '$'),
							alias: 'url'
						}
					}
				},
				'selector': {
					pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
					lookbehind: true
				},
				'string': {
					pattern: string,
					greedy: true
				},
				'property': {
					pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
					lookbehind: true
				},
				'important': /!important\b/i,
				'function': {
					pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
					lookbehind: true
				},
				'punctuation': /[(){};:,]/
			};

			Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

			var markup = Prism.languages.markup;
			if (markup) {
				markup.tag.addInlined('style', 'css');
				markup.tag.addAttribute('style', 'css');
			}

		}(Prism));


		/* **********************************************
		     Begin prism-clike.js
		********************************************** */

		Prism.languages.clike = {
			'comment': [
				{
					pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
					lookbehind: true,
					greedy: true
				},
				{
					pattern: /(^|[^\\:])\/\/.*/,
					lookbehind: true,
					greedy: true
				}
			],
			'string': {
				pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
				greedy: true
			},
			'class-name': {
				pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
				lookbehind: true,
				inside: {
					'punctuation': /[.\\]/
				}
			},
			'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
			'boolean': /\b(?:false|true)\b/,
			'function': /\b\w+(?=\()/,
			'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
			'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
			'punctuation': /[{}[\];(),.:]/
		};


		/* **********************************************
		     Begin prism-javascript.js
		********************************************** */

		Prism.languages.javascript = Prism.languages.extend('clike', {
			'class-name': [
				Prism.languages.clike['class-name'],
				{
					pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
					lookbehind: true
				}
			],
			'keyword': [
				{
					pattern: /((?:^|\})\s*)catch\b/,
					lookbehind: true
				},
				{
					pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
					lookbehind: true
				},
			],
			// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
			'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
			'number': {
				pattern: RegExp(
					/(^|[^\w$])/.source +
					'(?:' +
					(
						// constant
						/NaN|Infinity/.source +
						'|' +
						// binary integer
						/0[bB][01]+(?:_[01]+)*n?/.source +
						'|' +
						// octal integer
						/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
						'|' +
						// hexadecimal integer
						/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
						'|' +
						// decimal bigint
						/\d+(?:_\d+)*n/.source +
						'|' +
						// decimal number (integer or float) but no bigint
						/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
					) +
					')' +
					/(?![\w$])/.source
				),
				lookbehind: true
			},
			'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
		});

		Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

		Prism.languages.insertBefore('javascript', 'keyword', {
			'regex': {
				pattern: RegExp(
					// lookbehind
					// eslint-disable-next-line regexp/no-dupe-characters-character-class
					/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
					// Regex pattern:
					// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
					// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
					// with the only syntax, so we have to define 2 different regex patterns.
					/\//.source +
					'(?:' +
					/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
					'|' +
					// `v` flag syntax. This supports 3 levels of nested character classes.
					/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
					')' +
					// lookahead
					/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
				),
				lookbehind: true,
				greedy: true,
				inside: {
					'regex-source': {
						pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
						lookbehind: true,
						alias: 'language-regex',
						inside: Prism.languages.regex
					},
					'regex-delimiter': /^\/|\/$/,
					'regex-flags': /^[a-z]+$/,
				}
			},
			// This must be declared before keyword because we use "function" inside the look-forward
			'function-variable': {
				pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
				alias: 'function'
			},
			'parameter': [
				{
					pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
					lookbehind: true,
					inside: Prism.languages.javascript
				},
				{
					pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
					lookbehind: true,
					inside: Prism.languages.javascript
				},
				{
					pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
					lookbehind: true,
					inside: Prism.languages.javascript
				},
				{
					pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
					lookbehind: true,
					inside: Prism.languages.javascript
				}
			],
			'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
		});

		Prism.languages.insertBefore('javascript', 'string', {
			'hashbang': {
				pattern: /^#!.*/,
				greedy: true,
				alias: 'comment'
			},
			'template-string': {
				pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
				greedy: true,
				inside: {
					'template-punctuation': {
						pattern: /^`|`$/,
						alias: 'string'
					},
					'interpolation': {
						pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
						lookbehind: true,
						inside: {
							'interpolation-punctuation': {
								pattern: /^\$\{|\}$/,
								alias: 'punctuation'
							},
							rest: Prism.languages.javascript
						}
					},
					'string': /[\s\S]+/
				}
			},
			'string-property': {
				pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
				lookbehind: true,
				greedy: true,
				alias: 'property'
			}
		});

		Prism.languages.insertBefore('javascript', 'operator', {
			'literal-property': {
				pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
				lookbehind: true,
				alias: 'property'
			},
		});

		if (Prism.languages.markup) {
			Prism.languages.markup.tag.addInlined('script', 'javascript');

			// add attribute support for all DOM events.
			// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
			Prism.languages.markup.tag.addAttribute(
				/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
				'javascript'
			);
		}

		Prism.languages.js = Prism.languages.javascript;


		/* **********************************************
		     Begin prism-file-highlight.js
		********************************************** */

		(function () {

			if (typeof Prism === 'undefined' || typeof document === 'undefined') {
				return;
			}

			// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
			if (!Element.prototype.matches) {
				Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
			}

			var LOADING_MESSAGE = 'Loading…';
			var FAILURE_MESSAGE = function (status, message) {
				return '✖ Error ' + status + ' while fetching file: ' + message;
			};
			var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

			var EXTENSIONS = {
				'js': 'javascript',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell',
				'sh': 'bash',
				'bat': 'batch',
				'h': 'c',
				'tex': 'latex'
			};

			var STATUS_ATTR = 'data-src-status';
			var STATUS_LOADING = 'loading';
			var STATUS_LOADED = 'loaded';
			var STATUS_FAILED = 'failed';

			var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
				+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

			/**
			 * Loads the given file.
			 *
			 * @param {string} src The URL or path of the source file to load.
			 * @param {(result: string) => void} success
			 * @param {(reason: string) => void} error
			 */
			function loadFile(src, success, error) {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', src, true);
				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {
						if (xhr.status < 400 && xhr.responseText) {
							success(xhr.responseText);
						} else {
							if (xhr.status >= 400) {
								error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
							} else {
								error(FAILURE_EMPTY_MESSAGE);
							}
						}
					}
				};
				xhr.send(null);
			}

			/**
			 * Parses the given range.
			 *
			 * This returns a range with inclusive ends.
			 *
			 * @param {string | null | undefined} range
			 * @returns {[number, number | undefined] | undefined}
			 */
			function parseRange(range) {
				var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
				if (m) {
					var start = Number(m[1]);
					var comma = m[2];
					var end = m[3];

					if (!comma) {
						return [start, start];
					}
					if (!end) {
						return [start, undefined];
					}
					return [start, Number(end)];
				}
				return undefined;
			}

			Prism.hooks.add('before-highlightall', function (env) {
				env.selector += ', ' + SELECTOR;
			});

			Prism.hooks.add('before-sanity-check', function (env) {
				var pre = /** @type {HTMLPreElement} */ (env.element);
				if (pre.matches(SELECTOR)) {
					env.code = ''; // fast-path the whole thing and go to complete

					pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

					// add code element with loading message
					var code = pre.appendChild(document.createElement('CODE'));
					code.textContent = LOADING_MESSAGE;

					var src = pre.getAttribute('data-src');

					var language = env.language;
					if (language === 'none') {
						// the language might be 'none' because there is no language set;
						// in this case, we want to use the extension as the language
						var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
						language = EXTENSIONS[extension] || extension;
					}

					// set language classes
					Prism.util.setLanguage(code, language);
					Prism.util.setLanguage(pre, language);

					// preload the language
					var autoloader = Prism.plugins.autoloader;
					if (autoloader) {
						autoloader.loadLanguages(language);
					}

					// load file
					loadFile(
						src,
						function (text) {
							// mark as loaded
							pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

							// handle data-range
							var range = parseRange(pre.getAttribute('data-range'));
							if (range) {
								var lines = text.split(/\r\n?|\n/g);

								// the range is one-based and inclusive on both ends
								var start = range[0];
								var end = range[1] == null ? lines.length : range[1];

								if (start < 0) { start += lines.length; }
								start = Math.max(0, Math.min(start - 1, lines.length));
								if (end < 0) { end += lines.length; }
								end = Math.max(0, Math.min(end, lines.length));

								text = lines.slice(start, end).join('\n');

								// add data-start for line numbers
								if (!pre.hasAttribute('data-start')) {
									pre.setAttribute('data-start', String(start + 1));
								}
							}

							// highlight code
							code.textContent = text;
							Prism.highlightElement(code);
						},
						function (error) {
							// mark as failed
							pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

							code.textContent = error;
						}
					);
				}
			});

			Prism.plugins.fileHighlight = {
				/**
				 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
				 *
				 * Note: Elements which are already loaded or currently loading will not be touched by this method.
				 *
				 * @param {ParentNode} [container=document]
				 */
				highlight: function highlight(container) {
					var elements = (container || document).querySelectorAll(SELECTOR);

					for (var i = 0, element; (element = elements[i++]);) {
						Prism.highlightElement(element);
					}
				}
			};

			var logged = false;
			/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
			Prism.fileHighlight = function () {
				if (!logged) {
					console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
					logged = true;
				}
				Prism.plugins.fileHighlight.highlight.apply(this, arguments);
			};

		}()); 
	} (prism$2));

	var prismExports = prism$2.exports;
	var prism$1 = /*@__PURE__*/getDefaultExportFromCjs(prismExports);

	const prism = prism$1;
	class SyntaxInput extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            update: (e) => {
	                if (this.$options.readonly) {
	                    e && e.preventDefault();
	                    return;
	                }
	                if (e) {
	                    this.$options.value = $(e.target).value;
	                }
	                // Handle final newlines (see article)
	                if (this.$options.value[this.$options.value.length - 1] == '\n') {
	                    this.$options.value += ' ';
	                }
	                // Update code
	                this.$options.delegates.content.innerHTML = this.$options.value.replace(new RegExp('&', 'g'), '&amp;').replace(new RegExp('<', 'g'), '&lt;'); /* Global RegExp */
	                // Syntax Highlight
	                prism.highlightElement(this.$options.delegates.content);
	                e && this._hidden.sync(e);
	                this.$options.onChange && this.$options.onChange.call(this, this.$options.value); // user onChange event
	            },
	            sync: (e) => {
	                this.$options.delegates.preview.scrollTop = e.target.scrollTop;
	                this.$options.delegates.preview.scrollLeft = e.target.scrollLeft;
	            },
	            check: (e) => {
	                if (this.$options.readonly) {
	                    e.preventDefault();
	                    return;
	                }
	                const code = $(e.target).value;
	                if (this.$options.usetab && e.key == 'Tab') {
	                    /* Tab key pressed */
	                    e.preventDefault(); // stop normal
	                    const beforeTab = code.slice(0, this.$options.delegates.input.selectionStart); // text before tab
	                    const afterTab = code.slice(this.$options.delegates.input.selectionEnd, this.$options.delegates.input.value.length); // text after tab
	                    const cursorPos = this.$options.delegates.input.selectionEnd + 2; // after tab placed, where cursor moves to - 2 for 2 spaces
	                    this.$options.delegates.input.value = beforeTab + '  ' + afterTab; // add tab char - 2 spaces
	                    // move cursor
	                    this.$options.delegates.input.selectionStart = cursorPos;
	                    this.$options.delegates.input.selectionEnd = cursorPos;
	                    this._hidden.update(e); // Update text to include indent
	                }
	            },
	            focus: () => {
	                this.$options.delegates.input.focus();
	            },
	            setValue: (value) => {
	                this.$options.value = value;
	                val(this.$options.delegates.input, this.$options.value);
	                this._hidden.update();
	            },
	            getValue: () => {
	                return this.$options.value;
	            },
	            disable: () => {
	                this.$options.readonly = true;
	            },
	            enable: () => {
	                this.$options.readonly = false;
	            }
	        };
	        this.config = {
	            width: '100%',
	            height: 150,
	            value: '',
	            rules: [
	                {
	                    token: '',
	                    regex: ''
	                }
	            ],
	            type: 'html',
	            delegates: {
	                input: '.input-content',
	                preview: 'pre',
	                content: 'code'
	            },
	            multiple: false,
	            usetab: false,
	            readonly: false
	        };
	        this.events = {
	            onChange: true
	        };
	        this.methods = {
	            setValue(value) {
	                this._hidden.setValue(value);
	            },
	            getValue() {
	                return this._hidden.getValue();
	            },
	            disable() {
	                this._hidden.disable();
	            },
	            enable() {
	                this._hidden.enable();
	            }
	        };
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        if (config.width) {
	            styles.width = getUnit('width', config.width);
	        }
	        if (config.height) {
	            styles.height = getUnit('height', config.height);
	        }
	        return (createElement("div", { id: this._uid, className: 'gn-syntaxinput' + (config.color ? ' is-' + config.color : '') + (config.size ? ' is-' + config.size : '') + (config.icon ? ' has-arrange' : ''), style: styles },
	            config.multiple ? (createElement("textarea", { className: "gn-textarea input-content", "on-input": this._hidden.update, "on-scroll": this._hidden.sync, "on-keydown": this._hidden.check, readOnly: this.config.readonly, style: styles, spellcheck: false })) : (createElement("input", { type: "text", className: "gn-input input-content", "on-input": this._hidden.update, "on-scroll": this._hidden.sync, "on-keydown": this._hidden.check, readOnly: this.config.readonly, style: styles })),
	            createElement("pre", { className: 'language-' + config.type, "aria-hidden": "true", style: styles, "on-click": this._hidden.focus },
	                createElement("code", { className: 'highlighting-content language-' + config.type }))));
	    }
	    beforeMount() {
	        // 일반 input 인 경우 높이고정, 탭 미사용 처리
	        if (!this.$options.multiple) {
	            this.$options.height = undefined;
	            this.$options.usetab = false;
	        }
	        if (this.$options.type === 'custom' && this.$options.patterns) {
	            prism.languages.custom = this.$options.patterns;
	        }
	    }
	    completed() {
	        attr(this.$options.delegates.preview, 'aria-hidden', 'true');
	        if (this.$options.value) {
	            this.$options.delegates.input.value = this.$options.value;
	            this.$options.delegates.content.innerHTML = this.$options.value.replace(new RegExp('&', 'g'), '&amp;').replace(new RegExp('<', 'g'), '&lt;'); /* Global RegExp */
	            prism.highlightElement(this.$options.delegates.content);
	        }
	    }
	}

	class Tagcloud extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            click: (tag) => {
	                this.$options.onClick && this.$options.onClick.call(this, tag);
	            },
	            setValue: (value) => {
	                const boundary = (this.$options.boundary.max - this.$options.boundary.min) / (this.$options.max - this.$options.min);
	                return Math.ceil(value / boundary);
	            }
	        };
	        this.config = {
	            name: this.$selector.name || this._uid,
	            min: 1,
	            max: 9,
	            boundary: {
	                min: 1,
	                max: 9
	            }
	        };
	        this.events = {
	            onClick: true
	        };
	        this.methods = {};
	        this.$selector = this.$selector;
	        this.$init(this, options);
	    }
	    template(config) {
	        const styles = {};
	        if (config.width) {
	            styles.width = getUnit('width', config.width);
	        }
	        return (createElement("div", { id: this._uid, className: "gn-tagcloud", style: styles },
	            createElement("ul", null, config.data.map((tag) => (createElement("li", null,
	                createElement("a", { "data-size": this._hidden.setValue(tag.value), "on-click": this._hidden.click(tag) }, tag.text)))))));
	    }
	    beforeMount() {
	        if (this.$options.data && this.$options.data.length) {
	            const _sortedData = sortBy(this.$options.data.slice(0), 'value');
	            this.$options.boundary.min = _sortedData[0].value;
	            this.$options.boundary.max = last(_sortedData).value;
	        }
	    }
	}

	class Tree extends GNCoreInstance {
	    constructor(name, selector, options = {}) {
	        super(name, selector, options);
	        this._hidden = {
	            select: (item, e) => {
	                if (item.disabled) {
	                    return;
	                }
	                let target = e.target;
	                // 트리 아이콘을 클릭한 경우, 텍스트로 타겟 변경
	                if (this.$options.showIcon && target.tagName === 'I') {
	                    target = parent(target);
	                }
	                if (!this.$options.multiple) {
	                    removeClass(findAll('.tree-item', this.$el), 'is-active');
	                    addClass(target, 'is-active');
	                    this.$options.onSelect && this.$options.onSelect.call(this, item, e);
	                }
	                else {
	                    toggleClass(target, 'is-active');
	                    if (hasClass(target, 'is-active')) {
	                        this.$options.onSelect && this.$options.onSelect.call(this, item, e);
	                    }
	                }
	            },
	            addChild: (index, addData) => {
	                const itemEl = findAll('.tree-item', this.$el)[index];
	                const itemData = this._hidden.findData(index);
	                if (!itemData[this.$options.childField]) {
	                    itemData[this.$options.childField] = [];
	                }
	                itemData[this.$options.childField] = itemData[this.$options.childField].concat(addData);
	                const appendTarget = siblings(itemEl, 'ul').pop();
	                if (!appendTarget) {
	                    this.$template.reRender(parent(itemEl), this._hidden.renderItem(itemData));
	                }
	                else {
	                    addData.forEach((item) => {
	                        const newItem = document.createElement('li');
	                        append(appendTarget, newItem);
	                        this.$template.reRender(newItem, this._hidden.renderItem(item));
	                    });
	                }
	            },
	            expand: (index) => {
	                const itemEl = findAll('.tree-item', this.$el)[index];
	                if (hasClass(itemEl, 'has-child')) {
	                    addClass(itemEl, 'is-open');
	                    this.$options.onToggle.call(this, this._hidden.findData(index), 'expanded', index);
	                }
	            },
	            expandAll: () => {
	                findAll('.has-child', this.$el).forEach((el) => {
	                    addClass(el, 'is-open');
	                });
	            },
	            collapse: (index) => {
	                const itemEl = findAll('.tree-item', this.$el)[index];
	                removeClass(itemEl, 'is-open');
	                this.$options.onToggle.call(this, this._hidden.findData(index), 'collapsed', index);
	            },
	            collapseAll: () => {
	                findAll('.is-open', this.$el).forEach((el) => {
	                    removeClass(el, 'is-open');
	                });
	            },
	            check: (item, e) => {
	                const target = e.target;
	                e.stopPropagation();
	                findAll('.is-checker', parents(target, 'li')[0]).forEach((c) => {
	                    c.checked = target.checked;
	                });
	                if (this.$options.checkPath && target.checked) {
	                    parents(target, 'ul')
	                        .map((list) => siblings(list, '.tree-item').pop())
	                        .filter((item) => item)
	                        .forEach((item) => {
	                        find('.is-checker', item).checked = true;
	                    });
	                }
	                this.$options.onCheck && this.$options.onCheck.call(this, item, target.checked, this._hidden.getItemIndex(target), e);
	            },
	            checkAll: () => {
	                findAll('.is-checker', this.$el).forEach((c) => {
	                    c.checked = true;
	                });
	            },
	            getChecked: (withStatus = false) => {
	                if (!this.$options.hasCheck) {
	                    return [];
	                }
	                return findAll('.is-checker', this.$el)
	                    .filter((checker) => {
	                    return checker.checked;
	                })
	                    .map((checker) => {
	                    const target = toNode(parents(checker, '.tree-item').pop());
	                    return target;
	                    //return target && this._hidden.getItemIndex(target)
	                })
	                    .map((target) => {
	                    const rowIdx = this._hidden.getItemIndex(target);
	                    const findData = this._hidden.findData(rowIdx);
	                    // 상태 정보 추가해서 넘긴다.
	                    if (withStatus) {
	                        findData.__status = {};
	                        // open 여부
	                        findData.__status.isOpened = hasClass(target, 'is-open');
	                        findData.__status.isChecked = find('.is-checker', target).checked;
	                        findData.__status.isSelected = hasClass(target, 'is-active');
	                        findData.__status.hasChildren = isArray$1(findData.child);
	                    }
	                    return findData;
	                });
	            },
	            getItemIndex: (item) => {
	                const itemList = findAll('.tree-item', this.$el);
	                return itemList.findIndex((el) => el == item);
	            },
	            getPathArray(path) {
	                const pathParts = path.split('/');
	                const result = [];
	                let currentPath = '';
	                for (let i = 0; i < pathParts.length; i++) {
	                    currentPath += (i === 0 ? '' : '/') + pathParts[i];
	                    result.push(currentPath);
	                }
	                return result;
	            },
	            filter: (keyword) => {
	                if (!keyword) {
	                    this._hidden.clearFilter();
	                    return;
	                }
	                this._hidden.showFilteredItems(keyword);
	                this._hidden.setLastVisibleChild();
	            },
	            clearFilter: () => {
	                this._hidden.collapseAll();
	                removeClass(findAll('.is-hidden', this.$el), 'is-hidden');
	            },
	            showFilteredItems: (keyword) => {
	                this._hidden.expandAll();
	                addClass(findAll('li', this.$el), 'is-hidden');
	                const itemEls = findAll('.tree-item', this.$el);
	                itemEls.forEach((el) => {
	                    if (el.title.includes(keyword)) {
	                        const paths = this._hidden.getPathArray(el.dataset.path);
	                        paths.forEach((path) => {
	                            removeClass(parent(find(`[data-path="${path}"]`, this.$el)), 'is-hidden');
	                        });
	                    }
	                });
	            },
	            setLastVisibleChild: () => {
	                const ulEls = findAll('ul', this.$el);
	                ulEls.forEach((ul) => {
	                    if (ul.children) {
	                        let lastVisibleChild;
	                        for (const child of Array.from(ul.children)) {
	                            lastVisibleChild = child.classList.contains('is-hidden') ? lastVisibleChild : child;
	                        }
	                        addClass(lastVisibleChild, 'is-last-child');
	                    }
	                });
	            },
	            findData: (index) => {
	                let deter = 0, indexData = null;
	                const findIndex = (datas, index) => {
	                    return datas.some((data) => {
	                        if (index === deter) {
	                            indexData = data;
	                            return true;
	                        }
	                        ++deter;
	                        if (isArray$1(data[this.$options.childField]) && data[this.$options.childField].length) {
	                            return findIndex(data[this.$options.childField], index);
	                        }
	                        return false;
	                    });
	                };
	                findIndex(this.$options.data, index);
	                return indexData;
	            },
	            toggle: (item, e) => {
	                e.stopPropagation();
	                const target = parent(e.target);
	                toggleClass(target, 'is-open');
	                if (!item.icon && hasClass(target, 'is-open')) {
	                    replaceClass(find('i', target), 'fa-folder', 'fa-folder-open');
	                }
	                else if (!item.icon && !hasClass(target, 'is-open')) {
	                    replaceClass(find('i', target), 'fa-folder-open', 'fa-folder');
	                }
	                this.$options.onToggle && this.$options.onToggle.call(this, item, hasClass(target, 'is-open') ? 'expanded' : 'collapsed', this._hidden.getItemIndex(target), e);
	            },
	            renderTree: (data) => {
	                return (createElement("ul", null, data.map((item) => {
	                    return this._hidden.renderItem(item);
	                })));
	            },
	            renderItem: (item) => {
	                var _a;
	                return (createElement("li", null,
	                    createElement("div", { className: ['tree-item', item[this.$options.childField] ? 'has-child' : '', item.opened ? 'is-open' : '', item.actived ? ' is-active' : '', item.disabled ? 'is-disabled' : ''].join(' '), "on-click": this._hidden.select.bind(this, item), "data-path": (_a = item.path) !== null && _a !== void 0 ? _a : '', title: item.text },
	                        // has child field - arrow toggle
	                        item[this.$options.childField] ? (createElement("div", { className: "is-toggler", "on-click": (e) => {
	                                this._hidden.toggle.call(this, item, e);
	                            } })) : (''),
	                        // has checkbox
	                        this.$options.hasCheck && item.noCheck !== true && item.noCheck !== 'true' ? (createElement("label", { className: "gn-checkbox is-no-padding", style: { width: '20px' } },
	                            createElement("input", { type: "checkbox", className: "is-checker", "on-click": (e) => {
	                                    this._hidden.check.call(this, item, e);
	                                }, defaultChecked: !!item.selected }))) : (''),
	                        // show icon
	                        this.$options.showIcon && !item.hideIcon ? (item.icon ? (createElement("span", { innerHTML: item.icon })) : (createElement("i", { style: { marginRight: '5px' }, className: 'far fa-' + (item.opened ? 'folder-open' : 'folder') }))) : (''),
	                        item.text),
	                    item[this.$options.childField] && this._hidden.renderTree(item[this.$options.childField])));
	            },
	            setPaths(data, basePath = '') {
	                return data.map(item => {
	                    const itemPath = basePath ? `${basePath}/${item.text}` : item.text;
	                    const childPath = item.child ? this.setPaths(item.child, itemPath) : null;
	                    return Object.assign(Object.assign({}, item), { path: itemPath, child: childPath });
	                });
	            }
	        };
	        this.config = {
	            textSets: {
	            /* title */
	            },
	            data: [],
	            childField: 'child',
	            hasCheck: false,
	            multiple: false,
	            checkPath: false,
	            showIcon: false,
	            hideIcon: false
	        };
	        this.events = {
	            onSelect: true,
	            onToggle: true,
	            onDoubleClick: true,
	            onCheck: true
	        };
	        this.methods = {
	            addChild(index, data) {
	                this._hidden.addChild(index, data.slice());
	            },
	            expand(index) {
	                this._hidden.expand(index);
	            },
	            expandAll() {
	                this._hidden.expandAll();
	            },
	            collapse(index) {
	                this._hidden.collapse(index);
	            },
	            collapseAll() {
	                this._hidden.collapseAll();
	            },
	            checkAll() {
	                this._hidden.checkAll();
	            },
	            getChecked(withStatus = false) {
	                return this._hidden.getChecked(withStatus);
	            },
	            getItemIndex(item) {
	                return this._hidden.getItemIndex(item);
	            },
	            findData(index) {
	                return this._hidden.findData(index);
	            },
	            filter(keyword) {
	                return this._hidden.filter(keyword);
	            }
	        };
	        this.$init(this, options);
	    }
	    template(config) {
	        config.data = this._hidden.setPaths(config.data);
	        const styles = {};
	        return (createElement("div", { id: this._uid, className: 'gn-tree' + (config.color ? ' is-' + config.color : '') + (config.type ? ' is-' + config.type : '') + (config.size ? ' is-' + config.size : ''), style: styles },
	            config.textSets.title && createElement("p", { className: "tree-label", innerHTML: config.textSets.title }),
	            this._hidden.renderTree(config.data)));
	    }
	}

	/*
	 * JS로 추가되는 컴포넌트 등록
	 * - 여기서 추가되어야 create를 통해 생성할 수 있다.
	 * */
	var gnUIComp = {
	    alert: Alert,
	    button: Button,
	    calendar: Calendar,
	    chart: Chart,
	    colorpicker: Colorpicker,
	    datepicker: Datepicker,
	    dropdown: Dropdown,
	    datagrid: DataGrid,
	    datalist: DataList,
	    growl: Growl,
	    jsonview: JsonView,
	    loader: Loader,
	    message: Message,
	    menubutton: MenuButton,
	    modal: Modal,
	    multitext: MultiTextArea,
	    picklist: Picklist,
	    progressbar: Progressbar,
	    selectbutton: SelectButton,
	    splitter: Splitter,
	    switch: Switch,
	    syntaxinput: SyntaxInput,
	    tab: Tab,
	    time: Time,
	    tagcloud: Tagcloud,
	    tooltip: Tooltip,
	    tree: Tree
	};

	// component core
	class GNCoreComponent {
	    constructor() { }
	    static getInstance() {
	        if (!GNCoreComponent.instance) {
	            GNCoreComponent.instance = new GNCoreComponent();
	        }
	        return GNCoreComponent.instance;
	    }
	    // component 생성
	    component(name, target = '', options = {}) {
	        // 생성 및 등록 - 상태관리자에 추가 됨
	        const component = new gnUIComp[name](name, target, options);
	        // 생성된 컴포넌트 return
	        return component;
	    }
	    // component 생성 객체가 있으면 리턴
	    getComponent(selector) {
	        // state manager에서 찾는다.
	        return GNUIState.getInstance()._getComponent(selector);
	    }
	}

	window.Snabbdom = Snabbdom;
	// gn core - singleton
	const gncore = GNCoreComponent.getInstance();
	class GNUI {
	    constructor() {
	        this.getComponent = gncore.getComponent;
	        this.util = utils;
	    }
	    // GNUI Component 사용할 수 있는 준비 상태 콜백
	    ready(fn) {
	        if (document.readyState !== 'loading') {
	            fn();
	            return;
	        }
	        // DOMContentLoaded 이벤트 바인딩, 완료되면 unbind 처리 후 fn 함수 호출
	        const unbind = on(document, 'DOMContentLoaded', () => {
	            unbind();
	            fn();
	        });
	    }
	    // GNUI Component 생성자 함수
	    create(type, options = {}) {
	        return gncore.component(type, options.target, options);
	    }
	}

	// instance export
	var main = new GNUI();

	return main;

}));