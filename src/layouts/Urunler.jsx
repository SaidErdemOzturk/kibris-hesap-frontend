import React, { useEffect, useState } from 'react'
import { TipsAndUpdatesOutlined } from '@mui/icons-material'
import UrunService from '../services/urunService'
import { toast } from 'react-toastify'
import UrunModal from '../modals/Urunler/UrunModal'
import BrushIcon from '@mui/icons-material/Brush';


export default function Urunler() {

    const [urunler, setUrunler] = useState([])
    const [selectedUrunHizmet, setSelectedUrunHizmet] = useState({})

    useEffect(() => {
        let urunService = new UrunService()
        urunService.getUrunler().then((result) => {
            if (result.data.geriBildirimDto.kodu != 0) {
                toast.error(result.data.geriBildirimDto.aciklama)
            } else {
                setUrunler(result.data.urunDtoList)
            }
        })
    }, [selectedUrunHizmet])

    
    const handleSelectUrunHizmet = (urunHizmet) => {
        setSelectedUrunHizmet(urunHizmet)
        console.log(urunHizmet)
    }

    return (
        <div className="custom-dashboard-bg d-flex flex-column vh-100 rounded rounded-5">
            <div>
                <button type="button" className="btn btn-success mb-2 me-2 mt-3"
                data-bs-target="#urunModal" 
                data-bs-toggle="modal"
                onClick={()=>handleSelectUrunHizmet({})}
                >Yeni Ürün Ekle</button>
                <button type="button" className="btn btn-success mb-2 mt-3">Excelden Yükleme</button>
            </div>
            <div className='custom-cari-bg flex-grow-1 rounded-2 mb-2'>
                <button type="button" className="btn btn-light mb-1 ms-2 mt-2">Excel Dışarı Aktarma</button>
                <button type="button" className="btn btn-light mb-1 ms-2 mt-2">Yazdır</button>
                <table className="table ">
                    <thead className='table-primary'>
                        <tr>
                            <th scope="col">İşlemler</th>
                            <th scope="col">Adı</th>
                            <th scope="col">Tipi</th>
                            <th scope="col">Birim</th>
                            <th scope="col">Satış Fiyatı</th>
                            <th scope="col">Satış KDV</th>
                            <th scope="col">Alış Fiyatı</th>
                            <th scope="col">Alış KDV</th>
                            <th scope="col">Alış İskonto</th>
                            <th scope="col">Kodu</th>
                            <th scope="col">Barkodu</th>
                            <th scope="col">ETicaret</th>
                            <th scope="col">Pasif</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            urunler.map((urun) => (
                                <tr>
                                    <td>                                        
                                        <button
                                        className="border-0 bg-transparent"
                                        data-bs-toggle="modal"
                                        onClick={() => handleSelectUrunHizmet(urun)}
                                        data-bs-target="#urunModal"
                                    >
                                        <BrushIcon />
                                    </button></td>
                                    <td>{urun.adi}</td>
                                    <td>{urun.tipi}</td>
                                    <td>{urun.birimAdi}</td>
                                    <td>{urun.satisFiyati}</td>
                                    <td>{urun.satisKdvOrani}</td>
                                    <td>{urun.alisFiyati}</td>
                                    <td>{urun.alisKdvOrani}</td>
                                    <td>{urun.alisIskonto}</td>
                                    <td>{urun.urunKodu}</td>
                                    <td>{urun.barkodu}</td>
                                    <td>{urun.ETicaret}</td>
                                    <td>{urun.pasif}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/**Modallar */}
            <UrunModal selectedUrunHizmet={selectedUrunHizmet} setSelectedUrunHizmet={setSelectedUrunHizmet} />
        </div>
    )
}
