export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Bloková citace'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Tučně'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Bodový seznam'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Kód'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Blok kódu'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Zpět'
        },
        redo: {
          tooltip: 'Vpřed'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Horizontální oddělovač'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Kurzíva'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Číslovaný seznam'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Odstavec'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Přeškrtnutě'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Podrženě'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: function tooltip(_ref) {
            var level = _ref.level;
            return level + '. úroveň nadpisu';
          }
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Změnit odkaz'
        },
        notActive: {
          tooltip: 'Přidat odkaz'
        }
      },
      window: {
        title: 'Správa odkazu',
        form: {
          hrefLabel: 'Odkaz'
        },
        buttons: {
          close: 'Zavřít',
          remove: 'Odebrat',
          apply: 'Použít'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Obrázek'
      },
      window: {
        title: 'Přidat obrázek',
        form: {
          sourceLink: 'Adresa obrázku',
          altText: 'Alternativní text',
          addImage: 'Přidat obrázek'
        },
        imageUpload: {
          instruction: 'Vyberte soubor(y) nebo je(j) přetáhněte sem.'
        },
        buttons: {
          close: 'Zavřít',
          apply: 'Použít'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Seznam TODO'
        }
      }
    }
  }
};
//# sourceMappingURL=index.js.map