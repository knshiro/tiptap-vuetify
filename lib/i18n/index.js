import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.reduce";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import en from "./en";
import ru from "./ru";
import es from "./es";
import pl from "./pl";
import fr from "./fr";
import uk from "./uk";
import ptbr from "./ptbr";
import tr from "./tr";
import he from "./he";
import nl from "./nl";
import ja from "./ja";
import de from "./de";
import ko from "./ko";
import zh from "./zh";
import fa from "./fa";
import sv from "./sv";
import cs from "./cs";
import it from "./it";
import el from "./el";
import ConsoleLogger from "../logging/ConsoleLogger";
import { TiptapVuetifyPlugin } from "../main";
export var defaultLanguage = 'en';
export var dictionary = {
  en: en,
  ru: ru,
  es: es,
  pl: pl,
  fr: fr,
  uk: uk,
  ptbr: ptbr,
  tr: tr,
  he: he,
  nl: nl,
  ja: ja,
  de: de,
  ko: ko,
  zh: zh,
  fa: fa,
  sv: sv,
  cs: cs,
  it: it,
  el: el
};
export function getCurrentLang() {
  return TiptapVuetifyPlugin.vuetifyLang || defaultLanguage;
}
export function getMsg(path, args) {
  var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentLang = lang || getCurrentLang();

  if (!dictionary[currentLang]) {
    ConsoleLogger.warn("The current language \"".concat(currentLang, "\" is not yet available. Using language \"").concat(defaultLanguage, "\" by default. Contribution to github is welcome."));
    currentLang = defaultLanguage;
  }

  var dictionaryByLang = dictionary[currentLang];
  var target;

  try {
    target = path.split('.').reduce(function (prev, curr) {
      return prev[curr];
    }, dictionaryByLang); // No error thrown by above reduce function if last stage is undefined - no fallback used and returned value is empty

    if (target === undefined) {
      throw new Error("".concat(path, " is undefined."));
    }
  } catch (e) {
    ConsoleLogger.warn("Cannot get translation \"".concat(path, "\" for language \"").concat(currentLang, "\". Fallback \"").concat(defaultLanguage, "\" is used instead. Contribution to github is welcome.")); // Использовать defaultLanguage если фраза не переведена на текущий язык

    return getMsg(path, args, defaultLanguage);
  }

  if (target instanceof Function) {
    return target(args);
  }

  return target;
}
//# sourceMappingURL=index.js.map