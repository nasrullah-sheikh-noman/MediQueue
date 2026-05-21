import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddTutor = () => {
  return (
    <div className="container mx-auto flex flex-col p-4 m-8 justify-between items-center">
      <h2 className="text-3xl font-bold">Add Tutor</h2>
      <form className="w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <label htmlFor="form-name">Name</label>
          <Input
            id="form-name"
            type="text"
            placeholder="Evil Rabbit"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="form-email">Email</label>
          <Input id="form-email" type="email" placeholder="john@example.com" />

          <p className="text-sm text-muted-foreground">
            We'll never share your email with anyone.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="form-phone">Phone</label>

            <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
          </div>

          <div className="space-y-2">
            <label htmlFor="form-country">Country</label>

            <Select defaultValue="us">
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="us">United States</SelectItem>

                <SelectItem value="uk">United Kingdom</SelectItem>

                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="form-address">Address</label>

          <Input id="form-address" type="text" placeholder="123 Main St" />
        </div>

        <div className="flex gap-2">
          <Button type="button" variant="outline">
            Cancel
          </Button>

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default AddTutor;
