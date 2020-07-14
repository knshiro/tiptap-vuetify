import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
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

import { Heading as HeadingOriginal } from 'tiptap-extensions';
import TextIcon from "./icons/TextIcon";
import I18nText from "../../i18n/I18nText";
import ExtensionActionRenderBtn from "../actions/renders/btn/ExtensionActionRenderBtn.ts";
import AbstractExtension from "../AbstractExtension";

var Heading =
/*#__PURE__*/
function (_AbstractExtension) {
  _inherits(Heading, _AbstractExtension);

  function Heading(options) {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, _getPrototypeOf(Heading).call(this, options, HeadingOriginal));
  }

  _createClass(Heading, [{
    key: "availableActions",
    get: function get() {
      return this.options.levels.map(function (level) {
        var _icons;

        return {
          render: new ExtensionActionRenderBtn({
            tooltip: new I18nText('extensions.Heading.buttons.heading.tooltip', {
              level: level
            }),
            icons: (_icons = {}, _defineProperty(_icons, "md"
            /* md */
            , new TextIcon('H' + level)), _defineProperty(_icons, "fa"
            /* fa */
            , new TextIcon('H' + level)), _defineProperty(_icons, "mdi"
            /* mdi */
            , new TextIcon('H' + level)), _defineProperty(_icons, "mdiSvg"
            /* mdiSvg */
            , new TextIcon('H' + level)), _icons),
            nativeExtensionName: 'heading',
            onClickOptions: {
              level: level
            },
            isActiveOptions: {
              level: level
            }
          })
        };
      });
    }
  }]);

  return Heading;
}(AbstractExtension);

export { Heading as default };
//# sourceMappingURL=Heading.js.map