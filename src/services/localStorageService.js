import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default class LocalStorageService {
    
    setItemWithTime(key, value, expiryInMinutes){
        const now = new Date();

        // Son kullanma zamanı
        const item = {
            value: value,
            expiry: now.getTime() + expiryInMinutes * 60000, // Milisaniye cinsinden
        };
    
        localStorage.setItem(key, JSON.stringify(item));
    }

    getItemWithTime(key){

        const itemStr = localStorage.getItem(key);

        if (!itemStr) {
            return null;
        }
    
        const item = JSON.parse(itemStr);
        const now = new Date();
        

    
        if (now.getTime() > item.expiry) {

            localStorage.clear()
            return null;
        }
    
        return item.value;
    }
    
}




