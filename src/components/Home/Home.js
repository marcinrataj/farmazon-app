import React from 'react';
import './Home.css'
import Product from './Product/Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                     src="https://i.imgur.com/1jxFbXZ.png"
                     alt=""/>
                {/*===============================Products under==================================================*/}
                <div className='home__row'>
                    <Product
                        id='23456'
                        title='Zakrzywiony monitor 27" 75Hz LED HDMI VGA, Posiada Wbudowane głośniki'
                        price='209.97'
                        image='https://i.pinimg.com/originals/2d/c8/19/2dc819f8ed0a0ec1d0ab05f0ef2c52e8.jpg'
                        rating={4}/>
                    <Product
                        id='82604'
                        title='2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Błękitny (4 Generacja)'
                        price='629.00'
                        image='https://i.pinimg.com/originals/12/d6/14/12d61457101ffd1ff7f3e7a825b2de84.jpg'
                        rating={5}/>

                </div>
                <div className='home__row'>
                    <Product
                        id='21316'
                        title='Czysty kod. Podręcznik dobrego programisty'
                        price='25.33'
                        image='https://i.pinimg.com/originals/59/2b/38/592b3811c2ff0d3a75cb6595e8a990cc.jpg'
                        rating={4}/>
                    <Product
                        id='93872'
                        title='Smartfon SAMSUNG Galaxy S21 8/128GB 5G 6.2" 120Hz Szary'
                        price='499.99'
                        image='https://i.pinimg.com/originals/15/76/f8/1576f85248b8390118835d65280a1e7b.jpg'
                        rating={5}/>
                    <Product
                        id='92545'
                        title='Projektor filmowy Bluetooth HD ze 100-calowym ekranem do kina domowego'
                        price='29.99'
                        image='https://i.pinimg.com/originals/ef/13/5d/ef135ddcf2501212d22ff9c3de4826f2.jpg'
                        rating={3}/>
                </div>
                <div className='home__row'>
                    <Product
                        id='92539'
                        title='Kamera internetowa 1080P do wideokonferencji z mikrofonem, 2 głośnikami'
                        price='76.49'
                        image='https://i.pinimg.com/originals/58/f2/bf/58f2bfb97dc219ed1c5a30aba9f0f3fc.jpg'
                        rating={3}/>
                    <Product
                        id='10654'
                        title='Klawiatura Apple Magic dla iPad Pro 11 cali'
                        price='324.99'
                        image='https://i.pinimg.com/originals/bf/42/e0/bf42e0fadcb1a44defff80d523a681a2.jpg'
                        rating={5}/>
                    <Product
                        id='10934'
                        title='Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD'
                        price='999.00'
                        image='https://i.pinimg.com/originals/ca/b6/11/cab611944c6d3b7ccab65744a91cb256.jpg'
                        rating={5}/>
                </div>
                <div className='home__row'>
                    <Product
                        id='97832'
                        title='Zegarek sportowy GARMIN Fenix 6S Srebrno-czarny'
                        price='440.00'
                        image='https://i.pinimg.com/originals/fe/b5/cc/feb5cc1a686a1efd93d0bb44999ad34d.jpg'
                        rating={4}/>
                    <Product
                        id='57652'
                        title='Słuchawki nauszne JBL T560BT Czarny'
                        price='40.00'
                        image='https://i.pinimg.com/originals/76/cd/4f/76cd4f507cf05c215a92c2d3627379fc.jpg'
                        rating={3}/>
                    <Product
                        id='82224'
                        title='Klawiatura STEELSERIES Apex Pro'
                        price='259.00'
                        image='https://i.pinimg.com/originals/e0/56/e6/e056e6332dfd37797eca4f0d8b096cb2.jpg'
                        rating={4}/>

                </div>
            </div>
        </div>
    );
}

export default Home;