


import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import React, { useEffect, useState } from "react";
import myImage from "../kibris-hesap.jpg";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FactoryIcon from '@mui/icons-material/Factory';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/actions/sidebarSlice";

export default function TreeMap() {
  const isMenuOpen = useSelector((state) => state.sidebar.isMenuOpen);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isTradeOpen, setIsTradeOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const dispatch = useDispatch()


  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleFinance = () => {
    setIsFinanceOpen(!isFinanceOpen);
  };

  const toggleStory = () => {
    setIsStoryOpen(!isStoryOpen);
  };

  const toggleTrade = () => {
    setIsTradeOpen(!isTradeOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleReport = () => {
    setIsReportOpen(!isReportOpen);
  };

  return (
    <div className="d-flex" >
      <Box
        className="sidebar"
        sx={{
          width: isMenuOpen ? 250 : 0,
        }}
      >
        {isMenuOpen && (
          <List className="">
            <Link to="/">
              <ListItem button className="side-menu-item">

                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Anasayfa" />
              </ListItem>
            </Link>

            <Link to="/cariTanitim/1" className="text-white text-decoration-none">
              <ListItem button className="side-menu-item">
                <ListItemIcon>
                  <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText primary="Müşteriler" />
              </ListItem>
            </Link>


            <Link to="/cariTanitim/2" className="text-white text-decoration-none">

              <ListItem button className="side-menu-item">
                <ListItemIcon>
                  <FactoryIcon />
                </ListItemIcon>
                <ListItemText primary="Tedarikçiler" />
              </ListItem>
            </Link>

            <ListItem button onClick={toggleProducts} className="side-menu-item">
              <ListItemIcon>
                <KeyboardArrowRightIcon />
                <LocalOfferIcon className="mx-2" />
              </ListItemIcon>
              <ListItemText primary="Ürünler" />
            </ListItem>
            <Collapse in={isProductsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className="side-menu-item">
                <Link to="/urunler" className="text-white text-decoration-none">

                  <ListItem button className="px-4">
                    <ListItemText primary="Ürün & Hizmet Tanıtımı" />
                  </ListItem>
                </Link>

                <Link to="/depoTanitim" className="text-white text-decoration-none">

                  <ListItem button className="px-4 text-decoration">
                    <ListItemText primary="Depo Tanıtımı" />
                  </ListItem>
                </Link>

              </List>
            </Collapse>



            <Link to="/cariIslemler" className="text-white text-decoration-none">
              <ListItem button className="side-menu-item">
                <ListItemIcon>
                  <ContactEmergencyIcon />
                </ListItemIcon>
                <ListItemText primary="Cari İşlemler" />
              </ListItem>
            </Link>


            <Link to="/cariTanitim/1">
              <ListItem button className="side-menu-item">
                <ListItemIcon>
                  <ConfirmationNumberIcon />
                </ListItemIcon>
                <ListItemText primary="Alış/Satış Faturalar" />
              </ListItem>
            </Link>

            <Link to="/cariTanitim/1">
              <ListItem button className="side-menu-item">
                <ListItemIcon>
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Stoklar" />
              </ListItem>
            </Link>


            <ListItem button onClick={toggleFinance} className="side-menu-item">
              <ListItemIcon>
                <KeyboardArrowRightIcon />
                <LocalOfferIcon className="mx-2" />
              </ListItemIcon>
              <ListItemText primary="Finans/Nakit Yönetimi" />
            </ListItem>
            <Collapse in={isFinanceOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className="side-menu-item">
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Hesaplar" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Çalışanlar" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Masraflar" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Çek Portföy" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Senet Portföy" />
                </ListItem>


              </List>
            </Collapse>

            <ListItem button onClick={toggleStory} className="side-menu-item">
              <ListItemIcon>
                <KeyboardArrowRightIcon />
                <LocalOfferIcon className="mx-2" />
              </ListItemIcon>
              <ListItemText primary="Mağaza/Satış" />
            </ListItem>
            <Collapse in={isStoryOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className="side-menu-item">
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Taksitli Satış" />
                </ListItem>



              </List>
            </Collapse>

            <ListItem button onClick={toggleTrade} className="side-menu-item">
              <ListItemIcon>
                <KeyboardArrowRightIcon />
                <LocalOfferIcon className="mx-2" />
              </ListItemIcon>
              <ListItemText primary="E-Ticaret" />
            </ListItem>
            <Collapse in={isTradeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className="side-menu-item">
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Satışlar" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Mağaza" />
                </ListItem>


              </List>
            </Collapse>

            <ListItem button onClick={toggleSettings} className="side-menu-item">
              <ListItemIcon>
                <KeyboardArrowRightIcon />
                <LocalOfferIcon className="mx-2" />
              </ListItemIcon>
              <ListItemText primary="Ayarlar" />
            </ListItem>
            <Collapse in={isSettingsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className="side-menu-item">
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Kullanıcılar" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Firmalar" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Etiketler" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Fatıra/İrsaliye Tasarım" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Kurlar" />
                </ListItem>


              </List>
            </Collapse>

            <ListItem button onClick={toggleReport} className="side-menu-item">
              <ListItemIcon>
                <KeyboardArrowRightIcon />
                <LocalOfferIcon className="mx-2" />
              </ListItemIcon>
              <ListItemText primary="Raporlar" />
            </ListItem>
            <Collapse in={isReportOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className="side-menu-item">
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Satışlar-Alışlar" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Finansal Raporlar" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Mağaza Raporları" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Stok Raporları" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Cari Raporlar" />
                </ListItem>


              </List>
            </Collapse>



          </List>
        )}
      </Box>

    </div>
  );
}
