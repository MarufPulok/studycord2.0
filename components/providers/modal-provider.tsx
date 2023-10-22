"use client";

import React, { useEffect, useState } from "react";
import CreateServerModal from "../modals/create-server-modal";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <CreateServerModal />
    </div>
  );
}