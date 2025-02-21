import './earnings.scss';
import img from '../../assets/earnings.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const earnings = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, )
  return <section className='earnings'>
<div className="earnings__container wrapper" >
    <div className="earnings__left" data-aos='fade-right'>
        <img src={img} alt="earnings" />
    </div>
    <div className="earnings__right " data-aos='zoom-in-up'>
        <h2>Track your earnings and cryptocode made it easy</h2>
        <p>
            Nulla dui ultrices sed nam ligula dignissim tellus. Sem semper Lorem
            facilisis ut amet tincidunt adiposcing maecenas.
        </p>
        <a href="#" className="btn">
            GET STARTED
        </a>
    </div>
</div>
  </section>
}

export default earnings