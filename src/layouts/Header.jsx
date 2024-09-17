import React from 'react'

export default function Header() {
    return (
        <div className='row bg-light'>
            <div className='col-3 d-flex align-items-center ms-2 mt-2 '>
                <h5 className=''>
                {localStorage.getItem("firmaAdi")}-{localStorage.getItem("firmaUnvani")}
                </h5>
            </div>
            <div className='col-9 '>
                <div class="dropdown d-flex justify-content-end " >
                    <button class="btn btn-success dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {localStorage.getItem("ePosta")}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Şifre Değiştir</a></li>
                        <li><a class="dropdown-item" href="#">Çıkış</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
