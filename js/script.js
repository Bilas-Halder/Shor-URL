const generateShortURL = () => {
  const lURL = document.getElementById("longUrl").value;
  if (!lURL) {
    alert("You must Enter Url.");
    return;
  }
  const sURL = getRandomURL();
  console.log(sURL);
  const x = "https://bit.ly/" + sURL;
  document.getElementById("sURL").textContent = x;

  let urls = sessionStorage.getItem("urls");
  urls[lURL] = x;
  sessionStorage.setItem("urls", urls);
  document.getElementById("longUrl").value = "";
};

const copy = (id) => {
  const copyText = document.getElementById(id).textContent;
  navigator.clipboard.writeText(copyText);
};
const retrieveLongURL = () => {};

const getRandomURL = () => {
  const length = 7;
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
