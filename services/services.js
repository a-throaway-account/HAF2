/* ===== BENTO RENDER FIRST ===== */
const burger = document.getElementById("burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger?.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    burger.classList.remove("active");
  });
});

const items = [
["Performance Ads","https://picsum.photos/900/600?1","t1",
 "Full-funnel paid acquisition across Meta, Google & marketplaces."],

["Retention","https://picsum.photos/900/600?2","t2",
 "Email, WhatsApp & lifecycle flows designed to maximize LTV."],

["Marketplace","https://picsum.photos/900/600?3","t3",
 "Amazon & Flipkart catalog, ads and visibility management."],

["Analytics","https://picsum.photos/900/600?4","t4",
 "GA4, attribution and executive dashboards."],

["Creative","https://picsum.photos/900/600?5","t5",
 "Hooks, UGC and landing pages driven by ad data."],

["Automation","https://picsum.photos/900/600?6","t6",
 "CRM workflows and funnel automation."]
];

bento.innerHTML = items.map(i => `
<div class="tile ${i[2]}" data-title="${i[0]}" data-text="${i[3]}">
  <img src="${i[1]}">
  <div class="info">
    <h4>${i[0]}</h4>
  </div>
  <div class="reveal"></div>
</div>
`).join("");



/* ===== NOW ATTACH INTERACTIONS ===== */

const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {

  const title = tile.dataset.title;
  const text  = tile.dataset.text;

  tile.querySelector(".reveal").innerHTML = `
    <h3>${title}</h3>
    <p>${text}</p>
  `;

  tile.addEventListener("mouseenter", () => {

  // small delay for intentional feel
  requestAnimationFrame(() => {
    bento.classList.add("focus");

    tiles.forEach(t => t.classList.remove("active"));
    tile.classList.add("active");
  });

});

});

bento.addEventListener("mouseleave", () => {
  bento.classList.remove("focus");
  tiles.forEach(t => t.classList.remove("active"));
});
