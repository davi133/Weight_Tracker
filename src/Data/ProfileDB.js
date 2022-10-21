import $ from "jquery";



/**[C r u d]
 * 
 * Saves a profile (from model/Profile.js) in the DB.
 * 
 * If there is already an existing profile with the same email it will reaturn an error
 * @param Profile: the profile to save
 * 
 * @return obj{   
 *   sucesso: bool
 * 
 *   message: string
 * 
 *   insertedId: int
 * 
 * }
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
    //console.log(res);
    return res;
    
  
}

/**[c R u d]
 * 
 * 
 * Validates the Login
 * 
 * @param email
 * @param password
 * 
 * @return obj{   
 *   sucesso: bool
 * 
 *   message: string
 * 
 *   userId: int
 * 
 * }
 */
export async function validateLogin(email,password)
{
    let res = {};
    await $.ajax({
        async:false,
        type: "post",
        url: "http://localhost:8080/weightTrackerBack/validateLogin.php",
        data: {
            email:email,
            senha:password
        },
        success(response) {          
            res = JSON.parse(response);
        },
    });
    //console.log(res);
    return res;
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
    //TODO ?????
    console.log("it is currently impossible to remove an account")
}


