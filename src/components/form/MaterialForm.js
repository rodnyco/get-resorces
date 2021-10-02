import { Form, Textarea, Button } from 'muicss/react';
import { Grid } from '@material-ui/core';

import './MaterialForm.css';

function MaterialForm() {
    return (
        <Form className="material-form">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <div className="material-form__item lesson-topic">
                        <h3>Тема урока</h3>
                        <span>по русски пиши бля</span>
                        <Textarea placeholder="Тему напиши" />
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="material-form__item lesson-article">
                        <h3>Статья</h3>
                        <span>по которой тебя петушить будут</span>
                        <Textarea placeholder="Пиши давай" />
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <p>Тут будут чекбоксы</p>
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" className="material-form button">
                Ищем
            </Button>
        </Form>
    );
}

export default MaterialForm;