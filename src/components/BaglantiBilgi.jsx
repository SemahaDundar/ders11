function BaglantiBilgi(baglantiDurumu){ 
return(
<p className={baglantiDurumu?"olumlu-mesaj":"uyari"}> 
{baglantiDurumu === true ? "Bağlantı var": "Bağlantı yok"}</p>
)
}


export default BaglantiBilgi;