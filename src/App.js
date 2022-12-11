import React from "react";
import axios from "axios";

function App() {
  const [veri, veriGuncelle] = React.useState( { hits: [] } )
  const [sorgu, sorguGuncelle] = React.useState( "book" )
  const [arama, aramaGuncelle] = React.useState( "book" )
  const [yukelniyor, yukleniyorGuncelle] = React.useState(false)
  const [hata, hataGuncelle] = React.useState(false)


  React.useEffect( ()=>{
    async function veriCek() {
      hataGuncelle(false)
      yukleniyorGuncelle(true)
    //  promise nesnesinden geriye ya başarılı yada olumsuz bir sinyal gelir
    // olumsuz sonuçları try catch içinde yakalarız
    try{
      const sonuc = await axios("https://hn.algolia.com/api/v1/search?query=" + arama)
      veriGuncelle(sonuc.data)
    }catch(error){
      hataGuncelle(false)
    }
    
      yukleniyorGuncelle(false)
    }

    veriCek()
  }, [arama] )
 

  console.log("App Komponenti Render oldu!")
  return (
    <section className="container py-5">
      <div>
        <input type="text" value={sorgu} onChange={ (olay)=>{sorguGuncelle(olay.target.value)} } />
        <button onClick={ ()=>{ aramaGuncelle(sorgu) } }>Ara</button>
        <button onClick={() => { console.log("Button Tıklandığında")}}>Tıkla</button>
      </div>
      {hata === true? <p className="bg-danger p-3">Bir hata var!</p> : ""}
      {
      yukelniyor === true?
      (
         <p>Yükleniyor...</p>
      )
      :
      (
      
      <ul>
        {
          veri.hits.map( (eleman)=>{
            return <li key={eleman.objectID}> <a href={eleman.url}>  {eleman.title} </a> </li>
          } )
        }
      </ul>
      )
    }
    </section>
  );
}

export default App;
