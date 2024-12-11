import axios from "axios";
import LocalStorageService from "./localStorageService";



export default class MenuService {


    login(eposta, sifre) {
        const headers = {
            'ePosta': eposta,
            'sifre': sifre
        };


        return axios.post("https://apitest.kibrishesap.com/api/Menu/Login",
            { eposta, sifre },
            { headers }
        );
    }

    yeniUyeOlustur(isim, ePosta, cepTelefonu, sifre, sifreTekrar) {
        let siteWebYeniUyeUrl = "localhost:3000/yeniUye/"
        return axios.post("https://apitest.kibrishesap.com/api/Menu/YeniUyeOlustur", JSON.stringify({ isim, ePosta, cepTelefonu, sifre, sifreTekrar, siteWebYeniUyeUrl })
        );
    }

    sifreGonder(ePosta) {
        let siteWebSifreGonderUrl = "localhost:3000/sifreOlustur/"
        return axios.post("https://apitest.kibrishesap.com/api/Menu/SifreGonder", { ePosta, siteWebSifreGonderUrl }
        );
    }

    sifreDegistir(token, sifre, sifreTekrar) {
        return axios.post("https://apitest.kibrishesap.com/api/Menu/SifreOlustur", { token, sifre, sifreTekrar }
        );
    }

    sifreGuncelle(eskiSifre, yeniSifre, yeniSifreTekrar) {
        const localStorageService = new LocalStorageService()
        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }
        return axios.post("https://apitest.kibrishesap.com/api/Menu/SifreDegistir", { eskiSifre, yeniSifre, yeniSifreTekrar },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
    }
    yeniUyeDogrula(token) {
        return axios.post("https://apitest.kibrishesap.com/api/Menu/YeniUyeDogrula", { token }
        );
    }

    dashboard() {
        const localStorageService = new LocalStorageService()

        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }
        return axios.post("https://apitest.kibrishesap.com/api/Menu/Dashboard", {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        );
    }

    uyeTahsilatOnKontrol(uyeId, uyeEPosta, firmaId) {
        const localStorageService = new LocalStorageService()

        const token = localStorageService.getItemWithTime("token")
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }
        return axios.post("https://apitest.kibrishesap.com/api/Menu/UyeTahsilatOnKontrol", JSON.stringify({ uyeId, uyeEPosta, firmaId }), {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        );
    }


}
