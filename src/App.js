import React, { Component } from 'react';
import device_image from './device.png';
import google_play_badge from './google_play_badge.png';
import appstore_badge from './appstore_badge.svg';
import GAListener from './components/ga_listener';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <GAListener>
          <div className="container">
            <div className="row">
              <div className="col s12 m6 l6 text-s-center">
                <img className="responsive-img" src={device_image} alt="WiFi Guard screen" />
              </div>
              <div className="col s12 m6 l6">
                <div className="section hide-on-small-only"></div>
                <div className="section hide-on-small-only"></div>
                <div className="section hide-on-med-and-down"></div>
                <div className="section hide-on-med-and-down"></div>
                <div className="section hide-on-med-and-down"></div>
                <h1 className="h1 text-s-center flow-text" id="title">WiFi Guard</h1>
                <p className="flow-text" id="description">WiFi Guard is an iOS application to scan and detect all connected devices in your Wi-Fi network. It will send notifications about new devices and will help to protect your network from intruders.</p>
                <div className="row">
                  <div className="col s12 m12 l6 text-s-center">
                    <a href="https://itunes.apple.com/app/id1030022183" title="Download on the App Store">
                      <img className="responsive-img" alt='Download on the App Store' id="appstore_badge" src={appstore_badge} />
                    </a>
                  </div>
                  <div className="col s12 m12 l6 text-s-center">
                    <a href="https://play.google.com/store/apps/details?id=com.wifiguardapp.wifiguard" title="Download on the App Store">
                      <img className="responsive-img" alt='Get it on Google Play' id="google_play_badge" src={google_play_badge} />
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    Available for Android, iPhone, iPad, and Apple TV
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GAListener>
      </Router>
    );
  }
}

export default App;
