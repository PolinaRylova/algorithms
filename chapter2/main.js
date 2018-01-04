'use strict';
(function () {
  /**
   * Находим индекс меньшего элемента массива.
   * @param {Array<number>} array - Принимаем в качестве аргумента массив чисел.
   * @returns {number} smallestIndex - Возвращаем индекс наименьшего элемента массива в виде числа.
   * Функция принимает в качестве аргумента массив чисел.
   * В переменную smallest записывается первый (нулевой) элемент массива, а его индекс записывается в перемнную smallestIndex.
   * Затем массив перебирается, начиная со следующего, второго (индекс 1) элемента массива и до конца массива.
   * На каждой итерации проверяем, является ли значение перебираемого элемента меньше сохранённого значения в smallest.
   * Если значение перебираемого элемента меньше сохранённого значения в smallest, то записываем его в smallest, а его индекс в smallestIndex.
   * По завершении цикла перебора массива возвращаем в точку вызова функции значение smallestIndex (индекс наименьшего элемента массива).
   */
  const findIndexOfSmallest = function (array) {
    let smallest = array[0];
    let smallestIndex = 0;

    for (let i = 1; i < array.length; i++) {
      if (array[i] < smallest) {
        smallest = array[i];
        smallestIndex = i;
      }
    }

    return smallestIndex;
  };
  /**
   * Сортируем выбором наименьшего элемента.
   * @param {Array<number>} array - Принимаем в качестве аргумента массив чисел.
   * @returns {Array<number>} sortedArray - Возвращаем массив чисел, отсортированный по возрастанию.
   * Функция принимает в качестве аргумента массив чисел.
   * Создаём пустой массив, в который будем складывать числа в порядке возрастания.
   * Объявляем переменную smallestElementIndex для хранения индекса минимального элемента массива.
   * Объявляем переменную smallestElement для хранения минимального элемента массива.
   * Затем перебираем массив, пока в нем есть элементы.
   * На каждой итерации вызываем функцию нахождения индекса минимального элемента массива и сохраняем результат в переменную smallestElementIndex.
   * По данному индексу вырезаем из массива элемент методом split и, поскольку он возвращает массив, методом join приводим возвращаемое значение к строке;
   * сохраняем полученную строку в переменную smallestElement.
   * Затем кладём последним элементом в массив sortedArray значение минимального элемента из переменной smallestElement, предварительно приведя его к числу.
   * По завершении цикла перебора массива возвращаем в точку вызова функции массив чисел, отсортированный по возрастанию.
   */
  const sortedBySelection = function (array) {
    let sortedArray = [];
    let smallestElementIndex;
    let smallestElement;

    while (array.length) {
      smallestElementIndex = findIndexOfSmallest(array);
      smallestElement = array.splice(smallestElementIndex, 1).join('');
      sortedArray.push(Number(smallestElement));
    }

    return sortedArray;
  };

  console.log(sortedBySelection([5, 3, 8, 1, 10]));
})();