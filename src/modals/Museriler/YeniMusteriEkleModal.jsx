import { FormControlLabel, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ParaBirimi } from "../../contains/ParaBirimleri";
import MusteriTedarikciService from "../../services/musteriTedarikciService";
import { toast } from 'react-toastify'


export default function YeniMusteriEkleModal({ musteriTedarikci,tipi,setMusteriTedarikci }) {
    const [tempMusteriTedarikci, setTempMusteriTedarikci] = useState({})
    useEffect(() => {
        setTempMusteriTedarikci(musteriTedarikci)
    }, [musteriTedarikci])
    


    const [kimlikIletisim, setKimlikIletisim] = useState(true)
    const [cari, setCari] = useState(false)
    const [diger, setDiger] = useState(false)

    const handleKimlikIletisim = () => {
        setCari(false)
        setDiger(false)
        setKimlikIletisim(true)
    };
    const handleDiger = () => {
        setCari(false)
        setKimlikIletisim(false)
        setDiger(true)
    };
    const handleCari = () => {
        setDiger(false)
        setKimlikIletisim(false)
        setCari(true)
    };

    const handleSetMusteriTedarikci = (key,value)=>{
        setTempMusteriTedarikci((obj)=>({...obj,[key]:value,tipi:tipi}))
        console.log(tempMusteriTedarikci)

    }

    const handleKayit=()=>{
        const musteriTedarikciService = new MusteriTedarikciService()
        musteriTedarikciService.musteriTedarikciKayit(tempMusteriTedarikci).then((result)=>{
            if (result.data.geriBildirimDto.kodu != 0) {
                toast.error(result.data.geriBildirimDto.aciklama)
            } else {
                setMusteriTedarikci(tempMusteriTedarikci)
                toast.success("Kayıt başarılı")
            }
        })
    }
    const handleSil=()=>{
        const musteriTedarikciService = new MusteriTedarikciService()
        musteriTedarikciService.musteriTedarikciSil(tempMusteriTedarikci.id,tipi).then((result)=>{
            if (result.data.geriBildirimDto.kodu != 0) {
                toast.error(result.data.geriBildirimDto.aciklama)
            } else {
                setMusteriTedarikci({})
                toast.success("Silme işlemi başarılı")
            }
        }) 
    }



    return (

        <div
            className="modal fade"
            id="yeniMusteriEkleModal"
            tabIndex="-1"
            aria-labelledby="yeniMusteriEkleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-header modal-bg">
                        <h5 className="modal-title" id="yeniMusteriEkleModalLabel">
                            Yeni Müşteri/Tedarikçi Ekle
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a className={`nav-link ${kimlikIletisim === true ? 'active' : ''}`} aria-current="page" onClick={handleKimlikIletisim}>Kimlik/İletisim</a>
                        </li>

                        <li class="nav-item">
                            <a className={`nav-link ${cari === true ? 'active' : ''}`} onClick={handleCari}>Cari</a>
                        </li>
                        <li class="nav-item">
                            <a className={`nav-link ${diger === true ? 'active' : ''}`} onClick={handleDiger}>Diğer</a>
                        </li>
                    </ul>

                    {
                        kimlikIletisim ? <div className="modal-body flex-column">

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">İsim/Ünvanı</label>
                                <input
                                    class="form-control"
                                    id="inputIsimUnvan"
                                    aria-describedby="isimUnvan"
                                    placeholder="İsim *"
                                    value={tempMusteriTedarikci.unvani}
                                    onChange={(e) => {handleSetMusteriTedarikci("unvani",e.target.value)}}

                                ></input>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">EPosta</label>

                                <input
                                    type="email"
                                    class="form-control"
                                    id="inputEmail"
                                    aria-describedby="email"
                                    placeholder="EPosta"
                                    value={tempMusteriTedarikci.ePosta}
                                    onChange={(e) => handleSetMusteriTedarikci("ePosta",e.target.value)}

                                ></input>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Cep Telefonu</label>

                                <input
                                    class="form-control"
                                    id="inputCepTelefonu1"
                                    aria-describedby="cepTelefonu1"
                                    value={tempMusteriTedarikci.cepTelefonu1}
                                    onChange={(e) => handleSetMusteriTedarikci("cepTelefonu1",e.target.value)}

                                ></input>

                            </div>
                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Cep Telefonu</label>

                                <input
                                    class="form-control"
                                    id="inputCepTelefonu2"
                                    aria-describedby="cepTelefonu2"
                                    value={tempMusteriTedarikci.cepTelefonu2}
                                    onChange={(e) => handleSetMusteriTedarikci("cepTelefonu2",e.target.value)}

                                ></input>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Diğer Erişim</label>
                                <textarea
                                    className="form-control"
                                    id="inputDigerErisim"
                                    placeholder="Diğer Erişim"
                                    rows="2"
                                    value={tempMusteriTedarikci.digerErisim}
                                    onChange={(e) => handleSetMusteriTedarikci("digerErisim",e.target.value)}
                                ></textarea>
                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Yetkili Kişi</label>

                                <input type="text"
                                    class="form-control"
                                    value={tempMusteriTedarikci.yetkiliKisi}
                                    placeholder="Yetkili Kişi"
                                    onChange={(e) => handleSetMusteriTedarikci("yetkiliKisi",e.target.value)}

                                ></input>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Adres</label>
                                <textarea
                                    className="form-control"
                                    id="inputAdres"
                                    rows="2"
                                    placeholder="Adres"
                                    value={tempMusteriTedarikci.adres}
                                    onChange={(e) => handleSetMusteriTedarikci("adres",e.target.value)}
                                ></textarea>
                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Pasif</label>
                                <Switch defaultChecked onChange={(e) => handleSetMusteriTedarikci("pasif",e.target.checked)} />
                            </div>
                        </div> : null
                    }


                    {
                        cari ? <div className="modal-body flex-column">

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Vergi Dairesi</label>
                                <input
                                    class="form-control"
                                    id="inputVergiDairesi"
                                    aria-describedby="vergiDairesi"
                                    placeholder="Vergi Dairesi"
                                    value={tempMusteriTedarikci.vergiDairesi}
                                    onChange={(e) => handleSetMusteriTedarikci("vergiDairesi",e.target.value)}
                                ></input>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Vergi/Kimlik No</label>

                                <input
                                    class="form-control"
                                    id="inputVergiKimlikNo"
                                    placeholder="Vergi No"
                                    value={tempMusteriTedarikci.vergiNo}
                                    onChange={(e) => handleSetMusteriTedarikci("vergiNo",e.target.value)}
                                ></input>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Banka Bilgileri</label>

                                <textarea
                                    class="form-control"
                                    id="inputBankaBilgileri"
                                    rows={2}
                                    placeholder="Banka Bilgileri"
                                    value={tempMusteriTedarikci.bankaBilgileri}
                                    onChange={(e) => handleSetMusteriTedarikci("bankaBilgileri",e.target.value)}
                                ></textarea>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Para Birimi</label>
                                <select className="form-select" value={tempMusteriTedarikci.paraBirimi} onChange={(e) => handleSetMusteriTedarikci("paraBirimi",e.target.value)}>
                                    {
                                        ParaBirimi.map((birim) => (
                                            <option>
                                                {birim}
                                            </option>
                                        ))
                                    }
                                </select>

                            </div>
                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Açık Hesap Risk Limiti</label>

                                <input
                                    class="form-control"
                                    id="inputAcikHesapRiskLimiti"
                                    aria-describedby="cepTelefonu2"
                                    value={tempMusteriTedarikci.acikHesapRiskLimiti}
                                    onChange={(e) => handleSetMusteriTedarikci("acikHesapRiskLimiti",e.target.value)}
                                ></input>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Vade Günü</label>
                                <input
                                    className="form-control"
                                    id="inputVadeGunu"
                                    value={tempMusteriTedarikci.vadeGunu}
                                    onChange={(e) => handleSetMusteriTedarikci("vadeGunu",e.target.value)}
                                ></input>
                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">İskonto Oranı</label>

                                <input type="text"
                                    class="form-control"
                                    value={tempMusteriTedarikci.sabitIskonto}
                                    onChange={(e) => handleSetMusteriTedarikci("sabitIskonto",e.target.value)}
                                ></input>
                            </div>
                        </div> : null
                    }


                    {
                        diger ? <div className="modal-body flex-column">

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Notlar</label>
                                <textarea
                                    class="form-control"
                                    id="inputNotlar"
                                    aria-describedby="notlar"
                                    placeholder="Notlar"
                                    rows={2}
                                    value={tempMusteriTedarikci.notlar}
                                    onChange={(e) => handleSetMusteriTedarikci("notlar",e.target.value)}
                                ></textarea>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Etiket 1</label>

                                <input
                                    class="form-control"
                                    id="inputEtiket1"
                                    placeholder="Etiket Sınıflandırma 1"
                                    value={tempMusteriTedarikci.etiket1}
                                    onChange={(e) => handleSetMusteriTedarikci("etiket1",e.target.value)}
                                ></input>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Etiket 2</label>

                                <input
                                    class="form-control"
                                    id="inputEtiket2"
                                    placeholder="Etiket Sınıflandırması 2"
                                    value={tempMusteriTedarikci.etiket2}
                                    onChange={(e) => handleSetMusteriTedarikci("etiket2",e.target.value)}
                                ></input>

                            </div>
                        </div> : null
                    }

                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" onClick={handleKayit}>Kayıt</button>
                        {musteriTedarikci.id?<button type="button" class="btn btn-danger"  onClick={handleSil}>Sil</button>:null}
                    </div>
                </div>
            </div>
        </div>
    );
}
