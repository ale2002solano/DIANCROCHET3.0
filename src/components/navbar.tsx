"use client";
import Link from 'next/link';
import { FaUserCircle, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Image from "next/legacy/image";
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BounceProvider, useBounce } from '../context/BounceContext'; // Asegúrate de importar el BounceProvider

export default function Navbar() {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [correo, setCorreo] = useState<string>('');
  const [mensajeAdvertencia, setMensajeAdvertencia] = useState<string | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { isBounce } = useBounce();  // Obtener el estado isBounce desde el hook

  // Recuperar la imagen de perfil y correo del localStorage
  useEffect(() => {
    const storedResponse = localStorage.getItem('loginResponse');
    if (storedResponse) {
      const parsedResponse = JSON.parse(storedResponse);
      setProfileImageUrl(parsedResponse.imagen_url);
      setCorreo(parsedResponse?.query_result?.CORREO || '');
    }
  }, []);

  const toggleProfileMenu = () => {
    setProfileOpen(!isProfileOpen);
  };

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileOpen]);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/auth/sign-in');
  };

  const handleCarritoClick = () => {
    if (!correo) {
      setMensajeAdvertencia('Inicia sesion para acceder.');
      setTimeout(() => setMensajeAdvertencia(null), 3000);
    } else {
      router.push('/checkout/shop-cart');
    }
  };

  const handleMiperfilClick = () => {
    if (!correo) {
      setMensajeAdvertencia('Inicia sesion para acceder.');
      setTimeout(() => setMensajeAdvertencia(null), 3000);
    } else {
      router.push('/profile');
    }
  };

  return (
    <header className="bg-white shadow-md font-koulen flex fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="http://dian-crochet-8ii.vercel.app/">
            <Image src="/img/logo.svg" alt="Logo" width={40} height={40} />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a onClick={() => router.push('/products')} href="#" className="text-gray-700 hover:text-purple-500">PRODUCTOS</a>
            <a onClick={() => router.push('/products/materials')} href="#" className="text-gray-700 hover:text-purple-500">MATERIALES</a>
            <a onClick={() => router.push('/products/kits')} href="#" className="text-gray-700 hover:text-purple-500">KITS</a>
            <a onClick={() => router.push('/products/tutoriales')} href="#" className="text-gray-700 hover:text-purple-500">TUTORIALES</a>
          </nav>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center rounded-full px-4 py-1 w-1/3 bg-gray-100 focus:outline-none focus-visible:outline-none focus:ring-0 focus:border-none">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg-transparent border-none text-gray-600 focus:outline-none focus-visible:outline-none focus:ring-0 focus:border-none"
          />
          <button title='buscar'>
            <FaSearch className="text-purple-500" />
          </button>
        </div>

        {/* Iconos */}
        <div className="flex items-center space-x-6 relative">
          {/* Perfil */}
          <div className="relative flex items-center" ref={profileRef}>
            <button onClick={toggleProfileMenu} className="relative w-[40px] h-[40px] focus:outline-none" title='iconos'>
              {profileImageUrl ? (
                <Image
                  src={profileImageUrl}
                  alt="Imagen de Perfil"
                  layout='fill'
                  sizes="40px"
                  className="object-cover rounded-full"
                />
              ) : (
                <FaUserCircle className="text-gray-700 text-2xl" />
              )}
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20">
                <a onClick={handleMiperfilClick} href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mi Perfil</a>
                <a
                  onClick={correo ? handleLogout : () => router.push('/auth/sign-in')}
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {correo ? "Cerrar Sesion" : "Iniciar Sesion"}
                </a>
              </div>
            )}
          </div>

          {/* Carrito */}
          <BounceProvider>
            <button onClick={handleCarritoClick} title="carrito" className="relative">
              <FaShoppingCart className="text-gray-700 text-3xl" />
              <span className={`absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-none ${isBounce ? 'animate-beatfade' : ''}`}></span>
            </button>
          </BounceProvider>

          {/* Mostrar mensaje de advertencia */}
          {mensajeAdvertencia && (
            <div className="text-lg items-center w-1/4 flex justify-center font-koulen fixed bottom-5 right-5 bg-gray-200 opacity-75 text-purple-800 px-1 py-2 rounded-lg z-50">
              {mensajeAdvertencia}
              <svg className="ml-6 size-6 text-purple-900" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} width="2em" height="1em" viewBox="0 0 32 32">
                <path fill="currentColor" d="m15.875 4l-.094.031l-8 1.875L7 6.094v20.25l.813.125l8 1.5l.093.031H18V4zM20 6v2h3v16h-3v2h5V6zm-4 .031V26l-7-1.313V7.657zM14.344 15c-.367 0-.688.45-.688 1s.32 1 .688 1s.656-.45.656-1s-.29-1-.656-1"></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
