export default function WeightReg(weight, date, perfil=null)
{
    var weightCard=
    {
        perfil:perfil,
        weight:weight,
        date:yyyymmdd(date),
    };
    return weightCard;
}


function yyyymmdd(date) {
    

    if (!(date instanceof Date && !isNaN(date)))
    {
        date = new Date();
    }
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();
  
    var full= [date.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('-');
    
    return full
    
};
  

