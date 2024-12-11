
import axios from "axios";
import LocalStorageService from "./localStorageService";

export default class CariIslemlerService {

    getCariIslemler(cariId) {
        const localStorageService = new LocalStorageService()
        
        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }

        return axios.post("https://apitest.kibrishesap.com/api/Cari/CariHareketleri",{cariId}, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    cariİslemSil(cariId,fisBaslikId){

        const localStorageService = new LocalStorageService()
        
        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }
        return axios.post("https://apitest.kibrishesap.com/api/Cari/CariFisSil",{cariId,fisBaslikId}, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    cariİslemGuncelle(belgeNo,aciklama,tutar,islemTarihi,fisBaslikId,cariId){

        const localStorageService = new LocalStorageService()
        
        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }
        return axios.post("https://apitest.kibrishesap.com/api/Cari/CariFisKayitUpdate",{belgeNo,aciklama,tutar,islemTarihi,fisBaslikId,cariId}, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
    }
}




