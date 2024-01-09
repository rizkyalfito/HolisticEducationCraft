import { useState } from 'react';

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const isCategorySelected = (category) => selectedCategories.includes(category);

  return (
    <div className='flex flex-col justify-center text-center space-y-3 px-4'>
      <p className='text-slate-300 font-extrabold'>MATERI BELAJAR</p>
      <h1 className='text-xl md:text-3xl'>Kembangkan Ratusan Keterampilan Seru untuk Si Kecil!</h1>
      <p className='text-sm mt-4'>Intip materi seru pilihan ahli yang jadi favorit! Ada materi baru tiap bulan, dan kamu nggak perlu bayar tambahan!</p>
      <div className="flex flex-wrap text-xs text-blue-600 font-extrabold justify-center">
        {['Matematika', 'Ilmu Pengetahuan Alam', 'Bahasa', 'Seni dan Keterampilan', 'Ilmu Pengetahuan Sosial', 'Pendidikan Jasmani'].map((category) => (
          <button
            key={category}
            className={`button ${isCategorySelected(category) ? 'bg-blue-600 text-white' : 'bg-white border border-blue-500 text-blue-500'} p-1.5 rounded-md m-1 ${'sm:p-1 sm:text-sm'}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className='text-xs mt-2'>Kategori yang dipilih: {selectedCategories.join(', ')}</p>
    </div>
  );
}

export default Categories;
