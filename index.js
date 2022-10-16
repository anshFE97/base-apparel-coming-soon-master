const submit = document.querySelector('.submit')
const email = document.querySelector('.mail')
const error = document.querySelector('.error')
const textMsg = document.querySelector('.text-add')



function check(e) {
    if(email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        error.classList.remove('active')
        textMsg.classList.remove('active')
        email.classList.remove('border')
    } else {
        error.classList.add('active')
        textMsg.classList.add('active')
        email.classList.add('border')
        e.preventDefault();
    }

}



submit.addEventListener('click', check)

email.addEventListener('click', () => {
    error.classList.remove('active')
        textMsg.classList.remove('active')
        email.classList.remove('border')
})

