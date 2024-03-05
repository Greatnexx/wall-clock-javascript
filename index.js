const hourEl =document.querySelector('.hour');
const minuteEl =document.querySelector('.minute');
const secondEl =document.querySelector('.second');

const startClock =() => {
    const currentTime =new Date();
    setTimeout((startClock) , 1000);
    const getHour = currentTime.getHours();
   const getminute =currentTime.getMinutes();
    const getSecond =currentTime.getSeconds();
   const hourChange =(getHour/12) * 360;

    const minuteChange=(getminute/60) * 360;
    const secondChange =(getSecond/60) * 360;
    hourEl.style.transform =`rotate(${hourChange}deg)`;
    minuteEl.style.transform =`rotate(${minuteChange}deg)`;
    secondEl.style.transform =`rotate(${secondChange}deg)`;
 console.log(getHour, getminute, getSecond)
}
startClock();
