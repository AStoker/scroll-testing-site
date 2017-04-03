define('app',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _desc, _value, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.computedFrom)('query', '_activeArray'), (_class = function () {
    function App() {
      _classCallCheck(this, App);

      this._items = [];
      this.primaryItems = [];
      this.secondaryItems = [];
      this.query = '';
      this._activeArray = 'a';

      for (var i = 0; i < 1000; i++) {
        this.primaryItems.push('item a: ' + i);
      }

      for (var _i = 0; _i < 100; _i++) {
        this.secondaryItems.push('item b: ' + _i);
      }

      this.items = this.primaryItems;
    }

    App.prototype.chooseArrayA = function chooseArrayA() {
      this.items = this.primaryItems;
      this._activeArray = 'a';
    };

    App.prototype.chooseArrayB = function chooseArrayB() {
      this.items = this.secondaryItems;
      this._activeArray = 'b';
    };

    App.prototype.getMore = function getMore() {
      console.log('called');
    };

    _createClass(App, [{
      key: 'items',
      get: function get() {
        var _this = this;

        return this._items.filter(function (i) {
          return i.toLowerCase().indexOf(_this.query.toLowerCase()) >= 0 || _this.query.length === 0;
        });
      },
      set: function set(val) {
        this._items = val;
      }
    }]);

    return App;
  }(), (_applyDecoratedDescriptor(_class.prototype, 'items', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'items'), _class.prototype)), _class));
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-ui-virtualization');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><style>.scroll-container{border:1px solid #000;width:200px}.scroll-container li,.scroll-container tr,.scroll-container>div{height:20px;list-style:none;background-color:#00f}.scroll-container li:nth-child(odd),.scroll-container tr:nth-child(odd),.scroll-container>div:nth-child(odd){background-color:red}</style><button click.trigger=\"chooseArrayA()\">Array A</button> <button click.trigger=\"chooseArrayB()\">Array B</button><br><input value.bind=\"query\" placeholder=\"search...\"><br><br><label>Table Container</label><div class=\"scroll-container\" style=\"height:200px;overflow:auto\"><table><tr virtual-repeat.for=\"item of items\"><td>${$index}</td><td>${item}</td></tr></table></div></template>"; });
define('text!app2.html', ['module'], function(module) { module.exports = "<template><style>.scroll-container{border:1px solid #000;width:200px;height:200px}.scroll-container li,.scroll-container tr,.scroll-container>div{height:20px;outline:red solid 1px}</style><button click.trigger=\"chooseArrayA()\">Array A</button> <button click.trigger=\"chooseArrayB()\">Array B</button><br><br><label>Fixed Height Container</label><div class=\"scroll-container\" style=\"overflow:auto\"><div virtual-repeat.for=\"item of items\" infinite-scroll-next.call=\"getMore($scrollContext)\">${$index} ${item}</div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map