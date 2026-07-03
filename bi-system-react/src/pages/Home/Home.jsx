import Sidebar from "../../components/Sidebar/Sidebar";
import StatCard from "../../components/StatCard/StatCard";
import SalesChart from "../../components/SalesChart/SalesChart";
import DealsDetails from "../../components/DealsDetails/DealsDetails";

import searchIcon from "../../assets/icons/search.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import usaFlag from "../../assets/icons/usa.svg";
import profileImage from "../../assets/images/profile.svg";
import dropDownIcon from "../../assets/icons/Drop Down.svg";
import moreIcon from "../../assets/icons/More.svg";
import icon1 from "../../assets/icons/icon-1.svg";
import icon2 from "../../assets/icons/icon-2.svg";
import icon3 from "../../assets/icons/icon-3.svg";
import icon4 from "../../assets/icons/icon-4.svg";
import trendUp from "../../assets/icons/trend-up.svg";
import trendDown from "../../assets/icons/trend-down.svg";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />

      <main className="home-content">
        {/* TOP BAR */}
        <header className="topbar">
          <div className="search">
            <img
              src={searchIcon}
              alt="Search"
              className="search-icon"
            />

            <input
              type="text"
              placeholder="Search"
            />
          </div>

          <div className="topbar-right">
            <div className="icon">
              <img
                src={notificationIcon}
                alt="Notifications"
              />
            </div>

            <div className="language">
              <img
                src={usaFlag}
                alt="USA"
              />

              <span>English</span>

              <img
                src={dropDownIcon}
                alt="Drop Down"
                className="dropdown-icon"
              />
            </div>

            <div className="profile">
              <img
                src={profileImage}
                alt="Profile"
              />

              <div>
                <h4>Moni Roy</h4>
                <p>Admin</p>
              </div>

              <img
                src={moreIcon}
                alt="More"
                className="more-icon"
              />
            </div>
          </div>
        </header>

        {/* PAGE TITLE */}
        <h1>Dashboard</h1>

        {/* STAT CARDS */}
        <div className="stats">

        <StatCard
          title="Total User"
          value="40,689"
          subtitle="8.5% Up from yesterday"
          icon={icon1}
          trendIcon={trendUp}
          subtitleType="green"
        />

        <StatCard
          title="Total Order"
          value="10293"
          subtitle="1.3% Up from past week"
          icon={icon2}
          trendIcon={trendUp}
          subtitleType="green"
        />

        <StatCard
          title="Total Sales"
          value="$89,000"
          subtitle="4.3% Down from yesterday"
          icon={icon3}
          trendIcon={trendDown}
          subtitleType="red"
        />

        <StatCard
          title="Total Pending"
          value="2040"
          subtitle="1.8% Up from yesterday"
          icon={icon4}
          trendIcon={trendUp}
          subtitleType="green"
        />

        </div>

        {/* SALES CHART */}
        <div className="dashboard-content">
          <div className="chart-section">
            <div className="chart-header">
              <h2>Sales Details</h2>

              <select>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>

            <div className="chart">
              <SalesChart />
            </div>
          </div>
        </div>

        <DealsDetails />

      </main>
    </div>
  );
}

export default Home;