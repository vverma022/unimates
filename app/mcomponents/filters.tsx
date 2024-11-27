"use client"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<any>>
}

interface FilterState {
  state: string;
  city: string;
  major: string;
  year: string;
}

export default function Filters({ setFilters }: FiltersProps) {
  // Handle filter change
  const handleFilterChange = (value: string, field: keyof FilterState) => {
    setFilters((prevFilters: FilterState) => ({
      ...prevFilters,
      [field]: value,
    }))
  }

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({
      state: "",
      city: "",
      major: "",
      year: "",
    })
  }

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Select onValueChange={(value) => handleFilterChange(value, "state")}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="State" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mh">Maharashtra</SelectItem>
          <SelectItem value="dl">Delhi</SelectItem>
          <SelectItem value="ka">Karnataka</SelectItem>
          <SelectItem value="tn">Tamil Nadu</SelectItem>
          <SelectItem value="up">Uttar Pradesh</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilterChange(value, "city")}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="City" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mumbai">Mumbai</SelectItem>
          <SelectItem value="delhi">Delhi</SelectItem>
          <SelectItem value="bangalore">Bangalore</SelectItem>
          <SelectItem value="chennai">Chennai</SelectItem>
          <SelectItem value="hyderabad">Hyderabad</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilterChange(value, "major")}>
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

      <Select onValueChange={(value) => handleFilterChange(value, "year")}>
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

      <Button variant="outline" onClick={handleClearFilters}>
        Clear Filters
      </Button>
    </div>
  )
}