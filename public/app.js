const button = document.querySelector('.hours')
const daysButton = document.querySelector('.days')
const done = document.querySelector('.done')
const displayDate = document.getElementById("current_date")


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

const morning = () => {
    button.value = "Mornings"
    console.log(button)
    return "Morning"
}

const afternoon = () => {
    button.value = "Afternoon"
    console.log(button)
    return "Afternoon"
}

const evening = () => {
    button.value = "Evening"
    console.log(button)
    return "Evening"
}

const strike = () => {

     done.style.setProperty('text-decoration', 'line-through');
    
  }
  



displayDate.innerHTML = day



