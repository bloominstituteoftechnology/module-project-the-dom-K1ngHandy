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

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  const corporateSpeak = document.querySelector('.corporatespeak');

  const random = (arr) => {
    return Math.floor(Math.random() * arr.length)
  };

  const corporateSentence = () => {
    corporateSpeak.innerHTML = '';
      
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

  counter.textContent = `T-minus ${currentCount}...`;
  setInterval(() => {
    if (currentCount > 1) {
      currentCount --;
      counter.textContent = `T-minus ${currentCount}...`;
      
    } else {
      counter.textContent = "Liftoff! 🚀";
      clearInterval()
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  const friendsDiv = document.querySelector('.friends');
  const sentence = document.createElement('p');

  const randomIdx = random(people);
  const person = people[randomIdx];
  
  const firstName = person.fname;
  const lastName = person.lname;

  let friendsOfFriend = person.friends.map(friendId => {
    const friend = people.find(p => p.id === friendId);
    return friend ? `${friend.fname} ${friend.lname}` : null;
  }).filter(name => name !== null);
  
  if (friendsOfFriend.length > 1) {
    const lastFriend = friendsOfFriend.pop();
    // add ", and" before last friend
    friendsOfFriend = `${friendsOfFriend.join(", ")} and ${lastFriend}`;
  } else {
    friendsOfFriend = friendsOfFriend.join(", ");
  }
  
  const date = new Date(person.dateOfBirth);
  const year = date.getFullYear();
  
  sentence.textContent = friendsOfFriend.length ?
    `${firstName} ${lastName} was born in ${year} and is friends with ${friendsOfFriend}.` :
    `${firstName} ${lastName} was born in ${year} and has no friends.`;
  friendsDiv.appendChild(sentence);

  // 👉 TASK 6 - Make it so user can tab through the widgets
  const tab = document.querySelectorAll('.widget');
  tab.forEach((widget, num) => {
      widget.setAttribute('tabindex', num + 1);
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
