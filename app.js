
 // selectors
const name = document.querySelector('#name');
const text = document.querySelector('#text');
const btn = document.querySelector('#btn')
const div = document.querySelector('#story-content');
const form = document.querySelector('form');


/* creating an array for inputs/ objects */

let sharedStory = [];



    function newStory(stories) {

        let { name, msg, datetime, text } = stories;
    
        let div = document.createElement('div');
        div.classList.add('story');

        /* fick en hint om att titta in array destructoring så hårdkodat diven för inlägg */
    
        div.innerHTML = `<h4 id="uname">${name}</h4>
        <h5 id="msg"><i class="fas fa-book"></i> ${msg}</h5>
        <div class="row">
            <h6 id="datetime">ˈRitn: ${datetime}</h6>
        </div><p id="textInput">${text}</p>`

        sharedStory.push(stories)
        console.log(sharedStory)
        return div;


    }

    // localStorage.setItem('storyList', JSON.stringify(sharedStory));
    

    /* creating div for the new inputs */
    function addStory() {

        div.appendChild(newStory({ name: name.value, text: text.value, datetime: new Date().toLocaleString(), msg: 'Shared their tale...'})).scrollIntoView();

        
    

    
    }


    /* event listener on click/ submit*/

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
            addStory();
            document.forms[0].reset();

            var str = JSON.stringify(div);
    localStorage.setItem('stories', JSON.stringify(sharedStory));
            
        
    });
    



























    

/*
const newStory = (e) => {
    e.preventDefault();

    // creating array for new stories
    let newInput = {
        name: name.value,
        text: text.value,
        datetime: new Date().toLocaleString()
    }

//================================================================================



    // gets the new story and name in to the array
    sharedStory.push(newInput);

    // clearing form for next entry
    document.forms[0].reset();

    // display name and story 

    newInput = document.querySelector('.stories').innerHTML;
    

    //======================================================================================
    
    console.warn('added', {sharedStory});
    let pre = document.querySelector('.text pre');
    pre.textContent = "\n" + JSON.stringify(sharedStory, '\t', 2);
    localStorage.setItem('allStories', JSON.stringify(sharedStory));

}


document.addEventListener('DOMContentLoaded', () => {
document.getElementById('btn').addEventListener('click', newS);

});


/*
// listeners
document.getElementById('btn').addEventListener('click', addStory);


// functions 
const addStory = (e) =>{

    // preventing form from submitting
    e.preventDefault();

    const herox = document.querySelector('#hero');
  //const storyx = document.querySelector('#text');

    const newStory = document.createElement('div');
    //create new input, name / h2 and story / paragraph
}

    const newInput = document.createElement('p');
    newInput.innerHTML = herox;
    
    newInput.classList.add('.stories');
    newStory.appendChild(newInput);


document.getElementById('btn').addEventListener('click', addStory);

*/


// creating array for stories, name and story
/*
let sharedStory = [];


const newS = (e) => {
    e.preventDefault();

    // creating array for new stories
    let newInput = {
        Hero: document.querySelector('#name').value,
        Story: document.querySelector('#text').value,
        Date: Date.now()
    }

//================================================================================



    // gets the new story and name in to the array
    sharedStory.push(newInput);

    // clearing form for next entry
    document.forms[0].reset();

    // display name and story 

    newInput = document.querySelector('.stories').innerHTML;
    

    //======================================================================================
    
    console.warn('added', {sharedStory});
    let pre = document.querySelector('.text pre');
    pre.textContent = "\n" + JSON.stringify(sharedStory, '\t', 2);
    localStorage.setItem('allStories', JSON.stringify(sharedStory));

}


document.addEventListener('DOMContentLoaded', () => {
document.getElementById('btn').addEventListener('click', newS);

});
/*
const name = document.getElementById('name');
const text = document.getElementById('text');

const form = document.querySelector('form');


function post () {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var text = document.getElementById('text').value;

    let newStory = document.querySelector('.text #inputs');
    newStory.textContent = "Name of the hero:" + name + "\n +" + "Your Story:" + text;
    //document.getElementById('nname').innerHTML = name;
    //document.getElementById('inputs').innerHTML = text;
}



form.addEventListener('submit', post);
*/

    /*var tag = document.createElement("p");
    let messageBod = name.value + " wrote \"" + text.value + "\"";
    var text = document.createTextNode(messageBod);
// (`${name.value} wrote "${text.value}"`)
    tag.appendChild(text);
    element.appendChild(tag);

//*/
