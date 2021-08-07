class Level1 extends Level{

    
    
    
    generateQuestion(){
        
        var operation = ["+", "-"]

        //first number between 1 and 20
        var n1 =  Math.floor(Math.random() * 19) + 2
        var n2 = Math.floor(Math.random() * 20) + 1

        //select + or - operation 
        var selectOperation =  Math.floor(Math.random() * 2) + 1

        //contains the correct result
        var correctResult
        var questionAsText
        // when operaiton is subtraction
        if(selectOperation == 2){
            //subtraction
            questionAsText = "Subtract the numbers"
            //n2 should not be larger than n1
            while (n2 >= n1 ){
                n2 = Math.floor(Math.random() * 20) + 1
            }
            correctResult = n1 - n2
        } else {
            //addition 
            questionAsText = "Add up the numbers"
            correctResult = n1 + n2
        }


        //numbers are selected and correct Result ist calculated
        

        
        //creating fake answers
        //select position of the correct answer
        var correctPos = Math.floor(Math.random() * 4) + 1
        //creating array for all ansers
        var ans = new Array();
        //pushing all anwers so no dublicates
        var usedResults = new Array();
        //adding correct result to all results in the ansers
        usedResults.push(correctResult);

        //creating all 4 ansers
        for(var i = 1; i < 5; i++ ){
            var a1;
            //creating correct ansers obj
            if(i == correctPos){
                a1 = new Answer(correctResult, true);
            } else {
                // Generation of results for the wrong answers  
                while(true){

                    //generating fake number for + / -
                    var tmp = Math.floor(Math.random() * 4) + 1;
                    //selecting fake number
                    var fake = -1;
                    
                    //select + / -
                    if(Math.floor(Math.random() * 2) + 1 == 1){
                        //adding fake to correct
                        fake = correctResult + tmp;
                    } else {
                        //sub fake from correct
                        fake = correctResult - tmp;
                    }
                    //fake number must be lager th an 0 and must be unique
                    if(fake > 0 && !usedResults.includes(fake)){
                        usedResults.push(fake);
                        a1 = new Answer(fake)
                        break;
                    }


                }

            }

            ans.push(a1)
            
        }


        //returns the question as Text, the actual formel, all answers
        return [questionAsText,n1 + operation[selectOperation - 1]  + n2,ans ]        
    }


}