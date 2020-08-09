function check(){
    var score = 0;
    var answer1 = document.getElementById('q1-a1');
    var answer1 = document.getElementById('q1-a2');
    var correct_answer1 = document.getElementById('q1-a3');
    var answer1 = document.getElementById('q1-a4');
    if(correct_answer1.checked == true){
        score++
        alert('Q1 Correct Answer')
    }
    else{
        alert('Q1 Wrong Answer')
    }

    
    var answer2 = document.getElementById('q2-a1');
    var correct_answer2 = document.getElementById('q2-a2');
    var answer2 = document.getElementById('q2-a3');
    var answer2 = document.getElementById('q2-a4');
    if(correct_answer2.checked == true){
        score++
        alert('Q2 Correct Answer')
    }
    else{
        alert('Q2 Wrong Answer')
    }

    var correct_answer3 = document.getElementById('q3-a1');
    var answer3 = document.getElementById('q3-a2');
    var answer3 = document.getElementById('q3-a3');
    var answer3 = document.getElementById('q3-a4');
    if(correct_answer3.checked == true){
        score++
        alert('Q3 Correct Answer')
    }
    else{
        alert('Q3 Wrong Answer')
    }

    alert('Your Score is ' + score);
}