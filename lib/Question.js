class Question{

    constructor(level ){
        var q = level.generateQuestion()
        this.Title = q[0]
        this.Task = q[1]
        this.Answers = q[2]
        this.PlayerAnswers = new Map()
    }

    getCorrect(){

        this.Answers.forEach(ans =>{
            if(ans.Correct){
                return ans;
            }
        })
    }


}