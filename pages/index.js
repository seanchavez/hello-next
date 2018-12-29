import Link from 'next/link';

const Index = () => (
  <div>
    <Link href='/about'>
      <button>Go to About Page</button>
      {/* <a style={{ fontSize: 20 }}>About Page</a> */}
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
