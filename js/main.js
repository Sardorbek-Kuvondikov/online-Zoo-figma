const elMenuBtn = document.querySelector(".js-menu");

elMenuBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  elMenuBtn.closest(".site-header").classList.toggle("open");
  document.body.classList.toggle("unscrol");
});
