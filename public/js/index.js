const qoute_textarea = document.querySelector("#qoute_textarea");
const author_textarea = document.querySelector("#author_textarea");
const qoute_button = document.querySelector("#qoute_button");
const share_button = document.querySelector("#share_button");

const fetch_data = async () => {
  const respone = await fetch("https://api.quotable.io/random");
  const data = await respone.json();
  const qoute_data = await data;
  return qoute_data;
};

const a = async () => {
  const a = await fetch_data();
  quote_content = a.content;
  qoute_author = a.author;
  qoute_textarea.innerHTML = JSON.stringify(quote_content);
  author_textarea.innerHTML = JSON.stringify(qoute_author);
};
a();
qoute_button.addEventListener("click", a);

share_button.addEventListener("click", () => {
  var textToTweet = `${qoute_textarea.innerText}  --by ${author_textarea.innerText}`;
  var hrefEl =
    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(textToTweet);
  window.open(hrefEl, "Twitter", "width=550,height=420");
});
