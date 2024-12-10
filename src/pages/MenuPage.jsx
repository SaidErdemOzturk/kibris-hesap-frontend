import React from 'react'
import TreeMap from '../layouts/TreeMap'
import Header from '../layouts/Header'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import CariTanitim from '../layouts/CariTanitim'
import LoginPage from '../pages/LoginPage'
import Urunler from '../layouts/Urunler'
import DepoTanitim from '../layouts/DepoTanitim'
import CariIslemler from '../layouts/CariIslemler'
import SifreGonder from './SifreGonder'
import SifreGuncelle from '../layouts/SifreGuncelle'
import Index from '../layouts/Index'

export default function MenuPage() {
    return (
        <div>
            <div className="d-flex">
                <div className=""><TreeMap /></div>

                <div className="flex-grow-1 d-flex flex-column min-vh-100 custom-dashboard-bg p-2">
                    <Header />
                    <Routes>
                    <Route exact path="/" Component={Index} />
                    <Route path="/cariTanitim/:id" Component={CariTanitim} />
                    <Route path="/login" Component={LoginPage} />
                    <Route path="/sifreGonder" Component={SifreGonder} />
                    <Route path="/urunler" Component={Urunler} />
                    <Route path="/depoTanitim" Component={DepoTanitim} />
                    <Route path="/cariIslemler" Component={CariIslemler} />
                    <Route path="/sifreGuncelle" Component={SifreGuncelle} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
