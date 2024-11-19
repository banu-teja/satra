import {browser} from 'wxt/browser'


export default defineBackground(() => {
  console.log('Hello background!', {id: browser.runtime.id});

  // Listen for messages from the popup script
  browser.runtime.onMessage.addListener(async (message: any) => {
    console.log('Message received in background script:', message);

    if (message.type === 'COUNTER_UPDATE') {
      const counter = message.count;
      console.log(`Counter value is ${counter}`);

      const testUrl = browser.runtime.getURL('/icon/16.png');
      console.log('Resolved URL:', testUrl);


      if (counter >= 3) {
        await browser.notifications.create({
          type: 'basic',
          iconUrl: browser.runtime.getURL('/icon/16.png'),
          title: 'Counter Alert',
          message: `The counter has reached ${counter}!`,
        });
      }
    }
  });
});
