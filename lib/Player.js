class Player{

    constructor(name, device_id, color = 1){
        this.name = name;
        this.changeColor(color)
        this.device_id = device_id
    }

    changeColor(color){

        switch(color){
            case "blue" || 1:
                this.color = "#0000FF"
            break
            case "Green" || 2:
                this.color = "#00FF00"
            break
            case "Red" || 3:
                this.color = "#FF0000"
            break
            case "Purple" || 4:
                this.color = "#800080"
            break
            case "Orange" || 5:
                this.color = "#FFA500"
            break
            case "Lime" || 6:
                this.color = "#00FF00"
            break
            case "Navy" || 7:
                this.color = "#000080"
            break
            default:
                this.color = "#0000FF"
        }
    }


}