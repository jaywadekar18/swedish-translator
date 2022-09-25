let btn = document.querySelector("#btn");
let output = document.querySelector("#output");
let input = document.querySelector("#input");

btn.addEventListener(
  "click",
  async function translate() {
    try {
      let inputText = input.value;
      console.log(inputText);
      if (!inputText) {
        alert('Enter some text!')
        return;
      }
      let res = await fetch(
        `https://api.funtranslations.com/translate/chef.json?text=${inputText}`
      );
      let response = await res.json();
      output.innerHTML = response.contents.translated;
    } catch (err) {
        alert('some issue occured!!!')
    }
  }
);
