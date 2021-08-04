class Question{

    constructor(level ){
        this.level = level
        this.title = ""
        this.answers = new Array();
    }

    getCorrect(){

        this.answers.forEach(ans =>{
            if(ans.correct){
                return ans;
            }
        })
    }

    genAnsers(answer){

        this.answers.push(answer)

    }


}