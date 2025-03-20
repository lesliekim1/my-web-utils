document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#site-header");
  let lastScrollY = 0;
  let hasReset = true;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 50) {
      header.classList.add("transparent");
      hasReset = true; 
    } else {
      header.classList.remove("transparent");
    }

    if (currentScrollY > 50) {
      if (currentScrollY > lastScrollY && hasReset) {
        header.classList.add("hidden");

        setTimeout(() => {
          header.classList.remove("hidden");
          hasReset = false; 
        }, 300); 
      }
    }

    lastScrollY = currentScrollY;
  });
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        if (link.target === '_blank') {
            event.preventDefault(); 
            link.target = '';       
            link.click();   
        }
    });
});
