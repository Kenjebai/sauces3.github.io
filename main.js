button.addEventListener('click', async () => {
    const perm = await Notification.requestPermission()
    console.log(perm);
    
    if(perm === 'granted'){
        new Notification('iio', {
            body: 'lorem lorem lorem',
            data: {
                url: '',
            },
            icon: 'notify.png',
            tag: 'notify'
        })
    }
})

function sendwhatsapp(){
    let phonenumber = "+996706831799";
    let name = document.querySelector('.name').value;
    let phone = document.querySelector('.phone').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;
    let url = "https://wa.me/" + phonenumber + "?text=" 
    +"*Name :* " +name+"%0a"
    +"*Phone :* " +phone+"%0a"
    +"*Email :* " +email+"%0a"
    +"*Message :* " +message+"%0a%0a";

    window.open(url, '_blank').focus();
}

// $(document).ready(function(){
//     $(".button").click(function(){
//         $.ajax('https://eu43.chat-api.com/instance**********/message?token=**********', {
//             data: JSON.stringify({
//                 phone: $('input[name="recipient"]').val(),
//                 body: 
//                 `Имя: ${$('input[name="name"]').val()}\n`+
//                 `Телефон: ${$('input[name="phone"]').val()}\n`+
//                 `Емайл: ${$('input[name="email"]').val()}\n`+
//                 `Заказ: соус "Умами"`
//             }),
//             contentType: 'application/json',
//             type: 'POST'
//         });
//     });
// });