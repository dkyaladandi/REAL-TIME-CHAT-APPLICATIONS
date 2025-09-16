document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById("send-button");
  const messageInput = document.getElementById("message-input");
  const chatWindow = document.getElementById("chat-window"); // matches HTML id

  const responses = {
    "hello": "Hi there! How can I assist you?"
  };

  function getResponse(message) {
    message = message.toLowerCase();
    for (let keyword in responses) {
      if (message.includes(keyword)) {
        return responses[keyword];
      }
    }
    return "Sorry! I don't know how to respond to this.";
  }

  function sendMessage(type, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add('message', type);
    messageElement.textContent = message;
    chatWindow.append(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
      sendMessage('messagesent', messageText);
      messageInput.value = '';
      receiveMessage(getResponse(messageText));
    }
  });

  messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      sendButton.click();
    }
  });

  function receiveMessage(message) {
    setTimeout(() => {
      sendMessage('messagereceived', message);
    }, 800);
  }
});
