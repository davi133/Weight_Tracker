

export default function Profile(name, email="sem email", senha="12345")
{
    var newProfile=
    {
       name:name,
       email:email,
       senha:senha

    };
    return newProfile;
}


export function retrieveAllAccounts()
{

    var lista = localStorage.getItem("WT_profiles") ||"{}";
    return JSON.parse(lista);
    
}


export function retrieveAccount(email)
{
    var lista = retrieveAllAccounts();
    return lista[email];
}

export function saveProfile(profile)
{
    var lista = retrieveAllAccounts();
    lista = {...lista, [profile.email]: profile}
    localStorage.setItem("WT_profiles",JSON.stringify(lista));
    console.log("profile ["+profile.email+"] saved")
    /*localStorage.setItem(profile.email,JSON.stringify(profile))*/
}

export function removeAllAccounts()
{
    localStorage.removeItem("WT_profiles");
    console.log("contas apagadas");
}

window.removeAllAccounts = removeAllAccounts;