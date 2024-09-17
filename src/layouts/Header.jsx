import React from 'react'

export default function Header() {
    return (
        <div className='d-flex bg-light justify-content-between'>
            <div className='m-3'>
                <h5>
                {localStorage.getItem("firmaAdi")}-{localStorage.getItem("firmaUnvani")}
                </h5>
            </div>
            <div className=' m-3'>
                <div className="dropdown" >
                    <button className="btn btn-success dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {localStorage.getItem("ePosta")}
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Şifre Değiştir</a></li>
                        <li><a className="dropdown-item" href="#">Çıkış</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
