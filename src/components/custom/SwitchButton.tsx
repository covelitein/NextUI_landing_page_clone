import React from "react";
import {Image, Switch} from "@nextui-org/react";

export default function SwitchButton() {
  return (
    <Switch
      defaultSelected
      size="lg"
      classNames={{
        wrapper:"group-data-[selected=true]:bg-[#0070f0]",

      }}
      startContent={<Image src="/svgs/sunIcon.svg" />}
      endContent={<Image src="/svgs/moonIcon.svg" />}
      />
  );
}