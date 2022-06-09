import './App.css';
import Button from './components/Button'
import ShortenLink from './components/ShortenLink'

function App() {
  function openMenu() {
    var x = document.getElementById("navbar");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  return (
    <>
      <div className='page-container'>
        <header>
          <img className='logo' src={require('./images/logo.svg').default} alt='logo' width="121" height="33"></img>
          <button className='menu-icon' onClick={openMenu}><img src={require('./images/menu.svg').default} alt='menu'></img></button>
          <nav id='navbar'>
            <a href="#0">Features</a>
            <a href="#0">Pricing</a>
            <a href="#0">Resources</a>
            <hr></hr>
            <a className='login' href="#0">Login</a>
            <Button text={"Sign Up"} width={"100%"}/>
          </nav>
        </header>
        
        <main>
          <section className='main'>
            <div className='img-wrapper'><img src={require('./images/illustration-working.svg').default} alt='illustration'></img></div>
            <div className="container">
              <h1>More than just shorter links</h1>
              <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
              <Button text={"Get Started"} width={"200px"}/>
            </div>
            <ShortenLink />
          </section>
          <section className='statistics'>
            <h2>Advanced Statistics</h2>
            <p className='track'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div className='line'></div>
            <div className='brand'>
              <div className='img-wrap'><img src={require('./images/icon-brand-recognition.svg').default} alt='brand'></img></div>
              <h3>Brand Recognition</h3>
              <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
            </div>
            <div className='records'>
              <div className='img-wrap'><img src={require('./images/icon-detailed-records.svg').default} alt='records'></img></div>
              <h3>Detailed Records</h3>
              <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div className='customization'>
              <div className="img-wrap"><img src={require('./images/icon-fully-customizable.svg').default} alt='customization'></img></div>
              <h3>Fully Customizable</h3>
              <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
          </section>
          <section className='getStarted'>
            <h2>Boost your links today</h2>
            <Button text={"Get Started"} width={"160px"}/>
          </section>
        </main>
        <footer>
          <img className='white-logo' src={require('./images/logo.svg').default} alt='logo'></img>
          <div className='features'>
            <h4>Features</h4>
            <ul>
              <li><a href='#0'>Link Shortening</a></li>
              <li><a href='#0'>Branded Links</a></li>
              <li><a href='#0'>Analytics</a></li>
            </ul>
          </div>
          <div className='resources'>
            <h4>Resources</h4>
            <ul>
              <li><a href='#0'>Blog</a></li>
              <li><a href='#0'>Developers</a></li>
              <li><a href='#0'>Support</a></li>
            </ul>
          </div>
          <div className='company'>
            <h4>Company</h4>
            <ul>
              <li><a href='#0'>About</a></li>
              <li><a href='#0'>Our Team</a></li>
              <li><a href='#0'>Careers</a></li>
              <li><a href='#0'>Contact</a></li>
            </ul>
          </div>
          <div className="icons">
            <ul>
              <li><a href='#0'><img src={require('./images/icon-facebook.svg').default} alt=''></img></a></li>
              <li><a href='#0'><img src={require('./images/icon-twitter.svg').default} alt=''></img></a></li>
              <li><a href='#0'><img src={require('./images/icon-pinterest.svg').default} alt=''></img></a></li>
              <li><a href='#0'><img src={require('./images/icon-instagram.svg').default} alt=''></img></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App;
