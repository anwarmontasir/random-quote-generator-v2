/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.', source: 'Patrick McKenzie', citation: 'Twitter', url: 'https://twitter.com/codewisdom/status/1182702520696803329?lang=en'},
  {quote: 'Injustice anywhere is a threat to justice everywhere.', source: 'Martin Luther King, Jr.', citation: 'Letter From a Birmingham Jail', url: 'https://mlk50.civilrightsmuseum.org/justice'},
  {quote: 'One child,one teacher,one book and one pen can change the world', source: 'Malala Yousafzai', citation: 'United Nations Youth Assembly', url: 'https://www.un.org/youthenvoy/video/malala-yousafzai-addresses-united-nations-youth-assembly/'}, 
  {quote: 'My silences had not protected me. Your silence will not protect you.', source: 'Audre Lorde', citation: 'Your Silences Will Not Protect You', url: 'https://www.theguardian.com/books/2017/oct/04/your-silence-will-not-protect-you-by-audre-lorder-review'},
  {quote: 'It’s enough for me to be sure that you and I exist at this moment.', source: 'Gabriel Garcia Márquez', citation: 'One Hundred Years Of Solitude', url: 'https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude'}, 
  {quote: 'I think everybody should be allowed to be who they are, and to love who they love.', source: 'Dolly Parton', citation: 'Billboard', url: 'https://www.billboard.com/articles/columns/the-615/6296620/dolly-parton-talks-50-years-in-nashville-and-supporting-gay-fans'}, 
  {quote: 'Everybody, try laughing. Then whatever scares you will go away.', source: 'Tatsuo Kusakabe', citation: 'My Neighbor Totoro', url: 'https://medium.com/@mattjones012/totoro-in-uncertain-times-53bb0e7a030c'}
];

/* bg array */
const backgrounds = ['#c36', '#6c3', '#3c6', '#36c', '#c63', '#63c', '#366'];

/* currentQuote */
let currentQuote = 0;

/* select DOM element */
const quoteBox = document.querySelector('.quote-box');

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // store random number
  let randomInt;
  // if random number = previous quote number, pick again
  do {
    randomInt = Math.floor(Math.random() * quotes.length);
  } while (randomInt === currentQuote);
  // return new quote number
  return (currentQuote = randomInt);
}

/***
 * `loadQuote` function
***/
function loadQuote() {
  // get new quote number
  const quoteNumber = getRandomQuote();
  // create new HTML
  const quoteHtml = 
  `<p class="quote">${quotes[quoteNumber].quote}</p><p class="source">${quotes[quoteNumber].source}<span class="citation"><a href="${quotes[quoteNumber].url}" target="_blank">${quotes[quoteNumber].citation}</a></span></p>`;
  // update DOM
  quoteBox.innerHTML = quoteHtml;
  // run updateBg
  updateBg(quoteNumber);

  // end timer
  stop();

  // restart timer 
  timer();
}

/* update bg color */
function updateBg(quoteNumber) {
  const bg = backgrounds[quoteNumber];
  document.querySelector('body').style.backgroundColor = bg;
}

/* timer */
let t;

function timer() { 
  t = setInterval(loadQuote, 5000); 
} 

function stop() { 
  clearInterval(t); 
}

timer();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", loadQuote, false);