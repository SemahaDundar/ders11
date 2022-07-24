import Anasayfa from "./Anasayfa";
import {useState} from "react";
import './App.css';
import BaglantiBilgi from './BaglantiBilgi';



function App(){
    const [baglantiDurumu, baglantiDurumuDegistir] = useState (window.navigator.onLine);



    window.addEventListener("offline", ()=>{
        console.log("Bağlantı gitti..");
        baglantiDurumuDegistir(false);
    });

    window.addEventListener("online", ()=>{
        console.log("Bağlantı geldi...");
        baglantiDurumuDegistir(true);
    });

    <>
   <BaglantiBilgi baglantiDurumu={baglantiDurumu}/>
    {baglantiDurumu && <Anasayfa/>}
    </>
}