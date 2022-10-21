export default function WeightReg(weight, date, perfil=null,id=-1)
{
    var weightCard=
    {
        id:id,
        perfil:perfil,
        weight:weight,
        date:yyyymmdd(date),
    };
    return weightCard;
}



function yyyymmdd(date) {
    
    if (date instanceof String)
    {
        return date
    }

    if (!(date instanceof Date && !isNaN(date)))
    {
        date = new Date();
    }

    //https://stackoverflow.com/a/63490548/18241587
    return date.toLocaleDateString('en-CA'); // 2020-08-19 (year-month-day) notice the different locale
    /*var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();
  
    var full= [date.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('-');
    
    return full*/
    
};


