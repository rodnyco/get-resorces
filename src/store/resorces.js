import { makeAutoObservable, runInAction } from "mobx";


class Resorces {

    books         = [];
    videos        = [];
    audios        = [];
    images        = [];
    presentations = [];

    isLoading = true;
    
    constructor() {
        makeAutoObservable(this)
    }

    loadResorces() {
        this.isLoading = true;
        this.clean();
        this.get().then(fetchedResorces => {
            runInAction(() => {
                fetchedResorces.books.forEach(book => this.books.push(book));
                this.isLoading = false;
            })
        });
    }

    get = async () => {
        const options = {
            method: "GET",
        }
        const request = new Request('/api/resorces', options);
        const response = await fetch(request);
        return response.json();
    }

    clean() {
        this.books = [];
        this.videos = [];
        this.audios = [];
        this.images = [];
        this.presentations = [];
    }

}

export default new Resorces();