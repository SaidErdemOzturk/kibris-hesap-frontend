
import axios from "axios";

const IDepo = {
    id:String,
    adi:String
};  
export default class DepoService {
    

    getDepolar() {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }

        return axios.post("https://apitest.kibrishesap.com/api/Depo/DepoListesi",{}, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    kayitDepo(id,depoAdi){
        const token = localStorage.getItem("token"); 

        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }
        let depoDto = {id:id,adi:depoAdi}

        console.log( JSON.stringify({depoDto}))
        return axios.post("https://apitest.kibrishesap.com/api/Depo/DepoKayit", 
            JSON.stringify({depoDto}),
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
       
    }

    deleteDepo(depoId){
        const token = localStorage.getItem("token"); 
        if (!token) {
            console.error("Token bulunamadı!");
            return Promise.reject("Token bulunamadı!");
        }
        console.log(JSON.stringify({depoId}))
        return axios.post("https://apitest.kibrishesap.com/api/Depo/DepoSil", 
            JSON.stringify({depoId}),
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
    }

}




