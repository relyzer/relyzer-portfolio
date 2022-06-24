import { OnlineCertificate } from "../interfaces/onlineCertificate";
import generateUniqueID from "../lib/utility/generateUniqueID";

const certificateArr: OnlineCertificate[] = [
  {
    id: generateUniqueID(),
    filename: "Coursera-JV5Y6J77YNNJ",
  },
  {
    id: generateUniqueID(),
    filename: "Coursera-LCGWDBUBA6PG",
  },
  {
    id: generateUniqueID(),
    filename: "Coursera-WSQNVUG8UFA5",
  },
];

export { certificateArr }