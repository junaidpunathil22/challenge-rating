
function passValue(rating) {
    var btn = document.getElementById("btn");
    var ratingValue = btn.value;
    localStorage.setItem("rating", rating);
    console.log(rating);
}

const el = document.getElementById("rating-value");

if (el) {
    const savedRating = localStorage.getItem("rating");
    el.textContent = savedRating;


    console.log(savedRating);
}

// 1. Get all rating numbers
const ratings = document.querySelectorAll('#btn'); // Assuming all rating buttons have the same ID 'btn'

// 2. Safety check: Run only if rating buttons exist on the current page
       if (ratings.length > 0) {
    ratings.forEach(button => {
        button.addEventListener('click', () => {
            // Remove the 'active' color from whichever button currently has it
            const currentActive = document.querySelector('#btn.active');
            if (currentActive) {
                currentActive.classList.remove('active');

            }

            // Add the 'active' color to the newly clicked button
            button.classList.add('active');
        });
    });
}


function submitRating() {
    const rating = localStorage.getItem("rating");
    if (!rating) {
       console.log("hello")
    }else {
        window.location.href = 'submit.html';
    }   
}
 




