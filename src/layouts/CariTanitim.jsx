import React, { useEffect, useState } from 'react'
import MusteriTedarikciService from '../services/musteriTedarikciService'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import YeniMusteriEkleModal from '../modals/Museriler/YeniMusteriEkleModal'
import BrushIcon from '@mui/icons-material/Brush';


export default function CariTanitim() {

    let { id } = useParams()

    const [musteriTedarikciler, setMusteriTedarikciler] = useState([])

    const [selectedMusteriTedarikci, setSelectedMusteriTedarikci] = useState({})
    useEffect(() => {
        if (id) {
            let musteriTedarikciService = new MusteriTedarikciService()
            musteriTedarikciService.getMusteriTedarikci(id).then((result) => {
                if (result.data.geriBildirimDto.kodu != 0) {
                    toast.error(result.data.geriBildirimDto.aciklama)
                } else {
                    setMusteriTedarikciler(result.data.cariDtoList)
                }
            })
        }
    }, [id,selectedMusteriTedarikci])



    const handleSelectMusteriTedarikci = (musteri) => {
        setSelectedMusteriTedarikci(musteri)
        console.log(musteri)
    }


    return (

        <div className="custom-dashboard-bg d-flex flex-column rounded rounded-5">
            <div>
                <button type="button"
                    className="btn btn-success mb-2 me-2 mt-3"
                    data-bs-toggle="modal"
                    onClick={()=>handleSelectMusteriTedarikci({})}
                    data-bs-target="#yeniMusteriEkleModal">
                    Yeni Müşteri Ekle
                </button>
                <button type="button" className="btn btn-success mb-2 mt-3">Excelden Yükleme</button>
            </div>
            <div className='custom-cari-bg flex-grow-1 rounded-2 mb-2'>
                <button type="button" className="btn btn-light mb-1 ms-2 mt-2">Excel Dışarı Aktarma</button>
                <button type="button" className="btn btn-light mb-1 ms-2 mt-2">Yazdır</button>
                <table className="table ">
                    <thead className='table-primary'>
                        <tr>
                            <th scope="col">İşlemler</th>
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
                            musteriTedarikciler.map((musteri) => (
                                <tr>
                                    <td>
                                        <button
                                            className="border-0 bg-transparent"
                                            data-bs-toggle="modal"
                                            onClick={() => handleSelectMusteriTedarikci(musteri)}
                                            data-bs-target="#yeniMusteriEkleModal"
                                        >
                                            <BrushIcon />
                                        </button>
                                    </td>
                                    <td>{musteri.unvani}</td>
                                    <td>{musteri.yetkiliKisi}</td>
                                    <td>{musteri.cepTelefonu1}</td>
                                    <td>{musteri.vergiDairesi}</td>
                                    <td>{musteri.adres}</td>
                                    <td>{musteri.paraBirimi}</td>
                                    <td><input class="form-check-input" type="checkbox" id="flexCheckCheckedDisabled" checked={musteri.pasif} disabled /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/*Modallar */}
            <YeniMusteriEkleModal musteriTedarikci={selectedMusteriTedarikci} setMusteriTedarikci={setSelectedMusteriTedarikci} tipi={id}/>
        </div>

    )
}
