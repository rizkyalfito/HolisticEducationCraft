import '../styles/app.css';
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import vector1 from "../assets/vector1.svg"
import vector2 from "../assets/vector2.svg"

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between text-center gap-3 mt-16 align-middle fade-in'>
      <div className='lg:w-1/3 order-2 lg:order-1'>
        <div className='mb-4 lg:mb-0'>
          <img src={hero1} alt="" className='hidden lg:block w-4/5' />
        </div>
        <div>
          <img src={vector1} alt="" className='hidden lg:block -translate-y-14 -rotate-6 translate-x-4 w-full scale-75' />
        </div>
      </div>
      <div className='lg:w-1/2 order-1 lg:order-2'>
        <h1 className='text-3xl'>Masa Depan Yang Lebih Baik Untuk Anak Anda</h1>
        <p>Membentuk Pikiran, Merajut Masa Depan</p>
        <button className="cta mt-4 lg:mt-3">
          <span>Ayo Mulai</span>
          <div className="arrow-container">
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </div>
        </button>
        <p className='mt-4 lg:mt-6 px-2'>
          Ayo, bergabunglah dengan kami untuk
          membentuk masa depan cerah si kecil!
          Daftarkan anak Anda sekarang, dan mari kita
          bangun bersama fondasi sukses mereka
        </p>
      </div>
      <div className='lg:w-1/3 order-3'>
        <div>
          <img src={hero2} alt="" className='hidden lg:block w-2/4 translate-x-16' />
        </div>
        <div className='justify-center'>
          <img src={vector2} alt="" className='hidden lg:block -translate-y-5 -translate-x-5  w-full scale-75' />
        </div>
      </div>
    </div>
  )
}

export default Hero;
