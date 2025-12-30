
  const filterButtons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".grid__item");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      items.forEach(item => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.style.display = "block";
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.95)";
          setTimeout(() => (item.style.display = "none"), 200);
        }
      });
    });
  });
