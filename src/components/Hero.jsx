import '../styles/app.css';
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import vector1 from "../assets/vector1.svg"
import vector2 from "../assets/vector2.svg"


const Hero = () => {
  return (
    <>
      <div className='flex justify-between text-center gap-3 mt-16 align-middle fade-in '>
        <div>
          <div className=''>
            <img src={hero1} alt="" />
          </div>
          <div className=''>
            <img src={vector1} alt="" className='-translate-y-10 -rotate-6 translate-x-10' />
          </div>
        </div>
        <div className='flex-none'>
          <div className='flex-none lg:text-2xl'>
              <h1>Masa Depan Yang Lebih Baik Untuk Anak Anda</h1>
              <p>Membentuk Pikiran, Merajut Masa Depan</p>
          </div>
          <div>
            <button className="cta m-10">
              <span>Ayo Mulai</span>
              <div className="arrow-container">
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </div>
            </button>
            <p>
            Ayo, bergabunglah dengan kami untuk <br />
            membentuk masa depan cerah si kecil! <br />
            Daftarkan anak Anda sekarang, dan mari kita<br />
            bangun bersama fondasi sukses mereka
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={hero2} alt="" />
          </div>
          <div>
            <img src={vector2} alt="" className='-translate-y-5 -rotate-6 -translate-x-5' />
          </div>
        </div>
        </div>
    </>

  )
}

export default Hero