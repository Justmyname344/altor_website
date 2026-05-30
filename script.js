const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const form = document.querySelector(".signup-form");
const modal = document.querySelector("#newsletter-modal");
const modalForm = document.querySelector(".modal-form");
const newsletterTriggers = document.querySelectorAll(".newsletter-open");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
const productList = document.querySelector("[data-product-list]");
const productDetail = document.querySelector("[data-product-detail]");

const openNewsletter = () => {
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector("input")?.focus();
};

const closeNewsletter = () => {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

if (toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  });
});

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    button.textContent = "You're in";
    setTimeout(() => {
      button.textContent = "Notify me";
      form.reset();
    }, 1800);
  });
}

newsletterTriggers.forEach((trigger) => {
  trigger.addEventListener("click", openNewsletter);
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", closeNewsletter);
});

if (modalForm) {
  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = modalForm.querySelector("button");
    button.textContent = "Joined";
    setTimeout(closeNewsletter, 900);
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeNewsletter();
  }
});

setTimeout(() => {
  if (modal && !sessionStorage.getItem("altorNewsletterShown")) {
    openNewsletter();
    sessionStorage.setItem("altorNewsletterShown", "true");
  }
}, 1200);

const renderStars = (rating) => {
  const rounded = Math.round(rating);
  return `${"★".repeat(rounded)}${"☆".repeat(5 - rounded)} ${ratingText(rating)}`;
};

if (productList && typeof altorProducts !== "undefined") {
  productList.innerHTML = altorProducts
    .map(
      (product) => `
        <a class="store-card" href="product.html?id=${product.id}" aria-label="View ${product.name}">
          <img src="${product.image}" alt="${product.name}" />
          <div class="store-card-body">
            <span class="tag">${product.category}</span>
            <h2>${product.name}</h2>
            <p>${product.short}</p>
            <div class="product-meta">
              <span>${formatPrice(product.price)}</span>
              <span class="rating">${renderStars(product.rating)}</span>
            </div>
          </div>
        </a>
      `
    )
    .join("");
}

if (productDetail && typeof altorProducts !== "undefined") {
  const params = new URLSearchParams(window.location.search);
  const product = altorProducts.find((item) => item.id === params.get("id")) || altorProducts[0];

  document.title = `${product.name} | Altor`;
  productDetail.innerHTML = `
    <div class="detail-image">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="detail-copy">
      <span class="tag">${product.category}</span>
      <h1>${product.name}</h1>
      <p>${product.short}</p>
      <div class="detail-price">
        <span>${formatPrice(product.price)}</span>
        <span class="rating">${renderStars(product.rating)}</span>
      </div>
      <ul class="spec-list">
        ${product.specs.map((spec) => `<li>${spec}</li>`).join("")}
      </ul>
      <div class="detail-actions">
        <button type="button">Add to cart</button>
        <a class="secondary-button" href="shop.html">Back to shop</a>
      </div>
    </div>
  `;
}
