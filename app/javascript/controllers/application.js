import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

document.addEventListener('turbo:load', () => {
    const form = document.getElementById('new-post-form');
    const submitButton = document.getElementById('add-memo-button');
  
    if (form && submitButton) {
      submitButton.addEventListener('click', () => {
        form.requestSubmit(); // HTML5のrequestSubmitを使用
      });
  
      form.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          const isCtrlOrCmdPressed = event.ctrlKey || event.metaKey;
  
          if (isCtrlOrCmdPressed) {
            // Control+Enter または Command+Enter が押された場合、フォームを送信
            form.requestSubmit();
          } else {
            // 単独のEnterキー押下の場合、送信を防止
            event.preventDefault();
          }
        }
      });
    }
  });

export { application }
