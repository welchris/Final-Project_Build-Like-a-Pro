const items = [
    { name: "Solo Leveling", rating: 5.0 },
    { name: "Frieren: Beyond Journey's End", rating: 5.0 },
    { name: "Jujutsu Kaisen", rating: 2.0 },
    { name: "Demon Slayer: Kimetsu no Yaiba: Mugen Train", rating: 4.5 },
    { name: "Attack on Titan", rating: 4.5 },
    { name: "That Time I Got Reincarnated as a Slime", rating: 4.5 },
];

function displayItems(items) {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = ""; // Clear the list
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.rating.toFixed(1)}`;
        itemList.appendChild(li);
    });
}

function sortItems() {
    const sortOption = document.getElementById("sortOptions").value;
    let sortedItems;

 if (sortOption === "name") {
        sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "nameReverse") {
        sortedItems = items.sort((a, b) => b.name.localeCompare(a.name)); 
    } else if (sortOption === "rating") {
        sortedItems = items.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "ratingReverse") {
        sortedItems = items.sort((a, b) => a.rating - b.rating);
    }


    displayItems(sortedItems);
}

displayItems(items);

document.getElementById("sortOptions").addEventListener("change", sortItems);
