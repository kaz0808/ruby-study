import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-post-form');
  
    if (form) {
      form.addEventListener('keydown', function(event) {
        // Enterキーが押されたときに送信を防ぐ
        if (event.key === 'Enter') {
          event.preventDefault();
          return false;
        }
      });
    }
  });

export { application }
