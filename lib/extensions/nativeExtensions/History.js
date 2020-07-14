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

import { History as HistoryOriginal } from 'tiptap-extensions';
import VuetifyIcon from "./icons/VuetifyIcon";
import I18nText from "../../i18n/I18nText";
import AbstractExtension from "../AbstractExtension";
import ExtensionActionRenderBtn from "../actions/renders/btn/ExtensionActionRenderBtn.ts";

var History =
/*#__PURE__*/
function (_AbstractExtension) {
  _inherits(History, _AbstractExtension);

  function History(options) {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, _getPrototypeOf(History).call(this, options, HistoryOriginal));
  }

  _createClass(History, [{
    key: "availableActions",
    get: function get() {
      var _icons, _icons2;

      // если не нужны кнокпи
      if (this.options && this.options.noActions) return [];
      return [{
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.History.buttons.undo.tooltip'),
          icons: (_icons = {}, _defineProperty(_icons, "md"
          /* md */
          , new VuetifyIcon('undo')), _defineProperty(_icons, "fa"
          /* fa */
          , new VuetifyIcon('fas fa-undo')), _defineProperty(_icons, "mdi"
          /* mdi */
          , new VuetifyIcon('mdi-undo')), _defineProperty(_icons, "mdiSvg"
          /* mdiSvg */
          , new VuetifyIcon('M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z')), _icons),
          nativeExtensionName: 'undo'
        })
      }, {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.History.buttons.redo.tooltip'),
          icons: (_icons2 = {}, _defineProperty(_icons2, "md"
          /* md */
          , new VuetifyIcon('redo')), _defineProperty(_icons2, "fa"
          /* fa */
          , new VuetifyIcon('fas fa-redo')), _defineProperty(_icons2, "mdi"
          /* mdi */
          , new VuetifyIcon('mdi-redo')), _defineProperty(_icons2, "mdiSvg"
          /* mdiSvg */
          , new VuetifyIcon('M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z')), _icons2),
          nativeExtensionName: 'redo'
        })
      }];
    }
  }]);

  return History;
}(AbstractExtension);

export { History as default };
//# sourceMappingURL=History.js.map