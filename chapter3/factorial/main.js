'use strict';
(function () {
  /**
   * Функция вычисления факториала числа (демонстрация рекурсии)
   * @param {number} number - Принимает число, факториал которого нужно вычислить
   * @returns {number} Полученный факториал числа
   */
  const calculateFactorialByNumber = function (number) {
    if (number === 1) { // базовый случай
      return 1;
    } else { // рекурсивный случай
      return number * calculateFactorialByNumber(number - 1);
    }
  };
  console.log(calculateFactorialByNumber(4));
})();