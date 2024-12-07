
import axios from "axios";

export default class CariIslemlerService {

    getCariIslemler(cariId) {
        const token = localStorage.getItem("token"); // Token'i al
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }

        return axios.post("https://apitest.kibrishesap.com/api/Cari/CariHareketleri",{cariId}, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Token başlığı
                    'Content-Type': 'application/json'  // Doğru içerik türünü belirt
                }
            }
        );
    }
}




