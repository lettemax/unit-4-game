var chewbacca = {
    name: "Chewbacca",
    hp: 230,
    attack: 5,
    counter: 12,
    img: "chewbacca.png"
};

var darthVader = {
    name: "Darth Vader",
    hp: 200,
    attack: 20,
    counter: 14,
    img: "darth_vader.jpg"
};

var maceWindu = {
    name: "Mace Windu",
    hp: 190,
    attack: 19,
    counter: 16,
    img: "mace_windu.jpg"
};

var yoda = {
    name: "Yoda",
    hp: 170,
    attack: 12,
    counter: 12,
    img: "yoda.jpg"
};

var characters = [chewbacca, darthVader, maceWindu, yoda];
var enemies = [];

$(document).ready(function() {
    // If user chooses chewbacca
    $("#one").on("click", function() {
        console.log("clicked chew");
        $("#selected-character").attr("src", "assets/images/chewbacca.png");
        $("#character-selection").css("display", "none");
        // $("#two").css("display", "none");
        // $("#three").css("display", "none");
        // $("#four").css("display", "none");
        enemies = [darthVader, maceWindu, yoda];
        fillEnemiesRow();
    });
    // If user chooses darth vader
    $("#two").on("click", function() {
        console.log("clicked darth");
        $("#selected-character").attr("src", "assets/images/darth_vader.jpg");
        $("#character-selection").css("display", "none");
        // $("#one").css("display", "none");
        // $("#three").css("display", "none");
        // $("#four").css("display", "none");
        enemies = [chewbacca, maceWindu, yoda];
        fillEnemiesRow();
    });
    // If user chooses mace windu
    $("#three").on("click", function() {
        console.log("clicked mace");
        $("#selected-character").attr("src", "assets/images/mace_windu.jpg");
        $("#character-selection").css("display", "none");
        // $("#two").css("display", "none");
        // $("#one").css("display", "none");
        // $("#four").css("display", "none");
        enemies = [chewbacca, darthVader, yoda];
        fillEnemiesRow();
    });
    // If user chooses yoda
    $("#four").on("click", function() {
        console.log("clicked yoda");
        $("#selected-character").attr("src", "assets/images/yoda.jpg");
        $("#character-selection").css("display", "none");
        // $("#two").css("display", "none");
        // $("#three").css("display", "none");
        // $("#one").css("display", "none");
        enemies = [chewbacca, darthVader, maceWindu];
        fillEnemiesRow();
    });
    // Fill enemies row
    function fillEnemiesRow () {
        for (var i=1; i<enemies.length+1; i++) {
            $("#"+i).attr("src", "assets/images/"+(enemies[(i-1)].img));
        }
        console.log("should have filled enemies row: "+enemies);
    }
});

