

const iconMenu = document.querySelector('.burger');
const navMenu = document.querySelector('.menu-list');


    iconMenu.addEventListener("click", () => {
    document.body.classList.toggle('_lock');
    document.querySelector('.shadow').classList.toggle('_active');
    iconMenu.classList.toggle('_active');
    navMenu.classList.toggle('_active');
    });


/* закрытие бургер меню */
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
];

const pets2 = [
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
  },
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
  },
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
  },
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
  },
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
  },
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
  }
]

/*--------------------------popup---------------------------------- */

const POPUP = document.querySelector('.popup');
const BODY = document.querySelector('body');
const BUTTON = document.querySelector('.popup-close');
const CAROUSEL = document.querySelector('.cards');

function openPopup () {
POPUP.classList.add('open');
BODY.classList.add("_lock");
}

const closePopup = () => {
POPUP.classList.remove('open');
BODY.classList.remove("_lock");
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

/*----------------------------pagination----start-----------------------------*/

const leftArrow = document.querySelector('.nav-2');
const rightArrow = document.querySelector('.nav-4');
const leftDblArrow = document.querySelector('.nav-1');
const rightDblArrow = document.querySelector('.nav-5');
let numberArrow = document.querySelector('.nav-3');
let numberPage=0;

/*----------------------arrow---------------------------------- */

rightArrow.addEventListener("click", function () {

  if (numberPage >=0 && numberPage <= 4){
    numberPage +=1;
  numberArrow.textContent = numberPage +1;
  leftArrow.classList.add("_active");
  leftDblArrow.classList.add("_active");
  }
  if(numberPage === 5){
    rightArrow.classList.add("_active");
    rightDblArrow.classList.add("_active");
    leftArrow.classList.add("_active");
    leftDblArrow.classList.add("_active");
    console.log(numberPage)
  }
})

leftArrow.addEventListener("click", function () {
 if (numberPage >= 1){
  numberPage -=1;
  numberArrow.textContent = numberPage +1;
  }
  if (numberPage === 0) {
    leftArrow.classList.remove("_active");
    leftDblArrow.classList.remove("_active");
    rightArrow.classList.remove("_active");
    rightDblArrow.classList.remove("_active");
  }
})

rightDblArrow.addEventListener("click", function () {
  numberPage = 5;
  numberArrow.textContent = numberPage +1;
 
  if(numberPage === 5){
    rightArrow.classList.add("_active");
    rightDblArrow.classList.add("_active");
    leftArrow.classList.add("_active");
    leftDblArrow.classList.add("_active");
  
  }
})

leftDblArrow.addEventListener("click", function () {
  numberPage = 0;
  numberArrow.textContent = numberPage +1;

  if(numberPage === 0){
    rightArrow.classList.remove("_active");
    rightDblArrow.classList.remove("_active");
    leftArrow.classList.remove("_active");
    leftDblArrow.classList.remove("_active");
  }
})

/*--------------------------------------------------------------- */

let NAV = document.querySelectorAll('.navigation span');
let CARD = document.querySelector('.cards');

let notesOnPage = 8;


for (let item of NAV) {//при нажатии на кнопки происходит загрузка новых карточек
  item.addEventListener("click", function(x) {
    CARD.innerHTML = '';
      createEl()
    })
  }


window.onload = createEl()//при загрузке стр происходит загрузка карточек

function createEl() {
  for (let item of NAV) {
      CARD.innerHTML = '';
      /*стр 0 - 0 до 1
        стр 1 - 1    2
        стр 2 - 2    3
        стр 3 - 3    4   
      */
      let start = (numberPage) * notesOnPage;
      let end = start + notesOnPage;
      let notes = pets2.slice(start, end);
  
      for (let note of notes) {
        let choose = document.createElement("div");
        choose.classList.add("choose");
        choose.setAttribute('id', note.id);
        CARD.appendChild(choose);
  
        let img = note.img;
        let imgNew = document.createElement('img');
        imgNew.classList.add('choose-img')
        imgNew.setAttribute('src', img);
        choose.appendChild(imgNew)
  
        let pNew = document.createElement('p');
        pNew.classList.add('choose-par');
        pNew.innerHTML = note.name;
        choose.appendChild(pNew);
  
  
        let button = document.createElement('button');
        button.classList.add('choose-button');
        button.innerText = "Learn more";
        choose.appendChild(button)
      }
  }
}



/*----------------------------pagination----end-----------------------------*/

