import { format } from 'date-fns';
class todo {

    constructor() {
        this.dueDate = format(new Date(), 'dd-MM-y');
    }
    changeTitle(value) {
        this.title = value;
    }
    changeDescription(value) {
        this.description = value;
    }
    changePriority(value) {
        this.priority = value;
    }
    changeDate(value) {
        this.dueDate = value;
    }
    print(){
        console.log(this);
    }

};
export default todo;