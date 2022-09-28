const generateShortURL = () => {
  const sURL = getRandomURL();
  console.log(sURL);
  let x = document.getElementById("sURL");
  x.textContent = sURL;
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
