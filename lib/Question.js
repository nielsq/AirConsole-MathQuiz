class Question{

    constructor(level ){
        var q = level.generateQuestion()
        this.title = q[0]
        this.task = q[1]
        this.answers = q[2]
        this.player_answers = new Map()
    }

    getCorrect(){

        this.answers.forEach(ans =>{
            if(ans.correct){
                return ans;
            }
        })
    }


}