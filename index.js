const mullet = document.getElementById('mullet');
const scissors = document.getElementById('scissors');

const toggle = (x, y) => {
  if(x.hidden){
  x.hidden = false;
  y.hidden = true;
  }else{
    x.setAttribute('hidden', false) ;
    y.setAttribute('hidden', true);
  }

};

setInterval(toggle, 3000, mullet, scissors);


const evenE = document.getElementById('even')
const oddE = document.getElementById('odd')
const evenImg = document.getElementById('evenImg');
const oddImg = document.getElementById('oddImg');
const gifts = document.getElementById('gifts')

const toggleElement = () => {
  if(gifts.hidden == true){
    gifts.hidden = false;
  }else{
    gifts.hidden = true;
  }
}


function showHide() {
  if(gifts.hidden){
    gifts.hidden = false;
  }else{
    gifts.setAttribute('hidden', 'true')  
  }
}

function animate(){
  if(oddE.hidden == true){
    oddE.hidden = false;
    evenE.hidden = true;
   
  }else{
    evenE.hidden = false;
    oddE.hidden = true;
   
  }
}

setInterval(animate, 5000)
