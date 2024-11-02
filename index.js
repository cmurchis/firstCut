const exp = document.getElementById('exp')
const mullet = document.getElementById('mullet');
const scissors = document.getElementById('scissors');
const arr = ['img/bob.png', 'img/fade.png', 'img/fade2.png', 'img/fade3.png', 'img/fade4.png', 'img/hawk.png', 'img/crew.png']
const toggle = (x, y, z, a) => {
 if(x.hidden == false){
  x.hidden = true
  y.hidden = false
  
  z.setAttribute('src', a[Math.floor(Math.random() * 6)] )
 }else{
  x.hidden = false;
  y.hidden = true;
  z.setAttribute('src', a[Math.floor(Math.random() * 6)])
 }

}

setInterval(toggle, 3000, mullet, scissors, exp, arr);


const evenE = document.getElementById('even')
const oddE = document.getElementById('odd')
const evenImg = document.getElementById('evenImg');
const oddImg = document.getElementById('oddImg');
const gifts = document.getElementById('gifts')




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

//  close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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
