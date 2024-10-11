'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import ProductCard from './components/ProductCard';
const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
  loading: () => <p>Loaging...</p>,
});

export default function Home() {
  //const session = getServerSession(authOptions);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <div>
        <h1 className="font-poppins">
          Hello {/*session && <span>{session.user.name}</span>*/}
        </h1>
        <Link href="/users">Users</Link>
        <ProductCard></ProductCard>
        {/*<Image
          src="https://bit.ly/react-cover"
          alt="land"
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={100}
          priority
        />*/}
      </div>
      <button onClick={() => setIsVisible(!isVisible)}>Show</button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}

//export const metadata: Metadata = {
//  title: 'Home',
//};
// ou
//export async function generateMetadata(): Promise<Metadata> {
//  const product = await fetch ('')
//  return {
//    title: 'product.name',
//    description: '...'
//  }
//}
