import { makeAutoObservable } from "mobx";


class Resorces {

    books = [];
    videos = [];
    audios = [];
    images = [];
    presentations = [];

    isLoading = true;
    
    constructor() {
        makeAutoObservable(this)
    }

    loadResorces() {
        this.isLoading = true;
        console.log('loading');
        const data = this.get();
        console.log(data);
    }

    get = async () => {
        const options = {
            method: "GET",
        }
        const request = new Request('/api/resorces', options);
        const response = await fetch(request);
        return response.json();
    }

}

export default new Resorces();