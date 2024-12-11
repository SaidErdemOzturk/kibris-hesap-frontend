import LocalStorageService from "../../services/localStorageService"


const localStorageService = new LocalStorageService()
        
export const user = {
    ePosta: localStorageService.getItemWithTime("ePosta"), 
    firmaAdi: localStorageService.getItemWithTime("firmaAdi"),
    firmaUnvani: localStorageService.getItemWithTime("firmaUnvani"),
    token: localStorageService.getItemWithTime("token")
}