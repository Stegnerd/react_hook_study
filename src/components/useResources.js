// lowercase  files when exporting a function
import { useState, useEffect } from "react";
import axios from "axios";

const userResources = resource => {
  // initalization of state from hook
  const [resources, setResource] = useState([]);

  // calls component did mount to start with
  // checks to see if resource is different than before, if so
  // call componentdidupdate, to actually make the call
  // if resource is the same, like a double click then we don't call it
  // if you don't pass in a second array, then it cslled every time
  // if you pass in an empty one, is only called one time
  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResource(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default userResources;
