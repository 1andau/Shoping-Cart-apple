import React, { useState } from 'react'
import FootwareMenus from '../filters/StoreHeader';
import Filters from '../filters/Filters';
import {data} from '../data/data'; 
import SneakersList from './List';
import SneakersType from '../filters/StoreHeader';
import Sizes from '../filters/Sizes';
import filterList from '../filters/FilterList';
function Home() {

const [sneakers, setSneakers] = useState(data);
const [selectedSizes, setSelectedSizes] = useState([]); 
console.log(selectedSizes);


//indexOf() возвращает первый индекс,
// по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
//splice() это типа как remove, ну тип кликаешь на кнопку и она дает тебе массив, а если кликнуть еще раз, массив пропадает. так типа можно филбтры сбрасывать
//Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива. бля, вот как гитхаб пушит, так же эта кнопка пушит, результат показывает (и делает)
//includes типа возвращает элемент или вообще весь массив, ю ноу? ну то есть допустим ты кликнула на первую кнопку и массив появился в devtools, нажмешь на эту же кнопку еще раз, будет false, получишь красный экран 
//includes типа определяет есть ли в массиве нужный элементик, если нет, то получишь false и нихуя не будет работать, а если все ок, то на тебе чудо кнопочка которая работает прекрасно true 


const setSize = (size) => {
  const newSizes = [...selectedSizes];
  if (newSizes.includes(size)) {
    const index = newSizes.indexOf(size);
    newSizes.splice(index, 1);
  } else {
    newSizes.push(size);
  }
  setSelectedSizes(newSizes);
  setSneakers(filterList(newSizes, 'size'))
};




    const filterItem = (event) => {
      const newItem = data.filter((newVal) => {
        
        return newVal.typeSneakers === event;
      });
      setSneakers(newItem);
    };


  return (
    <div >
      <SneakersType />

      <Filters filterItem={filterItem} setSneakers={setSneakers} />

      <div>
          <Sizes  setSize = {setSize} 
          selectedSizes = {selectedSizes}/>
          <SneakersList sneakers={sneakers} />
        </div>
      </div>
  );
}

export default Home