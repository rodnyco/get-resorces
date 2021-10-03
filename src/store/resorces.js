import { BreakfastDiningOutlined } from "@mui/icons-material";
import { makeAutoObservable, runInAction } from "mobx";


class Resorces {

    books         = [];
    videos        = [];
    images        = [];

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
                fetchedResorces.videos.forEach(video => this.videos.push(video));
                fetchedResorces.images.forEach(img => this.images.push(img));
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
    }

}

export default new Resorces();