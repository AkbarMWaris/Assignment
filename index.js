// ================= NAVBAR MEGA MENU =================
const travelBtn = document.getElementById("travelBtn");
const megaMenu = document.getElementById("megaMenu");
const overlay = document.getElementById("overlay");
const travelArrow = document.getElementById("travelArrow");
const navbar = document.querySelector("header");

const navTexts = document.querySelectorAll(".nav-text");

function setNavText(colorClass, removeClass) {
  navTexts.forEach(el => {
    el.classList.add(colorClass);
    el.classList.remove(removeClass);
  });
}


let menuOpen = false;
function openMenu() {
  megaMenu.classList.remove("opacity-0", "-translate-y-4", "pointer-events-none");
  megaMenu.classList.add("opacity-100", "translate-y-0");

  overlay.classList.remove("hidden");
  navbar.classList.add("bg-black");

  setNavText("text-white", "text-[#222425]");
  travelArrow.classList.add("rotate-180");

  menuOpen = true;
}

function closeMenu() {
  megaMenu.classList.add("opacity-0", "-translate-y-4", "pointer-events-none");
  megaMenu.classList.remove("opacity-100", "translate-y-0");

  overlay.classList.add("hidden");
  navbar.classList.remove("bg-black");

  setNavText("text-[#222425]", "text-white");
  travelArrow.classList.remove("rotate-180");

  menuOpen = false;
}

function isDesktop() {
  return window.innerWidth >= 768;
}

 if (isDesktop()) {
    travelBtn.addEventListener("click", () => {
      menuOpen ? closeMenu() : openMenu();
    });

    overlay.addEventListener("click", closeMenu);
  }



// ================= MOBILE MENU SLIDE =================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");

if (hamburgerBtn && mobileMenu && closeMobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });

  closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });
}

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

if (singleTab && multiTab) {
  singleTab.addEventListener("click", () => activateTab(singleTab, multiTab));
  multiTab.addEventListener("click", () => activateTab(multiTab, singleTab));
}

// Tag autofill
document.querySelectorAll(".tag").forEach(tag => {
  tag.addEventListener("click", () => {
    const input = document.getElementById("destinationInput");
    if (input) input.value = tag.textContent;
  });
});

// Age increment
const addAgeBtn = document.getElementById("addAgeBtn");
if (addAgeBtn) {
  addAgeBtn.addEventListener("click", () => {
    const ageInput = document.getElementById("ageInput");
    if (ageInput) {
      ageInput.value = (parseInt(ageInput.value) || 0) + 1;
    }
  });
}


// ================= MOBILE PLAN TOGGLE =================
document.addEventListener("DOMContentLoaded", function () {
  const mVoyagerBtn = document.getElementById("mVoyagerBtn");
  const mPlusBtn = document.getElementById("mPlusBtn");
  const mVoyager = document.getElementById("mVoyager");
  const mPlus = document.getElementById("mPlus");

  if (mVoyagerBtn && mPlusBtn && mVoyager && mPlus) {
    mVoyagerBtn.addEventListener("click", () => {
      mVoyager.classList.remove("hidden");
      mPlus.classList.add("hidden");
      mVoyagerBtn.classList.add("bg-gray-100");
      mPlusBtn.classList.remove("bg-gray-100");
    });

    mPlusBtn.addEventListener("click", () => {
      mPlus.classList.remove("hidden");
      mVoyager.classList.add("hidden");
      mPlusBtn.classList.add("bg-gray-100");
      mVoyagerBtn.classList.remove("bg-gray-100");
    });
  }
});
