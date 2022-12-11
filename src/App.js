import veri from './data.js'
import React from 'react';
import Liste from './Liste.jsx';

let kisiId = 7;

function App() {
  const [kisiler, kisilerGuncelle] = React.useState(veri)
  const [yeniKisiAd, yeniKisiAdGuncelle] = React.useState("")

  function kisiEkle() {
    let yeniKisiObj = {
      id: kisiId++,
      name: yeniKisiAd,
      age: 28,
      image: "https://lipsum.app/id/26/200x150"
    }

    kisilerGuncelle( [yeniKisiObj, ...kisiler] )
    yeniKisiAdGuncelle ("") 
  }

  return (
    <main>
      <section className='container'>

        <input value={yeniKisiAd} onChange={ (olay)=>{ yeniKisiAdGuncelle(olay.target.value) } } type="text" /> 
        <button onClick={kisiEkle}>Ekle</button>

        <h3>Bugün {kisiler.length} doğum günü var!</h3>
        <Liste kisiler={kisiler} />

        <button className='temizle-buton' onClick={ ()=>{ kisilerGuncelle([]) } }>Tümünü Temizle</button>
      </section>

    </main>
  );
}

export default App;
