(function () {
  /**
   * Фукнция выводит в консоль числа в порядке убывания от переданного в аргументе при вызове функции до нуля
   * @param {number} i - Функция принимает в качестве параметра число
   */
  const countDown = function (i) {
    console.log(i);
    if (i <= 0) { // базовый случай
      return;
    } else { // рекурсивный случай
      countDown(i-1);
    }
  };

  countDown(5);
})();