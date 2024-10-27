const mullet = document.getElementById('mullet');
const scissors = document.getElementById('scissors');

const toggleQ = (x, y) => {
  if(x.style.display == 'block'){
  x.style.display = 'none';
  y.style.display = 'block';
  }else{
    x.style.display = 'block';
  y.style.display = 'none';
  }

};
setInterval(toggleQ, 3000, mullet, scissors)


window.addEventListener('scroll', function() {
  const button = document.getElementById('myButton');
  if (window.pageYOffset > 100) { // Adjust this threshold as needed
    button.classList.add('sticky');
  } else {
    button.classList.remove('sticky');
  }
});


