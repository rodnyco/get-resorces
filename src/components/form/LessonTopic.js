import { Textarea } from 'muicss/react';
import { observer } from "mobx-react-lite"

import lesson from '../../store/lesson';

const LessonTopic = observer(() => {
    return (
        <div className="material-form__item lesson-topic">
            <h3>Тема урока</h3>
            <span>сформулирйте наиболее точно</span>
            <Textarea placeholder="Тема урока" value={lesson.topic} 
                onChange={event => lesson.onChangeTopic(event.target.value)}
            />
        </div> 
    );
})

export default LessonTopic;