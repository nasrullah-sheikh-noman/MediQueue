"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
 DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Modal = ({ tutor, open, setOpen }) => {

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const currentDate = new Date();
  const sessionDate = new Date(tutor?.date);

  const isDateRestricted = currentDate > sessionDate;
  const noSlotsLeft = Number(tutor?.slot) <= 0;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button className="cursor-pointer rounded-2xl px-6 py-5">
              Book Session
            </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[500px] rounded-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Book Tutor Session
            </DialogTitle>

            <DialogDescription>
              Complete the booking form below.
            </DialogDescription>
          </DialogHeader>

          <BookingForm
            tutor={tutor}
            isDateRestricted={isDateRestricted}
            noSlotsLeft={noSlotsLeft}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="rounded-2xl">
          Book Session
        </Button>
      </DrawerTrigger>

      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <DrawerHeader className="text-left">
          <DrawerTitle>
            Book Tutor Session
          </DrawerTitle>

          <DrawerDescription>
            Complete your booking details.
          </DrawerDescription>
        </DrawerHeader>

        <BookingForm
          tutor={tutor}
          className="px-4"
          isDateRestricted={isDateRestricted}
          noSlotsLeft={noSlotsLeft}
          setOpen={setOpen}
        />

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

function BookingForm({
  className,
  tutor,
  isDateRestricted,
  noSlotsLeft,
  setOpen,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (noSlotsLeft) {
      alert("No available slots left.");
      return;
    }

    if (isDateRestricted) {
      alert("Booking is not available yet for this tutor");
      return;
    }

    const form = e.target;

    const bookingData = {
      studentName: form.studentName.value,
      phone: form.phone.value,
      studentEmail: form.email.value,

      tutorId: tutor?._id,
      tutorName: tutor?.name,

      bookStatus: "Booked",
    };

    console.log(bookingData);

    // axios.post("/bookings", bookingData)

    // axios.patch(`/tutors/${tutor._id}`, {
    //   slot: Number(tutor.slot) - 1,
    // })

    alert("Session booked successfully!");

    setOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid items-start gap-5", className)}
    >
      {noSlotsLeft && (
        <p className="rounded-xl bg-red-100 p-3 text-sm font-medium text-red-600">
          This session is fully booked. You can’t join at the moment.
        </p>
      )}

      {isDateRestricted && (
        <p className="rounded-xl bg-yellow-100 p-3 text-sm font-medium text-yellow-700">
          Booking is not available yet for this tutor.
        </p>
      )}

      <div className="grid gap-3">
        <Label htmlFor="studentName">
          Student Name
        </Label>

        <Input
          id="studentName"
          name="studentName"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="grid gap-3">
        <Label htmlFor="phone">
          Phone Number
        </Label>

        <Input
          id="phone"
          name="phone"
          placeholder="+8801XXXXXXXXX"
          required
        />
      </div>

      <div className="grid gap-3">
        <Label htmlFor="email">
          Student Email
        </Label>

        <Input
          id="email"
          name="email"
          type="email"
          defaultValue="student@gmail.com"
          required
        />
      </div>

      <div className="grid gap-3">
        <Label>
          Tutor ID
        </Label>

        <Input
          value={tutor?._id}
          disabled
        />
      </div>

      <div className="grid gap-3">
        <Label>
          Tutor Name
        </Label>

        <Input
          value={tutor?.name}
          disabled
        />
      </div>

      <div className="grid gap-3">
        <Label>
          Booking Status
        </Label>

        <Input
          value="Booked"
          disabled
        />
      </div>

      <Button
        type="submit"
        disabled={noSlotsLeft || isDateRestricted}
        className="rounded-2xl"
      >
        Confirm Booking
      </Button>
    </form>
  );
}

export default Modal;