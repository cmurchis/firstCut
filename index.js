const mullet = document.getElementById('mullet');
const scissors = document.getElementById('scissors');

const toggleQ = (x, y) => {
  if(x.style.display == 'inline'){
  x.style.display = 'none';
  y.style.display = 'inline';
  }else{
    x.style.display = 'inline';
  y.style.display = 'none';
  }

};
setInterval(toggleQ, 3000, mullet, scissors)


window.addEventListener('scroll', function() {
  
  const book = document.getElementById('navi')
  if (window.scrollY > 10) { // Adjust this threshold as needed
    navi.classList.add('sticky');
  } else {
    navi.classList.remove('sticky');
  }
});

var pos = 0;
let num = 1;
function move(x, y) {
 while(y < 4){
  let kid = document.getElementById(`kid`);
  kid.setAttribute('src', `img/boi${y}`);
  kid.setAttribute('background-image', `img/boi${y}`)
  kid.hidden = false
  if(x == 40) {
    kid.classList.remove("tumble");
    kid.hidden = true;
    y++
    kid.removeAttribute('src')
} else {
  x++
  kid.classList.add('tumble')  
  kid.style.paddingLeft = x + '%;';
    }

  }
}

setInterval(move(), 100, pos, num)