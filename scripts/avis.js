//******** Variables

const opinionsContainer = document.querySelector('.opinions-container');
const starRating = document.querySelectorAll('.star');
const meanRating = document.querySelector('.opinions-rated');


// Push the comment on left or right if the number is even or uneven
let commentPosition = 1;
let starRatingValue;

//******** Objects

const userComment1 = {
    name: 'Bill Gates',
    comment: 'Really good, I loved the HTML dessert',
    rating: '5'
}

const userComment2 = {
    name: 'Linus Torvalds',
    comment: 'Your CSS meal needs a bit more of GNU',
    rating: '4'
}

const userComment3 = {
    name: 'Mark Zuckerberg',
    comment: 'I loved it ! You\'re hired whenever you want !',
    rating: '5'
}

const userComment4 = {
    name: 'Steve Jobs',
    comment: 'This IS a revolution !',
    rating: '5'
}


//******** Array

const commentsList = [userComment1, userComment2, userComment3, userComment4];
const userRatings = [];

//******** Function to add the mean of the opinions
const ratingAdd = (rate, array) => {
    array.push(parseInt(rate));
}

const ratingMean = (array) => {
    let arrayEntries = array.length;
    console.log(arrayEntries);
    let sum = array.reduce((total, rate) => total + rate);
    return Math.round((sum / arrayEntries) * 100) / 100;
}

const addRatingMeanDiv = (mean) => {
    meanRating.innerHTML = `Note moyenne : ${mean} <span class="rating-gold">★</span>`;
}


//******** User Interaction Functions

// Function to add color to the selected stars
const coloringStars = (starNumber) => {

    starRating.forEach((star) => {
        star.classList.remove('unique-comment-rating-gold');
        star.classList.remove('unique-comment-rating-gold');
    });

    for(let i = 0; i < parseInt(starNumber); i++) {
      
        starRating[i].classList.toggle('unique-comment-rating-black');
        starRating[i].classList.toggle('unique-comment-rating-gold');
     
    }
}

// Function to append the new comment
const addNewComment = (commentContainer, commentName, commentRating, commentMessage) => {
    opinionsContainer.appendChild(commentContainer);
    commentContainer.appendChild(commentName);
    commentContainer.appendChild(commentRating);
    commentRating.appendChild(commentMessage);
}

// Function to create the new comment
const createComment = (name, rating, message) => {
    const newCommentContainer = document.createElement('div');
    const newCommentName = document.createElement('div');
    const newCommentRating = document.createElement('div');
    const newCommentMessage = document.createElement('div');

    if(name !== "") {
        newCommentName.innerHTML = name;
    } else {
        newCommentName.innerHTML = "Anonyme";
    }
    
    switch(rating) {
        case "1":
            newCommentRating.innerHTML = "★";
            break;
        case "2":
            newCommentRating.innerHTML = "★★";
            break;
        case "3":
            newCommentRating.innerHTML = "★★★";
            break;
        case "4":
            newCommentRating.innerHTML = "★★★★";
            break;
        case "5":
            newCommentRating.innerHTML = "★★★★★";
            break;
        default:
            newCommentRating.innerHTML = "Rating error";
    }

    newCommentMessage.innerHTML = message;
    
    positionClassComment(newCommentContainer);
    addClassComment(newCommentContainer, newCommentName, newCommentRating, newCommentMessage);
    addNewComment(newCommentContainer, newCommentName, newCommentRating, newCommentMessage);

}

// Function to add classes to the comment elements
const addClassComment = (container, name, rating, message) => {
    container.classList.add('unique-comment-container');
    name.classList.add('unique-comment-name');
    rating.classList.add('unique-comment-rating-gold');
    message.classList.add('unique-comment-message');
}

// Functio to define the position (left or right according to even or uneven)
const positionClassComment = (container) => {
    if(commentPosition % 2 === 0) {
        container.classList.add('even');
    } else {
        container.classList.add('uneven')
    }
    commentPosition++;
}


//******** Events


//****** Easter Egg */
document.querySelector('h1').addEventListener('click', () => {
  document.querySelector('#raccoon-egg').classList.toggle('raccoon-egg-animation');
});

//******** Page Generation Functions

// Create all the elements, add the info and add the rating in the array
for(let i = 0; i < commentsList.length; i++) {
    createComment(commentsList[i].name, commentsList[i].rating, commentsList[i].comment);
    ratingAdd(commentsList[i].rating, userRatings);   
}

// Calc the mean and add it to the div
addRatingMeanDiv(ratingMean(userRatings));

// Click on a star
starRating.forEach(function(ratingStar) {
    ratingStar.addEventListener('click', () => {
        starRatingValue = ratingStar.getAttribute('value');
        coloringStars(starRatingValue);
    });
});

// Submitting the form
document.querySelector('#submit').addEventListener('click', function(e) {
    e.preventDefault();

    let nameSubmit = document.querySelector('#name').value;
    let ratingSubmit = starRatingValue;
    let messageSubmit = document.querySelector('#message').value;

    createComment(nameSubmit, ratingSubmit, messageSubmit);

    ratingAdd(ratingSubmit, userRatings);
    // Calc the mean and add it to the div
    addRatingMeanDiv(ratingMean(userRatings));
});



