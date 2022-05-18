const quoteText = document.querySelector(".quote"),
  authorName = document.querySelector(".author .name"),
  quoteBtn = document.querySelector(".btn-quote"),
  SoundBtn = document.querySelector(".sound"),
  CopyBtn = document.querySelector(".copy"),
  Twitter = document.querySelector(".twitter");

function randomQuote() {
  quoteBtn.innerHTML = "Loading quote...";
  //fetching random quotes/data from the API and parsing it into
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerHTML = result.content;
      authorName.innerHTML = result.author;
      quoteBtn.innerHTML = "New Quote";
    });
}
quoteBtn.addEventListener("click", randomQuote);
//   Sound Button
SoundBtn.addEventListener("click", () => {
  //SpeechSynthesisUtterance web speech API that represent a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerHTML} by ${authorName.innerHTML}`
  );
  speechSynthesis.speak(utterance);
});
// Copy Button
CopyBtn.addEventListener("click", () => {
  //writeText() property writes the specified text to the system clipboard
  navigator.clipboard.writeText(quoteText.innerText);
  alert("text Copied");
});
Twitter.addEventListener("click", () => {
  let TweetUrl = `https://twitter.com/intent/tweet?url= ${quoteText.innerText}`;
  window.open(TweetUrl, "_blank");
});
