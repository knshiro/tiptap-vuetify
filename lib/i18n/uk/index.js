export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Блок цитати'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Жирний'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Маркований список'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Код'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Блок кода'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Назад'
        },
        redo: {
          tooltip: 'Вперед'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Горизонтальна лінія'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Курсивний'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Упорядкований список'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Параграф'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Перекреслений'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Підкреслений'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_ref) {
            var level = _ref.level;
            return "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A ".concat(level, " \u0440\u0456\u0432\u043D\u044F");
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Змінити посилання'
        },
        notActive: {
          tooltip: 'Додати посилання'
        }
      },
      window: {
        title: 'Управління посиланням',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Закрити',
          remove: 'Вилучити',
          apply: 'Застосувати'
        }
      }
    }
  }
};
//# sourceMappingURL=index.js.map