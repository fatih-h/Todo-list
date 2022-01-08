class todo {

    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
    changePriority(value) {
        this.priority = value;
    }

};
export default todo;