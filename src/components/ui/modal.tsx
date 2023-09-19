import { Input, Typography } from "@material-tailwind/react";
import ReactDOM from "react-dom";

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className="fixed top-0 h-screen w-screen z-50 flex justify-center items-center bg-[#2f2e33] bg-opacity-70 backdrop-blur-lg"
    >
      <form
        onClick={e => e.stopPropagation()}
        className="relative w-11/12 max-w-[600px] h-[270px]  bg-[#2f2e33] flex flex-col justify-around items-center p-6 gap-4 shadow-[0px_0px_56px_-2px_#7b8abb]"
      >
        <Typography
          as="h2"
          className="font-thin text-md  text-white md:text-2xl"
        >
          Мы вам перезвоним через несколько минут!
        </Typography>
        <Input
          variant="standard"
          label="Имя"
          color="white"
          className="text-base-gray"
          crossOrigin={undefined}
        />
        <Input
          variant="standard"
          label="Номер телефона"
          color="white"
          crossOrigin={undefined}
        />
        <div className="w-full flex flex-row justify-center gap-x-20">
          <button
            className="font-thin text-base-gray flex items-center justify-center w-1/4 h-9 bg-base-zinc"
            onClick={onClose}
          >
            Отмена
          </button>
          <button
            className="font-thin text-base-gray flex items-center justify-center w-1/4 h-9 bg-base-zinc"
            onClick={onClose}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>,
    document.body
  );
}
