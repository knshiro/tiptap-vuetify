import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// @ts-ignore
import { Node } from 'tiptap';
import { sinkListItem, splitToDefaultListItem, liftListItem } from 'tiptap-commands';
import TodoItemView from "./TodoItemView.vue";

var TodoItem =
/*#__PURE__*/
function (_Node) {
  _inherits(TodoItem, _Node);

  function TodoItem() {
    _classCallCheck(this, TodoItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodoItem).apply(this, arguments));
  }

  _createClass(TodoItem, [{
    key: "keys",
    value: function keys(_ref) {
      var type = _ref.type;
      return {
        Enter: splitToDefaultListItem(type),
        Tab: this.options.nested ? sinkListItem(type) : function () {},
        'Shift-Tab': liftListItem(type)
      };
    }
  }, {
    key: "name",
    get: function get() {
      return 'todo_item';
    }
  }, {
    key: "defaultOptions",
    get: function get() {
      return {
        nested: false
      };
    }
  }, {
    key: "view",
    get: function get() {
      return TodoItemView;
    }
  }, {
    key: "schema",
    get: function get() {
      var _this = this;

      return {
        attrs: {
          done: {
            default: false
          }
        },
        draggable: true,
        content: this.options.nested ? '(paragraph|todo_list)+' : 'paragraph+',
        toDOM: function toDOM(node) {
          var done = node.attrs.done;
          return ['li', {
            'data-type': _this.name,
            'data-done': done.toString()
          }, ['span', {
            class: 'todo-checkbox',
            contenteditable: 'false'
          }], ['div', {
            class: 'todo-content'
          }, 0]];
        },
        parseDOM: [{
          priority: 51,
          tag: "[data-type=\"".concat(this.name, "\"]"),
          getAttrs: function getAttrs(dom) {
            return {
              done: dom.getAttribute('data-done') === 'true'
            };
          }
        }]
      };
    }
  }]);

  return TodoItem;
}(Node);

export { TodoItem as default };
//# sourceMappingURL=TodoItemNode.js.map