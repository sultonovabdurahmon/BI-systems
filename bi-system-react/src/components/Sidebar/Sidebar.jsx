import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import menuIcon from "../../assets/icons/menu.svg";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import productIcon from "../../assets/icons/product.svg";
import favouritesIcon from "../../assets/icons/favourites.svg";
import chatIcon from "../../assets/icons/chat.svg";
import orderlistIcon from "../../assets/icons/orderlist.svg";
import stockIcon from "../../assets/icons/stock.svg";
import pricingIcon from "../../assets/icons/pricing.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import todoIcon from "../../assets/icons/to do.svg";
import contactIcon from "../../assets/icons/contact.svg";
import invoiceIcon from "../../assets/icons/invoice.svg";
import teamIcon from "../../assets/icons/team.svg";
import UIelementIcon from "../../assets/icons/UI element.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import powerIcon from "../../assets/icons/power.svg";

function Sidebar() {
  const items = [
    { icon: dashboardIcon, label: "Dashboard", path: "/" },
    { icon: productIcon, label: "Products", path: "/products" },
    { icon: favouritesIcon, label: "Favorites", path: "/favorites" },
    { icon: chatIcon, label: "Inbox", path: "/inbox" },
    { icon: orderlistIcon, label: "Order Lists", path: "/orders" },
    { icon: stockIcon, label: "Product Stock", path: "/stock" },
    { icon: pricingIcon, label: "Pricing", path: "/pricing" },
    { icon: calendarIcon, label: "Calendar", path: "/calendar" },
    { icon: todoIcon, label: "Todo", path: "/todo" },
    { icon: contactIcon, label: "Contact", path: "/contact" },
    { icon: invoiceIcon, label: "Invoice", path: "/invoice" },
    { icon: teamIcon, label: "Team", path: "/team" },
    { icon: UIelementIcon, label: "UI Elements", path: "/ui-elements" },
    { icon: settingsIcon, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu">
          <img src={menuIcon} alt="menu" />
        </div>

        {items.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "item active" : "item"
            }
          >
            <img src={item.icon} alt={item.label} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="logout">
        <img src={powerIcon} alt="logout" />
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;