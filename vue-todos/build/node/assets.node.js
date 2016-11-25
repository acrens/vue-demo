exports.ids = [1];
exports.modules = {

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123);
	module.exports = __webpack_require__(126);


/***/ },

/***/ 62:
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

/***/ 89:
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

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(93);
	
	var _vue = __webpack_require__(61);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _App = __webpack_require__(331);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _store = __webpack_require__(130);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _currency = __webpack_require__(127);
	
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

/***/ 127:
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

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.addToCart = undefined;
	
	var _mutationTypes = __webpack_require__(62);
	
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

/***/ 129:
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

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vue = __webpack_require__(61);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(41);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _actions = __webpack_require__(128);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _getters = __webpack_require__(129);
	
	var getters = _interopRequireWildcard(_getters);
	
	var _cart = __webpack_require__(131);
	
	var _cart2 = _interopRequireDefault(_cart);
	
	var _products = __webpack_require__(132);
	
	var _products2 = _interopRequireDefault(_products);
	
	var _logger = __webpack_require__(90);
	
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

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mutations;
	
	var _shop = __webpack_require__(89);
	
	var _shop2 = _interopRequireDefault(_shop);
	
	var _mutationTypes = __webpack_require__(62);
	
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

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mutations;
	
	var _shop = __webpack_require__(89);
	
	var _shop2 = _interopRequireDefault(_shop);
	
	var _mutationTypes = __webpack_require__(62);
	
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

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ProductList = __webpack_require__(333);
	
	var _ProductList2 = _interopRequireDefault(_ProductList);
	
	var _Cart = __webpack_require__(332);
	
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

/***/ 134:
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
	
	var _vuex = __webpack_require__(41);
	
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

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vuex = __webpack_require__(41);
	
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

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(133)
	
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
	__vue_options__.__file = "/Users/acrens/f2e/githubCode/vue-demo/vue-todos/assets/components/App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(134)
	
	/* template */
	var __vue_template__ = __webpack_require__(336)
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
	if (__vue_options__.functional) {console.error("[vue-loader] Cart.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(135)
	
	/* template */
	var __vue_template__ = __webpack_require__(338)
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
	if (__vue_options__.functional) {console.error("[vue-loader] ProductList.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 336:
/***/ function(module, exports) {

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

/***/ },

/***/ 338:
/***/ function(module, exports) {

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

/***/ },

/***/ 339:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "app"
	    }
	  }, [_vm._h('h1', ["Shopping Cart Example"]), " ", _vm._h('hr'), " ", _vm._h('h2', ["Products"]), " ", _vm._h('product-list'), " ", _vm._h('hr'), " ", _vm._h('cart')])
	},staticRenderFns: []}

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc3RvcmUvbXV0YXRpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwaS9zaG9wLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2N1cnJlbmN5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9nZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3RvcmUvbW9kdWxlcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS9tb2R1bGVzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FwcC52dWU/YjY5MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DYXJ0LnZ1ZT8zZmQ5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LnZ1ZT9mNGMzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FydC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NhcnQudnVlP2Q1YjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlPzVhOGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQXBwLnZ1ZT8yMDJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Qjs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCIiwiZmlsZSI6ImFzc2V0cy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gJ0FERF9UT19DQVJUJ1xuZXhwb3J0IGNvbnN0IENIRUNLT1VUX1JFUVVFU1QgPSAnQ0hFQ0tPVVRfUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBDSEVDS09VVF9TVUNDRVNTID0gJ0NIRUNLT1VUX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfRkFJTFVSRSA9ICdDSEVDS09VVF9GQUlMVVJFJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfUFJPRFVDVFMgPSAnUkVDRUlWRV9QUk9EVUNUUydcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zdG9yZS9tdXRhdGlvbi10eXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgX3Byb2R1Y3RzID0gW1xuICB7XCJpZFwiOiAxLCBcInRpdGxlXCI6IFwiaVBhZCA0IE1pbmlcIiwgXCJwcmljZVwiOiA1MDAuMDEsIFwiaW52ZW50b3J5XCI6IDJ9LFxuICB7XCJpZFwiOiAyLCBcInRpdGxlXCI6IFwiSCZNIFQtU2hpcnQgV2hpdGVcIiwgXCJwcmljZVwiOiAxMC45OSwgXCJpbnZlbnRvcnlcIjogMTB9LFxuICB7XCJpZFwiOiAzLCBcInRpdGxlXCI6IFwiQ2hhcmxpIFhDWCAtIFN1Y2tlciBDRFwiLCBcInByaWNlXCI6IDE5Ljk5LCBcImludmVudG9yeVwiOiA1fVxuXVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFByb2R1Y3RzIChjYikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY2IoX3Byb2R1Y3RzKSwgMTAwKVxuICB9LFxuXG4gIGJ1eVByb2R1Y3RzIChwcm9kdWN0cywgY2IsIGVycm9yQ2IpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIHNpbXVsYXRlIHJhbmRvbSBjaGVja291dCBmYWlsdXJlLlxuICAgICAgKE1hdGgucmFuZG9tKCkgPiAwLjUgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdQaGFudG9tSlMnKSA+IC0xKVxuICAgICAgICA/IGNiKClcbiAgICAgICAgOiBlcnJvckNiKClcbiAgICB9LCAxMDApXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9hcGkvc2hvcC5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLnZ1ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IHsgY3VycmVuY3kgfSBmcm9tICcuL2N1cnJlbmN5J1xuXG5WdWUuZmlsdGVyKCdjdXJyZW5jeScsIGN1cnJlbmN5KVxuXG5uZXcgVnVlKHtcbiAgZWw6ICcjYXBwJyxcbiAgc3RvcmUsXG4gIHJlbmRlcjogaCA9PiBoKEFwcClcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImNvbnN0IGRpZ2l0c1JFID0gLyhcXGR7M30pKD89XFxkKS9nXG5cbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW5jeSAodmFsdWUsIGN1cnJlbmN5LCBkZWNpbWFscykge1xuICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpXG4gIGlmICghaXNGaW5pdGUodmFsdWUpIHx8ICghdmFsdWUgJiYgdmFsdWUgIT09IDApKSByZXR1cm4gJydcbiAgY3VycmVuY3kgPSBjdXJyZW5jeSAhPSBudWxsID8gY3VycmVuY3kgOiAnJCdcbiAgZGVjaW1hbHMgPSBkZWNpbWFscyAhPSBudWxsID8gZGVjaW1hbHMgOiAyXG4gIHZhciBzdHJpbmdpZmllZCA9IE1hdGguYWJzKHZhbHVlKS50b0ZpeGVkKGRlY2ltYWxzKVxuICB2YXIgX2ludCA9IGRlY2ltYWxzXG4gICAgPyBzdHJpbmdpZmllZC5zbGljZSgwLCAtMSAtIGRlY2ltYWxzKVxuICAgIDogc3RyaW5naWZpZWRcbiAgdmFyIGkgPSBfaW50Lmxlbmd0aCAlIDNcbiAgdmFyIGhlYWQgPSBpID4gMFxuICAgID8gKF9pbnQuc2xpY2UoMCwgaSkgKyAoX2ludC5sZW5ndGggPiAzID8gJywnIDogJycpKVxuICAgIDogJydcbiAgdmFyIF9mbG9hdCA9IGRlY2ltYWxzXG4gICAgPyBzdHJpbmdpZmllZC5zbGljZSgtMSAtIGRlY2ltYWxzKVxuICAgIDogJydcbiAgdmFyIHNpZ24gPSB2YWx1ZSA8IDAgPyAnLScgOiAnJ1xuICByZXR1cm4gc2lnbiArIGN1cnJlbmN5ICsgaGVhZCArXG4gICAgX2ludC5zbGljZShpKS5yZXBsYWNlKGRpZ2l0c1JFLCAnJDEsJykgK1xuICAgIF9mbG9hdFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2N1cnJlbmN5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9tdXRhdGlvbi10eXBlcydcblxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9ICh7IGNvbW1pdCB9LCBwcm9kdWN0KSA9PiB7XG4gICAgaWYgKHByb2R1Y3QuaW52ZW50b3J5ID4gMCkge1xuICAgICAgICBjb21taXQodHlwZXMuQUREX1RPX0NBUlQsIHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0QWxsUHJvZHVjdHMgPSAoeyBjb21taXQgfSkgPT4ge1xuLy8gXHRjb25zb2xlLmxvZygxMTExMTExMTExMSk7XG4vLyB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3RvcmUvYWN0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydCBjb25zdCBjYXJ0UHJvZHVjdHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLmNhcnQuYWRkZWQubWFwKCh7IGlkLCBxdWFudGl0eSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0cy5hbGwuZmluZChwID0+IHAuaWQgPT09IGlkKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHByb2R1Y3QudGl0bGUsXG4gICAgICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcbiAgICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3RvcmUvZ2V0dGVycy5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0ICogYXMgZ2V0dGVycyBmcm9tICcuL2dldHRlcnMnXG5pbXBvcnQgY2FydCBmcm9tICcuL21vZHVsZXMvY2FydCdcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuL21vZHVsZXMvcHJvZHVjdHMnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJy4uLy4uL3NyYy9wbHVnaW5zL2xvZ2dlcidcblxuVnVlLnVzZShWdWV4KVxuXG5jb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICAgIGFjdGlvbnMsXG4gICAgZ2V0dGVycyxcbiAgICBtb2R1bGVzOiB7XG4gICAgICAgIGNhcnQsXG4gICAgICAgIHByb2R1Y3RzXG4gICAgfSxcbiAgICBzdHJpY3Q6IGRlYnVnLFxuICAgIHBsdWdpbnM6IGRlYnVnID8gW2NyZWF0ZUxvZ2dlcigpXSA6IFtdXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3RvcmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgc2hvcCBmcm9tICcuLi8uLi9hcGkvc2hvcCdcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL211dGF0aW9uLXR5cGVzJ1xuXG4vLyBpbml0aWFsIHN0YXRlXG4vLyBzaGFwZTogW3sgaWQsIHF1YW50aXR5IH1dXG5jb25zdCBzdGF0ZSA9IHtcbiAgICBhZGRlZDogW10sXG4gICAgY2hlY2tvdXRTdGF0dXM6IG51bGxcbn1cblxuLy8gZ2V0dGVyc1xuY29uc3QgZ2V0dGVycyA9IHtcbiAgICBjaGVja291dFN0YXR1czogc3RhdGUgPT4gc3RhdGUuY2hlY2tvdXRTdGF0dXNcbn1cblxuLy8gYWN0aW9uc1xuY29uc3QgYWN0aW9ucyA9IHtcbiAgICBjaGVja291dCh7IGNvbW1pdCwgc3RhdGUgfSwgcHJvZHVjdHMpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRDYXJ0SXRlbXMgPSBbLi4uc3RhdGUuYWRkZWRdXG4gICAgICAgIGNvbW1pdCh0eXBlcy5DSEVDS09VVF9SRVFVRVNUKVxuICAgICAgICBzaG9wLmJ1eVByb2R1Y3RzKFxuICAgICAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgICAgICAoKSA9PiBjb21taXQodHlwZXMuQ0hFQ0tPVVRfU1VDQ0VTUyksXG4gICAgICAgICAgICAoKSA9PiBjb21taXQodHlwZXMuQ0hFQ0tPVVRfRkFJTFVSRSwgeyBzYXZlZENhcnRJdGVtcyB9KVxuICAgICAgICApXG4gICAgfVxufVxuXG4vLyBtdXRhdGlvbnNcbmNvbnN0IG11dGF0aW9ucyA9IHtcbiAgICBbdHlwZXMuQUREX1RPX0NBUlRdKHN0YXRlLCB7IGlkIH0pIHtcbiAgICAgICAgc3RhdGUubGFzdENoZWNrb3V0ID0gbnVsbFxuICAgICAgICBjb25zdCByZWNvcmQgPSBzdGF0ZS5hZGRlZC5maW5kKHAgPT4gcC5pZCA9PT0gaWQpXG4gICAgICAgIGlmICghcmVjb3JkKSB7XG4gICAgICAgICAgICBzdGF0ZS5hZGRlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlY29yZC5xdWFudGl0eSsrXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgW3R5cGVzLkNIRUNLT1VUX1JFUVVFU1RdKHN0YXRlKSB7XG4gICAgICAgIC8vIGNsZWFyIGNhcnRcbiAgICAgICAgc3RhdGUuYWRkZWQgPSBbXVxuICAgICAgICBzdGF0ZS5jaGVja291dFN0YXR1cyA9IG51bGxcbiAgICB9LFxuXG4gICAgW3R5cGVzLkNIRUNLT1VUX1NVQ0NFU1NdKHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNoZWNrb3V0U3RhdHVzID0gJ3N1Y2Nlc3NmdWwnXG4gICAgfSxcblxuICAgIFt0eXBlcy5DSEVDS09VVF9GQUlMVVJFXShzdGF0ZSwgeyBzYXZlZENhcnRJdGVtcyB9KSB7XG4gICAgICAgIC8vIHJvbGxiYWNrIHRvIHRoZSBjYXJ0IHNhdmVkIGJlZm9yZSBzZW5kaW5nIHRoZSByZXF1ZXN0XG4gICAgICAgIHN0YXRlLmFkZGVkID0gc2F2ZWRDYXJ0SXRlbXNcbiAgICAgICAgc3RhdGUuY2hlY2tvdXRTdGF0dXMgPSAnZmFpbGVkJ1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXRlLFxuICAgIGdldHRlcnMsXG4gICAgYWN0aW9ucyxcbiAgICBtdXRhdGlvbnNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0b3JlL21vZHVsZXMvY2FydC5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBzaG9wIGZyb20gJy4uLy4uL2FwaS9zaG9wJ1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vbXV0YXRpb24tdHlwZXMnXG5cbi8vIGluaXRpYWwgc3RhdGVcbmNvbnN0IHN0YXRlID0ge1xuICAgIGFsbDogW11cbn1cblxuLy8gZ2V0dGVyc1xuY29uc3QgZ2V0dGVycyA9IHtcbiAgICBhbGxQcm9kdWN0czogc3RhdGUgPT4gc3RhdGUuYWxsXG59XG5cbi8vIGFjdGlvbnNcbmNvbnN0IGFjdGlvbnMgPSB7XG4gICAgZ2V0QWxsUHJvZHVjdHMoeyBjb21taXQgfSkge1xuICAgICAgICBzaG9wLmdldFByb2R1Y3RzKHByb2R1Y3RzID0+IHtcbiAgICAgICAgICAgIGNvbW1pdCh0eXBlcy5SRUNFSVZFX1BST0RVQ1RTLCB7IHByb2R1Y3RzIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vLyBtdXRhdGlvbnNcbmNvbnN0IG11dGF0aW9ucyA9IHtcbiAgICBbdHlwZXMuUkVDRUlWRV9QUk9EVUNUU10oc3RhdGUsIHsgcHJvZHVjdHMgfSkge1xuICAgICAgICBzdGF0ZS5hbGwgPSBwcm9kdWN0c1xuICAgIH0sXG5cbiAgICBbdHlwZXMuQUREX1RPX0NBUlRdKHN0YXRlLCB7IGlkIH0pIHtcbiAgICAgICAgc3RhdGUuYWxsLmZpbmQocCA9PiBwLmlkID09PSBpZCkuaW52ZW50b3J5LS1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGF0ZSxcbiAgICBnZXR0ZXJzLFxuICAgIGFjdGlvbnMsXG4gICAgbXV0YXRpb25zXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zdG9yZS9tb2R1bGVzL3Byb2R1Y3RzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgPGgxPlNob3BwaW5nIENhcnQgRXhhbXBsZTwvaDE+XG4gICAgPGhyPlxuICAgIDxoMj5Qcm9kdWN0czwvaDI+XG4gICAgPHByb2R1Y3QtbGlzdD48L3Byb2R1Y3QtbGlzdD5cbiAgICA8aHI+XG4gICAgPGNhcnQ+PC9jYXJ0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi9Qcm9kdWN0TGlzdC52dWUnXG5pbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQudnVlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7IFByb2R1Y3RMaXN0LCBDYXJ0IH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNi4yLjgvYmFiZWwtbG9hZGVyL2xpYiEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXNzZXRzL2NvbXBvbmVudHMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNhcnRcIj5cbiAgICA8aDI+WW91ciBDYXJ0PC9oMj5cbiAgICA8cCB2LXNob3c9XCIhcHJvZHVjdHMubGVuZ3RoXCI+PGk+UGxlYXNlIGFkZCBzb21lIHByb2R1Y3RzIHRvIGNhcnQuPC9pPjwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgdi1mb3I9XCJwIGluIHByb2R1Y3RzXCI+XG4gICAgICAgIHt7IHAudGl0bGUgfX0gLSB7eyBwLnByaWNlIHwgY3VycmVuY3kgfX0geCB7eyBwLnF1YW50aXR5IH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHA+VG90YWw6IHt7IHRvdGFsIHwgY3VycmVuY3kgfX08L3A+XG4gICAgPHA+PGJ1dHRvbiA6ZGlzYWJsZWQ9XCIhcHJvZHVjdHMubGVuZ3RoXCIgQGNsaWNrPVwiY2hlY2tvdXQocHJvZHVjdHMpXCI+Q2hlY2tvdXQ8L2J1dHRvbj48L3A+XG4gICAgPHAgdi1zaG93PVwiY2hlY2tvdXRTdGF0dXNcIj5DaGVja291dCB7eyBjaGVja291dFN0YXR1cyB9fS48L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgcHJvZHVjdHM6ICdjYXJ0UHJvZHVjdHMnLFxuICAgICAgY2hlY2tvdXRTdGF0dXM6ICdjaGVja291dFN0YXR1cydcbiAgICB9KSxcbiAgICB0b3RhbCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5yZWR1Y2UoKHRvdGFsLCBwKSA9PiB7XG4gICAgICAgIHJldHVybiB0b3RhbCArIHAucHJpY2UgKiBwLnF1YW50aXR5XG4gICAgICB9LCAwKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNoZWNrb3V0IChwcm9kdWN0cykge1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2NoZWNrb3V0JywgcHJvZHVjdHMpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzYuMi44L2JhYmVsLWxvYWRlci9saWIhLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fzc2V0cy9jb21wb25lbnRzL0NhcnQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxuICA8dWw+XG4gICAgPGxpIHYtZm9yPVwicCBpbiBwcm9kdWN0c1wiPlxuICAgICAge3sgcC50aXRsZSB9fSAtIHt7IHAucHJpY2UgfCBjdXJyZW5jeSB9fVxuICAgICAgPGJyPlxuICAgICAgPGJ1dHRvblxuICAgICAgICA6ZGlzYWJsZWQ9XCIhcC5pbnZlbnRvcnlcIlxuICAgICAgICBAY2xpY2s9XCJhZGRUb0NhcnQocClcIj5cbiAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbGk+XG4gIDwvdWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICBwcm9kdWN0czogJ2FsbFByb2R1Y3RzJ1xuICB9KSxcbiAgbWV0aG9kczogbWFwQWN0aW9ucyhbXG4gICAgJ2FkZFRvQ2FydCdcbiAgXSksXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRBbGxQcm9kdWN0cycpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNi4yLjgvYmFiZWwtbG9hZGVyL2xpYiEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXNzZXRzL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgPGgxPlNob3BwaW5nIENhcnQgRXhhbXBsZTwvaDE+XG4gICAgPGhyPlxuICAgIDxoMj5Qcm9kdWN0czwvaDI+XG4gICAgPHByb2R1Y3QtbGlzdD48L3Byb2R1Y3QtbGlzdD5cbiAgICA8aHI+XG4gICAgPGNhcnQ+PC9jYXJ0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi9Qcm9kdWN0TGlzdC52dWUnXG5pbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQudnVlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7IFByb2R1Y3RMaXN0LCBDYXJ0IH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2NvbXBvbmVudHMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNhcnRcIj5cbiAgICA8aDI+WW91ciBDYXJ0PC9oMj5cbiAgICA8cCB2LXNob3c9XCIhcHJvZHVjdHMubGVuZ3RoXCI+PGk+UGxlYXNlIGFkZCBzb21lIHByb2R1Y3RzIHRvIGNhcnQuPC9pPjwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgdi1mb3I9XCJwIGluIHByb2R1Y3RzXCI+XG4gICAgICAgIHt7IHAudGl0bGUgfX0gLSB7eyBwLnByaWNlIHwgY3VycmVuY3kgfX0geCB7eyBwLnF1YW50aXR5IH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHA+VG90YWw6IHt7IHRvdGFsIHwgY3VycmVuY3kgfX08L3A+XG4gICAgPHA+PGJ1dHRvbiA6ZGlzYWJsZWQ9XCIhcHJvZHVjdHMubGVuZ3RoXCIgQGNsaWNrPVwiY2hlY2tvdXQocHJvZHVjdHMpXCI+Q2hlY2tvdXQ8L2J1dHRvbj48L3A+XG4gICAgPHAgdi1zaG93PVwiY2hlY2tvdXRTdGF0dXNcIj5DaGVja291dCB7eyBjaGVja291dFN0YXR1cyB9fS48L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgcHJvZHVjdHM6ICdjYXJ0UHJvZHVjdHMnLFxuICAgICAgY2hlY2tvdXRTdGF0dXM6ICdjaGVja291dFN0YXR1cydcbiAgICB9KSxcbiAgICB0b3RhbCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5yZWR1Y2UoKHRvdGFsLCBwKSA9PiB7XG4gICAgICAgIHJldHVybiB0b3RhbCArIHAucHJpY2UgKiBwLnF1YW50aXR5XG4gICAgICB9LCAwKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNoZWNrb3V0IChwcm9kdWN0cykge1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2NoZWNrb3V0JywgcHJvZHVjdHMpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9jb21wb25lbnRzL0NhcnQudnVlXG4vLyBtb2R1bGUgaWQgPSAzMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxuICA8dWw+XG4gICAgPGxpIHYtZm9yPVwicCBpbiBwcm9kdWN0c1wiPlxuICAgICAge3sgcC50aXRsZSB9fSAtIHt7IHAucHJpY2UgfCBjdXJyZW5jeSB9fVxuICAgICAgPGJyPlxuICAgICAgPGJ1dHRvblxuICAgICAgICA6ZGlzYWJsZWQ9XCIhcC5pbnZlbnRvcnlcIlxuICAgICAgICBAY2xpY2s9XCJhZGRUb0NhcnQocClcIj5cbiAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbGk+XG4gIDwvdWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICBwcm9kdWN0czogJ2FsbFByb2R1Y3RzJ1xuICB9KSxcbiAgbWV0aG9kczogbWFwQWN0aW9ucyhbXG4gICAgJ2FkZFRvQ2FydCdcbiAgXSksXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRBbGxQcm9kdWN0cycpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAzMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2FydFwiPlxuICAgIDxoMj5Zb3VyIENhcnQ8L2gyPlxuICAgIDxwIHYtc2hvdz1cIiFwcm9kdWN0cy5sZW5ndGhcIj48aT5QbGVhc2UgYWRkIHNvbWUgcHJvZHVjdHMgdG8gY2FydC48L2k+PC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaSB2LWZvcj1cInAgaW4gcHJvZHVjdHNcIj5cbiAgICAgICAge3sgcC50aXRsZSB9fSAtIHt7IHAucHJpY2UgfCBjdXJyZW5jeSB9fSB4IHt7IHAucXVhbnRpdHkgfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8cD5Ub3RhbDoge3sgdG90YWwgfCBjdXJyZW5jeSB9fTwvcD5cbiAgICA8cD48YnV0dG9uIDpkaXNhYmxlZD1cIiFwcm9kdWN0cy5sZW5ndGhcIiBAY2xpY2s9XCJjaGVja291dChwcm9kdWN0cylcIj5DaGVja291dDwvYnV0dG9uPjwvcD5cbiAgICA8cCB2LXNob3c9XCJjaGVja291dFN0YXR1c1wiPkNoZWNrb3V0IHt7IGNoZWNrb3V0U3RhdHVzIH19LjwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICBwcm9kdWN0czogJ2NhcnRQcm9kdWN0cycsXG4gICAgICBjaGVja291dFN0YXR1czogJ2NoZWNrb3V0U3RhdHVzJ1xuICAgIH0pLFxuICAgIHRvdGFsICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLnJlZHVjZSgodG90YWwsIHApID0+IHtcbiAgICAgICAgcmV0dXJuIHRvdGFsICsgcC5wcmljZSAqIHAucXVhbnRpdHlcbiAgICAgIH0sIDApXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2hlY2tvdXQgKHByb2R1Y3RzKSB7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY2hlY2tvdXQnLCBwcm9kdWN0cylcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wZDhjMTNiZiEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hc3NldHMvY29tcG9uZW50cy9DYXJ0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgPHVsPlxuICAgIDxsaSB2LWZvcj1cInAgaW4gcHJvZHVjdHNcIj5cbiAgICAgIHt7IHAudGl0bGUgfX0gLSB7eyBwLnByaWNlIHwgY3VycmVuY3kgfX1cbiAgICAgIDxicj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgOmRpc2FibGVkPVwiIXAuaW52ZW50b3J5XCJcbiAgICAgICAgQGNsaWNrPVwiYWRkVG9DYXJ0KHApXCI+XG4gICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPlxuICA8L3VsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XG4gICAgcHJvZHVjdHM6ICdhbGxQcm9kdWN0cydcbiAgfSksXG4gIG1ldGhvZHM6IG1hcEFjdGlvbnMoW1xuICAgICdhZGRUb0NhcnQnXG4gIF0pLFxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0QWxsUHJvZHVjdHMnKVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGI2MWJhNWUhLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXNzZXRzL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAzMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgPGgxPlNob3BwaW5nIENhcnQgRXhhbXBsZTwvaDE+XG4gICAgPGhyPlxuICAgIDxoMj5Qcm9kdWN0czwvaDI+XG4gICAgPHByb2R1Y3QtbGlzdD48L3Byb2R1Y3QtbGlzdD5cbiAgICA8aHI+XG4gICAgPGNhcnQ+PC9jYXJ0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi9Qcm9kdWN0TGlzdC52dWUnXG5pbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQudnVlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7IFByb2R1Y3RMaXN0LCBDYXJ0IH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00Y2U4NjE1MiEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hc3NldHMvY29tcG9uZW50cy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAzMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==