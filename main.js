function cbg(color) {
    document.body.style.backgroundColor = color;

    let text  = document.getElementsByClassName('text');
    if(color == "#000"){
        for(let elm of text) {
            elm.style.color = "#fff";
           let img = document.getElementById('img');
           img.style.border = "thick solid #fff"
        }
    } else{
        for(let elm of text) {
            elm.style.color = "#000";
            let img = document.getElementById('img');
           img.style.border = "none"
        }
    }
}