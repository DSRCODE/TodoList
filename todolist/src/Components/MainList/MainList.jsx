import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "./MainList.css";
import { useState } from "react";

const MainList = () => {
  const [ToDo, setToDo] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { ToDo }]);
    setToDo("");
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>To Do List</h1>
        <hr />
        <div className="main">
          <TextField
            onChange={(e) => setToDo(e.target.value)}
            value={ToDo}
            id="filled-basic"
            label="Enter New ToDo"
            variant="filled"
            style={{ width: "500px", fontSize: "15px" }}
          />
          <Button
            onClick={addData}
            variant="contained"
            style={{ marginLeft: "10px", backgroundColor: "black" }}
          >
            <AddIcon
              style={{ height: "45px", width: "60px", color: "#FFD700" }}
            />
          </Button>
        </div>

        <div className="list">
          
          {data.map((element, index) => {
            return (
              <>
              {
                index === 0 ?  <h3 style={{marginTop:"50px", float:"left"}}>Following Task to be Completed :</h3> : <p style={{display:"bolck"}}></p>
              }
                <div className="list-item">
                  <input type="checkbox" id="checkbox" />
                  <h4 key={index}>{element.ToDo}</h4>
                  <Button
                    onClick={() => removeItem(index)}
                    variant="contained"
                    color="error"
                    style={{ marginLeft: "15px" }}
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainList;
