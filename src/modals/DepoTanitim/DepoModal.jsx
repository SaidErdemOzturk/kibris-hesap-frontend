import React, { useEffect, useState } from "react";
import CariIslemlerService from "../../services/cariIslemlerService";
import DepoService from "../../services/depoService";
import { toast } from "react-toastify";

export default function YeniDepoModal({ depolar, setDepolar, depo }) {
  const [newDepoAdi, setNewDepoAdi] = useState("");

  const handleDepoEkle = (event) => {
    setNewDepoAdi(event.target.value);
  };

  const handleKayit = () => {
    const depoService = new DepoService();
    depoService.kayitDepo(depo.id,newDepoAdi).then((result) => {
      if (result.data.geriBildirimDto.kodu != 0) {
        toast.error(result.data.geriBildirimDto.aciklama);
      } else {
        setDepolar([...depolar, {id:depo.id,adi:newDepoAdi}]);
      }
    });
  };

  const handleSil = () => {
    const depoService = new DepoService();
    depoService.deleteDepo(depo.id).then((result)=>{
        if (result.data.geriBildirimDto.kodu != 0) {
            toast.error(result.data.geriBildirimDto.aciklama);
          } else {
            setDepolar([...depolar, depo]);
          }
    })
  };

  useEffect(() => {
    setNewDepoAdi(depo.adi)
    console.log(depo)
  }, [depo])
  
  return (
    <div
      className="modal fade"
      id="yeniDepoModal"
      tabIndex="-1"
      aria-labelledby="yeniDepoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header modal-bg">
            <h5 className="modal-title" id="yeniDepoModalLabel">
              Depo Ekle/Düzenle
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
              <label className="col-4">Depo Adı</label>

              <input
                class="form-control"
                id="inputBelgeNo"
                aria-describedby="depoAdi"
                placeholder="Depo Adı"
                value={newDepoAdi}
                onChange={handleDepoEkle}
              ></input>
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
            {depo.id!=0 ? (
              <button
                className="btn btn-danger"
                type="button"
                onClick={handleSil}
              >
                Sil
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
