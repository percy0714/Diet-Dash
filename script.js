document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully!");

    const goalSelect = document.getElementById("goal");
    const searchButton = document.querySelector(".btn.search");
    
    if (searchButton && goalSelect) {
        searchButton.addEventListener("click", function () {
            const selectedGoal = goalSelect.value;
            console.log("Selected Goal:", selectedGoal);
            fetchDietPlan(selectedGoal);
        });
    } else {
        console.error("Error: Button or Dropdown not found!");
    }
});

function fetchDietPlan(goal) {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/1`; // Working test API
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Data:", data);
            displayDietPlan(data);
        })
        .catch(error => console.error("Fetch error:", error));
}

function displayDietPlan(data) {
    console.log("Raw API Response:", data); // Debugging step

    let resultSection = document.querySelector(".result-section");

    if (!resultSection) {
        resultSection = document.createElement("section");
        resultSection.classList.add("result-section");
        document.body.appendChild(resultSection);
    }

    resultSection.innerHTML = "<h2>Your Diet Plan</h2>";

    // Formatting the test API response properly
    resultSection.innerHTML += `
        <div class="meal">
            <h3>${data.title}</h3>
            <p>${data.body}</p>
        </div>
    `;
}


