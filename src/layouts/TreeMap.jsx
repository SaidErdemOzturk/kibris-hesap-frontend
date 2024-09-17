import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import React from 'react'
import myImage from '../kibris-hesap.jpg';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
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
import { Link } from 'react-router-dom';

export default function TreeMap() {
    return (
        <div>
            <div>
                <img src={myImage} alt="My Example" className='rounded img-fluid bg-primary' />
            </div>
            <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1" icon={<MenuRoundedIcon />}>
          </MenuItem>
          <MenuItem icon={<GridViewRoundedIcon />}>  
          <Link to="/cariTanitim">
          Dashboard
                </Link> </MenuItem>
          <MenuItem icon={<ReceiptRoundedIcon />}> Invoices </MenuItem>
          <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
            <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
            <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
            <MenuItem icon={<AccountBalanceRoundedIcon />}>
              Current Wallet
            </MenuItem>
            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem icon={<MonetizationOnRoundedIcon />}>Transactions</MenuItem>
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>
              Notifications
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
        </div>

    )
}

/*


            <Box>
                <SimpleTreeView>
                    <TreeItem className='text-light' itemId="grid" label="Ana Menü" />
                    <TreeItem className='text-light' itemId="grid-community" label="Müşteriler" />
                    <TreeItem className='text-light' itemId="grid-pro" label="Tedarikçiler" />
                    <TreeItem className='text-light' itemId="grid-premium" label="Ürünler" >
                        <TreeItem className='text-light' itemId="pickers-urun" label="Ürün & Hizmet Tanıtımı" />
                        <TreeItem className='text-light' itemId="pickers-depotanitim" label="Depo Tanıtımı" />
                    </TreeItem>
                    <TreeItem className='text-light' itemId="pickers-cari" label="Cari İşlemler" />
                    <TreeItem className='text-light' itemId="pickers-alis" label="Alış/Satış Faturalar" />
                    <TreeItem className='text-light' itemId="pickers-stok" label="Stoklar" />
                    <TreeItem className='text-light' itemId="pickers-depo" label="Depo Tanıtımı" >
                        <TreeItem className='text-light' itemId="pickers-hesap" label="Hesaplar" />
                        <TreeItem className='text-light' itemId="pickers-calisanlar" label="Çalışanlar" />
                        <TreeItem className='text-light' itemId="pickers-masraflar" label="Masraflar" />
                        <TreeItem className='text-light' itemId="pickers-cekportfoy" label="Çek Portföy" />
                        <TreeItem className='text-light' itemId="pickers-senetportfoy" label="Senet Portföy" />
                    </TreeItem>
                    <TreeItem className='text-light' itemId="pickers-magazasatis" label="Mağaza/Satış" >
                        <TreeItem className='text-light' itemId="pickers-taksitlisatis" label="Taksitli Satış" />
                    </TreeItem>

                    <TreeItem className='text-light' itemId="pickers-eticaret" label="E-Ticaret" >
                        <TreeItem className='text-light' itemId="pickers-satislar" label="Satışlar" />
                        <TreeItem className='text-light' itemId="pickers-magaza" label="Mağaza" />
                    </TreeItem>

                    <TreeItem className='text-light' itemId="pickers-ayarlar" label="Ayarlar" >
                        <TreeItem className='text-light' itemId="pickers-kullanicilar" label="Kullanıcılar" />
                        <TreeItem className='text-light' itemId="pickers-firmalar" label="Firmalar" />

                        <TreeItem className='text-light' itemId="pickers-etiketler" label="Etiketler" />

                        <TreeItem className='text-light' itemId="pickers-faturairsaliye" label="Fatura/İrsaliye Tasarım" />

                        <TreeItem className='text-light' itemId="pickers-kurlar" label="Kurlar" />

                    </TreeItem>

                    <TreeItem className='text-light' itemId="pickers-raporlar" label="Raporlar" >
                        <TreeItem className='text-light' itemId="pickers-satislaralislar" label="Satışlar-Alışlar" />
                        <TreeItem className='text-light' itemId="pickers-finansalrapor" label="Finansal Raporlar" />
                        <TreeItem className='text-light' itemId="pickers-magazarapor" label="Mağaza Raporlar" />
                        <TreeItem className='text-light' itemId="pickers-stokrapor" label="Stok Raporlar" />
                        <TreeItem className='text-light' itemId="pickers-carirapor" label="Cari Raporlar" />
                    </TreeItem>




                </SimpleTreeView>
            </Box>




*/
