// function Person(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
//
//     this.getBirthYear = () => this.dob.getFullYear()
//     this.getDay = () => this.dob.getDay()
//     // this.getFullName = () => {
//     //     return `${this.firstName} ${this.lastName}`
//     // }
//     this.getFullName = () => `first name: ${this.firstName} last name: ${this.lastName}`
// }

// const person1 = new Person('Moti', 'Katz', '4-3-1980')
// const person2 = new Person('Rina', 'Koen', '4-3-1988')

// console.log(person2)
// console.log(person1)
// console.log(person1.dob)
// console.log(person1.getDay())
// // console.log(person1.dob.getFullYear())
// console.log(person1.getBirthYear())

// console.log(person1.getFullName())
// console.log(person2.getFullName())

/***************************************/

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
//
// }
//
// Person.prototype.getBirthYear = () => this.dob.getFullYear()
// Person.prototype.getDay = () => this.dob.getDay()
// Person.prototype.getFullName = () => `first name: ${this.firstName} last name: ${this.lastName}`
//
// const person1 = new Person('Moti', 'Katz', '4-3-1980')
//
// console.log(person1.getDay())
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())

/***************************************/

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dob = new Date(dob)
//     }
//
//     getBirthYear() {
//         return this.dob.getFullYear()
//     }
//
//     getFullName() {
//         return `first name: ${this.firstName} last name: ${this.lastName}`
//     }
// }
//
// const person1 = new Person('Moti', 'Katz', '4-3-1980')
//
// // console.log(person1.getDay())
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())

/***************************************/

// console.log(window)
// console.log(window.innerWidth)
// console.log(window.innerHeight)
// window.localStorage['key'] = 'ereh'
// console.log(window.localStorage)
// console.log(window.localStorage['key'])

/***************************************/

// console.log(document.getElementById('my-form'))

// const form = document.getElementById('my-form')
// console.log(form)

// const form = document.querySelector('#my-form')
// console.log(form)
// const ul = document.querySelector('.item')
// console.log(ul)
// const my_input = document.querySelector('input')
// console.log(my_input)
//
// const items = document.getElementsByClassName('item')
// const items_tags = document.getElementsByTagName('li')
// const items_query = document.querySelectorAll('.item')
// console.log(items)
// console.log(items_tags)
// console.log(items_query)
//
// items_query.forEach(item => console.log(item) )

/***************************************/

// const ul = document.querySelector('.items')
// console.log(ul)
//
// // ul.remove()
//
// // ul.lastElementChild.remove()
//
// ul.lastElementChild.textContent = '<h1>This is last element</h1>'
// ul.lastElementChild.innerHTML = '<h1>This is last element</h1>'
//
// const btn = document.querySelector('.btn')
// btn.style.background = 'red'
// btn.style.color = 'white'

/***************************************/

// const btn = document.querySelector('.btn')
//
// // btn.addEventListener('click', (e) => {
// //     e.preventDefault()
// //     console.log('click')
// //     console.log(e)
// //     console.log(e.target)
// //     console.log(e.target.className)
// // })
//
// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>This is last element</h1>'
// })
//
// btn.addEventListener('mouseover', (e) => {
//
// })
//
// btn.addEventListener('mouseout', (e) => {
//
// })

/***************************************/

const myForm = document.querySelector('.my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('.users')

const onSubmit = (e) => {
    e.preventDefault()
    if (nameInput.value === '' || emailInput.value === '' ){
        console.log('error')
        msg.innerHTML = 'Please enter all fields'
        msg.classList.add('error')
        // setTimeout(() => {
        //     msg.innerHTML = ''
        //     msg.classList.remove('error')
        // }, 3000)
    } else {
        console.log('success')
        const li = document.createElement('li')
        li.innerHTML = `${nameInput.value}: ${emailInput.value}`
        userList.appendChild(li)
        // clean fields
        nameInput.value = ''
        emailInput.value = ''

        msg.innerHTML = ''
        msg.classList.remove('error')

    }
}

myForm.addEventListener('submit', onSubmit)