Telegram.WebApp.ready();
const mainButton = window.Telegram.WebApp.MainButton;
mainButton.text = "ПРОДОЛЖИТЬ";
mainButton.enable();
mainButton.show();

mainButton.onClick(function(){
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var middleName = document.getElementById('middle_name').value;

    let fio = [{
        name: firstName,
        surname: lastName,
        middleName: middleName
    }]
    Telegram.WebApp.sendData(JSON.stringify(fio));
});


function sendMessage() {
    // Send message to bot
    // Telegram.WebApp.sendData(JSON.stringify({
    //     'message': inputMessage.value,
    // }));

    addNewMessage('Me', inputMessage.value, 'reversed');
    message.value = '';
    scrollToBottom();
}

function addNewMessage(userId, message, messageContainerClass) {
    // Person
    const messageContainer = document.createElement("div");

    if (typeof messageContainerClass === 'undefined') {
        messageContainer.classList.add('message-container');
    }
    else {
        messageContainer.classList.add('message-container', messageContainerClass);
    }

    const messagePerson = document.createElement("div");
    messagePerson.classList.add("message__person");

    const messagePersonAvatar = document.createElement("div");
    messagePersonAvatar.classList.add("message__person__avatar");

    let avatarSpan = document.createElement("span");
    avatarSpan.textContent = userId;

    messagePersonAvatar.appendChild(avatarSpan);
    messagePerson.appendChild(messagePersonAvatar);
    messageContainer.appendChild(messagePerson);

    // Context
    const messageContext = document.createElement("div");
    messageContext.classList.add("message__context");

    const messageBubble = document.createElement("div");
    messageBubble.classList.add("message__bubble");

    const contextSpan = document.createElement("span");
    contextSpan.textContent = message;

    messageBubble.appendChild(contextSpan);
    messageContext.appendChild(messageBubble)
    messageContainer.appendChild(messageContext);

    // chatBoard.appendChild(messageContainer);
    chatBoard.insertBefore(messageContainer, chatBoard.firstChild);

}

function scrollToBottom() {
    chatBoard.scrollTop = chatBoard.scrollHeight;
}