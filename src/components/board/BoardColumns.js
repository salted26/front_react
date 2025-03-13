export const columns = [
  {
    name: "no",
    selector: row => row.id,
    sortable: true,

  },
  {
    name: "작성자",
    selector: row => row.writer,
    sortable: true,
  },
  {
    name: "제목",
    selector: row => row.title,
    sortable: true,
  },
  {
    name: "views",
    selector: row => row.views,
    sortable: true,
  },
]