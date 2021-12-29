class Game{

    constructor(level, rounds, timer){

        this.Level = level;
        this.Rounds = rounds;
        this.CurrRound = 0;
        this.Points = new Map();
        this.Players = new Map();
        this.Questions = new Array();
        this.Timer = timer;

    }

    addPlayer(player){

        if(!this.Players.has(player.device_id)){
            this.Players.set(player.device_id, player)
            this.Points.set(player.device_id, 0)
        }
    }

    getPoints(){

        return this.Points;
    }
    
    getPlayers(){

        return this.Players;

    }

    setPlayerAnswer(device_id,ans){
        this.Questions[this.CurrRound].PlayerAnswers.set(device_id,ans)

        //first correct ans get 3 points - other just 1
        if(this.Questions[this.CurrRound].PlayerAnswers.size == 1){
            this.Points.set(device_id,3)
        } else {
            this.Points.set(device_id,1)
        }
        
    }

    removeplayer(device_id){

        if(this.Players.has(device_id)){

            this.Players.delete(device_id)
            this.Points.delete(device_id)
        }
    }

    newRound(){

        this.CurrRound++
    }

    genQuestions(){

        this.Questions.push(new Question(this.Level));

    }

}