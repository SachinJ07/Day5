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
Object.entries(resume).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


/* output


firstName: Sachin
lastName: Johnson
PhoneNumber: 9080095410
Gmail: jsachinjones@gmail.com
Address: 2/105,Ambarampalayam,pollachi.
Skills: HTML5,C.S.S,JavaScript
education: M.S.W
languages: Tamil,English
*/