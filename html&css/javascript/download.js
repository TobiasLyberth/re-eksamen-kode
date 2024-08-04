// Dette er JavaScript for download kanppen, dem begge to
document.addEventListener('DOMContentLoaded', function() {
    
    // Find alle download-knapper
    let downloadButtons = document.querySelectorAll('.downloadKnap01');
    
    // Tilføj en klik-event listener til hver knap
    downloadButtons.forEach(button => {
      button.addEventListener('click', function() {
        alert('Du har downloadet appen!');
      });
    });
  });


  // omg det er en nummer to, fordi den ikke ville virke kombineret
document.addEventListener('DOMContentLoaded', function() {
    
    let downloadButtons = document.querySelectorAll('.downloadKnap02');
    
    downloadButtons.forEach(button => {
      button.addEventListener('click', function() {
        alert('Du har downloadet appen!');
      });
    });
  });