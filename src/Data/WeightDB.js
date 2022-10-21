
var WeightDB = {
    retrieveAllWeights : retrieveAllWeights,
    saveWeight :saveWeight,
    deleteWeight: deleteWeight,
    listenToChanges: (func)=>{ listeners.push(func);}

}

var listeners =[]
function notifyListeners()
{
    listeners.forEach((element)=>{element()})
}


export default WeightDB;

export async function retrieveAllWeights(email)
{
    var lista = localStorage.getItem("WT_weights") || "[]";
    return JSON.parse(lista);
}
export function lastWeightID()
{
    var id = localStorage.getItem("WT_lastID") || "-1";
    return parseInt(id);
}


function compareWeightDate( a, b ) {
    if ( a.date < b.date ){
      return -1;
    }
    if ( a.date > b.date ){
      return 1;
    }
    return 0;
  }
export async function saveWeight(weightr)
{
    var lista = await retrieveAllWeights("a");
    weightr.id = lastWeightID()+1
    lista.push(weightr);
    lista.sort(compareWeightDate);

    console.log("weight [" + weightr.weight + "] saved")
    
    localStorage.setItem("WT_lastID", weightr.id)
    localStorage.setItem("WT_weights", JSON.stringify(lista));
    notifyListeners();
    return weightr.id
}

export async function deleteWeight(weightr)
{
    var lista = await retrieveAllWeights("");
    lista.forEach((element, index, theArray) => {
        if (element.id === weightr.id) {
            delete theArray[index];
        }
    });
    localStorage.setItem("WT_weights", JSON.stringify(lista));
    console.log("weightr [" + weightr.weight + "] deleted")
    notifyListeners();
}


function deleteAllWeights()
{
    localStorage.removeItem("WT_weights");
}
window.deleteAllWeights = deleteAllWeights