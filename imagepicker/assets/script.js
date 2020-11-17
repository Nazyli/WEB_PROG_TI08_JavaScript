function image_picker(){
    let list_foto = ["TomandJerry.png", "sonic-the-hedgehog.png","doraemon.png", "digimon.png", "pokemon.png", "shinchan.png"];
    let image_list = document.getElementById("image_list").value;
    for (let i in list_foto){
        if(image_list == i){
            document.getElementById("gambar").src="assets/"+list_foto[i];
            window.alert("Ini gamber " + list_foto[i]);
        }
    }
}