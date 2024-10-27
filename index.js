const mullet = document.getElementById('mullet');
const scissors = document.getElementById('scissors');

const toggleQ = () => {
  if(mullet.style.top > 0){
  mullet.style.top -= 100;
  scissors.style.top += 100;
  }else{
    mullet.style.top += 100;
  scissors.style.top -= 100;
  }

};
setInterval(toggleQ(), 2000)




