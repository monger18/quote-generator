let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');
const quotes=[{
    quote:`"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."`,
    person:`Martin Luther King`
},
{
    quote:`"Nothing is certain except for death and taxes"`,
    person:`Benjamin Franklin`
},
{
    quote:`"You must be the change you wish to see in the world."`,
    person:`Mahatma Ghandi`
},
{
    quote:`"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time."`,
    person:`Abraham Lincoln`
},
{
    quote:`"My father gave me the best advice of my life. He said, ‘Whatever you do, don’t wake up at 65 years old and think about what you should have done with your life."`,
    person:`George Clooney`
},
{
    quote:`"Thinking is the hardest work there is, which is the probable reason why so few engage in it."`,
    person:`Henry Ford`
},
{
    quote:`"Success is falling nine times and getting up ten."`,
    person:`Jon Bon Jovi`
},
{
    quote:`"Anything’s possible if you’ve got have enough nerve."`,
    person:`J.K. Rowling`
},
{
    quote:`"The journey of a thousand miles begins with one step."`,
    person:`Lao Tzu`
},
{
    quote:`"If you’re going through hell, keep going."`,
    person:`Winston Churchill`
},
{
    quote:`"He that falls in love with himself will have no rivals."`,
    person:`Benjamin Franklin`
},
{
    quote:`"The only impossible journey is the one you never begin."`,
    person:`Tony Robbins`
},
{
    quote:`"Life would be tragic if it weren’t funny."`,
    person:`Stephen Hawking`
},
{
    quote:`"Knowing yourself is the beginning of all wisdom."`,
    person:`Aristotle`
},
{
    quote:`"You can discover more about a person in an hour of play than in a year of conversation."`,
    person:`Plato`
},
{
    quote:`"A lion doesn’t concern himself with the opinions of the sheep."`,
    person:`Lionel Messi`
},];


btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);


    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})


/*timestamp:1.30*/