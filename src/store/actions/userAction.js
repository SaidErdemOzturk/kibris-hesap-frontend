export const LOGIN="LOGIN"
export const LOGOUT="LOGOUT"

export function login(ePosta,firmaAdi,firmaUnvani,token){
    return {
        type :LOGIN,
        user:{ePosta,firmaAdi,firmaUnvani,token}
    }
}

export function logout(){
    return {
        type :LOGOUT,
        user:null
    }
}