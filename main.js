let nav = document.querySelector("nav");
let img = document.getElementById("hero-img");
let openBtn = document.getElementById("hamburger-open");
let closeBtn = document.getElementById("hamburger-close");
let drawer = document.getElementById("drawer");
let overlay = document.getElementById("overlay");

let dropdown = document.getElementsByClassName("custom-dropdown");

let hero = document.getElementById("txt-animations")

const unmountElement = (el) => {
  el.style.display = "none";
};

unmountElement(overlay)

for (let i = 0; i < nav.children.length; i++) {
  let links = nav.children;
  let isSelect = links[i].className === "custom-select";

  if (isSelect) {

    let btn = document.getElementById(links[i].children[0].id);
    let opt = document.getElementById(btn.nextElementSibling.id);

    unmountElement(opt);

    btn.addEventListener("mouseenter", function () {
      opt.style.display = "";
    });

    btn.addEventListener("mouseleave", function () {
      opt.style.display = "none";
    });


    opt.addEventListener("mouseenter", function () {
      opt.style.display = "";
    });
    opt.addEventListener("mouseleave", function () {
      opt.style.display = "none";
    });
  }
}

const drawerOpen = () => {
  drawer.classList.remove("drawer-close");
  drawer.classList.add("drawer-open");
  overlay.style.display = "";
};

const drawerClose = () => {
  drawer.classList.remove("drawer-open");
  drawer.classList.add("drawer-close");
  overlay.style.display = "none";
};

openBtn.addEventListener("click", () => drawerOpen());
closeBtn.addEventListener("click", () => drawerClose());
overlay.addEventListener("click", () => drawerClose());

for (let i = 0; i < dropdown.length; i++) {
  let dropdownBtn = document.getElementById(dropdown[i].children[0].id);
  let dpCont = document.getElementById(dropdown[i].children[1].id);
  let isOpen = false;
  dropdownBtn.addEventListener("click", function () {
    isOpen = !isOpen;
    if (isOpen) {
      dpCont.style.height = "120px";
    } else {
      dpCont.style.height = "0px";
    }
  });
}