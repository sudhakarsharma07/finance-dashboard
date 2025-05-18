import React from 'react';
import { FaHome, FaDollarSign, FaQrcode, FaUsers, FaGift, FaBell } from 'react-icons/fa';

export default function HomeNav() {
  const savingsProgress = 64;

  return (
    <div className="home-nav p-3 border rounded mb-4 d-flex flex-column align-items-end">

      {/* Navigation Buttons on Right */}
      <nav className="d-flex align-items-center gap-3">
        <button className="btn btn-outline-primary d-flex align-items-center gap-2">
          <FaHome /> Home
        </button>
        <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
          <FaDollarSign /> Spend
        </button>
        <button className="btn btn-outline-info d-flex align-items-center gap-2">
          <FaQrcode /> Scan
        </button>
        <button className="btn btn-outline-warning d-flex align-items-center gap-2">
          <FaUsers /> Split
        </button>
        <button className="btn btn-outline-success d-flex align-items-center gap-2">
          <FaGift /> Rewards
        </button>

        {/* Notifications with badge */}
        <button className="btn btn-outline-danger position-relative">
          <FaBell size={20} />
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: '0.6rem' }}
          >
            3
            <span className="visually-hidden">unread notifications</span>
          </span>
        </button>

        {/* Profile Photo */}
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className="rounded-circle"
          style={{ width: '36px', height: '36px', objectFit: 'cover' }}
        />
      </nav>
    </div>
  );
}
