import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import SifreGonder from './SifreGonder'
import SifreDegistir from './SifreDegistir'
import RegisterPage from './RegisterPage'
import UyeOnay from './UyeOnay'

export default function Dashboard() {
    return (
        <div className="flex-grow-1">
                    <Routes>
                    <Route exact path="*" Component={LoginPage} />
                    <Route path="/sifreGonder" Component={SifreGonder} />
                    <Route path="/sifreDegistir/:token" Component={SifreDegistir} />
                    <Route path="/yeniUye/" Component={RegisterPage} />
                    <Route path="/uyeOnay/:token" Component={UyeOnay} />
                    </Routes>
        </div>
    )
}
