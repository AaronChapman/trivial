/* objets for each question & answer set */
var trivia_array = [{question: "what kind of shape has five sides?", 
                     answer_1: "circle", 
                     answer_2: "square", 
                     answer_3: "pentagram", 
                     answer_4: "triangle",
                     correct_answer: "answer_3"}, 
                    {question: "what color is between violet and orange on the color wheel?", 
                     answer_1: "blue", 
                     answer_2: "orange", 
                     answer_3: "green", 
                     answer_4: "red",
                     correct_answer: "answer_4"}, 
                    {question: "choose the first option", 
                     answer_1: "yes, master", 
                     answer_2: "why?", 
                     answer_3: "you can't make me", 
                     answer_4: "no",
                     correct_answer: "answer_1"}, 
                    {question: "what's the answer?", 
                     answer_1: "a", 
                     answer_2: "b", 
                     answer_3: "c", 
                     answer_4: "d",
                     correct_answer: "answer_4"},
                    {question: "what number is twice the value of three threes strung together?", 
                     answer_1: "777º C", 
                     answer_2: "…∞§•§∞…", 
                     answer_3: "like, 420?", 
                     answer_4: "666",
                     correct_answer: "answer_4"},
                    {question: "choose well. you never know when your life may depend on it...", 
                     answer_1: "? ? ?", 
                     answer_2: "? ? ? ?", 
                     answer_3: "? ? ? ?", 
                     answer_4: "? ? ?",
                     correct_answer: "answer_100"},
                    {question: "who is the greatest living legend?", 
                     answer_1: "tupac", 
                     answer_2: "biggie", 
                     answer_3: "cobain", 
                     answer_4: "beezlebub",
                     correct_answer: "answer_4"},
                    {question: "is this game fun?", 
                     answer_1: "no", 
                     answer_2: "no", 
                     answer_3: "yes", 
                     answer_4: "no",
                     correct_answer: "answer_3"},
                    {question: "is the answer to this question option 2?", 
                     answer_1: "no", 
                     answer_2: "yes", 
                     answer_3: "don't know", 
                     answer_4: "maybe",
                     correct_answer: "answer_2"},
                    {question: "lucky winner! choose an answer for a free point", 
                     answer_1: "uhhh what?", 
                     answer_2: "click me fam!", 
                     answer_3: "another answer", 
                     answer_4: "d̸̢̲̻̹̙̜̯̗͍̪̓̇͑ͅe̴͇͔̩̳͕̣̻̬̬̠͛̃ą̵̧̣̟̻̻͚͉̒t̸̛̼̘̘͕̖̹͒͛̄̓͗̍̔͝h̶̡͇̓̃̈́̍̃ ̷̡̀̅̿́̈́̀͋̇̒i̸͎̣̹͉͑͒̆̅̽͊̅͋̚͝s̶̛̫̭͔͇̮̺̪̯̬͗́̊̋́̆͜͜ ̵̨͈̳̦̤͈͎͔͊̇́̏́̍̇̚͝͝͠ç̸͕̻̟͉̟̪̙̏ỗ̸̢̖̙̩͋m̷̢̤̲͙̙̱̪͈͈͚̯͔͈̈͋̇͗̇̍̅̊̈́̈́͒̽̊̀͐i̷̢̡͓̟̟͓̬͕͊̈͌̇̂̀̋̇̿̿̽̚̚n̷̢̤̞͙̗͖̙̤̮̱̝͍̉̀͒̾̈́̓̉̑͆͋g̸̢̜̬̪̪͎̿̃͝ ̷̡̡̼̦̟̹̺̮̠̥̝̟̱͈̑͐̒̏͂̚ͅf̶͔̮̱͙̏͐̈̈́̑̏͆̉̐́̾̇̔͘̕ͅo̴̡̢̡͔̬̦̩͎͙͓̳̼̬͖͑̔͛̎̈́̔̿ŗ̴̛̬͙̩͖̫͖̥͉͓̟̹̫̱̇̈́̌͂̑͊͊ ̷̧̧̡̦͔̤̺̰̖͓̗͙̤̭͗͐́̌̔͐̓̋̾̔̔̐͗͝ͅy̸̢̺̮͍̼͇̱͂̍̃͂͋̆͂̾͋̐͝ͅǒ̴͓̟̥̞̩̣̯͖̱̣̰̻̼̣͆̏͆̒̓̈́͊̾̇̕ṳ̴̡̯̭̞͉̮̦̥̦̲̆́͑͘͜",
                     correct_answer: "answer_100"}], trivia_array_copy = trivia_array;
/* other globals we gon' need (game_state variables, current round data, etc)*/
var timer_value = 15;
var timer_running = false, game_over = false;
var current_trivia_question = trivia_array[Math.floor(Math.random() * trivia_array.length)];
var current_correct_answer = "answer_0";
var progress = 0;

/* resets timer-related ish */
function reset_timer() {
    timer_value = 15;
    timer_running = true;

    $('.timer').text(timer_value);

    timer_value = 16;

    /* sets up new question (and answer options) and starts decrementing the timer */
    set_new_question();
    timer_tick();
}

/* sets up new question and answers */
function set_new_question () {
    /* random object from trivia_array */
    current_trivia_question = trivia_array[Math.floor(Math.random() * trivia_array.length)];

    /* display object.question */
    $('.prompt').text(current_trivia_question.question);

    /* for each answer div, set the text (correlates to current_trivia_question), reset the background colors
    and set the current_correct_answer variable */
    for (var i = 1; i <= 4; i++) {
        var temp_name = "answer_" + i;

        $(`#${temp_name}`).text(current_trivia_question[`${temp_name}`]);
        $(`#${temp_name}`).css('color', 'rgba(39, 67, 99, 0.75)');
        $(`#${temp_name}`).css('background-color', 'white');

        if ($(`#${temp_name}`).attr('id') === current_trivia_question.correct_answer)
            current_correct_answer = $(`#${temp_name}`).text();
    }
}

/* recursive timer tick function */
function timer_tick() {
    /* if game is active */
    if (timer_running) {
        /* and timer hasn't yet reached zero */
        if (timer_value > 0)
            /* decrement */
            timer_value--;

        /* if the timer has reached zero, do a little animation and update prompt */
        if (timer_value === 0) {
            shake_element("#timer", "opacity");

            answered_question(("the answer was: " + current_correct_answer + "\n "), false);
        }

        /* update timer display */
        $('.timer').text(timer_value);
    }

    /* timer_tick() calls itself provided timer is still running */
    setTimeout(function() {
        if (timer_running)
            timer_tick();
    }, 1000);
}

/* sets css properties of clicked answer element */
function clicked_answer(element_id) {
    $(`#${element_id}`).css('background-color', 'rgba(39, 67, 99, 0.2)');
    $(`#${element_id}`).css('color', 'white');
}

/* checks player's answer */
function answered_question(prompt, guessed) {
    timer_running = false;

    /* update display */
    $('.prompt').text(prompt);

    /* determine if the user answered incorrectly or if they ran out of time */
    if (guessed) {
        $('.prompt').prepend("wrong! ");
        prompt = "wrong! " + prompt;
    }

    /* append instructions to the prompt after 750ms */
    setTimeout(function() {
        if (!game_over) {
            $('.prompt').text(prompt.slice(0, -1));
            $('.prompt').append("get ready for the next question...");
        }
    }, 750);

    setTimeout(function() {
        if (!timer_running && !game_over)
            reset_timer();
    }, 2000);
}

/* add specified shaking classes to element matching id passed to element_id parameter */
function shake_element(element_id, type_of_shake) {
    $(`${element_id}`).addClass("shake-" + type_of_shake);
    $(`${element_id}`).addClass("shake-constant");

    /* and then remove them after specified amount of time */
    setTimeout(function() { stop_shaking_element(`${element_id}`, type_of_shake); }, 2000);
}

/* remove specified shaking classes from element matching id passed to element_id parameter */
function stop_shaking_element(element_id, type_of_shake) {
    if (!game_over) {
        $(`${element_id}`).removeClass("shake-" + type_of_shake);
        $(`${element_id}`).removeClass("shake-constant");
    }
}

/* once the player has progessed through all ten questions */
function trivia_complete() {
    /* end game condition */
    game_over = true;

    /* fade away */
    $('.trivia_container').css('opacity', '0');
    $('.trivia_container').css('opacity', '0');

    /* bonus content */
    setTimeout(function() {
        alert("you can leave now");
    }, 5000);
}

/* when the document is ready */
$(document).ready(function() {
    /* when a div that has class "answer" is clicked */
    $('.answer').click(function() {
        /* check game state */
        if (timer_running) {
            /* get the element clicked and its id attribute */
            var answer_clicked = $(this);

            clicked_answer(answer_clicked.attr('id'));

            /* check to see if question was answered correctly */
            if (answer_clicked.text() === current_correct_answer || current_trivia_question.correct_answer === "answer_100") {
                /* advance */
                progress++;

                /* determine whether the player has correctly answered all the questions yet */
                if (progress < 10) {
                    /* update progress display */
                    $('.progress').text("0" + progress + "/10");

                    /* remove question object from array */
                    var to_delete = new Set([current_trivia_question.question]);
                    var temp_array = trivia_array.filter(temp_object => !to_delete.has(temp_object.question))

                    trivia_array = temp_array;
                } else {
                    $('.progress').text(progress + "/10");

                    /* end game */
                    trivia_complete();
                }

                /* update prompt and do a little animation */
                answered_question(("correct!" + "\n "), false);

                shake_element("#" + answer_clicked.attr('id').toString(), "vertical");
            } else {
                /* update prompt and do a little animation */
                answered_question(("the answer was: " + current_correct_answer + "\n "), true);

                shake_element("#" + answer_clicked.attr('id').toString(), "opacity");
            }
        }
    });
});