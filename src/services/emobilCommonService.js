
import axios from "axios";
import LocalStorageService from "./localStorageService";




export default class EMobilCommonService {

    paraBirimiListesi() {
        const localStorageService = new LocalStorageService()

        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }

        return axios.post("https://apitest.kibrishesap.com/api/EMobilStok/UrunTipiListesi", {},
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Token başlığı
                    'Content-Type': 'application/json'  // Doğru içerik türünü belirt
                }
            }
        );
    }

    kdvOraniListesi() {
        const localStorageService = new LocalStorageService()

        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }

        return axios.post("https://apitest.kibrishesap.com/api/EMobilCommon/KdvOraniListesi", {},
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Token başlığı
                    'Content-Type': 'application/json'  // Doğru içerik türünü belirt
                }
            }
        );
    }
}
