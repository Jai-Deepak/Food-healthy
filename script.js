let score = 0;
let allSelected = false; // Keeps track of whether all items are selected

function addScore(points, element) {
    const button = element.querySelector('.selectButton'); // Get the button within the clicked food item
    const isSelected = element.classList.contains('selected');
    if (!isSelected) {
        score += points;
        element.classList.add('selected');
        button.textContent = 'Unselect';
        button.style.backgroundColor = 'red';
    } else {
        score -= points;
        element.classList.remove('selected');
        button.textContent = 'Select';
        button.style.backgroundColor = 'green';
    }
    document.getElementById('score').textContent = score;
}

document.getElementById('selectAll').addEventListener('click', function() {
    const foodItems = document.querySelectorAll('.food-item');
    allSelected = !allSelected; // Toggle the allSelected state
    foodItems.forEach(item => {
        const button = item.querySelector('.selectButton');
        if (allSelected && !item.classList.contains('selected')) {
            item.click();
            button.textContent = 'Unselect';
            button.style.backgroundColor = 'red';
        } else if (!allSelected && item.classList.contains('selected')) {
            item.click();
            button.textContent = 'Select';
            button.style.backgroundColor = 'green';
        }
    });
    // Update button text based on selection state
    this.textContent = allSelected ? 'Unselect All Foods' : 'Select All Foods';
});
