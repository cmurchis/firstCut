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


