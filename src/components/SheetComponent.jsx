import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
const SheetComponent = ({ title, desp, content, trigger,side }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger>{trigger || ""}</SheetTrigger>
        <SheetContent side={side || "left"}>
          <SheetHeader>
            <SheetTitle>{title || "Sheet"}</SheetTitle>
            <SheetDescription>{desp || ""}</SheetDescription>
          </SheetHeader>
          {content || "Nothing here"}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SheetComponent;
