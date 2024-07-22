const base = "https://anilist.co/activity/";

const days = [
    { day: 1, label: "Day 1", page: base + "643310673", img: "images/AI/day1.jpg" },
    { day: 2, label: "Day 2", page: base + "644204461", img: "images/AI/day2.jpg" },
    { day: 3, label: "Day 3", page: base + "645119355", img: "images/AI/day3.jpg" },
    { day: 4, label: "Day 4", page: base + "645504758", img: "images/AI/day4.jpg" },
    { day: 5, label: "Day 5", page: base + "648821109", img: "images/AI/day5.jpg" },
    { day: 6, label: "Day 6", page: base + "648824064", img: "images/AI/day6.jpg" },
    { day: 7, label: "Day 7", page: base + "649128166", img: "images/AI/day7.jpg" },
    { day: 8, label: "Day 8", page: base + "649743957", img: "images/AI/day8.jpg" },
    { day: 9, label: "Day 9", page: base + "649983390", img: "images/AI/day9.jpg" },
    { day: 10, label: "Day 10", page: base + "650447277", img: "images/AI/day10.jpg" },
    { day: 11, label: "Day 11", page: base + "651158001", img: "images/AI/day11.jpg" },
    { day: 12, label: "Day 12", page: base + "651158610", img: "images/AI/day12.jpg" },
    { day: 13, label: "Day 13", page: base + "651735819", img: "images/AI/day13.jpg" },
    { day: 14, label: "Day 14", page: base + "652066427", img: "images/AI/day14.jpg" },
    { day: 15, label: "Day 15", page: base + "652636595", img: "images/AI/day15.jpg" },
];

const daysContainer = document.querySelector('.days');
const moreBtn = document.querySelector(".more-btn");
let loadedImages = 0;

function loadMoreImages() {
  const nextImages = days.slice(loadedImages, loadedImages + 6);

  nextImages.forEach(day => {
    const column = document.createElement('div');
    column.classList.add('day', 'animated-day');

    const img = document.createElement('img');
    img.src = day.img;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const title = document.createElement('h3');
    title.textContent = day.label;
    title.classList.add('custom-title');

    column.appendChild(img);
    overlay.appendChild(title);
    column.appendChild(overlay);

    daysContainer.appendChild(column);

    img.addEventListener("click", () => {
      window.location.href = day.page;
    });
  });

  loadedImages += 6;

  if (loadedImages >= days.length) {
    moreBtn.style.display = 'none';
  }
}

moreBtn.addEventListener("click", loadMoreImages);

// Load initial images
loadMoreImages();
