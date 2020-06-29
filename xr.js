// This will produce n-y errors, where n is number of tabs and y is number of youtube tabs
browser.commands.onCommand.addListener(async () => {
  // tbh too lazy to understand async so use try/catch to diagnose errors
  try {
    tabs = await browser.tabs.query({});
    tabs.forEach(t => browser.tabs.executeScript(
      t.id,
      {
        code: `document.querySelectorAll('video').forEach(video => {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });`
      }
    ));
  } catch (e) {
    console.log(e);
  }
});
