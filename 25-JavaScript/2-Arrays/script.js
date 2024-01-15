// Create  Array
const my_table = [
    'apple',
    "Laptop",
    "Phone",
    "Clock",
    "Cup",
    "Book",
    "Headphone",
    "Usb Hub"
];
console.log("Original Items: ", my_table);

// Remove the last item and return to console
// console.log("This item will be removed: ", my_table.pop());
// console.log("This is the new list: ", my_table);

// Move the last item to the 1st position
// let lastitem = my_table.pop();
// console.log("This last item will be moved to first: ", lastitem);
// my_table.unshift(lastitem);
// console.log("Last item is now first item: ", my_table);

// Sort items Alphabetically
// my_table.sort();
// console.log("Array sorted alphabetically: ", my_table);

// Find the specific item
// let item = "Phone";
// const item_found = my_table.find((something) => something === item) || "No such item in the List";
// console.log("Item found: ", item_found);

// Remove a specific content from the Array
let remove_item = "Cup";
my_table.splice(my_table.indexOf(remove_item), 1);
console.log(`Array item with name "${remove_item}" has been removed: `, my_table);
