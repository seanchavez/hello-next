import Layout from '../comps/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id${show.id}`}>
            <a href=''>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data,
  };
};

export default Index;

// const Postlink = props => (
//   <li>
//     <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

// export default () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       <Postlink id="hello-nextjs" title='Hello Next.js' />
//       <Postlink id ="learn-nextjs" title='Learn Next.js' />
//       <Postlink id="deploy-nextjs" title='Deploy apps with Zeit' />
//     </ul>
//   </Layout>
// );

// const Index = () => (
//   <div>
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   </div>
// );

// export default Index;
