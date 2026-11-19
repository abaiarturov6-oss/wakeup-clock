document.querySelectorAll(".toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("is-on");
    toggle.setAttribute(
      "aria-label",
      toggle.classList.contains("is-on") ? "Будильник включён" : "Будильник выключен"
    );
  });
});
