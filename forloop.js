
let resume = {
    firstName:"Sachin",
    lastName:"Johnson",
    PhoneNumber:"9080095410",
    Gmail:"jsachinjones@gmail.com",
    Address:"2/105,Ambarampalayam,pollachi.",
    Skills:["HTML5","C.S.S,JavaScript",],
    education:"M.S.W",
    languages:["Tamil","English"],



  
    };


const keys = Object.keys(resume);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = resume[key];
    console.log(`${key}: ${value}`);
}


/*
Output

firstName: Sachin
lastName: Johnson
PhoneNumber: 9080095410
Gmail: jsachinjones@gmail.com
Address: 2/105,Ambarampalayam,pollachi.
Skills: HTML5,C.S.S,JavaScript
education: M.S.W
languages: Tamil,English
*/