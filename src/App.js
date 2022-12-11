import React from "react";
import TurListe from "./TurListe";

const url = 'https://course-api.com/react-tours-project' //api linki

function App() {
  const [turlar, turlariGuncelle] = React.useState([])
  const [yukleniyor, yukleniyorGuncelle] = React.useState(true)

  React.useEffect( ()=>{
    async function veriCek() {

      try {
        const yanit = await fetch(url)
        const veri = await yanit.json()

        yukleniyorGuncelle(false)
        turlariGuncelle(veri)
      } catch(hata) {
        alert("Veriler çekilirken hata oluştu!")
        yukleniyorGuncelle(false)
      }

    }

    setTimeout(veriCek, 3000)
  }, [] )


  function turKaldir(id) {
    const yeniTurlar = turlar.filter( (eleman)=>{ return eleman.id !== id } )
    turlariGuncelle( yeniTurlar )
  }


  if( yukleniyor === true) {
    return (
      <main>
        <div className="loading">
          <h1>Yükleniyor..</h1>
        </div>
      </main>
    )
  }

  if( turlar.length === 0 ) {
    return (
      <main>
        <div>
          Hiç kayıt yok
        </div>
      </main>
    );
  }
  
  return (
    <main>
      <section>
        <div className="title">
          <h2>Turlarımız</h2>
          <div className="underline"></div>
        </div>

        <div>
          <TurListe turlar={turlar} turKaldir={turKaldir} />
        </div>
      </section>
    </main>
  )

}

export default App;
