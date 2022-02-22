const header = document.getElementById("eat_time");
const tagA = header.getElementsByClassName("tagA");

for (let i = 0; i < tagA.length; i++) {
  tagA[i].addEventListener("click", function () {
    //   color Change on click
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Data load and display
function getData(item) {
  const foodContainer = document.getElementById("foodContainer");
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const mainData = data.meals.slice(1, 10);
      foodContainer.innerHTML = "";
      mainData.map((eachData) => {
        displayPost(eachData);
      });
    });
}

function displayPost(eachData) {
  const foodContainer = document.getElementById("foodContainer");
  const div = document.createElement("div");
  div.classList.add("food_item");
  const { strMealThumb, strMeal, strInstructions } = eachData;
  const price = parseInt(Math.random(10, 100) * 100);

  div.innerHTML = `
  <img
    class="w-50"
    src="${strMealThumb}"
    alt=""
    />
    <h4 class="pt-3"> ${strMeal} </h4>
    <p class="w-75 py-3 m-auto">
    ${strInstructions.slice(0, 150)}
    </p>
    <h3>$<span>${price}</span></h3>
  `;
  foodContainer.appendChild(div);
}

const chicken = document.getElementById("chicken");
const fish = document.getElementById("fish");
const beef = document.getElementById("beef");

// Directly locading data
getData("chicken");
// Chicken
chicken.addEventListener("click", () => {
  getData("chicken");
});
// Fish
fish.addEventListener("click", () => {
  getData("fish");
});
// Beef
beef.addEventListener("click", () => {
  getData("beef");
});
