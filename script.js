function saatiGuncelle(){

    let simdi = new Date();

    let gun = String(simdi.getDate()).padStart(2,"0");

    let ay = String(simdi.getMonth()+1).padStart(2,"0");

    let yil = simdi.getFullYear();

    document.getElementById("tarih").innerHTML =
        gun + "/" + ay + "/" + yil;


    let saat = String(simdi.getHours()).padStart(2,"0");

    let dakika = String(simdi.getMinutes()).padStart(2,"0");

    let saniye = String(simdi.getSeconds()).padStart(2,"0");

    document.getElementById("saat").innerHTML =
        saat + ":" + dakika + ":" + saniye;

}

saatiGuncelle();

setInterval(saatiGuncelle,1000);
