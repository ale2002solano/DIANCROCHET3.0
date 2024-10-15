"use client";
import Navbar from "components/navbar";
import ShopCartForm from "../components/posts/ShopCartForm";
export default function ShopCart() {
    return (
      <main className="flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
        <Navbar/>
        <section className="imagen relative flex h-[92%] w-full items-center justify-center">
          <ShopCartForm />
        </section>
      </main>
    );
  }
  