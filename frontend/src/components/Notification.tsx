import { useState } from "react";
import type { GameData } from "../lib/types";

const ActiveNotification = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="size-8"
    >
      <path
        fill="currentColor"
        d="M12 2c-1.1 0-2 .9-2 2v.29C7.12 5.14 5 7.82 5 11v6l-2 2v1h9.35a5.9 5.9 0 0 1-.35-2H7v-7c0-2.76 2.24-5 5-5s5 2.24 5 5v1.09a5.6 5.6 0 0 1 2 0V11c0-3.18-2.12-5.86-5-6.71V4a2 2 0 0 0-2-2m5 12v3h-3v2h3v3h2v-3h3v-2h-3v-3m-9 7a2 2 0 0 0 3.65 1.13c-.32-.34-.6-.72-.84-1.13Z"
      />
    </svg>
  );
};

const InactiveNotification = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="size-8 text-yellow-500"
    >
      <path
        fill="currentColor"
        d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"
      />
    </svg>
  );
};

export const Notification = ({ game }: { game: GameData }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className="absolute right-4 top-[480px]"
    >
      {isActive ? <InactiveNotification /> : <ActiveNotification />}
    </button>
  );
};
