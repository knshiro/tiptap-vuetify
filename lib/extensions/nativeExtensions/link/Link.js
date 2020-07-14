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

import { Link as LinkOriginal } from 'tiptap-extensions';
import VuetifyIcon from "../icons/VuetifyIcon";
import I18nText from "../../../i18n/I18nText";
import AbstractExtension from "../../AbstractExtension";
import LinkWindow from "./LinkWindow.vue";
import Vue from 'vue';
import ExtensionActionRenderBtn from "../../actions/renders/btn/ExtensionActionRenderBtn.ts";

var Link =
/*#__PURE__*/
function (_AbstractExtension) {
  _inherits(Link, _AbstractExtension);

  function Link(options) {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, options, LinkOriginal));
  }

  _createClass(Link, [{
    key: "availableActions",
    get: function get() {
      var _icons;

      var nativeExtensionName = 'link';
      return [{
        render: new ExtensionActionRenderBtn({
          tooltip: function tooltip(context, options) {
            return new I18nText(options.isActive(context) ? 'extensions.Link.buttons.isActive.tooltip' : 'extensions.Link.buttons.notActive.tooltip');
          },
          icons: (_icons = {}, _defineProperty(_icons, "md"
          /* md */
          , new VuetifyIcon('link')), _defineProperty(_icons, "fa"
          /* fa */
          , new VuetifyIcon('fas fa-link')), _defineProperty(_icons, "mdi"
          /* mdi */
          , new VuetifyIcon('mdi-link')), _defineProperty(_icons, "mdiSvg"
          /* mdiSvg */
          , new VuetifyIcon('M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z')), _icons),
          nativeExtensionName: nativeExtensionName,
          onClick: function onClick(_ref) {
            var context = _ref.context,
                editor = _ref.editor;
            var href = context.getMarkAttrs(nativeExtensionName).href;
            var LinkWindowComponent = Vue.extend(LinkWindow);
            var instance = new LinkWindowComponent({
              vuetify: Vue.prototype.tiptapVuetifyPlugin.vuetify,
              propsData: {
                value: true,
                nativeExtensionName: nativeExtensionName,
                context: context,
                editor: editor,
                href: href
              }
            });
            instance.$mount();
            document.querySelector('body').appendChild(instance.$el);
          }
        })
      }];
    }
  }]);

  return Link;
}(AbstractExtension); // export const icons = {
//   save: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('check'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-check'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-check')
//   },
//   cancel: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('link_off'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-unlink'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link-off')
//   },
//   linkUpdate: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('link'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fas fa-link'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link')
//   },
//   linkAdd: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('link'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-link'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link-plus')
//   }
// }


export { Link as default };
//# sourceMappingURL=Link.js.map