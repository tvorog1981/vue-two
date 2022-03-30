export const proccess = {
  dev: false,
};

export const links = [
  {
    id: 1,
    title: proccess.dev ? "http://localhost/home/:8080" : "home",
    alias: "home",
    url: "/",
  },
  { id: 2, title: "about", alias: "about", url: "/about" },
  { id: 2, title: "tasks", alias: "tasks", url: "/tasks" },
];
export const logo = { url: "/", name: "Template" };


export const images = [
    {id:1,name:'url1'},
    {id:2,name:'url2'},
    {id:3,name:'url3'}
]