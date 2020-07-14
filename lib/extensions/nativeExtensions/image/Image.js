import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";
import "regenerator-runtime/runtime";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import { Image as ImageOriginal } from 'tiptap-extensions';
import VuetifyIcon from "../icons/VuetifyIcon";
import I18nText from "../../../i18n/I18nText";
import AbstractExtension from "../../AbstractExtension";
import Vue from 'vue';
import ExtensionActionRenderBtn from "../../actions/renders/btn/ExtensionActionRenderBtn.ts";
import ImageWindow from "./ImageWindow.vue";

var Image =
/*#__PURE__*/
function (_AbstractExtension) {
  _inherits(Image, _AbstractExtension);

  function Image(options) {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this, options, ImageOriginal));
  }

  _createClass(Image, [{
    key: "availableActions",
    get: function get() {
      var _icons;

      var nativeExtensionName = 'image';
      var options = this.options;
      return [{
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.Image.buttons.tooltip'),
          icons: (_icons = {}, _defineProperty(_icons, "md"
          /* md */
          , new VuetifyIcon('image')), _defineProperty(_icons, "fa"
          /* fa */
          , new VuetifyIcon('fas fa-image')), _defineProperty(_icons, "mdi"
          /* mdi */
          , new VuetifyIcon('mdi-image')), _defineProperty(_icons, "mdiSvg"
          /* mdiSvg */
          , new VuetifyIcon('M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z')), _icons),
          nativeExtensionName: nativeExtensionName,
          onClick: function onClick(_ref) {
            var context = _ref.context,
                editor = _ref.editor;
            return _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var LinkWindowComponent, instance;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      LinkWindowComponent = Vue.extend(ImageWindow);
                      instance = new LinkWindowComponent({
                        vuetify: Vue.prototype.tiptapVuetifyPlugin.vuetify,
                        propsData: {
                          value: true,
                          nativeExtensionName: nativeExtensionName,
                          context: context,
                          editor: editor,
                          imageSources: options.imageSources,
                          imageSourcesOverride: options.imageSourcesOverride
                        }
                      });
                      instance.$mount();
                      document.querySelector('body').appendChild(instance.$el);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();
          }
        })
      }];
    }
  }]);

  return Image;
}(AbstractExtension);

export { Image as default };
//# sourceMappingURL=Image.js.map