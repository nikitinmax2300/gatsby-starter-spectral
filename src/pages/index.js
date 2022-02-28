import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
              <a href="https://opensea.io/collection/prolang-dev" target="_blank"
          rel="noopener" className="button primary">
                Explore NFT
              </a>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
          A collection of beautiful code snippets with brilliant solutions for the most popular algos out there, soaked with intellectual efforts and knowledge.
          </h2>
          <p>
          More programming languages and support for creating/selling your own code coming soon.
            <br />
            Join our community of code and NFT enthusiasts!
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
          100% of ALL PROFITS/ROYALTIES will be sent to Humanitarian Aid for Ukrainian🇺🇦 people, kids, seniors, providing them with shelters, food and medicine.
          </h2>
          <p>
          All transactions are verifiable on Polygon Blockchain.
          </p>
          <p>
          Help Ukraine🇺🇦! Help the world!🌎 
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Idea
          </h2>
          <p>
            This project was created with an itention of helping people, sharing the knowledge, uniting software engineers and NFT enthusiasts through creation and engagement with coding languages. It`s not a overhyped animal pic. It`s a meaningful, commented and tested source code for the most popular and complicated algos in web build by community for community. 
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
          Rarity
          </h2>
          <p>
          The current supply of all NFT`s is 100 pieces of JavaScript code snippest.
            They collection features different color themes and will support more languages.
            Rarity is numerical so the the bigger the number the less rare it becomes.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
        <header className="major">
          <h2>Love coding? Great, mint and sell your own NFT`s </h2>
          <p>
            This part is being developed soon... It might look like this...
          </p>
        </header>
        {/* <section className="spotlight"> */}
        <div className="image">
          <img src={pic4} alt="" />
        </div>
        <div className="content">
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Mint
            </a>
          </li>
          </ul>
        </div>
        {/* <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul> */}
         {/* </section> */}
    </section>

    {/* <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section> */}
  </Layout>
);

export default IndexPage;
