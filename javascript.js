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

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {changeTheme(); location.reload});

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
    document.documentElement.style.cssText = "";
    document.getElementById("logoImg").classList.remove("dark");
} else {
    document.documentElement.style.cssText =
    "--accent-color-1:#6a3ed5;--accent-color-2:#ff148a;--white-15:#19142326;--white-25:#19142340;--white-50:#19142380;--white-75:#191423bf;--white-100:#191423;--black-50:#ebebeb80;--black-100:rgba(235,235,235,1);";
    document.getElementById("logoImg").classList.add("dark");
    checkbox.checked = "true"
}

function changeTheme() {
    if (theme == 'light') {
        document.documentElement.style.cssText =
        "--accent-color-1:#6a3ed5;--accent-color-2:#ff148a;--white-15:#19142326;--white-25:#19142340;--white-50:#19142380;--white-75:#191423bf;--white-100:#191423;--black-50:#ebebeb80;--black-100:#ebebeb;";
        document.getElementById("logoImg").classList.add("dark");
        localStorage.theme = "dark";
    } else {
        document.documentElement.style.cssText = "";
        document.getElementById("logoImg").classList.remove("dark");
        localStorage.theme = "light";
    }
    theme = localStorage.theme;
}