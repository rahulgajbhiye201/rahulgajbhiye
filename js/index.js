const modewsitcher = document.getElementById("mode-switcher");
const light = document.getElementById("light");
const switch_darkmode = document.getElementById("darkmode");
const switch_lightmode = document.getElementById("lightmode");
const lightbulb = document.getElementById("lightbulb");
const socialmedia = document.getElementById("socialmedia");
const svg = document.getElementsByTagName("svg");
const borderline = document.querySelectorAll(".borderline");
const section_c_header = document.querySelectorAll(".section-c-header");

const home = document.getElementById("home");
const work = document.getElementById("work");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

modewsitcher.addEventListener("click", function onClick(event) {
  if (document.body.className === "darkmode") {
    document.body.className = "lightmode";
    modewsitcher.className = "nav-link lightmode";
    switch_lightmode.style.display = "inline";
    switch_darkmode.style.display = "none";
    light.style.display = "inline";
    lightbulb.classList = "svg-sizer lightbulb-lightmode";
    socialmedia.classList = "social-icon lightmode-text";
    borderline.forEach((element) => {
      element.style.backgroundColor = "#395B64";
    });
    section_c_header.forEach((element) => {
      element.style.color = "#2C3333";
    });
  } else {
    document.body.className = "darkmode";
    modewsitcher.className = "nav-link darkmode";
    switch_lightmode.style.display = "none";
    switch_darkmode.style.display = "inline";
    light.style.display = "none";
    lightbulb.classList = "svg-sizer lightbulb-darkmode";
    socialmedia.classList = "social-icon darkmode-text";
    borderline.forEach((element) => {
      element.style.backgroundColor = "#a5c9ca";
    });
    section_c_header.forEach((element) => {
      element.style.color = "#E7F6F2";
    });
  }
});

function homes() {
  if (home.style.display = "none") {
    home.style.display = "block";
    work.style.display = "none"
    about.style.display = "none"
    contact.style.display = "none"
  } else {
    home.style.display = "none"
  }
}
function works() {
  if (work.style.display = "none") {
    work.style.display = "block";
    home.style.display = "none"
    about.style.display = "none"
    contact.style.display = "none"
  } else {
    work.style.display = "none"
  }
}
function abouts() {
  if (about.style.display = "none") {
    about.style.display = "block";
    home.style.display = "none"
    work.style.display = "none"
    contact.style.display = "none"
  } else {
    about.style.display = "none"
  }
}
function contacts() {
  if (contact.style.display = "none") {
    contact.style.display = "block";
    home.style.display = "none"
    about.style.display = "none"
    work.style.display = "none"
  } else {
    contact.style.display = "none"
  }
}
