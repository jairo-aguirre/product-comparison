import axios from "axios";
import { useState } from "react";

// Function will send comparison info to database, can be put in another file later
export function useSave() {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const sendComparison = (products, user) => {
    const formUrlEncoded = (x) => {
      return Object.keys(x).reduce(
        (p, c) => p + `&${c}=${encodeURIComponent(x[c])}`,
        ""
      );
    };

    const data = {
      user_id: user.id || 1,
      // product_ids: products.toString()
      product_ids: products,
    };

    axios
      .post("/api/comparisons", formUrlEncoded(data))
      .then((data) => {
        console.log("please be okay", data);
        setOpen(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return {
    open,
    sendComparison,
    handleClose,
  };
}
