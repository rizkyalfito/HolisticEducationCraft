import { IconStarFilled } from "@tabler/icons-react";
import avatar from '../assets/avatar.png'

import '../styles/app.css'

const Reviews = () => {
  return (
    <>
        <div className="flex gap-1 justify-between ">
            
            <div className="flex-col gap-4 py-4 justify-center px-12 mx-9" >
                <h1 className="text-4xl -translate-y-6 ">Ulasan Pengguna</h1>
                <p className="-translate-y-6">Lihat apa yang dikatakan pengguna tentang aplikasi kami</p>
                <div className="py-2">
                    <button className='buttons  text-blue-600 p-1 mr-3 border border-blue-600 hover:text-white hover:bg-blue-600 '>Lihat Semua</button>
                    <button className='button bg-blue-600 text-white p-1 '>Tambah Ulasan</button>
                </div>
            </div>

            <div className="flex gap-2 justify-center">

                <div className="flex-col border border-black p-5 rounded-md  w-1/3 ">
                    <div className="flex mb-5">
                        <img src={avatar} alt="" />
                        <p>Ani</p>
                        <span className="justify-self-end"><IconStarFilled/></span>
                    </div>
                    
                    <div>
                        <p>Anak saya senang belajar menggunakan aplikasi ini!</p>
                    </div>
                </div>

                <div className="flex-col border border-black p-5 rounded-md  w-1/3">
                    <div className="flex mb-5">
                        <img src={avatar} alt="" />
                        <p>Ani</p>
                        <span className="justify-self-end"><IconStarFilled/></span>
                    </div>

                    <div>
                        <p>Anak saya senang belajar menggunakan aplikasi ini!</p>
                    </div>
                </div>

            </div>
        </div> 
    </>
    
  )
}

export default Reviews