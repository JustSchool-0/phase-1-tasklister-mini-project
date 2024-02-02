class Task {

    constructor(description) {
        this.description = description;
    }

    updateTask() {
        return `
      <li>
        ${this.description}
        <button data-description="${this.description}">X</button>
      </li>
      `;
    }
}