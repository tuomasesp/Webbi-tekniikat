document.getElementById("submit").onclick=function () {
    
    let name = document.getElementById("name").value;
    if (name.length>0) {
        document.getElementById("alert-success").style.display=
        "block";
        document.getElementById("alert-danger").style.display=
        "none";
    }else {
        document.getElementById("alert-danger").style.display=
        "block";
        document.getElementById("alert-success").style.display=
        "none";
    }
    // Peruuta formin lähetys
    return false;
}