// ================= NAVBAR MEGA MENU =================
const navBtns = document.querySelectorAll(".nav-btn");
const megaMenu = document.getElementById("megaMenu");
const overlay = document.getElementById("overlay");

navBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    megaMenu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
});

overlay.addEventListener("click", () => {
  megaMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});

// ================= MOBILE MENU SLIDE =================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
});

// ================= ACCORDION =================
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector("span");

    // Close other open sections
    document.querySelectorAll(".accordion-content").forEach(c => {
      if (c !== content) c.classList.add("hidden");
    });
    document.querySelectorAll(".accordion-btn span").forEach(i => {
      if (i !== icon) i.textContent = "▾";
    });

    // Toggle current
    content.classList.toggle("hidden");
    icon.textContent = content.classList.contains("hidden") ? "▾" : "▴";
  });
});


// ================= FORM INTERACTIONS =================
const singleTab = document.getElementById("singleTab");
const multiTab = document.getElementById("multiTab");

function activateTab(active, inactive) {
  active.classList.add("bg-yellow-400", "text-white");
  inactive.classList.remove("bg-yellow-400", "text-white");
  inactive.classList.add("text-gray-600");
}

singleTab.addEventListener("click", () => activateTab(singleTab, multiTab));
multiTab.addEventListener("click", () => activateTab(multiTab, singleTab));


// Tag autofill
document.querySelectorAll(".tag").forEach(tag => {
  tag.addEventListener("click", () => {
    document.getElementById("destinationInput").value = tag.textContent;
  });
});

// Age increment
document.getElementById("addAgeBtn").addEventListener("click", () => {
  const ageInput = document.getElementById("ageInput");
  ageInput.value = (parseInt(ageInput.value) || 0) + 1;
});
