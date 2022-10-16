import $ from "jquery";

export default function Profile(name, email="sem email", senha="12345",id=-1)
{
    var newProfile=
    {
       id:id,
       name:name,
       email:email,
       senha:senha
    };
    return newProfile;
}


/*export function retrieveAllAccounts()
{

    //var lista = localStorage.getItem("WT_profiles") ||"{}";
    console.warn("retrieveAllAccounts will be removed soon");
    var lista ="{}";
    return JSON.parse(lista);
}


export function retrieveAccount(email)
{//TODO
    var lista = retrieveAllAccounts();
    return lista[email];
}
export function retrieveAccountByID(id)
{//TODO
    var lista = retrieveAllAccounts();
    return lista[id];
}

export function saveProfile(profile)
{
    let res = {};
    $.ajax({
        async:false,
        type: "post",
        url: "http://localhost:8080/weightTrackerBack/cadastrarUsuario.php",
        data: profile,
        success(response) {          
            res = JSON.parse(response);
        },
    });
    return res;
    
  
}

export function removeAllAccounts()
{
    //localStorage.removeItem("WT_profiles");
    console.log("contas apagadas");
}

//window.removeAllAccounts = removeAllAccounts;*/