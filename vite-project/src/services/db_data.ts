type DataDbProps = {
    id: number;
    date: string;
    temp: number | null;
    wind: number | null;
  }

const db_data: DataDbProps[] = [
    {
        id: 1,
        date: "01/2023",
        temp: -1,
        wind: 11
    },
    {
        id: 2,
        date: "02/2023",
        temp: 2,
        wind: 10
    },
    {    
        id: 3,
        date: "03/2023",
        temp: 5,
        wind: 13
    },
    {    
        id: 4,
        date: "04/2023",
        temp: 6,
        wind: 12
    },
    {    
        id: 5,
        date: "05/2023",
        temp: 12,
        wind: 11
    },
    {    
        id: 6,
        date: "06/2023",
        temp: 18,
        wind: 10
    },
    {    
        id: 7,
        date: "07/2023",
        temp: 19,
        wind: 11
    },
    {    
        id: 8,
        date: "08/2023",
        temp: 18,
        wind: 10
    },
    {    
        id: 9,
        date: "09/2023",
        temp: 16,
        wind: 8
    },
    {
        id: 10,
        date: "10/2023",
        temp: 12,
        wind: 11
    },
    {
        id: 11,
        date: "11/2023",
        temp: null,
        wind: null
    },
    {    
        id: 12,
        date: "12/2023",
        temp: null,
        wind: null
    }
]
export default db_data