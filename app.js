// Grabbing the input field
const input = document.querySelector(".input");

// To visualize how many times the call is being made
let count = 0;

// To fetch data
const fetchData = () => {
  console.log("Fetching Data...", count++);
};

// debouncing function, which takes function we want to call and
// time we want to delay the function with as arguments

const debounce = (fn, delay) => {
  // initiallizing timer
  let timer;
  return function () {
    // If the previous timer exist, we want to clear it out
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(fn, delay);
  };
};

// Adding the event listener to listen to key press events and call the debounce function
input.addEventListener("keyup", debounce(fetchData, 500));
