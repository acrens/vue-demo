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
	
	var _Todo = __webpack_require__(339);
	
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
	
	var _App = __webpack_require__(338);
	
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

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(346)
	
	/* script */
	__vue_exports__ = __webpack_require__(138)
	
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

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(139)
	
	/* template */
	var __vue_template__ = __webpack_require__(344)
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

/***/ 341:
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

/***/ 344:
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

/***/ 345:
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

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(345)(content, {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL3RvZG9tdmMtYXBwLWNzcy8yLjAuNi90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3RvZG9tdmMvc3RvcmUvbXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL3RvZG9tdmMvY29tcG9uZW50cy9BcHAudnVlPzc1ZGYiLCJ3ZWJwYWNrOi8vLy4vdG9kb212Yy9jb21wb25lbnRzL1RvZG8udnVlPzk5YWUiLCJ3ZWJwYWNrOi8vLy4vdG9kb212Yy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdG9kb212Yy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90b2RvbXZjL3N0b3JlL3BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjUuMC9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi90b2RvbXZjL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi90b2RvbXZjL2NvbXBvbmVudHMvVG9kby52dWUiLCJ3ZWJwYWNrOi8vLy4vdG9kb212Yy9jb21wb25lbnRzL0FwcC52dWU/NTMzZiIsIndlYnBhY2s6Ly8vLi90b2RvbXZjL2NvbXBvbmVudHMvVG9kby52dWU/MDQ1MyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvMS4wLjAvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8ubnBtaW5zdGFsbC90b2RvbXZjLWFwcC1jc3MvMi4wLjYvdG9kb212Yy1hcHAtY3NzL2luZGV4LmNzcz9kMTQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFvRztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRSIsImZpbGUiOiJ0b2RvbXZjLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG5idXR0b24ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXHRmb250LXdlaWdodDogaW5oZXJpdDtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmJvZHkge1xuXHRmb250OiAxNHB4ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGxpbmUtaGVpZ2h0OiAxLjRlbTtcblx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcblx0Y29sb3I6ICM0ZDRkNGQ7XG5cdG1pbi13aWR0aDogMjMwcHg7XG5cdG1heC13aWR0aDogNTUwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuOmZvY3VzIHtcblx0b3V0bGluZTogMDtcbn1cblxuLmhpZGRlbiB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvYXBwIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0bWFyZ2luOiAxMzBweCAwIDQwcHggMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXG5cdCAgICAgICAgICAgIDAgMjVweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udG9kb2FwcCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0Y29sb3I6ICNlNmU2ZTY7XG59XG5cbi50b2RvYXBwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRjb2xvcjogI2U2ZTZlNjtcbn1cblxuLnRvZG9hcHAgaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRjb2xvcjogI2U2ZTZlNjtcbn1cblxuLnRvZG9hcHAgaDEge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTE1NXB4O1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAxMDBweDtcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XG5cdC13ZWJraXQtdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblx0LW1vei10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG4ubmV3LXRvZG8sXG4uZWRpdCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWFyZ2luOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRmb250LWZhbWlseTogaW5oZXJpdDtcblx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XG5cdGxpbmUtaGVpZ2h0OiAxLjRlbTtcblx0Ym9yZGVyOiAwO1xuXHRjb2xvcjogaW5oZXJpdDtcblx0cGFkZGluZzogNnB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuXHRib3gtc2hhZG93OiBpbnNldCAwIC0xcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLm5ldy10b2RvIHtcblx0cGFkZGluZzogMTZweCAxNnB4IDE2cHggNjBweDtcblx0Ym9yZGVyOiBub25lO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDAzKTtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDFweCByZ2JhKDAsMCwwLDAuMDMpO1xufVxuXG4ubWFpbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMjtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5cbmxhYmVsW2Zvcj0ndG9nZ2xlLWFsbCddIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZ2dsZS1hbGwge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTU1cHg7XG5cdGxlZnQ6IC0xMnB4O1xuXHR3aWR0aDogNjBweDtcblx0aGVpZ2h0OiAzNHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xufVxuXG4udG9nZ2xlLWFsbDpiZWZvcmUge1xuXHRjb250ZW50OiAn4p2vJztcblx0Zm9udC1zaXplOiAyMnB4O1xuXHRjb2xvcjogI2U2ZTZlNjtcblx0cGFkZGluZzogMTBweCAyN3B4IDEwcHggMjdweDtcbn1cblxuLnRvZ2dsZS1hbGw6Y2hlY2tlZDpiZWZvcmUge1xuXHRjb2xvcjogIzczNzM3Mztcbn1cblxuLnRvZG8tbGlzdCB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRvZG8tbGlzdCBsaSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcbn1cblxuLnRvZG8tbGlzdCBsaTpsYXN0LWNoaWxkIHtcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIHtcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0cGFkZGluZzogMDtcbn1cblxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC5lZGl0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiA1MDZweDtcblx0cGFkZGluZzogMTJweCAxNnB4O1xuXHRtYXJnaW46IDAgMCAwIDQzcHg7XG59XG5cbi50b2RvLWxpc3QgbGkuZWRpdGluZyAudmlldyB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDQwcHg7XG5cdC8qIGF1dG8sIHNpbmNlIG5vbi1XZWJLaXQgYnJvd3NlcnMgZG9lc24ndCBzdXBwb3J0IGlucHV0IHN0eWxpbmcgKi9cblx0aGVpZ2h0OiBhdXRvO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0Ym90dG9tOiAwO1xuXHRtYXJnaW46IGF1dG8gMDtcblx0Ym9yZGVyOiBub25lOyAvKiBNb2JpbGUgU2FmYXJpICovXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0YXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlOmFmdGVyIHtcblx0Y29udGVudDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiLTEwIC0xOCAxMDAgMTM1XCI+PGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI1MFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2VkZWRlZFwiIHN0cm9rZS13aWR0aD1cIjNcIi8+PC9zdmc+Jyk7XG59XG5cbi50b2RvLWxpc3QgbGkgLnRvZ2dsZTpjaGVja2VkOmFmdGVyIHtcblx0Y29udGVudDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiLTEwIC0xOCAxMDAgMTM1XCI+PGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI1MFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2JkZGFkNVwiIHN0cm9rZS13aWR0aD1cIjNcIi8+PHBhdGggZmlsbD1cIiM1ZGMyYWZcIiBkPVwiTTcyIDI1TDQyIDcxIDI3IDU2bC00IDQgMjAgMjAgMzQtNTJ6XCIvPjwvc3ZnPicpO1xufVxuXG4udG9kby1saXN0IGxpIGxhYmVsIHtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRwYWRkaW5nOiAxNXB4IDYwcHggMTVweCAxNXB4O1xuXHRtYXJnaW4tbGVmdDogNDVweDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XG59XG5cbi50b2RvLWxpc3QgbGkuY29tcGxldGVkIGxhYmVsIHtcblx0Y29sb3I6ICNkOWQ5ZDk7XG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udG9kby1saXN0IGxpIC5kZXN0cm95IHtcblx0ZGlzcGxheTogbm9uZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAxMHB4O1xuXHRib3R0b206IDA7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdG1hcmdpbjogYXV0byAwO1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGNvbG9yOiAjY2M5YTlhO1xuXHRtYXJnaW4tYm90dG9tOiAxMXB4O1xuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xufVxuXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmhvdmVyIHtcblx0Y29sb3I6ICNhZjViNWU7XG59XG5cbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6YWZ0ZXIge1xuXHRjb250ZW50OiAnw5cnO1xufVxuXG4udG9kby1saXN0IGxpOmhvdmVyIC5kZXN0cm95IHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi50b2RvLWxpc3QgbGkgLmVkaXQge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmc6bGFzdC1jaGlsZCB7XG5cdG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5mb290ZXIge1xuXHRjb2xvcjogIzc3Nztcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5cbi5mb290ZXI6YmVmb3JlIHtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcblx0aGVpZ2h0OiA1MHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHQgICAgICAgICAgICAwIDhweCAwIC0zcHggI2Y2ZjZmNixcblx0ICAgICAgICAgICAgMCA5cHggMXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHQgICAgICAgICAgICAwIDE2cHggMCAtNnB4ICNmNmY2ZjYsXG5cdCAgICAgICAgICAgIDAgMTdweCAycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi50b2RvLWNvdW50IHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b2RvLWNvdW50IHN0cm9uZyB7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5maWx0ZXJzIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAwO1xuXHRsZWZ0OiAwO1xufVxuXG4uZmlsdGVycyBsaSB7XG5cdGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmZpbHRlcnMgbGkgYSB7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRtYXJnaW46IDNweDtcblx0cGFkZGluZzogM3B4IDdweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uZmlsdGVycyBsaSBhOmhvdmVyIHtcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjEpO1xufVxuXG4uZmlsdGVycyBsaSBhLnNlbGVjdGVkIHtcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjIpO1xufVxuXG4uY2xlYXItY29tcGxldGVkLFxuaHRtbCAuY2xlYXItY29tcGxldGVkOmFjdGl2ZSB7XG5cdGZsb2F0OiByaWdodDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmluZm8ge1xuXHRtYXJnaW46IDY1cHggYXV0byAwO1xuXHRjb2xvcjogI2JmYmZiZjtcblx0Zm9udC1zaXplOiAxMHB4O1xuXHR0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm8gcCB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uaW5mbyBhIHtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmluZm8gYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKlxuXHRIYWNrIHRvIHJlbW92ZSBiYWNrZ3JvdW5kIGZyb20gTW9iaWxlIFNhZmFyaS5cblx0Q2FuJ3QgdXNlIGl0IGdsb2JhbGx5IHNpbmNlIGl0IGRlc3Ryb3lzIGNoZWNrYm94ZXMgaW4gRmlyZWZveFxuKi9cbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86MCkge1xuXHQudG9nZ2xlLWFsbCxcblx0LnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHR9XG5cblx0LnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcblx0XHRoZWlnaHQ6IDQwcHg7XG5cdH1cblxuXHQudG9nZ2xlLWFsbCB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuXHRcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0XHRhcHBlYXJhbmNlOiBub25lO1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xuXHQuZm9vdGVyIHtcblx0XHRoZWlnaHQ6IDUwcHg7XG5cdH1cblxuXHQuZmlsdGVycyB7XG5cdFx0Ym90dG9tOiAxMHB4O1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI1LjAvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+Ly5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNhMjIwOWQ1IS4vfi8ubnBtaW5zdGFsbC90b2RvbXZjLWFwcC1jc3MvMi4wLjYvdG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8g5rWP6KeI5Zmo5a2Y5YKo5pWw5o2uIGtleVxuZXhwb3J0IGNvbnN0IFNUT1JBR0VfS0VZID0gJ3RvZG9zLXZ1ZWpzJ1xuaWYobmFnaWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdQaGFudG9tSlMnKSA+IC0xKSB7XG5cdHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn1cblxuLy8g57uE5Lu254q25oCBXG5leHBvcnQgY29uc3Qgc3RhdGUgPSB7XG5cdHRvZG9zOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSkgfHwgJ1tdJylcbn07XG5cbi8vIG11dGF0aW9ucyDlr7nosaFcbmV4cG9ydCBjb25zdCBtdXRhdGlvbnMgPSB7XG5cdGFkZFRvZG8gKHN0YXRlLCB7IHRleHQgfSkge1xuXHRcdHN0YXRlLnRvZG9zLnB1c2goe1xuXHRcdFx0dGV4dCxcblx0XHRcdGRvbmU6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cblx0ZGVsZXRlVG9kbyAoc3RhdGUsIHsgdG9kbyB9KSB7XG5cdFx0c3RhdGUudG9kb3Muc3BsaWNlKHN0YXRlLnRvZG9zLmluZGV4T2YodG9kbyksIDEpO1xuXHR9LFxuXG5cdHRvZ2dsZVRvZG8gKHN0YXRlLCB7IHRvZG8gfSkge1xuXHRcdHRvZG8uZG9uZSA9ICF0b2RvLmRvbmU7XG5cdH0sXG5cblx0ZWRpdFRvZG8gKHN0YXRlLCB7IHRvZG8sIHZhbHVlIH0pIHtcblx0XHR0b2RvLnRleHQgPSB2YWx1ZTtcblx0fSxcblxuXHR0b2dnbGVBbGwgKHN0YXRlLCB7IGRvbmUgfSkge1xuXHRcdHN0YXRlLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcblx0XHRcdHRvZG8uZG9uZSA9IGRvbmU7XG5cdFx0fSk7XG5cdH0sXG5cblx0Y2xlYXJDb21wbGV0ZWQgKHN0YXRlKSB7XG5cdFx0c3RhdGUudG9kb3MgPSBzdGF0ZS50b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5kb25lKTtcblx0fVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RvZG9tdmMvc3RvcmUvbXV0YXRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCI8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgc3JjPVwidG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1wiPjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblx0PHNlY3Rpb24gY2xhc3M9XCJ0b2RvYXBwXCI+XG4gICAgPCEtLSBoZWFkZXIgLS0+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGgxPnRvZG9zPC9oMT5cbiAgICAgIDxpbnB1dCBjbGFzcz1cIm5ldy10b2RvXCJcbiAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1wiXG4gICAgICAgIEBrZXl1cC5lbnRlcj1cImFkZFRvZG9cIj5cbiAgICA8L2hlYWRlcj5cbiAgICA8IS0tIG1haW4gc2VjdGlvbiAtLT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW5cIiB2LXNob3c9XCJ0b2Rvcy5sZW5ndGhcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZS1hbGxcIlxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICA6Y2hlY2tlZD1cImFsbENoZWNrZWRcIlxuICAgICAgICBAY2hhbmdlPVwidG9nZ2xlQWxsKHsgZG9uZTogIWFsbENoZWNrZWQgfSlcIj5cbiAgICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuICAgICAgICA8dG9kbyB2LWZvcj1cInRvZG8gaW4gZmlsdGVyZWRUb2Rvc1wiIDp0b2RvPVwidG9kb1wiPjwvdG9kbz5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwhLS0gZm9vdGVyIC0tPlxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIiB2LXNob3c9XCJ0b2Rvcy5sZW5ndGhcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1jb3VudFwiPlxuICAgICAgICA8c3Ryb25nPnt7IHJlbWFpbmluZyB9fTwvc3Ryb25nPlxuICAgICAgICB7eyByZW1haW5pbmcgfCBwbHVyYWxpemUoJ2l0ZW0nKSB9fSBsZWZ0XG4gICAgICA8L3NwYW4+XG4gICAgICA8dWwgY2xhc3M9XCJmaWx0ZXJzXCI+XG4gICAgICAgIDxsaSB2LWZvcj1cIih2YWwsIGtleSkgaW4gZmlsdGVyc1wiPlxuICAgICAgICAgIDxhIDpocmVmPVwiJyMvJyArIGtleVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IHNlbGVjdGVkOiB2aXNpYmlsaXR5ID09PSBrZXkgfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJ2aXNpYmlsaXR5ID0ga2V5XCI+e3sga2V5IHwgY2FwaXRhbGl6ZSB9fTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2xlYXItY29tcGxldGVkXCJcbiAgICAgICAgdi1zaG93PVwidG9kb3MubGVuZ3RoID4gcmVtYWluaW5nXCJcbiAgICAgICAgQGNsaWNrPVwiY2xlYXJDb21wbGV0ZWRcIj5cbiAgICAgICAgQ2xlYXIgY29tcGxldGVkXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwTXV0YXRpb25zIH0gZnJvbSAndnVleCdcblx0aW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvLnZ1ZSdcblxuXHRjb25zdCBmaWx0ZXJzID0ge1xuXHRcdGFsbDogdG9kb3MgPT4gdG9kb3MsXG5cdFx0YWN0aXZlOiB0b2RvcyA9PiB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5kb25lKSxcblx0XHRjb21wdXRlZDogdG9kb3MgPT4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5kb25lKVxuXHR9XG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXBvbmVudHM6IHsgVG9kbyB9LFxuXHRcdGRhdGEgKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdCAgdmlzaWJpbGl0eTogJ2FsbCcsXG5cdFx0XHQgIGZpbHRlcnM6IGZpbHRlcnNcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHR0b2RvcyAoKSB7XG5cdFx0XHQgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50b2Rvc1xuXHRcdFx0fSxcblx0XHRcdGFsbENoZWNrZWQgKCkge1xuXHRcdFx0ICByZXR1cm4gdGhpcy50b2Rvcy5ldmVyeSh0b2RvID0+IHRvZG8uZG9uZSlcblx0XHRcdH0sXG5cdFx0XHRmaWx0ZXJlZFRvZG9zICgpIHtcblx0XHRcdCAgcmV0dXJuIGZpbHRlcnNbdGhpcy52aXNpYmlsaXR5XSh0aGlzLnRvZG9zKVxuXHRcdFx0fSxcblx0XHRcdHJlbWFpbmluZyAoKSB7XG5cdFx0XHQgIHJldHVybiB0aGlzLnRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmRvbmUpLmxlbmd0aFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0YWRkVG9kbyAoZSkge1xuXHRcdFx0ICB2YXIgdGV4dCA9IGUudGFyZ2V0LnZhbHVlXG5cdFx0XHQgIGlmICh0ZXh0LnRyaW0oKSkge1xuXHRcdFx0ICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnYWRkVG9kbycsIHsgdGV4dCB9KVxuXHRcdFx0ICB9XG5cdFx0XHQgIGUudGFyZ2V0LnZhbHVlID0gJydcblx0XHRcdH0sXG5cdFx0XHQuLi5tYXBNdXRhdGlvbnMoW1xuXHRcdFx0ICAndG9nZ2xlQWxsJyxcblx0XHRcdCAgJ2NsZWFyQ29tcGxldGVkJ1xuXHRcdFx0XSlcblx0XHR9LFxuXHRcdGZpbHRlcnM6IHtcblx0XHRcdHBsdXJhbGl6ZTogKG4sIHcpID0+IG4gPT09IDEgPyB3IDogKHcgKyAncycpLFxuXHRcdFx0Y2FwaXRhbGl6ZTogcyA9PiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci82LjIuOC9iYWJlbC1sb2FkZXIvbGliIS4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b2RvbXZjL2NvbXBvbmVudHMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwidG9kb1wiIDpjbGFzcz1cInsgY29tcGxldGVkOiB0b2RvLmRvbmUsIGVkaXRpbmc6IGVkaXRpbmcgfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGVcIlxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICA6Y2hlY2tlZD1cInRvZG8uZG9uZVwiXG4gICAgICAgIEBjaGFuZ2U9XCJ0b2dnbGVUb2RvKHsgdG9kbzogdG9kbyB9KVwiPlxuICAgICAgPGxhYmVsIHYtdGV4dD1cInRvZG8udGV4dFwiIEBkYmxjbGljaz1cImVkaXRpbmcgPSB0cnVlXCI+PC9sYWJlbD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJkZXN0cm95XCIgQGNsaWNrPVwiZGVsZXRlVG9kbyh7IHRvZG86IHRvZG8gfSlcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8aW5wdXQgY2xhc3M9XCJlZGl0XCJcbiAgICAgIHYtc2hvdz1cImVkaXRpbmdcIlxuICAgICAgdi1mb2N1cz1cImVkaXRpbmdcIlxuICAgICAgOnZhbHVlPVwidG9kby50ZXh0XCJcbiAgICAgIEBrZXl1cC5lbnRlcj1cImRvbmVFZGl0XCJcbiAgICAgIEBrZXl1cC5lc2M9XCJjYW5jZWxFZGl0XCJcbiAgICAgIEBibHVyPVwiZG9uZUVkaXRcIj5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVG9kbycsXG4gIHByb3BzOiBbJ3RvZG8nXSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRpbmc6IGZhbHNlXG4gICAgfVxuICB9LFxuICBkaXJlY3RpdmVzOiB7XG4gICAgZm9jdXMgKGVsLCB7IHZhbHVlIH0sIHsgY29udGV4dCB9KSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29udGV4dC4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGVsLmZvY3VzKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBNdXRhdGlvbnMoW1xuICAgICAgJ2VkaXRUb2RvJyxcbiAgICAgICd0b2dnbGVUb2RvJyxcbiAgICAgICdkZWxldGVUb2RvJ1xuICAgIF0pLFxuICAgIGRvbmVFZGl0IChlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgY29uc3QgeyB0b2RvIH0gPSB0aGlzXG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlVG9kbyh7XG4gICAgICAgICAgdG9kb1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmVkaXRpbmcpIHtcbiAgICAgICAgdGhpcy5lZGl0VG9kbyh7XG4gICAgICAgICAgdG9kbyxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgY2FuY2VsRWRpdCAoZSkge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSB0aGlzLnRvZG8udGV4dFxuICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2VcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNi4yLjgvYmFiZWwtbG9hZGVyL2xpYiEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG9kb212Yy9jb21wb25lbnRzL1RvZG8udnVlXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyoqXG4gKiDlupTnlKjlhaXlj6Pmlofku7ZcbiAqL1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAudnVlJ1xuXG5uZXcgVnVlKHtcblx0ZWw6ICcjYXBwJyxcblx0c3RvcmUsXG5cdHJlbmRlcjogaCA9PiBoKEFwcClcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdG9kb212Yy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgeyBzdGF0ZSwgbXV0YXRpb25zIH0gZnJvbSAnLi9tdXRhdGlvbnMnXG5pbXBvcnQgcGx1Z2lucyBmcm9tICcuL3BsdWdpbnMnXG5cblZ1ZS51c2UoVnVleClcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuXHRzdGF0ZSxcblx0bXV0YXRpb25zLFxuXHRwbHVnaW5zXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RvZG9tdmMvc3RvcmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcbiAqIOWIm+W7uuWtmOWCqOaPkuS7tlxuICovXG5pbXBvcnQgeyBTVE9SQUdFX0tFWSB9IGZyb20gJy4vbXV0YXRpb25zJ1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICcuLi8uLi9zcmMvcGx1Z2lucy9sb2dnZXInXG5cbmNvbnN0IGxvY2FsU3RvcmFnZVBsdWdpbiA9IHN0b3JlID0+IHtcblx0c3RvcmUuc3Vic2NyaWJlKChtdXRhdGlvbiwgeyB0b2RvcyB9KSA9PiB7XG5cdFx0d2luZG93LmxvY2FsU3RvcmFnZVBsdWdpbi5zZXRJdGVtKFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuXHR9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IFtjcmVhdGVMb2dnZXIoKSwgbG9jYWxTdG9yYWdlUGx1Z2luXTogW2xvY2FsU3RvcmFnZVBsdWdpbl1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RvZG9tdmMvc3RvcmUvcGx1Z2lucy5qc1xuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI1LjAvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDMyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCI8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgc3JjPVwidG9kb212Yy1hcHAtY3NzL2luZGV4LmNzc1wiPjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblx0PHNlY3Rpb24gY2xhc3M9XCJ0b2RvYXBwXCI+XG4gICAgPCEtLSBoZWFkZXIgLS0+XG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGgxPnRvZG9zPC9oMT5cbiAgICAgIDxpbnB1dCBjbGFzcz1cIm5ldy10b2RvXCJcbiAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1wiXG4gICAgICAgIEBrZXl1cC5lbnRlcj1cImFkZFRvZG9cIj5cbiAgICA8L2hlYWRlcj5cbiAgICA8IS0tIG1haW4gc2VjdGlvbiAtLT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW5cIiB2LXNob3c9XCJ0b2Rvcy5sZW5ndGhcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZS1hbGxcIlxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICA6Y2hlY2tlZD1cImFsbENoZWNrZWRcIlxuICAgICAgICBAY2hhbmdlPVwidG9nZ2xlQWxsKHsgZG9uZTogIWFsbENoZWNrZWQgfSlcIj5cbiAgICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuICAgICAgICA8dG9kbyB2LWZvcj1cInRvZG8gaW4gZmlsdGVyZWRUb2Rvc1wiIDp0b2RvPVwidG9kb1wiPjwvdG9kbz5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwhLS0gZm9vdGVyIC0tPlxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIiB2LXNob3c9XCJ0b2Rvcy5sZW5ndGhcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1jb3VudFwiPlxuICAgICAgICA8c3Ryb25nPnt7IHJlbWFpbmluZyB9fTwvc3Ryb25nPlxuICAgICAgICB7eyByZW1haW5pbmcgfCBwbHVyYWxpemUoJ2l0ZW0nKSB9fSBsZWZ0XG4gICAgICA8L3NwYW4+XG4gICAgICA8dWwgY2xhc3M9XCJmaWx0ZXJzXCI+XG4gICAgICAgIDxsaSB2LWZvcj1cIih2YWwsIGtleSkgaW4gZmlsdGVyc1wiPlxuICAgICAgICAgIDxhIDpocmVmPVwiJyMvJyArIGtleVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IHNlbGVjdGVkOiB2aXNpYmlsaXR5ID09PSBrZXkgfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJ2aXNpYmlsaXR5ID0ga2V5XCI+e3sga2V5IHwgY2FwaXRhbGl6ZSB9fTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2xlYXItY29tcGxldGVkXCJcbiAgICAgICAgdi1zaG93PVwidG9kb3MubGVuZ3RoID4gcmVtYWluaW5nXCJcbiAgICAgICAgQGNsaWNrPVwiY2xlYXJDb21wbGV0ZWRcIj5cbiAgICAgICAgQ2xlYXIgY29tcGxldGVkXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwTXV0YXRpb25zIH0gZnJvbSAndnVleCdcblx0aW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvLnZ1ZSdcblxuXHRjb25zdCBmaWx0ZXJzID0ge1xuXHRcdGFsbDogdG9kb3MgPT4gdG9kb3MsXG5cdFx0YWN0aXZlOiB0b2RvcyA9PiB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5kb25lKSxcblx0XHRjb21wdXRlZDogdG9kb3MgPT4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5kb25lKVxuXHR9XG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXBvbmVudHM6IHsgVG9kbyB9LFxuXHRcdGRhdGEgKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdCAgdmlzaWJpbGl0eTogJ2FsbCcsXG5cdFx0XHQgIGZpbHRlcnM6IGZpbHRlcnNcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHR0b2RvcyAoKSB7XG5cdFx0XHQgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS50b2Rvc1xuXHRcdFx0fSxcblx0XHRcdGFsbENoZWNrZWQgKCkge1xuXHRcdFx0ICByZXR1cm4gdGhpcy50b2Rvcy5ldmVyeSh0b2RvID0+IHRvZG8uZG9uZSlcblx0XHRcdH0sXG5cdFx0XHRmaWx0ZXJlZFRvZG9zICgpIHtcblx0XHRcdCAgcmV0dXJuIGZpbHRlcnNbdGhpcy52aXNpYmlsaXR5XSh0aGlzLnRvZG9zKVxuXHRcdFx0fSxcblx0XHRcdHJlbWFpbmluZyAoKSB7XG5cdFx0XHQgIHJldHVybiB0aGlzLnRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmRvbmUpLmxlbmd0aFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0YWRkVG9kbyAoZSkge1xuXHRcdFx0ICB2YXIgdGV4dCA9IGUudGFyZ2V0LnZhbHVlXG5cdFx0XHQgIGlmICh0ZXh0LnRyaW0oKSkge1xuXHRcdFx0ICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnYWRkVG9kbycsIHsgdGV4dCB9KVxuXHRcdFx0ICB9XG5cdFx0XHQgIGUudGFyZ2V0LnZhbHVlID0gJydcblx0XHRcdH0sXG5cdFx0XHQuLi5tYXBNdXRhdGlvbnMoW1xuXHRcdFx0ICAndG9nZ2xlQWxsJyxcblx0XHRcdCAgJ2NsZWFyQ29tcGxldGVkJ1xuXHRcdFx0XSlcblx0XHR9LFxuXHRcdGZpbHRlcnM6IHtcblx0XHRcdHBsdXJhbGl6ZTogKG4sIHcpID0+IG4gPT09IDEgPyB3IDogKHcgKyAncycpLFxuXHRcdFx0Y2FwaXRhbGl6ZTogcyA9PiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90b2RvbXZjL2NvbXBvbmVudHMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwidG9kb1wiIDpjbGFzcz1cInsgY29tcGxldGVkOiB0b2RvLmRvbmUsIGVkaXRpbmc6IGVkaXRpbmcgfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGVcIlxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICA6Y2hlY2tlZD1cInRvZG8uZG9uZVwiXG4gICAgICAgIEBjaGFuZ2U9XCJ0b2dnbGVUb2RvKHsgdG9kbzogdG9kbyB9KVwiPlxuICAgICAgPGxhYmVsIHYtdGV4dD1cInRvZG8udGV4dFwiIEBkYmxjbGljaz1cImVkaXRpbmcgPSB0cnVlXCI+PC9sYWJlbD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJkZXN0cm95XCIgQGNsaWNrPVwiZGVsZXRlVG9kbyh7IHRvZG86IHRvZG8gfSlcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8aW5wdXQgY2xhc3M9XCJlZGl0XCJcbiAgICAgIHYtc2hvdz1cImVkaXRpbmdcIlxuICAgICAgdi1mb2N1cz1cImVkaXRpbmdcIlxuICAgICAgOnZhbHVlPVwidG9kby50ZXh0XCJcbiAgICAgIEBrZXl1cC5lbnRlcj1cImRvbmVFZGl0XCJcbiAgICAgIEBrZXl1cC5lc2M9XCJjYW5jZWxFZGl0XCJcbiAgICAgIEBibHVyPVwiZG9uZUVkaXRcIj5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVG9kbycsXG4gIHByb3BzOiBbJ3RvZG8nXSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRpbmc6IGZhbHNlXG4gICAgfVxuICB9LFxuICBkaXJlY3RpdmVzOiB7XG4gICAgZm9jdXMgKGVsLCB7IHZhbHVlIH0sIHsgY29udGV4dCB9KSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29udGV4dC4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGVsLmZvY3VzKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBNdXRhdGlvbnMoW1xuICAgICAgJ2VkaXRUb2RvJyxcbiAgICAgICd0b2dnbGVUb2RvJyxcbiAgICAgICdkZWxldGVUb2RvJ1xuICAgIF0pLFxuICAgIGRvbmVFZGl0IChlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgY29uc3QgeyB0b2RvIH0gPSB0aGlzXG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlVG9kbyh7XG4gICAgICAgICAgdG9kb1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmVkaXRpbmcpIHtcbiAgICAgICAgdGhpcy5lZGl0VG9kbyh7XG4gICAgICAgICAgdG9kbyxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgY2FuY2VsRWRpdCAoZSkge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSB0aGlzLnRvZG8udGV4dFxuICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2VcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdG9kb212Yy9jb21wb25lbnRzL1RvZG8udnVlXG4vLyBtb2R1bGUgaWQgPSAzMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIHNyYz1cInRvZG9tdmMtYXBwLWNzcy9pbmRleC5jc3NcIj48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG5cdDxzZWN0aW9uIGNsYXNzPVwidG9kb2FwcFwiPlxuICAgIDwhLS0gaGVhZGVyIC0tPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJuZXctdG9kb1wiXG4gICAgICAgIGF1dG9mb2N1c1xuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIlxuICAgICAgICBAa2V5dXAuZW50ZXI9XCJhZGRUb2RvXCI+XG4gICAgPC9oZWFkZXI+XG4gICAgPCEtLSBtYWluIHNlY3Rpb24gLS0+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJtYWluXCIgdi1zaG93PVwidG9kb3MubGVuZ3RoXCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGUtYWxsXCJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgOmNoZWNrZWQ9XCJhbGxDaGVja2VkXCJcbiAgICAgICAgQGNoYW5nZT1cInRvZ2dsZUFsbCh7IGRvbmU6ICFhbGxDaGVja2VkIH0pXCI+XG4gICAgICA8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cbiAgICAgICAgPHRvZG8gdi1mb3I9XCJ0b2RvIGluIGZpbHRlcmVkVG9kb3NcIiA6dG9kbz1cInRvZG9cIj48L3RvZG8+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8IS0tIGZvb3RlciAtLT5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCIgdi1zaG93PVwidG9kb3MubGVuZ3RoXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY291bnRcIj5cbiAgICAgICAgPHN0cm9uZz57eyByZW1haW5pbmcgfX08L3N0cm9uZz5cbiAgICAgICAge3sgcmVtYWluaW5nIHwgcGx1cmFsaXplKCdpdGVtJykgfX0gbGVmdFxuICAgICAgPC9zcGFuPlxuICAgICAgPHVsIGNsYXNzPVwiZmlsdGVyc1wiPlxuICAgICAgICA8bGkgdi1mb3I9XCIodmFsLCBrZXkpIGluIGZpbHRlcnNcIj5cbiAgICAgICAgICA8YSA6aHJlZj1cIicjLycgKyBrZXlcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyBzZWxlY3RlZDogdmlzaWJpbGl0eSA9PT0ga2V5IH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwidmlzaWJpbGl0eSA9IGtleVwiPnt7IGtleSB8IGNhcGl0YWxpemUgfX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsZWFyLWNvbXBsZXRlZFwiXG4gICAgICAgIHYtc2hvdz1cInRvZG9zLmxlbmd0aCA+IHJlbWFpbmluZ1wiXG4gICAgICAgIEBjbGljaz1cImNsZWFyQ29tcGxldGVkXCI+XG4gICAgICAgIENsZWFyIGNvbXBsZXRlZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb290ZXI+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cdGltcG9ydCBUb2RvIGZyb20gJy4vVG9kby52dWUnXG5cblx0Y29uc3QgZmlsdGVycyA9IHtcblx0XHRhbGw6IHRvZG9zID0+IHRvZG9zLFxuXHRcdGFjdGl2ZTogdG9kb3MgPT4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uZG9uZSksXG5cdFx0Y29tcHV0ZWQ6IHRvZG9zID0+IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uZG9uZSlcblx0fVxuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7IFRvZG8gfSxcblx0XHRkYXRhICgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHQgIHZpc2liaWxpdHk6ICdhbGwnLFxuXHRcdFx0ICBmaWx0ZXJzOiBmaWx0ZXJzXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0dG9kb3MgKCkge1xuXHRcdFx0ICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudG9kb3Ncblx0XHRcdH0sXG5cdFx0XHRhbGxDaGVja2VkICgpIHtcblx0XHRcdCAgcmV0dXJuIHRoaXMudG9kb3MuZXZlcnkodG9kbyA9PiB0b2RvLmRvbmUpXG5cdFx0XHR9LFxuXHRcdFx0ZmlsdGVyZWRUb2RvcyAoKSB7XG5cdFx0XHQgIHJldHVybiBmaWx0ZXJzW3RoaXMudmlzaWJpbGl0eV0odGhpcy50b2Rvcylcblx0XHRcdH0sXG5cdFx0XHRyZW1haW5pbmcgKCkge1xuXHRcdFx0ICByZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5kb25lKS5sZW5ndGhcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGFkZFRvZG8gKGUpIHtcblx0XHRcdCAgdmFyIHRleHQgPSBlLnRhcmdldC52YWx1ZVxuXHRcdFx0ICBpZiAodGV4dC50cmltKCkpIHtcblx0XHRcdCAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2FkZFRvZG8nLCB7IHRleHQgfSlcblx0XHRcdCAgfVxuXHRcdFx0ICBlLnRhcmdldC52YWx1ZSA9ICcnXG5cdFx0XHR9LFxuXHRcdFx0Li4ubWFwTXV0YXRpb25zKFtcblx0XHRcdCAgJ3RvZ2dsZUFsbCcsXG5cdFx0XHQgICdjbGVhckNvbXBsZXRlZCdcblx0XHRcdF0pXG5cdFx0fSxcblx0XHRmaWx0ZXJzOiB7XG5cdFx0XHRwbHVyYWxpemU6IChuLCB3KSA9PiBuID09PSAxID8gdyA6ICh3ICsgJ3MnKSxcblx0XHRcdGNhcGl0YWxpemU6IHMgPT4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zYTIyMDlkNSEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b2RvbXZjL2NvbXBvbmVudHMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwidG9kb1wiIDpjbGFzcz1cInsgY29tcGxldGVkOiB0b2RvLmRvbmUsIGVkaXRpbmc6IGVkaXRpbmcgfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGVcIlxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICA6Y2hlY2tlZD1cInRvZG8uZG9uZVwiXG4gICAgICAgIEBjaGFuZ2U9XCJ0b2dnbGVUb2RvKHsgdG9kbzogdG9kbyB9KVwiPlxuICAgICAgPGxhYmVsIHYtdGV4dD1cInRvZG8udGV4dFwiIEBkYmxjbGljaz1cImVkaXRpbmcgPSB0cnVlXCI+PC9sYWJlbD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJkZXN0cm95XCIgQGNsaWNrPVwiZGVsZXRlVG9kbyh7IHRvZG86IHRvZG8gfSlcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8aW5wdXQgY2xhc3M9XCJlZGl0XCJcbiAgICAgIHYtc2hvdz1cImVkaXRpbmdcIlxuICAgICAgdi1mb2N1cz1cImVkaXRpbmdcIlxuICAgICAgOnZhbHVlPVwidG9kby50ZXh0XCJcbiAgICAgIEBrZXl1cC5lbnRlcj1cImRvbmVFZGl0XCJcbiAgICAgIEBrZXl1cC5lc2M9XCJjYW5jZWxFZGl0XCJcbiAgICAgIEBibHVyPVwiZG9uZUVkaXRcIj5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVG9kbycsXG4gIHByb3BzOiBbJ3RvZG8nXSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRpbmc6IGZhbHNlXG4gICAgfVxuICB9LFxuICBkaXJlY3RpdmVzOiB7XG4gICAgZm9jdXMgKGVsLCB7IHZhbHVlIH0sIHsgY29udGV4dCB9KSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29udGV4dC4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGVsLmZvY3VzKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBNdXRhdGlvbnMoW1xuICAgICAgJ2VkaXRUb2RvJyxcbiAgICAgICd0b2dnbGVUb2RvJyxcbiAgICAgICdkZWxldGVUb2RvJ1xuICAgIF0pLFxuICAgIGRvbmVFZGl0IChlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgY29uc3QgeyB0b2RvIH0gPSB0aGlzXG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlVG9kbyh7XG4gICAgICAgICAgdG9kb1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmVkaXRpbmcpIHtcbiAgICAgICAgdGhpcy5lZGl0VG9kbyh7XG4gICAgICAgICAgdG9kbyxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgY2FuY2VsRWRpdCAoZSkge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSB0aGlzLnRvZG8udGV4dFxuICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2VcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03OWU4NjVjMiEuL34vLm5wbWluc3RhbGwvdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b2RvbXZjL2NvbXBvbmVudHMvVG9kby52dWVcbi8vIG1vZHVsZSBpZCA9IDM0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXHR9KSxcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdH0pLFxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZiAobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuXHRcdC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcblx0XHRjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLyc7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzEuMC4wL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vY3NzLWxvYWRlci8wLjI1LjAvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zYTIyMDlkNSEuL2luZGV4LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi92dWUtc3R5bGUtbG9hZGVyLzEuMC4wL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9jc3MtbG9hZGVyLzAuMjUuMC9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvOS45LjUvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNhMjIwOWQ1IS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL2Nzcy1sb2FkZXIvMC4yNS4wL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vdnVlLWxvYWRlci85LjkuNS92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtM2EyMjA5ZDUhLi9pbmRleC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzEuMC4wL3Z1ZS1zdHlsZS1sb2FkZXIhLi9+Ly5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yNS4wL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzkuOS41L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zYTIyMDlkNSEuL34vLm5wbWluc3RhbGwvdG9kb212Yy1hcHAtY3NzLzIuMC42L3RvZG9tdmMtYXBwLWNzcy9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9