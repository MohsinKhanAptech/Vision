document.addEventListener('scroll', () => {
    let header = document.querySelector('nav');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled')
    }
})

// accordian

let acc = document.querySelectorAll(".accordion");
let panel = document.querySelectorAll(".panel");

for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight) {
           hidePanels();
        } else {
           showPanel(this);
        } 
    };
}

function showPanel(elem) {
  hidePanels();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
}

function hidePanels() {
  for (let i = 0; i < panel.length; i++) {
      panel[i].style.maxHeight = null;
      acc[i].classList.remove("active");
  }
}

// animation on scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))


// blob

const blob = document.getElementById("blob");

window.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
}

// change theme

let theme;
if (typeof(Storage) !== "undefined") {
    theme = localStorage.theme;
    if (theme == undefined) {
        localStorage.theme = "light";
        theme = localStorage.theme;
    }
} else {
    window.alert("webStorage is not supported by your browser. So, the last used theme will not be saved");
}

if (theme == 'light') {
    document.documentElement.style.cssText =
        "--accent-color-1: #7f59db;--accent-color-2: #ff69b4;--white-15: rgba(255, 255, 255, 0.15);--white-25: rgba(255, 255, 255, 0.25);--white-50: rgba(255, 255, 255, 0.50);--white-75: rgba(255, 255, 255, 0.75);--white-100: rgba(255, 255, 255, 1);--black-50: rgba(0, 0, 0, 0.50);--black-100: rgba(0, 0, 0, 1);";
    document.getElementById("logoImg").classList.remove("dark");
    localStorage.theme = "light";
} else {
    document.documentElement.style.cssText =
        "--accent-color-1: #6a3ed5;--accent-color-2: #ff148a;--white-15: rgba(25, 20, 35, 0.15);--white-25: rgba(25, 20, 35, 0.25);--white-50: rgba(25, 20, 35, 0.50);--white-75: rgba(25, 20, 35, 0.75);--white-100: rgba(25, 20, 35, 1);--black-50: rgba(235, 235, 235, 0.50);--black-100: rgba(235, 235, 235, 1);";
    document.getElementById("logoImg").classList.add("dark");
    localStorage.theme = "dark";
}

function changeTheme() {
    if (theme == 'light') {
        document.documentElement.style.cssText =
            "--accent-color-1: #6a3ed5;--accent-color-2: #ff148a;--white-15: rgba(25, 20, 35, 0.15);--white-25: rgba(25, 20, 35, 0.25);--white-50: rgba(25, 20, 35, 0.50);--white-75: rgba(25, 20, 35, 0.75);--white-100: rgba(25, 20, 35, 1);--black-50: rgba(235, 235, 235, 0.50);--black-100: rgba(235, 235, 235, 1);";
        document.getElementById("logoImg").classList.add("dark");
        localStorage.theme = "dark";
    } else {
        document.documentElement.style.cssText =
            "--accent-color-1: #7f59db;--accent-color-2: #ff69b4;--white-15: rgba(255, 255, 255, 0.15);--white-25: rgba(255, 255, 255, 0.25);--white-50: rgba(255, 255, 255, 0.50);--white-75: rgba(255, 255, 255, 0.75);--white-100: rgba(255, 255, 255, 1);--black-50: rgba(0, 0, 0, 0.50);--black-100: rgba(0, 0, 0, 1);";
        document.getElementById("logoImg").classList.remove("dark");
        localStorage.theme = "light";
    }
    theme = localStorage.theme;
}

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {changeTheme(); location.reload});