import React, { useEffect, useState } from 'react'
import MusteriTedarikciService from '../services/musteriTedarikciService'

export default function CariIslemler() {

  const [musteriTedarikci, setMusteriTedarikci] = useState([])

  useEffect(() => {
    let musteriTedarikci = new MusteriTedarikciService()
    musteriTedarikci.getMusteriTedarikci(1).then(result=>{
      setMusteriTedarikci()
    })
  }, [])
  


  return (
    <div>
      <div className='d-flex justify-content-around mt-2 custom-cariIslemler-label-bg rounded p-3'>
        <div className='label text-light'> Firma adı</div>
        <div className='label text-light'> Borç</div>
        <div className='label text-light'> Alacak</div>
        <div className='label text-light'> Bakiye</div>
        <div className='label text-light'> Taksit Borcu</div>
        <div className='label text-light'> Para birimi gelecek</div>
      </div>

      <div className='d-flex mt-2 ms-2 mb-2'>
        <div className="dropdown me-2">
          <button className="btn dropdown-toggle text-light" style={{ backgroundColor: "#191970" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cari Hareket Kaydı
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Nakit/Kredi Kartı/Banka</a></li>
            <li><a className="dropdown-item" href="#">Borç Alacak Fişleri</a></li>
            <li><a className="dropdown-item" href="#">Cari Virman</a></li>
            <li><a className="dropdown-item" href="#">Cari Taksit Ödeme</a></li>
            <li><a className="dropdown-item" href="#">Fatura Tahsilat/Ödeme</a></li>
          </ul>
        </div>
        <div className="dropdown me-2">
          <button className="btn btn-secondary dropdown-toggle text-light" style={{ backgroundColor: "#5f9ea0" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Fatura Kaydı
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Nakit/Kredi Kartı/Banka</a></li>
            <li><a className="dropdown-item" href="#">Borç Alacak Fişleri</a></li>
            <li><a className="dropdown-item" href="#">Cari Virman</a></li>
            <li><a className="dropdown-item" href="#">Cari Taksit Ödeme</a></li>
            <li><a className="dropdown-item" href="#">Fatura Tahsilat/Ödeme</a></li>
          </ul>
        </div>

        <div className="dropdown me-2">
          <button className="btn btn-secondary dropdown-toggle text-light" style={{ backgroundColor: "#8a2be2" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Çek Kaydı
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Nakit/Kredi Kartı/Banka</a></li>
            <li><a className="dropdown-item" href="#">Borç Alacak Fişleri</a></li>
            <li><a className="dropdown-item" href="#">Cari Virman</a></li>
            <li><a className="dropdown-item" href="#">Cari Taksit Ödeme</a></li>
            <li><a className="dropdown-item" href="#">Fatura Tahsilat/Ödeme</a></li>
          </ul>
        </div>
        <div className="dropdown me-2" >
          <button className="btn dropdown-toggle text-light" style={{ backgroundColor: "#483d8b" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Senet Kaydı

          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Nakit/Kredi Kartı/Banka</a></li>
            <li><a className="dropdown-item" href="#">Borç Alacak Fişleri</a></li>
            <li><a className="dropdown-item" href="#">Cari Virman</a></li>
            <li><a className="dropdown-item" href="#">Cari Taksit Ödeme</a></li>
            <li><a className="dropdown-item" href="#">Fatura Tahsilat/Ödeme</a></li>
          </ul>
        </div>


        <div className="dropdown me-2" >
          <button className="btn btn-info dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Son 3 Ayın Göster
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Nakit/Kredi Kartı/Banka</a></li>
            <li><a className="dropdown-item" href="#">Borç Alacak Fişleri</a></li>
            <li><a className="dropdown-item" href="#">Cari Virman</a></li>
            <li><a className="dropdown-item" href="#">Cari Taksit Ödeme</a></li>
            <li><a className="dropdown-item" href="#">Fatura Tahsilat/Ödeme</a></li>
          </ul>
        </div>


        <div className="dropdown me-2">
          <button className="btn btn-secondary dropdown-toggle text-light" style={{ backgroundColor: "#483d8b" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            İzleme
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Nakit/Kredi Kartı/Banka</a></li>
            <li><a className="dropdown-item" href="#">Borç Alacak Fişleri</a></li>
            <li><a className="dropdown-item" href="#">Cari Virman</a></li>
            <li><a className="dropdown-item" href="#">Cari Taksit Ödeme</a></li>
            <li><a className="dropdown-item" href="#">Fatura Tahsilat/Ödeme</a></li>
          </ul>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body row d-flex align-items-center">
                <div className='col-4'>
                  Müşteri/Tedarikçi
                </div>
                <div className='col-8'>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Müşteri/Tedarikçi Seçin</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-success" type="button" aria-expanded="false">
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
              <td scope="col">İşlemler</td>
              <td scope="col">İşlemler</td>
              <td scope="col">İşlemler</td>
              <td scope="col">İşlemler</td>
              <td scope="col">İşlemler</td>
              <td scope="col">İşlemler</td>
              <td scope="col">İşlemler</td>
              <td scope="col">İşlemler</td>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}
