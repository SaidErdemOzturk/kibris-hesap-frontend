import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/actions/sidebarSlice";
import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "../store/actions/userAction";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const user =useSelector((state)=> state.user.user)
  const navigate = useNavigate()


  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleLogout=()=>{
    dispatch(logout())
    navigate("/login")
  }


  return (
    <div className="d-flex bg-light align-items-center justify-content-between">
      <div className="d-flex align-items-center p-3">
        <Box className="mx-3">
          <Button variant="contained" onClick={handleToggleMenu}>
            <MenuIcon />
          </Button>
        </Box>
        <div>
          <h5>
            {user.firmaAdi}-
            {user.firmaUnvani}
          </h5>
        </div>
      </div>

        <div className="dropdown mx-3">
          <button
            className="btn btn-success dropdown-toggle "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {localStorage.getItem("ePosta")}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Şifre Değiştir
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={handleLogout}>
                Çıkış
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
}
