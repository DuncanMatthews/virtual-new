"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineKitchen } from "react-icons/md";
import { PiCouch } from "react-icons/pi";
import { TbBath } from "react-icons/tb";

import Bedroom from "./bedroom";
import Kitchen from "./kitchen";
import Living from "./living";
import Bathroom from "./bathroom";

export default function UseCases() {
  const [selected, setSelected] = React.useState("bedroom");

  return (
    <div className="flex w-full flex-col">
      <div className="max-w-4xl w-full">
        <Tabs
          fullWidth
          aria-label="Options"
          className="flex flex-wrap justify-center"
          color="primary"
          selectedKey={selected}
          variant="bordered"
          onSelectionChange={(key: { toString: () => any }) =>
            setSelected(key.toString())
          }
        >
          <Tab
            key="bedroom"
            title={
              <div className="flex items-center space-x-2">
                <LuBedDouble color="white" size={20} />
                <span>Bedroom</span>
              </div>
            }
          >
            <Card className="mt-4">
              <CardBody className="flex justify-center">
                <Bedroom />
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <MdOutlineKitchen color="white" size={20} />

                <span>Kitchen</span>
              </div>
            }
          >
            <Card className="mt-5">
              <CardBody className="flex justify-center">
                <Kitchen />
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="living"
            title={
              <div className="flex items-center space-x-2">
                <PiCouch color={"white"} size={20} />

                <span>Living</span>
              </div>
            }
          >
            <Card className="mt-5">
              <CardBody className="flex justify-center">
                <Living />
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="bathroom"
            title={
              <div className="flex items-center space-x-2">
                <TbBath color={"white"} size={20} />

                <span>Bathroom</span>
              </div>
            }
          >
            <Card className="mt-5">
              <CardBody className="flex justify-center">
                <Bathroom />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
