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