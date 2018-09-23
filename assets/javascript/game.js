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
        $("#two").attr("display", none);
        $("#three").attr("display", none);
        $("#four").attr("display", none);
        enemies = [darthVader, maceWindu, yoda];
    });
    // If user chooses darth vader
    $("#two").on("click", function() {
        console.log("clicked darth");
        $("#selected-character").attr("src", "assets/images/darth_vader.jpg");
        $("#one").attr("display", none);
        $("#three").attr("display", none);
        $("#four").attr("display", none);
        enemies = [chewbacca, maceWindu, yoda];
    });
    // If user chooses mace windu
    $("#three").on("click", function() {
        console.log("clicked mace");
        $("#selected-character").attr("src", "assets/images/mace_windu.jpg");
        $("#two").attr("display", none);
        $("#one").attr("display", none);
        $("#four").attr("display", none);
        enemies = [chewbacca, darthVader, yoda];
    });
    // If user chooses yoda
    $("#four").on("click", function() {
        console.log("clicked yoda");
        $("#selected-character").attr("src", "assets/images/yoda.jpg");
        $("#two").attr("display", none);
        $("#three").attr("display", none);
        $("#one").attr("display", none);
        enemies = [chewbacca, darthVader, maceWindu];
    });
});

