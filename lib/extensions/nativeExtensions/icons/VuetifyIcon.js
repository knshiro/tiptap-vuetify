import "core-js/modules/es.function.name";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VuetifyIcon =
/*#__PURE__*/
function () {
  function VuetifyIcon(name) {
    _classCallCheck(this, VuetifyIcon);

    this.name = name;
  }

  _createClass(VuetifyIcon, [{
    key: "toString",
    value: function toString() {
      return this.name;
    }
  }]);

  return VuetifyIcon;
}();

export { VuetifyIcon as default };
//# sourceMappingURL=VuetifyIcon.js.map