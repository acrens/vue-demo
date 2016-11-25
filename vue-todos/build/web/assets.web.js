webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(125);
	module.exports = __webpack_require__(128);


/***/ },

/***/ 63:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ADD_TO_CART = exports.ADD_TO_CART = 'ADD_TO_CART';
	var CHECKOUT_REQUEST = exports.CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
	var CHECKOUT_SUCCESS = exports.CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
	var CHECKOUT_FAILURE = exports.CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';
	var RECEIVE_PRODUCTS = exports.RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

/***/ },

/***/ 91:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _products = [{ "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2 }, { "id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10 }, { "id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5 }];
	
	exports.default = {
	  getProducts: function getProducts(cb) {
	    setTimeout(function () {
	      return cb(_products);
	    }, 100);
	  },
	  buyProducts: function buyProducts(products, cb, errorCb) {
	    setTimeout(function () {
	      // simulate random checkout failure.
	      Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1 ? cb() : errorCb();
	    }, 100);
	  }
	};

/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(95);
	
	var _vue = __webpack_require__(30);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _App = __webpack_require__(335);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _store = __webpack_require__(132);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _currency = __webpack_require__(129);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.filter('currency', _currency.currency);
	
	new _vue2.default({
	  el: '#app',
	  store: _store2.default,
	  render: function render(h) {
	    return h(_App2.default);
	  }
	});

/***/ },

/***/ 129:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.currency = currency;
	var digitsRE = /(\d{3})(?=\d)/g;
	
	function currency(value, currency, decimals) {
	  value = parseFloat(value);
	  if (!isFinite(value) || !value && value !== 0) return '';
	  currency = currency != null ? currency : '$';
	  decimals = decimals != null ? decimals : 2;
	  var stringified = Math.abs(value).toFixed(decimals);
	  var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	  var i = _int.length % 3;
	  var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	  var _float = decimals ? stringified.slice(-1 - decimals) : '';
	  var sign = value < 0 ? '-' : '';
	  return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	}

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.addToCart = undefined;
	
	var _mutationTypes = __webpack_require__(63);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var addToCart = exports.addToCart = function addToCart(_ref, product) {
	    var commit = _ref.commit;
	
	    if (product.inventory > 0) {
	        commit(types.ADD_TO_CART, {
	            id: product.id
	        });
	    }
	};
	
	// export const getAllProducts = ({ commit }) => {
	// 	console.log(11111111111);
	// }

/***/ },

/***/ 131:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var cartProducts = exports.cartProducts = function cartProducts(state) {
	    return state.cart.added.map(function (_ref) {
	        var id = _ref.id,
	            quantity = _ref.quantity;
	
	        var product = state.products.all.find(function (p) {
	            return p.id === id;
	        });
	        return {
	            title: product.title,
	            price: product.price,
	            quantity: quantity
	        };
	    });
	};

/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vue = __webpack_require__(30);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(43);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _actions = __webpack_require__(130);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _getters = __webpack_require__(131);
	
	var getters = _interopRequireWildcard(_getters);
	
	var _cart = __webpack_require__(133);
	
	var _cart2 = _interopRequireDefault(_cart);
	
	var _products = __webpack_require__(134);
	
	var _products2 = _interopRequireDefault(_products);
	
	var _logger = __webpack_require__(92);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vuex2.default);
	
	var debug = ("development") !== 'production';
	
	exports.default = new _vuex2.default.Store({
	    actions: actions,
	    getters: getters,
	    modules: {
	        cart: _cart2.default,
	        products: _products2.default
	    },
	    strict: debug,
	    plugins: debug ? [(0, _logger2.default)()] : []
	});

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mutations;
	
	var _shop = __webpack_require__(91);
	
	var _shop2 = _interopRequireDefault(_shop);
	
	var _mutationTypes = __webpack_require__(63);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// initial state
	// shape: [{ id, quantity }]
	var state = {
	    added: [],
	    checkoutStatus: null
	};
	
	// getters
	var getters = {
	    checkoutStatus: function checkoutStatus(state) {
	        return state.checkoutStatus;
	    }
	};
	
	// actions
	var actions = {
	    checkout: function checkout(_ref, products) {
	        var commit = _ref.commit,
	            state = _ref.state;
	
	        var savedCartItems = [].concat(_toConsumableArray(state.added));
	        commit(types.CHECKOUT_REQUEST);
	        _shop2.default.buyProducts(products, function () {
	            return commit(types.CHECKOUT_SUCCESS);
	        }, function () {
	            return commit(types.CHECKOUT_FAILURE, { savedCartItems: savedCartItems });
	        });
	    }
	};
	
	// mutations
	var mutations = (_mutations = {}, _defineProperty(_mutations, types.ADD_TO_CART, function (state, _ref2) {
	    var id = _ref2.id;
	
	    state.lastCheckout = null;
	    var record = state.added.find(function (p) {
	        return p.id === id;
	    });
	    if (!record) {
	        state.added.push({
	            id: id,
	            quantity: 1
	        });
	    } else {
	        record.quantity++;
	    }
	}), _defineProperty(_mutations, types.CHECKOUT_REQUEST, function (state) {
	    // clear cart
	    state.added = [];
	    state.checkoutStatus = null;
	}), _defineProperty(_mutations, types.CHECKOUT_SUCCESS, function (state) {
	    state.checkoutStatus = 'successful';
	}), _defineProperty(_mutations, types.CHECKOUT_FAILURE, function (state, _ref3) {
	    var savedCartItems = _ref3.savedCartItems;
	
	    // rollback to the cart saved before sending the request
	    state.added = savedCartItems;
	    state.checkoutStatus = 'failed';
	}), _mutations);
	
	exports.default = {
	    state: state,
	    getters: getters,
	    actions: actions,
	    mutations: mutations
	};

/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mutations;
	
	var _shop = __webpack_require__(91);
	
	var _shop2 = _interopRequireDefault(_shop);
	
	var _mutationTypes = __webpack_require__(63);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// initial state
	var state = {
	    all: []
	};
	
	// getters
	var getters = {
	    allProducts: function allProducts(state) {
	        return state.all;
	    }
	};
	
	// actions
	var actions = {
	    getAllProducts: function getAllProducts(_ref) {
	        var commit = _ref.commit;
	
	        _shop2.default.getProducts(function (products) {
	            commit(types.RECEIVE_PRODUCTS, { products: products });
	        });
	    }
	};
	
	// mutations
	var mutations = (_mutations = {}, _defineProperty(_mutations, types.RECEIVE_PRODUCTS, function (state, _ref2) {
	    var products = _ref2.products;
	
	    state.all = products;
	}), _defineProperty(_mutations, types.ADD_TO_CART, function (state, _ref3) {
	    var id = _ref3.id;
	
	    state.all.find(function (p) {
	        return p.id === id;
	    }).inventory--;
	}), _mutations);
	
	exports.default = {
	    state: state,
	    getters: getters,
	    actions: actions,
	    mutations: mutations
	};

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ProductList = __webpack_require__(337);
	
	var _ProductList2 = _interopRequireDefault(_ProductList);
	
	var _Cart = __webpack_require__(336);
	
	var _Cart2 = _interopRequireDefault(_Cart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  components: { ProductList: _ProductList2.default, Cart: _Cart2.default }
	};

/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var _vuex = __webpack_require__(43);
	
	exports.default = {
	  computed: _extends({}, (0, _vuex.mapGetters)({
	    products: 'cartProducts',
	    checkoutStatus: 'checkoutStatus'
	  }), {
	    total: function total() {
	      return this.products.reduce(function (total, p) {
	        return total + p.price * p.quantity;
	      }, 0);
	    }
	  }),
	  methods: {
	    checkout: function checkout(products) {
	      this.$store.dispatch('checkout', products);
	    }
	  }
	};

/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vuex = __webpack_require__(43);
	
	exports.default = {
	  computed: (0, _vuex.mapGetters)({
	    products: 'allProducts'
	  }),
	  methods: (0, _vuex.mapActions)(['addToCart']),
	  created: function created() {
	    this.$store.dispatch('getAllProducts');
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(135)
	
	/* template */
	var __vue_template__ = __webpack_require__(343)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/acrens/f2e/githubCode/vue-demo/vue-todos/assets/components/App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(25)
	  hotAPI.install(__webpack_require__(30), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4ce86152", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4ce86152", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(136)
	
	/* template */
	var __vue_template__ = __webpack_require__(340)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/acrens/f2e/githubCode/vue-demo/vue-todos/assets/components/Cart.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(25)
	  hotAPI.install(__webpack_require__(30), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0d8c13bf", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0d8c13bf", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Cart.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(137)
	
	/* template */
	var __vue_template__ = __webpack_require__(342)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/acrens/f2e/githubCode/vue-demo/vue-todos/assets/components/ProductList.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(25)
	  hotAPI.install(__webpack_require__(30), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4b61ba5e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4b61ba5e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] ProductList.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "cart"
	  }, [_vm._h('h2', ["Your Cart"]), " ", _vm._h('p', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.products.length),
	      expression: "!products.length"
	    }]
	  }, [_vm._h('i', ["Please add some products to cart."])]), " ", _vm._h('ul', [_vm._l((_vm.products), function(p) {
	    return _vm._h('li', ["\n      " + _vm._s(p.title) + " - " + _vm._s(_vm._f("currency")(p.price)) + " x " + _vm._s(p.quantity) + "\n    "])
	  })]), " ", _vm._h('p', ["Total: " + _vm._s(_vm._f("currency")(_vm.total))]), " ", _vm._h('p', [_vm._h('button', {
	    attrs: {
	      "disabled": !_vm.products.length
	    },
	    on: {
	      "click": function($event) {
	        _vm.checkout(_vm.products)
	      }
	    }
	  }, ["Checkout"])]), " ", _vm._h('p', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.checkoutStatus),
	      expression: "checkoutStatus"
	    }]
	  }, ["Checkout " + _vm._s(_vm.checkoutStatus) + "."])])
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(25).rerender("data-v-0d8c13bf", module.exports)
	  }
	}

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('ul', [_vm._l((_vm.products), function(p) {
	    return _vm._h('li', ["\n    " + _vm._s(p.title) + " - " + _vm._s(_vm._f("currency")(p.price)) + "\n    ", _vm._h('br'), " ", _vm._h('button', {
	      attrs: {
	        "disabled": !p.inventory
	      },
	      on: {
	        "click": function($event) {
	          _vm.addToCart(p)
	        }
	      }
	    }, ["\n      Add to cart\n    "])])
	  })])
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(25).rerender("data-v-4b61ba5e", module.exports)
	  }
	}

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "app"
	    }
	  }, [_vm._h('h1', ["Shopping Cart Example"]), " ", _vm._h('hr'), " ", _vm._h('h2', ["Products"]), " ", _vm._h('product-list'), " ", _vm._h('hr'), " ", _vm._h('cart')])
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(25).rerender("data-v-4ce86152", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwaS9zaG9wLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2N1cnJlbmN5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9nZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3RvcmUvbW9kdWxlcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9tb2R1bGVzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FwcC52dWU/YjY5MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DYXJ0LnZ1ZT8zZmQ5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LnZ1ZT9mNGMzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FydC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NhcnQudnVlP2Q1YjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlPzVhOGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQXBwLnZ1ZT8yMDJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0U7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImFzc2V0cy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSAnQUREX1RPX0NBUlQnXG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfUkVRVUVTVCA9ICdDSEVDS09VVF9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IENIRUNLT1VUX1NVQ0NFU1MgPSAnQ0hFQ0tPVVRfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBDSEVDS09VVF9GQUlMVVJFID0gJ0NIRUNLT1VUX0ZBSUxVUkUnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9QUk9EVUNUUyA9ICdSRUNFSVZFX1BST0RVQ1RTJ1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0b3JlL211dGF0aW9uLXR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCBfcHJvZHVjdHMgPSBbXG4gIHtcImlkXCI6IDEsIFwidGl0bGVcIjogXCJpUGFkIDQgTWluaVwiLCBcInByaWNlXCI6IDUwMC4wMSwgXCJpbnZlbnRvcnlcIjogMn0sXG4gIHtcImlkXCI6IDIsIFwidGl0bGVcIjogXCJIJk0gVC1TaGlydCBXaGl0ZVwiLCBcInByaWNlXCI6IDEwLjk5LCBcImludmVudG9yeVwiOiAxMH0sXG4gIHtcImlkXCI6IDMsIFwidGl0bGVcIjogXCJDaGFybGkgWENYIC0gU3Vja2VyIENEXCIsIFwicHJpY2VcIjogMTkuOTksIFwiaW52ZW50b3J5XCI6IDV9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0UHJvZHVjdHMgKGNiKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjYihfcHJvZHVjdHMpLCAxMDApXG4gIH0sXG5cbiAgYnV5UHJvZHVjdHMgKHByb2R1Y3RzLCBjYiwgZXJyb3JDYikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gc2ltdWxhdGUgcmFuZG9tIGNoZWNrb3V0IGZhaWx1cmUuXG4gICAgICAoTWF0aC5yYW5kb20oKSA+IDAuNSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1BoYW50b21KUycpID4gLTEpXG4gICAgICAgID8gY2IoKVxuICAgICAgICA6IGVycm9yQ2IoKVxuICAgIH0sIDEwMClcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2FwaS9zaG9wLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAudnVlJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5pbXBvcnQgeyBjdXJyZW5jeSB9IGZyb20gJy4vY3VycmVuY3knXG5cblZ1ZS5maWx0ZXIoJ2N1cnJlbmN5JywgY3VycmVuY3kpXG5cbm5ldyBWdWUoe1xuICBlbDogJyNhcHAnLFxuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoQXBwKVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgZGlnaXRzUkUgPSAvKFxcZHszfSkoPz1cXGQpL2dcblxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbmN5ICh2YWx1ZSwgY3VycmVuY3ksIGRlY2ltYWxzKSB7XG4gIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSlcbiAgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkgfHwgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkpIHJldHVybiAnJ1xuICBjdXJyZW5jeSA9IGN1cnJlbmN5ICE9IG51bGwgPyBjdXJyZW5jeSA6ICckJ1xuICBkZWNpbWFscyA9IGRlY2ltYWxzICE9IG51bGwgPyBkZWNpbWFscyA6IDJcbiAgdmFyIHN0cmluZ2lmaWVkID0gTWF0aC5hYnModmFsdWUpLnRvRml4ZWQoZGVjaW1hbHMpXG4gIHZhciBfaW50ID0gZGVjaW1hbHNcbiAgICA/IHN0cmluZ2lmaWVkLnNsaWNlKDAsIC0xIC0gZGVjaW1hbHMpXG4gICAgOiBzdHJpbmdpZmllZFxuICB2YXIgaSA9IF9pbnQubGVuZ3RoICUgM1xuICB2YXIgaGVhZCA9IGkgPiAwXG4gICAgPyAoX2ludC5zbGljZSgwLCBpKSArIChfaW50Lmxlbmd0aCA+IDMgPyAnLCcgOiAnJykpXG4gICAgOiAnJ1xuICB2YXIgX2Zsb2F0ID0gZGVjaW1hbHNcbiAgICA/IHN0cmluZ2lmaWVkLnNsaWNlKC0xIC0gZGVjaW1hbHMpXG4gICAgOiAnJ1xuICB2YXIgc2lnbiA9IHZhbHVlIDwgMCA/ICctJyA6ICcnXG4gIHJldHVybiBzaWduICsgY3VycmVuY3kgKyBoZWFkICtcbiAgICBfaW50LnNsaWNlKGkpLnJlcGxhY2UoZGlnaXRzUkUsICckMSwnKSArXG4gICAgX2Zsb2F0XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvY3VycmVuY3kuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL211dGF0aW9uLXR5cGVzJ1xuXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHsgY29tbWl0IH0sIHByb2R1Y3QpID0+IHtcbiAgICBpZiAocHJvZHVjdC5pbnZlbnRvcnkgPiAwKSB7XG4gICAgICAgIGNvbW1pdCh0eXBlcy5BRERfVE9fQ0FSVCwge1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWRcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0cyA9ICh7IGNvbW1pdCB9KSA9PiB7XG4vLyBcdGNvbnNvbGUubG9nKDExMTExMTExMTExKTtcbi8vIH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zdG9yZS9hY3Rpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0IGNvbnN0IGNhcnRQcm9kdWN0cyA9IHN0YXRlID0+IHtcbiAgICByZXR1cm4gc3RhdGUuY2FydC5hZGRlZC5tYXAoKHsgaWQsIHF1YW50aXR5IH0pID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzLmFsbC5maW5kKHAgPT4gcC5pZCA9PT0gaWQpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogcHJvZHVjdC50aXRsZSxcbiAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlLFxuICAgICAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zdG9yZS9nZXR0ZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgKiBhcyBnZXR0ZXJzIGZyb20gJy4vZ2V0dGVycydcbmltcG9ydCBjYXJ0IGZyb20gJy4vbW9kdWxlcy9jYXJ0J1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vbW9kdWxlcy9wcm9kdWN0cydcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAnLi4vLi4vc3JjL3BsdWdpbnMvbG9nZ2VyJ1xuXG5WdWUudXNlKFZ1ZXgpXG5cbmNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gICAgYWN0aW9ucyxcbiAgICBnZXR0ZXJzLFxuICAgIG1vZHVsZXM6IHtcbiAgICAgICAgY2FydCxcbiAgICAgICAgcHJvZHVjdHNcbiAgICB9LFxuICAgIHN0cmljdDogZGVidWcsXG4gICAgcGx1Z2luczogZGVidWcgPyBbY3JlYXRlTG9nZ2VyKCldIDogW11cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zdG9yZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBzaG9wIGZyb20gJy4uLy4uL2FwaS9zaG9wJ1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnXG5cbi8vIGluaXRpYWwgc3RhdGVcbi8vIHNoYXBlOiBbeyBpZCwgcXVhbnRpdHkgfV1cbmNvbnN0IHN0YXRlID0ge1xuICAgIGFkZGVkOiBbXSxcbiAgICBjaGVja291dFN0YXR1czogbnVsbFxufVxuXG4vLyBnZXR0ZXJzXG5jb25zdCBnZXR0ZXJzID0ge1xuICAgIGNoZWNrb3V0U3RhdHVzOiBzdGF0ZSA9PiBzdGF0ZS5jaGVja291dFN0YXR1c1xufVxuXG4vLyBhY3Rpb25zXG5jb25zdCBhY3Rpb25zID0ge1xuICAgIGNoZWNrb3V0KHsgY29tbWl0LCBzdGF0ZSB9LCBwcm9kdWN0cykge1xuICAgICAgICBjb25zdCBzYXZlZENhcnRJdGVtcyA9IFsuLi5zdGF0ZS5hZGRlZF1cbiAgICAgICAgY29tbWl0KHR5cGVzLkNIRUNLT1VUX1JFUVVFU1QpXG4gICAgICAgIHNob3AuYnV5UHJvZHVjdHMoXG4gICAgICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgICAgICgpID0+IGNvbW1pdCh0eXBlcy5DSEVDS09VVF9TVUNDRVNTKSxcbiAgICAgICAgICAgICgpID0+IGNvbW1pdCh0eXBlcy5DSEVDS09VVF9GQUlMVVJFLCB7IHNhdmVkQ2FydEl0ZW1zIH0pXG4gICAgICAgIClcbiAgICB9XG59XG5cbi8vIG11dGF0aW9uc1xuY29uc3QgbXV0YXRpb25zID0ge1xuICAgIFt0eXBlcy5BRERfVE9fQ0FSVF0oc3RhdGUsIHsgaWQgfSkge1xuICAgICAgICBzdGF0ZS5sYXN0Q2hlY2tvdXQgPSBudWxsXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IHN0YXRlLmFkZGVkLmZpbmQocCA9PiBwLmlkID09PSBpZClcbiAgICAgICAgaWYgKCFyZWNvcmQpIHtcbiAgICAgICAgICAgIHN0YXRlLmFkZGVkLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVjb3JkLnF1YW50aXR5KytcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBbdHlwZXMuQ0hFQ0tPVVRfUkVRVUVTVF0oc3RhdGUpIHtcbiAgICAgICAgLy8gY2xlYXIgY2FydFxuICAgICAgICBzdGF0ZS5hZGRlZCA9IFtdXG4gICAgICAgIHN0YXRlLmNoZWNrb3V0U3RhdHVzID0gbnVsbFxuICAgIH0sXG5cbiAgICBbdHlwZXMuQ0hFQ0tPVVRfU1VDQ0VTU10oc3RhdGUpIHtcbiAgICAgICAgc3RhdGUuY2hlY2tvdXRTdGF0dXMgPSAnc3VjY2Vzc2Z1bCdcbiAgICB9LFxuXG4gICAgW3R5cGVzLkNIRUNLT1VUX0ZBSUxVUkVdKHN0YXRlLCB7IHNhdmVkQ2FydEl0ZW1zIH0pIHtcbiAgICAgICAgLy8gcm9sbGJhY2sgdG8gdGhlIGNhcnQgc2F2ZWQgYmVmb3JlIHNlbmRpbmcgdGhlIHJlcXVlc3RcbiAgICAgICAgc3RhdGUuYWRkZWQgPSBzYXZlZENhcnRJdGVtc1xuICAgICAgICBzdGF0ZS5jaGVja291dFN0YXR1cyA9ICdmYWlsZWQnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhdGUsXG4gICAgZ2V0dGVycyxcbiAgICBhY3Rpb25zLFxuICAgIG11dGF0aW9uc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3RvcmUvbW9kdWxlcy9jYXJ0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHNob3AgZnJvbSAnLi4vLi4vYXBpL3Nob3AnXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcydcblxuLy8gaW5pdGlhbCBzdGF0ZVxuY29uc3Qgc3RhdGUgPSB7XG4gICAgYWxsOiBbXVxufVxuXG4vLyBnZXR0ZXJzXG5jb25zdCBnZXR0ZXJzID0ge1xuICAgIGFsbFByb2R1Y3RzOiBzdGF0ZSA9PiBzdGF0ZS5hbGxcbn1cblxuLy8gYWN0aW9uc1xuY29uc3QgYWN0aW9ucyA9IHtcbiAgICBnZXRBbGxQcm9kdWN0cyh7IGNvbW1pdCB9KSB7XG4gICAgICAgIHNob3AuZ2V0UHJvZHVjdHMocHJvZHVjdHMgPT4ge1xuICAgICAgICAgICAgY29tbWl0KHR5cGVzLlJFQ0VJVkVfUFJPRFVDVFMsIHsgcHJvZHVjdHMgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8vIG11dGF0aW9uc1xuY29uc3QgbXV0YXRpb25zID0ge1xuICAgIFt0eXBlcy5SRUNFSVZFX1BST0RVQ1RTXShzdGF0ZSwgeyBwcm9kdWN0cyB9KSB7XG4gICAgICAgIHN0YXRlLmFsbCA9IHByb2R1Y3RzXG4gICAgfSxcblxuICAgIFt0eXBlcy5BRERfVE9fQ0FSVF0oc3RhdGUsIHsgaWQgfSkge1xuICAgICAgICBzdGF0ZS5hbGwuZmluZChwID0+IHAuaWQgPT09IGlkKS5pbnZlbnRvcnktLVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXRlLFxuICAgIGdldHRlcnMsXG4gICAgYWN0aW9ucyxcbiAgICBtdXRhdGlvbnNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0b3JlL21vZHVsZXMvcHJvZHVjdHMuanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiAgICA8aDE+U2hvcHBpbmcgQ2FydCBFeGFtcGxlPC9oMT5cbiAgICA8aHI+XG4gICAgPGgyPlByb2R1Y3RzPC9oMj5cbiAgICA8cHJvZHVjdC1saXN0PjwvcHJvZHVjdC1saXN0PlxuICAgIDxocj5cbiAgICA8Y2FydD48L2NhcnQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuL1Byb2R1Y3RMaXN0LnZ1ZSdcbmltcG9ydCBDYXJ0IGZyb20gJy4vQ2FydC52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHsgUHJvZHVjdExpc3QsIENhcnQgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci82LjIuOC9iYWJlbC1sb2FkZXIvbGliIS4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hc3NldHMvY29tcG9uZW50cy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2FydFwiPlxuICAgIDxoMj5Zb3VyIENhcnQ8L2gyPlxuICAgIDxwIHYtc2hvdz1cIiFwcm9kdWN0cy5sZW5ndGhcIj48aT5QbGVhc2UgYWRkIHNvbWUgcHJvZHVjdHMgdG8gY2FydC48L2k+PC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInAgaW4gcHJvZHVjdHNcIj5cbiAgICAgICAge3sgcC50aXRsZSB9fSAtIHt7IHAucHJpY2UgfCBjdXJyZW5jeSB9fSB4IHt7IHAucXVhbnRpdHkgfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8cD5Ub3RhbDoge3sgdG90YWwgfCBjdXJyZW5jeSB9fTwvcD5cbiAgICA8cD48YnV0dG9uIDpkaXNhYmxlZD1cIiFwcm9kdWN0cy5sZW5ndGhcIiBAY2xpY2s9XCJjaGVja291dChwcm9kdWN0cylcIj5DaGVja291dDwvYnV0dG9uPjwvcD5cbiAgICA8cCB2LXNob3c9XCJjaGVja291dFN0YXR1c1wiPkNoZWNrb3V0IHt7IGNoZWNrb3V0U3RhdHVzIH19LjwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICBwcm9kdWN0czogJ2NhcnRQcm9kdWN0cycsXG4gICAgICBjaGVja291dFN0YXR1czogJ2NoZWNrb3V0U3RhdHVzJ1xuICAgIH0pLFxuICAgIHRvdGFsICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLnJlZHVjZSgodG90YWwsIHApID0+IHtcbiAgICAgICAgcmV0dXJuIHRvdGFsICsgcC5wcmljZSAqIHAucXVhbnRpdHlcbiAgICAgIH0sIDApXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2hlY2tvdXQgKHByb2R1Y3RzKSB7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY2hlY2tvdXQnLCBwcm9kdWN0cylcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNi4yLjgvYmFiZWwtbG9hZGVyL2xpYiEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXNzZXRzL2NvbXBvbmVudHMvQ2FydC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gIDx1bD5cbiAgICA8bGkgdi1mb3I9XCJwIGluIHByb2R1Y3RzXCI+XG4gICAgICB7eyBwLnRpdGxlIH19IC0ge3sgcC5wcmljZSB8IGN1cnJlbmN5IH19XG4gICAgICA8YnI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIDpkaXNhYmxlZD1cIiFwLmludmVudG9yeVwiXG4gICAgICAgIEBjbGljaz1cImFkZFRvQ2FydChwKVwiPlxuICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbiAgPC91bD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xuICAgIHByb2R1Y3RzOiAnYWxsUHJvZHVjdHMnXG4gIH0pLFxuICBtZXRob2RzOiBtYXBBY3Rpb25zKFtcbiAgICAnYWRkVG9DYXJ0J1xuICBdKSxcbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldEFsbFByb2R1Y3RzJylcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci82LjIuOC9iYWJlbC1sb2FkZXIvbGliIS4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hc3NldHMvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiAgICA8aDE+U2hvcHBpbmcgQ2FydCBFeGFtcGxlPC9oMT5cbiAgICA8aHI+XG4gICAgPGgyPlByb2R1Y3RzPC9oMj5cbiAgICA8cHJvZHVjdC1saXN0PjwvcHJvZHVjdC1saXN0PlxuICAgIDxocj5cbiAgICA8Y2FydD48L2NhcnQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuL1Byb2R1Y3RMaXN0LnZ1ZSdcbmltcG9ydCBDYXJ0IGZyb20gJy4vQ2FydC52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHsgUHJvZHVjdExpc3QsIENhcnQgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvY29tcG9uZW50cy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAzMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2FydFwiPlxuICAgIDxoMj5Zb3VyIENhcnQ8L2gyPlxuICAgIDxwIHYtc2hvdz1cIiFwcm9kdWN0cy5sZW5ndGhcIj48aT5QbGVhc2UgYWRkIHNvbWUgcHJvZHVjdHMgdG8gY2FydC48L2k+PC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInAgaW4gcHJvZHVjdHNcIj5cbiAgICAgICAge3sgcC50aXRsZSB9fSAtIHt7IHAucHJpY2UgfCBjdXJyZW5jeSB9fSB4IHt7IHAucXVhbnRpdHkgfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8cD5Ub3RhbDoge3sgdG90YWwgfCBjdXJyZW5jeSB9fTwvcD5cbiAgICA8cD48YnV0dG9uIDpkaXNhYmxlZD1cIiFwcm9kdWN0cy5sZW5ndGhcIiBAY2xpY2s9XCJjaGVja291dChwcm9kdWN0cylcIj5DaGVja291dDwvYnV0dG9uPjwvcD5cbiAgICA8cCB2LXNob3c9XCJjaGVja291dFN0YXR1c1wiPkNoZWNrb3V0IHt7IGNoZWNrb3V0U3RhdHVzIH19LjwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICBwcm9kdWN0czogJ2NhcnRQcm9kdWN0cycsXG4gICAgICBjaGVja291dFN0YXR1czogJ2NoZWNrb3V0U3RhdHVzJ1xuICAgIH0pLFxuICAgIHRvdGFsICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLnJlZHVjZSgodG90YWwsIHApID0+IHtcbiAgICAgICAgcmV0dXJuIHRvdGFsICsgcC5wcmljZSAqIHAucXVhbnRpdHlcbiAgICAgIH0sIDApXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2hlY2tvdXQgKHByb2R1Y3RzKSB7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY2hlY2tvdXQnLCBwcm9kdWN0cylcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2NvbXBvbmVudHMvQ2FydC52dWVcbi8vIG1vZHVsZSBpZCA9IDMzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gIDx1bD5cbiAgICA8bGkgdi1mb3I9XCJwIGluIHByb2R1Y3RzXCI+XG4gICAgICB7eyBwLnRpdGxlIH19IC0ge3sgcC5wcmljZSB8IGN1cnJlbmN5IH19XG4gICAgICA8YnI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIDpkaXNhYmxlZD1cIiFwLmludmVudG9yeVwiXG4gICAgICAgIEBjbGljaz1cImFkZFRvQ2FydChwKVwiPlxuICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbiAgPC91bD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xuICAgIHByb2R1Y3RzOiAnYWxsUHJvZHVjdHMnXG4gIH0pLFxuICBtZXRob2RzOiBtYXBBY3Rpb25zKFtcbiAgICAnYWRkVG9DYXJ0J1xuICBdKSxcbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldEFsbFByb2R1Y3RzJylcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDMzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjYXJ0XCI+XG4gICAgPGgyPllvdXIgQ2FydDwvaDI+XG4gICAgPHAgdi1zaG93PVwiIXByb2R1Y3RzLmxlbmd0aFwiPjxpPlBsZWFzZSBhZGQgc29tZSBwcm9kdWN0cyB0byBjYXJ0LjwvaT48L3A+XG4gICAgPHVsPlxuICAgICAgPGxpIHYtZm9yPVwicCBpbiBwcm9kdWN0c1wiPlxuICAgICAgICB7eyBwLnRpdGxlIH19IC0ge3sgcC5wcmljZSB8IGN1cnJlbmN5IH19IHgge3sgcC5xdWFudGl0eSB9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxwPlRvdGFsOiB7eyB0b3RhbCB8IGN1cnJlbmN5IH19PC9wPlxuICAgIDxwPjxidXR0b24gOmRpc2FibGVkPVwiIXByb2R1Y3RzLmxlbmd0aFwiIEBjbGljaz1cImNoZWNrb3V0KHByb2R1Y3RzKVwiPkNoZWNrb3V0PC9idXR0b24+PC9wPlxuICAgIDxwIHYtc2hvdz1cImNoZWNrb3V0U3RhdHVzXCI+Q2hlY2tvdXQge3sgY2hlY2tvdXRTdGF0dXMgfX0uPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgIHByb2R1Y3RzOiAnY2FydFByb2R1Y3RzJyxcbiAgICAgIGNoZWNrb3V0U3RhdHVzOiAnY2hlY2tvdXRTdGF0dXMnXG4gICAgfSksXG4gICAgdG90YWwgKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMucmVkdWNlKCh0b3RhbCwgcCkgPT4ge1xuICAgICAgICByZXR1cm4gdG90YWwgKyBwLnByaWNlICogcC5xdWFudGl0eVxuICAgICAgfSwgMClcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGVja291dCAocHJvZHVjdHMpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdjaGVja291dCcsIHByb2R1Y3RzKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTBkOGMxM2JmIS4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fzc2V0cy9jb21wb25lbnRzL0NhcnQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxuICA8dWw+XG4gICAgPGxpIHYtZm9yPVwicCBpbiBwcm9kdWN0c1wiPlxuICAgICAge3sgcC50aXRsZSB9fSAtIHt7IHAucHJpY2UgfCBjdXJyZW5jeSB9fVxuICAgICAgPGJyPlxuICAgICAgPGJ1dHRvblxuICAgICAgICA6ZGlzYWJsZWQ9XCIhcC5pbnZlbnRvcnlcIlxuICAgICAgICBAY2xpY2s9XCJhZGRUb0NhcnQocClcIj5cbiAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbGk+XG4gIDwvdWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICBwcm9kdWN0czogJ2FsbFByb2R1Y3RzJ1xuICB9KSxcbiAgbWV0aG9kczogbWFwQWN0aW9ucyhbXG4gICAgJ2FkZFRvQ2FydCdcbiAgXSksXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRBbGxQcm9kdWN0cycpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00YjYxYmE1ZSEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hc3NldHMvY29tcG9uZW50cy9Qcm9kdWN0TGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDM0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiAgICA8aDE+U2hvcHBpbmcgQ2FydCBFeGFtcGxlPC9oMT5cbiAgICA8aHI+XG4gICAgPGgyPlByb2R1Y3RzPC9oMj5cbiAgICA8cHJvZHVjdC1saXN0PjwvcHJvZHVjdC1saXN0PlxuICAgIDxocj5cbiAgICA8Y2FydD48L2NhcnQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuL1Byb2R1Y3RMaXN0LnZ1ZSdcbmltcG9ydCBDYXJ0IGZyb20gJy4vQ2FydC52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHsgUHJvZHVjdExpc3QsIENhcnQgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRjZTg2MTUyIS4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fzc2V0cy9jb21wb25lbnRzL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDM0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9