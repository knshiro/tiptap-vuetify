function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import theme from "./configs/theme";
import ConsoleLogger from "./logging/ConsoleLogger"; // дефолтный экспорт не подходит и это плохая практика:
// It is bad practice to mix default and named exports in the same module, though it is allowed by the specification.

export var TiptapVuetifyPlugin = new (
/*#__PURE__*/
function () {
  function Plugin() {
    _classCallCheck(this, Plugin);

    this.installed = false;
  }

  _createClass(Plugin, [{
    key: "install",
    value: function install(VueFuncConstructor, options) {
      if (!options || !options.vuetify) {
        ConsoleLogger.error('Please, specify in options the Vuetify Object ("vuetify" property)');
        return;
      }

      var vuetifyFramework = options.vuetify,
          _options$iconsGroup = options.iconsGroup,
          iconsGroup = _options$iconsGroup === void 0 ? theme.defaultIconsGroup : _options$iconsGroup;
      VueFuncConstructor.prototype.tiptapVuetifyPlugin = TiptapVuetifyPlugin;
      VueFuncConstructor.prototype.$tiptapVuetify = {
        iconsGroup: iconsGroup
      };
      this.vuetify = vuetifyFramework;
      this.installed = true;
    }
  }, {
    key: "vuetifyLang",
    get: function get() {
      return this.vuetify.framework.lang.current;
    }
  }]);

  return Plugin;
}())();
//# sourceMappingURL=plugin.js.map