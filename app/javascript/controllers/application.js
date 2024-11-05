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
        console.log(event.key, "が押されました");
        if (event.key === 'Enter') {
          const isCtrlOrCmdPressed = event.ctrlKey || event.metaKey;
          const isTextArea = event.target.tagName.toLowerCase() === 'textarea';

          if (isCtrlOrCmdPressed) {
            // Control+Enter または Command+Enter が押された場合、フォームを送信
            form.requestSubmit();
          } else {
            // テキストエリア内ではEnterキーを許可（改行を挿入）
            if (isTextArea) return;
            
            // 単独のEnterキー押下の場合、送信を防止
            event.preventDefault();
          }
        }
      });
    }
  });

export { application }
