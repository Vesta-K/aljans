import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

export default function ModalCallback({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: () => void;
}) {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="rounded-none bg-[#2f2e33]"
    >
      <div className="flex items-center justify-between">
        <DialogHeader className="font-thin text-base-gray">
          Мы вам перезвоним через несколько минут!
        </DialogHeader>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5 cursor-pointer"
          onClick={handleOpen}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <DialogBody divider>
        <div className="grid gap-6">
          <Input
            label="Имя"
            crossOrigin={undefined}
            className="bg-white rounded-none focus:border-0"
          />
          <Input label="+7 (XXX) XXX-XX-XX" crossOrigin={undefined} />
        </div>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button variant="gradient" color="green" onClick={handleOpen}>
          send message
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
