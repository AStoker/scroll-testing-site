define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.items = [];
      this.primaryItems = [];
      this.secondaryItems = [];

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
    };

    App.prototype.chooseArrayB = function chooseArrayB() {
      this.items = this.secondaryItems;
    };

    App.prototype.getMore = function getMore() {
      console.log('called');
    };

    return App;
  }();
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
define('text!app.html', ['module'], function(module) { module.exports = "<template><style>.scroll-container{border:1px solid #000;width:200px}.scroll-container li,.scroll-container tr,.scroll-container>div{height:20px;outline:red solid 1px;list-style:none}</style><button click.trigger=\"chooseArrayA()\">Array A</button> <button click.trigger=\"chooseArrayB()\">Array B</button><br><br><label>Table Container</label><div class=\"scroll-container\" style=\"height:200px;overflow:auto\"><table><tr virtual-repeat.for=\"item of items\"><td>${$index}</td><td>${item}</td></tr></table></div></template>"; });
define('text!app2.html', ['module'], function(module) { module.exports = "<template><style>.scroll-container{border:1px solid #000;width:200px;height:200px}.scroll-container li,.scroll-container tr,.scroll-container>div{height:20px;outline:red solid 1px}</style><button click.trigger=\"chooseArrayA()\">Array A</button> <button click.trigger=\"chooseArrayB()\">Array B</button><br><br><label>Fixed Height Container</label><div class=\"scroll-container\" style=\"overflow:auto\"><div virtual-repeat.for=\"item of items\" infinite-scroll-next.call=\"getMore($scrollContext)\">${$index} ${item}</div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map