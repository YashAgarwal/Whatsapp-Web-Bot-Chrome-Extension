chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    // console.log('I\'m Alive!');  
    // console.log(tab.url);
    chrome.tabs.executeScript(tab.ib, {
            file: 'lib/run_bot.js'
    });

    // chrome.tabs.executeScript({
    //   code: `
    //       console.log(tab.url);
    //       console.log('I am Alive!');
    //       start_bot()
    //       console.log('Its done!');
    //   `
    // }); 

});
