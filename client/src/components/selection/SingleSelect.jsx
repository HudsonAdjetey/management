import React, { useEffect, useState } from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";

const animatedComponents = makeAnimated();

const styles = {
  control: (base, state) => ({
    ...base,
    borderColor: "#d2d6de",
    boxShadow: state.isFocused ? `0 0 5px #b8daff` : "none",
    transition: "border-color 0.1s ease, box-shadow 0.1s ease",
  }),
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
};

const SingleSelect = ({ initialValue, onSelect }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [data, setData] = useState([
    {
      value: "Canteen",
      label: "Canteen",
      isFixed: false,
    },
    {
      value: "lunch",
      label: "Lunch",
      isFixed: false,
    },
    {
      value: "French",
      label: "Supper",
    },
  ]);
  // Add a new fixed value to the selection list
  // useEffect(()=>{
  // const newDataAdded
  // }, [data])

  const orderOptions = (value) => {
    if (value === "asc") {
      data.sort((a, b) => a.label.localeCompare(b.label));
    } else if (value === "desc") {
      data.sort((a, b) => b.label.localeCompare(a.label)).reverse();
    }
  };
  const order = (values) => {
    return values
      .filter((v) => v.isFixed)
      .concat(values.filter((v) => !v.isFixed));
  };

  const onChange = (newValue, actionMeta) => {
    switch (actionMeta.action) {
      case "remove-value":
      case "pop-value":
        if (actionMeta.removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        newValue = data.filter((v) => v.isFixed);
        break;
    }

    setSelectedValues(order(newValue));
    onSelect && onSelect(order(newValue));
  };
  return (
    <div>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={data[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={data}
      />
    </div>
  );
};

export default SingleSelect;
