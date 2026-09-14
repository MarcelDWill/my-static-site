"use client";
import React from "react";
import StatusCards from "./StatusCards";
import DateVote from "./DateVote";
import RSVPForm from "./RSVPForm";
import FlightWatch from "./FlightWatch";
import BirthdayEventCard from "./BirthdayEventCard";
import CityActivityVoting from "./CityActivityVoting";
import GroupSizeTracker from "./GroupSizeTracker";
import TourismResources from "./TourismResources";
import GroupDining from "./GroupDining";
import BudgetBreakdown from "./BudgetBreakdown";
import BigTallGuide from "./BigTallGuide";
import BlackTravelerNotes from "./BlackTravelerNotes";
import PackingLists from "./PackingLists";
import CardTable from "./CardTable";
import DowntimeBoard from "./DowntimeBoard";
import Timeline from "./Timeline";
import WhatsNext from "./WhatsNext";

export default function PlanningHub() {
  return (
    <div className="space-y-8 mt-4">
      <WhatsNext />

      <StatusCards />

      <DateVote />

      <RSVPForm />

      <FlightWatch />

      <BirthdayEventCard />

      <CityActivityVoting />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GroupSizeTracker />
        <BudgetBreakdown />
      </div>

      <TourismResources />

      <GroupDining />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BigTallGuide />
        <BlackTravelerNotes />
      </div>

      <PackingLists />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CardTable />
        <DowntimeBoard />
      </div>

      <Timeline />
    </div>
  );
}
