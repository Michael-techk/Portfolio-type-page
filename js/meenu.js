const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  document.body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  document.body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY >= navbar.offsetHeight*3 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}