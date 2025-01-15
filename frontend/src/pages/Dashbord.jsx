import React from "react";
import Layout from "../components/Layout";
import TicketCard from "../components/dashbord/TicketCard";
import SalesChart from "@/components/dashbord/SalesChart";

const Dashbord = () => {
  return (
    <Layout>
      <div className="flex w-full m-4 space-x-2">
        <TicketCard className={"w-1/2"} />
        <SalesChart className={"w-1/2"} />
      </div>
    </Layout>
  );
};

export default Dashbord;
