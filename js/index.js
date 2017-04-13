
document.querySelector("input[type=submit]").addEventListener("click", sendForm);

function sendForm(e) {
    var form = document.querySelector("form");
    if (form.checkValidity()) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/tanjuscha2602@mail.ru",
            method: "POST",
            data: {
                clientName: $("#text").val(),
                clientEmail: $("#email").val(),
                comment: $("#message").val()
            },
            dataType: "json"
        });
    }
}

