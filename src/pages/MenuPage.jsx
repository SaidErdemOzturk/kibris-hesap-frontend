import React from 'react'
import TreeMap from '../layouts/TreeMap'
import Header from '../layouts/Header'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import CariTanitim from '../layouts/CariTanitim'
import LoginPage from '../pages/LoginPage'
import Urunler from '../layouts/Urunler'
import DepoTanitim from '../layouts/DepoTanitim'

export default function MenuPage() {
    return (
        <div>
            <div className="row vh-100">
                <div className="col-2 custom-tree-bg"><TreeMap /></div>

                <div className="col-10 d-flex flex-column min-vh-100 custom-dashboard-bg ">
                    <Header />
                    <Routes>
                    <Route path="/index" Component={CariTanitim} />
                    <Route path="/cariTanitim/:id" Component={CariTanitim} />
                    <Route path="/login" Component={LoginPage} />
                    <Route path="/urunler" Component={Urunler} />
                    <Route path="/depoTanitim" Component={DepoTanitim} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
