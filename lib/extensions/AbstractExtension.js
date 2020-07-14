function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractExtension = function AbstractExtension(options, extensionClass) {
  _classCallCheck(this, AbstractExtension);

  this.options = options;
  this.extensionClass = extensionClass;
  this.nativeExtensionInstance = null;

  if (extensionClass) {
    // eslint-disable-next-line
    this.nativeExtensionInstance = new extensionClass(options);
  }
};

export { AbstractExtension as default };
//# sourceMappingURL=AbstractExtension.js.map