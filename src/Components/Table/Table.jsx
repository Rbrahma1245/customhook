import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

function Table() {
  const data = [
    {
      name: "Tanner",
      age: 26,
      friend: {
        name: "Jason",
        age: 23,
      },
    },
    {
      name: "Mike",
      age: 30,
      friend: {
        name: "Shan",
        age: 28,
      },
    },
    {
      name: "John",
      age: 22,
      friend: {
        name: "Arun",
        age: 23,
      },
    },
    {
      name: "Tan",
      age: 26,
      friend: {
        name: "Johny",
        age: 22,
      },
    },
    {
      name: "Lucky",
      age: 23,
      friend: {
        name: "Raj",
        age: 18,
      },
    },
  ];

  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
      Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
    },
    {
      id: "friendName", // Required because our accessor is not a string
      Header: "Friend Name",
      accessor: (d) => d.friend.name, // Custom value accessors!
    },
    {
      Header: () => <span>Friend Age</span>, // Custom header components!
      accessor: "friend.age",
    },

    //COLUMN HEADER GROUP
    {
      Header: "Favorites",
      headerClassName: "my-favorites-column-header-group",
      columns: [
        {
          Header: "Color",
          accessor: "favorites.color",
        },
        {
          Header: "Food",
          accessor: "favorites.food",
        },
        {
          Header: "Actor",
          accessor: "favorites.actor",
        },
      ],
    },

    //CUSTOM CELLS
    {
      Header: () => (
        <span>
          <i className="fa-tasks" /> Progress
        </span>
      ),
      accessor: "age",
      Cell: (row) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#dadada",
            borderRadius: "2px",
          }}
        >
          <div
            style={{
              width: `${row.value}%`,
              height: "100%",
              backgroundColor:
                row.age > 30 ? "#85cc00" : row.age > 20 ? "#ffbf00" : "#ff2e00",
              borderRadius: "2px",
              transition: "all .2s ease-out",
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <ReactTable
        data={data}
        columns={columns}
        getTrProps={(state, rowInfo) => ({
          style: {
            background:
              rowInfo && rowInfo.row.age > 20 ? "lightgreen" : "lightblue",
          },
        })}

        // pivotBy={['name', 'age']}

        // // SUB COMPONENT
        // SubComponent={row => {
        //   return (
        //     <div>
        //       You can put any component you want here, even another React Table! You
        //       even have access to the row-level data if you need! Spark-charts,
        //       drill-throughs, infographics... the possibilities are endless!
        //     </div>
        //   );
        // }}
      />
    </div>
  );
}

export default Table;
