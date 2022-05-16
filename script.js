//№1

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let res = i * j
        document.write(i + " * " + j + " = " + res)
        document.write("<br>")
    }
    document.write("<br>")
}


//№2

let num 
num = prompt("Введите любое число от 1 до 5")
switch(num) {
    case '1': 
        document.write("Вы ввели 1")
    break
    case '2':
        document.write("Вы ввели 2")
        break
    case '3': 
        document.write("Вы ввели 3")
        break
    case '4':
        document.write("Вы ввели 4")
        break
    case '5':
        document.write("Вы ввели 5")
        break
    default:
        document.write("Неправильное число")
}

