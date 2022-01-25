// Deklarasi DOM
const resultBox = document.getElementById("result-div");
const resultName = document.getElementById("result-p");
const playerBatu = document.getElementById("player-batu");
const playerKertas = document.getElementById("player-kertas");
const playerGunting = document.getElementById("player-gunting");
const comBatu = document.getElementById("com-batu");
const comKertas = document.getElementById("com-kertas");
const comGunting = document.getElementById("com-gunting");

// Pilihan COM
// mengembalikan pilihan computer berupa string "batu", "gunting", atau "kertas"
function pilihanCom() {
    const pil = Math.floor(Math.random() * 3);
    if (pil==0) {
        comBatu.style.backgroundColor = "#C4C4C4";
        return "batu";
    } else if (pil==1) {
        comKertas.style.backgroundColor = "#C4C4C4";
        return "kertas";
    } else { // pil==2
        comGunting.style.backgroundColor = "#C4C4C4";
        return "gunting";
    }
}

// logic rock scissor paper
// mengembalikan pemenang dalam string, apabila draw mengembalikan "draw"
function rockPaperScissors(pilPlayer, pilCom) {
    if (pilPlayer == pilCom) {
        return "draw";
    }

    if (pilPlayer == "batu") {
        if (pilCom == "kertas") {
            return "com";
        } else { // pilCom == "gunting"
            return "player";
        }
    } else if (pilPlayer == "kertas") {
        if (pilCom == "gunting") {
            return "com";
        } else { // pilCom == "batu"
            return "player";
        }
    } else { // pilPlayer == "gunting"
        if (pilCom == "batu") {
            return "com";
        } else { // pilCom == "kertas"
            return "player";
        }
    }
}

// parameter hasil adalah return value dari function rockPaperScissors
// resultBox dan resultName adalah variabel global
// I.S = ditengah2 tertulis VS
// F.S = ditengah2 tertulis siapa pemenangnya atau draw
function showHasil(hasil) { // procedure
    resultBox.style.removeProperty("visibility");
    if (hasil=="draw") {
        resultName.innerText = "DRAW";
        console.log("Hasil Pertandingan = Draw");
    } else if (hasil=="com") {
        resultName.innerText = "COM\nWIN";
        console.log("Hasil Pertandingan = Com Win");
    } else { //hasil=="player"
        resultName.innerText = "PLAYER 1\nWIN";
        console.log("Hasil Pertandingan = Player 1 Win");
    }
}


// -click function-

// resultBox, (player/com)(Batu/Gunting/Kertas) adalah variabel global
// I.S = apapun
// F.S = ditengah2 tertulsi VS, semua highlight ilang
function reset() {
    resultBox.style.visibility = "hidden";
    playerBatu.style.removeProperty("background-color");
    playerKertas.style.removeProperty("background-color");
    playerGunting.style.removeProperty("background-color");
    comBatu.style.removeProperty("background-color");
    comKertas.style.removeProperty("background-color");
    comGunting.style.removeProperty("background-color");
}

// resultBox, (player/com)(Batu/Gunting/Kertas) adalah variabel global
// I.S = apapun
// F.S = player memilih batu. Highlight pilihan player, acak pilihan com, highlight pilihan com, tulis result
function chooseBatu() {
    reset();
    playerBatu.style.backgroundColor = "#C4C4C4";
    let player = "batu"
    console.log("Pilihan Player 1 = " + player);
    com = pilihanCom();
    console.log("Pilihan Computer = " + com);
    result = rockPaperScissors(player, com);
    showHasil(result);
}

// resultBox, (player/com)(Batu/Gunting/Kertas) adalah variabel global
// I.S = apapun
// F.S = player memilih kertas. Highlight pilihan player, acak pilihan com, highlight pilihan com, tulis result
function chooseKertas() {
    reset();
    playerKertas.style.backgroundColor = "#C4C4C4";
    let player = "kertas"
    console.log("Pilihan Player 1 = " + player);
    com = pilihanCom();
    console.log("Pilihan Computer = " + com);
    result = rockPaperScissors(player, com);
    showHasil(result);
}

// resultBox, (player/com)(Batu/Gunting/Kertas) adalah variabel global
// I.S = apapun
// F.S = player memilih gunting. Highlight pilihan player, acak pilihan com, highlight pilihan com, tulis result
function chooseGunting() {
    reset();
    playerGunting.style.backgroundColor = "#C4C4C4";
    let player = "gunting"
    console.log("Pilihan Player 1 = " + player);
    com = pilihanCom();
    console.log("Pilihan Computer = " + com);
    result = rockPaperScissors(player, com);
    showHasil(result);
}