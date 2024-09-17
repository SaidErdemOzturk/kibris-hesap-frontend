import React, { useEffect, useState } from 'react'
import MusteriTedarikciService from '../services/musteriTedarikciService'
import { toast } from 'react-toastify'

export default function CariTanitim() {

    const [musteriler, setMusteriler] = useState([{ unvani: "", yetkiliKisi: "", cepTelefonu1: "", vergiDairesi: "", adres: "", paraBirimi: "", pasif: false }])

    useEffect(() => {
        let musteriTedarikciService = new MusteriTedarikciService()
        musteriTedarikciService.getMusteriler(2).then((result) => {
            if (result.data.geriBildirimDto.kodu != 0) {
                toast.error(result.data.geriBildirimDto.aciklama)
            } else {
                setMusteriler(result.data.cariDtoList)
            }
        })
    }, [])


    return (

        <div className="custom-dashboard-bg d-flex flex-column vh-100 rounded rounded-5">
            <div>
                <button type="button" className="btn btn-success mb-2 me-2 mt-3">Yeni Müşteri Ekle</button>
                <button type="button" className="btn btn-success mb-2 mt-3">Excelden Yükleme</button>
            </div>
            <div className='custom-cari-bg flex-grow-1 rounded-2 mb-2'>
                <button type="button" className="btn btn-light mb-1 ms-2 mt-2">Excel Dışarı Aktarma</button>
                <button type="button" className="btn btn-light mb-1 ms-2 mt-2">Yazdır</button>
                <table className="table ">
                    <thead className='table-primary'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">İsmi/Ünvan</th>
                            <th scope="col">Yetkili Kişi</th>
                            <th scope="col">Cep Telefonu</th>
                            <th scope="col">Vergi Dairesi</th>
                            <th scope="col">Adres</th>
                            <th scope="col">PB</th>
                            <th scope="col">Pasif</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            musteriler.map((musteri) => (
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{musteri.unvani}</td>
                                    <td>{musteri.yetkiliKisi}</td>
                                    <td>{musteri.cepTelefonu1}</td>
                                    <td>{musteri.vergiDairesi}</td>
                                    <td>{musteri.adres}</td>
                                    <td>{musteri.paraBirimi}</td>
                                    <td>{musteri.pasif}</td>
                                </tr>
                            ))
                        }

                        
                    </tbody>
                </table>
            </div>

        </div>

    )
}
