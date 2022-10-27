//array of objects 
const students = [
  {
    id: 1, 
    name: "Hermoine Granger",
    house: "Gryffindor",
    image: "https://live.staticflickr.com/7072/7172831889_9501462824_b.jpg"
  },
  {
    id: 2,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    image: "https://live.staticflickr.com/8149/7305189426_47d462baf2_b.jpg"
  },
  {
    id: 3,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    image: "https://live.staticflickr.com/7207/27713980556_3323db9b59_b.jpg"
  },  
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin",
    image: "https://live.staticflickr.com/8008/7305189598_e2d23b5c43_b.jpg"
  }
];

const darkarts = [
{
  id: 1,
  name: "He Who Shall Not Be Named",
  house: "Moldy Voldy's Army",
  image: "https://live.staticflickr.com/703/32062190795_b2a712ffae_b.jpg",
},
{
  id: 2,
  name: "Angie Gonzalez", 
  house: "Moldy Voldy's Army",
  image: "https://res.cloudinary.com/soundbetter/image/upload/c_fill,f_auto,g_face:auto,h_288,q_70,w_540/v1613517488/assets/photos/62567/Scan_154.jpg"
}
];
 

// UTILITY FUNCTIONS  ~~re-usable b/c it's global, so we call it inside our functions local lexicon 
//               (target div, string of html)
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId); //passed divID, the div w/ this ID i'm assigning selectedElement 
  selectedElement.innerHTML = textToRender; //going inside of of div and giving it a whole string of HTML 
};


// Landing Page 
const enterSite = () => {
  let domString = `
    <div class="card">
      <div class="card-body">
        <img src="https://cdn.iconscout.com/icon/free/png-256/witch-105-1074593.png" class="card-img-top" style="width: 18rem;" alt="hoggy sorting hat">
        <h5 class="card-title">Join a Hoggy House!</h5>
        <p class="card-text">The sorting hat will sort you out.</p>
        <a href="#" id='enterBtn' class="btn btn-primary">Enter if you dare!</a>
      </div>
    </div>
  `;
  renderToDom('#enter', domString); //call it 
};

//Query Selector that selects the "enter site div"
const landingPage = document.querySelector('#enter');

//After Entering Site
const mainSite = () => {
  const domString = `
    <form>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">What's your name, wizard?</label>
        <input type="text" class="form-control" id="name" placeholder=""Harry Potter"" aria-label="What's your name?" required>
      </div> 
      <button type="submit" class="btn btn-primary">Get sorted</button>
    </form>

    <div>
      <button type="button" class="btn btn-primary" id="ravenclawBtn">Ravenclaw</button>
      <button type="button" class="btn btn-success" id="slytherinBtn">Slytherin</button>
      <button type="button" class="btn btn-danger" id="gryffindorBtn">Gryffindor</button>
      <button type="button" class="btn btn-warning" id="hufflepuffBtn">Hufflepuff</button>
      <button type="button" class="btn btn-secondary" id="allBtn">All Houses</button>
    </div>

    <div class="row g-0 container-sm">
      <div class="col-sm-6 col-md-8">Students</div>
      <div class="col-6 col-md-4">Voldy Moldy's Army</div>
    </div>
  `;
  
  landingPage.style.display = 'none';
  renderToDom('#mainpg', domString);
}; 

//main pg query selector for filter buttons and Create! 
const mainPage = document.querySelector('#mainpg'); 

//Event Listener to render main site to DOM
landingPage.addEventListener('click', event => {
  if (event.target.id === 'enterBtn') { 
    mainSite();
    cardsOnDom("#cards", students);
    cardsOnDom("#badcards", darkarts);
  }
}); 

// render to DOM utility + for new Cards
const studentCards = document.querySelector('#cards'); 
// put the cards on the DOM
const cardsOnDom = (aDiv, array) => {
  let cardString = "";
  for (const student of array) {
    cardString += `
    <div class="card text-center">
      <div class="card-header" id="name">
        ${student.name}
      </div>
      <img src="${student.image}" class="card-img-top" alt="${student.name} is a ${student.house}">
      <div class="card-footer">
        ${student.house}
      </div>
      <button class="btn btn-danger" id="delete--${student.id}">Expell Student!</button>
    </div> `;
  };
  renderToDom(aDiv, cardString);  
};

// // function to filter 
const filter = (array, typeString) => {
  const typeArray = [];

  for (const student of array) {
    if (student.house === typeString) {
      typeArray.push(student);
    }
  }; 
  return typeArray;
};

// // ******************** //
// // ****** EVENTS ****** //
// // ******************** // event bubbling! 
//event listeners have to "attach to" something that already exists in the html 
// the funciton of the event listner can live outside of the event listener 

// // 1. Target buttons on the DOM 
//const showAllRavenclaws = document.querySelector("#ravenclawBtn");
// const showAllSlytherins = document.querySelector("#slytherinBtn");
// const showAllGryffindors = document.querySelector("#gryffindorBtn");
// const showAllHufflepuffs = document.querySelector("#hufflepuffBtn");
// const showAllBtn = document.querySelector("#allBtn");

mainPage.addEventListener('click', (event) => {
  if (event.target.id === "ravenclawBtn") {
    const allRavenclaws = filter(students, 'Ravenclaw');
    cardsOnDom("#cards", allRavenclaws);
  }; 
});

mainPage.addEventListener('click', (event) => {
  if (event.target.id === "slytherinBtn") {
    const allSlytherins = filter(students, 'Slytherin');
    cardsOnDom("#cards", allSlytherins);
  };
});

mainPage.addEventListener('click', (event) => {
  if (event.target.id === "gryffindorBtn") {
    const allGryffindors = filter(students, 'Gryffindor');
    cardsOnDom("#cards", allGryffindors);
  }; 
});

mainPage.addEventListener('click', (event) => {
  if (event.target.id === "hufflepuffBtn") {
  const allHufflepuffs = filter(students, 'Hufflepuff');
  cardsOnDom("#cards", allHufflepuffs);
    };
  }); 

mainPage.addEventListener('click', (event) => {
  if (event.target.id === "allBtn") {
    cardsOnDom("#cards", students);
  };
  });



// // ******************** //
// // ****** CREATE ****** //
// // ******************** //
//                     0               1            2             3     
const housesArray = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"]; 
const imageArray = ["https://live.staticflickr.com/7072/7172831889_9501462824_b.jpg", "https://live.staticflickr.com/8149/7305189426_47d462baf2_b.jpg", "https://live.staticflickr.com/7207/27713980556_3323db9b59_b.jpg", "https://live.staticflickr.com/8008/7305189598_e2d23b5c43_b.jpg"]; 

// // 1. select/target the form on the DOM
const form = document.querySelector('form');

// // 2. create a function that grabs the value from the form, pushes the new object to the array, then reprints the DOM with the new wizard
//            (0,  4)
function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}; 

//to test randoNum
//console.log(rand(0,4));

const createStudent = (event) => {
  event.preventDefault(); // EVERY TIME YOU CREATE A FORM, so it doesn't reset entirely
  const newStudentObj = { 
    id: students.length + 1, // this needs to be unique check out the ticket here: https://github.com/orgs/nss-evening-web-development/discussions/126 
    name: studentCards.querySelector("#name").value,
    house: housesArray[rand(0,4)],   
    image: imageArray[rand(0,4)],
}; 

console.log(newStudentObj); //to test 

students.push(newStudentObj);
cardsOnDom(students);
form.reset();
};

// // 3. Add an event listener for the form submit and pass it the function (callback)

mainPage.addEventListener('submit', createStudent);

// // ******************** //
// // ****** DELETE ****** //
// // ******************** //

// // Here we will be using event bubbling
// // 1. Target the app div
// const app = document.querySelector("#");

// // 2. Add an event listener to capture clicks

// app.addEventListener('click', (event) => {
// // 3. check e.target.id includes "delete"  target is a button 
// if (event.target.id.includes("delete")) {
//   const [, id] = event.target.id.split("--");

//   // 4. add logic to remove from array
//   const index = .findIndex(event => event.id === Number(id));
//   .splice(index, 1);

//   // 5. Repaint the DOM wiconst app = document.querySelector("#app");th the updated array
//   cardsOnDom(,);
// }
// });

//landing page
const startApp = () => {
  enterSite();
}
startApp(); 
