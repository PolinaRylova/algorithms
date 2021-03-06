(function () {
  /**
   * Функция для поиска с помощью рекурсии максимального элемента в массиве.
   * @param {Array} array - Функция принимает массив чисел.
   * @returns {*} - Функция возвращает большее из двух чисел.
   */
  const findMax = function (array) {
    if (array.length === 2) { // базовый случай (если массив состоит из двух элементов)
      return array[0] > array[1] ? array[0] : array[1]; // возвращает большее число из самого первого и следующего элемента в массиве
    } else { // рекурсивный случай (если в массиве больше двух элементов)
      let restArray = array.slice(1); // сохраняем в новый массив элементы, кроме самого первого
      let subMax = findMax(restArray); // находим большее число в этом новом массиве
      return array[0] > subMax ? array[0] : subMax; // возвращает большее число из самого первого элемента в массиве и самого большего из остальных элементов массива
    }
  };
  console.log('Наибольший элемент в массиве ' + findMax([2, 4, 7, 1, 3, 9]));
})();