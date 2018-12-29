import Layout from '../comps/MyLayout';
import Link from 'next/link';

const Postlink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <Postlink title='Hello Next.js' />
      <Postlink title='Learn Next.js' />
      <Postlink title='Deploy apps with Zeit' />
    </ul>
  </Layout>
);

// const Index = () => (
//   <div>
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   </div>
// );

// export default Index;
