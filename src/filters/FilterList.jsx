import { data } from "../data/data";

export default function filterList(arr, datalist) {

    if(datalist == null) return data;

    //Метод some() проверяет, удовлетворяет ли какой-либо 
    //элемент массива условию, заданному в передаваемой функции.
    
    //Метод split() разбивает объект String на массив
    // строк путём разделения строки указанной подстрокой.

      //indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.


    else {
          return data.filter(obj => {
          const sizeArray = obj.size.split(" ");
          if(arr.length > 0) {
                if(sizeArray.some(all => arr.indexOf(all) >= 0)) {
                    return obj;
            }
          }
          else {
              return data;
          }
      })  
    }
}





