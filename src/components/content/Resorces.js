import * as React from 'react';
import List from '@mui/material/List';
import Resorce from "./Resorce";
import { observer } from "mobx-react-lite";

import resorcesStore from "../../store/resorces";

const Resorces = observer(() => {
    const books = resorcesStore.books;
    const bookItems = books.map((book) =>
        <li>{<Resorce title={book.title} link={book.link} />}</li>
    );
    return (
        <List
          sx={{
            width: '100%',
            maxWidth: '100%',
            bgcolor: 'background.paper',
          }}
        >
        {bookItems}
        </List>
    );
});

export default Resorces;