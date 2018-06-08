// =====  ЗАДАНИЕ 2 ======
// Написать функцию calculateArea, которая будет принимать параметры для вычисления площади
// (можете выбрать конкретную фигуру или, основываясь на переданных параметрах,
// выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры)
// и возвращать объект вида: { area, figure, input }
// (где area – вычисленная площадь,
//      figure – название фигуры, для которой вычислялась площадь,
//      input – входные параметры, по которым было произведено вычисление
// ).

function calculateAreaDefoult() {

    return 0;

}
function calculateAreaRect(input) {

    if (input===null) return 0;
    let [a =0 ,b = 0] = input;

    return a*b;

}
function calculateAreaSquare(input) {

    if (input===null) return 0;
    let [a = 0] = input;

    return a*a;

}
function calculateAreaCircle(input) {

    if (input===null) return 0;
    let [r =0] = input;

    return 2*3.14*r;

}
function calculateAreaTriangle(input) {

    if (input===null) return 0;
    let [a=0, b=0, c=0] = input;
    if (a===0||b===0||c===0) return 0;

    let p = (a+b+c)/2;

    return Math.sqrt( p * (p-a) * (p-b) * (p-c) );

}
function calculateAreaFunction(func=null, figure=null, input=null) {
    return {
        area: func(input),
        figure: figure,
        input: input,
    };
}
function calculateArea(figure=null, input=null) {
    
    if (figure===null)      return calculateAreaFunction(calculateAreaDefoult, figure, input);
    if (figure==='Rect')    return calculateAreaFunction(calculateAreaRect, figure, input);
    if (figure==='Square')  return calculateAreaFunction(calculateAreaSquare, figure, input);
    if (figure==='Circle')  return calculateAreaFunction(calculateAreaCircle, figure, input);
    if (figure==='Triangle')return calculateAreaFunction(calculateAreaTriangle, figure, input);

    return calculateAreaFunction(calculateAreaDefoult, figure, input);
    
}

function WriteAreaObj(AreaObj, AreaItem) {

    let AreaText =  'Площадь: ' + AreaObj.area+'<br>Фигура: ' + AreaObj.figure + '<br>';
    if (AreaObj.input !== null){

        for(let i in AreaObj.input){
            AreaText += "param"+(Number(i)+1)+"= "+AreaObj.input[i]+";<br>";
        }

    }
    AreaItem.innerHTML = AreaText;


}

function btnTask2(){
    let AreaResult = document.getElementById("task2_result");
    AreaResult.innerHTML = "";

    let Selected = document.getElementById("task2_figure").options;
    let index = Selected.selectedIndex;
    let figure = Selected[index].value;

    let InputText = document.getElementById("task2_input").value;
    let input = InputText.split(" ");
    for (let i in input){
        input[i] = Number(input[i]);
    }

    let AreaObj = calculateArea(figure, input);

    WriteAreaObj(AreaObj,AreaResult);


}
