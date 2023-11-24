const base = "https://anilist.co/activity/";

// Array of days 
const days = [
    {
      day: 1, 
      label: "Day 1",
      page: base + "643310673",
      img: "images/AI/day1.jpg"
    },
    {
      day: 2,
      label: "Day 2",
      page: base + "644204461",
      img: "images/AI/day2.jpg"
    },
    {
    day: 3,
    label: "Day 3",
    page: base + "645119355",
    img: "images/AI/day3.jpg"
    },
    {
    day: 4,
    label: "Day 4",
    page: base + "645504758",
    img: "images/AI/day4.jpg"
    },
    {
    day: 5,
    label: "Day 5",
    page: base + "648821109",
    img: "images/AI/day5.jpg"
    },
    {
    day: 6,
    label: "Day 6",
    page: base + "648824064",
    img: "images/AI/day6.jpg"
    },
    {
    day: 7,
    label: "Day 7",
    page: base + "649128166",
    img: "images/AI/day7.jpg"
    },
    {
    day: 8,
    label: "Day 8",
    page: base + "649743957",
    img: "images/AI/day8.jpg"
    },
    {
    day: 9,
    label: "Day 9",
    page: base + "649983390",
    img: "images/AI/day9.jpg"
    },
    {
    day: 10,
    label: "Day 10",
    page: base + "650447277",
    img: "images/AI/day10.jpg"
    },
    {
    day: 11,
    label: "Day 11",
    page: base + "651158001",
    img: "images/AI/day11.jpg"
    },
    {
    day: 12,
    label: "Day 12",
    page: base + "651158610",
    img: "images/AI/day12.jpg"
    },
  ];
  
 // Get days container 
const daysContainer = document.querySelector('.days');

// Loop through days
days.forEach(day => {

  // Create column div 
  const column = document.createElement('div');
  column.classList.add('day');

  //image 
  const img = document.createElement('img');
  img.src = day.img;

  //overlay
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  //title 
  const title = document.createElement('h3');
  title.textContent = day.label;
  title.classList.add('custom-title');

  // CUTTED FEATURE: SEPARATE LINKS
  // const link = document.createElement('a');
  // link.href = day.page;
  // link.textContent = "View";
  // link.classList.add("view-link");

  // Append elements
  column.appendChild(img);
  overlay.appendChild(title);
  //overlay.appendChild(link);
  column.appendChild(overlay);

  daysContainer.appendChild(column);

  // Add click event listener to the image
  img.addEventListener("click", () => {
    window.location.href = day.page;
  });
});

// More button logic
const moreBtn = document.querySelector(".more-btn");

moreBtn.addEventListener("click", () => {
  console.log("Show more"); 
});