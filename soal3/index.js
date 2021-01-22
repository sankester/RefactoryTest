const data = require("./data");
const filterByType = require("./filterByType");

// 1. Find items in Meeting Room.
console.log('\n1. Find items in Meeting Room.');
const itemInMeetingRoom = data.filter(
  (item) => item.placement.name === "Meeting Room"
);
console.log(itemInMeetingRoom);

// 2. Find all electronic devices.
console.log('\n2. Find all electronic devices.');
filterByType(data, "electronic", filtered => console.log(filtered))

// 3. Find all furnitures.
console.log('\n3. Find all furnitures.');
filterByType(data, "furniture", filtered => console.log(filtered))

// 4. Find all items was purchased at 16 Januari 2020.
console.log('\n4. Find all items was purchased at 16 Januari 2020.');
const purchashed = data.filter((item) => {
  const date = new Date(item.purchased_at * 1000);
  if (
    date.getDate() === 16 &&
    date.getMonth() === 0 &&
    date.getFullYear(2020)
  ) {
    return true;
  }
  return false;
});
console.log(purchashed);

// 5. Find all items with brown color.
console.log('\n5. Find all items with brown color.');
const brownColor = data.filter((item) => item.name.match(/brown/gi));
console.log(brownColor);
