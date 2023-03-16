
// let newArrs, inputArrs =[];

function insertData () {
        let elem = prompt ('Введите элемент массива');
        let inputArrs =[];
            while (elem !== null) {
                inputArrs.push(elem);
                    elem = prompt ('Введите элемент массива');
                }
                console.log('Введенные данные:   '+inputArrs);
        return inputArrs;
     };

     function insertDataArray () {
        let inputDataArr =[]; 
        let elem = prompt ('Введите элемент массива');
        for (i = 0; i <= numbElem; i++) {
            inputDataArr.push([]);
        }
        return inputDataArrs;
     };

 function findIndex (myArray, numberElemarray, indexArray) {
                    let index = myArray.indexOf(myArray[numberElemarray],indexArray);
                        while (index > 0) {
                            myArray.splice (index,1);
                            index = myArray.indexOf(myArray[numberElemarray],indexArray);                        
                        };
                };

let cod = prompt
('Введите код задания\n 1-На вход поступает массив, вывести массив, удалив неуникальные значения\n 2-На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать\n 3-На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект, где ключами являются нулевой индекс вложенных массивов, а значениями являются элементы с индексом один.\n Esc-Выход');
switch (cod) {
    case '1' :  
                let newArrs = insertData(); 
                let elem2 = 0;
                              
                for (let elem = 0; elem < newArrs.length; elem++) {
                    findIndex (newArrs, elem, ++elem2);     
                }
                console.log('Уникальный массив выглядит так :  ' + newArrs);
                
    break;
    case '2' :  let newArrs1 = insertData(); 
                let elem3; 
                let newArrs2 = [];
                while (newArrs1.length) {
                    newArrs2.push(newArrs1.pop());
                }
                console.log("Реверсивный массив: "+newArrs2)
               
    break;
    case '3' :  let elem;
                let arrInput = []; 
                arrInput.length = 2;
                for (let i = 0; i <= 1; i++){
                    let elem = prompt ('Введите элемент массива');
                    arrInput[i] = elem;
                    console.log("добавили "+ arrInput);
                }

                 console.log("Полученный 1й массив: "+ arrInput);
                         
               
                

    // insertDataArray();  console.log("Реверсивный массив: "+insertDataArray());
    break;
    case 'null' : console.log(cod); 
    break;
    default: break;
}