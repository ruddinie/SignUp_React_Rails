import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from 'react'


function App() {
    // useEffect(() => {
    //     console.log(localStorage);
    // }, [localStorage])
    return ( 
        <>
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
        <Routes />
        </>
    );
}

export default App;