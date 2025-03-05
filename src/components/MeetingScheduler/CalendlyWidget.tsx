"use client"; 

import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { useCalendly } from "@/context/CalendlyContext";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

const CalendlyWidget = () => {
  const { isOpen, closeCalendly } = useCalendly();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) return null; 
  const widget = <InlineWidget url="https://calendly.com/rajafawady/30min" />;
  return (
    <Dialog open={isOpen} onOpenChange={closeCalendly}>
      <DialogOverlay />
      <DialogContent>
        {widget}
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyWidget;
