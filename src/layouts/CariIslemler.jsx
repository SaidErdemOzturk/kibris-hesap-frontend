import React, { useEffect, useState } from "react";
import MusteriTedarikciService from "../services/musteriTedarikciService";
import CariIslemlerService from "../services/cariIslemlerService";
import NakitKrediKartiBanka from "../modals/CariIslemler/CariHareketKaydiModals/NakitKrediKartiBanka";
import CariHareketUpdate from "../modals/CariIslemler/CariHareketKaydiModals/CariHareketUpdate";
import BrushIcon from '@mui/icons-material/Brush';

export default function CariIslemler() {
  const [musteriTedarikci, setMusteriTedarikci] = useState([]);
  const [selectedMusteriTedarikci, setSelectedMusteriTedarikci] = useState({});
  const [cariFisHareketDtoList, setCariFisHareketDtoList] = useState([{}]);
  const [hesapGenelToplamDto, setHesapGenelToplamDto] = useState({});
  const [cariHareketUpdate, setCariHareketUpdate] = useState()

  useEffect(() => {
    let musteriTedarikciService = new MusteriTedarikciService();
    musteriTedarikciService.getMusteriTedarikci(1).then((musteri) => {
      musteriTedarikciService.getMusteriTedarikci(2).then((tedarikci) => {
        setMusteriTedarikci([
          ...musteri.data.cariDtoList,
          ...tedarikci.data.cariDtoList,
        ]);
      });
    });
  }, []);

  const handleSelectMusteriTedarikci = (event) => {
    const selectedObject = JSON.parse(event.target.value);
    setSelectedMusteriTedarikci(selectedObject);
    let cariIslemlerService = new CariIslemlerService();
    cariIslemlerService.getCariIslemler(selectedObject.id).then((result) => {
      setHesapGenelToplamDto(result.data.hesapGenelToplamDto);
      setCariFisHareketDtoList(result.data.cariFisHareketDtoList);
    });
  };

  const handleCariHareketUpdate = (cariHareket)=>{
    setCariHareketUpdate(cariHareket)
  }


  return (
    <div>
      <div className="d-flex justify-content-around mt-2 custom-cariIslemler-label-bg rounded p-3">
        <div className="label text-light">
          {" "}
          {selectedMusteriTedarikci.unvani}
        </div>
        <div className="label text-light">
          {" "}
          Borç: {hesapGenelToplamDto.borc}
        </div>
        <div className="label text-light">
          {" "}
          Alacak: {hesapGenelToplamDto.alacak}
        </div>
        <div className="label text-light">
          {" "}
          Bakiye: {hesapGenelToplamDto.bakiye}
        </div>
        <div className="label text-light">
          {" "}
          Taksit Borcu: {selectedMusteriTedarikci.taksitBorcToplam}
        </div>
        <div className="label text-light"> Para birimi gelecek</div>
      </div>

      <div className="d-flex mt-2 ms-2 mb-2">
        <div className="dropdown me-2">
          <button
            className="btn dropdown-toggle text-light"
            style={{ backgroundColor: "#191970" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Cari Hareket Kaydı
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#nakitKrediKartiBanka"
              >
                Nakit/Kredi Kartı/Banka
              </button>
            </li>
            <li>
              <button className="dropdown-item">Borç Alacak Fişleri</button>
            </li>
            <li>
              <button className="dropdown-item">Cari Virman</button>
            </li>
            <li>
              <button className="dropdown-item">Cari Taksit Ödeme</button>
            </li>
            <li>
              <button className="dropdown-item">Fatura Tahsilat/Ödeme</button>
            </li>
          </ul>
        </div>
        <div className="dropdown me-2">
          <button
            className="btn btn-secondary dropdown-toggle text-light"
            style={{ backgroundColor: "#5f9ea0" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Fatura Kaydı
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Alış Yap(Ürün/Hizmet Al)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Alıştan İade Ver
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Satış Yap
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Satıştan İade Al
              </a>
            </li>
          </ul>
        </div>

        <div className="dropdown me-2">
          <button
            className="btn btn-secondary dropdown-toggle text-light"
            style={{ backgroundColor: "#8a2be2" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Çek Kaydı
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Müşteri/Tedarikçi Alınan Çek Kaydı
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Müşteri/Tedarikçi Verilen Kendi Çekimiz
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Müşteri/Tedarikçi Verilen Portföydeki Çekimiz
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown me-2">
          <button
            className="btn dropdown-toggle text-light"
            style={{ backgroundColor: "#483d8b" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Senet Kaydı
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Müşteri/Tedarikçi Alınan Senet Kaydı
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Müşteri/Tedarikçi Verilen Kendi Senedimiz
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Müşteri/Tedarikçi Verilen Portföydeki Senedimiz
              </a>
            </li>
          </ul>
        </div>

        <div className="dropdown me-2">
          <button
            className="btn btn-info dropdown-toggle text-light"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Son 3 Ayın Göster
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Bu Yılın Göster
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Son 1 Ayın Göster
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Son 3 Ayın Göster
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Son 6 Ayın Göster
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Son 12 Ayın Göster
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Tümünü Göster
              </a>
            </li>
          </ul>
        </div>

        <div className="dropdown me-2">
          <button
            className="btn btn-secondary dropdown-toggle text-light"
            style={{ backgroundColor: "#483d8b" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            İzleme
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Fatura İzleme
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Çek/Senet İzleme
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Çek/Senet Fiş Yazdır
              </a>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#cariSec"
        >
          Cari Seç/Değiştir
        </button>
      </div>

      <div className="custom-dashboard-bg d-flex flex-column vh-100 rounded rounded-5">
        <div className="custom-cari-bg flex-grow-1 rounded-2 mb-2">
          <button type="button" className="btn btn-light mb-1 ms-2 mt-2">
            Excel Dışarı Aktarma
          </button>
          <button type="button" className="btn btn-light mb-1 ms-2 mt-2">
            Yazdır
          </button>
          <table className="table ">
            <thead className="table-primary">
              <tr>
                <th scope="col">İşlemler</th>
                <th scope="col">İşlem Tarihi</th>
                <th scope="col">İşlem</th>
                <th scope="col">Açıklama</th>
                <th scope="col">Ödeme</th>
                <th scope="col">Borç</th>
                <th scope="col">Alacak</th>
                <th scope="col">Bakiye</th>
              </tr>
            </thead>
            <tbody>
              {cariFisHareketDtoList.map((cariHareket) => (
                <tr>
                  <td scope="col">
                    {
                      <button
                      className="border-0 bg-transparent"
                      data-bs-toggle="modal"
                        onClick={()=>handleCariHareketUpdate(JSON.stringify(cariHareket))}
                        data-bs-target="#cariHareketUpdateModal"
                      >
                        <BrushIcon/>
                      </button>
                    }
                  </td>
                  <td scope="col">{cariHareket.islemTarihi}</td>
                  <td scope="col">{cariHareket.islemCinsi}</td>
                  <td scope="col">{cariHareket.aciklama}</td>
                  <td scope="col">{cariHareket.odemeBilgisi}</td>
                  <td scope="col">{cariHareket.borc}</td>
                  <td scope="col">{cariHareket.alacak}</td>
                  <td scope="col">{cariHareket.bakiye}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* modals*/}

      {/* Cari seç modal*/}
      <div
        className="modal fade"
        id="cariSec"
        tabIndex="-1"
        aria-labelledby="cariSecLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header modal-bg">
              <h5 className="modal-title" id="cariSecLabel">
                Müşteri/Tedarikçi Değiştirme
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-between">
              <label className="me-2">Müşteri/Tedarikçi</label>

              <select
                onChange={handleSelectMusteriTedarikci} // Değişiklikleri yakala ve atama yap
                className="form-select form-select-sm"
              >
                <option key={0} selected>
                  Seçiniz
                </option>
                {musteriTedarikci.map((result) => (
                  <option key={result.id} value={JSON.stringify(result)}>
                    {result.unvani}
                  </option>
                ))}
              </select>
            </div>

            <div className="modal-footer"></div>
          </div>
        </div>
      </div>

      {/* Nakit/Kredi Kartı/Banka*/}
      <NakitKrediKartiBanka />
      <CariHareketUpdate cariHareket={cariHareketUpdate}/>
    </div>
  );
}
