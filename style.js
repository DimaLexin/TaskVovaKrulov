
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
                function rebuild (inputTrashs) {
                    let rebuildObj = {
                        numbers: [],
                        strings: [],
                        objects: []
                    };
                    inputTrashs.forEach((inputTrash, index)=>{
                        let inputElem = inputTrashs[index];
                        if (inputElem instanceof Object) {
                            rebuildObj.objects.push(inputElem);
                        } else if (!isNaN(inputElem)) {
                            rebuildObj.numbers.push(inputElem);
                        } else {
                            rebuildObj.strings.push(inputElem);
                        } 
                    });
                return rebuildObj;
                };

                function trackArray (inputArrs, point1, point2) {
                    let rangeArrays = [];
                    if (point1 > point2) {
                        [point1 ,point2] = [point2, point1];
                    };

                    inputArrs.forEach((inputArr,index)=> {
                        if ((inputArr>=point1) && (inputArr<=point2)) {
                            rangeArrays.push(inputArr);
                        } 
                    });
                    return rangeArrays;
                };

let cod = prompt
('Введите код задания\n 1-На вход поступает массив, вывести массив, удалив неуникальные значения\n 2-На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать\n 3-На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект, где ключами являются нулевой индекс вложенных массивов, а значениями являются элементы с индексом один.\n 4-На вход поступает объект, вывести сумму числовых свойств объекта.\n 5-На вход поступает массив с числами, вывести среднее арифметическое элементов массива\n 6-Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями numbers, strings и objects, содержащими массив со значениями, соответствующими названию поля.\n 7-Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива, значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого)\n 8- Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false\n Esc-Выход');
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
    case '6' :  let inputDurtyArray = [1,{ age: 19, year:1995, surname: "Ivanov"}, 2,"папа", {car: "lada", model: "Kalina", year:1995, price: 5000},"мама",3 ];
                console.log(inputDurtyArray);             
                const inputCleanArray = rebuild(inputDurtyArray);
                console.log(inputCleanArray); 
    break;
    case '7' :                
                const checkRange = elem => {
                    let newRange;
                      while (isNaN(parseFloat(elem))) {
                        alert ("Вы ввели не число!!!");
                        elem = prompt ("Введите границу диапазона");
                      }
                      return newRange = Number(elem);
                } 
        
                let range = prompt ("Введите границу диапазона");
                let firstRange = checkRange(range);
                console.log(firstRange);

                range = prompt ("Введите границу диапазона");
                let secondRange = checkRange(range);
                console.log(secondRange);
            
                let NewArr =  insertData ();
                console.log(NewArr);
                console.log(trackArray(NewArr,firstRange,secondRange));               
    break;
    case '8' : 
                let firstStrArr = [];
                let secondStrArr = [];
                const inputStr = elem => {
                    while ((!isNaN(parseFloat(elem))) || (elem == null)) {
                        elem = prompt("Введите строку");
                    }
                    return elem.toLowerCase(); 
                };          

                let firstStr = inputStr(prompt("Введите строку"));
                let secondStr = inputStr(prompt("Введите строку"));
                firstStrArr = firstStr.split('');
                console.log(firstStrArr);
                secondStrArr = secondStr.split('');
                console.log(secondStrArr);

                
                if (firstStrArr.length !== secondStrArr.length ) {
                    console.log( "Вводимые слова разной длины, а значит не они не могут быть анаграммами");  
                } else {
                    firstStrArr.forEach((firstStrArrElem, index)=> {
                        let findIndex = secondStrArr.indexOf(firstStrArrElem);
                            if (findIndex ==-1) {
                                console.log(`Вводимые слова не могут быть анаграммами, т.к во втором слове отсутсвует буква  ${firstStrArrElem} `);
                                return; 
                            }  else secondStrArr.splice(findIndex,1);                     
                    });
                    console.log(`Вводимые слова анаграммы`);
                };
                
                
    break;
    case 'null' : console.log(cod); 
    break;
    default: break;
}