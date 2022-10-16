import $ from "jquery";



/**[C r u d]
 * 
 * Saves a profile (from model/Profile.js) in the DB.
 * 
 * If there is already an existing profile with the same email it will reaturn an error
 * @param Profile: the profile to save
 */
export async function saveProfile(profile)
{
    let res = {};
    await $.ajax({
        async:false,
        type: "post",
        url: "http://localhost:8080/weightTrackerBack/registerUser.php",
        data: profile,
        success(response) {          
            res = JSON.parse(response);
        },
    });
    console.log(res);
    return res;
    
  
}

/**
 * [c R u d]
 */
export function validateLogin(email)
{//TODO
    //var lista = retrieveAllAccounts();
    //return lista[email];
}


/**
 * [c R u d]
 */
export function retrieveAccountByEmail(email)
{//TODO
    //var lista = retrieveAllAccounts();
    //return lista[email];
}

/**
 * [c R u d]
 */
export function retrieveAccountByID(id)
{//TODO
    //var lista = retrieveAllAccounts();
    //return lista[id];
}

/**
 * [c r u D]
 */
export async function removeAccount(profile)
{
    console.log("it is currently impossible to remove an account")
}


/**
 * [c r u DDDDDD]
 */
export function removeAllAccounts()
{
    //localStorage.removeItem("WT_profiles");
    console.log("contas apagadas");
}

window.removeAllAccounts = removeAllAccounts;