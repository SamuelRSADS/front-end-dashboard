import { MdAccessTimeFilled } from 'react-icons/md';
import { PiMapPinAreaFill } from 'react-icons/pi';
import { RiVipDiamondLine } from 'react-icons/ri';
import Button from '../common/Button';

interface TrailCardProps {
  imageUrl?: string;
  title?: string;
  estimatedTime?: string;
  distance?: string;
  difficulty?: string;
}

function TrailCard({
  imageUrl,
  title,
  estimatedTime,
  distance,
  difficulty,
}: TrailCardProps) {
  return (
    <div className="flex flex-col bg-white p-2 m-1 rounded-3xl border-1 border-primary-medium/25 w-full sm:w-[calc(50%-0.625rem)] lg:w-full text-primary-dark">
      <div className="w-full mb-4">
        <img
          src={imageUrl}
          alt=""
          className="object-cover rounded-4xl h-10 w-full"
        />
      </div>
      <h2 className="font-bold">{title}</h2>
      <div className="my-2">
        <p className="flex items-center gap-2">
          <MdAccessTimeFilled color="red" />
          {estimatedTime}
        </p>
        <p className="flex items-center gap-2">
          <PiMapPinAreaFill color="red" />
          {distance}
        </p>
        <p className="flex items-center gap-2">
          <RiVipDiamondLine color="red" />
          {difficulty}
        </p>
      </div>
      <Button text="Ver mais detalhes" className="w-full mt-2" />
    </div>
  );
}

export default TrailCard;
