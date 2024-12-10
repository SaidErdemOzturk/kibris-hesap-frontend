import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuService from '../services/menuService'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'


export default function SifreGonder() {
    const [email, setEmail] = useState('');

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBack = () => {
        navigate("/")
    }

    const handleSifreGonder = () => {

        let menuService = new MenuService()
        menuService.sifreGonder(email).then(result => {
            if (result.data.geriBildirimDto.kodu != 0) {
                toast.error(result.data.geriBildirimDto.aciklama)
            } else {
                navigate("/")
            }
        })
    }


    return (
        <div className=' custom-bg '>
            <div className='d-flex justify-content-center align-items-center vh-100'>

                <div className='p-4 rounded-4 bg-white w-30'>
                    <form className=''>

                        <h1 className=' w-50 mb-5 mx-auto mt-5'>Şifrenizi mi unuttunuz?</h1>
                        
                        <label>Eposta</label>
                        <input type="email" className="form-control" id="floatingInput"  placeholder="E-postanızı adresinizi giriniz" onChange={(e) => setEmail(e.target.value)} />
                        <div className='d-flex justify-content-between my-3'>
                        <button type="button" className="btn btn-primary  " onClick={() => handleBack()}>Geri Dön</button>
                        <button type="button" className="btn btn-primary  " onClick={() => handleSifreGonder()}>Gönder</button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
