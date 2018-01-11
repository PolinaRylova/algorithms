(function () {
  /**
   * Функция суммирует все числа и возвращает их сумму.
   * @param {Array} array - Функция принимает массив чисел
   * @returns {number} - Функция возвращает сумму всех чисел из массива.
   */
  const findSumWithRecursion = function (array) {
    if (array.length === 0) { // базовый случай
      return 0; // если массив пустой, то возвращаем 0
    } else { // иначе возвращаем сумму "первый элемент плюс результат вызова функции для суммирования оставшихся элементов"
      let restArray = array.slice(1); // сохраняем в новый массив элементы, кроме самого первого
      return array[0] + findSumWithRecursion(restArray); // рекурсивный случай
    }
  };

  console.log('Сумма чисел из массива равна ' + findSumWithRecursion([2, 20, 8, 14, 6, 19, 31])); // 100
})();