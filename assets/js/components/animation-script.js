document.addEventListener("DOMContentLoaded", function () {
  // --- 1. GSAP PLUGIN REGISTRATION ---
  // Register the necessary GSAP plugins to use them.
  // ScrollTrigger is for scroll-based animations, ScrollToPlugin is for smooth scrolling.
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // --- 2. SMOOTH SCROLL TO TARGET ---
  // This function handles the smooth scroll animation to any target element.
  function scrollToSection(targetSelector) {
    const targetElem = document.querySelector(targetSelector);
    if (!targetElem) {
      console.error(`Scroll target not found: ${targetSelector}`);
      return;
    }

    // --- Calculate Navbar Height for Offset ---
    // We find the main header and get its height to use as an offset.
    // This prevents the target section title from being hidden behind the sticky navbar.
    const header = document.querySelector(".th-header-layout23");
    const headerHeight = header ? header.offsetHeight : 100;

    // Use GSAP's ScrollToPlugin to animate the scroll
    gsap.to("#contact-sec", {
      duration: 1.5, // Animation speed in seconds (e.g., 1.5s)
      ease: "power2.inOut", // Easing for a smooth start and end
      scrollTo: {
        y: targetElem, // The element to scroll to
      },
    });
  }

  // --- 3. EVENT LISTENERS FOR SCROLL BUTTONS ---
  // We will add a reusable class, e.g., `js-scroll-to`, to all buttons/links
  // that should trigger a smooth scroll.

  const scrollButtons = document.querySelectorAll(".js-scroll-to");

  scrollButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Stop the default link behavior
      const targetId = this.getAttribute("href");
      if (targetId) scrollToSection(targetId);
    });
  });

  // --- 4. REUSABLE ANIMATIONS (Future Use) ---
  // You can add more reusable animations here. For example, a fade-in effect.
  // Just add the class `js-fade-in-up` to any element in your HTML.
  gsap.utils.toArray(".js-fade-in-up").forEach((element) => {
    gsap.from(element, {
      y: 50, // Start 50px below
      opacity: 0, // Start invisible
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%", // Start animation when element is 85% from the top of the viewport
        toggleActions: "play none none none", // Play once and don't reverse
      },
    });
  });
});
