let inputUsername = document.querySelector('.login-box__username-form');
inputMessage = document.querySelector('.chatbox__message-send-form');
submitText = document.querySelector('.img-send-button');
messageToAdd = document.querySelector('.content-container');


submitText.addEventListener('click', (event) => {
	event.preventDefault();

	let nowaDate = new Date();

	newDiv = document.createElement('div');
	newDiv.className = 'message-box';
	messageToAdd.appendChild(newDiv);
	newDiv21 = document.createElement('div');
	newDiv21.className = 'title-message-box';
	newDiv21.innerHTML = inputUsername.value;
	newDiv.appendChild(newDiv21);
	newDiv22 = document.createElement('div');
	newDiv22.className = 'rect-message-box';
	newDiv.appendChild(newDiv22);
	newDiv31 = document.createElement('div');
	newDiv31.className = 'ismessage';
	newDiv31.innerHTML = inputMessage.value;
	newDiv32 = document.createElement('div');
	newDiv32.className = 'istime';
	newDiv32.innerHTML = '' + nowaDate.getHours() + ':' + nowaDate.getMinutes();
	newDiv22.appendChild(newDiv31);
	newDiv22.appendChild(newDiv32);
	newDiv23 = document.createElement('a')
	newDiv23.href = '';
	newDiv23.className = "clarity-message-box";
	newDiv.appendChild(newDiv23);
	imgclarity = document.createElement('img');
	imgclarity.src = "/img/clarity_close-line.svg";
	newDiv23.appendChild(imgclarity);
	newDiv23.addEventListener('click', (event) => {
		event.preventDefault();
		if (newDiv23.parentNode) {
			newDiv23.parentElement.remove();
		}

	});

});
