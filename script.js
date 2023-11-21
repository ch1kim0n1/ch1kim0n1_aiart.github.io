// Array of days 
const days = [
    {
      day: 1, 
      label: "Day 1",
      page:"https://anilist.co/activity/643310673",
      img: "images/AI/day1.jpg"
    },
    {
      day: 2,
      label: "Day 2",
      page: "https://anilist.co/activity/644204461",
      img: "images/AI/day2.jpg"
    },
    {
    day: 3,
    label: "Day 3",
    page: "https://anilist.co/activity/645119355",
    img: "images/AI/day3.jpg"
    },
    {
    day: 4,
    label: "Day 4",
    page: "https://anilist.co/activity/645504758",
    img: "images/AI/day4.jpg"
    },
    {
    day: 5,
    label: "Day 5",
    page: "https://anilist.co/activity/648821109",
    img: "images/AI/day5.jpg"
    },
    {
    day: 6,
    label: "Day 6",
    page: "https://anilist.co/activity/648824064",
    img: "images/AI/day6.jpg"
    },
    {
    day: 7,
    label: "Day 7",
    page: "https://anilist.co/activity/649128166",
    img: "images/AI/day7.jpg"
    },
    {
    day: 8,
    label: "Day 8",
    page: "https://anilist.co/activity/649743957",
    img: "images/AI/day8.jpg"
    },
  ];
  
  // Get the days container
  const daysContainer = document.querySelector('.days');
  
  // Loop through days
  days.forEach(day => {
  
    // Create element
    const dayEl = document.createElement('div');
    dayEl.classList.add('day');
  
    // Add image
    const img = document.createElement('img');
    img.src = day.img;
    dayEl.appendChild(img);
  
    // Add label 
    const label = document.createElement('a');
    label.href = day.page; 
    label.textContent = day.label;
    dayEl.appendChild(label);
  
    // Append to container
    daysContainer.appendChild(dayEl);
  
  });