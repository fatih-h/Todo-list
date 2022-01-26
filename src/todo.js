class todo {

    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
    changePriority(value) {
        this.priority = value;
    }
    changeDate(value){
        this.dueDate = value;
    }

};
export default todo;