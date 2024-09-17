
import axios from "axios";

export default class UrunService {

    getUrunler() {
        const token = localStorage.getItem("token"); // Token'i al
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }

        return axios.post("https://apitest.kibrishesap.com/api/Urun/UrunListesi",{}, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Token başlığı
                    'Content-Type': 'application/json'  // Doğru içerik türünü belirt
                }
            }
        );
    }
}




