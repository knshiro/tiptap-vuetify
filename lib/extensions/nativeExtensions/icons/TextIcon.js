function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextIcon =
/*#__PURE__*/
function () {
  function TextIcon(text) {
    _classCallCheck(this, TextIcon);

    this.text = text;
  }

  _createClass(TextIcon, [{
    key: "toString",
    value: function toString() {
      return this.text;
    }
  }]);

  return TextIcon;
}();

export { TextIcon as default };
//# sourceMappingURL=TextIcon.js.map