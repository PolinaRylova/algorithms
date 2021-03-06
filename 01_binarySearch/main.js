'use strict';
(function () {
  /**
   * Отсортированыый массив чисел
   * @type {Array<string>}
   */
  const NumbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
  /**
   * Функция, принимающая в качестве аргументов массив отсортированных чисел и искомый элемент,
   * реализующая бинарный поиск и возвращающая индекс предложенного элемента в данном массиве (или сообщение о его отсутствии).
   * @param {Array<string>} array - Массив отсортированных чисел.
   * @param {string} neededItem - Число, индекс которого нужно найти, в строковом представлении
   */
  const findNumberByBinarySearch = function (array, neededItem) {
    let lowIndex = 0; // индекс нижней границы части массива, по которой ведется поиск
    let highIndex = array.length - 1; // индекс верхней границы части массива, по которой ведется поиск
    let middleIndex; // переменная для хранения индекса среднего элемента части массива, по которой ведётся поиск
    let guessNumber; // переменная для хранения значения среднего элемента части массива, по которой ведётся поиск
    let stepsCount = 0; // переменная для хранения количества шагов, за которое был найден результат
    neededItem = Number(neededItem); // приводим искомое число из строки к числу

    while (lowIndex <= highIndex) { // пока эта часть не сократится до одного элемента, проверяем средний элемент
      middleIndex = Math.round((lowIndex + highIndex) / 2); // вычисляем средний индекс по части массива, в которой ведём поиск, и округяем до целого числа
      guessNumber = Number(array[middleIndex]); // находим элемент по данному индексу
      stepsCount++; // увеличиваем количество шагов на 1
      if (guessNumber === neededItem) { // если элемент по среднему индексу соответствует искомому элементу
        return 'Индекс указанного числа равен ' + middleIndex + '. Число найдено за ' + stepsCount + ' шага(ов).';
      } else if (guessNumber > neededItem) { // если элемент по среднему индексу больше искомого элемента
        highIndex = middleIndex - 1;
      } else { // если элемент по среднему индексу меньше искомого элемента
        lowIndex = middleIndex + 1;
      }
    }
    // если ни один элемент массива не соответствует искомому элементу
    return 'Такого числа нет в данном массиве.' + ' Для определения понадобилось ' + stepsCount + ' шага(ов).';
  };
  /**
   * Вызов функции с параметрами массива чисел и искомого числа
   */
  const result = findNumberByBinarySearch(NumbersArray, '-24');
  console.log(result);
})();