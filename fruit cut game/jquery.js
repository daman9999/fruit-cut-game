var playing = false;
var step = 0;
var score;
var action;
var trialsleft;
var fruit = ['banana', 'greenapple', 'mango', 'pineapple', 'redapple'];
$(function() {
    $("#startgame").click(function() {


        if (playing == true) {
            location.reload();
        } else {
            playing = true;
            score = 0;
            $("#scorevalue").html(score);
            $("#trial-left").show();
            $("#gameOver").hide();
            trialsleft = 3;
            addHeart();
            $("#startgame").html("Reset Game");
            startAction();

        }

    });



    function addHeart() {
        $("#trial-left").empty();
        for (i = 0; i < trialsleft; i++) {

            $("#trial-left").append('<img src ="images/heart.png" class = "life">');

        }

    }
    $("#fruit1").mouseover(function() {
        score++;
        $("#scorevalue").html(score);
        $("#slicesound")[0].play();
        clearInterval(action);
        $("#fruit1").hide("explode", 500);
        setTimeout(startAction, 500);

    });


    function startAction() {
        genStep();
        action = setInterval(function() {
            //set top to original value +step
            $("#fruit1").css('top', $("#fruit1").position().top + step);
            //if fruit is too low
            if ($("#fruit1").position().top + step >
                $("#fruitcontainer").height()) {
                if (trialsleft > 1) {
                    genStep();
                    trialsleft--;
                    addHeart();

                }
                //gameover
                else {

                    $("#gameOver").show();
                    $("#gameOver").html("<p>Game Over</p><p>your score is:" + score + "</p>")
                    stopAction();
                    $("#trial-left").hide();

                }

            }

        }, 10);


    }

    function chooseFruit() {
        $("#fruit1").attr('src', 'images/fruits/' + fruit[randomFruit = Math.round(Math.random() * (fruit.length - 1))] + '.png');
        s = $("#fruit1").attr('src', 'images/fruits/' + fruit[randomFruit = Math.round(Math.random() * (fruit.length - 1))] + '.png');
        console.log(s);

    }

    function stopAction() {
        clearInterval();
        $("#fruit1").hide();

    }

    function genStep() {
        $("#fruit1").show();
        chooseFruit();
        $("#fruit1").css({ 'left': Math.round(Math.random() * 450), 'top': -10 });
        step = Math.round(5 * Math.random()) + 1;
    }
});