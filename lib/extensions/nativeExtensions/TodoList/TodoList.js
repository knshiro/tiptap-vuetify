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

import { TodoList as TodoListOriginal } from 'tiptap-extensions';
import VuetifyIcon from "../icons/VuetifyIcon";
import I18nText from "../../../i18n/I18nText";
import AbstractExtension from "../../AbstractExtension";
import ExtensionActionRenderBtn from "../../actions/renders/btn/ExtensionActionRenderBtn.ts";

var TodoList =
/*#__PURE__*/
function (_AbstractExtension) {
  _inherits(TodoList, _AbstractExtension);

  function TodoList(options) {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this, options, TodoListOriginal));
  }

  _createClass(TodoList, [{
    key: "availableActions",
    get: function get() {
      var _icons;

      return [{
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.TodoList.buttons.todoList.tooltip'),
          icons: (_icons = {}, _defineProperty(_icons, "md"
          /* md */
          , new VuetifyIcon('check_box')), _defineProperty(_icons, "fa"
          /* fa */
          , new VuetifyIcon('fas fa-tasks')), _defineProperty(_icons, "mdi"
          /* mdi */
          , new VuetifyIcon('mdi-format-list-checks')), _defineProperty(_icons, "mdiSvg"
          /* mdiSvg */
          , new VuetifyIcon('M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z')), _icons),
          nativeExtensionName: 'todo_list'
        })
      }];
    }
  }]);

  return TodoList;
}(AbstractExtension);

export { TodoList as default };
//# sourceMappingURL=TodoList.js.map