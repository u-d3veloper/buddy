import React from "react";
import MenuButton from "./MenuButton";
import TicketButton from "./TicketButton";
import Paiement from "./Paiement";

const Footer = () => {
  return (
    <footer className="flex items-center justify-around bg-black w-full px-4 py-3 fixed bottom-0 left-0 h-[80px]">
      {/* Bouton Menu */}
      <MenuButton />

      {/* Composant Paiement */}
      <div className="flex items-center justify-center">
        <Paiement />
      </div>

      {/* Bouton Ticket */}
      <TicketButton />
    </footer>
  );
};

export default Footer;
