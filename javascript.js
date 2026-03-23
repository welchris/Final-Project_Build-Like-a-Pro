const items = [
    { name: "Attack on Titan", rating: 4.5, image: "/assets/AOT.jpg" },
    { name: "Demon Slayer: Kimetsu no Yaiba: Mugen Train", rating: 4.5, image: "/assets/DemonSlayer.jpg" },
    { name: "Frieren: Beyond Journey's End", rating: 5.0, image: "/assets/Frieren.jpg" },
    { name: "Jujutsu Kaisen", rating: 2.0, image: "/assets/jujutsu_kaisen.jpg" },
    { name: "Solo Leveling", rating: 5.0, image: "/assets/Solo Leveling.jpg" },
    { name: "That Time I Got Reincarnated as a Slime", rating: 4.5, image: "/assets/Slime.jpg" },
];

function displayItems(items) {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = ""; 
    items.forEach(item => {
        const li = document.createElement("li");
        
        const img = document.createElement("img");
        img.src = item.image; 
        img.alt = item.name; 
        img.style.width = "50px"; 
        img.style.height = "auto"; 
        
        li.appendChild(img);
        li.appendChild(document.createTextNode(` ${item.name} - ${item.rating.toFixed(1)}`));
        
        itemList.appendChild(li);
    });
}

function sortItems() {
    const sortOption = document.getElementById("sortOptions").value;
    let sortedItems = [...items]; 

    if (sortOption === "name") {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "nameReverse") {
        sortedItems.sort((a, b) => b.name.localeCompare(a.name)); 
    } else if (sortOption === "rating") {
        sortedItems.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "ratingReverse") {
        sortedItems.sort((a, b) => a.rating - b.rating);
    }

    displayItems(sortedItems);
}

document.addEventListener("DOMContentLoaded", () => {
    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    displayItems(sortedItems);
    document.getElementById("sortOptions").addEventListener("change", sortItems);
});