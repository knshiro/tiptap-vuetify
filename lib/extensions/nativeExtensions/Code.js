import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import { Code as CodeOriginal } from 'tiptap-extensions';
import VuetifyIcon from "./icons/VuetifyIcon";
import I18nText from "../../i18n/I18nText";
import AbstractExtension from "../AbstractExtension";
import ExtensionActionRenderBtn from "../actions/renders/btn/ExtensionActionRenderBtn.ts"; // TODO текст перед / после иконки. Сделать через массив: [new VuetifyIcon('code'), new TextForIcon('text')]

var Code =
/*#__PURE__*/
function (_AbstractExtension) {
  _inherits(Code, _AbstractExtension);

  function Code(options) {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, _getPrototypeOf(Code).call(this, options, CodeOriginal));
  }

  _createClass(Code, [{
    key: "availableActions",
    get: function get() {
      var _icons;

      return [{
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.Code.buttons.code.tooltip'),
          icons: (_icons = {}, _defineProperty(_icons, "md"
          /* md */
          , new VuetifyIcon('code')), _defineProperty(_icons, "fa"
          /* fa */
          , new VuetifyIcon('fas fa-code')), _defineProperty(_icons, "mdi"
          /* mdi */
          , new VuetifyIcon('mdi-code-tags')), _defineProperty(_icons, "mdiSvg"
          /* mdiSvg */
          , new VuetifyIcon('M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z')), _icons),
          nativeExtensionName: 'code'
        })
      }];
    }
  }]);

  return Code;
}(AbstractExtension);

export { Code as default };
//# sourceMappingURL=Code.js.map