import React, { useEffect } from "react";

const SplashScreen = ({ onSplashEnd }) => {
  useEffect(() => {
    // Mengatur waktu tampil splash screen selama 3 detik
    const timer = setTimeout(() => {
      onSplashEnd(); // Memanggil fungsi untuk mengakhiri splash screen
    }, 3000);

    return () => clearTimeout(timer); // Membersihkan timer saat komponen di-unmount
  }, [onSplashEnd]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 to-yellow-500">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Kayla Catering</h1>
        <p className="text-lg text-white">Selamat datang di aplikasi kami!</p>
        <div className="mt-8">
          <img
            src="https://via.placeholder.com/150" // Ganti dengan URL logo Anda
            alt="Logo"
            className="mx-auto w-32 h-32 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
