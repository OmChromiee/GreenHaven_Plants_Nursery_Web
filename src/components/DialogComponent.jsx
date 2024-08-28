import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import React from 'react'
  
  const DialogComponent = ({trigger,content,title}) => {
    return (
      <>
      <Dialog>
        <DialogTrigger>{trigger || ""}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title || ""}</DialogTitle>
          </DialogHeader>
          {content || ""}
        </DialogContent>
      </Dialog>
      </>
    )
  }
  
  export default DialogComponent
  