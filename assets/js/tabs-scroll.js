document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      // buttons active
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // sections toggle
      contents.forEach(section => {
        section.classList.remove("active");
        if (section.id === target) {
          section.classList.add("active");
        }
      });
    });
  });
});
