import React from 'react';
import BM from 'react-burger-menu';

var Menu = BM.bubble;

export default class SideNav extends React.Component {

  render() {
    return (
      <div id="outer-container">
        <Menu isOpen noOverlay customCrossIcon={ false } >
          <p id="menu-header"><img src="/img/logo_white.png"/>healthfront</p>
          <a id="status" className="menu-item" href="/status"><i className="fa fa-heart-o"></i>status</a>
          <a id="status" className="menu-item" href="/activity"><i className="fa fa-male"></i>&nbsp;&nbsp;activity</a>
          <a id="status" className="menu-item" href="/sleep"><i className="fa fa-moon-o"></i>sleep</a>
          <a id="status" className="menu-item" href="/tests"><i className="fa fa-file-text-o"></i>tests</a>
          <p className="menu-footer">Built with <i className="fa fa-heart red"></i> by Aditya Srinivasan<br/>Source code available at <a href="https://github.com/as577/healthfrontx">GitHub</a></p>
      </Menu>
      </div>
    );
  }

}
