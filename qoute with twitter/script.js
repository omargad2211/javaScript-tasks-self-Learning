const quoteContainer = document.querySelector(".quote");
const newBtn = document.querySelector(".new");
const tweerBtn = document.querySelector(".tweet");

const getQuote = async function () {
    try {
      
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
      
    quoteContainer.innerHTML = "";
    const markup = `
              <div class="quote-content">
            <p>'${data.content}'</p>
          </div>
          <div class="quote-auth">
            <p>${data.author}</p>
          </div>
    `;

    quoteContainer.insertAdjacentHTML("beforeend", markup);
  } catch (e) {
    console.error(e);
  }
};

const tweetQuote = function () {
    const tweetQuote = document.querySelector(".quote-content p");
  window.open(
    `https://twitter.com/intent/tweet?text=${tweetQuote.innerHTML}`,
    "tweetWindow",
    "width=600,height=300"
  );
}


newBtn.addEventListener("click", getQuote);
tweerBtn.addEventListener("click", tweetQuote);
