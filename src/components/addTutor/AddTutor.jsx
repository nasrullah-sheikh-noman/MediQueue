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

const AddTutor = () => {
  return (
    <div className="container mx-auto max-w-3xl px-4 mt-6 mb-18">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold">Add Tutor</h2>
        <p className="text-muted-foreground mt-2">
          Fill all tutor information carefully
        </p>
      </div>

      <form className="space-y-6 rounded-2xl border p-6 shadow-sm">

        {/* Tutor Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="font-medium">
            Tutor Name
          </label>

          <Input
            id="name"
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

          <Input
            id="photo"
            type="file"
            required
          />

          <p className="text-sm text-muted-foreground">
            Upload image to imgbb or postimage and paste the image URL.
          </p>
        </div>

        {/* Subject & Teaching Mode */}
        <div className="grid gap-4 md:grid-cols-2">

          {/* Subject */}
          <div className="space-y-2">
            <label className="font-medium" >
              Subject / Category
            </label>

            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="math">
                  Mathematics
                </SelectItem>

                <SelectItem value="physics">
                  Physics
                </SelectItem>

                <SelectItem value="chemistry">
                  Chemistry
                </SelectItem>

                <SelectItem value="english">
                  English
                </SelectItem>

                <SelectItem value="ict">
                  ICT
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Teaching Mode */}
          <div className="space-y-2">
            <label className="font-medium" >
              Teaching Mode
            </label>

            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="online">
                  Online
                </SelectItem>

                <SelectItem value="offline">
                  Offline
                </SelectItem>

                <SelectItem value="both">
                  Both
                </SelectItem>
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

          <Input
            id="date"
            type="date"
            required
          />
        </div>

        {/* Institution */}
        <div className="space-y-2">
          <label htmlFor="institution" className="font-medium">
            Institution & Experience
          </label>

          <Textarea
            id="institution"
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
            className="w-full"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="w-full"
          >
            Add Tutor
          </Button>
        </div>

      </form>
    </div>
  );
};

export default AddTutor;