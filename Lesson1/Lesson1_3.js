// =====  ЗАДАНИЕ 3 ======
// Необходимо написать иерархию классов вида:
//      Human -> Employee -> Developer
//      Human -> Employee -> Manager
// Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков),
//      а также методы по удалению и добавлению разработчиков.
// Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера
//      (имеется в виду возможность назначить другого менеджера).
// У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата).
// У класса Employee должны присутствовать параметры: salary (число), department (строка).
// В классе Human должен присутствовать метод displayInfo,
//      который возвращает строку со всеми параметрами экземпляра Human.
// В классе Employee должен быть реализован такой же метод (displayInfo),
//      который вызывает базовый метод и дополняет его параметрами из экземпляра Employee.


class Human {

    constructor(id, name='', age=0, dateOfBirth=null){
        this.id=id;
        this.SetName(name);
        this.SetAge(age);
        this.SetDateOfBirth(dateOfBirth);
    }

    SetName(name=''){
        this.name = name;
    };
    SetAge(age=0){
        this.age = age;
    }
    SetDateOfBirth(dateOfBirth=null){
        this.dateOfBirth = dateOfBirth===null?new Date(0):dateOfBirth;
    }

    GetID(){
        return this.id
    }
    GetName(){
        return this.name;
    }
    GetAge(){
        return this.age;
    }
    GetDateOfBirth(){
        return this.dateOfBirth;
    }

    displayInfo(){
        return  'ИД: '+this.id+'<br>' +
                'ИМЯ: '+this.name+'<br>'+
                'Дата рождения: '+this.dateOfBirth+'<br>';
    }
}

class Employee extends Human{

    constructor(id, name='', age=0, dateOfBirth=null, salary=0, department=''){
        super(id, name, age, dateOfBirth);
        this.SetSalary(salary);
        this.SetDepartment(department);
    }

    SetSalary(salary=0){
        this.salary = salary;
    };
    SetDepartment(department=''){
        this.department = department;
    }

    GetSalary(){
        return this.salary
    };
    GetDepartment(){
        return this.department
    };

    displayInfo(){
        return super.displayInfo()+
            'ЗАРПЛАТА: '+this.salary+'<br>'+
            'ДЕППАРТАМЕНТ: '+this.department+'<br>'
            ;
    }
}

class Manager extends Employee{

    constructor(id, name='', age=0, dateOfBirth=null, salary=0, department='', developers=[]){
        super(id, name, age, dateOfBirth, salary, department);
        this.developers = [];
        for(let i in developers){
            this.AddDeveloper(developers[i]);
        }
    }

    AddDeveloper(developer){
        this.developers[this.developers.length] = developer;
    }
    DeleteDeveloper(developer){

        if (typeof developer === 'number'){
            for(let i in this.developers){
                if (this.developers[i].id = developer){
                    this.developers.splice(i,1);
                    return true;
                }
            }
            return false;
        }
        if (typeof developer === 'object'){
            for(let i in this.developers){
                if (this.developers[i].id = developer.id){
                    this.developers.splice(i,1);
                    return true;
                }
            }
            return false;
        }

        return false;
    }

    displayDevelopers(){
        let content='';
        for (let i in this.developers){
            content += (Number(i)+1) + ") " +this.developers[i].name+'<br>';
        }
        return content;
    }
    displayInfo(){

        return "МЕНЕДЖЕР<br>"+super.displayInfo() + this.displayDevelopers();
    }

}

class Developer extends Employee{

    constructor(id, name='', age=0, dateOfBirth=null, salary=0, department='', manager=null){
        super(id, name, age, dateOfBirth, salary, department);
        this.manager=null;
        this.SetManager(manager);



    }

    SetManager(manager=null){
        if (this.manager!==null){
            this.manager.DeleteDeveloper(this.id);
        }
        this.manager = manager;
        if (this.manager!==null){
            this.manager.AddDeveloper(this);
        }
    }

    displayManager(){
        if (this.manager===null) return "МЕНЕДЖЕР: не назначен<br>";
        return 'МЕНЕДЖЕР: '+this.manager.name+'<br>';
    }
    displayInfo(){

        return "РАЗРАБОТЧИК<br>"+super.displayInfo()+ this.displayManager();
    }

}

function btnTask3(){

    let Result = document.getElementById("task3_result");
    Result.innerHTML = "";


    let Men1 = new Manager(1, "Иван", 31, null, 100,'WEB', null);
    let Dev1 = new Developer(2, "Петр", 22, null, 70,'WEB', null);
    let Dev2 = new Developer(3, "Кирилл", 23, null, 50,'WEB', Men1);
    let Men2 = new Manager(4, "Татьяна", 31, null, 150,'WEB', null);
    Men1.developers[0].SetName('Павел');
    Dev2.SetManager(Men2);
    Dev1.SetManager(Men2);


    Result.innerHTML += Men1.displayInfo();
    Result.innerHTML += '<hr>';
    Result.innerHTML += Men2.displayInfo();
    Result.innerHTML += '<hr>';
    Result.innerHTML += Dev1.displayInfo();
    Result.innerHTML += '<hr>';
    Result.innerHTML += Dev2.displayInfo();
    Result.innerHTML += '<hr>';

}
