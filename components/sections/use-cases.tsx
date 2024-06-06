"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineKitchen } from "react-icons/md";
import { PiCouch } from "react-icons/pi";
import { LiaBathSolid } from "react-icons/lia";

import Bedroom from "./bedroom";
import Kitchen from "./kitchen";
import Living from "./living";
import Bathroom from "./bathroom";

export default function UseCases() {
  const [selected, setSelected] = React.useState("bedroom");

  const getIconClassName = (key: string) =>
    selected === key ? "text-white" : "text-gray-900 dark:text-white";

  const getTextClassName = (key: string) =>
    selected === key ? "text-white" : "text-gray-900 dark:text-white";

  return (
    <div className="flex w-full flex-col items-center text-gray-100 dark:text-gray-100">
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <Tabs
          fullWidth
          aria-label="Options"
          className="flex flex-wrap justify-center"
          color="primary"
          selectedKey={selected}
          variant="bordered"
          onSelectionChange={(key) => setSelected(key.toString())}
        >
          <Tab
            key="bedroom"
            title={
              <div className="flex items-center space-x-2">
                <LuBedDouble
                  className={getIconClassName("bedroom")}
                  size={20}
                />
                <span
                  className={`hidden sm:inline ${getTextClassName("bedroom")}`}
                >
                  Bedroom
                </span>
              </div>
            }
          >
            <Card className="mt-4 border-4 border-gray-100 dark:border-gray-900">
              <CardBody className="flex justify-center">
                <Bedroom />
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="kitchen"
            title={
              <div className="flex items-center space-x-2">
                <MdOutlineKitchen
                  className={getIconClassName("kitchen")}
                  size={20}
                />
                <span
                  className={`hidden sm:inline ${getTextClassName("kitchen")}`}
                >
                  Kitchen
                </span>
              </div>
            }
          >
            <Card className="mt-5 border-4 border-gray-100 dark:border-gray-900">
              <CardBody className="flex justify-center">
                <Kitchen />
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="living"
            title={
              <div className="flex items-center space-x-2">
                <PiCouch className={getIconClassName("living")} size={20} />
                <span
                  className={`hidden sm:inline ${getTextClassName("living")}`}
                >
                  Living
                </span>
              </div>
            }
          >
            <Card className="mt-5 border-4 border-gray-100 dark:border-gray-900">
              <CardBody className="flex justify-center">
                <Living />
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="bathroom"
            title={
              <div className="flex items-center space-x-2">
                <LiaBathSolid
                  className={getIconClassName("bathroom")}
                  size={20}
                />
                <span
                  className={`hidden sm:inline ${getTextClassName("bathroom")}`}
                >
                  Bathroom
                </span>
              </div>
            }
          >
            <Card className="mt-5 border-4 border-gray-100 dark:border-gray-900">
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
