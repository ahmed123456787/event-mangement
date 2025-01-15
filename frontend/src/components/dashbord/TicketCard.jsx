import React, { useState } from "react";
import clsx from "clsx";

import { LineChart } from "@mui/x-charts";
import { Progress } from "@/components/ui/progress";
import { MdArrowRightAlt } from "react-icons/md";

const TicketCard = ({ className }) => {
  const [ticketSold, setTicketSold] = useState(122121);
  const [increase, setIncrease] = useState(4);
  return (
    <div
      className={clsx(
        "flex flex-col p-3 bg-[#5C4DBF] rounded-xl shadow-lg text-white",
        className
      )}
    >
      {/* Header */}
      <div className="flex  items-start">
        <div>
          <h2 className="text-sm font-medium">Ticket Sold Today</h2>
          <p className="text-3xl font-extrabold mt-2">
            {ticketSold.toLocaleString()} pcs
          </p>
        </div>
        {/* LineChart */}
        <div className="flex items-center ml-auto">
          <LineChart
            className="flex-shrink-0 "
            leftAxis={null}
            series={[
              {
                data: [2, 5.5, 5],
                area: true,
              },
            ]}
            rightAxis={null}
            bottomAxis={null}
            width={200}
            height={200}
          />
          <p className="text-xs">{`${increase} % than last day`}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 mb-2">
        <Progress
          value={33}
          className="h-3 bg-gray-300 rounded-full overflow-hidden"
        >
          <div className="bg-[#855BFC] h-full" style={{ width: "33%" }}></div>
        </Progress>
      </div>
      <p className="text-xs w-2/3 leading-6">
        Today ticket sales are {ticketSold} increase by {increase} % in day from
        yesterday{" "}
      </p>
      <button className="mt-4 text-xs px-2 py-1 rounded-xl space-x-2 w-fit inline-flex items-center hover:cursor-pointer hover:text-purple-400">
        <p>View Details</p>
        <MdArrowRightAlt className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TicketCard;
