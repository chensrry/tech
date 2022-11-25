import Layout from "./components/Layout";
import Banner from "./components/Banner";
import Description from "./components/Description";
import Marjor from "./components/Marjor";
import Steps from "./components/Steps";
import requireProps from './hocs/requireProps'


@requireProps({})
function App() {
  return (
    <Layout>
      <span>111</span>
      <span>222</span>
      <div>2222</div>
      <Banner />
      <Description />
      <Marjor />
      <Steps />
    </Layout>
  );
}

export default App;
