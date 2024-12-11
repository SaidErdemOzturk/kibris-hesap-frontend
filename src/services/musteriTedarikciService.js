import axios from "axios";
import { json } from "react-router-dom";
import LocalStorageService from "./localStorageService";




export default class MusteriTedarikciService {

    getMusteriTedarikci(cariTipi) {
        const localStorageService = new LocalStorageService()

        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }

        return axios.post("https://apitest.kibrishesap.com/api/MusteriTedarikci/Index",
            JSON.stringify({ cariTipi }), // Veriyi JSON formatına çevir
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Token başlığı
                    'Content-Type': 'application/json'  // Doğru içerik türünü belirt
                }
            }
        );
    }
    musteriTedarikciKayit(cariDto){
        const localStorageService = new LocalStorageService()

        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }
        return axios.post("https://apitest.kibrishesap.com/api/MusteriTedarikci/MusteriTedarikciKayit",
            JSON.stringify({ cariDto }), // Veriyi JSON formatına çevir
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Token başlığı
                    'Content-Type': 'application/json'  // Doğru içerik türünü belirt
                }
            }
        );
    }

    musteriTedarikciSil(cariId,cariTipi){
        const localStorageService = new LocalStorageService()

        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }
        return axios.post("https://apitest.kibrishesap.com/api/MusteriTedarikci/MusteriTedarikciSil",
            JSON.stringify({ cariId,cariTipi }),
            {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                    'Content-Type': 'application/json'  
                }
            }
        );
    }

    musteriTedarikciSablonIndir(cariTipi){
        const localStorageService = new LocalStorageService()

        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }
        return axios.post("https://apitest.kibrishesap.com/api/MusteriTedarikci/MusteriTedarikciSablonIndir",
            JSON.stringify({ cariTipi }),
            {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                    'Content-Type': 'application/json'  
                }
            }
        );
    }
}
