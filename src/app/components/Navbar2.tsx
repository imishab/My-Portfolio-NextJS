import React from 'react';
interface NavbarProps {
    currentPage: string;
  }
const Navbar2: React.FC<NavbarProps> = ({ currentPage }) => {
    let pageTitle;

  // Determine the text to display based on the current page
  switch (currentPage) {
    case 'ui':
      pageTitle = 'My UI Design';
      break;
    case 'achievements':
      pageTitle = 'My Achievements';
      break;
    default:
      pageTitle = 'Mishab';
      break;
  }

  return (
    <>
    <div className="header-area bg-dark" id="headerArea">
  <div className="container">
    {/* Header Content*/}
    <div className="header-content position-relative d-flex align-items-center justify-content-between">
      {/* Back Button*/}
      <div className="back-button">
        <a href="/">
          <svg
            width={32}
            height={32}
            viewBox="0 0 16 16"
            className="bi bi-arrow-left-short"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </a>
      </div>
      {/* Page Title*/}
      <div className="page-heading">
        <h6 className="mb-0 text-white">{pageTitle}</h6>
      </div>
      {/* Settings*/}
      <div className="setting-wrapper">
        <a className="setting-trigger-btn" id="settingTriggerBtn" href="#">
          <svg
            width={18}
            height={18}
            viewBox="0 0 16 16"
            className="bi bi-gear"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                spreadMethod="pad"
                id="gradientSettings"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset={0}
                  style={{ stopColor: "#0134d4", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#28a745", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
            />
            <path
              fillRule="evenodd"
              d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
            />
          </svg>
          <span />
        </a>
      </div>
    </div>
  </div>
</div><br/></>
  )
}
export default Navbar2;
