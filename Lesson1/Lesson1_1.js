// =====  ЗАДАНИЕ 1 ======
// Написать функцию loop, которая будет принимать параметры:
//     times (значение по умолчанию = 0),
//     callback (значение по умолчанию = null)
// и будет в цикле (times раз), вызывать функцию callback.
// Если функция не передана, то цикл не должен отрабатывать ни разу.
// Покажите применение этой функции.

function callback_func() {
    let result = document.getElementById("task1_result");
    let value = result.innerHTML===null?"":result.innerHTML;
    result.innerHTML = value +"callback <br>";
}
function loop(times = 0, callback = null) {

    if (callback===null) return;
    for (let i=0; i<times; i++){
        callback();
    }

}

function btnTask1(){
    let result = document.getElementById("task1_result");
    result.innerHTML = "";

    let times = document.getElementById("task1_input_times").value;
    loop(times, callback_func);
}
