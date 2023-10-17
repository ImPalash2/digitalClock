let time = document.querySelector('#time');
let date = document.querySelector('#date');
setInterval(()=>{  
  const day = new Date();
  let hour = day.getHours();
  let minit = day.getMinutes();
  let sec = day.getSeconds();
  let day_night = 'AM';
  if(hour > 12){
    hour = hour - 12;  
  }
  if(hour >= 12){
    day_night = 'PM';
  }
  if(hour < 10){
    hour = '0' + hour;
  }
  if(minit < 10){
    minit = '0' + minit;
  }
  if(sec < 10){
    sec = '0' + sec;
  }
  time.textContent = hour + " : " + minit + " : " + sec + " " + day_night;

  const f = new Intl.DateTimeFormat('en-us',{
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  date.textContent = f.format(day);
});
