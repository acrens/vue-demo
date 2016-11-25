exports.ids = [2];
exports.modules = {

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123);
	module.exports = __webpack_require__(142);


/***/ },

/***/ 92:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 浏览器存储数据 key
	var STORAGE_KEY = exports.STORAGE_KEY = 'todos-vuejs';
	if (nagigator.userAgent.indexOf('PhantomJS') > -1) {
		window.localStorage.clear();
	}
	
	// 组件状态
	var state = exports.state = {
		todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	};
	
	// mutations 对象
	var mutations = exports.mutations = {
		addTodo: function addTodo(state, _ref) {
			var text = _ref.text;
	
			state.todos.push({
				text: text,
				done: false
			});
		},
		deleteTodo: function deleteTodo(state, _ref2) {
			var todo = _ref2.todo;
	
			state.todos.splice(state.todos.indexOf(todo), 1);
		},
		toggleTodo: function toggleTodo(state, _ref3) {
			var todo = _ref3.todo;
	
			todo.done = !todo.done;
		},
		editTodo: function editTodo(state, _ref4) {
			var todo = _ref4.todo,
			    value = _ref4.value;
	
			todo.text = value;
		},
		toggleAll: function toggleAll(state, _ref5) {
			var done = _ref5.done;
	
			state.todos.forEach(function (todo) {
				todo.done = done;
			});
		},
		clearCompleted: function clearCompleted(state) {
			state.todos = state.todos.filter(function (todo) {
				return !todo.done;
			});
		}
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
	//
	//
	
	var _vuex = __webpack_require__(41);
	
	var _Todo = __webpack_require__(335);
	
	var _Todo2 = _interopRequireDefault(_Todo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var filters = {
		all: function all(todos) {
			return todos;
		},
		active: function active(todos) {
			return todos.filter(function (todo) {
				return !todo.done;
			});
		},
		computed: function computed(todos) {
			return todos.filter(function (todo) {
				return todo.done;
			});
		}
	};
	
	exports.default = {
		components: { Todo: _Todo2.default },
		data: function data() {
			return {
				visibility: 'all',
				filters: filters
			};
		},
	
		computed: {
			todos: function todos() {
				return this.$store.state.todos;
			},
			allChecked: function allChecked() {
				return this.todos.every(function (todo) {
					return todo.done;
				});
			},
			filteredTodos: function filteredTodos() {
				return filters[this.visibility](this.todos);
			},
			remaining: function remaining() {
				return this.todos.filter(function (todo) {
					return !todo.done;
				}).length;
			}
		},
		methods: _extends({
			addTodo: function addTodo(e) {
				var text = e.target.value;
				if (text.trim()) {
					this.$store.commit('addTodo', { text: text });
				}
				e.target.value = '';
			}
		}, (0, _vuex.mapMutations)(['toggleAll', 'clearCompleted'])),
		filters: {
			pluralize: function pluralize(n, w) {
				return n === 1 ? w : w + 's';
			},
			capitalize: function capitalize(s) {
				return s.charAt(0).toUpperCase() + s.slice(1);
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
	//
	//
	//
	//
	//
	
	var _vuex = __webpack_require__(41);
	
	exports.default = {
	  name: 'Todo',
	  props: ['todo'],
	  data: function data() {
	    return {
	      editing: false
	    };
	  },
	
	  directives: {
	    focus: function focus(el, _ref, _ref2) {
	      var value = _ref.value;
	      var context = _ref2.context;
	
	      if (value) {
	        context.$nextTick(function () {
	          el.focus();
	        });
	      }
	    }
	  },
	  methods: _extends({}, (0, _vuex.mapMutations)(['editTodo', 'toggleTodo', 'deleteTodo']), {
	    doneEdit: function doneEdit(e) {
	      var value = e.target.value.trim();
	      var todo = this.todo;
	
	      if (!value) {
	        this.deleteTodo({
	          todo: todo
	        });
	      } else if (this.editing) {
	        this.editTodo({
	          todo: todo,
	          value: value
	        });
	        this.editing = false;
	      }
	    },
	    cancelEdit: function cancelEdit(e) {
	      e.target.value = this.todo.text;
	      this.editing = false;
	    }
	  })
	};

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(93);
	
	var _vue = __webpack_require__(61);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _store = __webpack_require__(143);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _App = __webpack_require__(334);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 应用入口文件
	 */
	new _vue2.default({
		el: '#app',
		store: _store2.default,
		render: function render(h) {
			return h(_App2.default);
		}
	});

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _vue = __webpack_require__(61);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(41);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _mutations = __webpack_require__(92);
	
	var _plugins = __webpack_require__(144);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vuex2.default);
	
	exports.default = new _vuex2.default.Store({
		state: _mutations.state,
		mutations: _mutations.mutations,
		plugins: _plugins2.default
	});

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _mutations = __webpack_require__(92);
	
	var _logger = __webpack_require__(90);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 创建存储插件
	 */
	var localStoragePlugin = function localStoragePlugin(store) {
		store.subscribe(function (mutation, _ref) {
			var todos = _ref.todos;
	
			window.localStoragePlugin.setItem(_mutations.STORAGE_KEY, JSON.stringify(todos));
		});
	};
	
	exports.default =  true ? [(0, _logger2.default)(), localStoragePlugin] : [localStoragePlugin];

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(136)
	
	/* template */
	var __vue_template__ = __webpack_require__(337)
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
	__vue_options__.__file = "/Users/acrens/f2e/githubCode/vue-demo/vue-todos/todomvc/components/App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(137)
	
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
	__vue_options__.__file = "/Users/acrens/f2e/githubCode/vue-demo/vue-todos/todomvc/components/Todo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	if (__vue_options__.functional) {console.error("[vue-loader] Todo.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 337:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('section', {
	    staticClass: "todoapp"
	  }, [_vm._h('header', {
	    staticClass: "header"
	  }, [_vm._h('h1', ["todos"]), " ", _vm._h('input', {
	    staticClass: "new-todo",
	    attrs: {
	      "autofocus": "",
	      "autocomplete": "off",
	      "placeholder": "What needs to be done?"
	    },
	    on: {
	      "keyup": function($event) {
	        if ($event.keyCode !== 13) { return; }
	        _vm.addTodo($event)
	      }
	    }
	  })]), " ", " ", _vm._h('section', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.todos.length),
	      expression: "todos.length"
	    }],
	    staticClass: "main"
	  }, [_vm._h('input', {
	    staticClass: "toggle-all",
	    attrs: {
	      "type": "checkbox"
	    },
	    domProps: {
	      "checked": _vm.allChecked
	    },
	    on: {
	      "change": function($event) {
	        _vm.toggleAll({
	          done: !_vm.allChecked
	        })
	      }
	    }
	  }), " ", _vm._h('ul', {
	    staticClass: "todo-list"
	  }, [_vm._l((_vm.filteredTodos), function(todo) {
	    return _vm._h('todo', {
	      attrs: {
	        "todo": todo
	      }
	    })
	  })])]), " ", " ", _vm._h('footer', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.todos.length),
	      expression: "todos.length"
	    }],
	    staticClass: "footer"
	  }, [_vm._h('span', {
	    staticClass: "todo-count"
	  }, [_vm._h('strong', [_vm._s(_vm.remaining)]), "\n        " + _vm._s(_vm._f("pluralize")(_vm.remaining, 'item')) + " left\n      "]), " ", _vm._h('ul', {
	    staticClass: "filters"
	  }, [_vm._l((_vm.filters), function(val, key) {
	    return _vm._h('li', [_vm._h('a', {
	      class: {
	        selected: _vm.visibility === key
	      },
	      attrs: {
	        "href": '#/' + key
	      },
	      on: {
	        "click": function($event) {
	          _vm.visibility = key
	        }
	      }
	    }, [_vm._s(_vm._f("capitalize")(key))])])
	  })]), " ", _vm._h('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.todos.length > _vm.remaining),
	      expression: "todos.length > remaining"
	    }],
	    staticClass: "clear-completed",
	    on: {
	      "click": _vm.clearCompleted
	    }
	  }, ["\n        Clear completed\n      "])])])
	},staticRenderFns: []}

/***/ },

/***/ 340:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('li', {
	    staticClass: "todo",
	    class: {
	      completed: _vm.todo.done, editing: _vm.editing
	    }
	  }, [_vm._h('div', {
	    staticClass: "view"
	  }, [_vm._h('input', {
	    staticClass: "toggle",
	    attrs: {
	      "type": "checkbox"
	    },
	    domProps: {
	      "checked": _vm.todo.done
	    },
	    on: {
	      "change": function($event) {
	        _vm.toggleTodo({
	          todo: _vm.todo
	        })
	      }
	    }
	  }), " ", _vm._h('label', {
	    domProps: {
	      "textContent": _vm._s(_vm.todo.text)
	    },
	    on: {
	      "dblclick": function($event) {
	        _vm.editing = true
	      }
	    }
	  }), " ", _vm._h('button', {
	    staticClass: "destroy",
	    on: {
	      "click": function($event) {
	        _vm.deleteTodo({
	          todo: _vm.todo
	        })
	      }
	    }
	  })]), " ", _vm._h('input', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.editing),
	      expression: "editing"
	    }, {
	      name: "focus",
	      rawName: "v-focus",
	      value: (_vm.editing),
	      expression: "editing"
	    }],
	    staticClass: "edit",
	    domProps: {
	      "value": _vm.todo.text
	    },
	    on: {
	      "keyup": [function($event) {
	        if ($event.keyCode !== 13) { return; }
	        _vm.doneEdit($event)
	      }, function($event) {
	        if ($event.keyCode !== 27) { return; }
	        _vm.cancelEdit($event)
	      }],
	      "blur": _vm.doneEdit
	    }
	  })])
	},staticRenderFns: []}

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90b2RvbXZjL3N0b3JlL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi90b2RvbXZjL2NvbXBvbmVudHMvQXBwLnZ1ZT83NWRmIiwid2VicGFjazovLy8uL3RvZG9tdmMvY29tcG9uZW50cy9Ub2RvLnZ1ZT85OWFlIiwid2VicGFjazovLy8uL3RvZG9tdmMvYXBwLmpzIiwid2VicGFjazovLy8uL3RvZG9tdmMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdG9kb212Yy9zdG9yZS9wbHVnaW5zLmpzIiwid2VicGFjazovLy8uL3RvZG9tdmMvY29tcG9uZW50cy9BcHAudnVlIiwid2VicGFjazovLy8uL3RvZG9tdmMvY29tcG9uZW50cy9Ub2RvLnZ1ZSIsIndlYnBhY2s6Ly8vLi90b2RvbXZjL2NvbXBvbmVudHMvQXBwLnZ1ZT81MzNmIiwid2VicGFjazovLy8uL3RvZG9tdmMvY29tcG9uZW50cy9Ub2RvLnZ1ZT8wNDUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0c7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCIiwiZmlsZSI6InRvZG9tdmMubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOa1j+iniOWZqOWtmOWCqOaVsOaNriBrZXlcbmV4cG9ydCBjb25zdCBTVE9SQUdFX0tFWSA9ICd0b2Rvcy12dWVqcydcbmlmKG5hZ2lnYXRvci51c2VyQWdlbnQuaW5kZXhPZignUGhhbnRvbUpTJykgPiAtMSkge1xuXHR3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG59XG5cbi8vIOe7hOS7tueKtuaAgVxuZXhwb3J0IGNvbnN0IHN0YXRlID0ge1xuXHR0b2RvczogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpIHx8ICdbXScpXG59O1xuXG4vLyBtdXRhdGlvbnMg5a+56LGhXG5leHBvcnQgY29uc3QgbXV0YXRpb25zID0ge1xuXHRhZGRUb2RvIChzdGF0ZSwgeyB0ZXh0IH0pIHtcblx0XHRzdGF0ZS50b2Rvcy5wdXNoKHtcblx0XHRcdHRleHQsXG5cdFx0XHRkb25lOiBmYWxzZVxuXHRcdH0pO1xuXHR9LFxuXG5cdGRlbGV0ZVRvZG8gKHN0YXRlLCB7IHRvZG8gfSkge1xuXHRcdHN0YXRlLnRvZG9zLnNwbGljZShzdGF0ZS50b2Rvcy5pbmRleE9mKHRvZG8pLCAxKTtcblx0fSxcblxuXHR0b2dnbGVUb2RvIChzdGF0ZSwgeyB0b2RvIH0pIHtcblx0XHR0b2RvLmRvbmUgPSAhdG9kby5kb25lO1xuXHR9LFxuXG5cdGVkaXRUb2RvIChzdGF0ZSwgeyB0b2RvLCB2YWx1ZSB9KSB7XG5cdFx0dG9kby50ZXh0ID0gdmFsdWU7XG5cdH0sXG5cblx0dG9nZ2xlQWxsIChzdGF0ZSwgeyBkb25lIH0pIHtcblx0XHRzdGF0ZS50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG5cdFx0XHR0b2RvLmRvbmUgPSBkb25lO1xuXHRcdH0pO1xuXHR9LFxuXG5cdGNsZWFyQ29tcGxldGVkIChzdGF0ZSkge1xuXHRcdHN0YXRlLnRvZG9zID0gc3RhdGUudG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uZG9uZSk7XG5cdH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90b2RvbXZjL3N0b3JlL211dGF0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHNyYz1cInRvZG9tdmMtYXBwLWNzcy9pbmRleC5jc3NcIj48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cdDxzZWN0aW9uIGNsYXNzPVwidG9kb2FwcFwiPlxuICAgIDwhLS0gaGVhZGVyIC0tPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJuZXctdG9kb1wiXG4gICAgICAgIGF1dG9mb2N1c1xuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIlxuICAgICAgICBAa2V5dXAuZW50ZXI9XCJhZGRUb2RvXCI+XG4gICAgPC9oZWFkZXI+XG4gICAgPCEtLSBtYWluIHNlY3Rpb24gLS0+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJtYWluXCIgdi1zaG93PVwidG9kb3MubGVuZ3RoXCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGUtYWxsXCJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgOmNoZWNrZWQ9XCJhbGxDaGVja2VkXCJcbiAgICAgICAgQGNoYW5nZT1cInRvZ2dsZUFsbCh7IGRvbmU6ICFhbGxDaGVja2VkIH0pXCI+XG4gICAgICA8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cbiAgICAgICAgPHRvZG8gdi1mb3I9XCJ0b2RvIGluIGZpbHRlcmVkVG9kb3NcIiA6dG9kbz1cInRvZG9cIj48L3RvZG8+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8IS0tIGZvb3RlciAtLT5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCIgdi1zaG93PVwidG9kb3MubGVuZ3RoXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY291bnRcIj5cbiAgICAgICAgPHN0cm9uZz57eyByZW1haW5pbmcgfX08L3N0cm9uZz5cbiAgICAgICAge3sgcmVtYWluaW5nIHwgcGx1cmFsaXplKCdpdGVtJykgfX0gbGVmdFxuICAgICAgPC9zcGFuPlxuICAgICAgPHVsIGNsYXNzPVwiZmlsdGVyc1wiPlxuICAgICAgICA8bGkgdi1mb3I9XCIodmFsLCBrZXkpIGluIGZpbHRlcnNcIj5cbiAgICAgICAgICA8YSA6aHJlZj1cIicjLycgKyBrZXlcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyBzZWxlY3RlZDogdmlzaWJpbGl0eSA9PT0ga2V5IH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwidmlzaWJpbGl0eSA9IGtleVwiPnt7IGtleSB8IGNhcGl0YWxpemUgfX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsZWFyLWNvbXBsZXRlZFwiXG4gICAgICAgIHYtc2hvdz1cInRvZG9zLmxlbmd0aCA+IHJlbWFpbmluZ1wiXG4gICAgICAgIEBjbGljaz1cImNsZWFyQ29tcGxldGVkXCI+XG4gICAgICAgIENsZWFyIGNvbXBsZXRlZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb290ZXI+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cdGltcG9ydCBUb2RvIGZyb20gJy4vVG9kby52dWUnXG5cblx0Y29uc3QgZmlsdGVycyA9IHtcblx0XHRhbGw6IHRvZG9zID0+IHRvZG9zLFxuXHRcdGFjdGl2ZTogdG9kb3MgPT4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uZG9uZSksXG5cdFx0Y29tcHV0ZWQ6IHRvZG9zID0+IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uZG9uZSlcblx0fVxuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7IFRvZG8gfSxcblx0XHRkYXRhICgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHQgIHZpc2liaWxpdHk6ICdhbGwnLFxuXHRcdFx0ICBmaWx0ZXJzOiBmaWx0ZXJzXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0dG9kb3MgKCkge1xuXHRcdFx0ICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudG9kb3Ncblx0XHRcdH0sXG5cdFx0XHRhbGxDaGVja2VkICgpIHtcblx0XHRcdCAgcmV0dXJuIHRoaXMudG9kb3MuZXZlcnkodG9kbyA9PiB0b2RvLmRvbmUpXG5cdFx0XHR9LFxuXHRcdFx0ZmlsdGVyZWRUb2RvcyAoKSB7XG5cdFx0XHQgIHJldHVybiBmaWx0ZXJzW3RoaXMudmlzaWJpbGl0eV0odGhpcy50b2Rvcylcblx0XHRcdH0sXG5cdFx0XHRyZW1haW5pbmcgKCkge1xuXHRcdFx0ICByZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5kb25lKS5sZW5ndGhcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGFkZFRvZG8gKGUpIHtcblx0XHRcdCAgdmFyIHRleHQgPSBlLnRhcmdldC52YWx1ZVxuXHRcdFx0ICBpZiAodGV4dC50cmltKCkpIHtcblx0XHRcdCAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2FkZFRvZG8nLCB7IHRleHQgfSlcblx0XHRcdCAgfVxuXHRcdFx0ICBlLnRhcmdldC52YWx1ZSA9ICcnXG5cdFx0XHR9LFxuXHRcdFx0Li4ubWFwTXV0YXRpb25zKFtcblx0XHRcdCAgJ3RvZ2dsZUFsbCcsXG5cdFx0XHQgICdjbGVhckNvbXBsZXRlZCdcblx0XHRcdF0pXG5cdFx0fSxcblx0XHRmaWx0ZXJzOiB7XG5cdFx0XHRwbHVyYWxpemU6IChuLCB3KSA9PiBuID09PSAxID8gdyA6ICh3ICsgJ3MnKSxcblx0XHRcdGNhcGl0YWxpemU6IHMgPT4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNi4yLjgvYmFiZWwtbG9hZGVyL2xpYiEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG9kb212Yy9jb21wb25lbnRzL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCI8dGVtcGxhdGU+XG4gIDxsaSBjbGFzcz1cInRvZG9cIiA6Y2xhc3M9XCJ7IGNvbXBsZXRlZDogdG9kby5kb25lLCBlZGl0aW5nOiBlZGl0aW5nIH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwidmlld1wiPlxuICAgICAgPGlucHV0IGNsYXNzPVwidG9nZ2xlXCJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgOmNoZWNrZWQ9XCJ0b2RvLmRvbmVcIlxuICAgICAgICBAY2hhbmdlPVwidG9nZ2xlVG9kbyh7IHRvZG86IHRvZG8gfSlcIj5cbiAgICAgIDxsYWJlbCB2LXRleHQ9XCJ0b2RvLnRleHRcIiBAZGJsY2xpY2s9XCJlZGl0aW5nID0gdHJ1ZVwiPjwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZGVzdHJveVwiIEBjbGljaz1cImRlbGV0ZVRvZG8oeyB0b2RvOiB0b2RvIH0pXCI+PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGlucHV0IGNsYXNzPVwiZWRpdFwiXG4gICAgICB2LXNob3c9XCJlZGl0aW5nXCJcbiAgICAgIHYtZm9jdXM9XCJlZGl0aW5nXCJcbiAgICAgIDp2YWx1ZT1cInRvZG8udGV4dFwiXG4gICAgICBAa2V5dXAuZW50ZXI9XCJkb25lRWRpdFwiXG4gICAgICBAa2V5dXAuZXNjPVwiY2FuY2VsRWRpdFwiXG4gICAgICBAYmx1cj1cImRvbmVFZGl0XCI+XG4gIDwvbGk+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwTXV0YXRpb25zIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1RvZG8nLFxuICBwcm9wczogWyd0b2RvJ10sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlZGl0aW5nOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgZGlyZWN0aXZlczoge1xuICAgIGZvY3VzIChlbCwgeyB2YWx1ZSB9LCB7IGNvbnRleHQgfSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnRleHQuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBlbC5mb2N1cygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwTXV0YXRpb25zKFtcbiAgICAgICdlZGl0VG9kbycsXG4gICAgICAndG9nZ2xlVG9kbycsXG4gICAgICAnZGVsZXRlVG9kbydcbiAgICBdKSxcbiAgICBkb25lRWRpdCAoZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZS50cmltKClcbiAgICAgIGNvbnN0IHsgdG9kbyB9ID0gdGhpc1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLmRlbGV0ZVRvZG8oe1xuICAgICAgICAgIHRvZG9cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lZGl0aW5nKSB7XG4gICAgICAgIHRoaXMuZWRpdFRvZG8oe1xuICAgICAgICAgIHRvZG8sXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhbmNlbEVkaXQgKGUpIHtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gdGhpcy50b2RvLnRleHRcbiAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzYuMi44L2JhYmVsLWxvYWRlci9saWIhLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RvZG9tdmMvY29tcG9uZW50cy9Ub2RvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qKlxuICog5bqU55So5YWl5Y+j5paH5Lu2XG4gKi9cbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLnZ1ZSdcblxubmV3IFZ1ZSh7XG5cdGVsOiAnI2FwcCcsXG5cdHN0b3JlLFxuXHRyZW5kZXI6IGggPT4gaChBcHApXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RvZG9tdmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xuaW1wb3J0IHsgc3RhdGUsIG11dGF0aW9ucyB9IGZyb20gJy4vbXV0YXRpb25zJ1xuaW1wb3J0IHBsdWdpbnMgZnJvbSAnLi9wbHVnaW5zJ1xuXG5WdWUudXNlKFZ1ZXgpXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcblx0c3RhdGUsXG5cdG11dGF0aW9ucyxcblx0cGx1Z2luc1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90b2RvbXZjL3N0b3JlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyoqXG4gKiDliJvlu7rlrZjlgqjmj5Lku7ZcbiAqL1xuaW1wb3J0IHsgU1RPUkFHRV9LRVkgfSBmcm9tICcuL211dGF0aW9ucydcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAnLi4vLi4vc3JjL3BsdWdpbnMvbG9nZ2VyJ1xuXG5jb25zdCBsb2NhbFN0b3JhZ2VQbHVnaW4gPSBzdG9yZSA9PiB7XG5cdHN0b3JlLnN1YnNjcmliZSgobXV0YXRpb24sIHsgdG9kb3MgfSkgPT4ge1xuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2VQbHVnaW4uc2V0SXRlbShTVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcblx0fSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBbY3JlYXRlTG9nZ2VyKCksIGxvY2FsU3RvcmFnZVBsdWdpbl06IFtsb2NhbFN0b3JhZ2VQbHVnaW5dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90b2RvbXZjL3N0b3JlL3BsdWdpbnMuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCI8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgc3JjPVwidG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1wiPjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblx0PHNlY3Rpb24gY2xhc3M9XCJ0b2RvYXBwXCI+XG4gICAgPCEtLSBoZWFkZXIgLS0+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGgxPnRvZG9zPC9oMT5cbiAgICAgIDxpbnB1dCBjbGFzcz1cIm5ldy10b2RvXCJcbiAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1wiXG4gICAgICAgIEBrZXl1cC5lbnRlcj1cImFkZFRvZG9cIj5cbiAgICA8L2hlYWRlcj5cbiAgICA8IS0tIG1haW4gc2VjdGlvbiAtLT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW5cIiB2LXNob3c9XCJ0b2Rvcy5sZW5ndGhcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZS1hbGxcIlxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICA6Y2hlY2tlZD1cImFsbENoZWNrZWRcIlxuICAgICAgICBAY2hhbmdlPVwidG9nZ2xlQWxsKHsgZG9uZTogIWFsbENoZWNrZWQgfSlcIj5cbiAgICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuICAgICAgICA8dG9kbyB2LWZvcj1cInRvZG8gaW4gZmlsdGVyZWRUb2Rvc1wiIDp0b2RvPVwidG9kb1wiPjwvdG9kbz5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwhLS0gZm9vdGVyIC0tPlxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIiB2LXNob3c9XCJ0b2Rvcy5sZW5ndGhcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1jb3VudFwiPlxuICAgICAgICA8c3Ryb25nPnt7IHJlbWFpbmluZyB9fTwvc3Ryb25nPlxuICAgICAgICB7eyByZW1haW5pbmcgfCBwbHVyYWxpemUoJ2l0ZW0nKSB9fSBsZWZ0XG4gICAgICA8L3NwYW4+XG4gICAgICA8dWwgY2xhc3M9XCJmaWx0ZXJzXCI+XG4gICAgICAgIDxsaSB2LWZvcj1cIih2YWwsIGtleSkgaW4gZmlsdGVyc1wiPlxuICAgICAgICAgIDxhIDpocmVmPVwiJyMvJyArIGtleVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IHNlbGVjdGVkOiB2aXNpYmlsaXR5ID09PSBrZXkgfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJ2aXNpYmlsaXR5ID0ga2V5XCI+e3sga2V5IHwgY2FwaXRhbGl6ZSB9fTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2xlYXItY29tcGxldGVkXCJcbiAgICAgICAgdi1zaG93PVwidG9kb3MubGVuZ3RoID4gcmVtYWluaW5nXCJcbiAgICAgICAgQGNsaWNrPVwiY2xlYXJDb21wbGV0ZWRcIj5cbiAgICAgICAgQ2xlYXIgY29tcGxldGVkXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwTXV0YXRpb25zIH0gZnJvbSAndnVleCdcblx0aW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvLnZ1ZSdcblxuXHRjb25zdCBmaWx0ZXJzID0ge1xuXHRcdGFsbDogdG9kb3MgPT4gdG9kb3MsXG5cdFx0YWN0aXZlOiB0b2RvcyA9PiB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5kb25lKSxcblx0XHRjb21wdXRlZDogdG9kb3MgPT4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5kb25lKVxuXHR9XG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXBvbmVudHM6IHsgVG9kbyB9LFxuXHRcdGRhdGEgKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdCAgdmlzaWJpbGl0eTogJ2FsbCcsXG5cdFx0XHQgIGZpbHRlcnM6IGZpbHRlcnNcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHR0b2RvcyAoKSB7XG5cdFx0XHQgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50b2Rvc1xuXHRcdFx0fSxcblx0XHRcdGFsbENoZWNrZWQgKCkge1xuXHRcdFx0ICByZXR1cm4gdGhpcy50b2Rvcy5ldmVyeSh0b2RvID0+IHRvZG8uZG9uZSlcblx0XHRcdH0sXG5cdFx0XHRmaWx0ZXJlZFRvZG9zICgpIHtcblx0XHRcdCAgcmV0dXJuIGZpbHRlcnNbdGhpcy52aXNpYmlsaXR5XSh0aGlzLnRvZG9zKVxuXHRcdFx0fSxcblx0XHRcdHJlbWFpbmluZyAoKSB7XG5cdFx0XHQgIHJldHVybiB0aGlzLnRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmRvbmUpLmxlbmd0aFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0YWRkVG9kbyAoZSkge1xuXHRcdFx0ICB2YXIgdGV4dCA9IGUudGFyZ2V0LnZhbHVlXG5cdFx0XHQgIGlmICh0ZXh0LnRyaW0oKSkge1xuXHRcdFx0ICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnYWRkVG9kbycsIHsgdGV4dCB9KVxuXHRcdFx0ICB9XG5cdFx0XHQgIGUudGFyZ2V0LnZhbHVlID0gJydcblx0XHRcdH0sXG5cdFx0XHQuLi5tYXBNdXRhdGlvbnMoW1xuXHRcdFx0ICAndG9nZ2xlQWxsJyxcblx0XHRcdCAgJ2NsZWFyQ29tcGxldGVkJ1xuXHRcdFx0XSlcblx0XHR9LFxuXHRcdGZpbHRlcnM6IHtcblx0XHRcdHBsdXJhbGl6ZTogKG4sIHcpID0+IG4gPT09IDEgPyB3IDogKHcgKyAncycpLFxuXHRcdFx0Y2FwaXRhbGl6ZTogcyA9PiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90b2RvbXZjL2NvbXBvbmVudHMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwidG9kb1wiIDpjbGFzcz1cInsgY29tcGxldGVkOiB0b2RvLmRvbmUsIGVkaXRpbmc6IGVkaXRpbmcgfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGVcIlxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICA6Y2hlY2tlZD1cInRvZG8uZG9uZVwiXG4gICAgICAgIEBjaGFuZ2U9XCJ0b2dnbGVUb2RvKHsgdG9kbzogdG9kbyB9KVwiPlxuICAgICAgPGxhYmVsIHYtdGV4dD1cInRvZG8udGV4dFwiIEBkYmxjbGljaz1cImVkaXRpbmcgPSB0cnVlXCI+PC9sYWJlbD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJkZXN0cm95XCIgQGNsaWNrPVwiZGVsZXRlVG9kbyh7IHRvZG86IHRvZG8gfSlcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8aW5wdXQgY2xhc3M9XCJlZGl0XCJcbiAgICAgIHYtc2hvdz1cImVkaXRpbmdcIlxuICAgICAgdi1mb2N1cz1cImVkaXRpbmdcIlxuICAgICAgOnZhbHVlPVwidG9kby50ZXh0XCJcbiAgICAgIEBrZXl1cC5lbnRlcj1cImRvbmVFZGl0XCJcbiAgICAgIEBrZXl1cC5lc2M9XCJjYW5jZWxFZGl0XCJcbiAgICAgIEBibHVyPVwiZG9uZUVkaXRcIj5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVG9kbycsXG4gIHByb3BzOiBbJ3RvZG8nXSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRpbmc6IGZhbHNlXG4gICAgfVxuICB9LFxuICBkaXJlY3RpdmVzOiB7XG4gICAgZm9jdXMgKGVsLCB7IHZhbHVlIH0sIHsgY29udGV4dCB9KSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29udGV4dC4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGVsLmZvY3VzKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBNdXRhdGlvbnMoW1xuICAgICAgJ2VkaXRUb2RvJyxcbiAgICAgICd0b2dnbGVUb2RvJyxcbiAgICAgICdkZWxldGVUb2RvJ1xuICAgIF0pLFxuICAgIGRvbmVFZGl0IChlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgY29uc3QgeyB0b2RvIH0gPSB0aGlzXG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlVG9kbyh7XG4gICAgICAgICAgdG9kb1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmVkaXRpbmcpIHtcbiAgICAgICAgdGhpcy5lZGl0VG9kbyh7XG4gICAgICAgICAgdG9kbyxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgY2FuY2VsRWRpdCAoZSkge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSB0aGlzLnRvZG8udGV4dFxuICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2VcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdG9kb212Yy9jb21wb25lbnRzL1RvZG8udnVlXG4vLyBtb2R1bGUgaWQgPSAzMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHNyYz1cInRvZG9tdmMtYXBwLWNzcy9pbmRleC5jc3NcIj48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cdDxzZWN0aW9uIGNsYXNzPVwidG9kb2FwcFwiPlxuICAgIDwhLS0gaGVhZGVyIC0tPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJuZXctdG9kb1wiXG4gICAgICAgIGF1dG9mb2N1c1xuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIlxuICAgICAgICBAa2V5dXAuZW50ZXI9XCJhZGRUb2RvXCI+XG4gICAgPC9oZWFkZXI+XG4gICAgPCEtLSBtYWluIHNlY3Rpb24gLS0+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJtYWluXCIgdi1zaG93PVwidG9kb3MubGVuZ3RoXCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGUtYWxsXCJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgOmNoZWNrZWQ9XCJhbGxDaGVja2VkXCJcbiAgICAgICAgQGNoYW5nZT1cInRvZ2dsZUFsbCh7IGRvbmU6ICFhbGxDaGVja2VkIH0pXCI+XG4gICAgICA8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cbiAgICAgICAgPHRvZG8gdi1mb3I9XCJ0b2RvIGluIGZpbHRlcmVkVG9kb3NcIiA6dG9kbz1cInRvZG9cIj48L3RvZG8+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8IS0tIGZvb3RlciAtLT5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCIgdi1zaG93PVwidG9kb3MubGVuZ3RoXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY291bnRcIj5cbiAgICAgICAgPHN0cm9uZz57eyByZW1haW5pbmcgfX08L3N0cm9uZz5cbiAgICAgICAge3sgcmVtYWluaW5nIHwgcGx1cmFsaXplKCdpdGVtJykgfX0gbGVmdFxuICAgICAgPC9zcGFuPlxuICAgICAgPHVsIGNsYXNzPVwiZmlsdGVyc1wiPlxuICAgICAgICA8bGkgdi1mb3I9XCIodmFsLCBrZXkpIGluIGZpbHRlcnNcIj5cbiAgICAgICAgICA8YSA6aHJlZj1cIicjLycgKyBrZXlcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyBzZWxlY3RlZDogdmlzaWJpbGl0eSA9PT0ga2V5IH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwidmlzaWJpbGl0eSA9IGtleVwiPnt7IGtleSB8IGNhcGl0YWxpemUgfX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsZWFyLWNvbXBsZXRlZFwiXG4gICAgICAgIHYtc2hvdz1cInRvZG9zLmxlbmd0aCA+IHJlbWFpbmluZ1wiXG4gICAgICAgIEBjbGljaz1cImNsZWFyQ29tcGxldGVkXCI+XG4gICAgICAgIENsZWFyIGNvbXBsZXRlZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb290ZXI+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cdGltcG9ydCBUb2RvIGZyb20gJy4vVG9kby52dWUnXG5cblx0Y29uc3QgZmlsdGVycyA9IHtcblx0XHRhbGw6IHRvZG9zID0+IHRvZG9zLFxuXHRcdGFjdGl2ZTogdG9kb3MgPT4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uZG9uZSksXG5cdFx0Y29tcHV0ZWQ6IHRvZG9zID0+IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uZG9uZSlcblx0fVxuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7IFRvZG8gfSxcblx0XHRkYXRhICgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHQgIHZpc2liaWxpdHk6ICdhbGwnLFxuXHRcdFx0ICBmaWx0ZXJzOiBmaWx0ZXJzXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0dG9kb3MgKCkge1xuXHRcdFx0ICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudG9kb3Ncblx0XHRcdH0sXG5cdFx0XHRhbGxDaGVja2VkICgpIHtcblx0XHRcdCAgcmV0dXJuIHRoaXMudG9kb3MuZXZlcnkodG9kbyA9PiB0b2RvLmRvbmUpXG5cdFx0XHR9LFxuXHRcdFx0ZmlsdGVyZWRUb2RvcyAoKSB7XG5cdFx0XHQgIHJldHVybiBmaWx0ZXJzW3RoaXMudmlzaWJpbGl0eV0odGhpcy50b2Rvcylcblx0XHRcdH0sXG5cdFx0XHRyZW1haW5pbmcgKCkge1xuXHRcdFx0ICByZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5kb25lKS5sZW5ndGhcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGFkZFRvZG8gKGUpIHtcblx0XHRcdCAgdmFyIHRleHQgPSBlLnRhcmdldC52YWx1ZVxuXHRcdFx0ICBpZiAodGV4dC50cmltKCkpIHtcblx0XHRcdCAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2FkZFRvZG8nLCB7IHRleHQgfSlcblx0XHRcdCAgfVxuXHRcdFx0ICBlLnRhcmdldC52YWx1ZSA9ICcnXG5cdFx0XHR9LFxuXHRcdFx0Li4ubWFwTXV0YXRpb25zKFtcblx0XHRcdCAgJ3RvZ2dsZUFsbCcsXG5cdFx0XHQgICdjbGVhckNvbXBsZXRlZCdcblx0XHRcdF0pXG5cdFx0fSxcblx0XHRmaWx0ZXJzOiB7XG5cdFx0XHRwbHVyYWxpemU6IChuLCB3KSA9PiBuID09PSAxID8gdyA6ICh3ICsgJ3MnKSxcblx0XHRcdGNhcGl0YWxpemU6IHMgPT4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zYTIyMDlkNSEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b2RvbXZjL2NvbXBvbmVudHMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwidG9kb1wiIDpjbGFzcz1cInsgY29tcGxldGVkOiB0b2RvLmRvbmUsIGVkaXRpbmc6IGVkaXRpbmcgfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGVcIlxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICA6Y2hlY2tlZD1cInRvZG8uZG9uZVwiXG4gICAgICAgIEBjaGFuZ2U9XCJ0b2dnbGVUb2RvKHsgdG9kbzogdG9kbyB9KVwiPlxuICAgICAgPGxhYmVsIHYtdGV4dD1cInRvZG8udGV4dFwiIEBkYmxjbGljaz1cImVkaXRpbmcgPSB0cnVlXCI+PC9sYWJlbD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJkZXN0cm95XCIgQGNsaWNrPVwiZGVsZXRlVG9kbyh7IHRvZG86IHRvZG8gfSlcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8aW5wdXQgY2xhc3M9XCJlZGl0XCJcbiAgICAgIHYtc2hvdz1cImVkaXRpbmdcIlxuICAgICAgdi1mb2N1cz1cImVkaXRpbmdcIlxuICAgICAgOnZhbHVlPVwidG9kby50ZXh0XCJcbiAgICAgIEBrZXl1cC5lbnRlcj1cImRvbmVFZGl0XCJcbiAgICAgIEBrZXl1cC5lc2M9XCJjYW5jZWxFZGl0XCJcbiAgICAgIEBibHVyPVwiZG9uZUVkaXRcIj5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVG9kbycsXG4gIHByb3BzOiBbJ3RvZG8nXSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRpbmc6IGZhbHNlXG4gICAgfVxuICB9LFxuICBkaXJlY3RpdmVzOiB7XG4gICAgZm9jdXMgKGVsLCB7IHZhbHVlIH0sIHsgY29udGV4dCB9KSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29udGV4dC4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGVsLmZvY3VzKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBNdXRhdGlvbnMoW1xuICAgICAgJ2VkaXRUb2RvJyxcbiAgICAgICd0b2dnbGVUb2RvJyxcbiAgICAgICdkZWxldGVUb2RvJ1xuICAgIF0pLFxuICAgIGRvbmVFZGl0IChlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgY29uc3QgeyB0b2RvIH0gPSB0aGlzXG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlVG9kbyh7XG4gICAgICAgICAgdG9kb1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmVkaXRpbmcpIHtcbiAgICAgICAgdGhpcy5lZGl0VG9kbyh7XG4gICAgICAgICAgdG9kbyxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgY2FuY2VsRWRpdCAoZSkge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSB0aGlzLnRvZG8udGV4dFxuICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2VcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03OWU4NjVjMiEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b2RvbXZjL2NvbXBvbmVudHMvVG9kby52dWVcbi8vIG1vZHVsZSBpZCA9IDM0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9