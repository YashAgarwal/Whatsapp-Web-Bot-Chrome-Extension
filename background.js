// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: `
        document.body.style.backgroundImage="url('http://www.tompetty.com/sites/g/files/g2000007521/f/Sample-image10-highres.jpg')";
    `
  });
});

// document.body.style.backgroundColor="red";