import { DataProvider } from "./contexts/DataContext";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <DataProvider>
        <Product />
      </DataProvider>
    </>
  );
};

export default App;
