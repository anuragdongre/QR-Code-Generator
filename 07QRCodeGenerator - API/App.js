const qrData = document.querySelector(".data");
const btnSubmit = document.querySelector(".submit");
const qrImage = document.getElementById("img");

btnSubmit.addEventListener("click", ()=> {
    if (qrData.value)
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`)
    .then((res)=> {
        qrImage.style.display = "block";
        qrImage.src = res.url;
    })
    .catch((err)=> console.log(err))
});