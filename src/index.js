import User from "./user";
import Developer from "./developer";

const user = new User("Иван", "Петров");
user.sayHi();

const developer = new Developer("Denis", "Mylnikov");
document.getElementById("developer").innerText = `Этот сайт разработал ${developer.fullName()}`;
document.getElementById("user").innerText = `${user.fullName()}`;

document.getElementById("developer").addEventListener("click", function () {
   alert(new Date());
});