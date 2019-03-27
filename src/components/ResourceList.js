import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  // initalization of state from hook
  const [resources, setResource] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResource(response.data);
  };

  // calls component did mount to start with
  // checks to see if resource is different than before, if so
  // call componentdidupdate, to actually make the call
  // if resource is the same, like a double click then we don't call it
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return <div>{resources.length}</div>;
};

export default ResourceList;
