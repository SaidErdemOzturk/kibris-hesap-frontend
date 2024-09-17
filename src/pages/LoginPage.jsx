import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuService from '../services/menuService'
import { toast } from 'react-toastify'


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const handleSignIn = () => {
        let menuService = new MenuService()
        menuService.login(email, password).then(result => {
            if (result.data.geriBildirimDto.kodu != 0) {
                toast.error(result.data.geriBildirimDto.aciklama)
            } else {
                localStorage.setItem("ePosta",`${result.data.ePosta}`)
                localStorage.setItem("firmaAdi",`${result.data.firmaAdi}`)
                localStorage.setItem("firmaUnvani",`${result.data.firmaUnvani}`)
                localStorage.setItem("token",`${result.data.token}`)
                console.log("gitti")
                navigate("/index")
            }
        })
    }


    return (
        <div className=' custom-bg '>
            <div className='d-flex justify-content-center align-items-center vh-100'>

                <div className='p-3 rounded-4 bg-white w-25 h-70'>
                    <form>
                        <h3>Kıbrıs Hesap</h3>
                        <h5>Hoş geldiniz e-posta ve parolanız ile güvenli giriş yapabilirsiniz</h5>
                        <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Eposta adresiniz</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="name@example.com" onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="floatingPassword">Şifreniz</label>
                        </div>
                        <div className='form-check d-flex justify-content-start mx-auto'>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Beni Hatırla
                            </label>
                        </div>
                        <p><a href="#" className="link-underline-light d-flex justify-content-end">Şifremi unuttum</a></p>
                        <button type="button" className="btn btn-primary w-100 rounded-pill mb-3" onClick={() => handleSignIn()}>Giriş Yap</button>
                        <label className="form-check-label mb-3" htmlFor="flexCheckDefault">
                            Hesabınız yok mu
                        </label>
                        <p><a href="yeniUye" className="link-underline-light btn btn-link">Hesap oluşturun</a></p>
                    </form>
                </div>
            </div>

        </div>
    )
}
