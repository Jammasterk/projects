import React from "react"
import styled from "styled-components"
import Lobby from "./assets/lobby.png"
import Reception from "./assets/reception.png"
import Chairs from "./assets/chairs.png"
import Meeting from "./assets/meeting-1.JPG"
import Foyer from "./assets/foyer.jpg"
import People from "./assets/people.jpg"

const Wrapper = styled.div`
  /* background: #af9c89; */
  img {
    width: 100%;
    background-size: cover;
    height: 100vh;
  }
  .overlay {
    position: fixed;
    /* position: absolute; */
    width: 100%;
    height: 800vh;
    background: black;
    z-index: 3;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
  h1 {
    position: absolute;
    margin: 25% auto;
    top: 0;
    font-size: 100px;
    color: #fff;
    text-align: center;
    z-index: 4;
    width: 100%;
  }

  section {
    width: 90%;
    margin: 0 auto;
  }
  .section-image {
    width: 450px;
    height: 260px;
  }

  .about {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-gap: 8em;
    margin-top: 6em;
  }
  ul {
    /* width: 90%; */
    /* line-height: 10% */
  }

  li {
    margin:  0 50px;
  }

  .about-list {
    list-style: none;
  }
  .underline {
    width: 130px;
    height: 1px;
    background: #000;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
  }

  .info {
    display: grid;
    grid-template-columns: repeat(2, 45%);
  }

  .info-right {
    display: grid;
    grid-template-columns: repeat(2, 45%);
  }

  .services {
    margin-top: 2em;
  }

  .about-list{
      width: 90%;
      padding: 0
  }

  .info-text {
    width: 100%;
    border-right: 1px solid black;
    padding-right: 20px;
    margin-right: 8em;
  }
  .service-image {
    max-width: 450px;
    height: 260px;
    margin-left: 6em;
  }

  .info-right {
    margin-top: 4em;
  }

  .two {
    border-right: none;
    border-left: 1px solid black;
    padding-left: 20px;
    margin-left: 0;
  }
  .right {
    margin-left: 0;
  }

  .team {
    margin-top: 4em;
  }
  .team-text {
    margin-top: 4em;
  }

  .team-image{
      max-height: 400px
  }

  @media only screen and (max-width: 1090px) {
    .section-image {
      max-width: 375px;
      height: 260px;
    }

    .about{
        display: block
    }

    .service-image {
      max-width: 375px;
      height: 260px;
      margin-left: 0
    }
    .info{
        display: block
    }
  }
`;

const App = () =>{
    return (
      <Wrapper>
        <div>
          <div className="splash">
            <img src={Lobby} alt="" />
            {/* <div className="overlay"></div> */}
            <h1>Sissian & Associates</h1>
          </div>
        </div>
            <div className="ring"></div>
        <section>
          <div className="about">
            <div className="left">
              <h2>About Us</h2>
              <div className="underline"></div>
              <img className="section-image" src={Reception} alt="" />
            </div>
            <ul className="about-list">
              <li>
                Sissian & Associates is a results driven, relationship-focused
                commercial law firm delivering top-tier legal services and
                exceptional value to private and commercial clients. Our clients
                include multi-national corporations, listed entities, private
                companies, and high net worth individuals.
              </li>
              <li>
                By focusing on our clients’ long-term success, taking the time
                to understand their unique circumstances and providing advice
                that is proactive and commercially sound, we become a true
                business partner with our clients.
              </li>
              <li>
                We undertake transactional and litigious corporate and
                commercial work across a broad range of markets and industries.
              </li>
              <li>
                We regularly provide services to people and organisations
                referred by other law firms and professional contacts.
              </li>
            </ul>
          </div>
          <div className="services">
            <div className="info">
              <div className="info-text">
                <h6 style={{ fontWeight: "bold" }}>Commercial Litigation</h6>
                <p>
                  Sissian & Associates is experienced and resourced to conduct
                  any type of commercial litigation and alternative dispute
                  resolution in Australia. We stay out of Court where we can but
                  when we go to Court, we are known as vigorous litigators who
                  fight hard and win.
                </p>
                <p>Our areas of specialist expertise include:</p>
                <ul>
                  <li>
                    Arbitration, mediation and private negotiation of commercial
                    disputes
                  </li>
                  <li>Contract disputes</li>
                  <li>Corporations law</li>
                  <li>Environment and planning</li>
                  <li>Government regulation</li>
                </ul>
              </div>
              <img className="service-image left" src={Chairs} alt="" />
            </div>
            <div className="info-right">
              <img className="service-image right" src={Meeting} alt="" />
              <div className="info-text two">
                <h6 style={{ fontWeight: "bold" }}>Private Advice</h6>
                <p>
                  Sissian & Associates offers experienced, reliable and
                  straight-forward general advice on a broad range of legal
                  matters including but not limited to:
                </p>
                <ul>
                  <li>Estate planning, wills and probate</li>
                  <li>Local council issues</li>
                  <li>Personal and family financial arrangements</li>
                  <li>Powers of Attorney and Guardianship</li>
                  <li>
                    Residential conveyancing, rural landholdings and associated
                    property r transactions
                  </li>
                </ul>
              </div>
            </div>
            <div className="info" style={{ marginTop: "4em" }}>
              <div className="info-text">
                <h6 style={{ fontWeight: "bold" }}>Conveyancing</h6>
                <p>
                  Whether you are buying or selling your home, investment
                  property (including off-the-plan properties), vacant land, or
                  business – Sissian & Associates will guide you throughout the
                  process towards a smooth and stress free settlement from:
                </p>
                <ul>
                  <li>
                    Arbitration, mediation and private negotiation of commercial
                    disputes
                  </li>
                  <li>Preparing your Contract of Sale</li>
                  <li>Reviewing and providing advise on your Contract</li>
                  <li>Conducting the necessary due diligence enquiries</li>
                  <li>Negotiating the terms of your Contract</li>
                  <li>Obtaining the required disclosure documents </li>
                  <li>Dealing with issues that may arise before settlement</li>
                  <li>Liaising with your lender regarding settlement</li>
                  <li>Preparing and managing your PEXA or paper settlement</li>
                </ul>
              </div>
              <img className="service-image left" src={Chairs} alt="" />
            </div>
            <div className="info-right">
              <img className="service-image right" src={Foyer} alt="" />
              <div className="info-text two">
                <h6 style={{ fontWeight: "bold" }}>Regulation</h6>
                <p>
                  Sissian & Associates has extensive experience in representing
                  individuals and companies in all forms of investigations and
                  regulatory matters including:
                </p>
                <ul>
                  <li>ASIC and ASX investigations</li>
                  <li>ATO investigations</li>
                  <li>Enforcement proceedings and prosecutions</li>
                  <li>ICAC hearings</li>
                  <li>Professional disciplinary matters</li>
                  <li>
                    Department of Agriculture, Water and the Environment
                    investigations and prosecutions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="team">
            <img className="team-image" src={People} alt="" />
            <div className="team-text">
            <h6 style={{ fontWeight: "bold" }}>Anthony John Sissian</h6>
              <p>
                Sissian & Associates was founded by Managing Partner Anthony
                Sissian. Anthony has extensive experience in dispute resolution
                and corporate/commercial litigation and general advice.
              </p>
              <p>
                Anthony was formerly 2IC of Litigation and Employment for Ernst
                and Young across the Oceania region. Prior to that role Anthony
                worked in top tier litigation firms including Atanaskovic
                Hartnell, Thomson Geer and Kemp Strang.
              </p>
              <h6 style={{ fontWeight: "bold" }}>Robyn Smith</h6>
              <p>
                Robyn Smith, who leads Sissian & Associates’ paralegal team, has
                been working in the legal industry for over 21 years. In Robyn’s
                words “There are not many parts of the law I haven’t been
                exposed to over the years.” Robyn’s team brings experience
                energy and a wealth of knowledge to assist Sissian & Associates
                to deliver the highest possible service to its clients.
              </p>
            </div>
          </div>
        </section>
      </Wrapper>
    );
}

export default App