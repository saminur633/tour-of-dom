const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid blue';
    section.style.marginTop = '5px';
    section.style.borderRadius = '5px';
    section.style.backgroundColor = 'lightgray'
}
const placecontainer = document.getElementById("places-container");
placecontainer.classList.add("text-center");
placecontainer.classList.remove('large text');