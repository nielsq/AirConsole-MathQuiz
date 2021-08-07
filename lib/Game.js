class Game{

    constructor(level, rounds, timer){

        this.level = level;
        this.rounds = rounds;
        this.currRound = 0;
        this.points = new Map();
        this.players = new Map();
        this.questions = new Array();
        this.timer = timer;

    }

    addPlayer(player){

        if(!this.players.has(player.device_id)){
            this.players.set(player.device_id, player)
            this.points.set(player.device_id, 0)
        }
    }

    getPoints(){

        return this.points;
    }
    
    getPlayers(){

        return this.players;

    }

    setPlayerAnswer(device_id,ans){
        this.questions[this.currRound].player_anwsers.set(device_id,ans)

    }

    removeplayer(device_id){

        if(this.players.has(device_id)){

            this.players.delete(device_id)
            this.points.delete(device_id)
        }
    }

    newRound(){

        this.currRound++
    }

    genQuestions(){

        this.questions.push(this.level.generateQuestion());

    }

}