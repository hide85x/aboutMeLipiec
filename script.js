

function sendEmail(){
  const name= document.getElementById('name').value;
  const email= document.getElementById('email').value;
  const msg= document.getElementById('msg').value;
  window.location.href=`mailto:hide85x@gmail.com?subject=${name} - ${email}&body=${msg}`
}