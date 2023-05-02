import { MainLayout } from '../../components/layout/MainLayout';
import Link from 'next/link';
MainLayout

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h3>
        Ir a <Link href='/'>Home</Link>
      </h3>
      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/pricing.js</code>
      </p>
    </MainLayout>
  );
}