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
}
];



// UTILITY FUNCTIONS
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// Landing Page
const enterSite = () => {
  const domString = `
    <div class="card">
      <div class="card-body">
        <img src="https://cdn.iconscout.com/icon/free/png-256/witch-105-1074593.png" class="card-img-top" style="width: 18rem;" alt="hoggy sorting hat">
        <h5 class="card-title">Join a Hoggy House!</h5>
        <p class="card-text">The sorting hat will sort you out.</p>
        <a href="#" class="btn btn-primary">Join a House</a>
      </div>
    </div>
  `;
  renderToDom('#enter', domString); //call it 
};

//After Entering Site
const mainSite = () => {
  const domString = `
    <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
  renderToDom("pageTwo",domString);
}; 


const startApp = () => {
  enterSite();
  mainSite();
}
startApp(); 
