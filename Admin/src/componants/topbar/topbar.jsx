import React from 'react';
import './topbar.css';
export default function topbar() {
  return (
      <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Fit Notation</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          </div>
          <img src="https://th.bing.com/th/id/R.201d17520f0f579146c4e7f45960dd39?rik=XEgdkmNtQ3N7bg&pid=ImgRaw&r=0" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
