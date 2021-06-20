'use strict';

    let memo,
        timeOfDay,
        weekDay,
        time,
        loseDay,
        remainDay;

    const date = new Date();
    
    function getTimeOfDay(){
       let day = date.getHours();
        if (day <= 6) {
            timeOfDay = 'ночь';
        } else if (day <= 11) {
            timeOfDay = 'утро';
        } else if (day <= 16) {
            timeOfDay = 'день';
        } else if (day <= 21) {
            timeOfDay = 'вечер';
        } else {
            timeOfDay = 'ночь';
        } 
    } getTimeOfDay();
    
    function getWeekDay() {
        weekDay = date.getDay();
    if (weekDay === 0) {
        weekDay = 'воскресенье';
    } else if (weekDay === 1) {
        weekDay === 'понедельник';
    } else if (weekDay === 2) {
        weekDay === 'вторник';
    } else if (weekDay === 3) {
        weekDay === 'среда';
    } else if (weekDay === 4) {
        weekDay === 'четверг';
    } else if (weekDay === 5) {
        weekDay === 'пятница';
    } else if (weekDay === 6) {
        weekDay === 'суббота';
    }
    }
    getWeekDay();
    
    time = date.toLocaleTimeString('en');
   
    function getDayRemaining() {
    
    const dateStop = new Date(2021, 11, 31).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        remainDay = Math.floor(timeRemaining / 60 / 60 / 24);
        loseDay = remainDay;  
    }
    getDayRemaining();
    
    memo = `Добрый ${timeOfDay}
    Сегодня: ${weekDay}
    Текущее время: ${time} 
    До нового года осталось ${loseDay} дней`

    document.body.innerHTML = `<p class=box>${memo}</p>`;
    const text = document.querySelector('.box');
    text.style.cssText = `height:400px; width:250px; background:red`;
