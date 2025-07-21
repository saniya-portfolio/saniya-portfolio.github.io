const buttons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-box");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    projects.forEach(proj => {
        if (filter === "all" || proj.classList.contains(filter)) {
        proj.style.display = "block";
        } else {
        proj.style.display = "none";
        }
    });
    });
});