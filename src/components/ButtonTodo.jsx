import React, { useRef } from "react";
const ButtonTodo = (props) => {
  const { item, ubahTodo, hapusTodo, completeTodo } = props;

  const inputRef = useRef(true);
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const ubah = (id, value, e) => {
    if (e.which === 13) {
      ubahTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    //valueOf
    <div className="wrap-list">
      <li key={item.id} className="list">
        <div className="input-group button-action">
          
          <input
            type="text"
            className="form-control"
            ref={inputRef}
            disabled={inputRef}
            defaultValue={item.item}
            onKeyPress={(e) => ubah(item.id, inputRef.current.value, e)}
          />
          {item.completed === false && (
            <button
              className="btn btn-secondary btn-done"
              onClick={() => completeTodo(item.id)}
            >
              done
            </button>
          )}
          <button
            className="btn btn-secondary btn-ubah"
            type="button"
            onClick={() => changeFocus()}
          >
            edit {""}
          </button>
          <button
            className="btn btn-secondary btn-hapus"
            type="button"
            onClick={() => hapusTodo(item.id)}
          >
            {""}
            delete
          </button>
          {""}
        </div>

        {item.completed}
      </li>
    </div>
  );
};
export default ButtonTodo;