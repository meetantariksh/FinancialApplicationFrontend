/**
 *
 * GeneralUser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import UserDashboard from './GeneralUserDashBoard/Loadable';

import {ProtectedRoute} from '../../../components/AuthenticationGuard';

import runFastClick from '../../../externalJS/UserDashboard/fastclick/lib/fastclick';
import runChartJS from '../../../externalJS/UserDashboard/Chart.js/dist/Chart.min';
import runGaugeJS from '../../../externalJS/UserDashboard/gauge.js/dist/gauge.min';
import runBootstrapProgressBar from '../../../externalJS/UserDashboard/bootstrap-progressbar/bootstrap-progressbar.min';
import runICheck from '../../../externalJS/UserDashboard/iCheck/icheck';

import '../../../externalJS/UserDashboard/Flot/jquery.flot';
import '../../../externalJS/UserDashboard/Flot/jquery.flot.pie.js';
import '../../../externalJS/UserDashboard/Flot/jquery.flot.time.js';
import '../../../externalJS/UserDashboard/Flot/jquery.flot.stack.js';
import '../../../externalJS/UserDashboard/Flot/jquery.flot.resize.js';
import '../../../externalJS/UserDashboard/flot.orderbars/js/jquery.flot.orderBars.js';
import '../../../externalJS/UserDashboard/flot-spline/js/jquery.flot.spline.min.js';
import '../../../externalJS/UserDashboard/flot.curvedlines/curvedLines.js';
import '../../../externalJS/UserDashboard/DateJS/build/date.js';
import '../../../externalJS/UserDashboard/jqvmap/dist/jquery.vmap.js';
import '../../../externalJS/UserDashboard/jqvmap/dist/maps/jquery.vmap.world.js';
import '../../../externalJS/UserDashboard/jqvmap/examples/js/jquery.vmap.sampledata.js';

import '../../../externalJS/UserDashboard/iCheck/skins/flat/green.css';
import '../../../externalJS/UserDashboard/bootstrap/dist/css/bootstrap.min.css';
import '../../../externalJS/UserDashboard/font-awesome/css/font-awesome.min.css';
import '../../../externalJS/UserDashboard/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css';
import '../../../externalJS/UserDashboard/jqvmap/dist/jqvmap.min.css';
import '../../../styles/UserDashboard/custom.css';

export class GeneralUser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount(){
    runFastClick();
    runChartJS();
    runGaugeJS();
    runBootstrapProgressBar();
    runICheck();
  }

  render() {
    return (
      <div id="bodyClassName" className="bodyClassName nav-md">

        <div className="container body">
          <div className="main_container">
            <div className="col-md-3 left_col ">
              <div className="left_col scroll-view">

                <div className="navbar nav_title" style={{border: 0}}>
                  <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>ARIAN Finance</span></a>
                </div>

                <div className="clearfix"></div>

                {/* User Info Component - Move */}
                <div className="profile clearfix">
                  <div className="profile_pic">
                    <img src="images/img.jpg" alt="..." className="img-circle profile_img"/>
                  </div>
                  <div className="profile_info">
                    <span>Welcome,</span>
                    <h2>John Doe</h2>
                  </div>
                </div>
                {/* User Info Component - Move */}
                <br />
                {/* Side Bar Component - Move */}
                <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                  <div className="menu_section">
                    <h3>General</h3>
                    <ul className="nav side-menu">
                      <li><a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="index.html">Dashboard</a></li>
                          <li><a href="index2.html">Dashboard2</a></li>
                          <li><a href="index3.html">Dashboard3</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-edit"></i> Forms <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="form.html">General Form</a></li>
                          <li><a href="form_advanced.html">Advanced Components</a></li>
                          <li><a href="form_validation.html">Form Validation</a></li>
                          <li><a href="form_wizards.html">Form Wizard</a></li>
                          <li><a href="form_upload.html">Form Upload</a></li>
                          <li><a href="form_buttons.html">Form Buttons</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-desktop"></i> UI Elements <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="general_elements.html">General Elements</a></li>
                          <li><a href="media_gallery.html">Media Gallery</a></li>
                          <li><a href="typography.html">Typography</a></li>
                          <li><a href="icons.html">Icons</a></li>
                          <li><a href="glyphicons.html">Glyphicons</a></li>
                          <li><a href="widgets.html">Widgets</a></li>
                          <li><a href="invoice.html">Invoice</a></li>
                          <li><a href="inbox.html">Inbox</a></li>
                          <li><a href="calendar.html">Calendar</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-table"></i> Tables <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="tables.html">Tables</a></li>
                          <li><a href="tables_dynamic.html">Table Dynamic</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-bar-chart-o"></i> Data Presentation <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="chartjs.html">Chart JS</a></li>
                          <li><a href="chartjs2.html">Chart JS2</a></li>
                          <li><a href="morisjs.html">Moris JS</a></li>
                          <li><a href="echarts.html">ECharts</a></li>
                          <li><a href="other_charts.html">Other Charts</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-clone"></i>Layouts <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="fixed_sidebar.html">Fixed Sidebar</a></li>
                          <li><a href="fixed_footer.html">Fixed Footer</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="menu_section">
                    <h3>Live On</h3>
                    <ul className="nav side-menu">
                      <li><a><i className="fa fa-bug"></i> Additional Pages <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="e_commerce.html">E-commerce</a></li>
                          <li><a href="projects.html">Projects</a></li>
                          <li><a href="project_detail.html">Project Detail</a></li>
                          <li><a href="contacts.html">Contacts</a></li>
                          <li><a href="profile.html">Profile</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-windows"></i> Extras <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="page_403.html">403 Error</a></li>
                          <li><a href="page_404.html">404 Error</a></li>
                          <li><a href="page_500.html">500 Error</a></li>
                          <li><a href="plain_page.html">Plain Page</a></li>
                          <li><a href="login.html">Login Page</a></li>
                          <li><a href="pricing_tables.html">Pricing Tables</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-sitemap"></i> Multilevel Menu <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                            <li><a href="#level1_1">Level One</a></li>
                            <li><a>Level One<span className="fa fa-chevron-down"></span></a>
                              <ul className="nav child_menu">
                                <li className="sub_menu"><a href="level2.html">Level Two</a>
                                </li>
                                <li><a href="#level2_1">Level Two</a>
                                </li>
                                <li><a href="#level2_2">Level Two</a>
                                </li>
                              </ul>
                            </li>
                            <li><a href="#level1_2">Level One</a>
                            </li>
                        </ul>
                      </li>                  
                      <li><a href="javascript:void(0)"><i className="fa fa-laptop"></i> Landing Page <span className="label label-success pull-right">Coming Soon</span></a></li>
                    </ul>
                  </div>

                </div>

                <div className="sidebar-footer hidden-small">
                  <a data-toggle="tooltip" data-placement="top" title="Settings">
                    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                  </a>
                  <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                    <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                  </a>
                  <a data-toggle="tooltip" data-placement="top" title="Lock">
                    <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                  </a>
                  <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                    <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                  </a>
                </div>
                {/* Side Bar Component - Move */}
              </div>
            </div>

            {/* Top Menu Component - Move */}
            <div className="top_nav">
              <div className="nav_menu">
                <nav>
                  <div className="nav toggle">
                    <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                  </div>

                  <ul className="nav navbar-nav navbar-right">
                    <li className="">
                      <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        <img src="images/img.jpg" alt=""/>John Doe
                        <span className=" fa fa-angle-down"></span>
                      </a>
                      <ul className="dropdown-menu dropdown-usermenu pull-right">
                        <li><a href="javascript:;"> Profile</a></li>
                        <li>
                          <a href="javascript:;">
                            <span className="badge bg-red pull-right">50%</span>
                            <span>Settings</span>
                          </a>
                        </li>
                        <li><a href="javascript:;">Help</a></li>
                        <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                      </ul>
                    </li>

                    <li role="presentation" className="dropdown">
                      <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                        <i className="fa fa-envelope-o"></i>
                        <span className="badge bg-green">6</span>
                      </a>
                      <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                        <li>
                          <a>
                            <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                            <span>
                              <span>John Smith</span>
                              <span className="time">3 mins ago</span>
                            </span>
                            <span className="message">
                              Film festivals used to be do-or-die moments for movie makers. They were where...
                            </span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                            <span>
                              <span>John Smith</span>
                              <span className="time">3 mins ago</span>
                            </span>
                            <span className="message">
                              Film festivals used to be do-or-die moments for movie makers. They were where...
                            </span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                            <span>
                              <span>John Smith</span>
                              <span className="time">3 mins ago</span>
                            </span>
                            <span className="message">
                              Film festivals used to be do-or-die moments for movie makers. They were where...
                            </span>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                            <span>
                              <span>John Smith</span>
                              <span className="time">3 mins ago</span>
                            </span>
                            <span className="message">
                              Film festivals used to be do-or-die moments for movie makers. They were where...
                            </span>
                          </a>
                        </li>
                        <li>
                          <div className="text-center">
                            <a>
                              <strong>See All Alerts</strong>
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* Top Menu Component - Move */}

            {/* Main Component - Move */}
            <Switch>
              <ProtectedRoute exact path="/user" component={UserDashboard} />
              <ProtectedRoute exact path="/user/home" component={UserDashboard} />
            </Switch>
            {/* Main Component - Move */}

            <footer>
              <div className="pull-right">
                Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
              </div>
              <div className="clearfix"></div>
            </footer>

          </div>
        </div>
      </div>
    );
  }
}

GeneralUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(GeneralUser);
