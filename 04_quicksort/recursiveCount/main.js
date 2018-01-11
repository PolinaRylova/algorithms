(function () {
  const countElements = function (array) {
    if (!array.length) { // базовый случай (если массив пустой)
      return 0;
    } else { // иначе возвращаем сумму "один плюс результат вызова функции для подсчёта оставшихся элементов"
      let restArray = array.slice(1); // сохраняем в новый массив элементы, кроме самого первого
      return 1 + countElements(restArray); // рекурсивный случай
    }
  };

  console.log('Количество элементов в массиве равно ' + countElements([10, 20, 30, 40, 50])); // 5
})();