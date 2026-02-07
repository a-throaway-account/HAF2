// ===== TYPE ANIMATION =====
const tags = document.querySelectorAll("#tagTrack span");
const cards = document.querySelectorAll(".blog-card");

let activeTag = null;

tags.forEach(tag => {

  tag.addEventListener("click", () => {

    const value = tag.dataset.tag;

    // toggle off if same clicked
    if (activeTag === value) {
      resetFilter();
      return;
    }

    activeTag = value;

    // color logic
    tags.forEach(t => {
      t.classList.remove("active");
      t.classList.add("dim");
    });

    tag.classList.add("active");
    tag.classList.remove("dim");

    // filter cards
    cards.forEach(card => {
      const list = card.dataset.tags.toLowerCase();

      if (list.includes(value)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });

  });

});


function resetFilter() {
  activeTag = null;

  tags.forEach(t => {
    t.classList.remove("active", "dim");
  });

  cards.forEach(c => c.classList.remove("hidden"));
}


const words = [
  "strategy.",
  "system design.",
  "experimenting.",
  "compounding.",
  "execution."
];

let i = 0;
let j = 0;
let deleting = false;

const el = document.getElementById("typeText");

function type() {
  const word = words[i];

  if (!deleting) {
    el.textContent = word.slice(0, j++);
    if (j > word.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    el.textContent = word.slice(0, j--);
    if (j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 40 : 70);
}

type();


// ===== CALENDLY MODAL =====
const modal = document.getElementById("calendlyModal");
const open  = document.getElementById("openCalendly");
const close = document.getElementById("closeCalendly");

open.addEventListener("click", () =>
  modal.classList.add("open")
);

close.addEventListener("click", () =>
  modal.classList.remove("open")
);

modal.addEventListener("click", e => {
  if (e.target === modal)
    modal.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".blog-track");

  const speed = Math.floor(Math.random() * (38 - 28) + 28);
  track.style.animationDuration = speed + "s";
});


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
