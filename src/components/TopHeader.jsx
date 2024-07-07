import { Icon } from "@iconify/react";

const TopHeader = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="w-full flex items-center justify-around">
          <div className="md:w-8/12">
            <div className="topbar-left text-center">
              <ul>
                <li><a href="tel:+22968400000" className="flex gap-2 items-center"><Icon icon={"ic:round-phone-in-talk"} /> +229 68400000 / +229 90903002</a></li>
                <li><a className="flex gap-2 items-center" href="mailto:contact@samu.bj"><Icon icon={"ic:round-email"} /> contact@samu.bj</a></li>
              </ul>
            </div>
          </div>
          <div className="md:w-4/12">
            <div className="topbar-right hidden md:block">
              <ul className="flex items-center justify-center">
                <li><a href="#"><Icon icon={"bxl:facebook-square"} className="top-icon" /></a></li>
                <li><a href="#"><Icon icon={"ri:twitter-x-fill"} className="top-icon" /></a></li>
                <li><a href="#"><Icon icon={"mdi:linkedin"} className="top-icon" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
