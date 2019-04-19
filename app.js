$(document).ready(function () {


    //display questions with answer array.
    
    var myQuestions = [
        {
        question: "World War I began in which year?", 
        answers: [1923, 1938, 1917, 1914],
        correctAnswer: 2,
        },
    
        {
        question: "Adolf Hitler was born in which country?",
        answers: ["France", "Germany", "Austria", "Hungary"],
        correctAnswer: 2,
        },
    
        {
        question: "JFK was assassinated in:",
        answers: ["New York City", "Austin", "Dallas", "Miami"],
        correctAnswer: 2,
        },
    
        {
        question: "Who fought in the war of 1812?",
        answers: ["Arthur Wellsely", "Andrew Jackson","Otto von Bismarck","Napoleon Bonaparte"],
        correctAnswer: 1,
        },
    
        {
        question: 'Which general famously stated "I shall return?"',
        answers: ["Bull Halsey", "George Patton", "Douglas MacArthur", "Omar Bradley"],
        correctAnswer: 2,
        },
    
        {
        question: "American involvement in the Korean War took place in which decade?",
        answers: ["1970s", "1950s", "1920s", "1960s"],
        correctAnswer: 1,
        },
    
        {
        question: "The Battle of Hastings in 1066 was fought in which country?",
        answers: ["France", "Russia", "England", "Norway"],
        correctAnswer: 2,
        },
    
        {
        question: "The Magna Carta was published by the King of which country?",
        answers: ["France", "Austria", "Italy", "England"],
        correctAnswer: 3,
        }];
    console.log(myQuestions);
    
    var timer= 15;
    var userGuess="";
    var rightAnswers = 0
    var wrongAnswers = 0
    var timerInterval;
    var choice;
    var holder = [];
    var index;
    var running=false;
   
    
    $("#start").on("click", function () {
        $("#start").hide();
        displayQuestion();
        startTimer();
        for(var i = 0; i < myQuestions.length; i++) {
            holder.push(myQuestions[i]);
        }
    })
    
    function startTimer() {
        if (!running) {
            timerInterval = setInterval(decrement, 1000);
            running=true;
        }
    }
    
    function decrement () {
        $("#countdown").html("<h3>Time Remaining: " + timer + "</h3>");
        timer --;
    
        if (timer === -1) {
            wrongAnswers ++ ;
            stop();
        }
    }
    function stop() {
        running = false;
        clearInterval(timerInterval);
    }
    
    
    
    function displayQuestion () {
        index = Math.floor(Math.random() * myQuestions.length);
        choice = myQuestions[index];
        $("#questions").html("<h2>" + choice.question + "</h2>");
        //for(var i = 0; i< choice.questions.length; i++) {
     //**** issues: cannot get the other options to populate in the buttons. */
        var userSelection = $("<div>");
        //userSelection.addClass("answerselection");
        userSelection.html(choice.question);//[i]
        userSelection.attr("data-guessvalue");//+i
        $("button").html(userSelection);
        }
    

   
    $(".answerselection").on("click", function() {
        userGuess = parseInt($(this).attr("data-guessvalue"));
    
        if (userGuess === choice.correctAnswer) {
            stop();
            rightAnswers ++;
            userGuess="";
            $("#answers").html("<p>Correct!</p>");
        } else {
            stop();
            wrongAnswers ++;
            userGuess="";
            $("#answers").html("<p>Wrong!</p>");
        }
        console.log(correctAnswer);
    })
    
    })