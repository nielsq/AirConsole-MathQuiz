class Answer{

    constructor(ans, correct = false){

        this.ans = ans
        this.correct = correct;
        
    }
    
    toString(){

        if(this.correct){
            return this.ans.toString()  + " is TRUE"
        } else {
            return this.ans.toString()

        }
    }
}