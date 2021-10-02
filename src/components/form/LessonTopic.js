import { Textarea } from 'muicss/react';

function LessonTopic() {
    return (
        <div className="material-form__item lesson-topic">
            <h3>Тема урока</h3>
            <span>по русски пиши бля</span>
            <Textarea placeholder="Тему напиши" />
        </div> 
    );
}

export default LessonTopic;