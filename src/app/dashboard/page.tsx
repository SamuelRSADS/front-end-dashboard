'use client';

import Button from '@/components/common/Button';
import Card from '@/components/dashboard/Card';
import TrailCard from '@/components/dashboard/TrailCard';
import { useState } from 'react';

function DashboardPage() {
  const [showAllTrails, setShowAllTrails] = useState(false);

  const trails = [
    {
      imageUrl: 'https://placehold.co/460x200',
      title: 'Trilha Exemplo 1',
      estimatedTime: '2 horas',
      distance: '5 km',
      difficulty: 'Média',
    },
    {
      imageUrl: 'https://placehold.co/460x200',
      title: 'Trilha Exemplo 2',
      estimatedTime: '1.5 horas',
      distance: '3 km',
      difficulty: 'Fácil',
    },
    {
      imageUrl: 'https://placehold.co/460x200',
      title: 'Trilha Exemplo 3',
      estimatedTime: '3 horas',
      distance: '8 km',
      difficulty: 'Difícil',
    },
    {
      imageUrl: 'https://placehold.co/460x200',
      title: 'Trilha Exemplo 4',
      estimatedTime: '4 horas',
      distance: '10 km',
      difficulty: 'Difícil',
    },
    {
      imageUrl: 'https://placehold.co/460x200',
      title: 'Trilha Exemplo 5',
      estimatedTime: '2.5 horas',
      distance: '6 km',
      difficulty: 'Média',
    },
  ];

  const displayedTrails = showAllTrails ? trails : trails.slice(0, 2);

  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 h-full max-w-full">
      <div className="flex flex-col gap-5 w-full lg:w-1/2 items-center justify-center">
        <div className="flex flex-col mb-2 sm:flex-row gap-5 w-full h-auto sm:h-1/3">
          <Card value="5" label="Trilhas cadastradas" />
          <Card value="16" label="Pontos de interesse cadastrado" />
        </div>
        <div className="flex flex-col sm:flex-row w-full h-auto sm:h-2/3 items-center justify-center border border-primary-medium/25 rounded-3xl gap-5 sm:gap-10 p-4">
          <Card
            value="120"
            label="Usuários cadastrados"
            className="border-none"
          />
          <Card value="45" label="Usuários ativos" className="border-none" />
        </div>
      </div>
      <div className="flex flex-wrap w-full lg:w-1/2 items-center justify-center border border-primary-medium/25 rounded-3xl p-4 md:px-6 overflow-x-hidden overflow-y-auto">
        <Button text="Trilhas Populares" className="font-bold w-full" />
        <div className="flex w-full flex-wrap max-h-[60vh] items-center justify-center">
          {displayedTrails.map((trail, index) => (
            <TrailCard
              key={index}
              imageUrl={trail.imageUrl}
              title={trail.title}
              estimatedTime={trail.estimatedTime}
              distance={trail.distance}
              difficulty={trail.difficulty}
            />
          ))}
          <div className="w-full flex justify-center">
            <Button
              text={showAllTrails ? 'MOSTRAR MENOS' : 'VER TODOS'}
              className="flex w-1/6 mt-2 justify-center bg-white border border-yellow-400 text-yellow-400"
              onClick={() => setShowAllTrails(!showAllTrails)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
