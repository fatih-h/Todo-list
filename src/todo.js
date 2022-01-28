import { format } from 'date-fns';
class todo {

    constructor(type) {
        this.title = '';
        this.description = '';
        this.priority = 'Easy';
        this.dueDate = format(new Date(), 'dd-MM-y');
        this.project = type;
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
    changeType(value) {
        this.project = value;
    }

};
export default todo;