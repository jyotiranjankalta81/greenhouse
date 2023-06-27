export const ApplicationType = (key) => {
  switch (key) {
    case 1:
      return "GCMS Note Basics";

    case 2:
      return "GCMS Documents";

    case 3:
      return "GCMS Advance Plus";

    case 4:
      return "CBSA Notes";

    case 5:
      return "CSIS Notes";

    case 6:
      return "Notes Explanation Reports";

    case 7:
      return "GCMS﻿ Basic With Explanation Report";
    case 8:
      return "Explanation Report for GCMS/CBSA Notes";

    case 9:
      return "GCMS Advanced Plus with Explanation Report";
    default:
      return "";
  }
};

export const StatusType = (key) => {
  switch (key) {
    case 0:
      return "Processing Order";

    case 1000:
      return "Awaiting Consent";

    case 2000:
      return "Notes Applied";

    case 5000:
      return "Completed";

    case 3000:
      return "Notes Delayed: Extension Request";

    case 3010:
      return "Notes Delayed: Overdue";

    case 3020:
      return "On Hold: Additional Request";
    case 3030:
      return "Notes Delayed: Additional Request";
    case 4004:
      return "Cancelled";
    case 4003:
      return "Refunded";
    case 3040:
      return "Explanation Report: Pending";
    case 3050:
      return "Explanation Report: Completed";
    default:
      return "";
  }
};
