import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Makepayment from './components/Makepayment';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <h1>SPARKLER DIGITALS</h1>
      </header>
       <div class="container-fluid">
        
        <section class="row">
          
            <div class="col-md-12">
                <nav class="navbar navbar-expand-md navbar-light bg-light nav shadow p-4">
                    <a href="/" class="navbar-brand text-primary">SparklerDigitals</a>
                    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                        <span class="navbar-toggler-icon"></span>

                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                          <nav >
                            <Link to={'/signup'} className='navlinks'>Signup</Link>
                            <Link to={'/signin'} className='navlinks'>Signin</Link>
                            <Link to={'/addproduct'} className='navlinks'>Addproduct</Link>
                          </nav>
                        </div>
                    </div>

                </nav>
            </div>
        </section>
        </div>
      <Routes>
        <Route path='/signup' element = {<Signup />} />
        <Route path='/signin' element = {<Signin />} />
        <Route path='/addproduct' element = {<Addproduct />} />
        <Route path='/' element = {<Getproduct />} />
        <Route path='/makepayment' element = {<Makepayment />} />
      </Routes>
    </div><br /><br />
    <Footer />
    </BrowserRouter>
            
  );
}
export default App;
