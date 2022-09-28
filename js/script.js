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

  let urls = localStorage.getItem("urls");
  if (!urls) {
    const obj = {};
    obj[x] = lURL;
    localStorage.setItem("urls", JSON.stringify(obj));
  } else {
    const newUrls = JSON.parse(urls);
    newUrls[x] = lURL;
    localStorage.setItem("urls", JSON.stringify(newUrls));
  }
  document.getElementById("longUrl").value = "";
};

const copy = (id) => {
  const copyText = document.getElementById(id).textContent;
  navigator.clipboard.writeText(copyText);
};
const retrieveLongURL = () => {
  const sURL = document.getElementById("shortUrl").value;
  if (!sURL) {
    alert("You must Enter Url.");
    return;
  }

  const urls = JSON.parse(localStorage.getItem("urls"));
  const lURL = urls[sURL];
  console.log(urls);
  if (!lURL) {
    alert("URL Not Found, Try Again.");
    return;
  }

  document.getElementById("lURL").textContent = lURL;
  document.getElementById("longUrl").value = "";
};

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
