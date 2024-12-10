import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MenuService from '../services/menuService'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'


export default function UyeOnay() {
    let { token } = useParams()


    const navigate = useNavigate()
    
    useEffect(() => {
        if (token != "") {
            console.log("buraya kaç kez giriyor")
            let menuService = new MenuService()
            menuService.yeniUyeDogrula(token).then((result) => {
                if (result.data.geriBildirimDto.kodu != 0) {
                    toast.error(result.data.geriBildirimDto.aciklama)
                } else {
                    navigate("/")
                }
            })
        }
    }, [token])



    return (
        <div className=' custom-bg '>
            <div className='d-flex justify-content-center align-items-center vh-100'>

                <div className='p-4 rounded-4 bg-white w-30'>
                </div>
            </div>

        </div>
    )
}
