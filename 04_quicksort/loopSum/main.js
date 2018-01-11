(function () {
  /**
   * Функция суммирует все числа и возвращает их сумму.
   * @param {Array} array - Функция принимает массив чисел
   * @returns {number} - Функция возвращает сумму всех чисел из массива, саккумулированную в переменной total.
   */
  const findSumWithCycle = function (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  };

  console.log('Сумма чисел из массива равна ' + findSumWithCycle([2, 20, 8, 14, 6, 19, 31])); // 100
})();