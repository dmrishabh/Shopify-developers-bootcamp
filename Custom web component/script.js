// const sectionId = document.querySelector('button').dataset.sectionId;
// document.querySelector('button').addEventListener('click', function (e) {

//   document.querySelector('span').innerHTML = sectionId;


// });

document.querySelectorAll('button').forEach((button,index) => {
    button.addEventListener('click', function (e) {
        document.querySelectorAll('span')[index].innerHTML = button.dataset.sectionId;
    });
})