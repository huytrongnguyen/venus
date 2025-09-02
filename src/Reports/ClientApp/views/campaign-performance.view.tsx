import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DateRangePicker } from 'rosie-ui';

export function CampaignPerformanceView() {
  const { appId } = useParams<{ appId: string }>(),
        [endDate, setEndDate] = useState(Date.currentDate().minus(1)),
        [startDate, setStartDate] = useState(endDate.startOfMonth());

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Apps</li>
      <li className="breadcrumb-item">{appId}</li>
      <li className="breadcrumb-item active">Campaign Performance</li>
      <div className="ms-auto">
        <DateRangePicker className="input-group-sm" start={startDate} end={endDate}
            onChange={(start: Date, end: Date) => { setStartDate(start); setEndDate(end); }} />
      </div>
    </ol>
    <main className="fullscreen">
    </main>
  </>
}