// JavaScript to handle button click and show sections
document.getElementById('startButton').addEventListener('click', function() {
  // Show section2 when the "Start" button is clicked
  document.getElementById('section2').classList.add('show');
  
  // Hide the start button after it's clicked
  document.getElementById('startButton').style.display = 'none';
});

// If you want section3 to show after section2
document.querySelector('#section2 .arrow-link').addEventListener('click', function() {
  document.getElementById('section3').classList.add('show');
});

// If you want section4 to show after section3
document.querySelector('#section3 .arrow-link').addEventListener('click', function() {
  document.getElementById('section4').classList.add('show');
});
