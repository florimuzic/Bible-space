const verses = [
  {
    quote: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16"
  },
    {
    quote: "I have come into the world as a light, so that no one who believes in me should stay in darkness.",
    reference: "John 12:46"
  },
  {
    quote: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.",
    reference: "Ephesians 2:8"
  },
  {
    quote: "Trust in the Lord with all your heart and lean not on your own understanding;",
    reference: "Proverbs 3:5"
  },
  {
    quote: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
    reference: "Matthew 6:34"
  },
  {
    quote: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13"
  },
  {
    quote: "The Lord is my shepherd, I lack nothing.",
    reference: "Psalm 23:1"
  },
  {
    quote: "Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
    reference: "1 Thessalonians 5:16-18"
  },
  {
    quote: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28"
  },
  {
    quote: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reference: "Philippians 4:6"
  },
  {
    quote: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    reference: "Proverbs 18:10"
  }
];

const backgrounds = [
  "https://i.ibb.co/Z8w5NRJ/PEACH-Horizontal-NO-Texture-08.jpg",
  "https://i.ibb.co/rk9mZGd/PEACH-Horizontal-NO-Texture-07.jpg",
  "https://i.ibb.co/qN7Ps02/PEACH-Horizontal-NO-Texture-06.jpg",
  "https://i.ibb.co/GPhcd8p/PEACH-Horizontal-NO-Texture-05.jpg",
  "https://i.ibb.co/9whnvDt/PEACH-Horizontal-NO-Texture-04.jpg",
  "https://i.ibb.co/z6jhgZG/PEACH-Horizontal-NO-Texture-03.jpg",
  "https://i.ibb.co/6JKpPQ8/PEACH-Horizontal-NO-Texture-02.jpg",
  "https://i.ibb.co/ZXbPMTY/PEACH-Horizontal-NO-Texture-01.jpg",
  "https://i.ibb.co/5c58t3L/PEACH-Horizontal-16.jpg"
];

const quoteContainer = document.querySelector(".quote-container");
const quote = document.querySelector(".quote");
const reference = document.querySelector(".reference");
const button = document.querySelector("button");

function generateVerse() {
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  
  quote.textContent = randomVerse.quote;
  reference.textContent = randomVerse.reference;
  quoteContainer.style.backgroundImage = `url('${randomBackground}')`;
  button.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
}

button.addEventListener("click", generateVerse);

generateVerse();