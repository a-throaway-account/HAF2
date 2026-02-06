const data = [
  {
    title: "How CLV drives profit",
    cat: "marketing",
    date: "26 Sep 2023",
    img: "https://picsum.photos/600/400?1",
    text: "Lifetime value changes how you acquire customers..."
  },

  {
    title: "ONDC Revolution",
    cat: "tech",
    date: "19 Jun 2023",
    img: "https://picsum.photos/600/400?2",
    text: "Open network is reshaping Indian commerce..."
  },

  {
    title: "D2C Playbooks",
    cat: "d2c",
    date: "21 Aug 2023",
    img: "https://picsum.photos/600/400?3",
    text: "Brands bypass marketplaces to own users..."
  },

  {
    title: "Global Expansion",
    cat: "strategy",
    date: "02 Jan 2024",
    img: "https://picsum.photos/600/400?4",
    text: "How Indian brands go international..."
  }
];

let page = 1;
const perPage = 6;

function render() {
  const grid = document.getElementById("blogGrid");
  grid.innerHTML = "";

  data.forEach(b => {
    grid.innerHTML += `
    <a href="blogs-template.html" class="read">
      <article class="blog-toast" data-cat="${b.cat}">
        <div class="toast-img">
          <img src="${b.img}">
          <span class="toast-cat">${b.cat}</span>
        </div>

        <div class="toast-body">
          <span class="toast-date">${b.date}</span>
          <h3>${b.title}</h3>
          <p>${b.text}</p>

        </div>
      </article>
      </a>
    `;
  });
}

/* SEARCH */
document.getElementById("searchInput")
?.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();

  document.querySelectorAll(".blog-toast").forEach(c => {
    c.style.display =
      c.innerText.toLowerCase().includes(q)
        ? "block" : "none";
  });
});

/* FILTER */
document.querySelectorAll(".filter").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".filter")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    const cat = btn.dataset.cat;

    document.querySelectorAll(".blog-toast")
      .forEach(c => {
        c.style.display =
          cat === "all" || c.dataset.cat === cat
            ? "block" : "none";
      });
  };
});

render();
