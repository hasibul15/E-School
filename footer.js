const termsBtn = document.querySelector('.terms');
const courseBtn = document.querySelector('.course');
const linksBtn = document.querySelector('.links');

const termsDiv = document.querySelector('.terms-div');
const courseDiv = document.querySelector('.course-div');
const linksDiv = document.querySelector('.links-div');

termsBtn.addEventListener('click', function () {
    console.log('terms btn clicked');
    termsDiv.classList.toggle('hidden');
});

courseBtn.addEventListener('click', function () {
    console.log('course btn clicked');
    courseDiv.classList.toggle('hidden');
});

linksBtn.addEventListener('click', function () {
    console.log('links btn clicked');
    linksDiv.classList.toggle('hidden');
});
