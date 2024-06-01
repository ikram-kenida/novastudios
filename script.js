function sendMail(){
    let params = {
        name : document.getElementById('name').value , 
        email : document.getElementById('email').value , 
        subject : document.getElementById('subject').value , 
        message : document.getElementById('message').value , 
    }

    emailjs.send("service_frrx1qi","template_q2iclve",params).then(alert('Email envoyé !'))
}

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
