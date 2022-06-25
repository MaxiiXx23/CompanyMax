import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { RoutesApp } from './routes'
import { Header } from './components/Header';
import { GlobalStyled } from './styles/GlobalStyled';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesApp />
        <GlobalStyled />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </>
  );
}

export default App;
