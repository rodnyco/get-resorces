import { Form, Button } from 'muicss/react';
import { Grid } from '@material-ui/core';

import './MaterialForm.css';

import LessonTopic from './LessonTopic';
import LessonText from './LessonText';
import lesson from '../../store/lesson';

function MaterialForm() {
    return (
        <Form className="material-form">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <LessonTopic />    
                </Grid>
                <Grid item xs={12} md={6}>
                    <LessonText /> 
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" className="material-form button"
                onClick={(e) => {
                    e.preventDefault();
                    lesson.getResorces();
                }}    
            >
                Ищем
            </Button>
        </Form>
    );
}

export default MaterialForm;