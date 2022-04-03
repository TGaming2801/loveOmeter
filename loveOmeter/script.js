let lover1;
let lover2;
let lastLover1;
let lastLover2;
let loveOmeter = document.getElementById("loveOmeter")
let lovePerc;
let loveText;
// document.getElementById("modal_container") document.getElementById("closeModal")

function loveOmeterFunction() {
    lover1 = document.getElementById("lover1").value.toLowerCase();
    lover2 = document.getElementById("lover2").value.toLowerCase();

    if ((lover1 == lastLover1) && (lover2 == lastLover2)) {

    } else {
        if (!(lover1 == "" || lover2 == "")) {
            if (lover1 == lover2) {

                //alert("! ERROR !" + "\n" + lover1 + " can´t love himself");
                document.getElementById("popupText").innerHTML = lover1 + " can't love himself"
                showPopup();

            } else {
                if ((lover1 == "leah" || lover1 == "can") && (lover2 == "leah" || lover2 == "can")) { // Can & Leah
                    lovePerc = "-1"
                } else if ((lover1 == "simon" || lover1 == "lana") && (lover2 == "simon" || lover2 == "lana")) { // Simon & Lana
                    lovePerc = "101"
                } else if ((lover1 == "batuhan" || lover1 == "lana") && (lover2 == "batuhan" || lover2 == "lana")) { // Batuhan & Lana
                    lovePerc = "-1"
                } else {
                    lovePerc = Math.floor(Math.random() * 101)
                }

                loveTextFunction(lovePerc);

                document.getElementById("loveRes").innerHTML = lovePerc + "%"
                lastLover1 = lover1;
                lastLover2 = lover2;
            }
        }
    }
}

function loveTextFunction(perc) {
    if (perc == -1) {
        loveText = "enemies4ever"
    } else if ((perc >= 0) && (perc <= 20)) {
        loveText = "Friends look different";
    } else if ((perc >= 21) && (perc <= 50)) {
        loveText = "Good Friends";
    } else if ((perc >= 51) && (perc <= 70)) {
        loveText = "Best Friends";
    } else if ((perc >= 71) && (perc <= 90)) {
        loveText = "Friendship +";
    } else if ((perc >= 91) && (perc <= 95)) {
        loveText = "Lover"
    } else if ((perc >= 96) && (perc <= 99)) {
        loveText = "In love forever";
    } else if (perc = 100) {
        loveText = "Soulmates";
    } else if (perc = 101) {
        loveText = "Your souls are inseparable";
    }

    document.getElementById("loveTextSpace").innerHTML = loveText;

}

function showPopup() {
    document.getElementById("modal_container").classList.add('show');
    document.getElementById("nonPopup").classList.add('blur');
}

function closePopup() {
    document.getElementById("modal_container").classList.remove('show');
    document.getElementById("nonPopup").classList.remove('blur');
}