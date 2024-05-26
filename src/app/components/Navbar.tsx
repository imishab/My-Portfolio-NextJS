import React from 'react'

export default function Navbar() {
  return (
    <>    <div className="floating-container">
    <div className="floating-button">
      <i className="bi bi-stars" />
    </div>
    <div className="element-container">
      <a href="assets/pdf/finalcv.pdf">
        {" "}
        <span className="float-element bg-dark tooltip-left">
          <i className="bi bi-download" />
        </span>
      </a>
      <a href="google.com">
        {" "}
        <span className="float-element bg-dark tooltip-left">
          <i className="bi bi-share-fill" />
        </span>
      </a>
      <a href="google.com">
        {" "}
        <span className="float-element bg-dark tooltip-left">
          <i className="bi bi-brightness-high" />
        </span>
      </a>
    </div>
  </div>
  {/* Internet Connection Status*/}
  <div className="internet-connection-status" id="internetStatus" />
  <div className="dark-mode-switching">
    <div className="d-flex w-100 h-100 align-items-center justify-content-center">
      <div className="dark-mode-text text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          fill="currentColor"
          className="bi bi-moon"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
          />
        </svg>
        <p className="mb-0">Switching to dark mode</p>
      </div>
      <div className="light-mode-text text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="currentColor"
          className="bi bi-brightness-high"
          viewBox="0 0 16 16"
        >
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </svg>
        <p className="mb-0">Switching to light mode</p>
      </div>
    </div>
  </div>
  {/* RTL mode switching*/}
  <div className="rtl-mode-switching">
    <div className="d-flex w-100 h-100 align-items-center justify-content-center">
      <div className="rtl-mode-text text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          fill="currentColor"
          className="bi bi-text-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <p className="mb-0">Switching to RTL mode</p>
      </div>
      <div className="ltr-mode-text text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          fill="currentColor"
          className="bi bi-text-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <p className="mb-0">Switching to default mode</p>
      </div>
    </div>
  </div>
  <div id="setting-popup-overlay" />
  {/* Setting Popup Card*/}
  <div className="card setting-popup-card shadow-lg" id="settingCard">
    <div className="card-body">
      <div className="container">
        <div className="setting-heading d-flex align-items-center justify-content-between mb-3">
          <p className="mb-0">Settings</p>
          <a className="btn-close" id="settingCardClose" href="#" />
        </div>
        <div className="single-setting-panel">
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="availabilityStatus"
              
            />
            <label className="form-check-label" htmlFor="availabilityStatus">
              Availability status
            </label>
          </div>
        </div>
        <div className="single-setting-panel">
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="sendMeNotifications"
              
            />
            <label className="form-check-label" htmlFor="sendMeNotifications">
              Send me notifications
            </label>
          </div>
        </div>
        <div className="single-setting-panel">
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkSwitch"
            />
            <label className="form-check-label" htmlFor="darkSwitch">
              Dark mode
            </label>
          </div>
        </div>
        <div className="single-setting-panel">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="rtlSwitch"
            />
            <label className="form-check-label" htmlFor="rtlSwitch">
              RTL mode
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header-area bg-dark" id="headerArea">
    <div className="container">
      {/* Paste your Header Content from here*/}
      {/* # Header Five Layout*/}
      {/* # Copy the code from here ...*/}
      {/* Header Content*/}
      <div className="header-content header-style-three position-relative d-flex align-items-center justify-content-between">
        {/* Navbar Toggler*/}
        <div className="navbar--toggler" id="settingTriggerBtn">
          <div className="span-wrap">
            <a
              className="setting-trigger-btn"
              id="settingTriggerBtn"
              href="#"
            />
            <span className="d-block" />
            <span className="d-block" />
            <span className="d-block" />
          </div>
        </div>
        {/* Logo Wrapper*/}
        <div className="logo-wrapper mt-2">
          <a href="index.html">
            <h4 className='text-white'>
             Mishab
            </h4>
          </a>
        </div>
        {/* User Profile*/}
        <div className="shadow user-profile-wrapper">
          <a
            className="shadow user-profile-trigger-btn"
            href="assets/pdf/finalcv.pdf"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              className="bi bi-cloud-download"
              viewBox="0 0 16 16"
            >
              <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
              <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
            </svg>
          </a>
        </div>
      </div>
      {/* # Header Three Layout End*/}
    </div>
  </div>
  </>

  )
}
