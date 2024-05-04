function submitRating(rating) {
    localStorage.setItem('rating', rating); // Store the rating in localStorage
}

function showRating() {
    const rating = localStorage.getItem('rating'); // Retrieve the rating from localStorage
    const ratingResult = document.querySelector('.ratingResult');
    const externalContainer = document.querySelector('.externalContainer');
    

    if (rating) {
        ratingResult.textContent = `You selected ${rating} out of 5`; // Update the rating text
        externalContainer.style.display = 'block'; // Display the external content
    } 

    

} 

showRating("click", externalContainer);