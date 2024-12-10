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

    yeniUyeOlustur(isim,eposta,telefon,sifre,sifreTekrar){
        let siteWebYeniUyeUrl="string"
        return axios.post("https://apitest.kibrishesap.com/api/Menu/YeniUyeOlustur",{isim,eposta,telefon,sifre,sifreTekrar,siteWebYeniUyeUrl}
        );
    }
    yeniUyeOlustur(token){
        let siteWebYeniUyeUrl="string"
        return axios.post("https://apitest.kibrishesap.com/api/Menu/YeniUyeDogrula",JSON.stringify({token})
        );
    }

    sifreGonder(ePosta){
        let siteWebSifreGonderUrl="localhost:3000/sifreOlustur/"
        return axios.post("https://apitest.kibrishesap.com/api/Menu/SifreGonder",{ePosta,siteWebSifreGonderUrl}
        );
    }

    sifreDegistir(token,sifre,sifreTekrar){
        return axios.post("https://apitest.kibrishesap.com/api/Menu/SifreOlustur",{token,sifre,sifreTekrar}
        );
    }

    sifreGuncelle(eskiSifre,yeniSifre,yeniSifreTekrar){
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }
        return axios.post("https://apitest.kibrishesap.com/api/Menu/SifreDegistir",{eskiSifre,yeniSifre,yeniSifreTekrar},
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
    }


}
