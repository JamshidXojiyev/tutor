export const studentsData = (data) => {
  if (window.innerWidth > 500) {
    return {
      header: ["name", "group"],
      body: [
        {
          name: "doniyor farmonov",
          group: "202-group",
        },
      ],
      order: ["name", "group"],
    };
  }
};
