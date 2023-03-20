
    function insertData () {
        let elem = prompt ('Введите элемент');
        let inputArrs =[];
            while (elem !== null) {
                inputArrs.push(elem);
                    elem = prompt ('Введите элемент');
                }
                console.log('Введенные данные:   '+inputArrs);
        return inputArrs;
     };

     function insertDataArray (elem) {
        let arrInput = []; 
        arrInput.length = 2;
            for (let i = 0; i <= 1; i++){
                arrInput[i] = elem;
                elem = prompt ('Введите элемент массива');
            }
            return arrInput;
        } ; 
               
     function findIndex (myArray, numberElemarray, indexArray) {
                    let index = myArray.indexOf(myArray[numberElemarray],indexArray);
                        while (index > 0) {
                            myArray.splice (index,1);
                            index = myArray.indexOf(myArray[numberElemarray],indexArray);                        
                        };
                };

let cod = prompt
('Введите код задания\n 1-На вход поступает массив, вывести массив, удалив неуникальные значения\n 2-На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать\n 3-На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект, где ключами являются нулевой индекс вложенных массивов, а значениями являются элементы с индексом один.\n 4-На вход поступает объект, вывести сумму числовых свойств объекта.\n 5-На вход поступает массив с числами, вывести среднее арифметическое элементов массива\n 6-6. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями numbers, strings и objects, содержащими массив со значениями, соответствующими названию поля.\n Esc-Выход');
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
     case '3' :     
                    let resultArray =[];
                    let objArray = {};
                    let stop;

                    function fillArray () {
                        let arrInput = []; 
                        let resultArray = []; 
                        arrInput.length = 2;
                        let elem;
                        for (let i = 0; i <= 1; i++){
                            elem = prompt ('Введите элемент массива');
                            arrInput[i] = elem;
                            console.log("Получен элемент   "+arrInput[i]); 
                        }
                            console.log(arrInput);
                            return arrInput;
                    }  

                    resultArray.push(fillArray(resultArray));
                    alert ('Введите элемент следующего массива');
                    resultArray.push(fillArray(resultArray));
                    stop = prompt ('Если будет еще массив нажмите любую кнопку кроме Esc');
                    while (stop!==null) {
                        resultArray.push(fillArray(resultArray));
                        stop = prompt ('Если будет еще массив внесите первый его элемент, иначе ESC');
                    }
                   
                    for (key in resultArray) {
                        objArray[resultArray [key][0]] = resultArray [key][1];                  
                    }
                    console.log("Полученный объект   "+objArray);
                            
    break;

    case '4' :  let inputObj ={};
                let number = 0,
                    summ= 0;
                let userInput =prompt("Введите ЛЮБЫЕ(строчные и цифровые) значение:");
                while (userInput !== null) {
                    let inputAsNumber = parseFloat(userInput);

                    if (!isNaN(inputAsNumber)) {
                        inputObj[`key${number}`] = inputAsNumber;
                        summ = summ + inputObj[`key${number}`];
                    } else {
                        inputObj[`key${number}`] = userInput;
                    }
                    number++;
                    userInput =prompt("Введите значение:");
                }
                console.log(inputObj); 
                console.log(`Сумма численных св-в объекта составила: ${summ}`); 

    break;
    case '5' :  let result = 0;
                let inputDigits = insertData();
                inputDigits.forEach((inputDigit,index)=> {
                    result = result + Number(inputDigits[index]);
                });
                result = result/inputDigits.length;
                console.log(`Среднее значение элементов массива  ${result}`);         
    break;
    case '6' :           
    break;
    case 'null' : console.log(cod); 
    break;
    default: break;
}