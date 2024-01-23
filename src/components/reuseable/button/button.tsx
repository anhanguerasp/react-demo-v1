import { useState } from "react";
import "./button.module.scss";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

interface props {
  bgColor: string;
  content?: string;
  dropDown?: boolean;
}
export const Button = ({ bgColor, content, dropDown }: props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDD = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <>
      {dropDown ? (
        <Dropdown>
          <Dropdown.Toggle
            variant={bgColor}
            id="dropdown-basic"
            style={{
              backgroundColor: bgColor,
              color: "white",
              height: "100%",
              fontSize: "18.4px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {content}
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{ backgroundColor: bgColor, color: "white", width: "100%" }}
          >
            <Link
              to={"../parcerias/amigovalepix"}
              style={{ textDecoration: "none" }}
            >
              <Dropdown.Item
                href="#/action-1"
                style={{
                  backgroundColor: bgColor,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Amigo Vale Pix
              </Dropdown.Item>
            </Link>

            <Link
              to={"../parcerias/professorvalepix"}
              style={{ textDecoration: "none" }}
            >
              <Dropdown.Item
                href="#/action-2"
                style={{
                  backgroundColor: bgColor,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Professor vale pix
              </Dropdown.Item>
            </Link>
            <Link
              to={"../parcerias/dominos"}
              style={{ textDecoration: "none" }}
            >
              <Dropdown.Item
                href="#/action-3"
                style={{
                  backgroundColor: bgColor,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Domino's
              </Dropdown.Item>
            </Link>

            <Link to={"../parcerias/aport"} style={{ textDecoration: "none" }}>
              <Dropdown.Item
                href="#/action-1"
                style={{
                  backgroundColor: bgColor,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                APORT
              </Dropdown.Item>
            </Link>
            <Link to={"../parcerias/acirc"} style={{ textDecoration: "none" }}>
              <Dropdown.Item
                href="#/action-1"
                style={{
                  backgroundColor: bgColor,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                ACIRC
              </Dropdown.Item>
            </Link>
            <Link to={"../parcerias/amai"} style={{ textDecoration: "none" }}>
              <Dropdown.Item
                href="#/action-1"
                style={{
                  backgroundColor: bgColor,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                amai
              </Dropdown.Item>
            </Link>

            <Link to={"../parcerias/unegro"} style={{ textDecoration: "none" }}>
              <Dropdown.Item
                href="#/action-1"
                style={{
                  backgroundColor: bgColor,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                unegro
              </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Dropdown.Toggle
          variant={bgColor}
          id="dropdown-basic"
          style={{
            backgroundColor: bgColor,
            color: "white",
            height: "100%",
            fontSize: "18.4px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {content}
        </Dropdown.Toggle>
      )}
    </>
  );
  {
    /*<>
      <div
        className={styles.button}
        style={{ backgroundColor: bgColor }}
        onClick={handleDD}
      >
        {content}
      </div>
      {showDropDown ? (
        <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Dropdown button 1
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <DropdownButton
            variant="primary"
            id="dropdown-basic-button"
            title="Dropdown button 2"
            className="ml-3"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            variant="primary"
            id="dropdown-basic-button"
            title="Anchor tag"
            className="ml-3"
            href="#"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      ) : (
        ""
      )}
    </>
      );*/
  }
};
