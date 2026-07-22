const itemAddBtn = document.querySelector("#addBtn");
const submitBtn = document.querySelector("#submitBtn");
const itemsContainer = document.getElementById("itemsContainer");

function calculateTotals() {
    let totCost = 0;

    const allCostInputs = document.querySelectorAll(".itemCost");

    allCostInputs.forEach(input => {
        const val = parseFloat(input.value) || 0;
        totCost += val;
    });

    const marginPercent = parseFloat(document.getElementById("margin").value) || 0;

    let totSale = totCost * (1 + (marginPercent / 100));

    document.getElementById("totCost").textContent = `$${totCost.toFixed(2)}`;
    document.getElementById("totSale").textContent = `$${totSale.toFixed(2)}`;
}

itemsContainer.addEventListener('input', (e) => {
    if (e.target.classList.contains('itemCost')) {
        calculateTotals();
    }
});

itemsContainer.addEventListener('click', (e) =>{
    if (e.target.classList.contains('removeBtn')) {
        e.target.closest('.costinput').remove();

        calculateTotals();
    }
});

document.getElementById("margin").addEventListener('input', calculateTotals);

itemAddBtn.addEventListener("click", () => {
    const templateRow = document.querySelector(".costinput");

    const newRow = templateRow.cloneNode(true);

    newRow.querySelectorAll("input").forEach(input => {
        if (input.type === "number") {
            input.value = "0";
        } else {
            input.value = "";
        }
    });

    itemsContainer.appendChild(newRow);
});

submitBtn.addEventListener("click", () => {
    calculateTotals();
    alert("Data Submitted Successfully!");
});