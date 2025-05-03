//import variables from 'Style/variables.module.scss';

//=====Client Feedback Carousel=====
document.addEventListener("DOMContentLoaded", function() {
    // get elements by their class/id
    const customerCards = document.querySelectorAll('.customer-card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentClientIndex = 1; //middle customerCard

    //func to show the current customerCard and hide others
    function showRoom(index) {
        customerCards.forEach((customerCard, i) => {
            if (i === index) {
                customerCard.style.height = '200px';
                customerCard.style.fontSize = '20px';
            } else {
                customerCard.style.height = '120px';
                customerCard.style.fontSize = 'small';
            }
        });
    }

    //show first customerCard initially
    showRoom(currentClientIndex);

    //event listener for previous button
    prevBtn.addEventListener('click', function() {
        currentClientIndex = (currentClientIndex === 0) ? customerCards.length - 1 : currentClientIndex - 1; //subtract 1 from customerCard length to access previous customerCard
        showRoom(currentClientIndex); //pass current customerCard's index to func to display it
    });

    //event listener for next button
    nextBtn.addEventListener('click', function() {
        currentClientIndex = (currentClientIndex === customerCards.length - 1) ? 0 : currentClientIndex + 1; //add 1 to customerCard length to access next customerCard
        showRoom(currentClientIndex); //pass current customerCard's index to func to display it
    });
});