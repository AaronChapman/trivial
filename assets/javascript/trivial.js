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
var timer_value = 15;
var timer_running = false, game_over = false;
var current_trivia_question = trivia_array[Math.floor(Math.random() * trivia_array.length)];
var current_correct_answer = "answer_0";
var progress = 0;

function reset_timer() {
    timer_value = 15;
    timer_running = true;

    $('.timer').text(timer_value);
    
    timer_value = 16;
    
    set_new_question();
    timer_tick();
}

function set_new_question () {
    current_trivia_question = trivia_array[Math.floor(Math.random() * trivia_array.length)];
    
    $('.prompt').text(current_trivia_question.question);

    for (var i = 1; i <= 4; i++) {
        var temp_name = "answer_" + i;

        $(`#${temp_name}`).text(current_trivia_question[`${temp_name}`]);
        $(`#${temp_name}`).css('color', 'rgba(39, 67, 99, 0.75)');
        $(`#${temp_name}`).css('background-color', 'white');

        if ($(`#${temp_name}`).attr('id') === current_trivia_question.correct_answer)
            current_correct_answer = $(`#${temp_name}`).text();
    }
}

function timer_tick() {
    if (timer_running) {
        if (timer_value > 0)
            timer_value--;
        
        if (timer_value === 0) {
            shake_element("#timer", "opacity");
            
            answered_question(("the answer was: " + current_correct_answer + "\n "), false);
        }

        $('.timer').text(timer_value);
    }

    setTimeout(function() {
        if (timer_running)
            timer_tick();
    }, 1000);
}

function clicked_answer(element_id) {
    $(`#${element_id}`).css('background-color', 'rgba(39, 67, 99, 0.2)');
    $(`#${element_id}`).css('color', 'white');
}

function answered_question(prompt, guessed) {
    timer_running = false;

    $('.prompt').text(prompt);

    if (guessed) {
        $('.prompt').prepend("wrong! ");
        prompt = "wrong! " + prompt;
    }

    setTimeout(function() {
        if (!game_over) {
            $('.prompt').text(prompt.slice(0, -1));
            $('.prompt').append("get ready for the next question...");
        }
    }, 750);

    setTimeout(function() {
        if (!timer_running && !game_over)
            reset_timer();
    }, 2500);
}

function shake_element(element_id, type_of_shake) {
    $(`${element_id}`).addClass("shake-" + type_of_shake);
    $(`${element_id}`).addClass("shake-constant");
    
    setTimeout(function() { stop_shaking_element(`${element_id}`, type_of_shake); }, 2500);
}

function stop_shaking_element(element_id, type_of_shake) {
    if (!game_over) {
        $(`${element_id}`).removeClass("shake-" + type_of_shake);
        $(`${element_id}`).removeClass("shake-constant");
    }
}

function trivia_complete() {
    game_over = true;
    
    $('.trivia_container').css('opacity', '0');
    $('.trivia_container').css('opacity', '0');
}

$(document).ready(function() {
    $('.answer').click(function() {
        if (timer_running) {
            var answer_clicked = $(this);

            clicked_answer(answer_clicked.attr('id'));

            if (answer_clicked.text() === current_correct_answer || current_trivia_question.correct_answer === "answer_100") {
                progress++;
                
                if (progress < 10) {
                    $('.progress').text("0" + progress + "/10");
                    
                    var to_delete = new Set([current_trivia_question.question]);
                    var temp_array = trivia_array.filter(temp_object => !to_delete.has(temp_object.question))

                    trivia_array = temp_array;
                } else {
                    $('.progress').text(progress + "/10");
                    
                    trivia_complete();
                }
                
                answered_question(("correct!" + "\n "), false);

                shake_element("#" + answer_clicked.attr('id').toString(), "vertical");
            } else {
                answered_question(("the answer was: " + current_correct_answer + "\n "), true);

                shake_element("#" + answer_clicked.attr('id').toString(), "opacity");
            }
        }
    });
});