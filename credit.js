function checkScore() {
    const score = document.getElementById('score').value;
    const resultDiv = document.getElementById('result');

    // Check if input is valid
    if (score === '' || isNaN(score)) {
        resultDiv.innerHTML = 'Please enter a valid score.';
        resultDiv.style.backgroundColor = '#FFCCBC'; // Light warning color
        return;
    }

    // Convert score to number
    const numScore = Number(score);

    if (numScore < 600) {
        resultDiv.innerHTML = 'You are not eligible for a loan yet.';
        resultDiv.style.backgroundColor = '#FF7043'; // Red for not eligible
        resultDiv.style.color = '#fff';
    } else if (numScore >= 600 && numScore <= 750) {
        resultDiv.innerHTML = 'You are eligible for a loan!';
        resultDiv.style.backgroundColor = '#66BB6A'; // Green for eligible
        resultDiv.style.color = '#fff';
    } else if (numScore > 750 && numScore <= 800) {
        resultDiv.innerHTML = 'You are eligible for a high loan!';
        resultDiv.style.backgroundColor = '#3D5AFE'; // Blue for high loan eligibility
        resultDiv.style.color = '#fff';
    } else {
        resultDiv.innerHTML = 'Please enter a valid score between 1 and 800.';
        resultDiv.style.backgroundColor = '#FF7043'; // Error color for invalid scores
        resultDiv.style.color = '#fff';
    }
}
