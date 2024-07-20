import Link from 'next/link';
import ProductCard from './users/components/ProductCard';

export default function Home() {
  return (
    <main>
      <h1>Hello World!!</h1>
      <Link href="/users">users</Link><br />
      <Link href="/components">components</Link>
      <ProductCard />
      <button className="btn btn-outline btn-warning">Warning</button>
    </main>
  );
}
