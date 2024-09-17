import React, { useState } from 'react'
import MenuService from '../services/menuService'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export default function RegisterPage() {

    const navigate = useNavigate()

    const [isim, setIsim] = useState("")
    const [telefon, setTelefon] = useState("")
    const [eposta, setEposta] = useState("")
    const [sifre, setSifre] = useState("")
    const [sifreTekrar, setSifreTekrar] = useState("")
    

    const handleNewUser=()=> {
        let menuService = new MenuService()
        menuService.newUser(isim,telefon,eposta,sifre,sifreTekrar).then((result)=>{
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

        <div className='p-3 rounded-4 bg-white w-25 h-70'>
            <form>
                <h3>Ücretsiz Hesap Oluştur</h3>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="" onChange={(e)=>setIsim(e.target.value)}/>
                    <label htmlFor="floatingInput">İsminiz</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="" onChange={(e)=>setEposta(e.target.value)} />
                    <label htmlFor="floatingInput">Eposta Adresiniz</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="tel" className="form-control" id="floatingInput" placeholder="" onChange={(e)=>setTelefon(e.target.value)}/>
                    <label htmlFor="floatingInput">Telefon</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="" onChange={(e)=>setSifre(e.target.value)}/>
                    <label htmlFor="floatingPassword">Şifreniz</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="" onChange={(e)=>setSifreTekrar(e.target.value)}/>
                    <label htmlFor="floatingPassword">Şifre tekrarı</label>
                </div>

                <a href="/"className="link-underline-light btn btn-link mb-3" htmlFor="flexCheckDefault">
                    Hesabınız var mı, Giriş Yapın
                </a>
                <button type="button" onClick={()=>handleNewUser()} className="btn btn-primary w-100 rounded-pill mb-3">Kayıt Ol</button>

            </form>


        </div>
    </div>

</div>
  )
}
