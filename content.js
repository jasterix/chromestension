console.log("Chrome extension go");

let paragraphs = document.querySelectorAll("p");

for (let el of paragraphs) {
  //   el.style["background-color"] = "#FF00FF";
}

const gotMessage = (message, sender, sendResponse) => {
  console.log(message.txt);
};

chrome.runtime.onMessage.addListener(gotMessage);
