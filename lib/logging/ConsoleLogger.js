import "core-js/modules/es.array.concat";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { PACKAGE_NAME } from "../const";

var ConsoleLogger =
/*#__PURE__*/
function () {
  function ConsoleLogger() {
    _classCallCheck(this, ConsoleLogger);
  }

  _createClass(ConsoleLogger, [{
    key: "warn",
    value: function warn(msg) {
      console.warn("".concat(PACKAGE_NAME, ": ").concat(msg));
    }
  }, {
    key: "error",
    value: function error(msg) {
      console.error("".concat(PACKAGE_NAME, ": ").concat(msg));
    }
  }]);

  return ConsoleLogger;
}();

export default new ConsoleLogger();
//# sourceMappingURL=ConsoleLogger.js.map