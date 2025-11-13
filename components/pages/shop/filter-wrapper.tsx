import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type Props = {
  value: string;
  label: string;
  children: React.ReactNode;
};

export default function FilterWrapper({ value, label, children }: Props) {
  return (
    <Accordion
      type="single"
      defaultValue={value}
      collapsible
      className="px-4 border rounded-md"
    >
      <AccordionItem value={value}>
        <AccordionTrigger>{label}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>

        <div hidden className="flex justify-end">
          <Button variant="ghost" size="sm">
            Clear
          </Button>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
