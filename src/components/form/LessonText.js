import { Textarea } from 'muicss/react';
import { observer } from "mobx-react-lite"

import lesson from '../../store/lesson';

const LessonText = observer(() => {
    return (
        <div className="material-form__item lesson-article">
            <h3>Статья</h3>
            <span>по которой тебя петушить будут</span>
            <Textarea placeholder="Пиши давай" value={lesson.text}
                onChange={event => lesson.onChangeText(event.target.value)}
            />
        </div>
    );
});

export default LessonText;