console.log("Background running and listening for browser action");

const buttonClicked = tab => {
  let msg = {
    txt: "hello"
  };

  console.log("hi");
  chrome.tabs.sendMessage(tab.id, msg);
};

chrome.browserAction.onClicked.addListener(buttonClicked);
