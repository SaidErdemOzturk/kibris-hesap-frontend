import React, { useEffect, useState } from 'react'
import { TipsAndUpdatesOutlined } from '@mui/icons-material'
import UrunService from '../services/urunService'
import { toast } from 'react-toastify'

export default function Urunler() {

    const [urunler, setUrunler] = useState([{ adi: "", tipi: "", birimAdi: "", satisFiyati: "", satisKdvOrani: "", alisFiyati: "", alisKdvOrani: "", alisIskonto: "", urunKodu: 0, barkodu: "", kalanMiktar: 0, ETicaret: false, pasif: false }])

    useEffect(() => {
        let urunService = new UrunService()
        urunService.getUrunler().then((result) => {
            if (result.data.geriBildirimDto.kodu != 0) {
                toast.error(result.data.geriBildirimDto.aciklama)
            } else {
                setUrunler(result.data.urunDtoList)
                console.log(result)
            }
        })
    }, [])

    return (
        <div className="custom-dashboard-bg d-flex flex-column vh-100 rounded rounded-5">
            <div>
                <button type="button" className="btn btn-success mb-2 me-2 mt-3">Yeni Ürün Ekle</button>
                <button type="button" className="btn btn-success mb-2 mt-3">Excelden Yükleme</button>
            </div>
            <div className='custom-cari-bg flex-grow-1 rounded-2 mb-2'>
                <button type="button" className="btn btn-light mb-1 ms-2 mt-2">Excel Dışarı Aktarma</button>
                <button type="button" className="btn btn-light mb-1 ms-2 mt-2">Yazdır</button>
                <table className="table ">
                    <thead className='table-primary'>
                        <tr>
                            <th scope="col">#</th>
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
                                    <th scope="row">1</th>
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
        </div>
    )
}
