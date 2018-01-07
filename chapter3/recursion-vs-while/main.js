'use strict';
(function () {
  const mainBox = {
    "objectName": 'mainBox',
    "objectType": 'box',
    "objectContent": [{
      "objectName": 'innerBox',
      "objectType": 'box',
      "objectContent": ''
    }, {
      "objectName": 'innerBox2',
      "objectType": 'box',
      "objectContent": {
        "objectName": 'innerBoxInInnerBox2',
        "objectType": 'box',
        "objectContent": ''
      }
    }, {
      "objectName": 'innerBox3',
      "objectType": 'box',
      "objectContent": [{
        "objectName": 'innerBoxInInnerBox3',
        "objectType": 'box',
        "objectContent": ''
      }, {
        "objectName": 'innerBox2InInnerBox3',
        "objectType": 'box',
        "objectContent": {
          "objectName": 'goldKey',
          "objectType": 'key',
          "objectContent": 'gold'
        }
      }]
    }]
  };
  const searchKeyInTheBox = function (object) {
    let boxesPile = object.objectContent; // складываем все 'коробки', лежащие внутри главной, в 'кучу'
    while (boxesPile.length > 0) { // пока в 'куче' есть коробки
      let box = boxesPile.pop(); // извлекаем из кучи последнюю 'коробку'
      let innerItemsOfBox = []; // создаём массив для содержимого исследуемой коробки
      if (box.objectContent !== '') { // если 'коробка' не пустая
        if (box.objectContent.length >= 1) { // если в ней несколько предметов (массив)
          innerItemsOfBox = box.objectContent; // кладём их в массив для содержимого исследуемой коробки
        } else {
          // если в ней один предмет (объект), то проверяем его тип
          if (box.objectContent.objectType === 'key') { // если это ключ - возвращаем имя родительской коробки
            return box.objectName;
          } else { // если это 'коробка',
            innerItemsOfBox.push(box.objectContent); // кладём 'коробку' в массив для содержимого исследуемой коробки
          }
        }
      }
      for (let i = 0; i < innerItemsOfBox.length; i++) { // перебираем массив для содержимого исследуемой коробки
        if (innerItemsOfBox[i].objectType === 'box') { // 'коробку' кладём в 'кучу'
          boxesPile.push(innerItemsOfBox[i]);
        } else if (innerItemsOfBox[i].objectType === 'key') { // если это ключ - возвращаем имя родительской коробки
          return box.objectName;
        }
      }
    }
  };
  console.log('Ключ найден в коробке с objectName ' + searchKeyInTheBox(mainBox));
})();