'use strict';
(function () {
  const mainBox = {
    "objectName": 'mainBox',
    "objectType": 'box',
    "objectContent": [{
      "objectName": 'firstInnerBox',
      "objectType": 'box',
      "objectContent": ''
    }, {
      "objectName": 'secondInnerBox',
      "objectType": 'box',
      "objectContent": {
        "objectName": 'firstInnerBoxOfSecondInnerBox',
        "objectType": 'box',
        "objectContent": ''
      }
    }, {
      "objectName": 'thirdInnerBox',
      "objectType": 'box',
      "objectContent": [{
        "objectName": 'firstInnerBoxOfThirdInnerBox',
        "objectType": 'box',
        "objectContent": ''
      }, {
        "objectName": 'secondInnerBoxOfThirdInnerBox',
        "objectType": 'box',
        "objectContent": {
          "objectName": 'goldKey',
          "objectType": 'key',
          "objectContent": 'gold'
        }
      }]
    }]
  };
  const findBoxWithKeyName = function (object) {
    let boxesPile = object.objectContent; // складываем все 'коробки', лежащие внутри главной, в 'кучу'
    while (boxesPile.length > 0) { // пока в 'куче' есть коробки
      let box = boxesPile.pop(); // извлекаем из кучи последнюю 'коробку'
      let innerItemsOfBox = []; // создаём массив для содержимого исследуемой коробки
      if (box.objectContent !== '') { // если 'коробка' не пустая
        if (Array.isArray(box.objectContent)) { // если в ней массив
          innerItemsOfBox = box.objectContent; // кладём их в массив для содержимого исследуемой коробки
        } else if (typeof object.objectContent === "object") { // если в ней объект, то проверяем его objectType
          if (box.objectContent.objectType === 'key') { // если это ключ - возвращаем имя родительской коробки
            return box.objectName;
          } else { // если это 'коробка',
            innerItemsOfBox.push(box.objectContent); // кладём 'коробку' в массив для содержимого исследуемой коробки
          }
        }
        for (let i = 0; i < innerItemsOfBox.length; i++) { // перебираем массив для содержимого исследуемой коробки
          if (innerItemsOfBox[i].objectType === 'box') { // 'коробку' кладём в 'кучу'
            boxesPile.push(innerItemsOfBox[i]);
          } else if (innerItemsOfBox[i].objectType === 'key') { // если это ключ - возвращаем имя родительской коробки
            return box.objectName;
          }
        }
      } else {
        return null;
      }
    }
  };
  /*
  const findBoxWithKeyName = function (object) {
    let boxWithKeyName;
    if (object.objectContent !== '') { // если 'коробка' не пустая
      if (Array.isArray(object.objectContent)) { // если в ней массив
        for (let i = 0; i < object.objectContent.length; i++) {
          if (object.objectContent[i].objectType === 'key') { // если это ключ - возвращаем имя родительской коробки
            boxWithKeyName = object.objectName;
          } else { // если это 'коробка',
            boxWithKeyName = findBoxWithKeyName(object.objectContent[i]);
          }
        }
      } else if (typeof object.objectContent === "object") { // если в ней объект, то проверяем его поле objectType
        if (object.objectContent.objectType === 'key') { // если это ключ - возвращаем имя родительской коробки
          boxWithKeyName = object.objectName;
        } else { // если это 'коробка',
          boxWithKeyName = findBoxWithKeyName(object.objectContent);
        }
      }
    }
    if (boxWithKeyName) {
      return boxWithKeyName;
    } else {
      return null;
    }
  };*/

  const showSearchingResult = function (result) {
    if (result === null) {
      console.log('Ключа нет в коробке');
    } else {
      console.log('Ключ найден в коробке ' + result);
    }
  };

  showSearchingResult(findBoxWithKeyName(mainBox));
})();