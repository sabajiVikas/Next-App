import "../styles/globals.css";
// MDB
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// Component
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
