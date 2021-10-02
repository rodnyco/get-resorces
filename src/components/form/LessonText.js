import { Textarea } from 'muicss/react';

function LessonText() {
    return (
        <div className="material-form__item lesson-article">
            <h3>Статья</h3>
            <span>по которой тебя петушить будут</span>
            <Textarea placeholder="Пиши давай" />
        </div>
    );
}

export default LessonText;