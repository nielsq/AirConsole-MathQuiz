class Player{

    constructor(name, device_id, color){
        this.Name = name;
        this.changeColor(color)
        this.Device_id = device_id
    }

    changeColor(color){

        switch(color){
            case 1:
                this.color = "#0000FF"
            break
            case 2:
                this.color = "#00FF00"
            break
            case 3:
                this.color = "#FF0000"
            break
            case 4:
                this.color = "#800080"
            break
            case 5:
                this.color = "#FFA500"
            break
            case 6:
                this.color = "#00FF00"
            break
            case 7:
                this.color = "#000080"
            break
            default:
                this.color = "#FFFFFF"
        }
    }


}