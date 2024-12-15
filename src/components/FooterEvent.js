import React from "react";
import MenuButton from "./MenuButton";
import TicketButton from "./TicketButton";
import Paiement from "./Paiement";

const Footer = ({ onTicketClick }) => {
  return (
    <footer className="flex items-center justify-around bg-zinc-900 w-full px-4 py-3 fixed bottom-5 left-0 h-[80px] absolute">
      {/* Bouton Menu */}
      <MenuButton />

      {/* Bouton Paiement */}
      <Paiement />

      {/* Bouton Ticket */}
      <button onClick={onTicketClick}>
        <TicketButton />
      </button>
    </footer>
  );
};

export default Footer;
