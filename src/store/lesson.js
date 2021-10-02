import { makeAutoObservable } from "mobx";
import resorces from "./resorces";

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
        resorces.loadResorces();
    }
}

export default new Lesson();