
//Pictures of the dogs are taken from API https://dog.ceo/api/breed/
//Summaries are taken from API https://en.wikipedia.org/api/rest_v1/page/summary/ + dogname
if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  async function submmit() {
    const dogList = ["basenji", "pug", "doberman", "malamute", "pomeranian"];

    const dogSummary = [];
    for (let i = 0; i < dogList.length; i++) {
      const url1 =
        "https://en.wikipedia.org/api/rest_v1/page/summary/" + dogList[i];
      const dataPromise = await fetch(url1);
      const data = await dataPromise.json();
      let summary = data.extract;
      dogSummary.push(summary);
    }

    let container = document.createElement("div");
    container.className = "container";

    for (let i = 0; i < dogList.length; i++) {
      const url = "https://dog.ceo/api/breed/" + dogList[i] + "/images/random";
      const dataPromise = await fetch(url);
      const data = await dataPromise.json();

      let div1 = document.createElement("div");
      div1.className = "wiki-item";
      let div2 = document.createElement("div");
      div2.className = "wiki-content";
      let div3 = document.createElement("div");
      div3.className = "img-container";

      let img = document.createElement("img");
      img.className = "wiki-img";
      let h1 = document.createElement("h1");
      h1.className = "wiki-header";
      let text = document.createElement("p");
      text.className = "wiki-text";

      img.src = data.message;
      h1.innerText = dogList[i];

      text.innerText = dogSummary[i];
      div3.appendChild(img);
      div2.appendChild(text);
      div2.appendChild(div3);
      div1.appendChild(h1);
      div1.appendChild(div2);
      container.appendChild(div1);
    }
    document.body.appendChild(container);
  }
  submmit();
}
