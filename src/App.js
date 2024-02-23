/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, {useState} from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import sahteVeri from "./sahte-veri";

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.

const [gonderiler, setGonderiler] = useState(sahteVeri);
const [aramaKriteri, setAramaKriteri] = useState("");

  const gonderiyiBegen = (gonderiID) => {
    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */
    // burada önce gonderiler'i map ile güncelliyoruz sonra state'ini update ediyoruz.
    // burada map methodunu farklı bir değişkene atayıp sonra onu set edince sayfadaki rakam da güncellendi.
    let begeniData = gonderiler.map(gonderi => {
      (gonderi.id === gonderiID) && gonderi.likes++;
      return gonderi;
    });
    setGonderiler(begeniData);
  };

  const aramaSonucu = (e) => {
      e.preventDefault();
      if (aramaKriteri.length) {
        let aramaData = gonderiler.filter(gonderi => gonderi.username.includes(aramaKriteri));
        setGonderiler(aramaData);
      } else {
        setGonderiler(sahteVeri);
      }

  }

  return (
    <div className="App">
      <AramaCubugu aramaKriteri = {aramaKriteri} kriterDegisimi = {setAramaKriteri} aramaSonucu = {aramaSonucu}/>
      <Gonderiler gonderiler = {gonderiler} gonderiyiBegen = {gonderiyiBegen}/>
      {/* Yukarıdaki metni projeye başladığınızda silin*/}
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;