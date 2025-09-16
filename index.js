  document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const openBtn = document.querySelector(".open-popup");
    const closeBtn = popup.querySelector(".popup__close");

    // Открытие
    openBtn.addEventListener("click", () => {
      popup.classList.add("popup--active");
    });

    // Закрытие
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("popup--active");
    });

    // Закрытие по клику вне контента
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.remove("popup--active");
      }
    });
  });
