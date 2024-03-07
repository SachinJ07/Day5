let resume = {
    firstName:"Sachin",
    lastName:"Johnson",
    PhoneNumber:"9080095410",
    Gmail:"jsachinjones@gmail.com",
    Address:"2/105,Ambarampalayam,pollachi.",
    Skills:"HTML5,C.S.S,JavaScript",
    education:"M.S.W",
    languages:"Tamil,English"
    
};

const values = Object.values(resume);
  
for (const value of values) {
  console.log(value);
}
/*
output

Sachin
Johnson
9080095410
jsachinjones@gmail.com
2/105,Ambarampalayam,pollachi.
HTML5,C.S.S,JavaScript
M.S.W
Tamil,English
*/