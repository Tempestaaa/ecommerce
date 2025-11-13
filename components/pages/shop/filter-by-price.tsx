"use client";

import FilterWrapper from "@/components/pages/shop/filter-wrapper";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function FilterByPrice() {
  const [value, setValue] = useState([0, 100]);

  return (
    <FilterWrapper value="price" label="Price">
      <div className="px-1 pb-2 space-y-4">
        <div className="text-muted-foreground">
          Budget range (${value[0]} - ${value[1]})
        </div>

        <Slider
          value={value}
          min={0}
          max={100}
          step={10}
          onValueChange={setValue}
        />
      </div>
    </FilterWrapper>
  );
}
