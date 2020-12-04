document.getElementById("switch").addEventListener("click", () => {
    if (document.getElementById("input1").value !== "" && document.getElementById("input2").value !== "") {
        let inpout1 = document.getElementById("input1");
        let inpout2 = document.getElementById("input2");
        let tampon = inpout1.value;
        inpout1.value = inpout2.value;
        inpout2.value = tampon;
    }
    else {
        alert("veuillez completer les 2 input")
    }

});