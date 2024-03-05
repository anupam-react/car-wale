import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="flex flex-col justify-between h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <List>
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          <img src="./CarWale_Logo-removebg-preview 1.svg" alt="" />
        </Typography>
      </div>
        <ListItem>
          <ListItemPrefix>
            <img src="./ic_round-dashboard.svg" alt="" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <img src="./entypo_price-tag.svg" alt="" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                New Cars
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <img src="./Line 5.svg" alt="" />
                </ListItemPrefix>
                All Cars Listing
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <img src="./Line 5.svg" alt="" />
                </ListItemPrefix>
                Popular Cars
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <img src="./Line 5.svg" alt="" />
                </ListItemPrefix>
                Newly Launched Cars
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <img src="./Line 5.svg" alt="" />
                </ListItemPrefix>
                Upcoming Cars
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <img src="./Line 5.svg" alt="" />
                </ListItemPrefix>
                Best Seller Cars
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <img src="./Line 5.svg" alt="" />
                </ListItemPrefix>
                Top Highly Rated Cars
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <img src="./game-icons_car-key.svg" alt="" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Used Cars
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <img src="./Line 5.svg" alt="" />
                </ListItemPrefix>
                Find Used Cars
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <img src="./Line 5.svg" alt="" />
                </ListItemPrefix>
                Explore Used Cars
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <img src="./Line 5.svg" alt="" />
                </ListItemPrefix>
                Check Car Valuation
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <img src="./Line 5.svg" alt="" />
                </ListItemPrefix>
                Used Car Approval List
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <ListItem>
          <ListItemPrefix>
            <img src="./bx_news.svg" alt="" />
          </ListItemPrefix>
          Reviews & News
          <ListItemSuffix></ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <img src="./lets-icons_setting-fill.svg" alt="" />
          </ListItemPrefix>
          Setting
          <ListItemSuffix></ListItemSuffix>
        </ListItem>

        <hr className="my-2 border-blue-gray-50" />
        <Typography variant="h6">REPORTS</Typography>
        <ListItem>
          <ListItemPrefix>
            <img src="./fluent_notepad-edit-20-filled.svg" alt="" />
          </ListItemPrefix>
          Car Report
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <img src="./Group 18.svg" alt="" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      <div className="text-center font-medium flex flex-col justify-end">
      <p>CarWale Admin Panel</p>
      <p>© 2006 - 2024. www.carwale.com</p>
      </div>
    </Card>
  );
}
export default Sidebar;
