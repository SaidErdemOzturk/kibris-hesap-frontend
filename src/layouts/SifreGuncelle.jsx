import React, { useEffect, useState } from 'react'
import MusteriTedarikciService from '../services/musteriTedarikciService'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import MenuService from '../services/menuService'

export default function SifreDegistir() {
    const [eskiSifre, setEskiSifre] = useState("")
    const [yeniSifre, setYeniSifre] = useState("")
    const [yeniSifreTekrar, setYeniSifreTekrar] = useState("")
    const navigate = useNavigate()


    const handleGuncelle=()=>{
        const menuService = new MenuService()
        menuService.sifreGuncelle(eskiSifre,yeniSifre,yeniSifreTekrar).then((result)=>{
            if (result.data.geriBildirimDto.kodu != 0) {
                toast.error(result.data.geriBildirimDto.aciklama)
            } else {
                toast.success("Şifre Değiştirme Başarılı!")
                navigate("/")
            }
        })
    }



    return (

        <div className="custom-dashboard-bg rounded rounded-5">
                <h3 className='m-auto'>Şifre Güncelle</h3>
            <div className='d-flex flex-column align-items-center justify-content-between rounded-2 mb-2'>
                <div className='d-flex form-group  m-2'>

                <label className='col-4 col-form-label' >Eski Şifre</label>
                <input type="password" className="form-control col-8" id="floatingInput"  placeholder="Eski Şifrenizi Giriniz" onChange={(e) => setEskiSifre(e.target.value)} />
                    
                </div>
                <div className='d-flex form-group  m-2'>


                <label className='col-4 col-form-label' >Yeni Şifre</label>

                <input type="password" className="form-control col-8" id="floatingInput"  placeholder="Yeni Şifrenizi Giriniz" onChange={(e) => setYeniSifre(e.target.value)} />
                </div>
                <div className='d-flex form-group justify-content-between m-2'>

                <label className='' >Yeni Şifre Tekrar</label>

                <input type="password" className="form-control" id="floatingInput"  placeholder="Yeni Şifrenizi Tekrar Giriniz" onChange={(e) => setYeniSifreTekrar(e.target.value)} />
                </div>

                <button type="button" className="btn btn-primary  " onClick={() => handleGuncelle()}>Güncelle</button>

            </div>
        </div>

    )
}
