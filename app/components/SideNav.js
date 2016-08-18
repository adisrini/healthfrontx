import React from 'react';
import BM from 'react-burger-menu';

var Menu = BM.bubble;

export default class SideNav extends React.Component {

  render() {
    return (
      <div id="outer-container">
        <Menu isOpen noOverlay customCrossIcon={ false } >
          <p id="menu-header"><img src="/img/logo_white.png"/>healthfront</p>
          <nav className="cl-effect-21" id="cl-effect-21">
            <a id="status" className="menu-item" href="/status"><i className="fa fa-fw fa-heart-o"></i>status</a>
          </nav>
          <nav className="cl-effect-21" id="cl-effect-21">
            <a id="activity" className="menu-item" href="/activity"><i className="fa fa-fw fa-child"></i>activity</a>
          </nav>
          <nav className="cl-effect-21" id="cl-effect-21">
            <a id="sleep" className="menu-item" href="/sleep"><i className="fa fa-fw fa-moon-o"></i>sleep</a>
          </nav>
          <nav className="cl-effect-21" id="cl-effect-21">
            <a id="tests" className="menu-item" href="/tests"><i className="fa fa-fw fa-file-text-o"></i>tests</a>
          </nav>
          <p className="menu-footer">Built with <i className="fa fa-heart red"></i> by <a href="http://adityasrinivasan.io">Aditya Srinivasan</a><br/>Source code available at <a href="https://github.com/as577/healthfrontx">GitHub</a></p>
      </Menu>
      </div>
    );
  }

}
