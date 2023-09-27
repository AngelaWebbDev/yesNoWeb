console.log('javascript loaded');
const answerKey = ["yes", "of course", "maybe", "no", "never", "not today", "possibly", "likely","unlikely"];

function getAnswer(){
    var question = document.querySelector("#theQuestion").value;
    question = question.toLowerCase();
    if(question.startsWith('am') || question.startsWith('is') || question.startsWith('does')
        || question.startsWith('can') || question.startsWith('are') || question.startsWith('was')
        || question.startsWith('were') || question.startsWith('has') || question.startsWith('have')
        || question.startsWith('do') || question.startsWith('did') || question.startsWith('should') 
        || question.startsWith('may')){
            var indexNum = Math.ceil(Math.random()*(answerKey.length-1));
            var answer = answerKey[indexNum];
            document.getElementById('theAnswer').innerText = answer;
        console.log("end of if");
    } else if(question ==='quit'){
        document.getElementById('theAnswer').innerText = "goodbye";
        setTimeout(closeProgram,1000);
    } else if(question == ''){
        document.getElementById('theAnswer').innerText = "You have to ask a question if you want an answer.";
    }else{
        document.getElementById('theAnswer').innerText = 'I don\'t understand the question.';
    }
}

function closeProgram(){
    document.getElementById('mainArea').remove();
    document.getElementById('bodyArea').style.backgroundColor = "white";
    document.getElementById('headerArea').remove();
    document.getElementById('goodbyePic').style.display = "block";
    document.getElementById('goodbyePic').style.height = "300px";
    document.getElementById('goodbyePic').style.margin = "auto";
}