$(document).ready(function() {
    var quotes = ["“Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.” ― Leonardo da Vinci",
 
      "“Study without desire spoils the memory, and it retains nothing that it takes in.” ― Leonardo da Vinci",
 
      "“It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.” ― Leonardo da Vinci",
 
      "“The noblest pleasure is the joy of understanding.” ― Leonardo da Vinci",
 
      "“The knowledge of all things is possible” ― Leonardo da Vinci",
 
      "“There are three classes of people: those who see. Those who see when they are shown. Those who do not see.” ― Leonardo da Vinci",
 
      "“The function of muscle is to pull and not to push, except in the case of the genitals and the tongue.” ― Leonardo da Vinci",
 
      "“Principles for the Development of a Complete Mind: Study the science of art. Study the art of science. Develop your senses- especially learn how to see. Realize that everything connects to everything else.” ― Leonardo da Vinci",
 
      "“The deeper the feeling, the greater the pain” ― Leonardo da Vinci",
 
      "“It is easier to resist at the beginning than at the end.” ― Leonardo da Vinci",
 
      "“As you cannot do what you want, Want what you can do” ― Leonardo da Vinci",
 
      "“One has no right to love or hate anything if one has not acquired a thorough knowledge of its nature. Great love springs from great knowledge of the beloved object, and if you know it but little you will be able to love it only a little or not at all.” ― Leonardo da Vinci",
 
      "“Every now and then go away, have a little relaxation, for when you come back to your work your judgment will be surer. Go some distance away because then the work appears smaller and more of it can be taken in at a glance and a lack of harmony and proportion is more readily seen.” ― Leonardo da Vinci",
 
      "“I thought I was learning to live; I was only learning to die.” ― Leonardo da Vinci",
 
      "Love is not necessary, power is the only true necessity. ― Uchiha Madara",
 
      "People cannot show each other their true feelings. Fear, suspicion, and resentment never subside. ― Uchiha Madara",
 
      "I'd be lying if I said things are going according to my plan... but beggars can't be choosers, right? ― Uchiha Madara",
 
      "....Would you consider dying together Teamwork as well? ― Uchiha Madara",
 
      "Man seeks peace, yet at the same time yearning for war... Those are the two realms belonging solely to man. Thinking of peace whilst spilling blood is something that only humans could do. They're two sides of the same coin... to protect something... another must be sacrificed. ― Uchiha Madara",
 
      "Power is not will, it is the phenomenon of physically making things happen. ― Uchiha Madara",
 
      "Don't improvise what you cannot handle. ― Uchiha Madara",
 
      "In this world, wherever there is light - there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love. ― Uchiha Madara",
 
      "When a man learns to love, he must bear the risk of hatred. ― Uchiha Madara"
    ];
    var ranQuotes = getRandomInt(0, quotes.length);
    $("#newQuote").on("click", function() {
      ranQuotes = getRandomInt(0, quotes.length);
      $(".message").text(quotes[ranQuotes]);
    });
 
    $("#tweet").on("click", function() {
      window.open('https://twitter.com/intent/tweet?text=' + quotes[ranQuotes]);
    });
 
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
 
  });