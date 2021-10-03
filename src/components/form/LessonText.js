import { Textarea } from 'muicss/react';
import { observer } from "mobx-react-lite"

import lesson from '../../store/lesson';

const LessonText = observer(() => {
    return (
        <div className="material-form__item lesson-article">
            <h3>Текст</h3>
            <span>дополнительный текстовый материал к теме</span>
            <Textarea placeholder="Текст" value={lesson.text}
                onChange={event => lesson.onChangeText(event.target.value)}
            />
        </div>
    );
});

export default LessonText;