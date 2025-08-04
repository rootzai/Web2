import React, { useState } from 'react';
import './App.css';

// Import logos
import fanupLogoTrans from './assets/NewLogo-trans.png';
import fanupLogoWhite from './assets/NewLogo-whitepop.png';

// Import fan images
import nflFan from './assets/nfl-fan.jpg';
import nbaFan from './assets/nba-fan.jpg';
import mlbFan from './assets/mlb-fan.jpg';
import nascarFan from './assets/nascar-fan.jpg';

// Import sports category images
import footballFans from './assets/football-fans.jpg';
import basketballFans from './assets/basketball-fans.jpg';
import baseballFans from './assets/baseball-fans.jpg';
import soccerFans from './assets/soccer-fans.jpg';
import hockeyFans from './assets/hockey-fans.jpg';

// Import mobile app GIFs
import teamHomepage from './assets/TeamHomepage(START)GIFv1.gif';
import profilePage from './assets/ProfilePage-Rewards&Activityv1.1GIF.gif';
import returnTickets from './assets/ReturnTickets-YourTicketsGIF.gif';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const HomePage = () => (
    <div className="nike-app">
      {/* Header */}
      <header className="nike-header">
        <div className="nike-top-bar">
          <span>Transform Your Fanbase • Build Championship Loyalty</span>
          <div className="nike-top-links">
            <a href="#find">Find a Store</a>
            <a href="#help">Help</a>
            <a href="#join">Join Us</a>
            <a href="#signin">Sign In</a>
          </div>
        </div>
        
        <nav className="nike-nav">
          <div className="nike-nav-content">
            <img src={fanupLogoTrans} alt="FanUp.ai" className="nike-logo" />
            <div className="nike-nav-links">
              <button onClick={() => setCurrentPage('football')} className="nike-nav-link">Football</button>
              <button onClick={() => setCurrentPage('basketball')} className="nike-nav-link">Basketball</button>
              <button onClick={() => setCurrentPage('baseball')} className="nike-nav-link">Baseball</button>
              <button onClick={() => setCurrentPage('soccer')} className="nike-nav-link">Soccer</button>
              <button onClick={() => setCurrentPage('hockey')} className="nike-nav-link">Hockey</button>
              <button onClick={() => scrollToSection('system')} className="nike-nav-link">System</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="nike-hero">
        <div className="nike-hero-content">
          <div className="nike-hero-text">
            <img src={fanupLogoTrans} alt="FanUp.ai" className="hero-logo" />
            <h1 className="nike-hero-title">
              UNLOCK THE<br />
              FUTURE OF<br />
              FAN VALUE
            </h1>
            <p className="nike-hero-subtitle">
              From fixing an operational problem to building the next multi-billion-dollar asset class in sports
            </p>
            <div className="nike-hero-buttons">
              <button onClick={() => scrollToSection('strategy')} className="nike-btn nike-btn-primary">
                SEE 3-PHASE STRATEGY
              </button>
              <button onClick={() => scrollToSection('system')} className="nike-btn nike-btn-secondary">
                HOW IT WORKS
              </button>
            </div>
          </div>
          <div className="nike-hero-image">
            <img src={nflFan} alt="NFL Fan at Levi's Stadium" />
          </div>
        </div>
      </section>

      {/* 3-Phase Strategy Section */}
      <section id="strategy" className="nike-strategy">
        <div className="nike-container">
          <div className="nike-section-header">
            <img src={fanupLogoTrans} alt="FanUp.ai" className="section-logo" />
            <h2>THE FANUP.AI 3-PHASE STRATEGY</h2>
            <p>18-24 months • Each US market worth $billions • First mover wins the market</p>
          </div>
          
          <div className="nike-strategy-grid">
            <div className="nike-strategy-card">
              <div className="strategy-image">
                <img src={nbaFan} alt="NBA Fans" />
              </div>
              <div className="strategy-content">
                <div className="strategy-phase">PHASE 1</div>
                <h3>FILL UNUSED SEATS</h3>
                <div className="strategy-hashtag">#FanUpSoldout</div>
                <p>Optimize loyalty/rewards to create sellouts and drive in-stadium purchasing</p>
                <div className="strategy-metrics">
                  <div className="metric">40-60% no-show reduction</div>
                  <div className="metric">$4M-$8M recaptured revenue</div>
                </div>
              </div>
            </div>

            <div className="nike-strategy-card">
              <div className="strategy-image">
                <img src={mlbFan} alt="MLB Fans" />
              </div>
              <div className="strategy-content">
                <div className="strategy-phase">PHASE 2</div>
                <h3>IDENTIFY HIGH-VALUE FANS</h3>
                <div className="strategy-hashtag">#FanUpPatentPending</div>
                <p>Rank fans by spending and avidity over time</p>
                <div className="strategy-metrics">
                  <div className="metric">Behavioral segmentation</div>
                  <div className="metric">$40-65M+ asset value</div>
                </div>
              </div>
            </div>

            <div className="nike-strategy-card">
              <div className="strategy-image">
                <img src={nascarFan} alt="NASCAR Fans" />
              </div>
              <div className="strategy-content">
                <div className="strategy-phase">PHASE 3</div>
                <h3>TEAMS SELL ACCESS TO FAN DATABASES</h3>
                <div className="strategy-hashtag">#FanUpROFA</div>
                <p>Convert fanbase into a saleable asset platform for local marketers</p>
                <div className="strategy-metrics">
                  <div className="metric">1,600% ROI</div>
                  <div className="metric">New asset class</div>
                </div>
              </div>
            </div>
          </div>

          <div className="strategy-footer">
            <h3>EACH US MARKET WORTH $BILLIONS</h3>
            <p><em>Immediate Revenue Available to First Mover Teams</em></p>
          </div>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="nike-sports">
        <div className="nike-container">
          <h2 className="nike-section-title">DOMINATE EVERY SPORT</h2>
          <div className="nike-sports-grid">
            <div className="nike-sport-card" onClick={() => setCurrentPage('football')}>
              <img src={footballFans} alt="Football Fans" />
              <div className="nike-sport-overlay">
                <h3>FOOTBALL</h3>
                <p>Dominate Game Day</p>
                <button className="nike-sport-btn">Explore Football</button>
              </div>
            </div>
            <div className="nike-sport-card" onClick={() => setCurrentPage('basketball')}>
              <img src={basketballFans} alt="Basketball Fans" />
              <div className="nike-sport-overlay">
                <h3>BASKETBALL</h3>
                <p>Court Mastery</p>
                <button className="nike-sport-btn">Explore Basketball</button>
              </div>
            </div>
            <div className="nike-sport-card" onClick={() => setCurrentPage('baseball')}>
              <img src={baseballFans} alt="Baseball Fans" />
              <div className="nike-sport-overlay">
                <h3>BASEBALL</h3>
                <p>Season Loyalty</p>
                <button className="nike-sport-btn">Explore Baseball</button>
              </div>
            </div>
            <div className="nike-sport-card" onClick={() => setCurrentPage('soccer')}>
              <img src={soccerFans} alt="Soccer Fans" />
              <div className="nike-sport-overlay">
                <h3>SOCCER</h3>
                <p>Global Fanbase Activation</p>
                <button className="nike-sport-btn">Explore Soccer</button>
              </div>
            </div>
            <div className="nike-sport-card" onClick={() => setCurrentPage('hockey')}>
              <img src={hockeyFans} alt="Hockey Fans" />
              <div className="nike-sport-overlay">
                <h3>HOCKEY</h3>
                <p>Ice Cold Performance</p>
                <button className="nike-sport-btn">Explore Hockey</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reward System Section */}
      <section className="nike-rewards">
        <div className="nike-container">
          <div className="nike-section-header">
            <img src={fanupLogoTrans} alt="FanUp.ai" className="section-logo" />
            <h2>WHY FANS RETURN TICKETS: THE REWARD SYSTEM</h2>
          </div>
          
          <div className="nike-rewards-grid">
            <div className="nike-reward-card">
              <div className="reward-icon">🎯</div>
              <h3>EARN LOYALTY POINTS</h3>
              <p>Return unused tickets = Instant points in your account. Build your balance for bigger rewards.</p>
            </div>
            <div className="nike-reward-card">
              <div className="reward-icon">⬆️</div>
              <h3>GET PREMIUM UPGRADES</h3>
              <p>Use points for seat upgrades, VIP experiences, exclusive merchandise, and priority access.</p>
            </div>
            <div className="nike-reward-card">
              <div className="reward-icon">🎁</div>
              <h3>UNLOCK EXCLUSIVE REWARDS</h3>
              <p>Access team experiences, player meet & greets, and rewards only available to loyal fans.</p>
            </div>
            <div className="nike-reward-card">
              <div className="reward-icon">📱</div>
              <h3>REAL-TIME NOTIFICATIONS</h3>
              <p>Get instant alerts when upgrades become available. First to respond gets the upgrade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Flow Section */}
      <section id="system" className="nike-system">
        <div className="nike-container">
          <div className="nike-section-header">
            <img src={fanupLogoTrans} alt="FanUp.ai" className="section-logo" />
            <h2>THE COMPLETE FAN JOURNEY</h2>
          </div>
          
          <div className="nike-system-grid">
            <div className="nike-system-step">
              <div className="step-number">1</div>
              <h3>DECLARE ATTENDANCE</h3>
              <p>Season ticket holders declare if they're attending (Green), deciding (Yellow), or not attending (Red)</p>
            </div>
            <div className="nike-system-step">
              <div className="step-number">2</div>
              <h3>RETURN FOR POINTS</h3>
              <p>Can't attend? Return your ticket and earn loyalty points instantly. No waste, all reward.</p>
            </div>
            <div className="nike-system-step">
              <div className="step-number">3</div>
              <h3>SET UPGRADE PREFERENCES</h3>
              <p>Tell us what upgrades you want: better seats, VIP access, exclusive experiences.</p>
            </div>
            <div className="nike-system-step">
              <div className="step-number">4</div>
              <h3>GET INSTANT ALERTS</h3>
              <p>Receive real-time notifications when your preferred upgrades become available.</p>
            </div>
            <div className="nike-system-step">
              <div className="step-number">5</div>
              <h3>CLAIM YOUR UPGRADE</h3>
              <p>First to respond gets the upgrade. Use points or get special pricing for loyalty.</p>
            </div>
            <div className="nike-system-step">
              <div className="step-number">6</div>
              <h3>ENJOY PREMIUM EXPERIENCE</h3>
              <p>Experience the game like never before. Your loyalty pays off with unforgettable moments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="nike-metrics">
        <div className="nike-container">
          <div className="nike-section-header">
            <img src={fanupLogoTrans} alt="FanUp.ai" className="section-logo" />
            <h2>PROVEN PERFORMANCE METRICS</h2>
          </div>
          <div className="nike-metrics-grid">
            <div className="nike-stat">
              <div className="nike-stat-number">40-60%</div>
              <div className="nike-stat-label">NO-SHOW REDUCTION</div>
            </div>
            <div className="nike-stat">
              <div className="nike-stat-number">$4M-$8M</div>
              <div className="nike-stat-label">REVENUE RECOVERY</div>
            </div>
            <div className="nike-stat">
              <div className="nike-stat-number">85%+</div>
              <div className="nike-stat-label">SEAT UTILIZATION</div>
            </div>
            <div className="nike-stat">
              <div className="nike-stat-number">1,600%</div>
              <div className="nike-stat-label">AVERAGE ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section className="nike-showcase">
        <div className="nike-container">
          <div className="nike-showcase-header">
            <img src={fanupLogoTrans} alt="FanUp.ai" className="showcase-logo" />
            <h2 className="nike-section-title">SEE IT IN ACTION</h2>
          </div>
          <div className="nike-showcase-grid">
            <div className="nike-showcase-item">
              <img src={teamHomepage} alt="Team Integration" />
              <h4>TEAM INTEGRATION</h4>
              <p>White-label system embedded in team apps</p>
            </div>
            <div className="nike-showcase-item">
              <img src={profilePage} alt="Fan Tracking" />
              <h4>FAN TRACKING</h4>
              <p>14,500 points, rewards, complete activity history</p>
            </div>
            <div className="nike-showcase-item">
              <img src={returnTickets} alt="Ticket System" />
              <h4>TICKET SYSTEM</h4>
              <p>Return tickets, get upgrades, earn rewards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Championship Results Section */}
      <section className="nike-section" style={{background: '#f8f9fa'}}>
        <div className="nike-container">
          <div className="nike-section-header">
            <img src={fanupLogoWhite} alt="FanUp.ai" className="section-logo" />
            <h2>CHAMPIONSHIP RESULTS</h2>
          </div>
          
          <div className="results-card">
            <h3>ANONYMOUS LA LIGA TEAM</h3>
            <div className="results-grid">
              <div className="result-item">
                <div className="result-label">No-Show Reduction</div>
                <div className="result-value">45%</div>
              </div>
              <div className="result-item">
                <div className="result-label">Fan Satisfaction</div>
                <div className="result-value confidential">██%</div>
              </div>
              <div className="result-item">
                <div className="result-label">Additional Revenue</div>
                <div className="result-value">€2.9M</div>
              </div>
            </div>
            
            <div className="results-highlight">
              <div className="highlight-amount">€2.9M</div>
              <div className="highlight-label">ADDITIONAL REVENUE</div>
            </div>
            
            <div className="artmo-disclaimer">
              <p><strong>CONFIDENTIAL:</strong> Results shown are proprietary data from ARTMO FanUp.ai's patent-pending technology. Some figures have been redacted to protect confidential performance metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nike-cta">
        <div className="nike-container">
          <div className="nike-cta-header">
            <img src={fanupLogoWhite} alt="FanUp.ai" className="cta-logo" />
          </div>
          <h2 className="nike-cta-title">JUST DO IT</h2>
          <p className="nike-cta-subtitle">Transform your fanbase. Dominate attendance. Build championship loyalty.</p>
          <div className="nike-cta-buttons">
            <button className="nike-btn nike-btn-primary">Start Your System</button>
            <button className="nike-btn nike-btn-secondary">Schedule Demo</button>
          </div>
        </div>
      </section>
    </div>
  );

  const SportPage = ({ sport, title, description }) => (
    <div className="nike-app">
      <header className="nike-header">
        <div className="nike-top-bar">
          <span>Transform Your Fanbase • Build Championship Loyalty</span>
        </div>
        <nav className="nike-nav">
          <div className="nike-nav-content">
            <img src={fanupLogoTrans} alt="FanUp.ai" className="nike-logo" />
            <button onClick={() => setCurrentPage('home')} className="nike-btn nike-btn-secondary">
              ← Back to Home
            </button>
          </div>
        </nav>
      </header>

      <section className="nike-sport-hero">
        <div className="nike-container">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="sport-placeholder">
            <h2>Coming Soon</h2>
            <p>Sport-specific content and case studies will be added here.</p>
            <p>This page will include:</p>
            <ul>
              <li>League partnerships and implementations</li>
              <li>Sport-specific use cases and success stories</li>
              <li>Unique features for {sport} teams</li>
              <li>ROI data and performance metrics</li>
              <li>Fan testimonials and case studies</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render different pages based on currentPage state
  switch (currentPage) {
    case 'football':
      return <SportPage sport="football" title="FOOTBALL DOMINATION" description="Maximize game day attendance and fan engagement for NFL teams" />;
    case 'basketball':
      return <SportPage sport="basketball" title="BASKETBALL MASTERY" description="Court-side engagement and loyalty programs for NBA teams" />;
    case 'baseball':
      return <SportPage sport="baseball" title="BASEBALL LOYALTY" description="Season-long fan engagement for MLB teams" />;
    case 'soccer':
      return <SportPage sport="soccer" title="SOCCER ACTIVATION" description="Global fanbase engagement for MLS teams" />;
    case 'hockey':
      return <SportPage sport="hockey" title="HOCKEY PERFORMANCE" description="Ice-cold fan retention for NHL teams" />;
    default:
      return <HomePage />;
  }
}

export default App;

