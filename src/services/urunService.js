
import axios from "axios";
import LocalStorageService from "./localStorageService";




export default class UrunService {

    getUrunler() {
        const localStorageService = new LocalStorageService()

        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }

        return axios.post("https://apitest.kibrishesap.com/api/Urun/UrunListesi", {},
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Token başlığı
                    'Content-Type': 'application/json'  // Doğru içerik türünü belirt
                }
            }
        );
    }
}




