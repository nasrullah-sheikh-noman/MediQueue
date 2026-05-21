"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const AddTutor = () => {
  const [subject, setSubject] = useState("");
  const [mode, setMode] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log("destination", destination);
  };
  return (
    <div className="container mx-auto max-w-3xl px-4 mt-6 mb-18">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold">Add Tutor</h2>
        <p className="text-muted-foreground mt-2">
          Fill all tutor information carefully
        </p>
      </div>

      <form
        onSubmit={onClick}
        className="space-y-6 rounded-2xl border p-6 shadow-sm"
      >
        {/* Tutor Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="font-medium">
            Tutor Name
          </label>

          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter tutor name"
            required
          />
        </div>

        {/* Photo */}
        <div className="space-y-2">
          <label htmlFor="photo" className="font-medium">
            Upload Photo
          </label>

          <Input id="photo" name="photo" type="file" required />
        </div>

        {/* Subject & Teaching Mode */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Subject */}
          <div className="space-y-2">
            <label className="font-medium">Subject / Category</label>

            <Select required onValueChange={setSubject}>
              <Input type="hidden" name="subject" value={subject}></Input>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="math">Mathematics</SelectItem>

                <SelectItem value="physics">Physics</SelectItem>

                <SelectItem value="chemistry">Chemistry</SelectItem>

                <SelectItem value="english">English</SelectItem>

                <SelectItem value="biology">Biology</SelectItem>

                <SelectItem value="higher-math">Higher Math</SelectItem>

                <SelectItem value="ict">ICT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Teaching Mode */}
          <div className="space-y-2">
            <label className="font-medium ">Teaching Mode</label>

            <Select required onValueChange={setMode}>
              <Input type="hidden" value={mode} name="mode"></Input>
              <SelectTrigger>
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="online">Online</SelectItem>

                <SelectItem value="offline">Offline</SelectItem>

                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Available Days & Time */}
        <div className="space-y-2">
          <label htmlFor="schedule" className="font-medium">
            Available Days & Time Slot
          </label>

          <Input
            id="schedule"
            name="schedule"
            type="text"
            placeholder="Sun - Thu | 5:00 PM - 8:00 PM"
            required
          />
        </div>

        {/* Hourly Fee & Total Slot */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="fee" className="font-medium">
              Hourly Fee
            </label>

            <Input
              id="fee"
              name="fee"
              type="number"
              placeholder="500"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="slot" className="font-medium">
              Total Slot
            </label>

            <Input
              id="slot"
              name="slot"
              type="number"
              placeholder="10"
              required
            />
          </div>
        </div>

        {/* Start Date */}
        <div className="space-y-2">
          <label htmlFor="date" className="font-medium">
            Session Start Date
          </label>

          <Input id="date" name="date" type="date" required />
        </div>

        {/* Institution */}
        <div className="space-y-2">
          <label htmlFor="institution" className="font-medium">
            Institution & Experience
          </label>

          <Textarea
            id="institution"
            name="institution"
            placeholder="Example: Dhaka University | 3 years teaching experience"
            required
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label htmlFor="location" className="font-medium">
            Location (Area / City)
          </label>

          <Input
            id="location"
            name="location"
            type="text"
            placeholder="Mirpur, Dhaka"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            className="w-full cursor-pointer"
          >
            Cancel
          </Button>

          <Button type="submit" className="w-full cursor-pointer">
            Add Tutor
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTutor;
