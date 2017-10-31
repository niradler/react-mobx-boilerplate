import {observable, action, computed} from 'mobx';

class Pages {
@observable pages = [];

@action addPage(page){
    this.pages.push(page);
}

@computed get pagesCount() {
    return this.pages.length;
}

}
const pagesStore = new Pages();
export default pagesStore;