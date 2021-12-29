class Answer{

    constructor(text, isCorrect = false){

        this.Text = text
        this.IsCorrect = isCorrect;
        
    }
    
    toString(){

        if(this.IsCorrect){
            return this.Text.toString()  + " is CORRECT"
        } else {
            return this.Text.toString() + " is NOT correct"

        }
    }
}