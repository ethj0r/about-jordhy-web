let currentIndex = 1;
    const images = document.querySelectorAll(".carousel-img-container");
    const total = images.length;
    const carousel = document.querySelector(".carousel");
    const wrapper = document.getElementById("carousel-wrapper");

    let autoplay = setInterval(() => moveSlide(1), 5000);

    function updateCarousel() {
      images.forEach((container, i) => {
        container.classList.remove("prev", "active", "next");
      });

      const prevIndex = (currentIndex - 1 + total) % total;
      const nextIndex = (currentIndex + 1) % total;

      images[prevIndex].classList.add("prev");
      images[currentIndex].classList.add("active");
      images[nextIndex].classList.add("next");
    }

    function moveSlide(dir) {
      currentIndex = (currentIndex + dir + total) % total;
      updateCarousel();
    }

    wrapper.addEventListener("mouseenter", () => clearInterval(autoplay));
    wrapper.addEventListener("mouseleave", () => autoplay = setInterval(() => moveSlide(1), 5000));

    // drag support
    let startX = 0;
    let isDragging = false;

    wrapper.addEventListener("mousedown", e => {
      isDragging = true;
      startX = e.clientX;
    });
    wrapper.addEventListener("mouseup", e => {
      if (!isDragging) return;
      const diff = e.clientX - startX;
      if (diff > 50) moveSlide(-1);
      else if (diff < -50) moveSlide(1);
      isDragging = false;
    });

    wrapper.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    wrapper.addEventListener("touchend", e => {
      const diff = e.changedTouches[0].clientX - startX;
      if (diff > 50) moveSlide(-1);
      else if (diff < -50) moveSlide(1);
    });

    updateCarousel();