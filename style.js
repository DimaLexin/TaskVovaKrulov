
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

let cod = prompt
('Введите код задания\n 1-На вход поступает массив, вывести массив, удалив неуникальные значения\n 2-На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать\n Esc-Выход');
switch (cod) {
    case '1' :  let newArrs =insertData(); 
                
    break;
    case '2' : 
                // let elem2 = prompt ('Введите элемент массива');
                // let newArrs2 =[];
                // let newArrs2Revers =[];
                // let elemArray;
                // let i=0;
                //     while (elem2 !== null) {
                //             newArrs2.push(elem2);
                //             elem2 = prompt ('Введите элемент массива');
                //         }
                //         console.log('исходный  '+ newArrs2);

                //         while (newArrs2.length) {
                //             newArrs2Revers.unshift(newArrs2.shift());
                //         }                                 
                //     console.log('получивш' + newArrs2Revers);
               
    break;
    case '3' : console.log(cod); 
    break;
    case 'null' : console.log(cod); 
    break;
    default: break;
}