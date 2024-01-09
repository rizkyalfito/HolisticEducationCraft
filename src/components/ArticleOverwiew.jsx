import '../styles/app.css'
import hero3 from "../assets/hero3.png"

const ArticleOverwiew = () => {
  return (
    <>
    <div className='lg:flex mt-12 p-12 justify-between scroll-smooth'>
      <div className='flex-col'>
        <div className='mb-4'>
        <h1 className='text-3xl'>Artikel dan Cerita Menarik</h1>
        <p>Baca cerita pendidikan yang menghibur dan memberikan nilai-nilai moral</p>
        </div>
        <button className='button bg-blue-600 text-white p-1 '>Lihat Semua</button>
        <div  className='border border-slate-200 m-6 p-2'>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h3>Belajar Sambil Bermain</h3>
              <p>Umur 3-5 Tahun</p>
              <p>Mengenal abjad dan angka dengan cara yang menyenangkan</p>
                <div>
                  <div>
                    <p>Pendidikan</p>
                  </div>
                  <div>
                    <p>Perkembangan</p>
                  </div>
                </div>
                <div>
                  <img src="" alt="" />
                  <p>Dr. Ahmad</p>
                </div>
            </div>
        </div>
        
        <div  className='border border-slate-200 m-6 p-2'>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h3>Belajar Sambil Bermain</h3>
              <p>Umur 3-5 Tahun</p>
              <p>Mengenal abjad dan angka dengan cara yang menyenangkan</p>
                <div>
                  <div>
                    <p>Pendidikan</p>
                  </div>
                  <div>
                    <p>Perkembangan</p>
                  </div>
                </div>
                <div>
                  <img src="" alt="" />
                  <p>Dr. Ahmad</p>
                </div>
            </div>
        </div>
      </div>

      <div>
        <img src={hero3} alt="" className='hidden lg:block rounded-lg scale-75 -translate-y-14' />
      </div>
      </div>  
    </>
  )
}

export default ArticleOverwiew