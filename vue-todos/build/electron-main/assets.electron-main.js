exports.ids = [1];
exports.modules = {

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
	
	var _App = __webpack_require__(334);
	
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
	
	var _ProductList = __webpack_require__(336);
	
	var _ProductList2 = _interopRequireDefault(_ProductList);
	
	var _Cart = __webpack_require__(335);
	
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

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(135)
	
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

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(136)
	
	/* template */
	var __vue_template__ = __webpack_require__(339)
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

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(137)
	
	/* template */
	var __vue_template__ = __webpack_require__(341)
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

/***/ 339:
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

/***/ 341:
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

/***/ 342:
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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwaS9zaG9wLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2N1cnJlbmN5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9nZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3RvcmUvbW9kdWxlcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9tb2R1bGVzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FwcC52dWU/YjY5MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DYXJ0LnZ1ZT8zZmQ5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LnZ1ZT9mNGMzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FydC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NhcnQudnVlP2Q1YjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlPzVhOGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQXBwLnZ1ZT8yMDJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJhc3NldHMuZWxlY3Ryb24tbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBRERfVE9fQ0FSVCA9ICdBRERfVE9fQ0FSVCdcbmV4cG9ydCBjb25zdCBDSEVDS09VVF9SRVFVRVNUID0gJ0NIRUNLT1VUX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfU1VDQ0VTUyA9ICdDSEVDS09VVF9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0ZBSUxVUkUgPSAnQ0hFQ0tPVVRfRkFJTFVSRSdcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1BST0RVQ1RTID0gJ1JFQ0VJVkVfUFJPRFVDVFMnXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImNvbnN0IF9wcm9kdWN0cyA9IFtcbiAge1wiaWRcIjogMSwgXCJ0aXRsZVwiOiBcImlQYWQgNCBNaW5pXCIsIFwicHJpY2VcIjogNTAwLjAxLCBcImludmVudG9yeVwiOiAyfSxcbiAge1wiaWRcIjogMiwgXCJ0aXRsZVwiOiBcIkgmTSBULVNoaXJ0IFdoaXRlXCIsIFwicHJpY2VcIjogMTAuOTksIFwiaW52ZW50b3J5XCI6IDEwfSxcbiAge1wiaWRcIjogMywgXCJ0aXRsZVwiOiBcIkNoYXJsaSBYQ1ggLSBTdWNrZXIgQ0RcIiwgXCJwcmljZVwiOiAxOS45OSwgXCJpbnZlbnRvcnlcIjogNX1cbl1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRQcm9kdWN0cyAoY2IpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNiKF9wcm9kdWN0cyksIDEwMClcbiAgfSxcblxuICBidXlQcm9kdWN0cyAocHJvZHVjdHMsIGNiLCBlcnJvckNiKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBzaW11bGF0ZSByYW5kb20gY2hlY2tvdXQgZmFpbHVyZS5cbiAgICAgIChNYXRoLnJhbmRvbSgpID4gMC41IHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignUGhhbnRvbUpTJykgPiAtMSlcbiAgICAgICAgPyBjYigpXG4gICAgICAgIDogZXJyb3JDYigpXG4gICAgfSwgMTAwKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvYXBpL3Nob3AuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC52dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcbmltcG9ydCB7IGN1cnJlbmN5IH0gZnJvbSAnLi9jdXJyZW5jeSdcblxuVnVlLmZpbHRlcignY3VycmVuY3knLCBjdXJyZW5jeSlcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaChBcHApXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCBkaWdpdHNSRSA9IC8oXFxkezN9KSg/PVxcZCkvZ1xuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3kgKHZhbHVlLCBjdXJyZW5jeSwgZGVjaW1hbHMpIHtcbiAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKVxuICBpZiAoIWlzRmluaXRlKHZhbHVlKSB8fCAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSkgcmV0dXJuICcnXG4gIGN1cnJlbmN5ID0gY3VycmVuY3kgIT0gbnVsbCA/IGN1cnJlbmN5IDogJyQnXG4gIGRlY2ltYWxzID0gZGVjaW1hbHMgIT0gbnVsbCA/IGRlY2ltYWxzIDogMlxuICB2YXIgc3RyaW5naWZpZWQgPSBNYXRoLmFicyh2YWx1ZSkudG9GaXhlZChkZWNpbWFscylcbiAgdmFyIF9pbnQgPSBkZWNpbWFsc1xuICAgID8gc3RyaW5naWZpZWQuc2xpY2UoMCwgLTEgLSBkZWNpbWFscylcbiAgICA6IHN0cmluZ2lmaWVkXG4gIHZhciBpID0gX2ludC5sZW5ndGggJSAzXG4gIHZhciBoZWFkID0gaSA+IDBcbiAgICA/IChfaW50LnNsaWNlKDAsIGkpICsgKF9pbnQubGVuZ3RoID4gMyA/ICcsJyA6ICcnKSlcbiAgICA6ICcnXG4gIHZhciBfZmxvYXQgPSBkZWNpbWFsc1xuICAgID8gc3RyaW5naWZpZWQuc2xpY2UoLTEgLSBkZWNpbWFscylcbiAgICA6ICcnXG4gIHZhciBzaWduID0gdmFsdWUgPCAwID8gJy0nIDogJydcbiAgcmV0dXJuIHNpZ24gKyBjdXJyZW5jeSArIGhlYWQgK1xuICAgIF9pbnQuc2xpY2UoaSkucmVwbGFjZShkaWdpdHNSRSwgJyQxLCcpICtcbiAgICBfZmxvYXRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9jdXJyZW5jeS5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vbXV0YXRpb24tdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAoeyBjb21taXQgfSwgcHJvZHVjdCkgPT4ge1xuICAgIGlmIChwcm9kdWN0LmludmVudG9yeSA+IDApIHtcbiAgICAgICAgY29tbWl0KHR5cGVzLkFERF9UT19DQVJULCB7XG4gICAgICAgICAgICBpZDogcHJvZHVjdC5pZFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gZXhwb3J0IGNvbnN0IGdldEFsbFByb2R1Y3RzID0gKHsgY29tbWl0IH0pID0+IHtcbi8vIFx0Y29uc29sZS5sb2coMTExMTExMTExMTEpO1xuLy8gfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0b3JlL2FjdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnQgY29uc3QgY2FydFByb2R1Y3RzID0gc3RhdGUgPT4ge1xuICAgIHJldHVybiBzdGF0ZS5jYXJ0LmFkZGVkLm1hcCgoeyBpZCwgcXVhbnRpdHkgfSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUucHJvZHVjdHMuYWxsLmZpbmQocCA9PiBwLmlkID09PSBpZClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBwcm9kdWN0LnRpdGxlLFxuICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXG4gICAgICAgICAgICBxdWFudGl0eVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0b3JlL2dldHRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCAqIGFzIGdldHRlcnMgZnJvbSAnLi9nZXR0ZXJzJ1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9tb2R1bGVzL2NhcnQnXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9tb2R1bGVzL3Byb2R1Y3RzJ1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICcuLi8uLi9zcmMvcGx1Z2lucy9sb2dnZXInXG5cblZ1ZS51c2UoVnVleClcblxuY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgICBhY3Rpb25zLFxuICAgIGdldHRlcnMsXG4gICAgbW9kdWxlczoge1xuICAgICAgICBjYXJ0LFxuICAgICAgICBwcm9kdWN0c1xuICAgIH0sXG4gICAgc3RyaWN0OiBkZWJ1ZyxcbiAgICBwbHVnaW5zOiBkZWJ1ZyA/IFtjcmVhdGVMb2dnZXIoKV0gOiBbXVxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0b3JlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHNob3AgZnJvbSAnLi4vLi4vYXBpL3Nob3AnXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9tdXRhdGlvbi10eXBlcydcblxuLy8gaW5pdGlhbCBzdGF0ZVxuLy8gc2hhcGU6IFt7IGlkLCBxdWFudGl0eSB9XVxuY29uc3Qgc3RhdGUgPSB7XG4gICAgYWRkZWQ6IFtdLFxuICAgIGNoZWNrb3V0U3RhdHVzOiBudWxsXG59XG5cbi8vIGdldHRlcnNcbmNvbnN0IGdldHRlcnMgPSB7XG4gICAgY2hlY2tvdXRTdGF0dXM6IHN0YXRlID0+IHN0YXRlLmNoZWNrb3V0U3RhdHVzXG59XG5cbi8vIGFjdGlvbnNcbmNvbnN0IGFjdGlvbnMgPSB7XG4gICAgY2hlY2tvdXQoeyBjb21taXQsIHN0YXRlIH0sIHByb2R1Y3RzKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkQ2FydEl0ZW1zID0gWy4uLnN0YXRlLmFkZGVkXVxuICAgICAgICBjb21taXQodHlwZXMuQ0hFQ0tPVVRfUkVRVUVTVClcbiAgICAgICAgc2hvcC5idXlQcm9kdWN0cyhcbiAgICAgICAgICAgIHByb2R1Y3RzLFxuICAgICAgICAgICAgKCkgPT4gY29tbWl0KHR5cGVzLkNIRUNLT1VUX1NVQ0NFU1MpLFxuICAgICAgICAgICAgKCkgPT4gY29tbWl0KHR5cGVzLkNIRUNLT1VUX0ZBSUxVUkUsIHsgc2F2ZWRDYXJ0SXRlbXMgfSlcbiAgICAgICAgKVxuICAgIH1cbn1cblxuLy8gbXV0YXRpb25zXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gICAgW3R5cGVzLkFERF9UT19DQVJUXShzdGF0ZSwgeyBpZCB9KSB7XG4gICAgICAgIHN0YXRlLmxhc3RDaGVja291dCA9IG51bGxcbiAgICAgICAgY29uc3QgcmVjb3JkID0gc3RhdGUuYWRkZWQuZmluZChwID0+IHAuaWQgPT09IGlkKVxuICAgICAgICBpZiAoIXJlY29yZCkge1xuICAgICAgICAgICAgc3RhdGUuYWRkZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWNvcmQucXVhbnRpdHkrK1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIFt0eXBlcy5DSEVDS09VVF9SRVFVRVNUXShzdGF0ZSkge1xuICAgICAgICAvLyBjbGVhciBjYXJ0XG4gICAgICAgIHN0YXRlLmFkZGVkID0gW11cbiAgICAgICAgc3RhdGUuY2hlY2tvdXRTdGF0dXMgPSBudWxsXG4gICAgfSxcblxuICAgIFt0eXBlcy5DSEVDS09VVF9TVUNDRVNTXShzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5jaGVja291dFN0YXR1cyA9ICdzdWNjZXNzZnVsJ1xuICAgIH0sXG5cbiAgICBbdHlwZXMuQ0hFQ0tPVVRfRkFJTFVSRV0oc3RhdGUsIHsgc2F2ZWRDYXJ0SXRlbXMgfSkge1xuICAgICAgICAvLyByb2xsYmFjayB0byB0aGUgY2FydCBzYXZlZCBiZWZvcmUgc2VuZGluZyB0aGUgcmVxdWVzdFxuICAgICAgICBzdGF0ZS5hZGRlZCA9IHNhdmVkQ2FydEl0ZW1zXG4gICAgICAgIHN0YXRlLmNoZWNrb3V0U3RhdHVzID0gJ2ZhaWxlZCdcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGF0ZSxcbiAgICBnZXR0ZXJzLFxuICAgIGFjdGlvbnMsXG4gICAgbXV0YXRpb25zXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zdG9yZS9tb2R1bGVzL2NhcnQuanNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgc2hvcCBmcm9tICcuLi8uLi9hcGkvc2hvcCdcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJ1xuXG4vLyBpbml0aWFsIHN0YXRlXG5jb25zdCBzdGF0ZSA9IHtcbiAgICBhbGw6IFtdXG59XG5cbi8vIGdldHRlcnNcbmNvbnN0IGdldHRlcnMgPSB7XG4gICAgYWxsUHJvZHVjdHM6IHN0YXRlID0+IHN0YXRlLmFsbFxufVxuXG4vLyBhY3Rpb25zXG5jb25zdCBhY3Rpb25zID0ge1xuICAgIGdldEFsbFByb2R1Y3RzKHsgY29tbWl0IH0pIHtcbiAgICAgICAgc2hvcC5nZXRQcm9kdWN0cyhwcm9kdWN0cyA9PiB7XG4gICAgICAgICAgICBjb21taXQodHlwZXMuUkVDRUlWRV9QUk9EVUNUUywgeyBwcm9kdWN0cyB9KVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gbXV0YXRpb25zXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gICAgW3R5cGVzLlJFQ0VJVkVfUFJPRFVDVFNdKHN0YXRlLCB7IHByb2R1Y3RzIH0pIHtcbiAgICAgICAgc3RhdGUuYWxsID0gcHJvZHVjdHNcbiAgICB9LFxuXG4gICAgW3R5cGVzLkFERF9UT19DQVJUXShzdGF0ZSwgeyBpZCB9KSB7XG4gICAgICAgIHN0YXRlLmFsbC5maW5kKHAgPT4gcC5pZCA9PT0gaWQpLmludmVudG9yeS0tXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhdGUsXG4gICAgZ2V0dGVycyxcbiAgICBhY3Rpb25zLFxuICAgIG11dGF0aW9uc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3RvcmUvbW9kdWxlcy9wcm9kdWN0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuICAgIDxoMT5TaG9wcGluZyBDYXJ0IEV4YW1wbGU8L2gxPlxuICAgIDxocj5cbiAgICA8aDI+UHJvZHVjdHM8L2gyPlxuICAgIDxwcm9kdWN0LWxpc3Q+PC9wcm9kdWN0LWxpc3Q+XG4gICAgPGhyPlxuICAgIDxjYXJ0PjwvY2FydD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vUHJvZHVjdExpc3QudnVlJ1xuaW1wb3J0IENhcnQgZnJvbSAnLi9DYXJ0LnZ1ZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBQcm9kdWN0TGlzdCwgQ2FydCB9XG59XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzYuMi44L2JhYmVsLWxvYWRlci9saWIhLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fzc2V0cy9jb21wb25lbnRzL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjYXJ0XCI+XG4gICAgPGgyPllvdXIgQ2FydDwvaDI+XG4gICAgPHAgdi1zaG93PVwiIXByb2R1Y3RzLmxlbmd0aFwiPjxpPlBsZWFzZSBhZGQgc29tZSBwcm9kdWN0cyB0byBjYXJ0LjwvaT48L3A+XG4gICAgPHVsPlxuICAgICAgPGxpIHYtZm9yPVwicCBpbiBwcm9kdWN0c1wiPlxuICAgICAgICB7eyBwLnRpdGxlIH19IC0ge3sgcC5wcmljZSB8IGN1cnJlbmN5IH19IHgge3sgcC5xdWFudGl0eSB9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxwPlRvdGFsOiB7eyB0b3RhbCB8IGN1cnJlbmN5IH19PC9wPlxuICAgIDxwPjxidXR0b24gOmRpc2FibGVkPVwiIXByb2R1Y3RzLmxlbmd0aFwiIEBjbGljaz1cImNoZWNrb3V0KHByb2R1Y3RzKVwiPkNoZWNrb3V0PC9idXR0b24+PC9wPlxuICAgIDxwIHYtc2hvdz1cImNoZWNrb3V0U3RhdHVzXCI+Q2hlY2tvdXQge3sgY2hlY2tvdXRTdGF0dXMgfX0uPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgIHByb2R1Y3RzOiAnY2FydFByb2R1Y3RzJyxcbiAgICAgIGNoZWNrb3V0U3RhdHVzOiAnY2hlY2tvdXRTdGF0dXMnXG4gICAgfSksXG4gICAgdG90YWwgKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMucmVkdWNlKCh0b3RhbCwgcCkgPT4ge1xuICAgICAgICByZXR1cm4gdG90YWwgKyBwLnByaWNlICogcC5xdWFudGl0eVxuICAgICAgfSwgMClcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGVja291dCAocHJvZHVjdHMpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdjaGVja291dCcsIHByb2R1Y3RzKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci82LjIuOC9iYWJlbC1sb2FkZXIvbGliIS4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hc3NldHMvY29tcG9uZW50cy9DYXJ0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgPHVsPlxuICAgIDxsaSB2LWZvcj1cInAgaW4gcHJvZHVjdHNcIj5cbiAgICAgIHt7IHAudGl0bGUgfX0gLSB7eyBwLnByaWNlIHwgY3VycmVuY3kgfX1cbiAgICAgIDxicj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgOmRpc2FibGVkPVwiIXAuaW52ZW50b3J5XCJcbiAgICAgICAgQGNsaWNrPVwiYWRkVG9DYXJ0KHApXCI+XG4gICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPlxuICA8L3VsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XG4gICAgcHJvZHVjdHM6ICdhbGxQcm9kdWN0cydcbiAgfSksXG4gIG1ldGhvZHM6IG1hcEFjdGlvbnMoW1xuICAgICdhZGRUb0NhcnQnXG4gIF0pLFxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0QWxsUHJvZHVjdHMnKVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzYuMi44L2JhYmVsLWxvYWRlci9saWIhLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fzc2V0cy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuICAgIDxoMT5TaG9wcGluZyBDYXJ0IEV4YW1wbGU8L2gxPlxuICAgIDxocj5cbiAgICA8aDI+UHJvZHVjdHM8L2gyPlxuICAgIDxwcm9kdWN0LWxpc3Q+PC9wcm9kdWN0LWxpc3Q+XG4gICAgPGhyPlxuICAgIDxjYXJ0PjwvY2FydD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vUHJvZHVjdExpc3QudnVlJ1xuaW1wb3J0IENhcnQgZnJvbSAnLi9DYXJ0LnZ1ZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBQcm9kdWN0TGlzdCwgQ2FydCB9XG59XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9jb21wb25lbnRzL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDMzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjYXJ0XCI+XG4gICAgPGgyPllvdXIgQ2FydDwvaDI+XG4gICAgPHAgdi1zaG93PVwiIXByb2R1Y3RzLmxlbmd0aFwiPjxpPlBsZWFzZSBhZGQgc29tZSBwcm9kdWN0cyB0byBjYXJ0LjwvaT48L3A+XG4gICAgPHVsPlxuICAgICAgPGxpIHYtZm9yPVwicCBpbiBwcm9kdWN0c1wiPlxuICAgICAgICB7eyBwLnRpdGxlIH19IC0ge3sgcC5wcmljZSB8IGN1cnJlbmN5IH19IHgge3sgcC5xdWFudGl0eSB9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxwPlRvdGFsOiB7eyB0b3RhbCB8IGN1cnJlbmN5IH19PC9wPlxuICAgIDxwPjxidXR0b24gOmRpc2FibGVkPVwiIXByb2R1Y3RzLmxlbmd0aFwiIEBjbGljaz1cImNoZWNrb3V0KHByb2R1Y3RzKVwiPkNoZWNrb3V0PC9idXR0b24+PC9wPlxuICAgIDxwIHYtc2hvdz1cImNoZWNrb3V0U3RhdHVzXCI+Q2hlY2tvdXQge3sgY2hlY2tvdXRTdGF0dXMgfX0uPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgIHByb2R1Y3RzOiAnY2FydFByb2R1Y3RzJyxcbiAgICAgIGNoZWNrb3V0U3RhdHVzOiAnY2hlY2tvdXRTdGF0dXMnXG4gICAgfSksXG4gICAgdG90YWwgKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMucmVkdWNlKCh0b3RhbCwgcCkgPT4ge1xuICAgICAgICByZXR1cm4gdG90YWwgKyBwLnByaWNlICogcC5xdWFudGl0eVxuICAgICAgfSwgMClcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGVja291dCAocHJvZHVjdHMpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdjaGVja291dCcsIHByb2R1Y3RzKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvY29tcG9uZW50cy9DYXJ0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgPHVsPlxuICAgIDxsaSB2LWZvcj1cInAgaW4gcHJvZHVjdHNcIj5cbiAgICAgIHt7IHAudGl0bGUgfX0gLSB7eyBwLnByaWNlIHwgY3VycmVuY3kgfX1cbiAgICAgIDxicj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgOmRpc2FibGVkPVwiIXAuaW52ZW50b3J5XCJcbiAgICAgICAgQGNsaWNrPVwiYWRkVG9DYXJ0KHApXCI+XG4gICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPlxuICA8L3VsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XG4gICAgcHJvZHVjdHM6ICdhbGxQcm9kdWN0cydcbiAgfSksXG4gIG1ldGhvZHM6IG1hcEFjdGlvbnMoW1xuICAgICdhZGRUb0NhcnQnXG4gIF0pLFxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0QWxsUHJvZHVjdHMnKVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNhcnRcIj5cbiAgICA8aDI+WW91ciBDYXJ0PC9oMj5cbiAgICA8cCB2LXNob3c9XCIhcHJvZHVjdHMubGVuZ3RoXCI+PGk+UGxlYXNlIGFkZCBzb21lIHByb2R1Y3RzIHRvIGNhcnQuPC9pPjwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgdi1mb3I9XCJwIGluIHByb2R1Y3RzXCI+XG4gICAgICAgIHt7IHAudGl0bGUgfX0gLSB7eyBwLnByaWNlIHwgY3VycmVuY3kgfX0geCB7eyBwLnF1YW50aXR5IH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHA+VG90YWw6IHt7IHRvdGFsIHwgY3VycmVuY3kgfX08L3A+XG4gICAgPHA+PGJ1dHRvbiA6ZGlzYWJsZWQ9XCIhcHJvZHVjdHMubGVuZ3RoXCIgQGNsaWNrPVwiY2hlY2tvdXQocHJvZHVjdHMpXCI+Q2hlY2tvdXQ8L2J1dHRvbj48L3A+XG4gICAgPHAgdi1zaG93PVwiY2hlY2tvdXRTdGF0dXNcIj5DaGVja291dCB7eyBjaGVja291dFN0YXR1cyB9fS48L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgcHJvZHVjdHM6ICdjYXJ0UHJvZHVjdHMnLFxuICAgICAgY2hlY2tvdXRTdGF0dXM6ICdjaGVja291dFN0YXR1cydcbiAgICB9KSxcbiAgICB0b3RhbCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5yZWR1Y2UoKHRvdGFsLCBwKSA9PiB7XG4gICAgICAgIHJldHVybiB0b3RhbCArIHAucHJpY2UgKiBwLnF1YW50aXR5XG4gICAgICB9LCAwKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNoZWNrb3V0IChwcm9kdWN0cykge1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2NoZWNrb3V0JywgcHJvZHVjdHMpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMGQ4YzEzYmYhLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXNzZXRzL2NvbXBvbmVudHMvQ2FydC52dWVcbi8vIG1vZHVsZSBpZCA9IDMzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG4gIDx1bD5cbiAgICA8bGkgdi1mb3I9XCJwIGluIHByb2R1Y3RzXCI+XG4gICAgICB7eyBwLnRpdGxlIH19IC0ge3sgcC5wcmljZSB8IGN1cnJlbmN5IH19XG4gICAgICA8YnI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIDpkaXNhYmxlZD1cIiFwLmludmVudG9yeVwiXG4gICAgICAgIEBjbGljaz1cImFkZFRvQ2FydChwKVwiPlxuICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbiAgPC91bD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xuICAgIHByb2R1Y3RzOiAnYWxsUHJvZHVjdHMnXG4gIH0pLFxuICBtZXRob2RzOiBtYXBBY3Rpb25zKFtcbiAgICAnYWRkVG9DYXJ0J1xuICBdKSxcbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldEFsbFByb2R1Y3RzJylcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRiNjFiYTVlIS4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Fzc2V0cy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuICAgIDxoMT5TaG9wcGluZyBDYXJ0IEV4YW1wbGU8L2gxPlxuICAgIDxocj5cbiAgICA8aDI+UHJvZHVjdHM8L2gyPlxuICAgIDxwcm9kdWN0LWxpc3Q+PC9wcm9kdWN0LWxpc3Q+XG4gICAgPGhyPlxuICAgIDxjYXJ0PjwvY2FydD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vUHJvZHVjdExpc3QudnVlJ1xuaW1wb3J0IENhcnQgZnJvbSAnLi9DYXJ0LnZ1ZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBQcm9kdWN0TGlzdCwgQ2FydCB9XG59XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGNlODYxNTIhLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXNzZXRzL2NvbXBvbmVudHMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=