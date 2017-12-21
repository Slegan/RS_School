import { EnglishNouns } from './dictionarys/englishNouns.js';
import { RussianNouns } from './dictionarys/russianNouns.js';
import { EnglishAdjectives } from './dictionarys/englishAdjectives.js';
import { RussianAdjectives } from './dictionarys/russianAdjectives.js';
import { EnglishVerbs } from './dictionarys/englishVerbs.js';
import { RussianVerbs } from './dictionarys/russianVerbs.js';


export const h = {
    newArr: length => Array(length).fill(null),
    find: el => document.querySelector(el),
    findId: el => document.getElementById(el),
    getWords: function (objName, amount) {
      let arr = Object.keys(h.getDictionary(objName));
      let selectedKeyArr = h.newArr(amount);
      for (let i = 0; i < amount;) {
        let num = h.rand(1, arr.length-1);
        if (!selectedKeyArr.some(elem => elem === arr[num])) {
          selectedKeyArr[i] = arr[num];
          i++;
        }
      }
      return selectedKeyArr;
    },
    getValues: function (obj, arrKeys) {
      let arr = [];
      let la = arrKeys.map(k => obj[k])
             .map(v => arr.push(v)
                 );
      return arr;
    },
    isTranslate: function(value, arr){
      if (arr.some(elem => elem === value)) {
        return true;
      }
      return false;
    },
    getDictionary: function(name){
      switch (name) {
        case 'EnglishNouns':
          return EnglishNouns;
          break;
        case 'EnglishAdjectives':
          return EnglishAdjectives;
          break;
        case 'EnglishVerbs':
          return EnglishVerbs;
          break;
        case 'RussianNouns':
          return RussianNouns;
          break;
        case 'RussianAdjectives':
          return RussianAdjectives;
          break;
        case 'RussianVerbs':
          return RussianVerbs;
          break;
      }
    },
    rand: (min, max) => Math.round(Math.random() * (max - min) + min)
}
