import React from 'react'

export default function nakitKrediKartiBanka() {
    return (
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Nakit - Kredi Kartı -Banka
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              İşlem Türü
              Bu bir modal'dır. İçerisine istediğiniz metni veya bileşenleri
              ekleyebilirsiniz.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Kapat
              </button>
              <button type="button" className="btn btn-primary">
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}
