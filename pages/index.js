import React, { useEffect } from "react";
import Router from "next/router";

export default function homePage() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/inscrever");
    }
  }, []);
}