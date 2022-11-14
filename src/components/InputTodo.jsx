import React, { useState } from "react";
import { tambahTodos } from "../redux/reducer/reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tambahTodo: (obj) => dispatch(tambahTodos(obj)),
  };
};

const InputTodo = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const tambah = () => {
    if (todo === "") {
      alert("please fill the input field");
    } else {
      props.tambahTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    
    <div className="todos-header">
      <center><h1>TODO LIST APP</h1></center>
      
      <div className="input-group input-todo ">
        <input
          className="form-control"
          type="text"
          onChange={(e) => handleChange(e)}
          value={todo}
          placeholder={"input here..."}
        />
        <button className="btn btn-primary " onClick={() => tambah()}>
          tambah
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);