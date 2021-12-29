function questionsUI(question){


    var mainDiv = document.getElementById("main")
    //clear main

    mainDiv.innerHTML = ""

    //show task
    var taskDiv = document.createElement('div');
    taskDiv.classList.add("row");
    taskDiv.id = "taskDiv"

    //show taskText div
    var textTaskDiv = document.createElement('div');
    textTaskDiv.classList.add("p-3");
    textTaskDiv.classList.add("mb-2");
    textTaskDiv.classList.add("bg-info");
    textTaskDiv.classList.add("text-white");
    textTaskDiv.innerHTML = question.Task
    textTaskDiv.style.textAlign = "center"
    textTaskDiv.id = "taskDiv"
 
    taskDiv.appendChild(textTaskDiv)

    //answersdiv

    var answersDiv = document.createElement('div');
    answersDiv.classList.add("row");
    answersDiv.id = "answersDiv"
    answersDiv.style.textAlign = "center"

    var divColors = ["bg-primary","bg-success","bg-danger","bg-warning"]

    question.Answers.forEach(function (element, index) {
        var answerDiv = document.createElement('div');
        answerDiv.id = "answerDiv-" + index
        answerDiv.classList.add("p-3");
        answerDiv.classList.add("mb-2");
        answerDiv.classList.add("col-6");
        answerDiv.classList.add(divColors[index]);
        answerDiv.classList.add("text-white");
        answerDiv.innerHTML = element.Text

        answersDiv.appendChild(answerDiv);
    });

    
    //answer progressBar
    var progressBarDiv = document.createElement('div');
    progressBarDiv.classList.add("progress-bar");
    progressBarDiv.classList.add("progress-bar-striped");
    progressBarDiv.classList.add("progress-bar-animated");
    progressBarDiv.setAttribute("role","progressbar")
    progressBarDiv.setAttribute("aria-valuenow","0")
    progressBarDiv.setAttribute("aria-valuemin","0")
    progressBarDiv.setAttribute("aria-valuemax","100")
    progressBarDiv.id = "progressBarDiv"
    progressBarDiv.style.width = "0%"

    var mainProgressBarDiv = document.createElement('div');
    mainProgressBarDiv.classList.add("progress");
    mainProgressBarDiv.appendChild(progressBarDiv);

    answersDiv.appendChild(mainProgressBarDiv);


    //add Task div to main
    mainDiv.appendChild(taskDiv);

    mainDiv.appendChild(answersDiv);

    
}

async function startProgressbar(timer){

    var progressBarDiv = document.getElementById('progressBarDiv');
    progressBarDiv.setAttribute("aria-valuenow","0")
    progressBarDiv.style.width = "0%"

    
    var currPrec = 1;
    while(currPrec < 100){
        currPrec += (100/timer)*0.1
        await delay(100);
        progressBarDiv.setAttribute("aria-valuenow",currPrec)
        progressBarDiv.style.width = currPrec + "%"
    }

}