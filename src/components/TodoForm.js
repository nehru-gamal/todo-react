import React from "react";

function TodoForm() {
    return (
        <div className="form">
            <form>
                <div className="form">
                    <input className="input-field" type="text"></input>
                    <button className="butt">Add Todo</button>
                </div>
                <div className="row">
                    <div className="button">
                        <button className="butt col-3">ALL</button>
                        <button className="butt col-3">Active</button>
                        <button className="butt col-3">Complete</button>
                        <button className="butt col-12">
                            Toggle all complete: true
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
