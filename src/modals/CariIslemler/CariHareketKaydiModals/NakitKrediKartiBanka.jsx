import React, { useEffect, useState } from "react";
import MusteriTedarikciService from "../../../services/musteriTedarikciService";
import { toast } from "react-toastify";
import { Calendar } from "primereact/calendar";

export default function NakitKrediKartiBanka() {
  const [date, setDate] = useState(null);
  const [tutar, setTutar] = useState(null)
  const [type, setType] = useState(null)
  const [belgeNo, setBelgeNo] = useState(null)
  const [aciklama, setAciklama] = useState(null)
  const [hesap, setHesap] = useState(null)

  const handleDatePicker = (event) => {
    setDate(event.target.value)
  };

  const handleTutar = (event) => {
    setTutar(event.target.value)
  };

  const handleType = (event) => {
    setType(event.target.value)
  };
  const handleBelgeNo = (event) => {
    setBelgeNo(event.target.value)
  };
  const handleAciklama = (event) => {
    setAciklama(event.target.value)
  };
  const handleHesap = (event) => {
    setHesap(event.target.value)
  };

  const handleKayit = ()=>{
    console.log(date,tutar,belgeNo,hesap,aciklama,type)
  }



  return (
    <div
      className="modal fade"
      id="nakitKrediKartiBanka"
      tabIndex="-1"
      aria-labelledby="nakitKrediKartiBankaLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header modal-bg">
            <h5 className="modal-title" id="nakitKrediKartiBankaLabel">
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
            <div className="d-flex align-items-center justify-content-between my-2">
              <label className="col-4">İşlem Türü</label>
              <select className="form-select" onChange={handleType}>
                <option key={0} selected>
                  Tahsilat
                </option>
                <option key={1}>
                  Tediye/Ödeme
                </option>
              </select>
            </div>

            <div className=" d-flex align-items-center justify-content-between my-2">
              <label className="col-4">İşlem Tarihi</label>
              <input id="startDate" class="form-control" type="date"  onChange={handleDatePicker}/>
              
            </div>

            <div className=" d-flex align-items-center justify-content-between my-2">
              <label className="col-4">Belge No</label>

              <input
                class="form-control"
                id="inputBelgeNo"
                aria-describedby="belgeNo"
                placeholder="Belge No"
                onChange={handleBelgeNo}
              ></input>
            </div>

            <div className=" d-flex align-items-center justify-content-between my-2">
              <label className="col-4">Açıklama</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                onChange={handleAciklama}
              ></textarea>
            </div>

            <div className=" d-flex align-items-center justify-content-between my-2">
              <label className="col-4">Kasa/Hesap</label>
              <select
                className="form-select"
                aria-label="Gönderilecek hesap seçiniz"
                onChange={handleHesap}
              >
                <option selected>Gönderilecek hesabı seçiniz</option>

                <optgroup label="KASA HESAPLARI">
                  <option value="kasa_tl">Kasa - TL</option>
                </optgroup>

                <optgroup label="BANKA HESAPLARI">
                  <option value="banka_tl">Banka Hesabı - TL</option>
                  <option value="banka_usd">Banka USD Hesabı - USD</option>
                  <option value="banka_eur">Banka EUR Hesabı - EUR</option>
                </optgroup>

                <optgroup label="POS HESAPLARI">
                  <option value="pos_tl">POS Hesabı - TL</option>
                </optgroup>

                <optgroup label="ŞİRKET ORTAKLARI HESABI ">
                  <option value="sirket_tl">Şirket Hesabı - TL</option>
                </optgroup>
              </select>
            </div>

            <div className=" d-flex align-items-center justify-content-between my-2">
              <label className="col-4">Tutar</label>
              <input type="text" class="form-control" onChange={handleTutar}></input>
            </div>
          </div>

          <div className="modal-footer">
          <button
            className="btn btn-success"
            type="button"
            onClick={handleKayit}
          >
            Kayıt
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
