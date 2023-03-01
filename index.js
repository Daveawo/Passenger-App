// document.getElementsById("count-el").innerText = 5
// let firstBatch = 5 
// let secondBatch = 7

// let myAge = 16
// let humanDogRatio= 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoints = 50
// bonusPoints = bonusPoints + 100
// bonusPoints = bonusPoints - 20
// bonusPoint9s = bonusPoints + 70
// console.log(bonusPoints)

// let lapscompleted = 0
// lapscompleted = lapscompleted + 1
// function lapscompleted (){
//     console.log(lapscompleted * 3)
// }
// lapscompleted()
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}







// let welcomeEl = document.getElementById("welcome-el")
// let namee = "David Awo"
// let greeting = "Hi "
// welcomeEl.innerText = greeting + namee




// function increment() {
//     console.log("button was clicked")
// }
// function mynumb() {
//     console.log(42)
// }

// mynumb()
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function tlap() {
//     console.log(lap1 + lap2 + lap3)

// }
// tlap()

// let message = "You have three new notification"
// console.log(message)
// let username = "per"
// let message = "you have three notification"
// messagetouser = (message + "," + username + "!")
// console.log(messagetouser)
// let greeting = "Hi, my name is"
// let names = "David"
// let myGreeting = greeting + names
// console.log(myGreeting)
// 9
// 24
// 51
// 1