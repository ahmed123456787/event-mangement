import React, { useState } from "react";
import { images } from "./../../public/images";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  IoTicketOutline,
  IoPersonCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (itemName) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  const sideItems = [
    {
      icon: <MdOutlineSpaceDashboard />,
      name: "Dashboard",
    },
    {
      icon: <BsCalendar2Event />,
      name: "Events",
      subElements: true,
      subIcon: <FaChevronDown />,
      children: [
        {
          name: "All Events",
        },
        {
          name: "Create Event",
        },
      ],
    },
    {
      icon: <IoTicketOutline />,
      name: "Tickets",
      subElements: true,
      subIcon: <FaChevronDown />,
      children: [
        {
          name: "All Tickets",
        },
        {
          name: "Create Ticket",
        },
      ],
    },
    {
      icon: <IoPersonCircleOutline />,
      name: "Customers",
    },
    {
      icon: <IoSettingsOutline />,
      name: "Settings",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen px-1 ">
      {/* Logo and app name */}
      <div className="flex items-center text-[#855BFC] pb-3">
        <img src={images.logo} alt="Event Master" className="w-10 h-10" />
        <h2 className="text-md font-semibold inline-block">Event Master</h2>
      </div>
      {/* Side items */}
      {sideItems.map((item, index) => (
        <div key={index}>
          {/* Parent Item */}
          <div
            className="flex items-center justify-between gap-20 p-2 text-gray-300 hover:bg-[#855BFC] hover:cursor-pointer rounded-xl"
            onClick={() => item.subElements && toggleExpand(item.name)}
          >
            <div className="flex gap-2">
              <p className="text-md">{item.icon}</p>
              <h2 className="text-sm">{item.name}</h2>
            </div>
            {item.subElements && (
              <p className="text-xs">
                {expandedItems.includes(item.name) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </p>
            )}
          </div>
          {/* Children Items */}
          {expandedItems.includes(item.name) &&
            item.children &&
            item.children.map((child, childIndex) => (
              <div
                key={childIndex}
                className="ml-8 p-2 text-sm text-gray-400  hover:text-[#7D4DFB] rounded-lg cursor-pointer"
              >
                <div className="flex gap-2">
                  <TbPointFilled />
                  {child.name}
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
