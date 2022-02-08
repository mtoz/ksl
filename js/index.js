const toggle = document.getElementById("toggle");
const navigation = document.getElementById("navigation");
const header = document.getElementById("header");
const obs = document.querySelectorAll(".obs");
const obs_left = document.querySelectorAll(".obs-left");
const obs_right = document.querySelectorAll(".obs-right");

let options = {
  // root: null,
  rootMargin: "-8% 0px",
  threshold: 0,
};

// --------
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

// -------
document.onclick = function (e) {
  if (
    e.target.id !== "toggle" &&
    e.target.id !== "navigation" &&
    e.target.id !== "header"
  ) {
    toggle.classList.remove("active");
    navigation.classList.remove("active");
  }
};
// -------

window.addEventListener("scroll", () => {
  if (scrollY > 1) {
    header.style.animation = "headerAppear 0.35s ease-out forwards";
  } else {
    header.style.animation = "headerDisapear 0.35s linear forwards";
  }
});

// -------

function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translate(0,0)";
    }
  });
}

const observer = new IntersectionObserver(callback, options);
obs.forEach((item) => {
  observer.observe(item);
});
obs_left.forEach((item) => {
  observer.observe(item);
});
obs_right.forEach((item) => {
  observer.observe(item);
});

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// réponse : 0 1 2

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// réponse : 3 3 3

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// réponse : 1 2 4

// let a = 8;
// let b = new Number(8);
// let c = 8;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// réponse true false false
