import React from "react";
import Form from "react-bootstrap/Form";

const Filter = () => {
    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={"inline-1"}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={"inline-2"}
                />
            </span>
        </div>
    );
};

export default Filter;
