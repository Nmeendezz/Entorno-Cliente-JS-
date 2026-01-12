function getCookie(nombre) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let [key, value] = cookies[i].split("=");
        if (key === nombre) {
            return value;
        }
    }
    return null;
}

let tema = getCookie("tema");

if (!tema) {
    res = prompt("Elige tema: claro u oscuro").toLowerCase();
    if (res === "oscuro") {
        tema = "oscuro";
    } else {
        tema = "claro";
    }
    document.cookie = "tema=" + tema + "; max-age=" + (60 * 60 * 24 * 365);
}
document.body.className = tema;
