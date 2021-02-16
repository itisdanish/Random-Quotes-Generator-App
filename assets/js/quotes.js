const displayQuote = document.querySelector('.qoutes')
const button =document.querySelector('button')
const authorName = document.querySelector('.name')

var quotes = [
    ["You only live once, but if you do it right, once is enough.","Mae West"],
    ["I am so clever that sometimes I don't understand a single word of what I am saying.","Oscar Wilde"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
  ["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.","Albert Einstein"],
  ["It is our choices, Harry, that show what we truly are, far more than our abilities.","J.K. Rowling, Harry Potter and the Chamber of Secrets"],
  ["All men who have turned out worth anything have had the chief hand in their own education.","Walter Scott"],
  ["Trust yourself. You know more than you think you do.","Benjamin Spock"],
  ["No one can make you feel inferior without your consent.","Eleanor Roosevelt, This is My Story"],
  ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson"],
  ["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.","H. Jackson Brown Jr., P.S. I Love You"]
  ];

button.addEventListener('click', getQuote)

var currentQuote = "";
var currentAuthor = "";
var randomquote = "";

function getQuote() {
    randomquote = Math.floor(Math.random() * quotes.length);
      currentQuote = quotes[randomquote][0];
      currentAuthor = quotes[randomquote][1];
    displayQuote.innerHTML=`" ${currentQuote} "`
    authorName.innerHTML=`- ${currentAuthor}`
    
    $(document).ready(function () {
	  
	    $('#quotetext').animate({ opacity: 0 }, 0, function () {
	        $(this).animate({ opacity: 1 }, 1200 );
	        $(this).text(`" ${currentQuote}"`);
	    });
	    $('#quotesource').animate({ opacity: 0 }, 4, function () {
	        $(this).animate({ opacity: 1 }, 800);
	        $(this).text(`- ${currentAuthor}`);
	    });
    }); 

}

