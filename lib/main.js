import "core-js/modules/es.symbol";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.keys";
import "core-js/modules/web.dom-collections.for-each";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import TiptapVuetify from "./components/TiptapVuetify.vue";
import { TiptapVuetifyPlugin } from "./plugin";
export * from "./extensions/nativeExtensions";
export { TiptapVuetify };
export { TiptapVuetifyPlugin }; // @ts-ignore

if (process.env.ES_BUILD === 'false') {
  // авто установка (полезно если ставится через CDN)
  (function autoInstall() {
    var globalScope = null;

    if (typeof window !== 'undefined') {
      globalScope = window;
    } else if (typeof global !== 'undefined') {
      // @ts-ignore
      globalScope = global;
    }

    if (globalScope && globalScope.Vue) {
      // Automatic installation if Vue has been added to the global scope.
      globalScope.Vue.use(TiptapVuetifyPlugin, _objectSpread({
        vuetify: globalScope.vuetify
      }, globalScope.tiptapVuetifyPluginOptions));
      globalScope.Vue.component('tiptap-vuetify', TiptapVuetify);
    }
  })();
}
//# sourceMappingURL=main.js.map