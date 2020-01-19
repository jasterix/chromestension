console.log("Background running and listening for browser actions. Making a change.");

const buttonClicked = tab => {
  let msg = {
    txt: "hello"
  };

  chrome.tabs.sendMessage(tab.id, msg);
};

chrome.browserAction.onClicked.addListener(buttonClicked);
