import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Makepayment from './components/Makepayment';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import slide1 from "../src/Images/electronics.jpeg"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <h1>SHOPFINITY</h1>
      </header>
       <div class="container-fluid">
        
        <section class="row">
          
            <div class="col-md-12">
                <nav class="navbar navbar-expand-md navbar-light bg-light nav shadow p-4">
                    <a href="/" class="navbar-brand text-primary">ShopFinity</a>
                    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                        <span class="navbar-toggler-icon"></span>

                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                      <div className='ms-auto gap-4 d-flex'></div>
                        <div class="navbar-nav">
                          
                          <nav>
                            <button className='btn btn-success'>
                            <Link to={'/signup'} className='navlinks'>Signup</Link>
                            </button>
                            < button className='btn btn-success'>
                            <Link to={'/signin'} className='navlinks'>Signin</Link>
                            </button>
                            <Link to={'/addproduct'} className='navlinks'>Addproduct</Link>
                          </nav>
                          
                        </div>
                    </div>

                </nav>
            </div>
        </section>
        </div>
        <div className='col-md-12'>
            <div id='mycarousel' className='carousel slide' data-bs-ride="carousel">
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img src={slide1} alt='slide1' className='d-block w-100 carousel_img'/>
                </div>
                <div className='carousel-item'></div>
                <div className='carousel-item'></div>
                

            </div>
            <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev" role='button'></a>
            <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next" role='button'></a>
        </div>
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
