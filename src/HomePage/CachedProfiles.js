
export function retrieveAllCahcedProfiles() {
    var lista = localStorage.getItem("WT_cached") || "[]";
    return JSON.parse(lista);
}

export function retrieveCachedProfileByIndex(index) {
    var lista = retrieveAllCahcedProfiles();
    return lista[index];
}

export function retrieveCachedProfileByEmail(email) {
    var lista = retrieveAllCahcedProfiles();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].email === email) {
            return lista[i];
        }
    }
    return undefined;

}

export function CacheProfile(profile) {

    profile.senha = "";
    var lista = retrieveAllCahcedProfiles();
    
    //checando se estava na lista. Se estava na lista então só precisa atualizar os valores
    let wasInList = false;
    lista.forEach((element, index, theArray) => {
        if (element.email === profile.email) {
            theArray[index] = profile;
            wasInList=true;
        }
    });
    if (!wasInList) lista.push(profile);
    localStorage.setItem("WT_cached", JSON.stringify(lista));
    console.log("profile [" + profile.email + "] cached")
}

export function UncacheProfile(profile) {
    var lista = retrieveAllCahcedProfiles();
    lista.forEach((element, index, theArray) => {
        if (element.email === profile.email) {
            delete theArray[index];
        }
    });
    localStorage.setItem("WT_cached", JSON.stringify(lista));
    console.log("profile [" + profile.email + "] uncached")
}

export function UncacheProfilebyIndex(index) {
    var lista = retrieveAllCahcedProfiles();
    delete lista[index];
    localStorage.setItem("WT_cached", JSON.stringify(lista));
    console.log("profile [" + index + "] uncached")
}


export function UncacheAllProfiles() {
    localStorage.removeItem("WT_cached");
    console.log("cache apagado");
}

window.uncacheAllProfiles = UncacheAllProfiles;