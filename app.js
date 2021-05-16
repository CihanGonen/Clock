const NAME = prompt('Please enter your name : ');
const GUN = new Date;
let gun = GUN.getUTCDay();
let gunler = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const setTime = ()=>{
  const DATE = new Date;
  DATE.setTime(DATE);
  document.querySelector('.hours').innerHTML = `${ (String(DATE.getHours())).length===1 ? '0'+DATE.getHours()+':'  : DATE.getHours()+':'}`;
  document.querySelector('.minutes').innerHTML = `${ (String(DATE.getMinutes())).length===1 ? '0'+DATE.getMinutes()+':' : DATE.getMinutes()+':'}`;
  document.querySelector('.seconds').innerHTML = `${ (String(DATE.getSeconds())).length===1 ? '0'+DATE.getSeconds() : DATE.getSeconds() }`;
}

document.querySelector('.welcome').textContent=`
${NAME ? `Welcome ${NAME}. I hope you are having a great day !` : `Welcome Anonym. I hope you are having a great day !` }
`;

document.querySelector('.gun').textContent=`  ${gunler[gun]}`;

const timer =()=>{ setInterval(function(){setTime()},1000) };
setTime();
timer();

