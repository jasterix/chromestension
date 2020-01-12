console.log("Background running and listening for browser actions");

const buttonClicked = tab => {
  let msg = {
    txt: "hello"
  };

  console.log("hi");
  chrome.tabs.sendMessage(tab.id, msg);
};

chrome.browserAction.onClicked.addListener(buttonClicked);
