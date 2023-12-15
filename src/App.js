import logo from './logo.svg';
import cardPic from './cardPic.jpg'
import './App.css';

function App() {
  return (
   <div>  
      <header id='header' className='bg-dark py-4'>
        <div className="container d-flex justify-content-between">
            <a className='fs-5 text-white' href="#">Start Bootstrap</a>
            <ul className='list-unstyled d-flex justify-content-between '>
              <li className='px-2'><a className='fw-semibold text-dark-emphasis' href="#">Home</a></li>
              <li className='px-2'><a className='fw-semibold text-dark-emphasis' href="#">About</a></li>
              <li className='px-2'><a className='fw-semibold text-dark-emphasis' href="#">Contact</a></li>
              <li className='px-2'><a className='fw-semibold  text-white' href="#">Blog</a></li>
            </ul>
        </div>
      </header>

      <section id='homeSection ' className='border-bottom '>
          <div className="container py-5 mb-4 text-center my-5">
              <h1>Welcome to Blog Home!</h1>
              <p>A Bootstrap 5 starter layout for your next blog homepage</p>
          </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-8 px-3 py-4  "> 
                 <div className="cardItem mb-3">
                  <img className='rounded-top' src={cardPic} alt=""  width={400}/>
                  <small className='px-4 small text-muted'>January 1, 2023</small>
                  <h2 className='px-4 '>Post Title</h2>
                  <p className='px-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                  <a className='mx-4 my-3 btn btn-primary' href="#">Read more →</a>
                </div>
                <div className="cardItem mb-3">
                  <img className='rounded-top' src={cardPic} alt=""  width={400}/>
                  <small className='px-4 small text-muted'>January 1, 2023</small>
                  <h2 className='px-4 '>Post Title</h2>
                  <p className='px-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                  <a className='mx-4 my-3 btn btn-primary' href="#">Read more →</a>
                </div>
                <div className="cardItem mb-3">
                  <img className='rounded-top' src={cardPic} alt=""  width={400}/>
                  <small className='px-4 small text-muted'>January 1, 2023</small>
                  <h2 className='px-4 '>Post Title</h2>
                  <p className='px-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                  <a className='mx-4 my-3 btn btn-primary' href="#">Read more →</a>
                </div>
                <div className="cardItem mb-3">
                  <img className='rounded-top' src={cardPic} alt=""  width={400}/>
                  <small className='px-4 small text-muted'>January 1, 2023</small>
                  <h2 className='px-4 '>Post Title</h2>
                  <p className='px-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                  <a className='mx-4 my-3 btn btn-primary' href="#">Read more →</a>
                </div>
            </div>



            <div className="col-4  px-5 py-4">
                <div className="searchCard border rounded mb-4 px-3 py-2">
                    <h4 className='border-bottom py-2'>Search</h4>
                    <input className='my-3 p-2 rounded-start'  type="text" placeholder='Enter Search Term'  />
                    <button className='p-2 bg-primary text-white rounded-end' type='button'>Go</button>
                </div>

                <div className="categoriesCard border rounded mb-4 px-3 py-2">
                    <h4 className='border-bottom py-2'>Categories</h4>
                    <div className="row">
                      <div className="col-6">
                        <ul className='list-unstyled'>
                          <li><a href="#">Web Design</a></li>
                          <li><a href="#">HTML</a></li>
                          <li><a href="#">Freebies</a></li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className='list-unstyled'>
                          <li><a href="#">Javascript</a></li>
                          <li><a href="#">CSS</a></li>
                          <li><a href="#">Tutorials</a></li>
                        </ul>
                      </div>
                    </div>
                </div>

                <div className="sideCard border rounded mb-4 px-3 py-2">
                    <h4 className='border-bottom py-2'>Side Widget</h4>
                    <p>
                    You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!
                    </p>
                </div>
            </div>

          </div>
        </div>
      </section>

      <section id="footer" className='py-5 bg-dark'>
          <div className="container">
            <p className='m-0 text-center text-white'>Copyright © Your Website 2023</p>
          </div>
      </section>
   </div>
  );
}

export default App;
