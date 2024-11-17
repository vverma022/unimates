import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Filters() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="State" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mh">Maharashtra</SelectItem>
          <SelectItem value="dl">Delhi</SelectItem>
          <SelectItem value="ka">Karnataka</SelectItem>
          <SelectItem value="tn">Tamil Nadu</SelectItem>
          <SelectItem value="up">Uttar Pradesh</SelectItem>
          {/* Add more states as needed */}
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="City" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mumbai">Mumbai</SelectItem>
          <SelectItem value="delhi">Delhi</SelectItem>
          <SelectItem value="bangalore">Bangalore</SelectItem>
          <SelectItem value="chennai">Chennai</SelectItem>
          <SelectItem value="hyderabad">Hyderabad</SelectItem>
          {/* Add more cities as needed */}
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Major" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="cs">Computer Science</SelectItem>
          <SelectItem value="eng">Engineering</SelectItem>
          <SelectItem value="bus">Business</SelectItem>
          <SelectItem value="arts">Arts</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">First Year</SelectItem>
          <SelectItem value="2">Second Year</SelectItem>
          <SelectItem value="3">Third Year</SelectItem>
          <SelectItem value="4">Fourth Year</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline">Clear Filters</Button>
    </div>
  )
}