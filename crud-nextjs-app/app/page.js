'use client'

import Image from "next/image";
import Form from "./components/Form"

export default function Home() {
  const handleFormRes = () => {
  // console.log("CLICKED!")
}

  return (
    <>
      <h1>Hello!</h1>
      <Form handleFormRes={handleFormRes}/>
    </>
  );
}
