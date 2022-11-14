import React, { useState } from "react";
import { connect } from "react-redux";
import {
  tambahTodos,
  hapusTodos,
  ubahTodos,
  completeTodos,
} from "../redux/reducer/reducer";
import Todo from "./ButtonTodo";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tambahTodo: (obj) => dispatch(tambahTodos(obj)),
    hapusTodo: (id) => dispatch(hapusTodos(id)),
    ubahTodo: (obj) => dispatch(ubahTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const ListTodo = (props) => {
  const [sort, setSort] = useState("active");

  return (
    <div>
      <div className="button-action-filter">
        <button className="btn-active" onClick={() => setSort("active")}>
          Active
        </button>
        <button className="btn-completed" onClick={() => setSort("completed")}>
          Complete
        </button>
        <button className="btn-all" onClick={() => setSort("all")}>
          All
        </button>
      </div>
      <div className="wrap-list-todo">
        <ul>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed == false && (
                    <Todo
                      key={item.id}
                      item={item}
                      hapusTodo={props.hapusTodo}
                      ubahTodo={props.ubahTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}

          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <Todo
                      key={item.id}
                      item={item}
                      hapusTodo={props.hapusTodo}
                      ubahTodo={props.ubahTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}

          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <Todo
                    key={item.id}
                    item={item}
                    hapusTodo={props.hapusTodo}
                    ubahTodo={props.ubahTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);