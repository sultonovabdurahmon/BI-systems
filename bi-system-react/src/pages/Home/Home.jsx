// import Sidebar from "../../components/Sidebar/Sidebar";
import StatCard from "../../components/StatCard/StatCard";
import SalesChart from "../../components/SalesChart/SalesChart";
import DealsDetails from "../../components/DealsDetails/DealsDetails";

import searchIcon from "../../assets/icons/search.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import usaFlag from "../../assets/icons/usa.svg";
import russiaFlag from "../../assets/icons/russia.jpg";
import tajikistanFlag from "../../assets/icons/tajikistan.png";
import profileImage from "../../assets/images/profile.svg";
import dropDownIcon from "../../assets/icons/Drop Down.svg";
import moreIcon from "../../assets/icons/More.svg";
import icon1 from "../../assets/icons/icon-1.svg";
import icon2 from "../../assets/icons/icon-2.svg";
import icon3 from "../../assets/icons/icon-3.svg";
import icon4 from "../../assets/icons/icon-4.svg";
import trendUp from "../../assets/icons/trend-up.svg";
import trendDown from "../../assets/icons/trend-down.svg";
import teamIcon from "../../assets/icons/team.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import powerIcon from "../../assets/icons/power.svg";

import { useState } from "react";

import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import "./Home.css";

const revenueData = [
  { x: "5k", sales: 20, profit: 24 },
  { x: "10k", sales: 68, profit: 34 },
  { x: "15k", sales: 34, profit: 22 },
  { x: "20k", sales: 30, profit: 26 },
  { x: "25k", sales: 50, profit: 34 },
  { x: "30k", sales: 34, profit: 30 },
  { x: "35k", sales: 34, profit: 88 },
  { x: "40k", sales: 55, profit: 36 },
  { x: "45k", sales: 34, profit: 60 },
  { x: "50k", sales: 34, profit: 30 },
  { x: "55k", sales: 80, profit: 55 },
  { x: "60k", sales: 45, profit: 50 },
];

const salesAnalyticsData = [
  { year: "2015", blue: 24, green: 0 },
  { year: "2015", blue: 33, green: 10 },
  { year: "2015", blue: 42, green: 20 },
  { year: "2016", blue: 51, green: 32 },
  { year: "2016", blue: 60, green: 42 },
  { year: "2016", blue: 66, green: 50 },
  { year: "2017", blue: 69, green: 57 },
  { year: "2017", blue: 64, green: 52 },
  { year: "2017", blue: 57, green: 45 },
  { year: "2018", blue: 50, green: 38 },
  { year: "2018", blue: 46, green: 31 },
  { year: "2018", blue: 44, green: 26 },
  { year: "2019", blue: 44, green: 25 },
  { year: "2019", blue: 46, green: 27 },
  { year: "2019", blue: 50, green: 31 },
  { year: "2020", blue: 55, green: 36 },
  { year: "2020", blue: 60, green: 42 },
  { year: "2020", blue: 66, green: 49 },
  { year: "2021", blue: 73, green: 56 },
  { year: "2021", blue: 80, green: 63 },
  { year: "2021", blue: 88, green: 71 },
  { year: "2022", blue: 92, green: 78 },
  { year: "2026", blue: 97, green: 92 },
];

function DonutWithDots() {
  const size = 140;
  const r = 55;
  const cx = size / 2;
  const cy = size / 2;

  const dotAngles = [-90, 20, 150];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e3ecfd" strokeWidth="10" />
      {dotAngles.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r={7} fill="#4a7dff" />;
      })}
    </svg>
  );
}

function Home() {

  const [languageOpen, setLanguageOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [language, setLanguage] = useState({
    name: "English",
    flag: usaFlag,
  });

  return (
    <div className="home">

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

            <div className="language-wrapper">

              <div
                className="language"
                onClick={() => {
                  setLanguageOpen(!languageOpen);
                  setProfileOpen(false);
                }}
              >

                <div className="flag-wrapper">
                  <img src={language.flag} alt={language.name} />
                </div>

                <span>{language.name}</span>

                <img
                  src={dropDownIcon}
                  alt="Drop Down"
                  className="dropdown-icon"
                />

              </div>

              {languageOpen && (
                <div className="dropdown-menu">

                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setLanguage({
                        name: "English",
                        flag: usaFlag,
                      });
                    
                      setLanguageOpen(false);
                    }}
                  >
                    English
                  </div>

                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setLanguage({
                        name: "Russian",
                        flag: russiaFlag,
                      });
                    
                      setLanguageOpen(false);
                    }}
                  >
                    Russian
                  </div>

                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setLanguage({
                        name: "Tajik",
                        flag: tajikistanFlag,
                      });

                      setLanguageOpen(false);
                    }}
                  >
                    Tajik
                  </div>

                </div>
              )}

            </div>

            <div className="profile-wrapper">

              <div
                className="profile"
                onClick={() => {
                  setProfileOpen(!profileOpen);
                  setLanguageOpen(false);
                }}
              >

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

              {profileOpen && (
                <div className="dropdown-menu profile-menu">

                  <div className="dropdown-item">
                    <img
                      src={teamIcon}
                      alt="Profile"
                      className="dropdown-item-icon"
                    />
                    <span>Profile</span>
                  </div>

                  <div className="dropdown-item">
                    <img
                      src={settingsIcon}
                      alt="Settings"
                      className="dropdown-item-icon"
                    />
                    <span>Settings</span>
                  </div>

                  <div className="dropdown-item">
                    <img
                      src={powerIcon}
                      alt="Logout"
                      className="dropdown-item-icon"
                    />
                    <span>Logout</span>
                  </div>

                </div>
              )}

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

        {/* ================= NEW DASHBOARD WIDGET (Revenue / Customers / Featured Product / Sales Analytics) ================= */}
        <div className="extra-dashboard">

          <div className="card revenue-card">
            <div className="revenue-head">
              <h2>Revenue</h2>
              <div className="chart-header">
                <select>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c9a6f5" stopOpacity={0.75} />
                    <stop offset="100%" stopColor="#c9a6f5" stopOpacity={0.75} />
                  </linearGradient>
                  <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff9776" stopOpacity={0.75} />
                    <stop offset="100%" stopColor="#ff9776" stopOpacity={0.75} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#eef0f4" />
                <XAxis
                  dataKey="x"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#a9adba", fontSize: 12 }}
                  dy={8}
                />
                <YAxis
                  domain={[20, 100]}
                  ticks={[20, 40, 60, 80, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#a9adba", fontSize: 12 }}
                />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#c084fc"
                  strokeWidth={2}
                  fill="url(#salesGrad)"
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#ff8a65"
                  strokeWidth={2}
                  fill="url(#profitGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="legend-row">
              <div className="legend-item">
                <span className="legend-dot" style={{ background: "#c9a6f5" }} />
                Sales
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ background: "#ff9776" }} />
                Profit
              </div>
            </div>
          </div>

          <div className="bottom-grid">
            {/* Customers */}
            <div className="card customers-card">
              <h3 className="panel-title">Customers</h3>
              <div className="donut-wrap">
                <DonutWithDots />
              </div>
              <div className="stats-row">
                <div>
                  <div className="stat-num">34,249</div>
                  <div className="stat-label">
                    <span className="legend-dot" style={{ background: "#4a7dff" }} />
                    New Customers
                  </div>
                </div>
                <div>
                  <div className="stat-num">1420</div>
                  <div className="stat-label">
                    <span className="legend-dot" style={{ background: "#cfe0ff" }} />
                    Repeated
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Product */}
            <div className="card product-card">
              <h3 className="panel-title">Featured Product</h3>
              <div className="product-carousel">
                <button className="arrow-btn">‹</button>
                <div className="product-image">
                  <svg viewBox="0 0 160 110" width="100%" height="100%">
                    <rect x="30" y="30" width="100" height="55" rx="8" fill="#f4f5f7" />
                    <rect x="45" y="45" width="70" height="10" rx="5" fill="#e2e4ea" />
                    <circle cx="55" cy="75" r="6" fill="#d7dae2" />
                    <circle cx="105" cy="75" r="6" fill="#d7dae2" />
                  </svg>
                </div>
                <button className="arrow-btn">›</button>
              </div>
              <div className="product-info">
                <p className="product-name">Beats Headphone 2026</p>
                <p className="product-price">$89.00</p>
              </div>
            </div>

            {/* Sales Analytics */}
            <div className="card">
              <h3 className="panel-title">Sales Analytics</h3>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={salesAnalyticsData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="#eef0f4" />
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a9adba", fontSize: 11 }}
                    interval={4}
                  />
                  <YAxis
                    domain={[0, 100]}
                    ticks={[0, 25, 50, 75, 100]}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a9adba", fontSize: 11 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="blue"
                    stroke="#4a7dff"
                    strokeWidth={2}
                    dot={{ r: 2.5, fill: "#4a7dff", strokeWidth: 0 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="green"
                    stroke="#1fbf8f"
                    strokeWidth={2}
                    dot={{ r: 2.5, fill: "#1fbf8f", strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
        {/* ================= END NEW DASHBOARD WIDGET ================= */}

      </main>
    </div>
  );
}

export default Home;