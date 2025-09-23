'use client';

import React from 'react';
import Button from '@/components/common/Button';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6">
      {/* CORES PRIMÁRIAS */}
      <section className="mb-8">
        <h1 className="mb-4">Cores Primárias</h1>

        {/* Verde Escuro */}
        <div className="p-4 rounded-lg mb-3 bg-primary-dark">
          <span>Primary Dark (#113D31)</span>
        </div>

        {/* Verde Médio */}
        <div className="p-4 rounded-lg mb-3 bg-primary-medium">
          <span>Primary Medium (#2A6A59)</span>
        </div>

        {/* Amarelo Claro */}
        <div className="p-4 rounded-lg mb-3 bg-primary-light">
          <span className="text-black">Primary Light (#FFE489)</span>
        </div>
      </section>

      {/* CORES SECUNDÁRIAS */}
      <section className="mb-8">
        <h2 className="mb-4">Cores Secundárias</h2>

        {/* Vermelho */}
        <div className="p-4 rounded-lg mb-3 bg-secondary-danger">
          <span>Secondary Danger (#BF360C)</span>
        </div>

        {/* Creme */}
        <div className="p-4 rounded-lg mb-3 border bg-secondary-cream">
          <span className=" text-black">Secondary Cream (#FFF8E1)</span>
        </div>

        {/* Cinza Escuro */}
        <div className="p-4 rounded-lg mb-3 bg-secondary-dark">
          <span>Secondary Dark (#161616)</span>
        </div>
      </section>

      {/* TIPOGRAFIA */}
      <section className="mb-8">
        <h2 className=" mb-4 text-primary-dark uppercase">
          Sistema de Tipografia
        </h2>

        {/* Bold */}
        <div className="mb-4 font-bold">
          <h1 className="text-primary-dark">Gabarito Bold</h1>
          <h2 className="text-primary-medium">Uso em Títulos, Botões.</h2>
          <h3 className="lowercase">abcdefghijklmnopqrstuvwxyz</h3>
          <h4 className="uppercase">abcdefghijklmnopqrstuvwxyz</h4>
        </div>

        {/* Regular */}
        <div className="mb-4 font-normal">
          <h1 className="text-primary-dark">Gabarito Regular</h1>
          <h2 className="text-primary-medium">Uso em Textos</h2>
          <h3 className="lowercase">abcdefghijklmnopqrstuvwxyz</h3>
          <h4 className="uppercase">abcdefghijklmnopqrstuvwxyz</h4>
        </div>

        <div>
          <Button
            text="Continuar"
            variant="primary"
            onClick={() => alert('Teste!')}
          />
        </div>

        <div>
          <Button
            text="Continuar"
            variant="secondary"
            onClick={() => alert('Teste!')}
          />
        </div>
      </section>
    </div>
  );
}
