import React, { useState, useEffect } from "react";
import { createClient } from "pexels";

const About = () => {
  // const [image, setImage] = useState();
  // const client = createClient(
  //   "hfpkkoW8LJW3VIsRCmH3Pk7btw5DZ4XUBqCeAdvSaZtpeuG1VvU3AwIG"
  // );

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     const query = "tree";
  //     const page = Math.floor(Math.random() * 80) + 1;
  //     const photos = await client.photos.search({ query, page });
  //     const imageUrl = photos.photos[0].src.original;
  //     setImage(imageUrl);
  //   };
  //   fetchImage();
  // }, []);

  return (
    <div className="relative w-full bg-cover bg-center inset-0">
      <img
        src="https://images.unsplash.com/photo-1576085898328-55e89f71816a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="Snow-covered pine trees"
        className="w-full h-full"
      />
    </div>
  );
};

export default About;
