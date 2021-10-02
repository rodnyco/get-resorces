import { makeAutoObservable } from "mobx";

class Lesson {
    topic = '';
    text = '';

    constructor() {
        makeAutoObservable(this)
    }

    onChangeTopic(e) {
        this.topic = e;
    }

    onChangeText(e) {
        this.text = e;
    }

    getResorces() {
        console.log(this.topic, this.text);
    }
}

export default new Lesson();