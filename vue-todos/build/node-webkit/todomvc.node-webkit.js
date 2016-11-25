webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(125);
	module.exports = __webpack_require__(144);


/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(328)();
	// imports
	
	
	// module
	exports.push([module.id, "\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n:focus {\n\toutline: 0;\n}\n.hidden {\n\tdisplay: none;\n}\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\nlabel[for='toggle-all'] {\n\tdisplay: none;\n}\n.toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none; /* Mobile Safari */\n}\n.toggle-all:before {\n\tcontent: '\\276F';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n.toggle-all:checked:before {\n\tcolor: #737373;\n}\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 12px 16px;\n\tmargin: 0 0 0 43px;\n}\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n.todo-list li label {\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n}\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n.todo-list li .destroy:after {\n\tcontent: '\\D7';\n}\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n.todo-list li .edit {\n\tdisplay: none;\n}\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n.todo-count strong {\n\tfont-weight: 300;\n}\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n.filters li {\n\tdisplay: inline;\n}\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n.info p {\n\tline-height: 1;\n}\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n}\n.todo-list li .toggle {\n\t\theight: 40px;\n}\n.toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\ttransform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\tappearance: none;\n}\n}\n@media (max-width: 430px) {\n.footer {\n\t\theight: 50px;\n}\n.filters {\n\t\tbottom: 10px;\n}\n}\n", "", {"version":3,"sources":["/./node_modules/.npminstall/todomvc-app-css/2.0.6/todomvc-app-css/index.css"],"names":[],"mappings":";AAAA;;CAEC,UAAU;CACV,WAAW;CACX;AAED;CACC,UAAU;CACV,WAAW;CACX,UAAU;CACV,iBAAiB;CACjB,gBAAgB;CAChB,yBAAyB;CACzB,qBAAqB;CACrB,qBAAqB;CACrB,eAAe;CACf,yBAAyB;CACzB,iBAAiB;CACjB,oCAAoC;CACpC,mCAAmC;CACnC;AAED;CACC,0DAA0D;CAC1D,mBAAmB;CACnB,oBAAoB;CACpB,eAAe;CACf,iBAAiB;CACjB,iBAAiB;CACjB,eAAe;CACf,oCAAoC;CACpC,mCAAmC;CACnC,iBAAiB;CACjB;AAED;CACC,WAAW;CACX;AAED;CACC,cAAc;CACd;AAED;CACC,iBAAiB;CACjB,uBAAuB;CACvB,mBAAmB;CACnB;8CAC6C;CAC7C;AAED;CACC,mBAAmB;CACnB,iBAAiB;CACjB,eAAe;CACf;AAED;CACC,mBAAmB;CACnB,iBAAiB;CACjB,eAAe;CACf;AAED;CACC,mBAAmB;CACnB,iBAAiB;CACjB,eAAe;CACf;AAED;CACC,mBAAmB;CACnB,YAAY;CACZ,YAAY;CACZ,iBAAiB;CACjB,iBAAiB;CACjB,mBAAmB;CACnB,+BAA+B;CAC/B,2CAA2C;CAC3C,wCAAwC;CACxC,mCAAmC;CACnC;AAED;;CAEC,mBAAmB;CACnB,UAAU;CACV,YAAY;CACZ,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB,mBAAmB;CACnB,UAAU;CACV,eAAe;CACf,aAAa;CACb,uBAAuB;CACvB,kDAAkD;CAClD,uBAAuB;CACvB,oCAAoC;CACpC,mCAAmC;CACnC;AAED;CACC,6BAA6B;CAC7B,aAAa;CACb,iCAAiC;CACjC,8CAA8C;CAC9C;AAED;CACC,mBAAmB;CACnB,WAAW;CACX,8BAA8B;CAC9B;AAED;CACC,cAAc;CACd;AAED;CACC,mBAAmB;CACnB,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,aAAa,CAAC,mBAAmB;CACjC;AAED;CACC,iBAAa;CACb,gBAAgB;CAChB,eAAe;CACf,6BAA6B;CAC7B;AAED;CACC,eAAe;CACf;AAED;CACC,UAAU;CACV,WAAW;CACX,iBAAiB;CACjB;AAED;CACC,mBAAmB;CACnB,gBAAgB;CAChB,iCAAiC;CACjC;AAED;CACC,oBAAoB;CACpB;AAED;CACC,oBAAoB;CACpB,WAAW;CACX;AAED;CACC,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,mBAAmB;CACnB;AAED;CACC,cAAc;CACd;AAED;CACC,mBAAmB;CACnB,YAAY;CACZ,mEAAmE;CACnE,aAAa;CACb,mBAAmB;CACnB,OAAO;CACP,UAAU;CACV,eAAe;CACf,aAAa,CAAC,mBAAmB;CACjC,yBAAyB;CACzB,iBAAiB;CACjB;AAED;CACC,sNAAsN;CACtN;AAED;CACC,qRAAqR;CACrR;AAED;CACC,sBAAsB;CACtB,6BAA6B;CAC7B,kBAAkB;CAClB,eAAe;CACf,iBAAiB;CACjB,uBAAuB;CACvB;AAED;CACC,eAAe;CACf,8BAA8B;CAC9B;AAED;CACC,cAAc;CACd,mBAAmB;CACnB,OAAO;CACP,YAAY;CACZ,UAAU;CACV,YAAY;CACZ,aAAa;CACb,eAAe;CACf,gBAAgB;CAChB,eAAe;CACf,oBAAoB;CACpB,gCAAgC;CAChC;AAED;CACC,eAAe;CACf;AAED;CACC,eAAa;CACb;AAED;CACC,eAAe;CACf;AAED;CACC,cAAc;CACd;AAED;CACC,oBAAoB;CACpB;AAED;CACC,YAAY;CACZ,mBAAmB;CACnB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B;AAED;CACC,YAAY;CACZ,mBAAmB;CACnB,SAAS;CACT,UAAU;CACV,QAAQ;CACR,aAAa;CACb,iBAAiB;CACjB;;;;gDAI+C;CAC/C;AAED;CACC,YAAY;CACZ,iBAAiB;CACjB;AAED;CACC,iBAAiB;CACjB;AAED;CACC,UAAU;CACV,WAAW;CACX,iBAAiB;CACjB,mBAAmB;CACnB,SAAS;CACT,QAAQ;CACR;AAED;CACC,gBAAgB;CAChB;AAED;CACC,eAAe;CACf,YAAY;CACZ,iBAAiB;CACjB,sBAAsB;CACtB,8BAA8B;CAC9B,mBAAmB;CACnB;AAED;CACC,qCAAqC;CACrC;AAED;CACC,qCAAqC;CACrC;AAED;;CAEC,aAAa;CACb,mBAAmB;CACnB,kBAAkB;CAClB,sBAAsB;CACtB,gBAAgB;CAChB;AAED;CACC,2BAA2B;CAC3B;AAED;CACC,oBAAoB;CACpB,eAAe;CACf,gBAAgB;CAChB,8CAA8C;CAC9C,mBAAmB;CACnB;AAED;CACC,eAAe;CACf;AAED;CACC,eAAe;CACf,sBAAsB;CACtB,iBAAiB;CACjB;AAED;CACC,2BAA2B;CAC3B;;AAED;;;EAGE;AACF;AACC;;EAEC,iBAAiB;CACjB;AAED;EACC,aAAa;CACb;AAED;EACC,iCAAiC;EACjC,yBAAyB;EACzB,yBAAyB;EACzB,iBAAiB;CACjB;CACD;AAED;AACC;EACC,aAAa;CACb;AAED;EACC,aAAa;CACb;CACD","file":"index.css","sourcesContent":["html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\n:focus {\n\toutline: 0;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\nlabel[for='toggle-all'] {\n\tdisplay: none;\n}\n\n.toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none; /* Mobile Safari */\n}\n\n.toggle-all:before {\n\tcontent: '❯';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 12px 16px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.todo-list li label {\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n\n\t.toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\ttransform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\tappearance: none;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 94:
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

/***/ 138:
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
	
	var _vuex = __webpack_require__(43);
	
	var _Todo = __webpack_require__(338);
	
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

/***/ 139:
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
	
	var _vuex = __webpack_require__(43);
	
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

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(95);
	
	var _vue = __webpack_require__(30);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _store = __webpack_require__(145);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _App = __webpack_require__(337);
	
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

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _vue = __webpack_require__(30);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(43);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _mutations = __webpack_require__(94);
	
	var _plugins = __webpack_require__(146);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vuex2.default);
	
	exports.default = new _vuex2.default.Store({
		state: _mutations.state,
		mutations: _mutations.mutations,
		plugins: _plugins2.default
	});

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _mutations = __webpack_require__(94);
	
	var _logger = __webpack_require__(92);
	
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

/***/ 328:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(345)
	
	/* script */
	__vue_exports__ = __webpack_require__(138)
	
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
	__vue_options__.__file = "/Users/acrens/f2e/githubCode/vue-demo/vue-todos/todomvc/components/App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(25)
	  hotAPI.install(__webpack_require__(30), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3a2209d5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3a2209d5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(139)
	
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
	__vue_options__.__file = "/Users/acrens/f2e/githubCode/vue-demo/vue-todos/todomvc/components/Todo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(25)
	  hotAPI.install(__webpack_require__(30), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-79e865c2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-79e865c2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Todo.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

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
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(25).rerender("data-v-3a2209d5", module.exports)
	  }
	}

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

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
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(25).rerender("data-v-79e865c2", module.exports)
	  }
	}

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(344)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(90, function() {
				var newContent = __webpack_require__(90);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL3RvZG9tdmMtYXBwLWNzcy8yLjAuNi90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3RvZG9tdmMvc3RvcmUvbXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL3RvZG9tdmMvY29tcG9uZW50cy9BcHAudnVlPzc1ZGYiLCJ3ZWJwYWNrOi8vLy4vdG9kb212Yy9jb21wb25lbnRzL1RvZG8udnVlPzk5YWUiLCJ3ZWJwYWNrOi8vLy4vdG9kb212Yy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdG9kb212Yy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90b2RvbXZjL3N0b3JlL3BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjUuMC9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi90b2RvbXZjL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi90b2RvbXZjL2NvbXBvbmVudHMvVG9kby52dWUiLCJ3ZWJwYWNrOi8vLy4vdG9kb212Yy9jb21wb25lbnRzL0FwcC52dWU/NTMzZiIsIndlYnBhY2s6Ly8vLi90b2RvbXZjL2NvbXBvbmVudHMvVG9kby52dWU/MDQ1MyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvMS4wLjAvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC90b2RvbXZjLWFwcC1jc3MvMi4wLjYvdG9kb212Yy1hcHAtY3NzL2luZGV4LmNzcz9kMTQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFvRztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRSIsImZpbGUiOiJ0b2RvbXZjLm5vZGUtd2Via2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbmJvZHkge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbiB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuXHRjb2xvcjogaW5oZXJpdDtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuYm9keSB7XG5cdGZvbnQ6IDE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0bGluZS1oZWlnaHQ6IDEuNGVtO1xuXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRjb2xvcjogIzRkNGQ0ZDtcblx0bWluLXdpZHRoOiAyMzBweDtcblx0bWF4LXdpZHRoOiA1NTBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG46Zm9jdXMge1xuXHRvdXRsaW5lOiAwO1xufVxuXG4uaGlkZGVuIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG9hcHAge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRtYXJnaW46IDEzMHB4IDAgNDBweCAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcblx0ICAgICAgICAgICAgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50b2RvYXBwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRjb2xvcjogI2U2ZTZlNjtcbn1cblxuLnRvZG9hcHAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGNvbG9yOiAjZTZlNmU2O1xufVxuXG4udG9kb2FwcCBpbnB1dDo6aW5wdXQtcGxhY2Vob2xkZXIge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGNvbG9yOiAjZTZlNmU2O1xufVxuXG4udG9kb2FwcCBoMSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtMTU1cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDEwMHB4O1xuXHRmb250LXdlaWdodDogMTAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjE1KTtcblx0LXdlYmtpdC10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHQtbW96LXRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG5cdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbi5uZXctdG9kbyxcbi5lZGl0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW46IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXHRmb250LXdlaWdodDogaW5oZXJpdDtcblx0bGluZS1oZWlnaHQ6IDEuNGVtO1xuXHRib3JkZXI6IDA7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRwYWRkaW5nOiA2cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4ubmV3LXRvZG8ge1xuXHRwYWRkaW5nOiAxNnB4IDE2cHggMTZweCA2MHB4O1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xuXHRib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwwLDAsMC4wMyk7XG59XG5cbi5tYWluIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAyO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cblxubGFiZWxbZm9yPSd0b2dnbGUtYWxsJ10ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4udG9nZ2xlLWFsbCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtNTVweDtcblx0bGVmdDogLTEycHg7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDM0cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyOiBub25lOyAvKiBNb2JpbGUgU2FmYXJpICovXG59XG5cbi50b2dnbGUtYWxsOmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICfina8nO1xuXHRmb250LXNpemU6IDIycHg7XG5cdGNvbG9yOiAjZTZlNmU2O1xuXHRwYWRkaW5nOiAxMHB4IDI3cHggMTBweCAyN3B4O1xufVxuXG4udG9nZ2xlLWFsbDpjaGVja2VkOmJlZm9yZSB7XG5cdGNvbG9yOiAjNzM3MzczO1xufVxuXG4udG9kby1saXN0IHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xufVxuXG4udG9kby1saXN0IGxpOmxhc3QtY2hpbGQge1xuXHRib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmcge1xuXHRib3JkZXItYm90dG9tOiBub25lO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLmVkaXQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDUwNnB4O1xuXHRwYWRkaW5nOiAxMnB4IDE2cHg7XG5cdG1hcmdpbjogMCAwIDAgNDNweDtcbn1cblxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC52aWV3IHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogNDBweDtcblx0LyogYXV0bywgc2luY2Ugbm9uLVdlYktpdCBicm93c2VycyBkb2Vzbid0IHN1cHBvcnQgaW5wdXQgc3R5bGluZyAqL1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdG1hcmdpbjogYXV0byAwO1xuXHRib3JkZXI6IG5vbmU7IC8qIE1vYmlsZSBTYWZhcmkgKi9cblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpIC50b2dnbGU6YWZ0ZXIge1xuXHRjb250ZW50OiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCItMTAgLTE4IDEwMCAxMzVcIj48Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjUwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZWRlZGVkXCIgc3Ryb2tlLXdpZHRoPVwiM1wiLz48L3N2Zz4nKTtcbn1cblxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlOmNoZWNrZWQ6YWZ0ZXIge1xuXHRjb250ZW50OiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCItMTAgLTE4IDEwMCAxMzVcIj48Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjUwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjYmRkYWQ1XCIgc3Ryb2tlLXdpZHRoPVwiM1wiLz48cGF0aCBmaWxsPVwiIzVkYzJhZlwiIGQ9XCJNNzIgMjVMNDIgNzEgMjcgNTZsLTQgNCAyMCAyMCAzNC01MnpcIi8+PC9zdmc+Jyk7XG59XG5cbi50b2RvLWxpc3QgbGkgbGFiZWwge1xuXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdHBhZGRpbmc6IDE1cHggNjBweCAxNXB4IDE1cHg7XG5cdG1hcmdpbi1sZWZ0OiA0NXB4O1xuXHRkaXNwbGF5OiBibG9jaztcblx0bGluZS1oZWlnaHQ6IDEuMjtcblx0dHJhbnNpdGlvbjogY29sb3IgMC40cztcbn1cblxuLnRvZG8tbGlzdCBsaS5jb21wbGV0ZWQgbGFiZWwge1xuXHRjb2xvcjogI2Q5ZDlkOTtcblx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3kge1xuXHRkaXNwbGF5OiBub25lO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0cmlnaHQ6IDEwcHg7XG5cdGJvdHRvbTogMDtcblx0d2lkdGg6IDQwcHg7XG5cdGhlaWdodDogNDBweDtcblx0bWFyZ2luOiBhdXRvIDA7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0Y29sb3I6ICNjYzlhOWE7XG5cdG1hcmdpbi1ib3R0b206IDExcHg7XG5cdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6aG92ZXIge1xuXHRjb2xvcjogI2FmNWI1ZTtcbn1cblxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveTphZnRlciB7XG5cdGNvbnRlbnQ6ICfDlyc7XG59XG5cbi50b2RvLWxpc3QgbGk6aG92ZXIgLmRlc3Ryb3kge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLnRvZG8tbGlzdCBsaSAuZWRpdCB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkuZWRpdGluZzpsYXN0LWNoaWxkIHtcblx0bWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLmZvb3RlciB7XG5cdGNvbG9yOiAjNzc3O1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdGhlaWdodDogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cblxuLmZvb3RlcjpiZWZvcmUge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHRoZWlnaHQ6IDUwcHg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksXG5cdCAgICAgICAgICAgIDAgOHB4IDAgLTNweCAjZjZmNmY2LFxuXHQgICAgICAgICAgICAwIDlweCAxcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG5cdCAgICAgICAgICAgIDAgMTZweCAwIC02cHggI2Y2ZjZmNixcblx0ICAgICAgICAgICAgMCAxN3B4IDJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnRvZG8tY291bnQge1xuXHRmbG9hdDogbGVmdDtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvZG8tY291bnQgc3Ryb25nIHtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmZpbHRlcnMge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDA7XG5cdGxlZnQ6IDA7XG59XG5cbi5maWx0ZXJzIGxpIHtcblx0ZGlzcGxheTogaW5saW5lO1xufVxuXG4uZmlsdGVycyBsaSBhIHtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdG1hcmdpbjogM3B4O1xuXHRwYWRkaW5nOiAzcHggN3B4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5maWx0ZXJzIGxpIGE6aG92ZXIge1xuXHRib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMSk7XG59XG5cbi5maWx0ZXJzIGxpIGEuc2VsZWN0ZWQge1xuXHRib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMik7XG59XG5cbi5jbGVhci1jb21wbGV0ZWQsXG5odG1sIC5jbGVhci1jb21wbGV0ZWQ6YWN0aXZlIHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsZWFyLWNvbXBsZXRlZDpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaW5mbyB7XG5cdG1hcmdpbjogNjVweCBhdXRvIDA7XG5cdGNvbG9yOiAjYmZiZmJmO1xuXHRmb250LXNpemU6IDEwcHg7XG5cdHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5mbyBwIHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5cbi5pbmZvIGEge1xuXHRjb2xvcjogaW5oZXJpdDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuXG4uaW5mbyBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qXG5cdEhhY2sgdG8gcmVtb3ZlIGJhY2tncm91bmQgZnJvbSBNb2JpbGUgU2FmYXJpLlxuXHRDYW4ndCB1c2UgaXQgZ2xvYmFsbHkgc2luY2UgaXQgZGVzdHJveXMgY2hlY2tib3hlcyBpbiBGaXJlZm94XG4qL1xuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzowKSB7XG5cdC50b2dnbGUtYWxsLFxuXHQudG9kby1saXN0IGxpIC50b2dnbGUge1xuXHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdH1cblxuXHQudG9kby1saXN0IGxpIC50b2dnbGUge1xuXHRcdGhlaWdodDogNDBweDtcblx0fVxuXG5cdC50b2dnbGUtYWxsIHtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG5cdFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRcdGFwcGVhcmFuY2U6IG5vbmU7XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XG5cdC5mb290ZXIge1xuXHRcdGhlaWdodDogNTBweDtcblx0fVxuXG5cdC5maWx0ZXJzIHtcblx0XHRib3R0b206IDEwcHg7XG5cdH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjUuMC9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtM2EyMjA5ZDUhLi9+Ly5ucG1pbnN0YWxsL3RvZG9tdmMtYXBwLWNzcy8yLjAuNi90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyDmtY/op4jlmajlrZjlgqjmlbDmja4ga2V5XG5leHBvcnQgY29uc3QgU1RPUkFHRV9LRVkgPSAndG9kb3MtdnVlanMnXG5pZihuYWdpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1BoYW50b21KUycpID4gLTEpIHtcblx0d2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xufVxuXG4vLyDnu4Tku7bnirbmgIFcbmV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcblx0dG9kb3M6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSB8fCAnW10nKVxufTtcblxuLy8gbXV0YXRpb25zIOWvueixoVxuZXhwb3J0IGNvbnN0IG11dGF0aW9ucyA9IHtcblx0YWRkVG9kbyAoc3RhdGUsIHsgdGV4dCB9KSB7XG5cdFx0c3RhdGUudG9kb3MucHVzaCh7XG5cdFx0XHR0ZXh0LFxuXHRcdFx0ZG9uZTogZmFsc2Vcblx0XHR9KTtcblx0fSxcblxuXHRkZWxldGVUb2RvIChzdGF0ZSwgeyB0b2RvIH0pIHtcblx0XHRzdGF0ZS50b2Rvcy5zcGxpY2Uoc3RhdGUudG9kb3MuaW5kZXhPZih0b2RvKSwgMSk7XG5cdH0sXG5cblx0dG9nZ2xlVG9kbyAoc3RhdGUsIHsgdG9kbyB9KSB7XG5cdFx0dG9kby5kb25lID0gIXRvZG8uZG9uZTtcblx0fSxcblxuXHRlZGl0VG9kbyAoc3RhdGUsIHsgdG9kbywgdmFsdWUgfSkge1xuXHRcdHRvZG8udGV4dCA9IHZhbHVlO1xuXHR9LFxuXG5cdHRvZ2dsZUFsbCAoc3RhdGUsIHsgZG9uZSB9KSB7XG5cdFx0c3RhdGUudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuXHRcdFx0dG9kby5kb25lID0gZG9uZTtcblx0XHR9KTtcblx0fSxcblxuXHRjbGVhckNvbXBsZXRlZCAoc3RhdGUpIHtcblx0XHRzdGF0ZS50b2RvcyA9IHN0YXRlLnRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmRvbmUpO1xuXHR9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdG9kb212Yy9zdG9yZS9tdXRhdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIiBzcmM9XCJ0b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzXCI+PC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuXHQ8c2VjdGlvbiBjbGFzcz1cInRvZG9hcHBcIj5cbiAgICA8IS0tIGhlYWRlciAtLT5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8aDE+dG9kb3M8L2gxPlxuICAgICAgPGlucHV0IGNsYXNzPVwibmV3LXRvZG9cIlxuICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IG5lZWRzIHRvIGJlIGRvbmU/XCJcbiAgICAgICAgQGtleXVwLmVudGVyPVwiYWRkVG9kb1wiPlxuICAgIDwvaGVhZGVyPlxuICAgIDwhLS0gbWFpbiBzZWN0aW9uIC0tPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpblwiIHYtc2hvdz1cInRvZG9zLmxlbmd0aFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwidG9nZ2xlLWFsbFwiXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIDpjaGVja2VkPVwiYWxsQ2hlY2tlZFwiXG4gICAgICAgIEBjaGFuZ2U9XCJ0b2dnbGVBbGwoeyBkb25lOiAhYWxsQ2hlY2tlZCB9KVwiPlxuICAgICAgPHVsIGNsYXNzPVwidG9kby1saXN0XCI+XG4gICAgICAgIDx0b2RvIHYtZm9yPVwidG9kbyBpbiBmaWx0ZXJlZFRvZG9zXCIgOnRvZG89XCJ0b2RvXCI+PC90b2RvPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPCEtLSBmb290ZXIgLS0+XG4gICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiIHYtc2hvdz1cInRvZG9zLmxlbmd0aFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0b2RvLWNvdW50XCI+XG4gICAgICAgIDxzdHJvbmc+e3sgcmVtYWluaW5nIH19PC9zdHJvbmc+XG4gICAgICAgIHt7IHJlbWFpbmluZyB8IHBsdXJhbGl6ZSgnaXRlbScpIH19IGxlZnRcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDx1bCBjbGFzcz1cImZpbHRlcnNcIj5cbiAgICAgICAgPGxpIHYtZm9yPVwiKHZhbCwga2V5KSBpbiBmaWx0ZXJzXCI+XG4gICAgICAgICAgPGEgOmhyZWY9XCInIy8nICsga2V5XCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgc2VsZWN0ZWQ6IHZpc2liaWxpdHkgPT09IGtleSB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cInZpc2liaWxpdHkgPSBrZXlcIj57eyBrZXkgfCBjYXBpdGFsaXplIH19PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjbGVhci1jb21wbGV0ZWRcIlxuICAgICAgICB2LXNob3c9XCJ0b2Rvcy5sZW5ndGggPiByZW1haW5pbmdcIlxuICAgICAgICBAY2xpY2s9XCJjbGVhckNvbXBsZXRlZFwiPlxuICAgICAgICBDbGVhciBjb21wbGV0ZWRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9vdGVyPlxuICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xuXHRpbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8udnVlJ1xuXG5cdGNvbnN0IGZpbHRlcnMgPSB7XG5cdFx0YWxsOiB0b2RvcyA9PiB0b2Rvcyxcblx0XHRhY3RpdmU6IHRvZG9zID0+IHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmRvbmUpLFxuXHRcdGNvbXB1dGVkOiB0b2RvcyA9PiB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmRvbmUpXG5cdH1cblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czogeyBUb2RvIH0sXG5cdFx0ZGF0YSAoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0ICB2aXNpYmlsaXR5OiAnYWxsJyxcblx0XHRcdCAgZmlsdGVyczogZmlsdGVyc1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHRvZG9zICgpIHtcblx0XHRcdCAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnRvZG9zXG5cdFx0XHR9LFxuXHRcdFx0YWxsQ2hlY2tlZCAoKSB7XG5cdFx0XHQgIHJldHVybiB0aGlzLnRvZG9zLmV2ZXJ5KHRvZG8gPT4gdG9kby5kb25lKVxuXHRcdFx0fSxcblx0XHRcdGZpbHRlcmVkVG9kb3MgKCkge1xuXHRcdFx0ICByZXR1cm4gZmlsdGVyc1t0aGlzLnZpc2liaWxpdHldKHRoaXMudG9kb3MpXG5cdFx0XHR9LFxuXHRcdFx0cmVtYWluaW5nICgpIHtcblx0XHRcdCAgcmV0dXJuIHRoaXMudG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uZG9uZSkubGVuZ3RoXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRhZGRUb2RvIChlKSB7XG5cdFx0XHQgIHZhciB0ZXh0ID0gZS50YXJnZXQudmFsdWVcblx0XHRcdCAgaWYgKHRleHQudHJpbSgpKSB7XG5cdFx0XHQgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdhZGRUb2RvJywgeyB0ZXh0IH0pXG5cdFx0XHQgIH1cblx0XHRcdCAgZS50YXJnZXQudmFsdWUgPSAnJ1xuXHRcdFx0fSxcblx0XHRcdC4uLm1hcE11dGF0aW9ucyhbXG5cdFx0XHQgICd0b2dnbGVBbGwnLFxuXHRcdFx0ICAnY2xlYXJDb21wbGV0ZWQnXG5cdFx0XHRdKVxuXHRcdH0sXG5cdFx0ZmlsdGVyczoge1xuXHRcdFx0cGx1cmFsaXplOiAobiwgdykgPT4gbiA9PT0gMSA/IHcgOiAodyArICdzJyksXG5cdFx0XHRjYXBpdGFsaXplOiBzID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzYuMi44L2JhYmVsLWxvYWRlci9saWIhLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RvZG9tdmMvY29tcG9uZW50cy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHRlbXBsYXRlPlxuICA8bGkgY2xhc3M9XCJ0b2RvXCIgOmNsYXNzPVwieyBjb21wbGV0ZWQ6IHRvZG8uZG9uZSwgZWRpdGluZzogZWRpdGluZyB9XCI+XG4gICAgPGRpdiBjbGFzcz1cInZpZXdcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZVwiXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIDpjaGVja2VkPVwidG9kby5kb25lXCJcbiAgICAgICAgQGNoYW5nZT1cInRvZ2dsZVRvZG8oeyB0b2RvOiB0b2RvIH0pXCI+XG4gICAgICA8bGFiZWwgdi10ZXh0PVwidG9kby50ZXh0XCIgQGRibGNsaWNrPVwiZWRpdGluZyA9IHRydWVcIj48L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlc3Ryb3lcIiBAY2xpY2s9XCJkZWxldGVUb2RvKHsgdG9kbzogdG9kbyB9KVwiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxpbnB1dCBjbGFzcz1cImVkaXRcIlxuICAgICAgdi1zaG93PVwiZWRpdGluZ1wiXG4gICAgICB2LWZvY3VzPVwiZWRpdGluZ1wiXG4gICAgICA6dmFsdWU9XCJ0b2RvLnRleHRcIlxuICAgICAgQGtleXVwLmVudGVyPVwiZG9uZUVkaXRcIlxuICAgICAgQGtleXVwLmVzYz1cImNhbmNlbEVkaXRcIlxuICAgICAgQGJsdXI9XCJkb25lRWRpdFwiPlxuICA8L2xpPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdUb2RvJyxcbiAgcHJvcHM6IFsndG9kbyddLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZWRpdGluZzogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBmb2N1cyAoZWwsIHsgdmFsdWUgfSwgeyBjb250ZXh0IH0pIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb250ZXh0LiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgZWwuZm9jdXMoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcE11dGF0aW9ucyhbXG4gICAgICAnZWRpdFRvZG8nLFxuICAgICAgJ3RvZ2dsZVRvZG8nLFxuICAgICAgJ2RlbGV0ZVRvZG8nXG4gICAgXSksXG4gICAgZG9uZUVkaXQgKGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICBjb25zdCB7IHRvZG8gfSA9IHRoaXNcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZWxldGVUb2RvKHtcbiAgICAgICAgICB0b2RvXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWRpdGluZykge1xuICAgICAgICB0aGlzLmVkaXRUb2RvKHtcbiAgICAgICAgICB0b2RvLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBjYW5jZWxFZGl0IChlKSB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IHRoaXMudG9kby50ZXh0XG4gICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci82LjIuOC9iYWJlbC1sb2FkZXIvbGliIS4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b2RvbXZjL2NvbXBvbmVudHMvVG9kby52dWVcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcbiAqIOW6lOeUqOWFpeWPo+aWh+S7tlxuICovXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC52dWUnXG5cbm5ldyBWdWUoe1xuXHRlbDogJyNhcHAnLFxuXHRzdG9yZSxcblx0cmVuZGVyOiBoID0+IGgoQXBwKVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90b2RvbXZjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcbmltcG9ydCB7IHN0YXRlLCBtdXRhdGlvbnMgfSBmcm9tICcuL211dGF0aW9ucydcbmltcG9ydCBwbHVnaW5zIGZyb20gJy4vcGx1Z2lucydcblxuVnVlLnVzZShWdWV4KVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG5cdHN0YXRlLFxuXHRtdXRhdGlvbnMsXG5cdHBsdWdpbnNcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdG9kb212Yy9zdG9yZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qKlxuICog5Yib5bu65a2Y5YKo5o+S5Lu2XG4gKi9cbmltcG9ydCB7IFNUT1JBR0VfS0VZIH0gZnJvbSAnLi9tdXRhdGlvbnMnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJy4uLy4uL3NyYy9wbHVnaW5zL2xvZ2dlcidcblxuY29uc3QgbG9jYWxTdG9yYWdlUGx1Z2luID0gc3RvcmUgPT4ge1xuXHRzdG9yZS5zdWJzY3JpYmUoKG11dGF0aW9uLCB7IHRvZG9zIH0pID0+IHtcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlUGx1Z2luLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG5cdH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gW2NyZWF0ZUxvZ2dlcigpLCBsb2NhbFN0b3JhZ2VQbHVnaW5dOiBbbG9jYWxTdG9yYWdlUGx1Z2luXVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdG9kb212Yy9zdG9yZS9wbHVnaW5zLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjUuMC9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIiBzcmM9XCJ0b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzXCI+PC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuXHQ8c2VjdGlvbiBjbGFzcz1cInRvZG9hcHBcIj5cbiAgICA8IS0tIGhlYWRlciAtLT5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8aDE+dG9kb3M8L2gxPlxuICAgICAgPGlucHV0IGNsYXNzPVwibmV3LXRvZG9cIlxuICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IG5lZWRzIHRvIGJlIGRvbmU/XCJcbiAgICAgICAgQGtleXVwLmVudGVyPVwiYWRkVG9kb1wiPlxuICAgIDwvaGVhZGVyPlxuICAgIDwhLS0gbWFpbiBzZWN0aW9uIC0tPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpblwiIHYtc2hvdz1cInRvZG9zLmxlbmd0aFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwidG9nZ2xlLWFsbFwiXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIDpjaGVja2VkPVwiYWxsQ2hlY2tlZFwiXG4gICAgICAgIEBjaGFuZ2U9XCJ0b2dnbGVBbGwoeyBkb25lOiAhYWxsQ2hlY2tlZCB9KVwiPlxuICAgICAgPHVsIGNsYXNzPVwidG9kby1saXN0XCI+XG4gICAgICAgIDx0b2RvIHYtZm9yPVwidG9kbyBpbiBmaWx0ZXJlZFRvZG9zXCIgOnRvZG89XCJ0b2RvXCI+PC90b2RvPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPCEtLSBmb290ZXIgLS0+XG4gICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiIHYtc2hvdz1cInRvZG9zLmxlbmd0aFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0b2RvLWNvdW50XCI+XG4gICAgICAgIDxzdHJvbmc+e3sgcmVtYWluaW5nIH19PC9zdHJvbmc+XG4gICAgICAgIHt7IHJlbWFpbmluZyB8IHBsdXJhbGl6ZSgnaXRlbScpIH19IGxlZnRcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDx1bCBjbGFzcz1cImZpbHRlcnNcIj5cbiAgICAgICAgPGxpIHYtZm9yPVwiKHZhbCwga2V5KSBpbiBmaWx0ZXJzXCI+XG4gICAgICAgICAgPGEgOmhyZWY9XCInIy8nICsga2V5XCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgc2VsZWN0ZWQ6IHZpc2liaWxpdHkgPT09IGtleSB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cInZpc2liaWxpdHkgPSBrZXlcIj57eyBrZXkgfCBjYXBpdGFsaXplIH19PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjbGVhci1jb21wbGV0ZWRcIlxuICAgICAgICB2LXNob3c9XCJ0b2Rvcy5sZW5ndGggPiByZW1haW5pbmdcIlxuICAgICAgICBAY2xpY2s9XCJjbGVhckNvbXBsZXRlZFwiPlxuICAgICAgICBDbGVhciBjb21wbGV0ZWRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9vdGVyPlxuICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xuXHRpbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8udnVlJ1xuXG5cdGNvbnN0IGZpbHRlcnMgPSB7XG5cdFx0YWxsOiB0b2RvcyA9PiB0b2Rvcyxcblx0XHRhY3RpdmU6IHRvZG9zID0+IHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmRvbmUpLFxuXHRcdGNvbXB1dGVkOiB0b2RvcyA9PiB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmRvbmUpXG5cdH1cblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czogeyBUb2RvIH0sXG5cdFx0ZGF0YSAoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0ICB2aXNpYmlsaXR5OiAnYWxsJyxcblx0XHRcdCAgZmlsdGVyczogZmlsdGVyc1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHRvZG9zICgpIHtcblx0XHRcdCAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnRvZG9zXG5cdFx0XHR9LFxuXHRcdFx0YWxsQ2hlY2tlZCAoKSB7XG5cdFx0XHQgIHJldHVybiB0aGlzLnRvZG9zLmV2ZXJ5KHRvZG8gPT4gdG9kby5kb25lKVxuXHRcdFx0fSxcblx0XHRcdGZpbHRlcmVkVG9kb3MgKCkge1xuXHRcdFx0ICByZXR1cm4gZmlsdGVyc1t0aGlzLnZpc2liaWxpdHldKHRoaXMudG9kb3MpXG5cdFx0XHR9LFxuXHRcdFx0cmVtYWluaW5nICgpIHtcblx0XHRcdCAgcmV0dXJuIHRoaXMudG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uZG9uZSkubGVuZ3RoXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRhZGRUb2RvIChlKSB7XG5cdFx0XHQgIHZhciB0ZXh0ID0gZS50YXJnZXQudmFsdWVcblx0XHRcdCAgaWYgKHRleHQudHJpbSgpKSB7XG5cdFx0XHQgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdhZGRUb2RvJywgeyB0ZXh0IH0pXG5cdFx0XHQgIH1cblx0XHRcdCAgZS50YXJnZXQudmFsdWUgPSAnJ1xuXHRcdFx0fSxcblx0XHRcdC4uLm1hcE11dGF0aW9ucyhbXG5cdFx0XHQgICd0b2dnbGVBbGwnLFxuXHRcdFx0ICAnY2xlYXJDb21wbGV0ZWQnXG5cdFx0XHRdKVxuXHRcdH0sXG5cdFx0ZmlsdGVyczoge1xuXHRcdFx0cGx1cmFsaXplOiAobiwgdykgPT4gbiA9PT0gMSA/IHcgOiAodyArICdzJyksXG5cdFx0XHRjYXBpdGFsaXplOiBzID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RvZG9tdmMvY29tcG9uZW50cy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAzMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHRlbXBsYXRlPlxuICA8bGkgY2xhc3M9XCJ0b2RvXCIgOmNsYXNzPVwieyBjb21wbGV0ZWQ6IHRvZG8uZG9uZSwgZWRpdGluZzogZWRpdGluZyB9XCI+XG4gICAgPGRpdiBjbGFzcz1cInZpZXdcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZVwiXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIDpjaGVja2VkPVwidG9kby5kb25lXCJcbiAgICAgICAgQGNoYW5nZT1cInRvZ2dsZVRvZG8oeyB0b2RvOiB0b2RvIH0pXCI+XG4gICAgICA8bGFiZWwgdi10ZXh0PVwidG9kby50ZXh0XCIgQGRibGNsaWNrPVwiZWRpdGluZyA9IHRydWVcIj48L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlc3Ryb3lcIiBAY2xpY2s9XCJkZWxldGVUb2RvKHsgdG9kbzogdG9kbyB9KVwiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxpbnB1dCBjbGFzcz1cImVkaXRcIlxuICAgICAgdi1zaG93PVwiZWRpdGluZ1wiXG4gICAgICB2LWZvY3VzPVwiZWRpdGluZ1wiXG4gICAgICA6dmFsdWU9XCJ0b2RvLnRleHRcIlxuICAgICAgQGtleXVwLmVudGVyPVwiZG9uZUVkaXRcIlxuICAgICAgQGtleXVwLmVzYz1cImNhbmNlbEVkaXRcIlxuICAgICAgQGJsdXI9XCJkb25lRWRpdFwiPlxuICA8L2xpPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdUb2RvJyxcbiAgcHJvcHM6IFsndG9kbyddLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZWRpdGluZzogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBmb2N1cyAoZWwsIHsgdmFsdWUgfSwgeyBjb250ZXh0IH0pIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb250ZXh0LiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgZWwuZm9jdXMoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcE11dGF0aW9ucyhbXG4gICAgICAnZWRpdFRvZG8nLFxuICAgICAgJ3RvZ2dsZVRvZG8nLFxuICAgICAgJ2RlbGV0ZVRvZG8nXG4gICAgXSksXG4gICAgZG9uZUVkaXQgKGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICBjb25zdCB7IHRvZG8gfSA9IHRoaXNcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZWxldGVUb2RvKHtcbiAgICAgICAgICB0b2RvXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWRpdGluZykge1xuICAgICAgICB0aGlzLmVkaXRUb2RvKHtcbiAgICAgICAgICB0b2RvLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBjYW5jZWxFZGl0IChlKSB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IHRoaXMudG9kby50ZXh0XG4gICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90b2RvbXZjL2NvbXBvbmVudHMvVG9kby52dWVcbi8vIG1vZHVsZSBpZCA9IDMzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCI8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgc3JjPVwidG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1wiPjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblx0PHNlY3Rpb24gY2xhc3M9XCJ0b2RvYXBwXCI+XG4gICAgPCEtLSBoZWFkZXIgLS0+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGgxPnRvZG9zPC9oMT5cbiAgICAgIDxpbnB1dCBjbGFzcz1cIm5ldy10b2RvXCJcbiAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1wiXG4gICAgICAgIEBrZXl1cC5lbnRlcj1cImFkZFRvZG9cIj5cbiAgICA8L2hlYWRlcj5cbiAgICA8IS0tIG1haW4gc2VjdGlvbiAtLT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW5cIiB2LXNob3c9XCJ0b2Rvcy5sZW5ndGhcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZS1hbGxcIlxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICA6Y2hlY2tlZD1cImFsbENoZWNrZWRcIlxuICAgICAgICBAY2hhbmdlPVwidG9nZ2xlQWxsKHsgZG9uZTogIWFsbENoZWNrZWQgfSlcIj5cbiAgICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuICAgICAgICA8dG9kbyB2LWZvcj1cInRvZG8gaW4gZmlsdGVyZWRUb2Rvc1wiIDp0b2RvPVwidG9kb1wiPjwvdG9kbz5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwhLS0gZm9vdGVyIC0tPlxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIiB2LXNob3c9XCJ0b2Rvcy5sZW5ndGhcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1jb3VudFwiPlxuICAgICAgICA8c3Ryb25nPnt7IHJlbWFpbmluZyB9fTwvc3Ryb25nPlxuICAgICAgICB7eyByZW1haW5pbmcgfCBwbHVyYWxpemUoJ2l0ZW0nKSB9fSBsZWZ0XG4gICAgICA8L3NwYW4+XG4gICAgICA8dWwgY2xhc3M9XCJmaWx0ZXJzXCI+XG4gICAgICAgIDxsaSB2LWZvcj1cIih2YWwsIGtleSkgaW4gZmlsdGVyc1wiPlxuICAgICAgICAgIDxhIDpocmVmPVwiJyMvJyArIGtleVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IHNlbGVjdGVkOiB2aXNpYmlsaXR5ID09PSBrZXkgfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJ2aXNpYmlsaXR5ID0ga2V5XCI+e3sga2V5IHwgY2FwaXRhbGl6ZSB9fTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2xlYXItY29tcGxldGVkXCJcbiAgICAgICAgdi1zaG93PVwidG9kb3MubGVuZ3RoID4gcmVtYWluaW5nXCJcbiAgICAgICAgQGNsaWNrPVwiY2xlYXJDb21wbGV0ZWRcIj5cbiAgICAgICAgQ2xlYXIgY29tcGxldGVkXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwTXV0YXRpb25zIH0gZnJvbSAndnVleCdcblx0aW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvLnZ1ZSdcblxuXHRjb25zdCBmaWx0ZXJzID0ge1xuXHRcdGFsbDogdG9kb3MgPT4gdG9kb3MsXG5cdFx0YWN0aXZlOiB0b2RvcyA9PiB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5kb25lKSxcblx0XHRjb21wdXRlZDogdG9kb3MgPT4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5kb25lKVxuXHR9XG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXBvbmVudHM6IHsgVG9kbyB9LFxuXHRcdGRhdGEgKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdCAgdmlzaWJpbGl0eTogJ2FsbCcsXG5cdFx0XHQgIGZpbHRlcnM6IGZpbHRlcnNcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHR0b2RvcyAoKSB7XG5cdFx0XHQgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50b2Rvc1xuXHRcdFx0fSxcblx0XHRcdGFsbENoZWNrZWQgKCkge1xuXHRcdFx0ICByZXR1cm4gdGhpcy50b2Rvcy5ldmVyeSh0b2RvID0+IHRvZG8uZG9uZSlcblx0XHRcdH0sXG5cdFx0XHRmaWx0ZXJlZFRvZG9zICgpIHtcblx0XHRcdCAgcmV0dXJuIGZpbHRlcnNbdGhpcy52aXNpYmlsaXR5XSh0aGlzLnRvZG9zKVxuXHRcdFx0fSxcblx0XHRcdHJlbWFpbmluZyAoKSB7XG5cdFx0XHQgIHJldHVybiB0aGlzLnRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmRvbmUpLmxlbmd0aFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0YWRkVG9kbyAoZSkge1xuXHRcdFx0ICB2YXIgdGV4dCA9IGUudGFyZ2V0LnZhbHVlXG5cdFx0XHQgIGlmICh0ZXh0LnRyaW0oKSkge1xuXHRcdFx0ICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnYWRkVG9kbycsIHsgdGV4dCB9KVxuXHRcdFx0ICB9XG5cdFx0XHQgIGUudGFyZ2V0LnZhbHVlID0gJydcblx0XHRcdH0sXG5cdFx0XHQuLi5tYXBNdXRhdGlvbnMoW1xuXHRcdFx0ICAndG9nZ2xlQWxsJyxcblx0XHRcdCAgJ2NsZWFyQ29tcGxldGVkJ1xuXHRcdFx0XSlcblx0XHR9LFxuXHRcdGZpbHRlcnM6IHtcblx0XHRcdHBsdXJhbGl6ZTogKG4sIHcpID0+IG4gPT09IDEgPyB3IDogKHcgKyAncycpLFxuXHRcdFx0Y2FwaXRhbGl6ZTogcyA9PiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTNhMjIwOWQ1IS4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RvZG9tdmMvY29tcG9uZW50cy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAzNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHRlbXBsYXRlPlxuICA8bGkgY2xhc3M9XCJ0b2RvXCIgOmNsYXNzPVwieyBjb21wbGV0ZWQ6IHRvZG8uZG9uZSwgZWRpdGluZzogZWRpdGluZyB9XCI+XG4gICAgPGRpdiBjbGFzcz1cInZpZXdcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZVwiXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIDpjaGVja2VkPVwidG9kby5kb25lXCJcbiAgICAgICAgQGNoYW5nZT1cInRvZ2dsZVRvZG8oeyB0b2RvOiB0b2RvIH0pXCI+XG4gICAgICA8bGFiZWwgdi10ZXh0PVwidG9kby50ZXh0XCIgQGRibGNsaWNrPVwiZWRpdGluZyA9IHRydWVcIj48L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlc3Ryb3lcIiBAY2xpY2s9XCJkZWxldGVUb2RvKHsgdG9kbzogdG9kbyB9KVwiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxpbnB1dCBjbGFzcz1cImVkaXRcIlxuICAgICAgdi1zaG93PVwiZWRpdGluZ1wiXG4gICAgICB2LWZvY3VzPVwiZWRpdGluZ1wiXG4gICAgICA6dmFsdWU9XCJ0b2RvLnRleHRcIlxuICAgICAgQGtleXVwLmVudGVyPVwiZG9uZUVkaXRcIlxuICAgICAgQGtleXVwLmVzYz1cImNhbmNlbEVkaXRcIlxuICAgICAgQGJsdXI9XCJkb25lRWRpdFwiPlxuICA8L2xpPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdUb2RvJyxcbiAgcHJvcHM6IFsndG9kbyddLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZWRpdGluZzogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBmb2N1cyAoZWwsIHsgdmFsdWUgfSwgeyBjb250ZXh0IH0pIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb250ZXh0LiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgZWwuZm9jdXMoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcE11dGF0aW9ucyhbXG4gICAgICAnZWRpdFRvZG8nLFxuICAgICAgJ3RvZ2dsZVRvZG8nLFxuICAgICAgJ2RlbGV0ZVRvZG8nXG4gICAgXSksXG4gICAgZG9uZUVkaXQgKGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICBjb25zdCB7IHRvZG8gfSA9IHRoaXNcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZWxldGVUb2RvKHtcbiAgICAgICAgICB0b2RvXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWRpdGluZykge1xuICAgICAgICB0aGlzLmVkaXRUb2RvKHtcbiAgICAgICAgICB0b2RvLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBjYW5jZWxFZGl0IChlKSB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IHRoaXMudG9kby50ZXh0XG4gICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc5ZTg2NWMyIS4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RvZG9tdmMvY29tcG9uZW50cy9Ub2RvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmIChtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG5cdFx0Ly8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuXHRcdGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJztcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvMS4wLjAvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9jc3MtbG9hZGVyLzAuMjUuMC9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNhMjIwOWQ1IS4vaW5kZXguY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvMS4wLjAvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL2Nzcy1sb2FkZXIvMC4yNS4wL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtM2EyMjA5ZDUhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vY3NzLWxvYWRlci8wLjI1LjAvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zYTIyMDlkNSEuL2luZGV4LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvMS4wLjAvdnVlLXN0eWxlLWxvYWRlciEuL34vLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI1LjAvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNhMjIwOWQ1IS4vfi8ubnBtaW5zdGFsbC90b2RvbXZjLWFwcC1jc3MvMi4wLjYvdG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gMzQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=