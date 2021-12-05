function check(){
    
    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var q6 = document.quiz.question6.value;
    var q7 = document.quiz.question7.value;
    var q8 = document.quiz.question8.value;
    var q9 = document.quiz.question9.value;
    var q10 = document.quiz.question10.value;
    var res = document.getElementById('res');
    var quiz = document.getElementById("quiz");
    if(q1 == "Hypertext Markup Language") {c+=10}
    if(q2 == "b") {c+=10}
    if(q3 == "ul") {c+=10}
    if(q4 == "6") {c+=10}
    if(q5 == "href") {c+=10}
    if(q6 == "text-indent") {c+=10}
    if(q7 == "border-spacing") {c+=10}
    if(q8 == "padding-left") {c+=10}
    if(q9 == "background-position") {c+=10}
    if(q10 == "The Type Selector") {c+=10}
    quiz.style.display = "none";
    
    if(c<=60){
        res.textContent = 'You just took our quiz that covered basic HTML and CSS skills, your score is ' + c + ' out of 100 points. This score is pretty weak, try more practice and come back!'
    }else if(c>60 && c<80){
        res.textContent = 'You just took our quiz that covered basic HTML and CSS skills, your score is ' + c + ' out of 100 points. This is a pretty decent score!'
    }else{
        res.textContent = 'You just took our quiz that covered basic HTML and CSS skills, your score is ' + c + ' out of 100 points. Congratulations, your score is awesome!'
    }
}