"use client";

import axios from "axios";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Button } from "../ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const MyBookedSession = ({ data }) => {
  console.log("bookingdata ", data);
  const handleCancelBooking = async () => {
    try {
      await axios.patch(
        `http://localhost:5000/booking/${data._id}`,
        {
          status: "cancelled",
        }
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className="border-b text-center">
      <td className="p-3">{data.tutorName}</td>

      <td className="p-3">{data.studentName}</td>

      <td className="p-3">{data.studentEmail}</td>

      <td className="p-3">
        <span
          className={`px-2 py-1 rounded ${
            data.status === "cancelled"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {data.bookStatus}
        </span>
      </td>

      <td className="p-3">
        {data.status !== "cancelled" && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                className="cursor-pointer"
              >
                <MdOutlineDeleteForever />
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Cancel Booking?
                </AlertDialogTitle>

                <AlertDialogDescription>
                  Are you sure you want to cancel
                  this booking?
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>
                  No
                </AlertDialogCancel>

                <AlertDialogAction
                  onClick={handleCancelBooking}
                >
                  Yes, Cancel
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </td>
    </tr>
  );
};

export default MyBookedSession;