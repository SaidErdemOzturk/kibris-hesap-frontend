import React, { useEffect, useState } from "react";
import CariIslemlerService from "../../../services/cariIslemlerService";

export default function CariHareketUpdate({cariHareket}) {
    const [date, setDate] = useState("");
    const [tutar, setTutar] = useState("");
    const [belgeNo, setBelgeNo] = useState("");
    const [aciklama, setAciklama] = useState("");
  

    useEffect(() => {
        if(cariHareket){
            setDate(cariHareket.islemTarihi)
            setTutar(cariHareket.tutar)
            setBelgeNo(cariHareket.belgeNo)
            setAciklama(cariHareket.aciklama)
        console.log("sadasds",cariHareket)
    
        }
    
      }, [cariHareket])
  

  const handleDatePicker = (event) => {
    setDate(event.target.value)
  };

  const handleTutar = (event) => {
    setTutar(event.target.value)
  };

  const handleBelgeNo = (event) => {
    setBelgeNo(event.target.value)
  };
  const handleAciklama = (event) => {
    setAciklama(event.target.value)
  };

  const handleKayit = ()=>{
    const cariIslemlerService = new CariIslemlerService()
    const cariHareketObject = JSON.parse(cariHareket);
    cariIslemlerService.cariİslemGuncelle(belgeNo,aciklama,tutar,date,cariHareketObject.fisBaslikId,cariHareketObject.cariId).then((result)=>{
        cariHareket=null
        console.log(result)
    })
  }
  const handleYazdir = ()=>{

  }

  const handleSil = ()=>{
    const cariIslemlerService = new CariIslemlerService()
    const cariHareketObject = JSON.parse(cariHareket);
    cariIslemlerService.cariİslemSil(cariHareketObject.hesapId,cariHareketObject.fisBaslikId).then((result)=>{
        cariHareket=null
        console.log(result)
    })
  }
  

  return (
    <div
      className="modal fade"
      id="cariHareketUpdateModal"
      tabIndex="-1"
      aria-labelledby="cariHareketUpdateModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header modal-bg">
            <h5 className="modal-title" id="cariHareketUpdateModalLabel">
              Nakit - Kredi Kartı - Banka
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body flex-column">

            <div className=" d-flex align-items-center justify-content-between my-2">
              <label className="col-4">İşlem Tarihi</label>
              <input id="startDate" class="form-control" type="date" value={date} onChange={handleDatePicker}/>
              
            </div>

            <div className=" d-flex align-items-center justify-content-between my-2">
              <label className="col-4">Belge No</label>

              <input
                class="form-control"
                id="inputBelgeNo"
                aria-describedby="belgeNo"
                placeholder="Belge No"
                value={belgeNo}
                onChange={handleBelgeNo}
              ></input>
            </div>

            <div className=" d-flex align-items-center justify-content-between my-2">
              <label className="col-4">Açıklama</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                value={aciklama}
                onChange={handleAciklama}
              ></textarea>
            </div>

            <div className=" d-flex align-items-center justify-content-between my-2">
              <label className="col-4">Tutar</label>
              <input type="text" class="form-control" value={tutar} onChange={handleTutar}></input>
            </div>
          </div>

          <div className="modal-footer">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleKayit}
          >
            Kayıt
          </button>
          <button
            className="btn btn-warning"
            type="button"
            onClick={handleYazdir}
          >
            Yazdır
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleSil}
          >
            Sil
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
