import React, { useState, useRef } from "react";

import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Manage your files with ease using our intuitive interface.",
      filesize: "1.2MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Securely upload and share documents in just a few clicks.",
      filesize: "750KB",
      close: true,
      tag: { isOpen: true, tagTitle: "Uploading", tagColor: "blue" },
    },
    {
      desc: "Access your stored files anytime, anywhere with cloud sync.",
      filesize: "2.5MB",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className=" fixed top-0 left-0 w-full z-[3] h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
