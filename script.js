

let notificationBox = document.getElementById("notification-box");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

function showNotificaion(msg) {
    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerHTML = msg;
    notificationBox.appendChild(notification)

    if(msg.includes('error')){
        notification.classList.add('error');
    }
    if(msg.includes('Invalid')){
        notification.classList.add('Invalid');
    }
setTimeout(() => {
    notification.remove();
}, 3000);
}




