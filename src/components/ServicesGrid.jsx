// //client/src/components/ServicesGrid.jsx
// import { useState, useMemo } from "react";

// // ─────────────────────────────────────────────────────────────
// // DATABASE  (from Compliance_Calendar_FY2026-27.csv)
// // ─────────────────────────────────────────────────────────────
// const DB = [
//   {date:'2026-04-30',name:'MSME Form I (Half-Yearly)',period:'Oct 2025–Mar 2026 outstanding payments',cat:'Company Law'},
//   {date:'2026-05-30',name:'LLP Form 11 – Annual Return',period:'FY 2025-26',cat:'Company Law'},
//   {date:'2026-06-30',name:'DPT-3 (Loans or moneys not to be considered as deposit)',period:'FY 2025-26',cat:'Company Law'},
//   {date:'2026-09-30',name:'DIR-3 KYC (once in 3 years)',period:'FY 2025-26',cat:'Company Law'},
//   {date:'2026-09-30',name:'AGM',period:'FY 2025-26 (Listed & Unlisted)',cat:'Company Law'},
//   {date:'2026-10-15',name:'ADT-1 – Auditor Appointment',period:'Within 15 days of AGM',cat:'Company Law'},
//   {date:'2026-10-30',name:'AOC-4 – Financial Statements',period:'Within 30 days of AGM',cat:'Company Law'},
//   {date:'2026-10-30',name:'LLP Form 8 – Accounts & Solvency',period:'FY 2025-26',cat:'Company Law'},
//   {date:'2026-10-31',name:'MSME Form I (Half-Yearly)',period:'Apr–Sep 2026 outstanding payments',cat:'Company Law'},
//   {date:'2026-11-29',name:'MGT-7 / 7A – Annual Return',period:'Within 60 days of AGM',cat:'Company Law'},
//   {date:'2026-05-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Apr-26',cat:'GST'},
//   {date:'2026-05-11',name:'GSTR-1',period:'Apr-26',cat:'GST'},
//   {date:'2026-05-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Apr-26',cat:'GST'},
//   {date:'2026-05-20',name:'GSTR-3B',period:'Apr-26',cat:'GST'},
//   {date:'2026-06-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'May-26',cat:'GST'},
//   {date:'2026-06-11',name:'GSTR-1',period:'May-26',cat:'GST'},
//   {date:'2026-06-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'May-26',cat:'GST'},
//   {date:'2026-06-20',name:'GSTR-3B',period:'May-26',cat:'GST'},
//   {date:'2026-07-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Jun-26',cat:'GST'},
//   {date:'2026-07-11',name:'GSTR-1',period:'Jun-26',cat:'GST'},
//   {date:'2026-07-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Jun-26',cat:'GST'},
//   {date:'2026-07-20',name:'GSTR-3B',period:'Jun-26',cat:'GST'},
//   {date:'2026-08-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Jul-26',cat:'GST'},
//   {date:'2026-08-11',name:'GSTR-1',period:'Jul-26',cat:'GST'},
//   {date:'2026-08-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Jul-26',cat:'GST'},
//   {date:'2026-08-20',name:'GSTR-3B',period:'Jul-26',cat:'GST'},
//   {date:'2026-09-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Aug-26',cat:'GST'},
//   {date:'2026-09-11',name:'GSTR-1',period:'Aug-26',cat:'GST'},
//   {date:'2026-09-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Aug-26',cat:'GST'},
//   {date:'2026-09-20',name:'GSTR-3B',period:'Aug-26',cat:'GST'},
//   {date:'2026-10-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Sep-26',cat:'GST'},
//   {date:'2026-10-11',name:'GSTR-1',period:'Sep-26',cat:'GST'},
//   {date:'2026-10-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Sep-26',cat:'GST'},
//   {date:'2026-10-20',name:'GSTR-3B',period:'Sep-26',cat:'GST'},
//   {date:'2026-11-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Oct-26',cat:'GST'},
//   {date:'2026-11-11',name:'GSTR-1',period:'Oct-26',cat:'GST'},
//   {date:'2026-11-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Oct-26',cat:'GST'},
//   {date:'2026-11-20',name:'GSTR-3B',period:'Oct-26',cat:'GST'},
//   {date:'2026-12-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Nov-26',cat:'GST'},
//   {date:'2026-12-11',name:'GSTR-1',period:'Nov-26',cat:'GST'},
//   {date:'2026-12-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Nov-26',cat:'GST'},
//   {date:'2026-12-20',name:'GSTR-3B',period:'Nov-26',cat:'GST'},
//   {date:'2027-01-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Dec-26',cat:'GST'},
//   {date:'2027-01-11',name:'GSTR-1',period:'Dec-26',cat:'GST'},
//   {date:'2027-01-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Dec-26',cat:'GST'},
//   {date:'2027-01-20',name:'GSTR-3B',period:'Dec-26',cat:'GST'},
//   {date:'2027-02-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Jan-27',cat:'GST'},
//   {date:'2027-02-11',name:'GSTR-1',period:'Jan-27',cat:'GST'},
//   {date:'2027-02-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Jan-27',cat:'GST'},
//   {date:'2027-02-20',name:'GSTR-3B',period:'Jan-27',cat:'GST'},
//   {date:'2027-03-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Feb-27',cat:'GST'},
//   {date:'2027-03-11',name:'GSTR-1',period:'Feb-27',cat:'GST'},
//   {date:'2027-03-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Feb-27',cat:'GST'},
//   {date:'2027-03-20',name:'GSTR-3B',period:'Feb-27',cat:'GST'},
//   {date:'2027-04-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Mar-27',cat:'GST'},
//   {date:'2027-04-11',name:'GSTR-1',period:'Mar-27',cat:'GST'},
//   {date:'2027-04-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Mar-27',cat:'GST'},
//   {date:'2027-04-20',name:'GSTR-3B',period:'Mar-27',cat:'GST'},
//   {date:'2026-05-13',name:'IFF  (QRMP)',period:'Apr-26',cat:'GST'},
//   {date:'2026-05-25',name:'PMT-06  (QRMP)',period:'Apr-26',cat:'GST'},
//   {date:'2026-06-13',name:'IFF  (QRMP)',period:'May-26',cat:'GST'},
//   {date:'2026-06-25',name:'PMT-06  (QRMP)',period:'May-26',cat:'GST'},
//   {date:'2026-07-13',name:'GSTR-1  (QRMP)',period:'Q1 Apr-Jun 2026',cat:'GST'},
//   {date:'2026-07-22',name:'GSTR-3B  (QRMP Group A)',period:'Q1 Apr-Jun 2026',cat:'GST'},
//   {date:'2026-07-24',name:'GSTR-3B  (QRMP Group B)',period:'Q1 Apr-Jun 2026',cat:'GST'},
//   {date:'2026-08-13',name:'IFF  (QRMP)',period:'Jul-26',cat:'GST'},
//   {date:'2026-08-25',name:'PMT-06  (QRMP)',period:'Jul-26',cat:'GST'},
//   {date:'2026-09-13',name:'IFF  (QRMP)',period:'Aug-26',cat:'GST'},
//   {date:'2026-09-25',name:'PMT-06  (QRMP)',period:'Aug-26',cat:'GST'},
//   {date:'2026-10-13',name:'GSTR-1  (QRMP)',period:'Q2 Jul-Sep 2026',cat:'GST'},
//   {date:'2026-10-22',name:'GSTR-3B  (QRMP Group A)',period:'Q2 Jul-Sep 2026',cat:'GST'},
//   {date:'2026-10-24',name:'GSTR-3B  (QRMP Group B)',period:'Q2 Jul-Sep 2026',cat:'GST'},
//   {date:'2026-11-13',name:'IFF  (QRMP)',period:'Oct-26',cat:'GST'},
//   {date:'2026-11-25',name:'PMT-06  (QRMP)',period:'Oct-26',cat:'GST'},
//   {date:'2026-12-13',name:'IFF  (QRMP)',period:'Nov-26',cat:'GST'},
//   {date:'2026-12-25',name:'PMT-06  (QRMP)',period:'Nov-26',cat:'GST'},
//   {date:'2027-01-13',name:'GSTR-1  (QRMP)',period:'Q3 Oct-Dec 2026',cat:'GST'},
//   {date:'2027-01-22',name:'GSTR-3B  (QRMP Group A)',period:'Q3 Oct-Dec 2026',cat:'GST'},
//   {date:'2027-01-24',name:'GSTR-3B  (QRMP Group B)',period:'Q3 Oct-Dec 2026',cat:'GST'},
//   {date:'2027-02-13',name:'IFF  (QRMP)',period:'Jan-27',cat:'GST'},
//   {date:'2027-02-25',name:'PMT-06  (QRMP)',period:'Jan-27',cat:'GST'},
//   {date:'2027-03-13',name:'IFF  (QRMP)',period:'Feb-27',cat:'GST'},
//   {date:'2027-03-25',name:'PMT-06  (QRMP)',period:'Feb-27',cat:'GST'},
//   {date:'2027-04-13',name:'GSTR-1  (QRMP)',period:'Q4 Jan-Mar 2027',cat:'GST'},
//   {date:'2027-04-22',name:'GSTR-3B  (QRMP Group A)',period:'Q4 Jan-Mar 2027',cat:'GST'},
//   {date:'2027-04-24',name:'GSTR-3B  (QRMP Group B)',period:'Q4 Jan-Mar 2027',cat:'GST'},
//   {date:'2026-07-18',name:'CMP-08',period:'Q1 Apr-Jun 2026',cat:'GST'},
//   {date:'2026-10-18',name:'CMP-08',period:'Q2 Jul-Sep 2026',cat:'GST'},
//   {date:'2027-01-18',name:'CMP-08',period:'Q3 Oct-Dec 2026',cat:'GST'},
//   {date:'2027-04-18',name:'CMP-08',period:'Q4 Jan-Mar 2027',cat:'GST'},
//   {date:'2027-06-30',name:'GSTR-4  (Composition Annual Return)',period:'FY 2026-27',cat:'GST'},
//   {date:'2027-12-31',name:'GSTR-9 / 9C',period:'FY 2026-27',cat:'GST'},
//   {date:'2026-06-15',name:'Advance Tax – 1st Installment',period:'Minimum 15% of total tax liability (FY 2026-27)',cat:'Income Tax'},
//   {date:'2026-06-30',name:'Equalisation Levy Statement',period:'For FY 2025-26',cat:'Other'},
//   {date:'2026-07-31',name:'ITR Filing – Non-Audit',period:'Individuals (no business income)',cat:'Income Tax'},
//   {date:'2026-08-31',name:'ITR Filing – Non-Audit',period:'Business income / Partners (non-audit cases)',cat:'Income Tax'},
//   {date:'2026-09-15',name:'Advance Tax – 2nd Installment',period:'45% cumulative tax liability',cat:'Income Tax'},
//   {date:'2026-09-30',name:'Tax Audit Report',period:'AY 2026-27',cat:'Income Tax'},
//   {date:'2026-10-31',name:'ITR Filing – Audit Cases',period:'AY 2026-27',cat:'Income Tax'},
//   {date:'2026-10-31',name:'Transfer Pricing Audit Report',period:'AY 2026-27',cat:'Income Tax'},
//   {date:'2026-11-30',name:'ITR Filing – Transfer Pricing Cases',period:'Section 92E cases',cat:'Income Tax'},
//   {date:'2026-12-15',name:'Advance Tax – 3rd Installment',period:'75% cumulative tax liability',cat:'Income Tax'},
//   {date:'2026-12-31',name:'Belated ITR',period:'AY 2026-27',cat:'Income Tax'},
//   {date:'2027-03-15',name:'Advance Tax – 4th Installment',period:'100% of tax liability',cat:'Income Tax'},
//   {date:'2027-03-31',name:'Revised ITR',period:'AY 2026-27',cat:'Income Tax'},
//   {date:'2025-04-15',name:'PF / ESIC Payment',period:'Mar-26',cat:'PF/ESIC'},
//   {date:'2026-05-15',name:'PF / ESIC Payment',period:'Apr-26',cat:'PF/ESIC'},
//   {date:'2026-06-15',name:'PF / ESIC Payment',period:'May-26',cat:'PF/ESIC'},
//   {date:'2026-07-15',name:'PF / ESIC Payment',period:'Jun-26',cat:'PF/ESIC'},
//   {date:'2026-08-15',name:'PF / ESIC Payment',period:'Jul-26',cat:'PF/ESIC'},
//   {date:'2026-09-15',name:'PF / ESIC Payment',period:'Aug-26',cat:'PF/ESIC'},
//   {date:'2026-10-15',name:'PF / ESIC Payment',period:'Sep-26',cat:'PF/ESIC'},
//   {date:'2026-11-15',name:'PF / ESIC Payment',period:'Oct-26',cat:'PF/ESIC'},
//   {date:'2026-12-15',name:'PF / ESIC Payment',period:'Nov-26',cat:'PF/ESIC'},
//   {date:'2027-01-15',name:'PF / ESIC Payment',period:'Dec-26',cat:'PF/ESIC'},
//   {date:'2027-02-15',name:'PF / ESIC Payment',period:'Jan-27',cat:'PF/ESIC'},
//   {date:'2027-03-15',name:'PF / ESIC Payment',period:'Feb-27',cat:'PF/ESIC'},
//   {date:'2026-04-07',name:'TCS Challan Payment',period:'Mar-26',cat:'TDS/TCS'},
//   {date:'2026-04-30',name:'TDS Challan Payment (March)',period:'Mar-26',cat:'TDS/TCS'},
//   {date:'2026-05-07',name:'TDS/TCS Challan Payment',period:'Apr-26',cat:'TDS/TCS'},
//   {date:'2026-05-15',name:'TCS Return – Q4',period:'FY 2025-26',cat:'TDS/TCS'},
//   {date:'2026-05-30',name:'TCS Certificate – Q4',period:'FY 2025-26',cat:'TDS/TCS'},
//   {date:'2026-05-31',name:'TDS Return – Q4',period:'FY 2025-26',cat:'TDS/TCS'},
//   {date:'2026-06-07',name:'TDS/TCS Challan Payment',period:'May-26',cat:'TDS/TCS'},
//   {date:'2026-06-15',name:'TDS Certificate – Q4',period:'FY 2025-26',cat:'TDS/TCS'},
//   {date:'2026-07-07',name:'TDS/TCS Challan Payment',period:'Jun-26',cat:'TDS/TCS'},
//   {date:'2026-07-15',name:'TCS Return – Q1',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2026-07-30',name:'TCS Certificate – Q1',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2026-07-31',name:'TDS Return – Q1',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2026-08-07',name:'TDS/TCS Challan Payment',period:'Jul-26',cat:'TDS/TCS'},
//   {date:'2026-08-15',name:'TDS Certificate – Q1',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2026-09-07',name:'TDS/TCS Challan Payment',period:'Aug-26',cat:'TDS/TCS'},
//   {date:'2026-10-07',name:'TDS/TCS Challan Payment',period:'Sep-26',cat:'TDS/TCS'},
//   {date:'2026-10-15',name:'TCS Return – Q2',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2026-10-30',name:'TCS Certificate – Q2',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2026-10-31',name:'TDS Return – Q2',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2026-11-07',name:'TDS/TCS Challan Payment',period:'Oct-26',cat:'TDS/TCS'},
//   {date:'2026-11-15',name:'TDS Certificate – Q2',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2026-12-07',name:'TDS/TCS Challan Payment',period:'Nov-26',cat:'TDS/TCS'},
//   {date:'2027-01-07',name:'TDS/TCS Challan Payment',period:'Dec-26',cat:'TDS/TCS'},
//   {date:'2027-01-15',name:'TCS Return – Q3',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2027-01-30',name:'TCS Certificate – Q3',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2027-01-31',name:'TDS Return – Q3',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2027-02-07',name:'TDS/TCS Challan Payment',period:'Jan-27',cat:'TDS/TCS'},
//   {date:'2027-02-15',name:'TDS Certificate – Q3',period:'FY 2026-27',cat:'TDS/TCS'},
//   {date:'2027-03-07',name:'TDS/TCS Challan Payment',period:'Feb-27',cat:'TDS/TCS'}
// ];

// // ─────────────────────────────────────────────────────────────
// // CONFIG
// // ─────────────────────────────────────────────────────────────
// const CONSTITUTIONS = [
//   { id: "individual",    label: "Individual",              icon: "👤", acts: ["Income Tax","TDS/TCS","PF/ESIC","Other"] },
//   { id: "proprietorship",label: "Proprietorship Firm",     icon: "🏪", acts: ["Income Tax","GST","TDS/TCS","PF/ESIC","Other"] },
//   { id: "partnership",   label: "Partnership Firm",        icon: "🤝", acts: ["Income Tax","GST","TDS/TCS","PF/ESIC","Other"] },
//   { id: "llp",           label: "LLP",                     icon: "⚖️", acts: ["Income Tax","GST","TDS/TCS","PF/ESIC","Company Law","Other"] },
//   { id: "pvtltd",        label: "Private Limited Company", icon: "🏢", acts: ["Income Tax","GST","TDS/TCS","PF/ESIC","Company Law","Other"] },
//   { id: "publtd",        label: "Public Limited Company",  icon: "🏛️", acts: ["Income Tax","GST","TDS/TCS","PF/ESIC","Company Law","Other"] },
//   { id: "trust",         label: "Trust / NGO / Society",   icon: "🕊️", acts: ["Income Tax","TDS/TCS","Other"] },
//   { id: "huf",           label: "HUF",                     icon: "🏠", acts: ["Income Tax","TDS/TCS","Other"] },
// ];

// const ALL_ACTS = [
//   { id: "GST",          label: "GST",                    color: "#0d6e4f", bg: "#e6f4ef", icon: "🧾" },
//   { id: "Income Tax",   label: "Income Tax",             color: "#1d4ed8", bg: "#dbeafe", icon: "📊" },
//   { id: "TDS/TCS",      label: "TDS / TCS",              color: "#7c3aed", bg: "#ede9fe", icon: "💳" },
//   { id: "PF/ESIC",      label: "PF / ESIC",              color: "#b45309", bg: "#fef3c7", icon: "🏥" },
//   { id: "Company Law",  label: "Company Law / MCA",      color: "#9f1239", bg: "#ffe4e6", icon: "🏢" },
//   { id: "Other",        label: "Other",                  color: "#374151", bg: "#f3f4f6", icon: "📌" },
// ];

// const TODAY = new Date(); TODAY.setHours(0,0,0,0);

// // ─────────────────────────────────────────────────────────────
// // HELPERS
// // ─────────────────────────────────────────────────────────────
// function getStatus(dateStr) {
//   const d = new Date(dateStr); d.setHours(0,0,0,0);
//   const diff = Math.round((d - TODAY) / 86400000);
//   if (diff < 0)   return { key:"overdue",  label:"Overdue",  diff, dot:"#ef4444", bg:"#fef2f2", text:"#991b1b" };
//   if (diff === 0) return { key:"today",    label:"Today!",   diff, dot:"#f97316", bg:"#fff7ed", text:"#c2410c" };
//   if (diff <= 7)  return { key:"urgent",   label:"This Week",diff, dot:"#eab308", bg:"#fefce8", text:"#854d0e" };
//   if (diff <= 30) return { key:"upcoming", label:"This Month",diff,dot:"#3b82f6", bg:"#eff6ff", text:"#1d4ed8" };
//   return             { key:"ok",       label:"Upcoming", diff, dot:"#22c55e", bg:"#f0fdf4", text:"#15803d" };
// }

// function fmtDate(s) {
//   return new Date(s).toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" });
// }

// function daysLabel(diff) {
//   if (diff < 0)  return `${Math.abs(diff)}d overdue`;
//   if (diff === 0) return "Due today!";
//   if (diff === 1) return "Due tomorrow";
//   return `${diff} days left`;
// }

// function monthLabel(dateStr) {
//   const d = new Date(dateStr);
//   return d.toLocaleDateString("en-IN", { month:"long", year:"numeric" });
// }

// // ─────────────────────────────────────────────────────────────
// // PAN DETECTION & BULK SEND HELPER FUNCTIONS
// // ─────────────────────────────────────────────────────────────

// // Detect entity type from 4th character of PAN
// function detectEntityType(pan) {
//   if (!pan || pan.length < 4) return 'individual';
//   const fourthChar = pan.charAt(3).toUpperCase();
  
//   switch(fourthChar) {
//     case 'P': return 'individual';
//     case 'C': return 'company';
//     case 'H': return 'huf';
//     case 'F': return 'firm';
//     case 'T': return 'trust';
//     default: return 'individual';
//   }
// }

// // Get compliance acts for entity type
// function getActsForEntityType(entityType) {
//   const actMap = {
//     individual: ['Income Tax', 'TDS/TCS', 'Other'],
//     company: ['GST', 'Income Tax', 'TDS/TCS', 'PF/ESIC', 'Company Law'],
//     huf: ['GST', 'Income Tax', 'TDS/TCS', 'Other'],
//     firm: ['GST', 'Income Tax', 'TDS/TCS', 'PF/ESIC', 'Company Law'],
//     trust: ['GST', 'Income Tax', 'TDS/TCS', 'Other']
//   };
//   return actMap[entityType] || ['Income Tax', 'TDS/TCS', 'Other'];
// }

// // Get relevant deadlines for entity type
// function getRelevantDeadlines(entityType, month = null) {
//   const acts = getActsForEntityType(entityType);
//   let filtered = DB.filter(d => acts.includes(d.cat));
  
//   if (month) {
//     filtered = filtered.filter(d => {
//       const d_month = new Date(d.date).getMonth();
//       return d_month === month;
//     });
//   }
  
//   return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
// }

// // Validate & clean phone number
// function validatePhoneNumber(phone) {
//   if (!phone) return null;
//   const cleaned = phone.toString().replace(/\D/g, '');
//   if (cleaned.length < 10) return null;
//   const withCode = cleaned.length === 10 ? '91' + cleaned : cleaned;
//   return withCode;
// }

// // Generate bulk message for entity
// function generateBulkMessage(name, entityType, deadlines) {
//   if (deadlines.length === 0) {
//     return `Hi ${name}!\n\nNo compliance deadlines for this month.\n\n⚖️ TrustLeaf Advisors LLP`;
//   }
  
//   let msg = `\u{1F4CB} *COMPLIANCE DEADLINES - ${name.toUpperCase()}*\n\n`;
//   msg += `Entity Type: ${entityType.toUpperCase()}\n`;
//   msg += `Total Deadlines This Month: ${deadlines.length}\n\n`;
//   msg += `\u{1F4C5} *DUE DATES:*\n`;
  
//   deadlines.forEach((d, i) => {
//     const status = getStatus(d.date);
//     const statusEmoji = status.diff < 0 ? '\u{26D4}' : status.diff === 0 ? '\u{1F534}' : status.diff <= 3 ? '\u{1F534}' : status.diff <= 7 ? '\u{1F7E0}' : '\u{2705}';
//     msg += `${i+1}. ${statusEmoji} ${d.name} - ${fmtDate(d.date)}\n`;
//   });
  
//   msg += `\n\u{2696} TrustLeaf Advisors LLP`;
//   return msg;
// }

// // ─────────────────────────────────────────────────────────────
// // WHATSAPP REMINDERS HELPER FUNCTIONS
// // ─────────────────────────────────────────────────────────────
// function generateWhatsAppMessage(row) {
//   const status = getStatus(row.date);
//   const daysLeft = status.diff;
  
//   let urgencyEmoji = '\u{2705}'; // ✅
//   let urgencyText = 'Upcoming';
//   if (daysLeft < 0) { urgencyEmoji = '\u{26D4}'; urgencyText = 'OVERDUE'; } // ⛔
//   else if (daysLeft === 0) { urgencyEmoji = '\u{1F534}'; urgencyText = 'DUE TODAY'; } // 🔴
//   else if (daysLeft <= 3) { urgencyEmoji = '\u{1F534}'; urgencyText = 'CRITICAL'; } // 🔴
//   else if (daysLeft <= 7) { urgencyEmoji = '\u{1F7E0}'; urgencyText = 'URGENT'; } // 🟠
  
//   return `${urgencyEmoji} *COMPLIANCE REMINDER*\n\n` +
//     `\u{1F4CB} *${row.name}*\n` +
//     `\u{1F4C5} *Due:* ${fmtDate(row.date)}\n` +
//     `\u{23F0} *Status:* ${urgencyText} ${daysLeft > 0 ? `(${daysLeft} days left)` : ''}\n` +
//     `\u{1F4DD} *Period:* ${row.period}\n` +
//     `\u{1F3DB} *Category:* ${row.cat}\n\n` +
//     `\u{1F517} View in TrustLeaf Compliance Calendar\n` +
//     `\u{2696} TrustLeaf Advisors LLP`;
// }

// function openWhatsAppWeb(message) {
//   const encodedMsg = encodeURIComponent(message);
//   window.open(`https://web.whatsapp.com/send?text=${encodedMsg}`, '_blank');
// }

// function openWhatsAppMobile(phoneNumber, message) {
//   const encodedMsg = encodeURIComponent(message);
//   // For mobile, use the phone-specific link
//   const link = phoneNumber 
//     ? `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMsg}`
//     : `https://wa.me/?text=${encodedMsg}`;
//   window.open(link, '_blank');
// }

// // ─────────────────────────────────────────────────────────────
// // STEP 1 — NAME + CONSTITUTION
// // ─────────────────────────────────────────────────────────────
// function Step1({ onNext }) {
//   const [name, setName]   = useState("");
//   const [constit, setConstit] = useState("");
//   const [err, setErr]     = useState("");
//   const [bulkUploadModal, setBulkUploadModal] = useState(false);
//   const [bulkData, setBulkData] = useState([]);
//   const [bulkSending, setBulkSending] = useState(false);
//   const [bulkProgress, setBulkProgress] = useState({ sent: 0, total: 0, errors: [] });

//   function proceed() {
//     if (!name.trim()) { setErr("Please enter client / entity name"); return; }
//     if (!constit)     { setErr("Please select constitution of business"); return; }
//     onNext({ name: name.trim(), constit });
//   }

//   return (
//     <div style={styles.stepWrap}>
//       {/* Brand bar */}
//       <div style={styles.brand}>
//         <span style={styles.brandIcon}>⚖</span>
//         <div style={{flex:1}}>
//           <div style={styles.brandName}>TrustLeaf Advisors LLP</div>
//           <div style={styles.brandSub}>Compliance Calendar · FY 2026–27</div>
//         </div>
//         <button onClick={()=>setBulkUploadModal(true)} style={{
//           padding:"10px 18px",borderRadius:"8px",border:"none",
//           background:"linear-gradient(135deg,#25d366,#1ba85c)",color:"#fff",
//           fontSize:"13px",fontWeight:"700",cursor:"pointer",
//           boxShadow:"0 2px 8px rgba(37,211,102,0.3)",
//           whiteSpace:"nowrap",transition:"all 0.18s"
//         }}>📤 Bulk WhatsApp Send</button>
//       </div>

//       <div style={styles.card}>
//         <div style={styles.stepBadge}>Step 1 of 2</div>
//         <h2 style={styles.h2}>Tell us about your client</h2>
//         <p style={styles.sub}>We'll filter only the compliance deadlines that apply to them.</p>

//         {/* Name */}
//         <label style={styles.label}>Client / Entity Name *</label>
//         <input
//           style={{...styles.input, borderColor: err && !name ? "#ef4444":"#d1ccc5"}}
//           placeholder="e.g. Sharma & Sons Pvt Ltd"
//           value={name}
//           onChange={e => { setName(e.target.value); setErr(""); }}
//           onKeyDown={e => e.key === "Enter" && proceed()}
//         />

//         {/* Constitution grid */}
//         <label style={{...styles.label, marginTop:"20px"}}>Constitution of Business *</label>
//         <div style={styles.constitGrid}>
//           {CONSTITUTIONS.map(c => (
//             <div
//               key={c.id}
//               onClick={() => { setConstit(c.id); setErr(""); }}
//               style={{
//                 ...styles.constitCard,
//                 borderColor: constit === c.id ? "#8B1A1A" : "#e2ddd6",
//                 background:  constit === c.id ? "#fdf0f0" : "#faf8f5",
//                 transform:   constit === c.id ? "translateY(-2px)" : "none",
//                 boxShadow:   constit === c.id ? "0 4px 16px rgba(139,26,26,0.12)" : "none",
//               }}
//             >
//               <div style={styles.constitIcon}>{c.icon}</div>
//               <div style={{
//                 ...styles.constitLabel,
//                 color: constit === c.id ? "#8B1A1A" : "#2c2420",
//                 fontWeight: constit === c.id ? "700" : "500",
//               }}>{c.label}</div>
//               {constit === c.id && (
//                 <div style={styles.constitCheck}>✓</div>
//               )}
//             </div>
//           ))}
//         </div>

//         {err && <div style={styles.error}>{err}</div>}

//         <button style={styles.primaryBtn} onClick={proceed}>
//           Continue to Acts Selection →
//         </button>
//       </div>

//       {/* BULK UPLOAD MODAL */}
//       {bulkUploadModal && (
//         <div style={{
//           position:"fixed",top:0,left:0,right:0,bottom:0,
//           background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",
//           zIndex:1001,padding:"20px"
//         }} onClick={()=>!bulkSending && setBulkUploadModal(false)}>
//           <div style={{
//             background:"#fff",borderRadius:"14px",padding:"28px",maxWidth:"600px",width:"100%",
//             boxShadow:"0 10px 40px rgba(0,0,0,0.3)",maxHeight:"90vh",overflowY:"auto"
//           }} onClick={e=>e.stopPropagation()}>
            
//             <div style={{marginBottom:"20px"}}>
//               <button onClick={()=>!bulkSending && setBulkUploadModal(false)} style={{
//                 float:"right",background:"none",border:"none",fontSize:"24px",cursor:"pointer",color:"#999"
//               }} disabled={bulkSending}>✕</button>
//               <h2 style={{margin:"0 0 8px 0",color:"#1a0808",fontSize:"20px",fontWeight:"700"}}>
//                 📤 Bulk WhatsApp Send
//               </h2>
//               <p style={{margin:"0",color:"#9c8e80",fontSize:"13px"}}>
//                 Upload Excel/CSV with PAN, Name, WhatsApp Number
//               </p>
//             </div>

//             {bulkSending ? (
//               <div style={{textAlign:"center",padding:"20px"}}>
//                 <div style={{fontSize:"14px",color:"#1a0808",marginBottom:"16px"}}>
//                   Sending {bulkProgress.sent} of {bulkProgress.total}...
//                 </div>
//                 <div style={{
//                   background:"#e2ddd6",height:"8px",borderRadius:"4px",marginBottom:"16px",overflow:"hidden"
//                 }}>
//                   <div style={{
//                     background:"linear-gradient(135deg,#25d366,#1ba85c)",
//                     height:"100%",
//                     width:`${bulkProgress.total ? (bulkProgress.sent / bulkProgress.total) * 100 : 0}%`,
//                     transition:"width 0.3s"
//                   }}></div>
//                 </div>
//                 {bulkProgress.errors.length > 0 && (
//                   <div style={{background:"#fef3c7",border:"1px solid #fbbf24",borderRadius:"8px",padding:"12px",marginTop:"16px",textAlign:"left"}}>
//                     <div style={{color:"#92400e",fontSize:"12px",fontWeight:"700",marginBottom:"8px"}}>Errors ({bulkProgress.errors.length}):</div>
//                     {bulkProgress.errors.map((err,i)=>(
//                       <div key={i} style={{color:"#92400e",fontSize:"11px",marginBottom:"4px"}}>
//                         • {err}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <>
//                 <div style={{background:"#f5f1eb",borderRadius:"10px",padding:"16px",marginBottom:"20px"}}>
//                   <div style={{fontSize:"12px",color:"#1a0808",marginBottom:"8px"}}>
//                     <strong>File Format Required (CSV recommended):</strong>
//                   </div>
//                   <div style={{fontSize:"11px",color:"#9c8e80",fontFamily:"monospace",background:"#fff",padding:"8px",borderRadius:"4px",marginBottom:"8px"}}>
//                     Column A: PAN (e.g., AABCP1234H)<br/>
//                     Column B: Name (e.g., ABC Consultants)<br/>
//                     Column C: WhatsApp No (e.g., 9876543210)
//                   </div>
//                   <div style={{fontSize:"11px",color:"#1a0808"}}>
//                     ℹ️ PAN 4th character auto-detects entity type:<br/>
//                     <strong>P</strong>=Individual, <strong>C</strong>=Company, <strong>H</strong>=HUF, <strong>F</strong>=Firm/LLP, <strong>T</strong>=Trust
//                   </div>
//                 </div>

//                 <div style={{marginBottom:"20px"}}>
//                   <label style={{
//                     display:"block",
//                     padding:"20px",
//                     border:"2px dashed #25d366",
//                     borderRadius:"8px",
//                     textAlign:"center",
//                     cursor:"pointer",
//                     background:"#f0fdf4",
//                     transition:"all 0.18s"
//                   }}>
//                     <input
//                       type="file"
//                       accept=".xlsx,.xls,.csv"
//                       onChange={(e)=>{
//                         const file = e.target.files[0];
//                         if (!file) return;
                        
//                         const reader = new FileReader();
//                         reader.onload = (event) => {
//                           try {
//                             const csv = event.target.result;
//                             const rows = csv.split('\n').map(r=>r.split(',').map(c=>c.trim()));
//                             const data = rows.slice(1).filter(r=>r[0] && r[1] && r[2]).map(r=>({
//                               pan: r[0],
//                               name: r[1],
//                               phone: r[2],
//                               entityType: detectEntityType(r[0])
//                             }));
//                             setBulkData(data);
//                           } catch (err) {
//                             alert('Error parsing file: ' + err.message);
//                           }
//                         };
//                         reader.readAsText(file);
//                       }}
//                       style={{display:"none"}}
//                     />
//                     <div style={{fontSize:"14px",color:"#1ba85c",fontWeight:"700"}}>
//                       📁 Choose File (CSV/Excel)
//                     </div>
//                     <div style={{fontSize:"11px",color:"#9c8e80",marginTop:"4px"}}>
//                       or drag and drop
//                     </div>
//                   </label>
//                 </div>

//                 {bulkData.length > 0 && (
//                   <div style={{marginBottom:"20px"}}>
//                     <div style={{fontSize:"12px",color:"#1a0808",fontWeight:"700",marginBottom:"8px"}}>
//                       📋 Preview ({bulkData.length} contacts):
//                     </div>
//                     <div style={{
//                       background:"#f5f1eb",borderRadius:"8px",maxHeight:"200px",overflowY:"auto",padding:"8px"
//                     }}>
//                       {bulkData.slice(0,5).map((row,i)=>(
//                         <div key={i} style={{fontSize:"11px",color:"#1a0808",padding:"6px",borderBottom:"1px solid #e2ddd6"}}>
//                           <strong>{row.name}</strong> ({row.entityType.toUpperCase()}) — {row.phone}
//                         </div>
//                       ))}
//                       {bulkData.length > 5 && <div style={{fontSize:"11px",color:"#9c8e80",padding:"6px",textAlign:"center"}}>... and {bulkData.length-5} more</div>}
//                     </div>
//                   </div>
//                 )}

//                 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
//                   <button onClick={()=>{setBulkUploadModal(false);setBulkData([]);}} style={{
//                     padding:"12px 16px",borderRadius:"8px",border:"1px solid #e2ddd6",
//                     background:"#fff",color:"#2c2420",fontSize:"13px",fontWeight:"700",
//                     cursor:"pointer",transition:"all 0.18s"
//                   }}>Cancel</button>
//                   <button onClick={async()=>{
//                     if (bulkData.length === 0) {
//                       alert("Please upload a file first");
//                       return;
//                     }
                    
//                     setBulkSending(true);
//                     setBulkProgress({sent:0,total:bulkData.length,errors:[]});
                    
//                     let errorList = [];
//                     for (let i = 0; i < bulkData.length; i++) {
//                       const row = bulkData[i];
//                       const phone = validatePhoneNumber(row.phone);
                      
//                       if (!phone) {
//                         const errMsg = `Row ${i+1}: Invalid phone - ${row.phone}`;
//                         errorList.push(errMsg);
//                         setBulkProgress(p=>({...p,errors:[...p.errors,errMsg],sent:p.sent+1}));
//                         continue;
//                       }
                      
//                       const relevantDeadlines = getRelevantDeadlines(row.entityType);
//                       const msg = generateBulkMessage(row.name, row.entityType, relevantDeadlines);
//                       const encodedMsg = encodeURIComponent(msg);
//                       const link = `https://wa.me/${phone}?text=${encodedMsg}`;
//                       window.open(link,'_blank');
                      
//                       setBulkProgress(p=>({...p,sent:p.sent+1}));
//                       await new Promise(resolve=>setTimeout(resolve,2000));
//                     }
                    
//                     setBulkSending(false);
//                     alert(`✅ Opened ${bulkData.length - errorList.length} WhatsApp windows\n❌ Errors: ${errorList.length}`);
//                     setBulkUploadModal(false);
//                     setBulkData([]);
//                     setBulkProgress({sent:0,total:0,errors:[]});
//                   }} disabled={bulkData.length===0 || bulkSending} style={{
//                     padding:"12px 16px",borderRadius:"8px",border:"none",
//                     background:bulkData.length===0?"#ccc":"linear-gradient(135deg,#25d366,#1ba85c)",color:"#fff",
//                     fontSize:"13px",fontWeight:"700",cursor:bulkData.length===0?"not-allowed":"pointer",
//                     transition:"all 0.18s"
//                   }}>📤 Send to All</button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // STEP 2 — SELECT ACTS
// // ─────────────────────────────────────────────────────────────
// function Step2({ name, constit, onBack, onNext }) {
//   const constitution = CONSTITUTIONS.find(c => c.id === constit);
//   const available = ALL_ACTS.filter(a => constitution.acts.includes(a.id));
//   const [selected, setSelected] = useState(available.map(a => a.id)); // all pre-selected

//   function toggle(id) {
//     setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
//   }

//   return (
//     <div style={styles.stepWrap}>
//       <div style={styles.brand}>
//         <span style={styles.brandIcon}>⚖</span>
//         <div>
//           <div style={styles.brandName}>TrustLeaf Advisors LLP</div>
//           <div style={styles.brandSub}>Compliance Calendar · FY 2026–27</div>
//         </div>
//       </div>

//       <div style={styles.card}>
//         <div style={styles.stepBadge}>Step 2 of 2</div>
//         <h2 style={styles.h2}>Which acts apply?</h2>
//         <p style={styles.sub}>
//           For <strong style={{color:"#8B1A1A"}}>{name}</strong> ({constitution.label}) —
//           all applicable acts are pre-selected. Uncheck what's not needed.
//         </p>

//         <div style={{display:"flex", flexDirection:"column", gap:"10px", marginBottom:"24px"}}>
//           {available.map(act => {
//             const sel = selected.includes(act.id);
//             return (
//               <div
//                 key={act.id}
//                 onClick={() => toggle(act.id)}
//                 style={{
//                   display:"flex", alignItems:"center", gap:"14px",
//                   padding:"14px 18px", borderRadius:"12px",
//                   border:`2px solid ${sel ? act.color+"55" : "#e2ddd6"}`,
//                   background: sel ? act.bg : "#faf8f5",
//                   cursor:"pointer", transition:"all 0.18s",
//                   transform: sel ? "translateX(4px)":"none",
//                 }}
//               >
//                 <span style={{fontSize:"22px"}}>{act.icon}</span>
//                 <div style={{flex:1}}>
//                   <div style={{fontSize:"14px", fontWeight:"700", color: sel ? act.color : "#2c2420"}}>
//                     {act.label}
//                   </div>
//                   <div style={{fontSize:"11px", color:"#9c8e80", marginTop:"2px"}}>
//                     {DB.filter(r => r.cat === act.id).length} deadlines in FY 2026-27
//                   </div>
//                 </div>
//                 <div style={{
//                   width:"22px", height:"22px", borderRadius:"50%",
//                   border:`2px solid ${sel ? act.color : "#d4c9bc"}`,
//                   background: sel ? act.color : "transparent",
//                   display:"flex", alignItems:"center", justifyContent:"center",
//                   flexShrink:0, fontSize:"12px", color:"#fff", fontWeight:"700",
//                   transition:"all 0.18s",
//                 }}>{sel ? "✓" : ""}</div>
//               </div>
//             );
//           })}
//         </div>

//         <div style={{display:"flex", gap:"10px"}}>
//           <button style={styles.secondaryBtn} onClick={onBack}>← Back</button>
//           <button
//             style={{
//               ...styles.primaryBtn, flex:2, margin:0,
//               background: selected.length === 0 ? "#d4c9bc" : "linear-gradient(135deg,#8B1A1A,#b02020)",
//               cursor: selected.length === 0 ? "not-allowed":"pointer",
//             }}
//             onClick={() => selected.length > 0 && onNext(selected)}
//           >
//             {selected.length === 0
//               ? "Select at least one act"
//               : `View Compliance Calendar (${DB.filter(r=>selected.includes(r.cat)).length} deadlines) →`}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // RESULTS PAGE
// // ─────────────────────────────────────────────────────────────
// function Results({ name, constit, selectedActs, onReset }) {
//   const constitution = CONSTITUTIONS.find(c => c.id === constit);

//   const [filterCat,    setFilterCat]    = useState("all");
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [filterMonth,  setFilterMonth]  = useState("all");
//   const [search,       setSearch]       = useState("");
//   const [sortKey,      setSortKey]      = useState("date");
//   const [sortDir,      setSortDir]      = useState(1);
//   const [copied,       setCopied]       = useState(null);
//   const [whatsappModal, setWhatsappModal] = useState(null);
//   const [whatsappPhone, setWhatsappPhone] = useState("");

//   // Base dataset
//   const dataset = useMemo(() =>
//     DB.filter(r => selectedActs.includes(r.cat)).sort((a,b) => a.date.localeCompare(b.date)),
//     [selectedActs]
//   );

//   // Stats
//   const stats = useMemo(() => {
//     const s = { total:0, overdue:0, urgent:0, upcoming:0, ok:0 };
//     dataset.forEach(r => {
//       s.total++;
//       const st = getStatus(r.date);
//       if (st.key === "overdue" || st.key === "today") s.overdue++;
//       else if (st.key === "urgent") s.urgent++;
//       else if (st.key === "upcoming") s.upcoming++;
//       else s.ok++;
//     });
//     return s;
//   }, [dataset]);

//   // Unique months
//   const months = useMemo(() => {
//     const seen = new Set();
//     dataset.forEach(r => seen.add(r.date.slice(0,7)));
//     return [...seen].sort();
//   }, [dataset]);

//   // Filtered + sorted
//   const rows = useMemo(() => {
//     let data = dataset.filter(r => {
//       if (filterCat !== "all" && r.cat !== filterCat) return false;
//       if (filterMonth !== "all" && r.date.slice(0,7) !== filterMonth) return false;
//       if (filterStatus !== "all") {
//         const st = getStatus(r.date);
//         const k = (st.key === "today") ? "overdue" : st.key;
//         if (filterStatus === "overdue" && k !== "overdue") return false;
//         if (filterStatus === "urgent"  && k !== "urgent")  return false;
//         if (filterStatus === "upcoming"&& k !== "upcoming") return false;
//         if (filterStatus === "ok"      && k !== "ok")       return false;
//       }
//       if (search) {
//         const q = search.toLowerCase();
//         if (!r.name.toLowerCase().includes(q) &&
//             !r.period.toLowerCase().includes(q) &&
//             !r.cat.toLowerCase().includes(q)) return false;
//       }
//       return true;
//     });
//     return [...data].sort((a,b) => {
//       let va, vb;
//       if (sortKey === "date")   { va=a.date; vb=b.date; }
//       else if (sortKey === "name")   { va=a.name; vb=b.name; }
//       else if (sortKey === "status") { va=getStatus(a.date).diff; vb=getStatus(b.date).diff; }
//       else { va=a.date; vb=b.date; }
//       return (va<vb?-1:va>vb?1:0)*sortDir;
//     });
//   }, [dataset, filterCat, filterMonth, filterStatus, search, sortKey, sortDir]);

//   function handleSort(key) {
//     if (sortKey===key) setSortDir(d=>d*-1); else { setSortKey(key); setSortDir(1); }
//   }

//   function copyRow(r) {
//     const act = ALL_ACTS.find(a=>a.id===r.cat);
//     navigator.clipboard.writeText(
//       `${r.name}\nPeriod: ${r.period}\nDue: ${fmtDate(r.date)}\nAct: ${act?.label||r.cat}\nStatus: ${getStatus(r.date).label} (${daysLabel(getStatus(r.date).diff)})`
//     ).then(()=>{ setCopied(r.date+r.name); setTimeout(()=>setCopied(null),1500); });
//   }

//   function exportXLS() {
//     const actCols = selectedActs.map(id=>ALL_ACTS.find(a=>a.id===id)?.label||id).join(", ");
//     let html=`<html><head><meta charset="UTF-8"></head><body>
// <p style="font-family:Arial;font-size:13px;margin-bottom:8px">
//   <b>TrustLeaf Advisors LLP — Compliance Calendar FY 2026–27</b><br/>
//   Client: ${name} &nbsp;|&nbsp; Constitution: ${constitution.label} &nbsp;|&nbsp; Acts: ${actCols}
// </p>
// <table border="1" style="font-family:Arial;font-size:12px;border-collapse:collapse">
// <thead><tr style="background:#8B1A1A;color:#fff">
// <th style="padding:6px 10px">Due Date</th>
// <th style="padding:6px 10px">Status</th>
// <th style="padding:6px 10px">Days Left</th>
// <th style="padding:6px 10px">Compliance</th>
// <th style="padding:6px 10px">Period</th>
// <th style="padding:6px 10px">Act / Category</th>
// </tr></thead><tbody>`;
//     rows.forEach(r=>{
//       const s=getStatus(r.date);
//       const act=ALL_ACTS.find(a=>a.id===r.cat);
//       html+=`<tr style="background:${s.bg}">
// <td style="padding:5px 10px">${fmtDate(r.date)}</td>
// <td style="padding:5px 10px;color:${s.text};font-weight:bold">${s.label}</td>
// <td style="padding:5px 10px">${daysLabel(s.diff)}</td>
// <td style="padding:5px 10px">${r.name}</td>
// <td style="padding:5px 10px">${r.period}</td>
// <td style="padding:5px 10px">${act?.label||r.cat}</td>
// </tr>`;
//     });
//     html+=`</tbody></table><br/><p style="font-family:Arial;font-size:10px;color:#888">Generated by TrustLeaf Advisors LLP Compliance Tool · ${new Date().toLocaleDateString("en-IN")}</p></body></html>`;
//     const blob=new Blob([html],{type:"application/vnd.ms-excel;charset=utf-8"});
//     const url=URL.createObjectURL(blob);
//     const a=document.createElement("a");
//     a.href=url; a.download=`${name.replace(/\s+/g,"_")}_Compliance_FY2627.xls`;
//     a.click(); URL.revokeObjectURL(url);
//   }

//   // Group by month for separators
//   const grouped = useMemo(()=>{
//     if (sortKey!=="date") return rows.map(r=>({type:"row",row:r}));
//     const out=[]; let last=null;
//     rows.forEach(r=>{
//       const m=r.date.slice(0,7);
//       if(m!==last){out.push({type:"sep",month:m});last=m;}
//       out.push({type:"row",row:r});
//     });
//     return out;
//   },[rows,sortKey]);

//   const StatCard = ({label,count,color,statusKey})=>(
//     <div
//       onClick={()=>setFilterStatus(s=>s===statusKey?"all":statusKey)}
//       style={{
//         background:"#fff", border:`1px solid ${filterStatus===statusKey?color+"55":"#e2ddd6"}`,
//         borderRadius:"10px", padding:"14px 16px", cursor:"pointer",
//         transition:"all 0.18s", position:"relative", overflow:"hidden",
//         background: filterStatus===statusKey?"#fdf8f5":"#fff",
//         transform: filterStatus===statusKey?"translateY(-2px)":"none",
//         boxShadow: filterStatus===statusKey?`0 4px 16px ${color}22`:"none",
//       }}
//     >
//       <div style={{position:"absolute",left:0,top:0,bottom:0,width:"3px",background:color,borderRadius:"10px 0 0 10px"}}/>
//       <div style={{fontSize:"26px",fontWeight:"700",fontFamily:"'Courier New',monospace",color,lineHeight:1}}>{count}</div>
//       <div style={{fontSize:"10px",color:"#9c8e80",textTransform:"uppercase",letterSpacing:"0.8px",marginTop:"5px",fontWeight:"600"}}>{label}</div>
//     </div>
//   );

//   return (
//     <div style={{minHeight:"100vh",background:"#f7f4f0",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>

//       {/* HEADER */}
//       <header style={{
//         background:"linear-gradient(135deg,#1a0808 0%,#3d0e0e 55%,#5a1a0a 100%)",
//         padding:"0 32px", display:"flex", alignItems:"center",
//         justifyContent:"space-between", gap:"12px", flexWrap:"wrap",
//         boxShadow:"0 2px 20px rgba(0,0,0,0.3)", position:"sticky", top:0, zIndex:100,
//         minHeight:"64px",
//       }}>
//         <div style={{display:"flex",alignItems:"center",gap:"14px",padding:"12px 0"}}>
//           <span style={{fontSize:"26px"}}>⚖</span>
//           <div>
//             <div style={{fontFamily:"Georgia,serif",color:"#fff",fontSize:"17px",fontWeight:"700"}}>TrustLeaf Advisors LLP</div>
//             <div style={{color:"rgba(212,133,26,0.8)",fontSize:"10px",letterSpacing:"2px",textTransform:"uppercase"}}>Compliance Calendar · FY 2026–27</div>
//           </div>
//         </div>
//         <div style={{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap",padding:"8px 0"}}>
//           <span style={{background:"rgba(212,133,26,0.12)",border:"1px solid rgba(212,133,26,0.3)",color:"rgba(245,166,35,0.9)",padding:"5px 12px",borderRadius:"20px",fontSize:"12px",fontWeight:"600"}}>
//             📋 {name}
//           </span>
//           <span style={{background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",color:"rgba(255,255,255,0.65)",padding:"5px 12px",borderRadius:"20px",fontSize:"11px"}}>
//             {constitution.icon} {constitution.label}
//           </span>
//           <button
//             onClick={onReset}
//             style={{background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",color:"rgba(255,255,255,0.7)",padding:"5px 12px",borderRadius:"20px",fontSize:"11px",cursor:"pointer",fontWeight:"500"}}
//           >✎ New Search</button>
//         </div>
//       </header>

//       <div style={{maxWidth:"1320px",margin:"0 auto",padding:"24px 20px 60px"}}>

//         {/* STAT CARDS */}
//         <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",marginBottom:"20px"}}>
//           <StatCard label="Total Deadlines" count={stats.total}    color="#8B1A1A" statusKey="all"/>
//           <StatCard label="Overdue / Today" count={stats.overdue}  color="#ef4444" statusKey="overdue"/>
//           <StatCard label="This Week"        count={stats.urgent}   color="#eab308" statusKey="urgent"/>
//           <StatCard label="This Month"       count={stats.upcoming} color="#3b82f6" statusKey="upcoming"/>
//         </div>

//         {/* FILTERS ROW */}
//         <div style={{background:"#fff",border:"1px solid #e2ddd6",borderRadius:"10px",padding:"14px 18px",marginBottom:"14px"}}>

//           {/* Act filter */}
//           <div style={{display:"flex",gap:"7px",flexWrap:"wrap",alignItems:"center",marginBottom:"10px"}}>
//             <span style={styles.filterLabel}>Act</span>
//             {[{id:"all",label:"All Acts",color:"#8B1A1A"},...ALL_ACTS.filter(a=>selectedActs.includes(a.id))].map(a=>(
//               <span key={a.id} onClick={()=>setFilterCat(a.id)} style={{
//                 padding:"4px 12px",borderRadius:"20px",fontSize:"11px",fontWeight:"600",
//                 cursor:"pointer",transition:"all 0.15s",
//                 background: filterCat===a.id ? (a.color||"#8B1A1A") : "#f2ede6",
//                 color: filterCat===a.id ? "#fff" : "#6b5e54",
//                 border:`1px solid ${filterCat===a.id?(a.color||"#8B1A1A"):"#e2ddd6"}`,
//               }}>{a.icon && filterCat!==a.id ? a.icon+" " : ""}{a.label}</span>
//             ))}
//           </div>

//           {/* Month filter */}
//           <div style={{display:"flex",gap:"7px",flexWrap:"wrap",alignItems:"center"}}>
//             <span style={styles.filterLabel}>Month</span>
//             <span onClick={()=>setFilterMonth("all")} style={{
//               padding:"4px 12px",borderRadius:"20px",fontSize:"11px",fontWeight:"600",
//               cursor:"pointer",background:filterMonth==="all"?"#8B1A1A":"#f2ede6",
//               color:filterMonth==="all"?"#fff":"#6b5e54",
//               border:`1px solid ${filterMonth==="all"?"#8B1A1A":"#e2ddd6"}`,
//             }}>All</span>
//             {months.map(m=>{
//               const label = new Date(m+"-15").toLocaleDateString("en-IN",{month:"short",year:"2-digit"});
//               return (
//                 <span key={m} onClick={()=>setFilterMonth(m)} style={{
//                   padding:"4px 12px",borderRadius:"20px",fontSize:"11px",fontWeight:"600",
//                   cursor:"pointer",background:filterMonth===m?"#8B1A1A":"#f2ede6",
//                   color:filterMonth===m?"#fff":"#6b5e54",
//                   border:`1px solid ${filterMonth===m?"#8B1A1A":"#e2ddd6"}`,
//                 }}>{label}</span>
//               );
//             })}
//           </div>
//         </div>

//         {/* SEARCH + EXPORT */}
//         <div style={{display:"flex",gap:"10px",marginBottom:"14px",flexWrap:"wrap"}}>
//           <div style={{position:"relative",flex:1,minWidth:"200px"}}>
//             <span style={{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#b0a090",fontSize:"15px"}}>🔍</span>
//             <input
//               value={search}
//               onChange={e=>setSearch(e.target.value)}
//               placeholder="Search compliance name, period…"
//               style={{...styles.input,paddingLeft:"36px",margin:0,fontSize:"13px"}}
//             />
//             {search&&<span onClick={()=>setSearch("")} style={{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",cursor:"pointer",color:"#b0a090",fontSize:"16px"}}>✕</span>}
//           </div>
//           <span style={{fontSize:"12px",color:"#9c8e80",alignSelf:"center",whiteSpace:"nowrap"}}>{rows.length} deadline{rows.length!==1?"s":""}</span>
//           <button onClick={exportXLS} style={{
//             display:"flex",alignItems:"center",gap:"6px",
//             padding:"9px 16px",background:"#8B1A1A",color:"#fff",
//             border:"none",borderRadius:"8px",fontSize:"12px",fontWeight:"700",cursor:"pointer",whiteSpace:"nowrap",
//           }}>⬇ Export Excel</button>
//         </div>

//         {/* TABLE */}
//         <div style={{background:"#fff",border:"1px solid #e2ddd6",borderRadius:"10px",overflow:"hidden"}}>
//           {rows.length===0 ? (
//             <div style={{padding:"60px 20px",textAlign:"center",color:"#9c8e80"}}>
//               <div style={{fontSize:"36px",marginBottom:"12px"}}>🔍</div>
//               <p style={{fontSize:"14px"}}>No deadlines match your current filters.</p>
//             </div>
//           ):(
//             <div style={{overflowX:"auto"}}>
//               <table style={{width:"100%",borderCollapse:"collapse",minWidth:"640px"}}>
//                 <thead>
//                   <tr>
//                     {[
//                       ["date","Due Date","110px"],
//                       ["status","Status","110px"],
//                       ["name","Compliance",""],
//                       ["","Period","120px"],
//                       ["","Act","130px"],
//                       ["","","55px"],
//                     ].map(([key,label,width],i)=>(
//                       <th key={i} onClick={()=>key&&handleSort(key)} style={{
//                         padding:"10px 12px",textAlign:"left",fontSize:"10px",fontWeight:"700",
//                         textTransform:"uppercase",letterSpacing:"1px",
//                         background:"#f2ede6",borderBottom:"1px solid #e2ddd6",
//                         cursor:key?"pointer":"default",userSelect:"none",whiteSpace:"nowrap",
//                         color:sortKey===key?"#8B1A1A":"#6b5e54",
//                         width:width||undefined,
//                       }}>
//                         {label} {key&&(sortKey===key?(sortDir===1?"↑":"↓"):"↕")}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {grouped.map((item,idx)=>{
//                     if(item.type==="sep") return (
//                       <tr key={"s"+idx}>
//                         <td colSpan={6} style={{
//                           padding:"7px 12px",fontSize:"10px",fontWeight:"700",
//                           textTransform:"uppercase",letterSpacing:"1.5px",
//                           background:"linear-gradient(90deg,#1a0808,#2d0a0a)",
//                           color:"rgba(212,133,26,0.9)",
//                         }}>{monthLabel(item.month+"-15")}</td>
//                       </tr>
//                     );
//                     const r=item.row;
//                     const s=getStatus(r.date);
//                     const act=ALL_ACTS.find(a=>a.id===r.cat);
//                     const isCopied=copied===r.date+r.name;
//                     return (
//                       <tr key={idx}
//                         style={{borderBottom:"1px solid #f0ede8",transition:"background 0.1s"}}
//                         onMouseEnter={e=>e.currentTarget.style.background="#faf8f5"}
//                         onMouseLeave={e=>e.currentTarget.style.background="#fff"}
//                       >
//                         <td style={{padding:"10px 12px"}}>
//                           <div style={{fontSize:"12px",fontFamily:"'Courier New',monospace",color:"#3d2e26",fontWeight:"600"}}>{fmtDate(r.date)}</div>
//                           <div style={{fontSize:"10px",color:s.text,marginTop:"2px"}}>{daysLabel(s.diff)}</div>
//                         </td>
//                         <td style={{padding:"10px 12px"}}>
//                           <span style={{
//                             display:"inline-flex",alignItems:"center",gap:"5px",
//                             padding:"3px 9px",borderRadius:"20px",
//                             background:s.bg,color:s.text,
//                             fontSize:"10px",fontWeight:"700",
//                           }}>
//                             <span style={{width:"6px",height:"6px",borderRadius:"50%",background:s.dot,display:"inline-block"}}/>
//                             {s.label}
//                           </span>
//                         </td>
//                         <td style={{padding:"10px 12px",fontWeight:"500",color:"#1a0808",fontSize:"13px"}}>{r.name}</td>
//                         <td style={{padding:"10px 12px",fontFamily:"'Courier New',monospace",fontSize:"11px",color:"#9c8e80"}}>{r.period}</td>
//                         <td style={{padding:"10px 12px"}}>
//                           {act && (
//                             <span style={{
//                               padding:"2px 8px",borderRadius:"4px",
//                               background:act.bg,color:act.color,
//                               fontSize:"10px",fontWeight:"700",
//                             }}>{act.label}</span>
//                           )}
//                         </td>
//                         <td style={{padding:"10px 12px"}}>
//                           <div style={{display:"flex",gap:"5px"}}>
//                             <button onClick={()=>copyRow(r)} style={{
//                               background:"none",
//                               border:`1px solid ${isCopied?"#22c55e":"#e2ddd6"}`,
//                               borderRadius:"5px",padding:"3px 8px",fontSize:"10px",cursor:"pointer",
//                               color:isCopied?"#15803d":"#9c8e80",fontWeight:"600",transition:"all 0.15s",
//                             }}>{isCopied?"✓":"⎘"}</button>
//                             <button onClick={()=>setWhatsappModal(r)} style={{
//                               background:"none",
//                               border:"1px solid #25d366",
//                               borderRadius:"5px",padding:"4px 10px",fontSize:"11px",cursor:"pointer",
//                               color:"#25d366",fontWeight:"700",transition:"all 0.18s",
//                               whiteSpace:"nowrap"
//                             }}>📱 WhatsApp</button>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>

//         <div style={{textAlign:"center",marginTop:"32px",fontSize:"10px",color:"#c0b0a0",letterSpacing:"0.5px"}}>
//           TrustLeaf Advisors LLP · Compliance Calendar FY 2026–27 · For guidance only · Verify with applicable notifications before acting
//         </div>


//         {/* WHATSAPP REMINDERS MODAL */}
//         {whatsappModal && (
//           <div style={{
//             position:"fixed",top:0,left:0,right:0,bottom:0,
//             background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",
//             zIndex:1000,padding:"20px"
//           }} onClick={()=>setWhatsappModal(null)}>
//             <div style={{
//               background:"#fff",borderRadius:"14px",padding:"28px",maxWidth:"500px",width:"100%",
//               boxShadow:"0 10px 40px rgba(0,0,0,0.3)",maxHeight:"90vh",overflowY:"auto"
//             }} onClick={e=>e.stopPropagation()}>
              
//               {/* Header */}
//               <div style={{marginBottom:"20px"}}>
//                 <button onClick={()=>setWhatsappModal(null)} style={{
//                   float:"right",background:"none",border:"none",fontSize:"24px",cursor:"pointer",color:"#999"
//                 }}>✕</button>
//                 <h2 style={{margin:"0 0 8px 0",color:"#1a0808",fontSize:"20px",fontWeight:"700"}}>
//                   📱 Send via WhatsApp
//                 </h2>
//                 <p style={{margin:"0",color:"#9c8e80",fontSize:"13px"}}>
//                   {whatsappModal.name}
//                 </p>
//               </div>

//               {/* Deadline Summary */}
//               <div style={{
//                 background:"#f5f1eb",borderRadius:"10px",padding:"14px",marginBottom:"20px",
//                 borderLeft:`4px solid ${getStatus(whatsappModal.date).color}`
//               }}>
//                 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",fontSize:"12px"}}>
//                   <div>
//                     <div style={{color:"#9c8e80",fontSize:"10px",textTransform:"uppercase"}}>Due Date</div>
//                     <div style={{color:"#1a0808",fontWeight:"700"}}>{fmtDate(whatsappModal.date)}</div>
//                   </div>
//                   <div>
//                     <div style={{color:"#9c8e80",fontSize:"10px",textTransform:"uppercase"}}>Status</div>
//                     <div style={{color:getStatus(whatsappModal.date).text,fontWeight:"700"}}>
//                       {getStatus(whatsappModal.date).label}
//                     </div>
//                   </div>
//                   <div>
//                     <div style={{color:"#9c8e80",fontSize:"10px",textTransform:"uppercase"}}>Period</div>
//                     <div style={{color:"#1a0808",fontWeight:"700"}}>{whatsappModal.period}</div>
//                   </div>
//                   <div>
//                     <div style={{color:"#9c8e80",fontSize:"10px",textTransform:"uppercase"}}>Category</div>
//                     <div style={{color:"#1a0808",fontWeight:"700"}}>{whatsappModal.cat}</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Message Preview */}
//               <div style={{marginBottom:"20px"}}>
//                 <label style={{
//                   display:"block",color:"#1a0808",fontSize:"12px",fontWeight:"700",
//                   marginBottom:"8px",textTransform:"uppercase"
//                 }}>Message Preview</label>
//                 <div style={{
//                   background:"#f9f7f4",border:"1px solid #e2ddd6",borderRadius:"8px",
//                   padding:"12px",fontSize:"12px",color:"#2c2420",lineHeight:"1.5",
//                   fontFamily:"'Segoe UI', system-ui, sans-serif",whiteSpace:"pre-wrap",
//                   wordBreak:"break-word",maxHeight:"180px",overflowY:"auto"
//                 }}>
//                   {generateWhatsAppMessage(whatsappModal)}
//                 </div>
//               </div>

//               {/* Phone Number Input (Optional) */}
//               <div style={{marginBottom:"20px"}}>
//                 <label style={{
//                   display:"block",color:"#1a0808",fontSize:"12px",fontWeight:"700",
//                   marginBottom:"6px",textTransform:"uppercase"
//                 }}>
//                   Send to Specific Number (Optional)
//                 </label>
//                 <input
//                   type="tel"
//                   value={whatsappPhone}
//                   onChange={(e)=>setWhatsappPhone(e.target.value)}
//                   placeholder="e.g. +91 98765 43210 or leave blank"
//                   style={{
//                     width:"100%",padding:"10px 12px",borderRadius:"8px",
//                     border:"1px solid #e2ddd6",fontSize:"13px",
//                     fontFamily:"system-ui",boxSizing:"border-box",
//                     marginBottom:"8px"
//                   }}
//                 />
//                 <div style={{fontSize:"11px",color:"#9c8e80"}}>
//                   ℹ️ Leave blank to open WhatsApp Web with the message ready to send.
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:"0"}}>
//                 <button onClick={()=>setWhatsappModal(null)} style={{
//                   padding:"12px 16px",borderRadius:"8px",border:"1px solid #e2ddd6",
//                   background:"#fff",color:"#2c2420",fontSize:"13px",fontWeight:"700",
//                   cursor:"pointer",transition:"all 0.18s"
//                 }}>Cancel</button>
//                 <button onClick={()=>{
//                   const msg = generateWhatsAppMessage(whatsappModal);
//                   if (whatsappPhone.trim()) {
//                     openWhatsAppMobile(whatsappPhone, msg);
//                   } else {
//                     openWhatsAppWeb(msg);
//                   }
//                   setWhatsappModal(null);
//                   setWhatsappPhone("");
//                 }} style={{
//                   padding:"12px 16px",borderRadius:"8px",border:"none",
//                   background:"linear-gradient(135deg,#25d366,#1ba85c)",color:"#fff",
//                   fontSize:"13px",fontWeight:"700",cursor:"pointer",transition:"all 0.18s"
//                 }}>📱 Send on WhatsApp</button>
//               </div>

//               {/* Bulk Actions */}
//               <div style={{borderTop:"1px solid #e2ddd6",marginTop:"16px",paddingTop:"16px"}}>
//                 <label style={{
//                   display:"block",color:"#1a0808",fontSize:"12px",fontWeight:"700",
//                   marginBottom:"10px",textTransform:"uppercase"
//                 }}>Bulk Send Options</label>
//                 <button onClick={()=>{
//                   const critical = rows.filter(r=>getStatus(r.date).diff <= 3 && getStatus(r.date).diff >= 0);
//                   if (critical.length === 0) {
//                     alert("No critical deadlines to send");
//                     return;
//                   }
//                   let msg = "🔴 *CRITICAL COMPLIANCE DEADLINES*\n\n";
//                   critical.forEach((r,i)=>{
//                     msg += `${i+1}. ${r.name} - Due ${fmtDate(r.date)}\n`;
//                   });
//                   msg += "\n⚖️ TrustLeaf Advisors LLP";
//                   openWhatsAppWeb(msg);
//                 }} style={{
//                   width:"100%",padding:"10px 12px",borderRadius:"8px",border:"1px solid #fbbf24",
//                   background:"#fef3c7",color:"#92400e",fontSize:"12px",fontWeight:"600",
//                   cursor:"pointer",transition:"all 0.18s",marginBottom:"8px"
//                 }}>🔴 Send Critical Deadlines ({rows.filter(r=>getStatus(r.date).diff <= 3 && getStatus(r.date).diff >= 0).length})</button>
                
//                 <button onClick={()=>{
//                   const urgent = rows.filter(r=>getStatus(r.date).diff <= 7 && getStatus(r.date).diff >= 0);
//                   if (urgent.length === 0) {
//                     alert("No urgent deadlines to send");
//                     return;
//                   }
//                   let msg = "🟠 *URGENT COMPLIANCE DEADLINES (Next 7 Days)*\n\n";
//                   urgent.forEach((r,i)=>{
//                     msg += `${i+1}. ${r.name} - Due ${fmtDate(r.date)}\n`;
//                   });
//                   msg += "\n⚖️ TrustLeaf Advisors LLP";
//                   openWhatsAppWeb(msg);
//                 }} style={{
//                   width:"100%",padding:"10px 12px",borderRadius:"8px",border:"1px solid #3b82f6",
//                   background:"#dbeafe",color:"#1e40af",fontSize:"12px",fontWeight:"600",
//                   cursor:"pointer",transition:"all 0.18s",marginBottom:"8px"
//                 }}>🟠 Send Urgent (Next 7 Days) ({rows.filter(r=>getStatus(r.date).diff <= 7 && getStatus(r.date).diff >= 0).length})</button>

//                 <button onClick={()=>{
//                   if (rows.length === 0) {
//                     alert("No deadlines to send");
//                     return;
//                   }
//                   let msg = `📋 *COMPLIANCE CALENDAR - ${name.toUpperCase()}*\n\n`;
//                   msg += `Constitution: ${constitution.label}\n`;
//                   msg += `Total Deadlines: ${rows.length}\n`;
//                   msg += `Overdue: ${stats.overdue} | Critical: ${stats.urgent} | Upcoming: ${stats.upcoming}\n\n`;
//                   msg += `📅 Next 5 Deadlines:\n`;
//                   rows.slice(0,5).forEach((r,i)=>{
//                     msg += `${i+1}. ${r.name} - ${fmtDate(r.date)}\n`;
//                   });
//                   msg += "\n⚖️ TrustLeaf Advisors LLP";
//                   openWhatsAppWeb(msg);
//                 }} style={{
//                   width:"100%",padding:"10px 12px",borderRadius:"8px",border:"1px solid #8B1A1A",
//                   background:"#fdf0f0",color:"#8B1A1A",fontSize:"12px",fontWeight:"600",
//                   cursor:"pointer",transition:"all 0.18s"
//                 }}>📊 Send Summary ({rows.length})</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────
// // APP ROOT
// // ─────────────────────────────────────────────────────────────
// export default function App() {
//   const [step, setStep] = useState(1);
//   const [data, setData] = useState({ name:"", constit:"", acts:[] });

//   function fromStep1({ name, constit }) {
//     setData(d=>({...d, name, constit}));
//     setStep(2);
//   }
//   function fromStep2(acts) {
//     setData(d=>({...d, acts}));
//     setStep(3);
//   }
//   function reset() { setStep(1); setData({name:"",constit:"",acts:[]}); }

//   if (step===1) return <Step1 onNext={fromStep1}/>;
//   if (step===2) return <Step2 name={data.name} constit={data.constit} onBack={()=>setStep(1)} onNext={fromStep2}/>;
//   return <Results name={data.name} constit={data.constit} selectedActs={data.acts} onReset={reset}/>;
// }

// // ─────────────────────────────────────────────────────────────
// // SHARED STYLES
// // ─────────────────────────────────────────────────────────────
// const styles = {
//   stepWrap: {
//     minHeight:"100vh",
//     background:"linear-gradient(160deg,#f7f0e8 0%,#faf8f5 40%,#f2ede6 100%)",
//     display:"flex",flexDirection:"column",alignItems:"center",
//     padding:"32px 16px 60px",
//     fontFamily:"'Segoe UI',system-ui,sans-serif",
//   },
//   brand: {
//     display:"flex",alignItems:"center",gap:"14px",marginBottom:"28px",
//   },
//   brandIcon: { fontSize:"32px" },
//   brandName: {
//     fontFamily:"Georgia,serif",fontSize:"20px",fontWeight:"700",
//     color:"#1a0808",letterSpacing:"0.3px",
//   },
//   brandSub: {
//     fontSize:"10px",color:"#8B1A1A",letterSpacing:"2px",
//     textTransform:"uppercase",fontWeight:"600",marginTop:"2px",
//   },
//   card: {
//     background:"#fff",borderRadius:"16px",width:"100%",maxWidth:"560px",
//     padding:"32px",boxShadow:"0 8px 40px rgba(139,26,26,0.1), 0 0 0 1px rgba(139,26,26,0.06)",
//   },
//   stepBadge: {
//     display:"inline-block",background:"#fdf0f0",color:"#8B1A1A",
//     fontSize:"11px",fontWeight:"700",letterSpacing:"1px",textTransform:"uppercase",
//     padding:"4px 12px",borderRadius:"20px",marginBottom:"14px",
//   },
//   h2: {
//     fontFamily:"Georgia,serif",fontSize:"22px",color:"#1a0808",
//     fontWeight:"700",marginBottom:"8px",
//   },
//   sub: { fontSize:"13px",color:"#6b5e54",marginBottom:"22px",lineHeight:"1.5" },
//   label: {
//     display:"block",fontSize:"11px",fontWeight:"700",color:"#8B1A1A",
//     textTransform:"uppercase",letterSpacing:"1px",marginBottom:"8px",
//   },
//   input: {
//     width:"100%",padding:"11px 14px",
//     border:"2px solid #d1ccc5",borderRadius:"10px",
//     fontSize:"14px",fontFamily:"Georgia,serif",color:"#1a0808",
//     outline:"none",transition:"border 0.2s",background:"#faf8f5",
//     boxSizing:"border-box",marginBottom:"2px",
//   },
//   primaryBtn: {
//     display:"block",width:"100%",padding:"13px",marginTop:"24px",
//     background:"linear-gradient(135deg,#8B1A1A,#b02020)",
//     color:"#fff",border:"none",borderRadius:"10px",
//     fontSize:"14px",fontWeight:"700",cursor:"pointer",
//     fontFamily:"Georgia,serif",letterSpacing:"0.5px",
//     boxShadow:"0 4px 16px rgba(139,26,26,0.25)",transition:"all 0.2s",
//   },
//   secondaryBtn: {
//     flex:1,padding:"12px",background:"transparent",
//     border:"2px solid #e2ddd6",borderRadius:"10px",
//     color:"#6b5e54",fontSize:"13px",fontWeight:"600",
//     cursor:"pointer",transition:"all 0.2s",
//   },
//   constitGrid: {
//     display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px",
//     marginBottom:"20px",
//   },
//   constitCard: {
//     position:"relative",padding:"14px 12px",borderRadius:"10px",
//     border:"2px solid #e2ddd6",background:"#faf8f5",
//     cursor:"pointer",transition:"all 0.18s",
//     display:"flex",flexDirection:"column",alignItems:"center",
//     gap:"6px",textAlign:"center",
//   },
//   constitIcon: { fontSize:"22px" },
//   constitLabel: { fontSize:"12px",fontWeight:"500",color:"#2c2420",lineHeight:"1.3" },
//   constitCheck: {
//     position:"absolute",top:"8px",right:"8px",
//     width:"18px",height:"18px",borderRadius:"50%",
//     background:"#8B1A1A",color:"#fff",
//     display:"flex",alignItems:"center",justifyContent:"center",
//     fontSize:"10px",fontWeight:"700",
//   },
//   error: { color:"#ef4444",fontSize:"12px",marginTop:"8px",marginBottom:"4px" },
//   filterLabel: {
//     fontSize:"10px",fontWeight:"700",color:"#9c8e80",
//     textTransform:"uppercase",letterSpacing:"1px",minWidth:"30px",
//   },
// };


//client/src/components/ServicesGrid.jsx
import { useState, useMemo, useCallback } from "react";

// ─────────────────────────────────────────────────────────────
// DATABASE  (from Compliance_Calendar_FY2026-27.csv)
// ─────────────────────────────────────────────────────────────
const DB = [
  {date:'2026-04-30',name:'MSME Form I (Half-Yearly)',period:'Oct 2025–Mar 2026 outstanding payments',cat:'Company Law'},
  {date:'2026-05-30',name:'LLP Form 11 – Annual Return',period:'FY 2025-26',cat:'Company Law'},
  {date:'2026-06-30',name:'DPT-3 (Loans or moneys not to be considered as deposit)',period:'FY 2025-26',cat:'Company Law'},
  {date:'2026-09-30',name:'DIR-3 KYC (once in 3 years)',period:'FY 2025-26',cat:'Company Law'},
  {date:'2026-09-30',name:'AGM',period:'FY 2025-26 (Listed & Unlisted)',cat:'Company Law'},
  {date:'2026-10-15',name:'ADT-1 – Auditor Appointment',period:'Within 15 days of AGM',cat:'Company Law'},
  {date:'2026-10-30',name:'AOC-4 – Financial Statements',period:'Within 30 days of AGM',cat:'Company Law'},
  {date:'2026-10-30',name:'LLP Form 8 – Accounts & Solvency',period:'FY 2025-26',cat:'Company Law'},
  {date:'2026-10-31',name:'MSME Form I (Half-Yearly)',period:'Apr–Sep 2026 outstanding payments',cat:'Company Law'},
  {date:'2026-11-29',name:'MGT-7 / 7A – Annual Return',period:'Within 60 days of AGM',cat:'Company Law'},
  {date:'2026-05-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Apr-26',cat:'GST'},
  {date:'2026-05-11',name:'GSTR-1',period:'Apr-26',cat:'GST'},
  {date:'2026-05-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Apr-26',cat:'GST'},
  {date:'2026-05-20',name:'GSTR-3B',period:'Apr-26',cat:'GST'},
  {date:'2026-06-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'May-26',cat:'GST'},
  {date:'2026-06-11',name:'GSTR-1',period:'May-26',cat:'GST'},
  {date:'2026-06-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'May-26',cat:'GST'},
  {date:'2026-06-20',name:'GSTR-3B',period:'May-26',cat:'GST'},
  {date:'2026-07-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Jun-26',cat:'GST'},
  {date:'2026-07-11',name:'GSTR-1',period:'Jun-26',cat:'GST'},
  {date:'2026-07-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Jun-26',cat:'GST'},
  {date:'2026-07-20',name:'GSTR-3B',period:'Jun-26',cat:'GST'},
  {date:'2026-08-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Jul-26',cat:'GST'},
  {date:'2026-08-11',name:'GSTR-1',period:'Jul-26',cat:'GST'},
  {date:'2026-08-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Jul-26',cat:'GST'},
  {date:'2026-08-20',name:'GSTR-3B',period:'Jul-26',cat:'GST'},
  {date:'2026-09-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Aug-26',cat:'GST'},
  {date:'2026-09-11',name:'GSTR-1',period:'Aug-26',cat:'GST'},
  {date:'2026-09-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Aug-26',cat:'GST'},
  {date:'2026-09-20',name:'GSTR-3B',period:'Aug-26',cat:'GST'},
  {date:'2026-10-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Sep-26',cat:'GST'},
  {date:'2026-10-11',name:'GSTR-1',period:'Sep-26',cat:'GST'},
  {date:'2026-10-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Sep-26',cat:'GST'},
  {date:'2026-10-20',name:'GSTR-3B',period:'Sep-26',cat:'GST'},
  {date:'2026-11-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Oct-26',cat:'GST'},
  {date:'2026-11-11',name:'GSTR-1',period:'Oct-26',cat:'GST'},
  {date:'2026-11-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Oct-26',cat:'GST'},
  {date:'2026-11-20',name:'GSTR-3B',period:'Oct-26',cat:'GST'},
  {date:'2026-12-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Nov-26',cat:'GST'},
  {date:'2026-12-11',name:'GSTR-1',period:'Nov-26',cat:'GST'},
  {date:'2026-12-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Nov-26',cat:'GST'},
  {date:'2026-12-20',name:'GSTR-3B',period:'Nov-26',cat:'GST'},
  {date:'2027-01-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Dec-26',cat:'GST'},
  {date:'2027-01-11',name:'GSTR-1',period:'Dec-26',cat:'GST'},
  {date:'2027-01-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Dec-26',cat:'GST'},
  {date:'2027-01-20',name:'GSTR-3B',period:'Dec-26',cat:'GST'},
  {date:'2027-02-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Jan-27',cat:'GST'},
  {date:'2027-02-11',name:'GSTR-1',period:'Jan-27',cat:'GST'},
  {date:'2027-02-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Jan-27',cat:'GST'},
  {date:'2027-02-20',name:'GSTR-3B',period:'Jan-27',cat:'GST'},
  {date:'2027-03-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Feb-27',cat:'GST'},
  {date:'2027-03-11',name:'GSTR-1',period:'Feb-27',cat:'GST'},
  {date:'2027-03-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Feb-27',cat:'GST'},
  {date:'2027-03-20',name:'GSTR-3B',period:'Feb-27',cat:'GST'},
  {date:'2027-04-10',name:'GSTR-7 / GSTR-8  (TDS/TCS)',period:'Mar-27',cat:'GST'},
  {date:'2027-04-11',name:'GSTR-1',period:'Mar-27',cat:'GST'},
  {date:'2027-04-13',name:'GSTR-5 / GSTR-6  (NRTP/ ISD)',period:'Mar-27',cat:'GST'},
  {date:'2027-04-20',name:'GSTR-3B',period:'Mar-27',cat:'GST'},
  {date:'2026-05-13',name:'IFF  (QRMP)',period:'Apr-26',cat:'GST'},
  {date:'2026-05-25',name:'PMT-06  (QRMP)',period:'Apr-26',cat:'GST'},
  {date:'2026-06-13',name:'IFF  (QRMP)',period:'May-26',cat:'GST'},
  {date:'2026-06-25',name:'PMT-06  (QRMP)',period:'May-26',cat:'GST'},
  {date:'2026-07-13',name:'GSTR-1  (QRMP)',period:'Q1 Apr-Jun 2026',cat:'GST'},
  {date:'2026-07-22',name:'GSTR-3B  (QRMP Group A)',period:'Q1 Apr-Jun 2026',cat:'GST'},
  {date:'2026-07-24',name:'GSTR-3B  (QRMP Group B)',period:'Q1 Apr-Jun 2026',cat:'GST'},
  {date:'2026-08-13',name:'IFF  (QRMP)',period:'Jul-26',cat:'GST'},
  {date:'2026-08-25',name:'PMT-06  (QRMP)',period:'Jul-26',cat:'GST'},
  {date:'2026-09-13',name:'IFF  (QRMP)',period:'Aug-26',cat:'GST'},
  {date:'2026-09-25',name:'PMT-06  (QRMP)',period:'Aug-26',cat:'GST'},
  {date:'2026-10-13',name:'GSTR-1  (QRMP)',period:'Q2 Jul-Sep 2026',cat:'GST'},
  {date:'2026-10-22',name:'GSTR-3B  (QRMP Group A)',period:'Q2 Jul-Sep 2026',cat:'GST'},
  {date:'2026-10-24',name:'GSTR-3B  (QRMP Group B)',period:'Q2 Jul-Sep 2026',cat:'GST'},
  {date:'2026-11-13',name:'IFF  (QRMP)',period:'Oct-26',cat:'GST'},
  {date:'2026-11-25',name:'PMT-06  (QRMP)',period:'Oct-26',cat:'GST'},
  {date:'2026-12-13',name:'IFF  (QRMP)',period:'Nov-26',cat:'GST'},
  {date:'2026-12-25',name:'PMT-06  (QRMP)',period:'Nov-26',cat:'GST'},
  {date:'2027-01-13',name:'GSTR-1  (QRMP)',period:'Q3 Oct-Dec 2026',cat:'GST'},
  {date:'2027-01-22',name:'GSTR-3B  (QRMP Group A)',period:'Q3 Oct-Dec 2026',cat:'GST'},
  {date:'2027-01-24',name:'GSTR-3B  (QRMP Group B)',period:'Q3 Oct-Dec 2026',cat:'GST'},
  {date:'2027-02-13',name:'IFF  (QRMP)',period:'Jan-27',cat:'GST'},
  {date:'2027-02-25',name:'PMT-06  (QRMP)',period:'Jan-27',cat:'GST'},
  {date:'2027-03-13',name:'IFF  (QRMP)',period:'Feb-27',cat:'GST'},
  {date:'2027-03-25',name:'PMT-06  (QRMP)',period:'Feb-27',cat:'GST'},
  {date:'2027-04-13',name:'GSTR-1  (QRMP)',period:'Q4 Jan-Mar 2027',cat:'GST'},
  {date:'2027-04-22',name:'GSTR-3B  (QRMP Group A)',period:'Q4 Jan-Mar 2027',cat:'GST'},
  {date:'2027-04-24',name:'GSTR-3B  (QRMP Group B)',period:'Q4 Jan-Mar 2027',cat:'GST'},
  {date:'2026-07-18',name:'CMP-08',period:'Q1 Apr-Jun 2026',cat:'GST'},
  {date:'2026-10-18',name:'CMP-08',period:'Q2 Jul-Sep 2026',cat:'GST'},
  {date:'2027-01-18',name:'CMP-08',period:'Q3 Oct-Dec 2026',cat:'GST'},
  {date:'2027-04-18',name:'CMP-08',period:'Q4 Jan-Mar 2027',cat:'GST'},
  {date:'2027-06-30',name:'GSTR-4  (Composition Annual Return)',period:'FY 2026-27',cat:'GST'},
  {date:'2027-12-31',name:'GSTR-9 / 9C',period:'FY 2026-27',cat:'GST'},
  {date:'2026-06-15',name:'Advance Tax – 1st Installment',period:'Minimum 15% of total tax liability (FY 2026-27)',cat:'Income Tax'},
  {date:'2026-06-30',name:'Equalisation Levy Statement',period:'For FY 2025-26',cat:'Other'},
  {date:'2026-07-31',name:'ITR Filing – Non-Audit',period:'Individuals (no business income)',cat:'Income Tax'},
  {date:'2026-08-31',name:'ITR Filing – Non-Audit',period:'Business income / Partners (non-audit cases)',cat:'Income Tax'},
  {date:'2026-09-15',name:'Advance Tax – 2nd Installment',period:'45% cumulative tax liability',cat:'Income Tax'},
  {date:'2026-09-30',name:'Tax Audit Report',period:'AY 2026-27',cat:'Income Tax'},
  {date:'2026-10-31',name:'ITR Filing – Audit Cases',period:'AY 2026-27',cat:'Income Tax'},
  {date:'2026-10-31',name:'Transfer Pricing Audit Report',period:'AY 2026-27',cat:'Income Tax'},
  {date:'2026-11-30',name:'ITR Filing – Transfer Pricing Cases',period:'Section 92E cases',cat:'Income Tax'},
  {date:'2026-12-15',name:'Advance Tax – 3rd Installment',period:'75% cumulative tax liability',cat:'Income Tax'},
  {date:'2026-12-31',name:'Belated ITR',period:'AY 2026-27',cat:'Income Tax'},
  {date:'2027-03-15',name:'Advance Tax – 4th Installment',period:'100% of tax liability',cat:'Income Tax'},
  {date:'2027-03-31',name:'Revised ITR',period:'AY 2026-27',cat:'Income Tax'},
  {date:'2025-04-15',name:'PF / ESIC Payment',period:'Mar-26',cat:'PF/ESIC'},
  {date:'2026-05-15',name:'PF / ESIC Payment',period:'Apr-26',cat:'PF/ESIC'},
  {date:'2026-06-15',name:'PF / ESIC Payment',period:'May-26',cat:'PF/ESIC'},
  {date:'2026-07-15',name:'PF / ESIC Payment',period:'Jun-26',cat:'PF/ESIC'},
  {date:'2026-08-15',name:'PF / ESIC Payment',period:'Jul-26',cat:'PF/ESIC'},
  {date:'2026-09-15',name:'PF / ESIC Payment',period:'Aug-26',cat:'PF/ESIC'},
  {date:'2026-10-15',name:'PF / ESIC Payment',period:'Sep-26',cat:'PF/ESIC'},
  {date:'2026-11-15',name:'PF / ESIC Payment',period:'Oct-26',cat:'PF/ESIC'},
  {date:'2026-12-15',name:'PF / ESIC Payment',period:'Nov-26',cat:'PF/ESIC'},
  {date:'2027-01-15',name:'PF / ESIC Payment',period:'Dec-26',cat:'PF/ESIC'},
  {date:'2027-02-15',name:'PF / ESIC Payment',period:'Jan-27',cat:'PF/ESIC'},
  {date:'2027-03-15',name:'PF / ESIC Payment',period:'Feb-27',cat:'PF/ESIC'},
  {date:'2026-04-07',name:'TCS Challan Payment',period:'Mar-26',cat:'TDS/TCS'},
  {date:'2026-04-30',name:'TDS Challan Payment (March)',period:'Mar-26',cat:'TDS/TCS'},
  {date:'2026-05-07',name:'TDS/TCS Challan Payment',period:'Apr-26',cat:'TDS/TCS'},
  {date:'2026-05-15',name:'TCS Return – Q4',period:'FY 2025-26',cat:'TDS/TCS'},
  {date:'2026-05-30',name:'TCS Certificate – Q4',period:'FY 2025-26',cat:'TDS/TCS'},
  {date:'2026-05-31',name:'TDS Return – Q4',period:'FY 2025-26',cat:'TDS/TCS'},
  {date:'2026-06-07',name:'TDS/TCS Challan Payment',period:'May-26',cat:'TDS/TCS'},
  {date:'2026-06-15',name:'TDS Certificate – Q4',period:'FY 2025-26',cat:'TDS/TCS'},
  {date:'2026-07-07',name:'TDS/TCS Challan Payment',period:'Jun-26',cat:'TDS/TCS'},
  {date:'2026-07-15',name:'TCS Return – Q1',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2026-07-30',name:'TCS Certificate – Q1',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2026-07-31',name:'TDS Return – Q1',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2026-08-07',name:'TDS/TCS Challan Payment',period:'Jul-26',cat:'TDS/TCS'},
  {date:'2026-08-15',name:'TDS Certificate – Q1',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2026-09-07',name:'TDS/TCS Challan Payment',period:'Aug-26',cat:'TDS/TCS'},
  {date:'2026-10-07',name:'TDS/TCS Challan Payment',period:'Sep-26',cat:'TDS/TCS'},
  {date:'2026-10-15',name:'TCS Return – Q2',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2026-10-30',name:'TCS Certificate – Q2',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2026-10-31',name:'TDS Return – Q2',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2026-11-07',name:'TDS/TCS Challan Payment',period:'Oct-26',cat:'TDS/TCS'},
  {date:'2026-11-15',name:'TDS Certificate – Q2',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2026-12-07',name:'TDS/TCS Challan Payment',period:'Nov-26',cat:'TDS/TCS'},
  {date:'2027-01-07',name:'TDS/TCS Challan Payment',period:'Dec-26',cat:'TDS/TCS'},
  {date:'2027-01-15',name:'TCS Return – Q3',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2027-01-30',name:'TCS Certificate – Q3',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2027-01-31',name:'TDS Return – Q3',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2027-02-07',name:'TDS/TCS Challan Payment',period:'Jan-27',cat:'TDS/TCS'},
  {date:'2027-02-15',name:'TDS Certificate – Q3',period:'FY 2026-27',cat:'TDS/TCS'},
  {date:'2027-03-07',name:'TDS/TCS Challan Payment',period:'Feb-27',cat:'TDS/TCS'},
];

// ─────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────
const CONSTITUTIONS = [
  { id: "individual",    label: "Individual",              icon: "👤", acts: ["Income Tax","TDS/TCS","PF/ESIC","Other"] },
  { id: "proprietorship",label: "Proprietorship Firm",     icon: "🏪", acts: ["Income Tax","GST","TDS/TCS","PF/ESIC","Other"] },
  { id: "partnership",   label: "Partnership Firm",        icon: "🤝", acts: ["Income Tax","GST","TDS/TCS","PF/ESIC","Other"] },
  { id: "llp",           label: "LLP",                     icon: "⚖️", acts: ["Income Tax","GST","TDS/TCS","PF/ESIC","Company Law","Other"] },
  { id: "pvtltd",        label: "Private Limited Company", icon: "🏢", acts: ["Income Tax","GST","TDS/TCS","PF/ESIC","Company Law","Other"] },
  { id: "publtd",        label: "Public Limited Company",  icon: "🏛️", acts: ["Income Tax","GST","TDS/TCS","PF/ESIC","Company Law","Other"] },
  { id: "trust",         label: "Trust / NGO / Society",   icon: "🕊️", acts: ["Income Tax","TDS/TCS","Other"] },
  { id: "huf",           label: "HUF",                     icon: "🏠", acts: ["Income Tax","TDS/TCS","Other"] },
];

const ALL_ACTS = [
  { id: "GST",          label: "GST",               color: "#0d6e4f", bg: "#e6f4ef", icon: "🧾" },
  { id: "Income Tax",   label: "Income Tax",         color: "#1d4ed8", bg: "#dbeafe", icon: "📊" },
  { id: "TDS/TCS",      label: "TDS / TCS",          color: "#7c3aed", bg: "#ede9fe", icon: "💳" },
  { id: "PF/ESIC",      label: "PF / ESIC",          color: "#b45309", bg: "#fef3c7", icon: "🏥" },
  { id: "Company Law",  label: "Company Law / MCA",  color: "#9f1239", bg: "#ffe4e6", icon: "🏢" },
  { id: "Other",        label: "Other",              color: "#374151", bg: "#f3f4f6", icon: "📌" },
];

const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
function getStatus(dateStr) {
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  const diff = Math.round((d - TODAY) / 86400000);
  if (diff < 0)    return { key: "overdue",  label: "Overdue",   diff, dot: "#ef4444", bg: "#fef2f2", text: "#991b1b" };
  if (diff === 0)  return { key: "today",    label: "Today!",    diff, dot: "#f97316", bg: "#fff7ed", text: "#c2410c" };
  if (diff <= 7)   return { key: "urgent",   label: "This Week", diff, dot: "#eab308", bg: "#fefce8", text: "#854d0e" };
  if (diff <= 30)  return { key: "upcoming", label: "This Month",diff, dot: "#3b82f6", bg: "#eff6ff", text: "#1d4ed8" };
  return               { key: "ok",       label: "Upcoming",  diff, dot: "#22c55e", bg: "#f0fdf4", text: "#15803d" };
}

function fmtDate(s) {
  return new Date(s).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function daysLabel(diff) {
  if (diff < 0)   return `${Math.abs(diff)}d overdue`;
  if (diff === 0) return "Due today!";
  if (diff === 1) return "Due tomorrow";
  return `${diff} days left`;
}

function monthLabel(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}

// ─────────────────────────────────────────────────────────────
// PAN DETECTION & BULK SEND HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────
function detectEntityType(pan) {
  if (!pan || pan.length < 4) return "individual";
  const fourthChar = pan.charAt(3).toUpperCase();
  switch (fourthChar) {
    case "P": return "individual";
    case "C": return "company";
    case "H": return "huf";
    case "F": return "firm";
    case "T": return "trust";
    default:  return "individual";
  }
}

function getActsForEntityType(entityType) {
  const actMap = {
    individual: ["Income Tax", "TDS/TCS", "Other"],
    company:    ["GST", "Income Tax", "TDS/TCS", "PF/ESIC", "Company Law"],
    huf:        ["GST", "Income Tax", "TDS/TCS", "Other"],
    firm:       ["GST", "Income Tax", "TDS/TCS", "PF/ESIC", "Company Law"],
    trust:      ["GST", "Income Tax", "TDS/TCS", "Other"],
  };
  return actMap[entityType] || ["Income Tax", "TDS/TCS", "Other"];
}

function getRelevantDeadlines(entityType, month) {
  const acts = getActsForEntityType(entityType);
  let filtered = DB.filter((d) => acts.includes(d.cat));
  if (month !== undefined && month !== null) {
    filtered = filtered.filter((d) => new Date(d.date).getMonth() === month);
  }
  return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
}

function validatePhoneNumber(phone) {
  if (!phone) return null;
  const cleaned = phone.toString().replace(/\D/g, "");
  if (cleaned.length < 10) return null;
  return cleaned.length === 10 ? "91" + cleaned : cleaned;
}

function generateBulkMessage(name, entityType, deadlines) {
  if (deadlines.length === 0) {
    return `Hi ${name}!\n\nNo compliance deadlines for this month.\n\n\u2696\uFE0F TrustLeaf Advisors LLP`;
  }
  let msg = `\uD83D\uDCCB *COMPLIANCE DEADLINES - ${name.toUpperCase()}*\n\n`;
  msg += `Entity Type: ${entityType.toUpperCase()}\n`;
  msg += `Total Deadlines This Month: ${deadlines.length}\n\n`;
  msg += `\uD83D\uDCC5 *DUE DATES:*\n`;
  deadlines.forEach((d, i) => {
    const status = getStatus(d.date);
    const statusEmoji =
      status.diff < 0  ? "\u26D4" :
      status.diff === 0 ? "\uD83D\uDD34" :
      status.diff <= 3  ? "\uD83D\uDD34" :
      status.diff <= 7  ? "\uD83D\uDFE0" : "\u2705";
    msg += `${i + 1}. ${statusEmoji} ${d.name} - ${fmtDate(d.date)}\n`;
  });
  msg += `\n\u2696\uFE0F TrustLeaf Advisors LLP`;
  return msg;
}

// ─────────────────────────────────────────────────────────────
// WHATSAPP REMINDERS HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────
function generateWhatsAppMessage(row) {
  const status = getStatus(row.date);
  const daysLeft = status.diff;
  let urgencyEmoji = "\u2705";
  let urgencyText = "Upcoming";
  if (daysLeft < 0)       { urgencyEmoji = "\u26D4"; urgencyText = "OVERDUE"; }
  else if (daysLeft === 0){ urgencyEmoji = "\uD83D\uDD34"; urgencyText = "DUE TODAY"; }
  else if (daysLeft <= 3) { urgencyEmoji = "\uD83D\uDD34"; urgencyText = "CRITICAL"; }
  else if (daysLeft <= 7) { urgencyEmoji = "\uD83D\uDFE0"; urgencyText = "URGENT"; }

  return (
    `${urgencyEmoji} *COMPLIANCE REMINDER*\n\n` +
    `\uD83D\uDCCB *${row.name}*\n` +
    `\uD83D\uDCC5 *Due:* ${fmtDate(row.date)}\n` +
    `\u23F0 *Status:* ${urgencyText}${daysLeft > 0 ? ` (${daysLeft} days left)` : ""}\n` +
    `\uD83D\uDCDD *Period:* ${row.period}\n` +
    `\uD83C\uDFDB\uFE0F *Category:* ${row.cat}\n\n` +
    `\uD83D\uDD17 View in TrustLeaf Compliance Calendar\n` +
    `\u2696\uFE0F TrustLeaf Advisors LLP`
  );
}

function openWhatsAppWeb(message) {
  const encodedMsg = encodeURIComponent(message);
  window.open(`https://web.whatsapp.com/send?text=${encodedMsg}`, "_blank");
}

function openWhatsAppMobile(phoneNumber, message) {
  const encodedMsg = encodeURIComponent(message);
  const cleanPhone = phoneNumber ? phoneNumber.replace(/\D/g, "") : "";
  const link = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodedMsg}`
    : `https://wa.me/?text=${encodedMsg}`;
  window.open(link, "_blank");
}

// ─────────────────────────────────────────────────────────────
// STEP 1 — NAME + CONSTITUTION
// ─────────────────────────────────────────────────────────────
function Step1({ onNext }) {
  const [name,           setName]           = useState("");
  const [constit,        setConstit]        = useState("");
  const [err,            setErr]            = useState("");
  const [bulkUploadModal,setBulkUploadModal]= useState(false);
  const [bulkData,       setBulkData]       = useState([]);
  const [bulkSending,    setBulkSending]    = useState(false);
  const [bulkProgress,   setBulkProgress]   = useState({ sent: 0, total: 0, errors: [] });

  const proceed = useCallback(() => {
    if (!name.trim()) { setErr("Please enter client / entity name"); return; }
    if (!constit)     { setErr("Please select constitution of business"); return; }
    onNext({ name: name.trim(), constit });
  }, [name, constit, onNext]);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const csv = event.target.result;
        const rows = csv.split("\n").map((r) => r.split(",").map((c) => c.trim()));
        const data = rows
          .slice(1)
          .filter((r) => r[0] && r[1] && r[2])
          .map((r) => ({
            pan:        r[0],
            name:       r[1],
            phone:      r[2],
            entityType: detectEntityType(r[0]),
          }));
        setBulkData(data);
      } catch (parseErr) {
        alert("Error parsing file: " + parseErr.message);
      }
    };
    reader.readAsText(file);
    // Reset the input value so the same file can be re-selected
    e.target.value = "";
  }, []);

  const handleBulkSend = useCallback(async () => {
    if (bulkData.length === 0) {
      alert("Please upload a file first");
      return;
    }
    setBulkSending(true);
    setBulkProgress({ sent: 0, total: bulkData.length, errors: [] });
    const errorList = [];
    for (let i = 0; i < bulkData.length; i++) {
      const row = bulkData[i];
      const phone = validatePhoneNumber(row.phone);
      if (!phone) {
        const errMsg = `Row ${i + 1}: Invalid phone - ${row.phone}`;
        errorList.push(errMsg);
        setBulkProgress((p) => ({ ...p, errors: [...p.errors, errMsg], sent: p.sent + 1 }));
        continue;
      }
      const relevantDeadlines = getRelevantDeadlines(row.entityType);
      const msg = generateBulkMessage(row.name, row.entityType, relevantDeadlines);
      const encodedMsg = encodeURIComponent(msg);
      window.open(`https://wa.me/${phone}?text=${encodedMsg}`, "_blank");
      setBulkProgress((p) => ({ ...p, sent: p.sent + 1 }));
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    setBulkSending(false);
    alert(`✅ Opened ${bulkData.length - errorList.length} WhatsApp windows\n❌ Errors: ${errorList.length}`);
    setBulkUploadModal(false);
    setBulkData([]);
    setBulkProgress({ sent: 0, total: 0, errors: [] });
  }, [bulkData]);

  const closeBulkModal = useCallback(() => {
    if (!bulkSending) {
      setBulkUploadModal(false);
      setBulkData([]);
    }
  }, [bulkSending]);

  return (
    <div style={styles.stepWrap}>
      {/* Brand bar */}
      <div style={styles.brand}>
        <span style={styles.brandIcon}>⚖</span>
        <div style={{ flex: 1 }}>
          <div style={styles.brandName}>TrustLeaf Advisors LLP</div>
          <div style={styles.brandSub}>Compliance Calendar · FY 2026–27</div>
        </div>
        <button
          type="button"
          onClick={() => setBulkUploadModal(true)}
          style={{
            padding: "10px 18px", borderRadius: "8px", border: "none",
            background: "linear-gradient(135deg,#25d366,#1ba85c)", color: "#fff",
            fontSize: "13px", fontWeight: "700", cursor: "pointer",
            boxShadow: "0 2px 8px rgba(37,211,102,0.3)",
            whiteSpace: "nowrap", transition: "all 0.18s",
          }}
        >
          📤 Bulk WhatsApp Send
        </button>
      </div>

      <div style={styles.card}>
        <div style={styles.stepBadge}>Step 1 of 2</div>
        <h2 style={styles.h2}>Tell us about your client</h2>
        <p style={styles.sub}>We&apos;ll filter only the compliance deadlines that apply to them.</p>

        {/* Name */}
        <label htmlFor="entity-name" style={styles.label}>Client / Entity Name *</label>
        <input
          id="entity-name"
          style={{ ...styles.input, borderColor: err && !name ? "#ef4444" : "#d1ccc5" }}
          placeholder="e.g. Sharma & Sons Pvt Ltd"
          value={name}
          onChange={(e) => { setName(e.target.value); setErr(""); }}
          onKeyDown={(e) => e.key === "Enter" && proceed()}
        />

        {/* Constitution grid */}
        <label style={{ ...styles.label, marginTop: "20px" }}>Constitution of Business *</label>
        <div style={styles.constitGrid} role="radiogroup" aria-label="Constitution of Business">
          {CONSTITUTIONS.map((c) => (
            <div
              key={c.id}
              role="radio"
              aria-checked={constit === c.id}
              tabIndex={0}
              onClick={() => { setConstit(c.id); setErr(""); }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setConstit(c.id); setErr(""); } }}
              style={{
                ...styles.constitCard,
                borderColor: constit === c.id ? "#8B1A1A" : "#e2ddd6",
                background:  constit === c.id ? "#fdf0f0" : "#faf8f5",
                transform:   constit === c.id ? "translateY(-2px)" : "none",
                boxShadow:   constit === c.id ? "0 4px 16px rgba(139,26,26,0.12)" : "none",
              }}
            >
              <div style={styles.constitIcon}>{c.icon}</div>
              <div style={{
                ...styles.constitLabel,
                color:      constit === c.id ? "#8B1A1A" : "#2c2420",
                fontWeight: constit === c.id ? "700" : "500",
              }}>{c.label}</div>
              {constit === c.id && <div style={styles.constitCheck} aria-hidden="true">✓</div>}
            </div>
          ))}
        </div>

        {err && <div style={styles.error} role="alert">{err}</div>}

        <button type="button" style={styles.primaryBtn} onClick={proceed}>
          Continue to Acts Selection →
        </button>
      </div>

      {/* BULK UPLOAD MODAL */}
      {bulkUploadModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bulk WhatsApp Send"
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)", display: "flex",
            alignItems: "center", justifyContent: "center",
            zIndex: 1001, padding: "20px",
          }}
          onClick={closeBulkModal}
        >
          <div
            style={{
              background: "#fff", borderRadius: "14px", padding: "28px",
              maxWidth: "600px", width: "100%",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              maxHeight: "90vh", overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ marginBottom: "20px" }}>
              <button
                type="button"
                onClick={closeBulkModal}
                disabled={bulkSending}
                aria-label="Close modal"
                style={{
                  float: "right", background: "none", border: "none",
                  fontSize: "24px", cursor: "pointer", color: "#999",
                }}
              >✕</button>
              <h2 style={{ margin: "0 0 8px 0", color: "#1a0808", fontSize: "20px", fontWeight: "700" }}>
                📤 Bulk WhatsApp Send
              </h2>
              <p style={{ margin: "0", color: "#9c8e80", fontSize: "13px" }}>
                Upload Excel/CSV with PAN, Name, WhatsApp Number
              </p>
            </div>

            {bulkSending ? (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ fontSize: "14px", color: "#1a0808", marginBottom: "16px" }}>
                  Sending {bulkProgress.sent} of {bulkProgress.total}...
                </div>
                <div style={{
                  background: "#e2ddd6", height: "8px", borderRadius: "4px",
                  marginBottom: "16px", overflow: "hidden",
                }}>
                  <div style={{
                    background: "linear-gradient(135deg,#25d366,#1ba85c)",
                    height: "100%",
                    width: `${bulkProgress.total ? (bulkProgress.sent / bulkProgress.total) * 100 : 0}%`,
                    transition: "width 0.3s",
                  }} />
                </div>
                {bulkProgress.errors.length > 0 && (
                  <div style={{
                    background: "#fef3c7", border: "1px solid #fbbf24",
                    borderRadius: "8px", padding: "12px", marginTop: "16px", textAlign: "left",
                  }}>
                    <div style={{ color: "#92400e", fontSize: "12px", fontWeight: "700", marginBottom: "8px" }}>
                      Errors ({bulkProgress.errors.length}):
                    </div>
                    {bulkProgress.errors.map((errItem, i) => (
                      <div key={`bulk-err-${i}`} style={{ color: "#92400e", fontSize: "11px", marginBottom: "4px" }}>
                        • {errItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <>
                <div style={{ background: "#f5f1eb", borderRadius: "10px", padding: "16px", marginBottom: "20px" }}>
                  <div style={{ fontSize: "12px", color: "#1a0808", marginBottom: "8px" }}>
                    <strong>File Format Required (CSV recommended):</strong>
                  </div>
                  <div style={{
                    fontSize: "11px", color: "#9c8e80", fontFamily: "monospace",
                    background: "#fff", padding: "8px", borderRadius: "4px", marginBottom: "8px",
                  }}>
                    Column A: PAN (e.g., AABCP1234H)<br />
                    Column B: Name (e.g., ABC Consultants)<br />
                    Column C: WhatsApp No (e.g., 9876543210)
                  </div>
                  <div style={{ fontSize: "11px", color: "#1a0808" }}>
                    ℹ️ PAN 4th character auto-detects entity type:<br />
                    <strong>P</strong>=Individual, <strong>C</strong>=Company, <strong>H</strong>=HUF, <strong>F</strong>=Firm/LLP, <strong>T</strong>=Trust
                  </div>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label
                    htmlFor="bulk-file-input"
                    style={{
                      display: "block", padding: "20px",
                      border: "2px dashed #25d366", borderRadius: "8px",
                      textAlign: "center", cursor: "pointer",
                      background: "#f0fdf4", transition: "all 0.18s",
                    }}
                  >
                    <input
                      id="bulk-file-input"
                      type="file"
                      accept=".xlsx,.xls,.csv"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <div style={{ fontSize: "14px", color: "#1ba85c", fontWeight: "700" }}>
                      📁 Choose File (CSV/Excel)
                    </div>
                    <div style={{ fontSize: "11px", color: "#9c8e80", marginTop: "4px" }}>
                      or drag and drop
                    </div>
                  </label>
                </div>

                {bulkData.length > 0 && (
                  <div style={{ marginBottom: "20px" }}>
                    <div style={{ fontSize: "12px", color: "#1a0808", fontWeight: "700", marginBottom: "8px" }}>
                      📋 Preview ({bulkData.length} contacts):
                    </div>
                    <div style={{
                      background: "#f5f1eb", borderRadius: "8px",
                      maxHeight: "200px", overflowY: "auto", padding: "8px",
                    }}>
                      {bulkData.slice(0, 5).map((row, i) => (
                        <div key={`preview-${i}-${row.pan}`} style={{
                          fontSize: "11px", color: "#1a0808",
                          padding: "6px", borderBottom: "1px solid #e2ddd6",
                        }}>
                          <strong>{row.name}</strong> ({row.entityType.toUpperCase()}) — {row.phone}
                        </div>
                      ))}
                      {bulkData.length > 5 && (
                        <div style={{ fontSize: "11px", color: "#9c8e80", padding: "6px", textAlign: "center" }}>
                          ... and {bulkData.length - 5} more
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => { setBulkUploadModal(false); setBulkData([]); }}
                    style={{
                      padding: "12px 16px", borderRadius: "8px",
                      border: "1px solid #e2ddd6", background: "#fff",
                      color: "#2c2420", fontSize: "13px", fontWeight: "700",
                      cursor: "pointer", transition: "all 0.18s",
                    }}
                  >Cancel</button>
                  <button
                    type="button"
                    onClick={handleBulkSend}
                    disabled={bulkData.length === 0 || bulkSending}
                    style={{
                      padding: "12px 16px", borderRadius: "8px", border: "none",
                      background: bulkData.length === 0
                        ? "#ccc"
                        : "linear-gradient(135deg,#25d366,#1ba85c)",
                      color: "#fff", fontSize: "13px", fontWeight: "700",
                      cursor: bulkData.length === 0 ? "not-allowed" : "pointer",
                      transition: "all 0.18s",
                    }}
                  >📤 Send to All</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// STEP 2 — SELECT ACTS
// ─────────────────────────────────────────────────────────────
function Step2({ name, constit, onBack, onNext }) {
  const constitution = CONSTITUTIONS.find((c) => c.id === constit);
  const available = ALL_ACTS.filter((a) => constitution.acts.includes(a.id));
  const [selected, setSelected] = useState(available.map((a) => a.id));

  const toggle = useCallback((id) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }, []);

  return (
    <div style={styles.stepWrap}>
      <div style={styles.brand}>
        <span style={styles.brandIcon}>⚖</span>
        <div>
          <div style={styles.brandName}>TrustLeaf Advisors LLP</div>
          <div style={styles.brandSub}>Compliance Calendar · FY 2026–27</div>
        </div>
      </div>

      <div style={styles.card}>
        <div style={styles.stepBadge}>Step 2 of 2</div>
        <h2 style={styles.h2}>Which acts apply?</h2>
        <p style={styles.sub}>
          For <strong style={{ color: "#8B1A1A" }}>{name}</strong> ({constitution.label}) —
          all applicable acts are pre-selected. Uncheck what&apos;s not needed.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
          {available.map((act) => {
            const sel = selected.includes(act.id);
            return (
              <div
                key={act.id}
                role="checkbox"
                aria-checked={sel}
                tabIndex={0}
                onClick={() => toggle(act.id)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(act.id); } }}
                style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  padding: "14px 18px", borderRadius: "12px",
                  border: `2px solid ${sel ? act.color + "55" : "#e2ddd6"}`,
                  background: sel ? act.bg : "#faf8f5",
                  cursor: "pointer", transition: "all 0.18s",
                  transform: sel ? "translateX(4px)" : "none",
                }}
              >
                <span style={{ fontSize: "22px" }} aria-hidden="true">{act.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: sel ? act.color : "#2c2420" }}>
                    {act.label}
                  </div>
                  <div style={{ fontSize: "11px", color: "#9c8e80", marginTop: "2px" }}>
                    {DB.filter((r) => r.cat === act.id).length} deadlines in FY 2026-27
                  </div>
                </div>
                <div style={{
                  width: "22px", height: "22px", borderRadius: "50%",
                  border: `2px solid ${sel ? act.color : "#d4c9bc"}`,
                  background: sel ? act.color : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, fontSize: "12px", color: "#fff", fontWeight: "700",
                  transition: "all 0.18s",
                }} aria-hidden="true">{sel ? "✓" : ""}</div>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button type="button" style={styles.secondaryBtn} onClick={onBack}>← Back</button>
          <button
            type="button"
            style={{
              ...styles.primaryBtn, flex: 2, margin: 0,
              background: selected.length === 0
                ? "#d4c9bc"
                : "linear-gradient(135deg,#8B1A1A,#b02020)",
              cursor: selected.length === 0 ? "not-allowed" : "pointer",
            }}
            onClick={() => selected.length > 0 && onNext(selected)}
            disabled={selected.length === 0}
          >
            {selected.length === 0
              ? "Select at least one act"
              : `View Compliance Calendar (${DB.filter((r) => selected.includes(r.cat)).length} deadlines) →`}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// RESULTS PAGE
// ─────────────────────────────────────────────────────────────
function Results({ name, constit, selectedActs, onReset }) {
  const constitution = CONSTITUTIONS.find((c) => c.id === constit);

  const [filterCat,     setFilterCat]     = useState("all");
  const [filterStatus,  setFilterStatus]  = useState("all");
  const [filterMonth,   setFilterMonth]   = useState("all");
  const [search,        setSearch]        = useState("");
  const [sortKey,       setSortKey]       = useState("date");
  const [sortDir,       setSortDir]       = useState(1);
  const [copied,        setCopied]        = useState(null);
  const [whatsappModal, setWhatsappModal] = useState(null);
  const [whatsappPhone, setWhatsappPhone] = useState("");

  // Base dataset
  const dataset = useMemo(
    () => DB.filter((r) => selectedActs.includes(r.cat)).sort((a, b) => a.date.localeCompare(b.date)),
    [selectedActs],
  );

  // Stats
  const stats = useMemo(() => {
    const s = { total: 0, overdue: 0, urgent: 0, upcoming: 0, ok: 0 };
    dataset.forEach((r) => {
      s.total++;
      const st = getStatus(r.date);
      if (st.key === "overdue" || st.key === "today") s.overdue++;
      else if (st.key === "urgent")   s.urgent++;
      else if (st.key === "upcoming") s.upcoming++;
      else s.ok++;
    });
    return s;
  }, [dataset]);

  // Unique months
  const months = useMemo(() => {
    const seen = new Set();
    dataset.forEach((r) => seen.add(r.date.slice(0, 7)));
    return [...seen].sort();
  }, [dataset]);

  // Filtered + sorted
  const rows = useMemo(() => {
    let data = dataset.filter((r) => {
      if (filterCat !== "all" && r.cat !== filterCat) return false;
      if (filterMonth !== "all" && r.date.slice(0, 7) !== filterMonth) return false;
      if (filterStatus !== "all") {
        const st = getStatus(r.date);
        const k = st.key === "today" ? "overdue" : st.key;
        if (filterStatus === "overdue"  && k !== "overdue")  return false;
        if (filterStatus === "urgent"   && k !== "urgent")   return false;
        if (filterStatus === "upcoming" && k !== "upcoming") return false;
        if (filterStatus === "ok"       && k !== "ok")       return false;
      }
      if (search) {
        const q = search.toLowerCase();
        if (
          !r.name.toLowerCase().includes(q) &&
          !r.period.toLowerCase().includes(q) &&
          !r.cat.toLowerCase().includes(q)
        ) return false;
      }
      return true;
    });
    return [...data].sort((a, b) => {
      let va, vb;
      if      (sortKey === "date")   { va = a.date;              vb = b.date; }
      else if (sortKey === "name")   { va = a.name;              vb = b.name; }
      else if (sortKey === "status") { va = getStatus(a.date).diff; vb = getStatus(b.date).diff; }
      else                           { va = a.date;              vb = b.date; }
      return (va < vb ? -1 : va > vb ? 1 : 0) * sortDir;
    });
  }, [dataset, filterCat, filterMonth, filterStatus, search, sortKey, sortDir]);

  const handleSort = useCallback((key) => {
    if (sortKey === key) setSortDir((d) => d * -1);
    else { setSortKey(key); setSortDir(1); }
  }, [sortKey]);

  const copyRow = useCallback((r) => {
    const act = ALL_ACTS.find((a) => a.id === r.cat);
    const st = getStatus(r.date);
    navigator.clipboard.writeText(
      `${r.name}\nPeriod: ${r.period}\nDue: ${fmtDate(r.date)}\nAct: ${act?.label || r.cat}\nStatus: ${st.label} (${daysLabel(st.diff)})`,
    ).then(() => {
      setCopied(r.date + r.name);
      setTimeout(() => setCopied(null), 1500);
    });
  }, []);

  const exportXLS = useCallback(() => {
    const actCols = selectedActs.map((id) => ALL_ACTS.find((a) => a.id === id)?.label || id).join(", ");
    let html = `<html><head><meta charset="UTF-8"></head><body>
<p style="font-family:Arial;font-size:13px;margin-bottom:8px">
  <b>TrustLeaf Advisors LLP — Compliance Calendar FY 2026–27</b><br/>
  Client: ${name} &nbsp;|&nbsp; Constitution: ${constitution.label} &nbsp;|&nbsp; Acts: ${actCols}
</p>
<table border="1" style="font-family:Arial;font-size:12px;border-collapse:collapse">
<thead><tr style="background:#8B1A1A;color:#fff">
<th style="padding:6px 10px">Due Date</th>
<th style="padding:6px 10px">Status</th>
<th style="padding:6px 10px">Days Left</th>
<th style="padding:6px 10px">Compliance</th>
<th style="padding:6px 10px">Period</th>
<th style="padding:6px 10px">Act / Category</th>
</tr></thead><tbody>`;
    rows.forEach((r) => {
      const s = getStatus(r.date);
      const act = ALL_ACTS.find((a) => a.id === r.cat);
      html += `<tr style="background:${s.bg}">
<td style="padding:5px 10px">${fmtDate(r.date)}</td>
<td style="padding:5px 10px;color:${s.text};font-weight:bold">${s.label}</td>
<td style="padding:5px 10px">${daysLabel(s.diff)}</td>
<td style="padding:5px 10px">${r.name}</td>
<td style="padding:5px 10px">${r.period}</td>
<td style="padding:5px 10px">${act?.label || r.cat}</td>
</tr>`;
    });
    html += `</tbody></table><br/><p style="font-family:Arial;font-size:10px;color:#888">Generated by TrustLeaf Advisors LLP Compliance Tool · ${new Date().toLocaleDateString("en-IN")}</p></body></html>`;
    const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.replace(/\s+/g, "_")}_Compliance_FY2627.xls`;
    a.click();
    URL.revokeObjectURL(url);
  }, [rows, name, constitution, selectedActs]);

  // Group by month for separators
  const grouped = useMemo(() => {
    if (sortKey !== "date") return rows.map((r) => ({ type: "row", row: r }));
    const out = [];
    let last = null;
    rows.forEach((r) => {
      const m = r.date.slice(0, 7);
      if (m !== last) { out.push({ type: "sep", month: m }); last = m; }
      out.push({ type: "row", row: r });
    });
    return out;
  }, [rows, sortKey]);

  // Pre-compute filtered counts for bulk buttons in WhatsApp modal
  const criticalRows = useMemo(() => rows.filter((r) => { const d = getStatus(r.date).diff; return d >= 0 && d <= 3; }), [rows]);
  const urgentRows   = useMemo(() => rows.filter((r) => { const d = getStatus(r.date).diff; return d >= 0 && d <= 7; }), [rows]);

  const StatCard = useCallback(({ label, count, color, statusKey }) => (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={filterStatus === statusKey}
      onClick={() => setFilterStatus((s) => s === statusKey ? "all" : statusKey)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFilterStatus((s) => s === statusKey ? "all" : statusKey); } }}
      style={{
        background:    filterStatus === statusKey ? "#fdf8f5" : "#fff",
        border:        `1px solid ${filterStatus === statusKey ? color + "55" : "#e2ddd6"}`,
        borderRadius:  "10px",
        padding:       "14px 16px",
        cursor:        "pointer",
        transition:    "all 0.18s",
        position:      "relative",
        overflow:      "hidden",
        transform:     filterStatus === statusKey ? "translateY(-2px)" : "none",
        boxShadow:     filterStatus === statusKey ? `0 4px 16px ${color}22` : "none",
      }}
    >
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: color, borderRadius: "10px 0 0 10px" }} />
      <div style={{ fontSize: "26px", fontWeight: "700", fontFamily: "'Courier New',monospace", color, lineHeight: 1 }}>{count}</div>
      <div style={{ fontSize: "10px", color: "#9c8e80", textTransform: "uppercase", letterSpacing: "0.8px", marginTop: "5px", fontWeight: "600" }}>{label}</div>
    </div>
  ), [filterStatus]);

  return (
    <div style={{ minHeight: "100vh", background: "#f7f4f0", fontFamily: "'Segoe UI',system-ui,sans-serif" }}>

      {/* HEADER */}
      <header style={{
        background: "linear-gradient(135deg,#1a0808 0%,#3d0e0e 55%,#5a1a0a 100%)",
        padding: "0 32px", display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: "12px", flexWrap: "wrap",
        boxShadow: "0 2px 20px rgba(0,0,0,0.3)", position: "sticky", top: 0, zIndex: 100,
        minHeight: "64px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 0" }}>
          <span style={{ fontSize: "26px" }} aria-hidden="true">⚖</span>
          <div>
            <div style={{ fontFamily: "Georgia,serif", color: "#fff", fontSize: "17px", fontWeight: "700" }}>
              TrustLeaf Advisors LLP
            </div>
            <div style={{ color: "rgba(212,133,26,0.8)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>
              Compliance Calendar · FY 2026–27
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", padding: "8px 0" }}>
          <span style={{
            background: "rgba(212,133,26,0.12)", border: "1px solid rgba(212,133,26,0.3)",
            color: "rgba(245,166,35,0.9)", padding: "5px 12px", borderRadius: "20px",
            fontSize: "12px", fontWeight: "600",
          }}>
            📋 {name}
          </span>
          <span style={{
            background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.65)", padding: "5px 12px", borderRadius: "20px", fontSize: "11px",
          }}>
            {constitution.icon} {constitution.label}
          </span>
          <button
            type="button"
            onClick={onReset}
            style={{
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.7)", padding: "5px 12px", borderRadius: "20px",
              fontSize: "11px", cursor: "pointer", fontWeight: "500",
            }}
          >✎ New Search</button>
        </div>
      </header>

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "24px 20px 60px" }}>

        {/* STAT CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px", marginBottom: "20px" }}>
          <StatCard label="Total Deadlines" count={stats.total}    color="#8B1A1A" statusKey="all" />
          <StatCard label="Overdue / Today" count={stats.overdue}  color="#ef4444" statusKey="overdue" />
          <StatCard label="This Week"        count={stats.urgent}   color="#eab308" statusKey="urgent" />
          <StatCard label="This Month"       count={stats.upcoming} color="#3b82f6" statusKey="upcoming" />
        </div>

        {/* FILTERS ROW */}
        <div style={{
          background: "#fff", border: "1px solid #e2ddd6",
          borderRadius: "10px", padding: "14px 18px", marginBottom: "14px",
        }}>
          {/* Act filter */}
          <div style={{ display: "flex", gap: "7px", flexWrap: "wrap", alignItems: "center", marginBottom: "10px" }}>
            <span style={styles.filterLabel}>Act</span>
            {[{ id: "all", label: "All Acts", color: "#8B1A1A", icon: "" }, ...ALL_ACTS.filter((a) => selectedActs.includes(a.id))].map((a) => (
              <span
                key={a.id}
                role="button"
                tabIndex={0}
                onClick={() => setFilterCat(a.id)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFilterCat(a.id); } }}
                aria-pressed={filterCat === a.id}
                style={{
                  padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "600",
                  cursor: "pointer", transition: "all 0.15s",
                  background: filterCat === a.id ? (a.color || "#8B1A1A") : "#f2ede6",
                  color:      filterCat === a.id ? "#fff" : "#6b5e54",
                  border:     `1px solid ${filterCat === a.id ? (a.color || "#8B1A1A") : "#e2ddd6"}`,
                }}
              >
                {a.icon && filterCat !== a.id ? a.icon + " " : ""}{a.label}
              </span>
            ))}
          </div>

          {/* Month filter */}
          <div style={{ display: "flex", gap: "7px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={styles.filterLabel}>Month</span>
            <span
              role="button"
              tabIndex={0}
              onClick={() => setFilterMonth("all")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFilterMonth("all"); } }}
              aria-pressed={filterMonth === "all"}
              style={{
                padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "600",
                cursor: "pointer",
                background: filterMonth === "all" ? "#8B1A1A" : "#f2ede6",
                color:      filterMonth === "all" ? "#fff" : "#6b5e54",
                border:     `1px solid ${filterMonth === "all" ? "#8B1A1A" : "#e2ddd6"}`,
              }}
            >All</span>
            {months.map((m) => {
              const label = new Date(m + "-15").toLocaleDateString("en-IN", { month: "short", year: "2-digit" });
              return (
                <span
                  key={m}
                  role="button"
                  tabIndex={0}
                  onClick={() => setFilterMonth(m)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFilterMonth(m); } }}
                  aria-pressed={filterMonth === m}
                  style={{
                    padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "600",
                    cursor: "pointer",
                    background: filterMonth === m ? "#8B1A1A" : "#f2ede6",
                    color:      filterMonth === m ? "#fff" : "#6b5e54",
                    border:     `1px solid ${filterMonth === m ? "#8B1A1A" : "#e2ddd6"}`,
                  }}
                >{label}</span>
              );
            })}
          </div>
        </div>

        {/* SEARCH + EXPORT */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
          <div style={{ position: "relative", flex: 1, minWidth: "200px" }}>
            <span aria-hidden="true" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#b0a090", fontSize: "15px" }}>🔍</span>
            <input
              aria-label="Search compliance entries"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search compliance name, period…"
              style={{ ...styles.input, paddingLeft: "36px", margin: 0, fontSize: "13px" }}
            />
            {search && (
              <span
                role="button"
                tabIndex={0}
                aria-label="Clear search"
                onClick={() => setSearch("")}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSearch(""); } }}
                style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#b0a090", fontSize: "16px" }}
              >✕</span>
            )}
          </div>
          <span style={{ fontSize: "12px", color: "#9c8e80", alignSelf: "center", whiteSpace: "nowrap" }}>
            {rows.length} deadline{rows.length !== 1 ? "s" : ""}
          </span>
          <button
            type="button"
            onClick={exportXLS}
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "9px 16px", background: "#8B1A1A", color: "#fff",
              border: "none", borderRadius: "8px", fontSize: "12px",
              fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap",
            }}
          >⬇ Export Excel</button>
        </div>

        {/* TABLE */}
        <div style={{ background: "#fff", border: "1px solid #e2ddd6", borderRadius: "10px", overflow: "hidden" }}>
          {rows.length === 0 ? (
            <div style={{ padding: "60px 20px", textAlign: "center", color: "#9c8e80" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }} aria-hidden="true">🔍</div>
              <p style={{ fontSize: "14px" }}>No deadlines match your current filters.</p>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px" }}>
                <thead>
                  <tr>
                    {[
                      ["date",   "Due Date",  "110px"],
                      ["status", "Status",    "110px"],
                      ["name",   "Compliance",""],
                      ["",       "Period",    "120px"],
                      ["",       "Act",       "130px"],
                      ["",       "",          "55px"],
                    ].map(([key, label, width], i) => (
                      <th
                        key={`th-${i}`}
                        onClick={() => key && handleSort(key)}
                        style={{
                          padding: "10px 12px", textAlign: "left", fontSize: "10px",
                          fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px",
                          background: "#f2ede6", borderBottom: "1px solid #e2ddd6",
                          cursor: key ? "pointer" : "default", userSelect: "none",
                          whiteSpace: "nowrap",
                          color: sortKey === key ? "#8B1A1A" : "#6b5e54",
                          width: width || undefined,
                        }}
                        aria-sort={key && sortKey === key ? (sortDir === 1 ? "ascending" : "descending") : undefined}
                      >
                        {label} {key && (sortKey === key ? (sortDir === 1 ? "↑" : "↓") : "↕")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {grouped.map((item, idx) => {
                    if (item.type === "sep") {
                      return (
                        <tr key={`sep-${item.month}`}>
                          <td colSpan={6} style={{
                            padding: "7px 12px", fontSize: "10px", fontWeight: "700",
                            textTransform: "uppercase", letterSpacing: "1.5px",
                            background: "linear-gradient(90deg,#1a0808,#2d0a0a)",
                            color: "rgba(212,133,26,0.9)",
                          }}>
                            {monthLabel(item.month + "-15")}
                          </td>
                        </tr>
                      );
                    }
                    const r = item.row;
                    const s = getStatus(r.date);
                    const act = ALL_ACTS.find((a) => a.id === r.cat);
                    const isCopied = copied === r.date + r.name;
                    const rowKey = `row-${idx}-${r.date}-${r.name}`;
                    return (
                      <tr
                        key={rowKey}
                        style={{ borderBottom: "1px solid #f0ede8", transition: "background 0.1s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#faf8f5"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; }}
                      >
                        <td style={{ padding: "10px 12px" }}>
                          <div style={{ fontSize: "12px", fontFamily: "'Courier New',monospace", color: "#3d2e26", fontWeight: "600" }}>
                            {fmtDate(r.date)}
                          </div>
                          <div style={{ fontSize: "10px", color: s.text, marginTop: "2px" }}>
                            {daysLabel(s.diff)}
                          </div>
                        </td>
                        <td style={{ padding: "10px 12px" }}>
                          <span style={{
                            display: "inline-flex", alignItems: "center", gap: "5px",
                            padding: "3px 9px", borderRadius: "20px",
                            background: s.bg, color: s.text,
                            fontSize: "10px", fontWeight: "700",
                          }}>
                            <span aria-hidden="true" style={{ width: "6px", height: "6px", borderRadius: "50%", background: s.dot, display: "inline-block" }} />
                            {s.label}
                          </span>
                        </td>
                        <td style={{ padding: "10px 12px", fontWeight: "500", color: "#1a0808", fontSize: "13px" }}>{r.name}</td>
                        <td style={{ padding: "10px 12px", fontFamily: "'Courier New',monospace", fontSize: "11px", color: "#9c8e80" }}>{r.period}</td>
                        <td style={{ padding: "10px 12px" }}>
                          {act && (
                            <span style={{
                              padding: "2px 8px", borderRadius: "4px",
                              background: act.bg, color: act.color,
                              fontSize: "10px", fontWeight: "700",
                            }}>{act.label}</span>
                          )}
                        </td>
                        <td style={{ padding: "10px 12px" }}>
                          <div style={{ display: "flex", gap: "5px" }}>
                            <button
                              type="button"
                              aria-label={isCopied ? "Copied" : "Copy row"}
                              onClick={() => copyRow(r)}
                              style={{
                                background: "none",
                                border: `1px solid ${isCopied ? "#22c55e" : "#e2ddd6"}`,
                                borderRadius: "5px", padding: "3px 8px", fontSize: "10px",
                                cursor: "pointer", color: isCopied ? "#15803d" : "#9c8e80",
                                fontWeight: "600", transition: "all 0.15s",
                              }}
                            >{isCopied ? "✓" : "⎘"}</button>
                            <button
                              type="button"
                              aria-label="Send via WhatsApp"
                              onClick={() => setWhatsappModal(r)}
                              style={{
                                background: "none", border: "1px solid #25d366",
                                borderRadius: "5px", padding: "4px 10px", fontSize: "11px",
                                cursor: "pointer", color: "#25d366", fontWeight: "700",
                                transition: "all 0.18s", whiteSpace: "nowrap",
                              }}
                            >📱 WhatsApp</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px", fontSize: "10px", color: "#c0b0a0", letterSpacing: "0.5px" }}>
          TrustLeaf Advisors LLP · Compliance Calendar FY 2026–27 · For guidance only · Verify with applicable notifications before acting
        </div>

        {/* WHATSAPP REMINDERS MODAL */}
        {whatsappModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Send via WhatsApp"
            style={{
              position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(0,0,0,0.5)", display: "flex",
              alignItems: "center", justifyContent: "center",
              zIndex: 1000, padding: "20px",
            }}
            onClick={() => setWhatsappModal(null)}
          >
            <div
              style={{
                background: "#fff", borderRadius: "14px", padding: "28px",
                maxWidth: "500px", width: "100%",
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                maxHeight: "90vh", overflowY: "auto",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div style={{ marginBottom: "20px" }}>
                <button
                  type="button"
                  aria-label="Close modal"
                  onClick={() => setWhatsappModal(null)}
                  style={{ float: "right", background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "#999" }}
                >✕</button>
                <h2 style={{ margin: "0 0 8px 0", color: "#1a0808", fontSize: "20px", fontWeight: "700" }}>
                  📱 Send via WhatsApp
                </h2>
                <p style={{ margin: "0", color: "#9c8e80", fontSize: "13px" }}>
                  {whatsappModal.name}
                </p>
              </div>

              {/* Deadline Summary */}
              <div style={{
                background: "#f5f1eb", borderRadius: "10px", padding: "14px", marginBottom: "20px",
                borderLeft: `4px solid ${getStatus(whatsappModal.date).dot}`,
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "12px" }}>
                  <div>
                    <div style={{ color: "#9c8e80", fontSize: "10px", textTransform: "uppercase" }}>Due Date</div>
                    <div style={{ color: "#1a0808", fontWeight: "700" }}>{fmtDate(whatsappModal.date)}</div>
                  </div>
                  <div>
                    <div style={{ color: "#9c8e80", fontSize: "10px", textTransform: "uppercase" }}>Status</div>
                    <div style={{ color: getStatus(whatsappModal.date).text, fontWeight: "700" }}>
                      {getStatus(whatsappModal.date).label}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "#9c8e80", fontSize: "10px", textTransform: "uppercase" }}>Period</div>
                    <div style={{ color: "#1a0808", fontWeight: "700" }}>{whatsappModal.period}</div>
                  </div>
                  <div>
                    <div style={{ color: "#9c8e80", fontSize: "10px", textTransform: "uppercase" }}>Category</div>
                    <div style={{ color: "#1a0808", fontWeight: "700" }}>{whatsappModal.cat}</div>
                  </div>
                </div>
              </div>

              {/* Message Preview */}
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="wa-message-preview" style={{
                  display: "block", color: "#1a0808", fontSize: "12px", fontWeight: "700",
                  marginBottom: "8px", textTransform: "uppercase",
                }}>Message Preview</label>
                <div
                  id="wa-message-preview"
                  style={{
                    background: "#f9f7f4", border: "1px solid #e2ddd6", borderRadius: "8px",
                    padding: "12px", fontSize: "12px", color: "#2c2420", lineHeight: "1.5",
                    fontFamily: "'Segoe UI', system-ui, sans-serif", whiteSpace: "pre-wrap",
                    wordBreak: "break-word", maxHeight: "180px", overflowY: "auto",
                  }}
                >
                  {generateWhatsAppMessage(whatsappModal)}
                </div>
              </div>

              {/* Phone Number Input */}
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="wa-phone-input" style={{
                  display: "block", color: "#1a0808", fontSize: "12px", fontWeight: "700",
                  marginBottom: "6px", textTransform: "uppercase",
                }}>
                  Send to Specific Number (Optional)
                </label>
                <input
                  id="wa-phone-input"
                  type="tel"
                  value={whatsappPhone}
                  onChange={(e) => setWhatsappPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210 or leave blank"
                  style={{
                    width: "100%", padding: "10px 12px", borderRadius: "8px",
                    border: "1px solid #e2ddd6", fontSize: "13px",
                    fontFamily: "system-ui", boxSizing: "border-box", marginBottom: "8px",
                  }}
                />
                <div style={{ fontSize: "11px", color: "#9c8e80" }}>
                  ℹ️ Leave blank to open WhatsApp Web with the message ready to send.
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "0" }}>
                <button
                  type="button"
                  onClick={() => { setWhatsappModal(null); setWhatsappPhone(""); }}
                  style={{
                    padding: "12px 16px", borderRadius: "8px", border: "1px solid #e2ddd6",
                    background: "#fff", color: "#2c2420", fontSize: "13px", fontWeight: "700",
                    cursor: "pointer", transition: "all 0.18s",
                  }}
                >Cancel</button>
                <button
                  type="button"
                  onClick={() => {
                    const msg = generateWhatsAppMessage(whatsappModal);
                    if (whatsappPhone.trim()) {
                      openWhatsAppMobile(whatsappPhone, msg);
                    } else {
                      openWhatsAppWeb(msg);
                    }
                    setWhatsappModal(null);
                    setWhatsappPhone("");
                  }}
                  style={{
                    padding: "12px 16px", borderRadius: "8px", border: "none",
                    background: "linear-gradient(135deg,#25d366,#1ba85c)", color: "#fff",
                    fontSize: "13px", fontWeight: "700", cursor: "pointer", transition: "all 0.18s",
                  }}
                >📱 Send on WhatsApp</button>
              </div>

              {/* Bulk Actions */}
              <div style={{ borderTop: "1px solid #e2ddd6", marginTop: "16px", paddingTop: "16px" }}>
                <label style={{
                  display: "block", color: "#1a0808", fontSize: "12px", fontWeight: "700",
                  marginBottom: "10px", textTransform: "uppercase",
                }}>Bulk Send Options</label>

                <button
                  type="button"
                  onClick={() => {
                    if (criticalRows.length === 0) { alert("No critical deadlines to send"); return; }
                    let msg = "🔴 *CRITICAL COMPLIANCE DEADLINES*\n\n";
                    criticalRows.forEach((r, i) => { msg += `${i + 1}. ${r.name} - Due ${fmtDate(r.date)}\n`; });
                    msg += "\n⚖️ TrustLeaf Advisors LLP";
                    openWhatsAppWeb(msg);
                  }}
                  style={{
                    width: "100%", padding: "10px 12px", borderRadius: "8px",
                    border: "1px solid #fbbf24", background: "#fef3c7",
                    color: "#92400e", fontSize: "12px", fontWeight: "600",
                    cursor: "pointer", transition: "all 0.18s", marginBottom: "8px",
                  }}
                >🔴 Send Critical Deadlines ({criticalRows.length})</button>

                <button
                  type="button"
                  onClick={() => {
                    if (urgentRows.length === 0) { alert("No urgent deadlines to send"); return; }
                    let msg = "🟠 *URGENT COMPLIANCE DEADLINES (Next 7 Days)*\n\n";
                    urgentRows.forEach((r, i) => { msg += `${i + 1}. ${r.name} - Due ${fmtDate(r.date)}\n`; });
                    msg += "\n⚖️ TrustLeaf Advisors LLP";
                    openWhatsAppWeb(msg);
                  }}
                  style={{
                    width: "100%", padding: "10px 12px", borderRadius: "8px",
                    border: "1px solid #3b82f6", background: "#dbeafe",
                    color: "#1e40af", fontSize: "12px", fontWeight: "600",
                    cursor: "pointer", transition: "all 0.18s", marginBottom: "8px",
                  }}
                >🟠 Send Urgent (Next 7 Days) ({urgentRows.length})</button>

                <button
                  type="button"
                  onClick={() => {
                    if (rows.length === 0) { alert("No deadlines to send"); return; }
                    let msg = `📋 *COMPLIANCE CALENDAR - ${name.toUpperCase()}*\n\n`;
                    msg += `Constitution: ${constitution.label}\n`;
                    msg += `Total Deadlines: ${rows.length}\n`;
                    msg += `Overdue: ${stats.overdue} | Critical: ${stats.urgent} | Upcoming: ${stats.upcoming}\n\n`;
                    msg += `📅 Next 5 Deadlines:\n`;
                    rows.slice(0, 5).forEach((r, i) => { msg += `${i + 1}. ${r.name} - ${fmtDate(r.date)}\n`; });
                    msg += "\n⚖️ TrustLeaf Advisors LLP";
                    openWhatsAppWeb(msg);
                  }}
                  style={{
                    width: "100%", padding: "10px 12px", borderRadius: "8px",
                    border: "1px solid #8B1A1A", background: "#fdf0f0",
                    color: "#8B1A1A", fontSize: "12px", fontWeight: "600",
                    cursor: "pointer", transition: "all 0.18s",
                  }}
                >📊 Send Summary ({rows.length})</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// APP ROOT
// ─────────────────────────────────────────────────────────────
export default function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name: "", constit: "", acts: [] });

  const fromStep1 = useCallback(({ name, constit }) => {
    setData((d) => ({ ...d, name, constit }));
    setStep(2);
  }, []);

  const fromStep2 = useCallback((acts) => {
    setData((d) => ({ ...d, acts }));
    setStep(3);
  }, []);

  const reset = useCallback(() => {
    setStep(1);
    setData({ name: "", constit: "", acts: [] });
  }, []);

  if (step === 1) return <Step1 onNext={fromStep1} />;
  if (step === 2) return <Step2 name={data.name} constit={data.constit} onBack={() => setStep(1)} onNext={fromStep2} />;
  return <Results name={data.name} constit={data.constit} selectedActs={data.acts} onReset={reset} />;
}

// ─────────────────────────────────────────────────────────────
// SHARED STYLES
// ─────────────────────────────────────────────────────────────
const styles = {
  stepWrap: {
    minHeight: "100vh",
    background: "linear-gradient(160deg,#f7f0e8 0%,#faf8f5 40%,#f2ede6 100%)",
    display: "flex", flexDirection: "column", alignItems: "center",
    padding: "32px 16px 60px",
    fontFamily: "'Segoe UI',system-ui,sans-serif",
  },
  brand: {
    display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px",
  },
  brandIcon: { fontSize: "32px" },
  brandName: {
    fontFamily: "Georgia,serif", fontSize: "20px", fontWeight: "700",
    color: "#1a0808", letterSpacing: "0.3px",
  },
  brandSub: {
    fontSize: "10px", color: "#8B1A1A", letterSpacing: "2px",
    textTransform: "uppercase", fontWeight: "600", marginTop: "2px",
  },
  card: {
    background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "560px",
    padding: "32px",
    boxShadow: "0 8px 40px rgba(139,26,26,0.1), 0 0 0 1px rgba(139,26,26,0.06)",
  },
  stepBadge: {
    display: "inline-block", background: "#fdf0f0", color: "#8B1A1A",
    fontSize: "11px", fontWeight: "700", letterSpacing: "1px",
    textTransform: "uppercase", padding: "4px 12px", borderRadius: "20px", marginBottom: "14px",
  },
  h2: {
    fontFamily: "Georgia,serif", fontSize: "22px", color: "#1a0808",
    fontWeight: "700", marginBottom: "8px",
  },
  sub: { fontSize: "13px", color: "#6b5e54", marginBottom: "22px", lineHeight: "1.5" },
  label: {
    display: "block", fontSize: "11px", fontWeight: "700", color: "#8B1A1A",
    textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px",
  },
  input: {
    width: "100%", padding: "11px 14px",
    border: "2px solid #d1ccc5", borderRadius: "10px",
    fontSize: "14px", fontFamily: "Georgia,serif", color: "#1a0808",
    outline: "none", transition: "border 0.2s", background: "#faf8f5",
    boxSizing: "border-box", marginBottom: "2px",
  },
  primaryBtn: {
    display: "block", width: "100%", padding: "13px", marginTop: "24px",
    background: "linear-gradient(135deg,#8B1A1A,#b02020)",
    color: "#fff", border: "none", borderRadius: "10px",
    fontSize: "14px", fontWeight: "700", cursor: "pointer",
    fontFamily: "Georgia,serif", letterSpacing: "0.5px",
    boxShadow: "0 4px 16px rgba(139,26,26,0.25)", transition: "all 0.2s",
  },
  secondaryBtn: {
    flex: 1, padding: "12px", background: "transparent",
    border: "2px solid #e2ddd6", borderRadius: "10px",
    color: "#6b5e54", fontSize: "13px", fontWeight: "600",
    cursor: "pointer", transition: "all 0.2s",
  },
  constitGrid: {
    display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "10px",
    marginBottom: "20px",
  },
  constitCard: {
    position: "relative", padding: "14px 12px", borderRadius: "10px",
    border: "2px solid #e2ddd6", background: "#faf8f5",
    cursor: "pointer", transition: "all 0.18s",
    display: "flex", flexDirection: "column", alignItems: "center",
    gap: "6px", textAlign: "center",
  },
  constitIcon: { fontSize: "22px" },
  constitLabel: { fontSize: "12px", fontWeight: "500", color: "#2c2420", lineHeight: "1.3" },
  constitCheck: {
    position: "absolute", top: "8px", right: "8px",
    width: "18px", height: "18px", borderRadius: "50%",
    background: "#8B1A1A", color: "#fff",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "10px", fontWeight: "700",
  },
  error: { color: "#ef4444", fontSize: "12px", marginTop: "8px", marginBottom: "4px" },
  filterLabel: {
    fontSize: "10px", fontWeight: "700", color: "#9c8e80",
    textTransform: "uppercase", letterSpacing: "1px", minWidth: "30px",
  },
};