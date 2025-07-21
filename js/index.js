document.addEventListener("DOMContentLoaded", function () {
      const headers = document.querySelectorAll(".timeline-content-header");
      headers.forEach(header => {
        header.addEventListener("click", () => {
          const desc = header.nextElementSibling;
          desc.classList.toggle("open");
        });
      });
    });