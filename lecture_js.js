/* console.log("Hello, students!")
 console.warn("aaaaaa our warning")
 console.error("THIS IS OUR ERROR")
 */

// const x = 123;
// console.log(x);
// x = 300;
// console.log(x);

// const name = 'John'
// console.log(typeof name)
// const age = 30
// console.log(typeof age)
// const rating = 4.5
// console.log(typeof rating)
// const isCool = true
// console.log(typeof isCool)
// const x = null
// console.log(typeof x)
// const y = undefined
// console.log(typeof y)
// let z
// console.log(typeof z)
// z = 12
// console.log(typeof z)


/***********************************/
// let x = 2
// let y = 3

// x = x + y
// x += y

// x = x - y
// x -= y

// x = x * y
// x *= y

// x = x / y
// x /= y

// x = x % y
// x %= y

// x = x ** y
// x **= y
// console.log(x)

/***********************************/

// const name = 'Sara'
// const age = 100
//
// console.log('My "name" is ' + name + ' and I am ' + age + 'years old')
//
// console.log(`My "name" is ${name} and I am ${10 + 20} years old.`)
//
// 'aa'
//
// "aa"
//
// `aa`

/***********************************/

// const s = "Hello, Olam, Students, Teachers, etc.";
//
// console.log(s.length)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0, 4))
// console.log(s.substring(0, 4).toUpperCase())
// console.log(s.split(''))
// console.log(s.split(', '))


/***********************************/

// const numbers = new Array(1, 2, 3, 4)
// const numbers = [1, 2, 3, 4, 5, 6, 7]
// console.log(numbers)
//
// const my_list = ['apples', 3, true]
//
// console.log(my_list)
//
// console.log(my_list[0])

// const fruits = ['apples', 'bananas', 'oranges']

// fruits[4] = 'grapes'

// fruits.push('grapes')
// fruits.unshift('melons')
//
// fruit_1 = fruits.pop()
// console.log(fruits)
// console.log(fruit_1)

// console.log(typeof fruits)
// console.log(Array.isArray(fruits))

// console.log(fruits.indexOf('melons'))


/***********************************/

// const x = 10
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', `sports ${x}`],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
//
// person.email = 'joe@gmail.com'
//
// console.log(person)
// console.log(person.firstName)
// console.log(person.address.city)
// console.log(person.bla)

// const {firstName, lastName, address: {state}} = person;

// const firstName = person.firstName
// const lastName = person.lastName
// const state = person.address.state

// console.log(typeof firstName)
// console.log(lastName)
// console.log(state)




// const {firstName, lastName, address: {city}} = person

/***********************************/


const todos = [
    {
        id: 1,
        text: 'do homework',
        isCompleted: true,
    },
        {
        id: 2,
        text: 'do dishes',
        isCompleted: true,
    },
        {
        id: 3,
        text: 'meeting',
        isCompleted: false,
    },
]

// console.log(todos)
//
// const todosJSON = JSON.stringify(todos)
//
// console.log(todosJSON)
// console.log(typeof todosJSON)
//
// const returned_todos = JSON.parse(todosJSON)
//
// console.log(returned_todos)

/***********************************/

// for (let i=0; i < 10; i++){
//     console.log(`For loop: number - ${i}`)
// }

// let i = 0
// while (i < 10){
//     console.log(`While loop: number - ${i}`)
//     i ++
// }

// for(let i=0; i < todos.length; i++){
//     console.log(todos[i].text)
// }
//
// console.log('--------')
//
// for (let todo of todos) {
//     console.log(todo.text)
// }
//
// console.log('--------')
//
// todos.forEach(function (todo) {
//     console.log(todo.text)
// })
//
// console.log('--------')
//
// const todoText = todos.map(function (todo) {
//     return todo.text
// })
//
// console.log(todoText)
//
// function myfunc(todo) {
//     return todo.isCompleted
// }
//
// const myTodoList = todos.filter(myfunc)
// console.log(myTodoList)
//
// const todoCompletedText = todos.filter(myfunc).map(function (todo) {
//     return todo.text
// })
//
// console.log(todoCompletedText)

/***********************************/

// console.log(10 == '10')
// console.log(10 === '10')
//
// const x = 5
// const y = 100
// if(x > 4 && y > 11){
//     console.log('success')
// } else {
//     console.log('not success')
// }

// const x = 11
// const color = x > 10 ? 'red': 'blue'
// console.log(color)

// const color = 'nwijfneijv'
//
// switch (color) {
//     case 'red':
//         console.log('REEEED')
//         break
//     case 'blue':
//         console.log('sad')
//         break
//     default:
//         console.log('here we are')
//         break
// }

/***********************************/

// function addNums(num1, num2) {
//     console.log(num1 + num2)
// }
// addNums(1, 30)

// function addNums(num1=1, num2=2) {
//     console.log(num1 + num2)
// }
// addNums(12)

// function addNums(num1=1, num2=2) {
//     return num1 + num2
// }
// console.log(addNums())

const addNums = (num1=1, num2=2) => {
    return num1 + num2
}

const addNums2 = (num1=1, num2=2) => num1 + num2

const addNums3 = num1 => num1 + 5

console.log(addNums())
console.log(addNums2())
console.log(addNums3(3))

todos.forEach(todo => console.log(todo.text))











