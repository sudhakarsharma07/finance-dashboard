import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaChartPie,
  FaBell,
  FaCog,
  FaUser,
  FaQuestionCircle,
  FaCalendar,
  FaMoneyBillWave // ✅ Cash Icon
} from 'react-icons/fa';

export default function Sidebar() {
  return (
    <nav className="sidebar d-flex flex-column p-3">
      <div className="d-flex align-items-center mb-4 text-primary">
        <FaMoneyBillWave size={24} className="me-2" /> 
        <h3 className="m-0">Cash</h3>
      </div>
      
      <ul className="nav nav-pills flex-column gap-2">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" end>
            <FaHome className="me-2" /> Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/accounts" className="nav-link">
            <FaUser className="me-2" /> Accounts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/charts" className="nav-link">
            <FaChartPie className="me-2" /> Charts 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/notifications" className="nav-link">
            <FaBell className="me-2" /> Notifications
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/calendar" className="nav-link">
            <FaCalendar className="me-2" /> Calendar
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/help" className="nav-link">
            <FaQuestionCircle className="me-2" /> Help
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/settings" className="nav-link">
            <FaCog className="me-2" /> Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
