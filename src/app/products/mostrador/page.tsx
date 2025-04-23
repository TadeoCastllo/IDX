import Contador from '@/app/components/Contador';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Contador en el mostrador",
  description: "xd",
};

export default function MostradorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Contador />
    </div>
  );
}