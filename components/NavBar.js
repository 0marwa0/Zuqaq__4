import { Tooltip } from "antd";
import { useState } from "react";

function NavBar(props) {
  const [selectFina, setSelectedFina] = useState(false);
  const [selectedNotif, setSelectedNotif] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState(false);
  const SelectFina = () => {
    props.fun();
    setSelectedFina(true);
    setSelectedNotif(false);
    setSelectedSearch(false);
  };
  const SelectNotif = () => {
    props.fun();
    setSelectedFina(false);
    setSelectedNotif(true);
    setSelectedSearch(false);
  };
  const SelectSearch = () => {
    props.fun();
    setSelectedFina(false);
    setSelectedNotif(false);
    setSelectedSearch(true);
  };
  return (
    <div className="navBar">
      <div>
        <Tooltip title="Zuqaq13" placement="right">
          <div className="nav_logo">
            <img style={{ width: "45px" }} src="../static/images/logo.png" />
          </div>
        </Tooltip>
        <ul>
          <Tooltip title="Finanical" placement="right">
            <li onClick={SelectFina} className={selectFina ? "selectLi" : ""}>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                className=""
                data-icon="dollar"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path>
              </svg>
            </li>
          </Tooltip>

          <Tooltip title="Notifications" placement="right">
            <li onClick={props.fun}>
              {" "}
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                className=""
                data-icon="bell"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path>
              </svg>
            </li>
          </Tooltip>

          <Tooltip title="Search" placement="right">
            <li onClick={props.fun}>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                className=""
                data-icon="search"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg>
            </li>
          </Tooltip>
        </ul>
      </div>
      <div className="user_image">
        <img src="../static/images/avatar.jpg" />
        <span className="active"></span>
      </div>
    </div>
  );
}

export default NavBar;
