import logo from "../assets/logo";

const blogData = {
  name: "Tanskie's Blog",
  image: logo,
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "My First Post",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ],
};

export default blogData;
