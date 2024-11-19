<script lang="ts">
  import {browser} from "wxt/browser";

  let count: number = $state(0);

  const sendCounterToBackground = async () => {
    try {
      await browser.runtime.sendMessage({type: 'COUNTER_UPDATE', count});
    } catch (error) {
      console.error('Failed to send counter to background:', error);
    }
  };

  const increment = async () => {
    count += 1
    await sendCounterToBackground();

  }

</script>

<button onclick={increment}>
  count is {count}
</button>
