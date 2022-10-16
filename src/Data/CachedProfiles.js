

/**[C r U d]
 */
export function CacheProfile(profile) {

    profile.senha = "";
    var lista = retrieveAllCahcedProfiles();
    
    //checando se estava na lista. Se estava na lista então só precisa atualizar os valores
    let wasInList = false;
    lista.forEach((element, index, theArray) => {
        if (element.email === profile.email) {
            theArray[index] = profile;
            wasInList=true;
            console.log("cached profile atualizado");
        }
    });
    if (!wasInList)
    {
        lista.push(profile);
        console.log("profile [" + profile.email + "] cached")
    } 
    localStorage.setItem("WT_cached", JSON.stringify(lista));
}


/**[c R u d]
 */
export function retrieveAllCahcedProfiles() {
    var lista = localStorage.getItem("WT_cached") || "[]";
    return JSON.parse(lista);
}

/**[c R u d]
 */
export function retrieveCachedProfileByIndex(index) {
    var lista = retrieveAllCahcedProfiles();
    return lista[index];
}

/**[c R u d]
 */
export function retrieveCachedProfileByEmail(email) {
    var lista = retrieveAllCahcedProfiles();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].email === email) {
            return lista[i];
        }
    }
    return undefined;

}

/**[c r u D]
 */
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

/**[c r u D]
 */
export function UncacheProfilebyIndex(index) {
    var lista = retrieveAllCahcedProfiles();
    delete lista[index];
    localStorage.setItem("WT_cached", JSON.stringify(lista));
    console.log("profile [" + index + "] uncached")
}

/**[c r u DDDDDDD]
 */
export function UncacheAllProfiles() {
    localStorage.removeItem("WT_cached");
    console.log("cache apagado");
}
window.uncacheAllProfiles = UncacheAllProfiles;