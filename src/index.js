module.exports = function longestConsecutiveLength(array) {
//правила сортировки
  function fun(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  };

  function unique(arr) {
    var obj = {};
  
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i];
      obj[str] = true; // запомнить строку в виде свойства объекта
    }
  
    return Object.keys(obj); // или собрать ключи перебором для IE8-
  }

  array = unique(array.sort(fun));// сортируем массив и удаляем повторяющиеся элементы

  let arrayLength = [];
  let j = 0;
  let p = false;

  for (let i = 0; i < array.length; i++) { // определяем длину самой большой последовательности
    if (array[i+1]-array[i] == 1){
      arrayLength[j] = 1;
      p = true;
      j++;
    } else if (p == true){
      arrayLength[j] = 1;
      p = false;
      j = 0;
    }
  }

  if (array.length == 0){
    return 0;
  } else if (arrayLength.length == 0){
    return 1;
  }

  return arrayLength.length;
}
