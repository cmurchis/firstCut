const mullet = document.getElementById('mullet');
const scissors = document.getElementById('scissors');
const scheduling

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
  
  const book = document.getElementById('book')
  if (window.scrollY > 100) { // Adjust this threshold as needed
    book.classList.add('sticky');
  } else {
    book.classList.remove('sticky');
  }
});


