import { LitElement, html } from 'lit-element';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';

const VisibilityFilters = {
    SHOW_ALL: 'All',
    SHOW_ACTIVE: 'Active',
    SHOW_COMPLETED: 'Completed'
}

class TodoView extends LitElement {

    static get properties() {
        return {
            todos: {
                type: Array
            },
            filter: {
                type: String
            },
            task: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.todos = [];
        this.filter = VisibilityFilters.SHOW_ALL;
        this.task = '';
    }

    render() {
        return html `
            
            <style>
                todo-view {
                    display: block;
                    max-width: 800px;
                    margin: 0 auto
                }

                todo-view .input-layout {
                    width: 100%;
                    display: flex
                }

                todo-view .input-layout vaadin-text-field {
                    flex: 1;
                    margin-right: var(--spacing)
                }
                
                todo-view .todos-list {
                    margin-top: var(--spacing)
                }
                
                todo-view .visibility-filters {
                    margin-top: calc(4 * var(--spacing))
                }

            </style>

            <div class="input-layout form-group d-flex align-items-center" @keyup="${this.shortcutListener}">
                <input type="text" class="form-control col-9 input-field" placeholder="Task" value="${this.task}" @change="${this.updateTask}">
                <button type="submit" class="btn btn-success col-2 offset-md-1" @click="${this.addTodo}">
                    Add Todo
                </button>
            </div>
            
            <!--
            <div class="input-layout" @keyup="${this.shortcutListener}">
                <vaadin-text-field placeholder="Task" value="${this.task}" @change="${this.updateTask}">
                </vaadin-text-field>
                <vaadin-button theme="primary" @click="${this.addTodo}">
                    Add Todo
                </vaadin-button>
            </div>
            -->

            <div class="todos-list">
                ${this.applyFilter(this.todos).map(todo => html
                `
                    <div class="todo-item">

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="${todo.task}" ?checked="${todo.complete}" @change="${ e => this.updateTodoStatus(todo, e.target.checked)}">
                            <label class="form-check-label" for="${todo.task}">
                                ${todo.task}
                            </label>
                        </div>

                        <!--
                        <vaadin-checkbox ?checked="${todo.complete}" @change="${ e => this.updateTodoStatus(todo, e.target.checked)}"> 
                            ${todo.task}
                        </vaadin-checkbox>
                        -->

                    </div>
                `)}
            </div>

            <div class="form-check form-check-inline visibility-filters" >
                ${Object.values(VisibilityFilters).map( filter => html`

                    <input class="form-check-input col-3" type="radio" name="Radio" id="${filter}" @value-changed="${this.filterChanged}">
                    <label class="form-check-label" for="${filter}">
                        ${filter}
                    </label>
                    `
                )}
            </div>
            
            <!--
            <br>
            <vaadin-radio-group class="visibility-filters" value="${this.filter}" @value-changed="${this.filterChanged}"> 
                ${Object.values(VisibilityFilters).map( filter => html`
                    <vaadin-radio-button value="${filter}">
                        ${filter}
                    </vaadin-radio-button>`
                )}
            </vaadin-radio-group>
            -->

            <button type="button" class="btn btn-outline-primary offset-md-3" @click="${this.clearCompleted}">
                Clear completed
            </button>

            <!--
            <vaadin-button @click="${this.clearCompleted}">
                Clear completed
            </vaadin-button>
            -->
        `
    }

    addTodo() {
        if (this.task) {
            this.todos = [
                ...this.todos,
                {
                    task: this.task,
                    complete: false
                }
            ];
            document.querySelector('.input-field').value='';
            this.task = '';
        }
    }

    shortcutListener(e) {
        if (e.key === 'Enter') {
            this.addTodo();
        }
    }

    updateTask(e) {
        this.task = e.target.value;
    }

    updateTodoStatus(updatedTodo, complete) {
        this.todos = this.todos.map(todo =>
            updatedTodo === todo ? {
                ...updatedTodo,
                complete
            } : todo
        );
    }

    filterChanged(e) {
        this.filter = e.target.value;
    }

    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.complete);
    }

    applyFilter(todos) {
        switch (this.filter) {
            case VisibilityFilters.SHOW_ACTIVE:
                return todos.filter(todo => !todo.complete);
            case VisibilityFilters.SHOW_COMPLETED:
                return todos.filter(todo => todo.complete);
            default:
                return todos;
        }
    }

    createRenderRoot() {
        return this;
    }

}

customElements.define('todo-view', TodoView)