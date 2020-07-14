export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Блок цитаты'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Жирный'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Маркированный список'
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
          tooltip: 'Горизонтальная линия'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Курсивный'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Упорядоченный список'
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
          tooltip: 'Перечерктнутый'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Подчерктнутый'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_ref) {
            var level = _ref.level;
            return "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A ".concat(level, " \u0443\u0440\u043E\u0432\u043D\u044F");
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Изменить ссылку'
        },
        notActive: {
          tooltip: 'Добавить ссылку'
        }
      },
      window: {
        title: 'Управление ссылкой',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Закрыть',
          remove: 'Удалить',
          apply: 'Применить'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Картинка'
      },
      window: {
        title: 'Добавить картинку',
        form: {
          sourceLink: 'Ссылка на картинку'
        },
        buttons: {
          close: 'Закрыть',
          apply: 'Применить'
        }
      }
    }
  }
};
//# sourceMappingURL=index.js.map