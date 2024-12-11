import { FormControlLabel, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ParaBirimi } from "../../contains/ParaBirimleri";
import MusteriTedarikciService from "../../services/musteriTedarikciService";
import { toast } from 'react-toastify'
import EMobilStokService from "../../services/emobilStokService";


export default function UrunModal({ urunHizmet, setUrunHizmet }) {
    const [tempUrunHizmet, setTempUrunHizmet] = useState({})
    const [urunHizmetTanitimi, setUrunHizmetTanitimi] = useState(true)
    const [fiyatlandırma, setFiyatlandırma] = useState(false)
    const [diger, setDiger] = useState(false)
    const [urunBirimiListesi, setUrunBirimiListesi] = useState([])
    const [urunTipiListesi, setUrunTipiListesi] = useState([])
    useEffect(() => {
        setTempUrunHizmet(urunHizmet)
        const emobilStokService = new EMobilStokService()
        emobilStokService.urunBirimiListesi().then((result) => {
            setUrunBirimiListesi(result.data.eMobilUrunBirimiDtoList)
        })
        emobilStokService.urunTipiListesi().then((result) => {
            setUrunTipiListesi(result.data.eMobilUrunTipiDtoList)
        })
    }, [urunHizmet])


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

                                <select className="form-select" value={tempUrunHizmet.urunTipiAdi} onChange={(e) => {
                                    handleSetUrunHizmet("urunTipiAdi", e.target.value.Adi);
                                    handleSetUrunHizmet("tipi", e.target.value.Id);
                                }}>
                                    {urunTipiListesi.map((urunTipi) => (
                                        <option key={urunTipi.Id} >{urunTipi.Adi}</option>
                                    ))}
                                </select>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Birimi</label>
                                <select className="form-select" value={tempUrunHizmet.birimAdi} onChange={(e) => {
                                    handleSetUrunHizmet("birimAdi", e.target.value.Adi);
                                    handleSetUrunHizmet("birimId", e.target.value.Id);
                                }}>
                                    {urunBirimiListesi.map((urunBirimi) => (
                                        <option key={urunBirimi.Id} >{urunBirimi.Adi}</option>
                                    ))}
                                </select>

                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-2">
                                <label className="col-4">Pasif</label>
                                <FormControlLabel control={<Switch defaultChecked onChange={(e) => handleSetUrunHizmet("pasif", e.target.checked)} />} />
                                <div>
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={(e) => { handleSetUrunHizmet("eTicaret", e.target.checked) }} />
                                    <label className="form-check-label mx-2" for="flexCheckDefault" >
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
                                <input
                                    class="form-control mx-2"
                                    id="inputSatisKdvOrani"
                                    placeholder="0"
                                    value={tempUrunHizmet.satisKdvOrani}
                                    onChange={(e) => handleSetUrunHizmet("satisKdvOrani", e.target.value)}
                                ></input>

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
                                <select className="form-select mx-2" value={tempUrunHizmet.alisParaBirimi} onChange={(e) => handleSetUrunHizmet("satisParaBirimi", e.target.value)}>
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
                                <input
                                    class="form-control mx-2"
                                    id="inputAlisKdvOrani"
                                    placeholder="0"
                                    value={tempUrunHizmet.alisKdvOrani}
                                    onChange={(e) => handleSetUrunHizmet("alisKdvOrani", e.target.value)}
                                ></input>

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


                    {/*
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


                        </div> : null*/
                    }

                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" onClick={handleKayit}>Kayıt</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
