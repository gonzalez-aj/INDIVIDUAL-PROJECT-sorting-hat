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
 
const housesArray = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"]; 

// UTILITY FUNCTIONS  ~~re-usable b/c it's global, so we call it inside our functions local lexicon 
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId); //passed divID, the div w/ this ID i'm assigning selectedElement 
  selectedElement.innerHTML = textToRender; //going inside of of div and giving it a whole string of HTML 
};


//const enterBtn = document.querySelector('#enterBtn'); 
//const houseNames = document.querySelector('#houses');  
//const studentCards = document.querySelector('#cards');  
//const mainTop = document.querySelector('#submit'); 


// Landing Page 
const enterSite = () => {
  let domString = `
    <div class="card">
      <div class="card-body">
        <img src="https://cdn.iconscout.com/icon/free/png-256/witch-105-1074593.png" class="card-img-top" style="width: 18rem;" alt="hoggy sorting hat">
        <h5 class="card-title">Join a Hoggy House!</h5>
        <p class="card-text">The sorting hat will sort you out.</p>
        <a href="#" id='enterBtn' class="btn btn-primary">Join a House</a>
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
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <div>
      <button type="button" class="btn btn-primary">Ravenclaw</button>
      <button type="button" class="btn btn-success">Slytherin</button>
      <button type="button" class="btn btn-danger">Gryffindor</button>
      <button type="button" class="btn btn-warning">Hufflepuff</button>
      <button type="button" class="btn btn-secondary">All</button>
    </div>

    <div class="row g-0 container-sm">
      <div class="col-sm-6 col-md-8">Students</div>
      <div class="col-6 col-md-4">Voldy Moldy's Army</div>
    </div>
  `;
  
  landingPage.style.display = 'none';
  renderToDom('#submit', domString);
}; 

//Event Listener to render main site to DOM
landingPage.addEventListener('click', event => {
  if (event.target.id === 'enterBtn') { 
    mainSite();
  }
}); 

// put the cards on the DOM
for (member of students) {
  if (member.students) {
    studentString += `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    `
  }
}

//landing page
const startApp = () => {
  enterSite();
}
startApp(); 
