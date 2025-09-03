import { useState } from 'react';
import { DateRangePicker, Grid, GridColumn } from 'rosie-ui';
import { AuditLog, FaceMatching, Ocr } from 'solutions/core';

export function AuditLogsView() {
  const [endDate, setEndDate] = useState(Date.currentDate().minus(1)),
        [startDate, setStartDate] = useState(endDate.minus(7)),
        [page, setPage] = useState(1),
        [size, setSize] = useState(10),
        [total, setTotal] = useState(1),
        [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);

  return <>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">KYC</li>
      <li className="breadcrumb-item active">Audit Logs</li>
      <div className="ms-auto">
        <DateRangePicker className="input-group-sm" start={startDate} end={endDate}
            onChange={(start: Date, end: Date) => { setStartDate(start); setEndDate(end); }} />
      </div>
    </ol>
    <main className="fullscreen">
      <Grid fitHeight pagingToolbar>
        <GridColumn headerName="Request ID" field="requestId" style={{width:150}} />
        <GridColumn headerName="Request Date" field="requestDate" style={{width:150}} />
        <GridColumn headerName="Front" field="front" style={{width:200}} />
        <GridColumn headerName="Back" field="back" style={{width:200}} />
        <GridColumn headerName="Selfie" field="selfie" style={{width:200}} />
        <GridColumn headerName="OCR" field="ocr" style={{width:200}} renderer={(value: Ocr) => {
          return <>
            <div>SSN: {value?.ssn}</div>
            <div>Name: {value?.name}</div>
            <div>DOB: {value?.dob}</div>
            <div>Gender: {value?.gender}</div>
            <div>Address: {value?.address}</div>
            <div>Given Date: {value?.givenDate}</div>
            <div>Given Place: {value?.givenPlace}</div>
            <div>Due Date: {value?.dueDate}</div>
          </>
        }} />
        <GridColumn headerName="Face Matching" field="faceMatching" style={{width:200}} renderer={(value: FaceMatching) => {
          return <>
            <div>Matched: {value?.matched ? "TRUE" : "FALSE"}</div>
            <div>Confidence Score: {value?.confidence}</div>
          </>
        }} />
      </Grid>
    </main>
  </>
}