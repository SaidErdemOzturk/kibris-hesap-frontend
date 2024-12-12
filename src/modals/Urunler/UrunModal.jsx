import { FormControlLabel, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ParaBirimi } from "../../contains/ParaBirimleri";
import MusteriTedarikciService from "../../services/musteriTedarikciService";
import { toast } from 'react-toastify'
import EMobilStokService from "../../services/emobilStokService";
import UrunService from "../../services/urunService";
import EMobilCommonService from "../../services/emobilCommonService";


export default function UrunModal({ selectedUrunHizmet, setSelectedUrunHizmet }) {
    const [tempUrunHizmet, setTempUrunHizmet] = useState({})
    const [urunHizmetTanitimi, setUrunHizmetTanitimi] = useState(true)
    const [fiyatlandırma, setFiyatlandırma] = useState(false)
    const [diger, setDiger] = useState(false)
    const [urunBirimiListesi, setUrunBirimiListesi] = useState([])
    const [urunTipiListesi, setUrunTipiListesi] = useState([])
    const [kdvOraniListesi, setKdvOraniListesi] = useState([])

    useEffect(() => {
        setTempUrunHizmet(selectedUrunHizmet)
        const emobilStokService = new EMobilStokService()
        emobilStokService.urunBirimiListesi().then((result) => {
            setUrunBirimiListesi(result.data.eMobilUrunBirimiDtoList)
        })
        emobilStokService.urunTipiListesi().then((result) => {
            setUrunTipiListesi(result.data.eMobilUrunTipiDtoList)
        })

        const emobilCommonService = new EMobilCommonService()
        emobilCommonService.kdvOraniListesi().then((result)=>{
            setKdvOraniListesi(result.data.eMobilKdvOraniDtoList)
        })
    }, [selectedUrunHizmet])

    useEffect(() => {
        console.log("urunhizmeti",tempUrunHizmet)

    }, [tempUrunHizmet])


    const handleUrunHızmetTanitimi = () => {
        setDiger(false)
        setFiyatlandırma(false)
        setUrunHizmetTanitimi(true)
    };
    const handleDiger = () => {
        setFiyatlandırma(false)
        setUrunHizmetTanitimi(false)
        setDiger(true)
    };
    const handleFiyatlandırma = () => {
        setDiger(false)
        setUrunHizmetTanitimi(false)
        setFiyatlandırma(true)
    };

    const handleSetUrunHizmet = (key, value) => {
        setTempUrunHizmet((obj) => ({ ...obj, [key]: value }))
    }

    const handleKayit = () => {
        const urunService = new UrunService()
        console.log(tempUrunHizmet)

        urunService.urunKayit(tempUrunHizmet).then((result) => {
            if (result.data.geriBildirimDto.kodu != 0) {
                toast.error(result.data.geriBildirimDto.aciklama)

            } else {
                setSelectedUrunHizmet({})
                toast.success("Kayıt Başarılı")
            }
        })
    }

    const handleSil =()=>{

    }



    return (

        <div
            className="modal fade"
            id="urunModal"
            tabIndex="-1"
            aria-labelledby="urunModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-header modal-bg">
                        <h5 className="modal-title" id="urunModalLabel">
                            Ürün/Hizmet Tanıtımı
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
                            <a className={`nav-link ${urunHizmetTanitimi === true ? 'active' : ''}`} aria-current="page" onClick={() => handleUrunHızmetTanitimi()} >Ürün/Hizmet Tanıtımı</a>
                        </li>

                        <li class="nav-item">
                            <a className={`nav-link ${fiyatlandırma === true ? 'active' : ''}`} onClick={() => handleFiyatlandırma()}>Fiyatlandırma</a>
                        </li>
                        <li class="nav-item">
                            <a className={`nav-link ${diger === true ? 'active' : ''}`} onClick={() => handleDiger()}>Diğer</a>
                        </li>
                    </ul>

                    {
                        urunHizmetTanitimi ? <div className="modal-body flex-column">

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">İsim/Ünvanı</label>
                                <input
                                    class="form-control"
                                    id="inputIsimUnvan"
                                    aria-describedby="isimUnvan"
                                    placeholder="İsim *"
                                    value={tempUrunHizmet.adi}
                                    onChange={(e) => { handleSetUrunHizmet("adi", e.target.value) }}

                                ></input>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Ürün Tipi</label>

                                <select className="form-select" onChange={(e) => {
                                    const selectedOption = JSON.parse(e.target.value)
                                    handleSetUrunHizmet("urunTipiAdi", selectedOption.Adi);
                                    handleSetUrunHizmet("tipi", selectedOption.Id);
                                    console.log(selectedOption)
                                }}>
                                    {urunTipiListesi.map((urunTipi) => (
                                        <option key={urunTipi.Id} value={JSON.stringify(urunTipi)}>{urunTipi.Adi}</option>
                                    ))}
                                </select>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Birimi</label>
                                <select className="form-select" value={tempUrunHizmet.birimAdi} onChange={(e) => {
                                    const selectedOption = JSON.parse(e.target.value)
                                    handleSetUrunHizmet("birimAdi", selectedOption.Adi);
                                    handleSetUrunHizmet("birimId", selectedOption.Id);
                                    console.log(selectedOption)

                                }}>
                                    {urunBirimiListesi.map((urunBirimi) => (
                                        <option key={urunBirimi.Id} value={JSON.stringify(urunBirimi)} >{urunBirimi.Adi}</option>
                                    ))}
                                </select>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Pasif</label>
                                <FormControlLabel control={<Switch defaultChecked={selectedUrunHizmet.pasif} onChange={(e) => handleSetUrunHizmet("pasif", e.target.checked)} />} />
                                <div>
                                    <input className="form-check-input" type="checkbox" checked={selectedUrunHizmet.eTicaret === true} id="flexCheckDefault" onChange={(e) => { handleSetUrunHizmet("eTicaret", e.target.checked) }} />
                                    <label className="form-check-label mx-2" for="flexCheckDefault">
                                        E-Ticaret
                                    </label>
                                </div>
                            </div>
                        </div> : null
                    }


                    {
                        fiyatlandırma ? <div className="modal-body flex-column">

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Satış Fiyatı</label>
                                <input
                                    class="form-control mx-2"
                                    id="inputSatisFiyati"
                                    placeholder="0"
                                    value={tempUrunHizmet.satisFiyati}
                                    onChange={(e) => handleSetUrunHizmet("satisFiyati", e.target.value)}
                                ></input>
                                <select className="form-select mx-2" value={tempUrunHizmet.satisParaBirimi} onChange={(e) => handleSetUrunHizmet("satisParaBirimi", e.target.value)}>
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
                                <label className="col-4">Satış Kdv Oranı</label>

<select className="form-select mx-2" value={tempUrunHizmet.satisKdvOrani} onChange={(e) => {
                                    const selectedOption = JSON.parse(e.target.value)
                                    handleSetUrunHizmet("satisKdvOrani", selectedOption.orani);
                                    handleSetUrunHizmet("satisKdvId", selectedOption.id);
                                    console.log(selectedOption)

                                }}>
                                    {kdvOraniListesi.map((kdvOrani) => (
                                        <option key={kdvOrani.id} value={JSON.stringify(kdvOrani)} >{kdvOrani.orani} {kdvOrani.aciklama!=""?`- ${kdvOrani.aciklama}`:null}</option>
                                    ))}
                                </select>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Alış Fiyatı</label>
                                <input
                                    className="form-control mx-2"
                                    id="inputAlisFiyati"
                                    placeholder="0"
                                    value={tempUrunHizmet.alisFiyati}
                                    onChange={(e) => handleSetUrunHizmet("alisFiyati", e.target.value)}
                                ></input>
                                <select className="form-select mx-2" value={tempUrunHizmet.alisParaBirimi} onChange={(e) => handleSetUrunHizmet("alisParaBirimi", e.target.value)}>
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
                                <label className="col-4">Alış Kdv Oranı</label>
                                <select className="form-select mx-2" value={tempUrunHizmet.satisKdvOrani} onChange={(e) => {
                                    const selectedOption = JSON.parse(e.target.value)
                                    handleSetUrunHizmet("alisKdvOrani", selectedOption.orani);
                                    handleSetUrunHizmet("alisKdvId", selectedOption.id);
                                    console.log(selectedOption)

                                }}>
                                    {kdvOraniListesi.map((kdvOrani) => (
                                        <option key={kdvOrani.id} value={JSON.stringify(kdvOrani)} >{kdvOrani.orani} {kdvOrani.aciklama!=""?`- ${kdvOrani.aciklama}`:null}</option>
                                    ))}
                                </select>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Alış İskonto %</label>
                                <input
                                    class="form-control mx-2"
                                    id="inputAlisIskonto"
                                    placeholder="0"
                                    value={tempUrunHizmet.alisIskonto}
                                    onChange={(e) => handleSetUrunHizmet("alisIskonto", e.target.value)}
                                ></input>

                            </div>

                        </div> : null
                    }


                    {
                        diger ? <div className="modal-body flex-column">

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Ürün Marka</label>
                                <select className="form-select mx-2" value={tempUrunHizmet.etiketMarkaAdi} onChange={(e) => handleSetUrunHizmet("etiketMarkaAdi", e.target.value)}>
                                    <option>
                                        string
                                    </option>
                                </select>


                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Ürün Kategori</label>
                                <select className="form-select mx-2" value={tempUrunHizmet.etiketKategoriAdi} onChange={(e) => handleSetUrunHizmet("etiketKategoriAdi", e.target.value)}>

                                </select>


                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Ürün Raf Adı</label>
                                <select className="form-select mx-2" value={tempUrunHizmet.etiketRafAdi} onChange={(e) => handleSetUrunHizmet("etiketRafAdi", e.target.value)}>

                                </select>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Ürün Etiketi 1</label>
                                <select className="form-select mx-2" value={tempUrunHizmet.etiket1Adi} onChange={(e) => handleSetUrunHizmet("etiket1Adi", e.target.value)}>

                                </select>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Müşteri Etiketi 2</label>
                                <select className="form-control mx-2" value={tempUrunHizmet.etiket2Adi} onChange={(e) => handleSetUrunHizmet("etiket2Adi", e.target.value)}>

                                </select>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Ürün Kodu</label>
                                <input className="form-control mx-2" value={tempUrunHizmet.urunKodu} onChange={(e) => handleSetUrunHizmet("urunKodu", e.target.value)}>
                                </input>
                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Ürün Kodu</label>
                                <input className="form-control mx-2" value={tempUrunHizmet.urunKodu} onChange={(e) => handleSetUrunHizmet("urunKodu", e.target.value)}>
                                </input>
                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Fatura Ürün Adı</label>
                                <input className="form-control mx-2" value={tempUrunHizmet.faturaUrunAdi} onChange={(e) => handleSetUrunHizmet("faturaUrunAdi", e.target.value)}>
                                </input>
                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Açıklama</label>
                                <textarea className="form-control mx-2" value={tempUrunHizmet.aciklama} onChange={(e) => handleSetUrunHizmet("aciklama", e.target.value)}>
                                </textarea>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Barkodu</label>
                                <input className="form-control mx-2" placeholder="Barkod" value={tempUrunHizmet.barkodu} onChange={(e) => handleSetUrunHizmet("barkodu", e.target.value)}>
                                </input>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Kritik Seviye</label>
                                <input className="form-control mx-2" placeholder="0" value={tempUrunHizmet.kritikStokMiktari} onChange={(e) => handleSetUrunHizmet("kritikStokMiktari", e.target.value)}>
                                </input>
                            </div>


                        </div> : null
                    }

                    <div class="modal-footer">
                    <button type="button" class="btn btn-success" onClick={handleKayit}>Kayıt</button>
                    {selectedUrunHizmet.id?<button type="button" class="btn btn-danger" onClick={handleSil}>Sil</button>:null}
                    </div>
                </div>
            </div>
        </div>
    );
}
