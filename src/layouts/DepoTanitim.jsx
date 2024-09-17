import React, { useEffect, useState } from 'react'
import DepoService from '../services/depoService'
import { toast } from 'react-toastify'

export default function DepoTanitim() {



    const [depolar, setDepolar] = useState([{ adi: "" }])

    useEffect(() => {
        let depoService = new DepoService()
        depoService.getDepolar().then((result) => {
            if (result.data.geriBildirimDto.kodu != 0) {
                toast.error(result.data.geriBildirimDto.aciklama)
            } else {
                setDepolar(result.data.depoDtoList)
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
                            <th scope="col">Güncelle</th>
                            <th scope="col">Adı</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            depolar.map((depo) => (
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{depo.adi}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
  )
}
