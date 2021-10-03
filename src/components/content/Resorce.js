import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Divider from '@mui/material/Divider';


function Resorce(props) {
    return (
        <div>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ContentCopyIcon />
                    </Avatar>
                </ListItemAvatar>
            <ListItemText primary={props.title} secondary={<a href={props.link}>Перейти на страницу</a>} />
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>  
    );
}

export default Resorce;