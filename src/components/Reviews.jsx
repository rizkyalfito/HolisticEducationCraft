import { IconStarFilled } from "@tabler/icons-react";
import avatar from '../assets/avatar.png';

const Reviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-2 md:px-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl">Ulasan Pengguna</h1>
        <p>Lihat apa yang dikatakan pengguna tentang aplikasi kami</p>
        <div className="py-2">
          <button className="button text-blue-600 p-1 mr-3 border border-blue-600 hover:text-white hover:bg-blue-600">Lihat Semua</button>
          <button className="button bg-blue-600 text-white p-1">Tambah Ulasan</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
        {[1, 2].map((item) => (
          <div key={item} className="flex-col border border-black p-5 rounded-md">
            <div className="flex items-center mb-5">
              <img src={avatar} alt="" className="w-8 h-8 mr-2" />
              <p>Ani</p>
              <span className="ml-auto"><IconStarFilled/></span>
            </div>
            
            <div>
              <p>Anak saya senang belajar menggunakan aplikasi ini!</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
