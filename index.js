const navbar = document.querySelector(".navbar");
const handleToggle = () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
};

function openPage(pageName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "black";
  }

  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = "blue";
  elmnt.style.color = "white";
}
if (document.getElementById("defaultOpen")) {
  document.getElementById("defaultOpen").click();
}
// function openPage(pageName, elmnt, color) {
//   var i, tabcontent, tablinks;
//   //Hide all elements with class='tabcontent' by Default
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   //Remove the Background color of all tablinks/buttons
//   tablinks = document.getElementsByClassName("tablink");
//   for (let i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//   }
//   //Show the specific tab
//   document.getElementById(pageName).style.display = "block";
//   //Add the specific color to the button used to open the tab content
//   elmnt.style.backgroundColor = color;
// }

// //Get the element with id='defaultOpen' and click on it
// document.getElementById("defaultOpen").click();
