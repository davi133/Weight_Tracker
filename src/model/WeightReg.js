//import { type } from "@testing-library/user-event/dist/type";
"use strict"

export default function WeightReg(weight,year,month,day, perfil=null,id=-1)
{
    var weightCard=
    {
        id:id,
        perfil:perfil,
        weight:weight,
        year:year,
        month:month,//1-12
        day:day,
        date: function() {
            //in case you are wondering, this .padStart is to make the number display with at least 2 digits
            return String(this.day).padStart(2, '0') + "/" + String(this.month).padStart(2, '0')+"/"+this.year;
        }

    };
    
    
    return weightCard;
}



export class WeightRegs
{
    constructor(weight,year,month,day)
    {
        this.weight=weight
        this.year=year
        this.month=month
        this.day=day
    }

    date_string()
    { //in case you are wondering, this .padStart is to make the number display with at least 2 digits
        return String(this.day).padStart(2, '0') + "/" + String(this.month).padStart(2, '0')+"/"+this.year
    }


}