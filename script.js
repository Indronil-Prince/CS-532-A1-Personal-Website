//js function for dark mode switch

document.getElementById("toggle-theme").addEventListener("click", function() {
  // Get the body element
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  
  // Toggle the "dark" class on the body
  body.classList.toggle("dark");
  header.classList.toggle("headfootdark");
  footer.classList.toggle("headfootdark");

  // Check if the 'dark-theme' class is applied to the body element
  if (body.classList.contains("dark")) {
    // Change the navigation text color to white
    document.querySelectorAll('nav a').forEach(function(navItem) {
      navItem.style.color = 'white';
    });
    document.getElementById("toggle-theme").style.color = '#060627';
    document.getElementById("toggle-theme").style.backgroundColor = 'white';
    document.getElementById("toggle-theme").innerText = 'Light Theme';
  } 
  else {
    // Change the navigation text color back to black
    document.querySelectorAll('nav a').forEach(function(navItem) {
      navItem.style.color = 'black';
  });
  document.getElementById("toggle-theme").style.color = 'white';
  document.getElementById("toggle-theme").style.backgroundColor = '#060627';
  document.getElementById("toggle-theme").innerText = 'Dark Theme';
}
});