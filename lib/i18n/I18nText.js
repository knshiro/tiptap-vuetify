function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { getMsg } from "./index.ts";

var I18nText =
/*#__PURE__*/
function () {
  function I18nText(path, args) {
    _classCallCheck(this, I18nText);

    this.text = getMsg(path, args);
  }

  _createClass(I18nText, [{
    key: "toString",
    value: function toString() {
      return this.text;
    }
  }]);

  return I18nText;
}();

export { I18nText as default };
//# sourceMappingURL=I18nText.js.map