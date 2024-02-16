import Header from "./Header";
import GridList from "./GridList";
import CustomerBench from "./CustomerBench";
import Footer from "./Footer";
import Nav from "./Nav";
import DetailList from "./DetailList";

function App() {
  return (
    <>
      <Nav />
      <Header
        h1ClassName={"mb-5"}
        h1Text={"Generate more leads with a professional landing page!"}
      />
      <DetailList />
      <GridList />
      <CustomerBench />
      <Header
        h1ClassName={"mb-4"}
        h1Text={"Ready to get started? Sign up now!"}
      />
      <Footer />
    </>
  );
}

export default App;
