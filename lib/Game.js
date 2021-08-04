class Game{

    constructor(level, rounds, timer = 5){

        this.level = level;
        this.rounds = rounds;
        this.currRound = 0;
        this.points = new Map();
        this.players = new Map();
        this.questions = new Array();
        this.timer = timer;

    }

    addPlayer(player){

        if(!this.players.has(player.getNickname())){
            this.players.set(player.getNickname, player)
            this.player.set(player.getNickname, 0)
        }
    }

    getPoints(){

        return this.points;
    }
    
    getPlayers(){

        return this.players;

    }

    removeplayer(player){

        if(this.players.has(player.getNickname())){

            this.players.delete(this.players.getNickname())
            this.points.delete(this.players.getNickname())
        }
    }

    nextRound(){

        this.currRound++

        if(this.currRound >= this.rounds){
            //end game
        } else {
            //next question
        }
    }

    genQuestions(){

        for(let i = 0; i < this.rounds; i ++){

            var q2 = new Question(
                this.level
            )

            this.questions.push(q1);

        }
    }

}