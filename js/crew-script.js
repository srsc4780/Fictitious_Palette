//Tabbed component

const tabs = document.querySelectorAll(".tabs__tab");
const tabsContainer = document.querySelector(".tabs__tab-container");
const tabsContent = document.querySelectorAll(".tabs__container");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tabs__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("tabs__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("tabs__container--active"));

  // Activate tab
  clicked.classList.add("tabs__tab--active");

  // Activate content area
  document
    .querySelector(`.tabs__container--${clicked.dataset.tab}`)
    .classList.add("tabs__container--active");
});
