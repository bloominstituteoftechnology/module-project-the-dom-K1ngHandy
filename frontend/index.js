function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const widget = document.querySelectorAll('div');
  widget.forEach(div => {
    div.classList.add('widget')
  });

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  
  const quoteOfTheDay = document.querySelector('.quoteoftheday');
  
  const quoteDiv = () => {
    quoteOfTheDay.innerHTML = ''; // clear previous content

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const currentQuote = quotes[randomIndex];
    
    const quote = document.createElement('div');
    quote.textContent = currentQuote.quote;

    const author = document.createElement('div');
    const date = currentQuote.date;
    author.textContent = date ? `${currentQuote.author} in ${date}` : `${currentQuote.author} in an unknown date`;

    quoteOfTheDay.appendChild(quote);
    quoteOfTheDay.appendChild(author);
  }
  quoteDiv();
  console.log(quotes);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  const corporateSpeak = document.querySelector('.corporatespeak');

  const corporateSentence = () => {
    corporateSpeak.innerHTML = '';

    const random = (arr) => {
      return Math.floor(Math.random() * arr.length)
    };
      
    const adverb1 = adverbs[random(adverbs)];
    const adverb2 = adverbs[random(adverbs)];

    const noun1 = nouns[random(nouns)];
    const noun2 = nouns[random(nouns)];

    const verb1 = verbs[random(verbs)];
    const verb2 = verbs[random(verbs)];

    const corpSentence = document.createElement('p');
    corpSentence.textContent = `We need to ${verb1} our ${noun1} ${adverb1} in order to ${verb2} our ${noun2} ${adverb2}`;

    corporateSpeak.appendChild(corpSentence);
  }
  corporateSentence();

  // 👉 TASK 4 - Build a "Countdown" widget
  const countdown = document.querySelector('.countdown');
  let currentCount = 5;

  const counter = document.createElement('p');
  countdown.appendChild(counter);

  setInterval(() => {
    if (currentCount > 0) {
      counter.textContent = `T-minus... ${currentCount}`;
      currentCount --;
    } else {
      counter.textContent = "Blastoff! 🚀";
      clearInterval()
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
