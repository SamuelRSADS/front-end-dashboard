'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';
import { FaCamera } from 'react-icons/fa';

import Button from '@/components/common/Button';
import { CiCamera } from 'react-icons/ci';

function RepresentativePhotoPage({
    onNext,
  }: {
    onNext: () => void;
  }) {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      console.log('Arquivo selecionado:', selectedFile);
      setFile(selectedFile);
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleContinue = () => {
    if (file) {
      console.log('Enviando arquivo...', file);
    }
    router.push('/sua-proxima-rota');
  };

  return (
    <div className="flex flex-row h-screen text-gray-800">
      <div 
        className="hidden md:block md:w-7/12 bg-[url('/floresta.svg')] bg-cover bg-center"
      />

      <div className="flex bg-white w-full md:w-5/12 justify-center items-center">
        <div className="flex flex-col items-center w-10/12 max-w-sm text-center">
        
          <div
            className="relative w-48 h-48 bg-gray-200 rounded-lg mb-6 cursor-pointer" 
            onClick={handleAttachClick}
          >
           

            <div className="absolute -bottom-4 right-3 w-12 h-12 bg-primary-dark rounded-full flex justify-center items-center shadow-md">
            <CiCamera
              size={25}
              stroke='white'
              strokeWidth={1}/>
            </div>
          </div>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/png, image/jpeg, image/svg+xml"
          />

          <h1 className="font-bold text-2xl text-gray-900 mb-2">
            Envie uma foto representativa da sua 
            instituição ou do parque.
          </h1>
          <p className="text-sm text-gray-600 mb-2">
            Essa imagem será usada em tamanho reduzido no mini player do aplicativo, facilitando a identificação.\nPreferencialmente imagens sem textos.
          </p>
          <p className="text-xs text-gray-500 mb-8">
            Formatos aceitos: PNG, JPG, SVG.
          </p>

          <div className="flex flex-col w-full gap-3">
            <Button
              variant="secondary"
              text="Anexar arquivo"
              className="py-3 w-full"
              onClick={handleAttachClick}
              type="button"
            />
            <Button
              variant="primary"
              text="Continuar"
              className="py-3 w-full"
              onClick={handleContinue}
              type="button"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default RepresentativePhotoPage;