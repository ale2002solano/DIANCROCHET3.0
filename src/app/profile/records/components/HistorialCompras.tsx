"use client";
import { useEffect, useState } from "react";
import Factura from "./Factura";
import OrdenamientoFacturas from "./Ordenamiento";
import FacturaFull from "./FacturaFull";
import { getFacturas } from "@services/User/user";
import { Bill } from "@interfaces/bill";
import LoadingSpinner from "../../../checkout/components/loadding/LoadingSpinner";
import { useRouter } from 'next/navigation';
export default function Historial() {
  const router = useRouter();
  const [showOrder, setShowOrder] = useState(false);
  const [, setOrdenamiento] = useState("");
  const [, setOrden] = useState("");
  const [openFactura, setOpenFactura] = useState(false);
  const [idFactura, setIdFactura] = useState(0);

  const handleOrder = () => {
    setShowOrder(!showOrder);
  };

  const handleOpenBill = (id:number) => {
    setIdFactura(id);
    setOpenFactura(!openFactura);
  };

  const [isLoading, setIsLoading] = useState(true);
  const [facturas, setFacturas] = useState<Bill[]>([]);

  useEffect(() => {
    const storedResponse = localStorage.getItem('loginResponse');

    if (storedResponse) {
      const parsedResponse = JSON.parse(storedResponse);
      const userCorreo = parsedResponse?.query_result?.CORREO || '';

      if (userCorreo) {
        const fetchGets = async () => {
          setIsLoading(true); // Activa la carga antes de la solicitud
          try {
            const res = await getFacturas(userCorreo); // Llama a la función para obtener las facturas
            setFacturas(res.FacturasUsuario); // Actualiza el estado con el resultado
            console.log(res); // Muestra la respuesta en consola
          } catch (error) {
            console.error("Error al traer facturas:", error);
          } finally {
            setIsLoading(false); // Desactiva la carga cuando la solicitud termina
          }
        };

        fetchGets();
      } else {
        router.push('/auth/sign-in'); // Redirige si el correo no está presente
      }
    } else {
      router.push('/auth/sign-in'); // Redirige si no hay respuesta guardada
    }
  }, [router]);
  
  

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-20 flex h-24 select-none items-center pl-[5%]">
        <h1 className="font-koulen text-2xl text-[#424242]">
          HISTORIAL DE COMPRAS
        </h1>
        <div className="absolute right-[5%] ml-6 flex cursor-pointer select-none items-center font-lekton text-lg text-[#444343]">
          <h2 onClick={handleOrder}>Ordenar por:</h2>
          <svg
            onClick={handleOrder}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.1}
            stroke="currentColor"
            className={`size-5 transition-all duration-300 ease-linear ${showOrder ? "rotate-180 transform" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>

          <div className="absolute right-[2.5%] top-7 w-auto">
            <OrdenamientoFacturas
              open={showOrder}
              setOpen={setShowOrder}
              setOrdenamiento={setOrdenamiento}
              setAscendente={setOrden}
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="flex-1 overflow-y-auto">
          {facturas.map((factura) => (
            <div
              key={factura.id_factura}
              onClick={()=>handleOpenBill(factura.id_factura)}
              className="my-3 ml-[5%] h-28 w-9/12"
            >
              <Factura 
              codigo={factura.codigo_fact}
              productos={factura.productos}
              total={factura.total}
              fecha={factura.fecha_fact}/>
            </div>
          ))}
        </section>
      )}

      {openFactura && (
        <FacturaFull
          open={openFactura}
          setOpen={setOpenFactura}
          idFactura={idFactura}
        />
      )}
    </div>
  );
}
