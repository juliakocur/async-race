/*-------------------------burger-----------------------------*/

const iconMenu = document.querySelector('.burger');
const navMenu = document.querySelector('.menu-list');


iconMenu.addEventListener("click", () => {
document.body.classList.toggle('_lock');
document.querySelector('.shadow').classList.toggle('_active');
iconMenu.classList.toggle('_active');
navMenu.classList.toggle('_active');
});


const closeBurger = () => {
    document.body.classList.remove('_lock');
    document.querySelector('.shadow').classList.remove('_active');
    iconMenu.classList.remove('_active');
    navMenu.classList.remove('_active');
};

navMenu.addEventListener("click", () => {
    closeBurger();
});

document.querySelector('.shadow').addEventListener("click", () => {
  if (navMenu.classList.contains('_active')) closeBurger();
});

/*----------------------------------------------------------------------------*/
const pets = [
    {
      id: 1,
      name: "Jennifer",
      img: "assets/pets-jennifer.png",
      type: "Dog",
      breed: "Dog - Labrador",
      description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 2,
      name: "Sophia",
      img:  "assets/kat.png",
      type: "Dog",
      breed: "Dog - Shih tzu",
      description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 3,
      name: "Woody",
      img: "assets/pets-woody.png",
      type: "Dog",
      breed: "Dog - Golden Retriever",
      description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculation: ["adenovirus", "distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"]
    },
    {
      id: 4,
      name: "Scarlett",
      img: "assets/sca.png",
      type: "Dog",
      breed: "Dog - Jack Russell Terrier",
      description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 5,
      name: "Katrine",
      img: "assets/pets-katrine.png",
      type: "Cat",
      breed: "Cat - British Shorthair",
      description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 6,
      name: "Timmy",
      img: "assets/pets-timmy.png" ,
      type: "Cat",
      breed: "Cat - British Shorthair",
      description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", "viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"]
    },
    {
      id: 7,
      name: "Freddie",
      img: "assets/fre.png",
      type: "Cat",
      breed: "Cat - British Shorthair",
      description: ["none"],
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 8,
      name: "Charly",
      img: "assets/pets-charly.png",
      type: "Dog",
      breed: "Dog - Jack Russell Terrier",
      description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["lice", "fleas"]
    }
  ]

  /*------------------------------slider--------------------------------*/

  const BTN_LEFT = document.querySelector("#btn-left");
  const BTN_RIGHT = document.querySelector("#btn-right");
  const CAROUSEL = document.querySelector("#carousel");
  const ITEM_LEFT = document.querySelector("#item-left");
  const ITEM_RIGHT = document.querySelector("#item-right");
  const ITEM_ACTIVE = document.querySelector("#item-active");
  const cardImage = document.querySelector('.choose-img');
 

  const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };


  const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };/*2.карусель влево и убираем класс*/

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);/*1. нажимается левая кнопка*/

    CAROUSEL.addEventListener("animationend", (animationEvent) => {

      let changedItem;
      if(animationEvent.animationName === "move-left") { /* если нажали кнопку влево*/
          CAROUSEL.classList.remove("transition-left"); /* то убрать класс влево*/
          changedItem= ITEM_LEFT;                      /* сгенерировать карточкам новые значения влево*/
          document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;/* сделать активный класс с присвоенными ранее значениями слева */
      } else {
          CAROUSEL.classList.remove("transition-right");
          changedItem = ITEM_RIGHT;
          CAROUSEL.classList.remove("transition-left");
          document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
      }

    

      const createCardTemplate = () => {/*генерирую карточку */
          let random = (Math.floor(Math.random() * 8));

          const choose = document.createElement("div");
          choose.classList.add("choose");
          choose.setAttribute('id', random+1);

          let img = pets[random].img;
          let imgNew = document.createElement('img');
          imgNew.classList.add('choose-img')
          imgNew.setAttribute('src', img);

          let pNew = document.createElement('p');
          pNew.classList.add('choose-par');
          pNew.innerText = pets[random].name;

          let button = document.createElement('button');
          button.classList.add('choose-button');
          button.innerText = "Learn more";
        

          choose.appendChild(imgNew);
          choose.appendChild(pNew);
          choose.appendChild(button);
          return choose;
        }

      changedItem.innerHTML = "";
  
    
      for (let i=0; i<3; i++){
          const card = createCardTemplate();
          changedItem.appendChild(card);
      }

    
      BTN_LEFT.addEventListener("click", moveLeft);
      BTN_RIGHT.addEventListener("click", moveRight);
    }) 

  /*--------------------------popup---------------------------------- */

const POPUP = document.querySelector('.popup');
const BODY = document.querySelector('body');
const BUTTON = document.querySelector('.popup-close');

function openPopup () {
  POPUP.classList.add('open');
  BODY.classList.add("_lock");
  document.querySelector('.shadow').classList.add('_active');

}

const closePopup = () => {
  POPUP.classList.remove('open');
  BODY.classList.remove("_lock");
  document.querySelector('.shadow').classList.remove('_active');

};

BUTTON.addEventListener("click", () => {
  closePopup();
});



document.addEventListener("click", (e) => {
  if (e.target ===  document.querySelector('.popup-body')){
    closePopup();
  }
})/*если клик по попап-боди = true - закрыть окно*/


function createPopup (e) {
  let id = e.id-1;
console.log(e)
  let name = document.querySelector('.popup-title');
  let breed = document.querySelector('.popup-subtitle');
  let text = document.querySelector('.popup-par');
  let petImg = document.querySelector('.img-pop');
  let imgPet = pets[id].img;
  let age = document.querySelector('.age');
  let inoculations = document.querySelector('.inoculations');
  let diseases = document.querySelector('.diseases');
  let parasites = document.querySelector('.parasites');


  name.innerText = pets[id].name;
  breed.innerText = pets[id].breed;
  text.innerText = pets[id].description;
  petImg.setAttribute('src', imgPet);
  age.innerText = pets[id].age;
  inoculations.innerText = pets[id].inoculations;
  diseases.innerText = pets[id].diseases;
  parasites.innerText = pets[id].parasites;
}

CAROUSEL.addEventListener ("click", (e) => {
 if (e.target.closest('.choose')) {
  openPopup();
  createPopup(e.target.closest('.choose'));/*передаю в функцию имя ближайшего родителя кликнутого элемента*/
 }
})

/*-------------------------------------------------------------*/






 

