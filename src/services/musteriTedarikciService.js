import axios from "axios";
import { json } from "react-router-dom";

export default class MusteriTedarikciService {

    getMusteriler(cariTipi) {
        const token = localStorage.getItem("token"); // Token'i al
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }

        return axios.post("https://apitest.kibrishesap.com/api/MusteriTedarikci/Index", 
            JSON.stringify({cariTipi}), // Veriyi JSON formatına çevir
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Bearer Token başlığı
                    'Content-Type': 'application/json'  // Doğru içerik türünü belirt
                }
            }
        );
    }
}
