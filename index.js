const wordList = ["Git", "Action", "Merge", "Build", "Deploy"];

function makeRandomIndex(list) {
  return Math.floor(Math.random() * list.length);
}

function chooseWordFromListByIndex(i, list) {
  return list[i];
}

//add new function

window.renderResultIntoHtml = function () {
  const index = makeRandomIndex(wordList);
  const randomWorld = chooseWordFromListByIndex(index, wordList);

  const spanElem = document.querySelector("div h1 span");
  spanElem.innerHTML = randomWorld;
};

export { chooseWordFromListByIndex, makeRandomIndex };
