import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MenuService from '../services/menuService'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'


export default function SifreOlustur() {
    const [email, setEmail] = useState('');
    const [sifre, setSifre] = useState("")
    const [sifreTekrar, setSifreTekrar] = useState("")
    let { token } = useParams()


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBack = () => {
        navigate("/")
    }

    const handleSifreOlustur = () => {

        let menuService = new MenuService()
        menuService.sifreOlustur(token,sifre,sifreTekrar).then(result => {
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

                        <h1 className=' w-50 mb-5 mx-auto mt-5'>Şifre Değiştir</h1>
                        <label className='mb-2'>{token}</label>
                        <label>Şifre</label>
                        <input type="password" className="form-control" id="floatingInput" placeholder="Şifre" onChange={(e) => setSifre(e.target.value)} />
                        <label>Şifre Tekrarı</label>
                        <input type="password" className="form-control" id="floatingInput" placeholder="Şifre Tekrarı" onChange={(e) => setSifreTekrar(e.target.value)} />
                        <div className='d-flex my-3 justify-content-center '>
                            <button type="button" className="btn btn-primary " onClick={() => handleSifreOlustur()}>Kayıt</button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
