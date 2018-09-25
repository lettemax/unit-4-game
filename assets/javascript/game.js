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
var yourCharacter;
var defender;
var incrementer;

$(document).ready(function() {
    // Hiding the attack gif
    $("#attack-gif").css("display", "none");

    // Function to fill enemies row
    function fillEnemiesRow () {
        for (var i=1; i<enemies.length+1; i++) {
            $("#"+i).attr("src", "assets/images/"+(enemies[(i-1)].img));
        }
        console.log("should have filled enemies row: "+enemies);
    }

    // Function to restart
    function restart () {
        location.reload();
    }

    // Function to check status (determine if yourCharacter or enemy has 0 or less hp)
    function checkStatus () {
        $("#attack-gif").css("display", "none");
        if (enemy.hp <= 0) {
            alert(enemy.name + " has been defeated");
            $("#defender").attr("src", "");
        } 
        var counter = 0;
        for (var i=0; i<enemies.length; i++) {
            if (enemies[i].hp <= 0) {
                counter++;
            }
        }
        if (counter == 3) {
            alert("Congratulations, you won!");
            restart();
        }
        if (yourCharacter.hp <= 0) {
            alert("you have been defeated");
            $("#selected-character").attr("src", "");
            restart();
        }
    }
    // If user chooses chewbacca
    $("#one").on("click", function() {
        console.log("clicked chew");
        $("#selected-character").attr("src", "assets/images/chewbacca.png");
        $("#character-selection").css("display", "none");
        yourCharacter = chewbacca;
        incrementer = yourCharacter.attack;
        enemies = [darthVader, maceWindu, yoda];
        fillEnemiesRow();
    });

    // If user chooses darth vader
    $("#two").on("click", function() {
        console.log("clicked darth");
        $("#selected-character").attr("src", "assets/images/darth_vader.jpg");
        $("#character-selection").css("display", "none");
        yourCharacter = darthVader;
        incrementer = yourCharacter.attack;
        enemies = [chewbacca, maceWindu, yoda];
        fillEnemiesRow();
    });

    // If user chooses mace windu
    $("#three").on("click", function() {
        console.log("clicked mace");
        $("#selected-character").attr("src", "assets/images/mace_windu.jpg");
        $("#character-selection").css("display", "none");
        yourCharacter = maceWindu;
        incrementer = yourCharacter.attack;
        enemies = [chewbacca, darthVader, yoda];
        fillEnemiesRow();
    });

    // If user chooses yoda
    $("#four").on("click", function() {
        console.log("clicked yoda");
        $("#selected-character").attr("src", "assets/images/yoda.jpg");
        $("#character-selection").css("display", "none");
        yourCharacter = yoda;
        incrementer = yourCharacter.attack;
        enemies = [chewbacca, darthVader, maceWindu];
        fillEnemiesRow();
    });

    $("#1").on("click", function() {
        console.log("clicked enemy in col 1");
        enemy = enemies[0];
        $("#1").css("display", "none");
        $("#defender").attr("src", "assets/images/"+enemy.img);
        // disable clicking for other enemies
    });

    $("#2").on("click", function() {
        console.log("clicked enemy in col 2");
        enemy = enemies[1];
        $("#2").css("display", "none");
        $("#defender").attr("src", "assets/images/"+enemy.img);
        // disable clicking for other enemies
    });

    $("#3").on("click", function() {
        console.log("clicked enemy in col 3");
        enemy = enemies[2];
        $("#3").css("display", "none");
        $("#defender").attr("src", "assets/images/"+enemy.img);
        // disable clicking for other enemies
    });

    $("#attack").on("click", function() {
        console.log("clicked attack");
        $("#attacking-character").attr("src", "assets/images/"+yourCharacter.img);
        enemy.hp-=yourCharacter.attack;
        yourCharacter.hp-=enemy.counter;
        yourCharacter.attack+=incrementer;
        console.log("enemy.hp: " + enemy.hp + ", yourCharacter.hp: " + yourCharacter.hp + ", yourCharacter.attack: " +
        yourCharacter.attack);
        $("#your-character").text(yourCharacter.name+": "+yourCharacter.hp);
        $("#h1-defender").text(enemy.name+": "+enemy.hp+" v "+yourCharacter.name+": "+yourCharacter.hp);
        $("#attack-gif").css("display", "");
        setTimeout(function(){ checkStatus(); }, 1000);
    });

    $("#restart").on("click", function() {
        console.log("clicked attack");
        restart();
    });
});

