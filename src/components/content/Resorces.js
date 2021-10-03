import * as React from 'react';
import List from '@mui/material/List';
import Resorce from "./Resorce";
import { observer } from "mobx-react-lite";
import resorcesStore from "../../store/resorces";

import MaterialContent from './MaterialContent';

const Resorces = observer((props) => {
    const books = resorcesStore.books;
    const bookItems = books.map((book) =>
        <li>{<Resorce title={book.title} link={book.link} />}</li>
    );
    const listBook = <List
        sx={{
          width: '100%',
          maxWidth: '100%',
          bgcolor: 'background.paper',
        }}
      >
      {bookItems}
      </List>;

    
    const videos = resorcesStore.videos;
    const videoItems = videos.map((video) =>
        <li>{<Resorce title={video.title} link={video.link} />}</li>
    );
    const listVideo = <List
      sx={{
          width: '100%',
          maxWidth: '100%',
          bgcolor: 'background.paper',
      }}
      >
      {videoItems}
      </List>;

    
    const images = resorcesStore.images;
    const imagesItems = images.map((img) =>
        <li>{<Resorce title={img.title} link={img.link} />}</li>
    );
    const listImg = <List
      sx={{
          width: '100%',
          maxWidth: '100%',
          bgcolor: 'background.paper',
      }}
      >
      {imagesItems}
      </List>;

    return (
        <MaterialContent books={listBook} videos={listVideo} images={listImg}/>
    );
});

export default Resorces;