import React, { useEffect, useState } from 'react'
import MusteriTedarikciService from '../services/musteriTedarikciService'
import CariIslemlerService from '../services/cariIslemlerService';
import NakitKrediKartiBanka from '../modals/cariHareketKaydiModals/NakitKrediKartiBanka';

export default function CariIslemler() {

  const [musteriTedarikci, setMusteriTedarikci] = useState([])
  const [selectedMusteriTedarikci, setSelectedMusteriTedarikci] = useState({ cariFisHareketDtoList: [], hesapGenelToplamDto: {}, cariDto: {} });
  const [cariFisHareketDtoList, setCariFisHareketDtoList] = useState([{}])
  const [hesapGenelToplamDto, setHesapGenelToplamDto] = useState({})


  const BorcAlacakFisleri = () => <div>Borç Alacak Fişleri Component</div>;
  const CariVirman = () => <div>Cari Virman Component</div>;
  const CariTaksitOdeme = () => <div>Cari Taksit Ödeme Component</div>;
  const FaturaTahsilatOdeme = () => <div>Fatura Tahsilat/Ödeme Component</div>;

  const [activeComponent, setActiveComponent] = useState(null);

  useEffect(() => {
    let musteriTedarikciService = new MusteriTedarikciService()
    musteriTedarikciService.getMusteriTedarikci(1).then(musteri => {
      musteriTedarikciService.getMusteriTedarikci(2).then(tedarikci => {
        setMusteriTedarikci([...musteri.data.cariDtoList, ...tedarikci.data.cariDtoList])
      })
    })
  }, [])

  const handleSelectMusteriTedarikci = (event) => {
    let cariIslemlerService = new CariIslemlerService()
    cariIslemlerService.getCariIslemler(event.target.value).then(result => {
      setSelectedMusteriTedarikci(result.data)
      setHesapGenelToplamDto(result.data.hesapGenelToplamDto)
      console.log(result.data)
      setCariFisHareketDtoList(result.data.cariFisHareketDtoList)
    })
  };


  return (
    <div>
      <div className='d-flex justify-content-around mt-2 custom-cariIslemler-label-bg rounded p-3'>
        <div className='label text-light'> {selectedMusteriTedarikci.cariDto.unvani}</div>
        <div className='label text-light'> Borç: {hesapGenelToplamDto.borc}</div>
        <div className='label text-light'> Alacak: {hesapGenelToplamDto.alacak}</div>
        <div className='label text-light'> Bakiye: {hesapGenelToplamDto.bakiye}</div>
        <div className='label text-light'> Taksit Borcu: {selectedMusteriTedarikci.taksitBorcToplam}</div>
        <div className='label text-light'> Para birimi gelecek</div>
      </div>

      <div className='d-flex mt-2 ms-2 mb-2'>
        <div className="dropdown me-2">
          <button className="btn dropdown-toggle text-light" style={{ backgroundColor: "#191970" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cari Hareket Kaydı
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Nakit/Kredi Kartı/Banka
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => setActiveComponent('BorcAlacakFisleri')}>
                Borç Alacak Fişleri
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => setActiveComponent('CariVirman')}>
                Cari Virman
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => setActiveComponent('CariTaksitOdeme')}>
                Cari Taksit Ödeme
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => setActiveComponent('FaturaTahsilatOdeme')}>
                Fatura Tahsilat/Ödeme
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown me-2">
          <button className="btn btn-secondary dropdown-toggle text-light" style={{ backgroundColor: "#5f9ea0" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Fatura Kaydı
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Alış Yap(Ürün/Hizmet Al)</a></li>
            <li><a className="dropdown-item" href="#">Alıştan İade Ver</a></li>
            <li><a className="dropdown-item" href="#">Satış Yap</a></li>
            <li><a className="dropdown-item" href="#">Satıştan İade Al</a></li>
          </ul>
        </div>

        <div className="dropdown me-2">
          <button className="btn btn-secondary dropdown-toggle text-light" style={{ backgroundColor: "#8a2be2" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Çek Kaydı
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Müşteri/Tedarikçi Alınan Çek Kaydı</a></li>
            <li><a className="dropdown-item" href="#">Müşteri/Tedarikçi Verilen Kendi Çekimiz</a></li>
            <li><a className="dropdown-item" href="#">Müşteri/Tedarikçi Verilen  Portföydeki Çekimiz</a></li>
          </ul>
        </div>
        <div className="dropdown me-2" >
          <button className="btn dropdown-toggle text-light" style={{ backgroundColor: "#483d8b" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Senet Kaydı

          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Müşteri/Tedarikçi Alınan Senet Kaydı</a></li>
            <li><a className="dropdown-item" href="#">Müşteri/Tedarikçi Verilen Kendi Senedimiz</a></li>
            <li><a className="dropdown-item" href="#">Müşteri/Tedarikçi Verilen  Portföydeki Senedimiz</a></li>
          </ul>
        </div>


        <div className="dropdown me-2" >
          <button className="btn btn-info dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Son 3 Ayın Göster
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Bu Yılın Göster</a></li>
            <li><a className="dropdown-item" href="#">Son 1 Ayın Göster</a></li>
            <li><a className="dropdown-item" href="#">Son 3 Ayın Göster</a></li>
            <li><a className="dropdown-item" href="#">Son 6 Ayın Göster</a></li>
            <li><a className="dropdown-item" href="#">Son 12 Ayın Göster</a></li>
            <li><a className="dropdown-item" href="#">Tümünü Göster</a></li>
          </ul>
        </div>


        <div className="dropdown me-2">
          <button className="btn btn-secondary dropdown-toggle text-light" style={{ backgroundColor: "#483d8b" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            İzleme
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Fatura İzleme</a></li>
            <li><a className="dropdown-item" href="#">Çek/Senet İzleme</a></li>
            <li><a className="dropdown-item" href="#">Çek/Senet Fiş Yazdır</a></li>
          </ul>
        </div>


        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Cari Seç/Değiştir

        </button>
        

      </div>

      <div className="custom-dashboard-bg d-flex flex-column vh-100 rounded rounded-5">
        <div className='custom-cari-bg flex-grow-1 rounded-2 mb-2'>
          <button type="button" className="btn btn-light mb-1 ms-2 mt-2">Excel Dışarı Aktarma</button>
          <button type="button" className="btn btn-light mb-1 ms-2 mt-2">Yazdır</button>
          <table className="table ">
            <thead className='table-primary'>
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

              {
                selectedMusteriTedarikci.cariFisHareketDtoList.map((data) => (
                  <tr>
                    <td scope="col">{ }</td>
                    <td scope="col">{data.islemTarihi}</td>
                    <td scope="col">{data.islemCinsi}</td>
                    <td scope="col">{data.aciklama}</td>
                    <td scope="col">{ }</td>
                    <td scope="col">{data.borc}</td>
                    <td scope="col">{data.alacak}</td>
                    <td scope="col">{data.bakiye}</td>
                  </tr>
                ))
              }
            </tbody>

          </table>
        </div>
      </div>
      {/* modals*/}
      <NakitKrediKartiBanka/>

    </div>
  )
}
