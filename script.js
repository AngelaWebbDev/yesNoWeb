var answerKey = ["yes", "of course", "maybe", "no", "never", "not today", "possibly", "likely","unlikely"];

function getAnswer(){    
    console.log('function entered');
    var question = document.querySelector("#theQuestion").value;
    question = question.toLowerCase();
    if(question.startsWith('am') || question.startsWith('is') || question.startsWith('does')
        || question.startsWith('can') || question.startsWith('are') || question.startsWith('was')
        || question.startsWith('were') || question.startsWith('has') || question.startsWith('have')
        || question.startsWith('do') || question.startsWith('did') || question.startsWith('should') 
        || question.startswith('may')){
            var indexNum = Math.ceil(Math.random()*(answerKey.length-1));
            console.log('math.ceil: ' + Math.ceil(Math.random()*(answerKey.length-1)));
            console.log('math.floor: ' + Math.floor(Math.random()*(answerKey.length-1)));
            console.log('math.round: ' + Math.round(Math.random()*(answerKey.length-1)));
            console.log('indexNum = ' + indexNum);
            var answer = answerKey[indexNum];
            document.getElementById('theAnswer').innerText = answer;
        console.log("end of if");
    } else if(question ==='quit'){
        console.log("else if");
        document.getElementById('theAnswer').innerText = "goodbye";
    } else{
        console.log("else");
        document.getElementById('theAnswer').innerText = 'I don\'t understand the question.';
    }
}