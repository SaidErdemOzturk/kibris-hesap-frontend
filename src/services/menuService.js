import axios from "axios";

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

    newUser(isim,eposta,telefon,sifre,sifreTekrar){
        let siteWebYeniUyeUrl="string"
        return axios.post("https://apitest.kibrishesap.com/api/Menu/YeniUyeOlustur",{isim,eposta,telefon,sifre,sifreTekrar,siteWebYeniUyeUrl}
        );
    }
}
