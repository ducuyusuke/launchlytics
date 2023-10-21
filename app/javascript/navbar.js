document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll("navbar#left ul li");
  const slider = document.querySelector(".slider");
  const menu = document.querySelector(".menu");

  let selectedPartial = document.getElementById("facebook-page");

  listItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      const clickedPartialId = item.classList[1];
      const clickedPartial = document.getElementById(`${clickedPartialId}-page`);

      selectedPartial.style.display = "none";
      clickedPartial.style.display = "block";

      selectedPartial = clickedPartial;

      const itemRect = item.getBoundingClientRect();
      const menuRect = menu.getBoundingClientRect();
      const sliderWidth = slider.offsetWidth;
      const sliderPosition = itemRect.left - menuRect.left + (itemRect.width - sliderWidth) / 2;
      slider.style.left = `${sliderPosition}px`;

      listItems.forEach((li) => {
        li.classList.remove("active");
      });

      item.classList.add("active");

      clickedPartial.scrollIntoView({ behavior: "smooth" });
    });
  });

  const aboutLi = document.querySelector("navbar#left ul li.facebook");
  aboutLi.classList.add("active");
});
