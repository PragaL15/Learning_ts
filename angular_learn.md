# Angular Cheat Sheet

## Angular Installation
1. Install Angular globally or locally:
   ```bash
   npm install -g @angular/cli
   ```
   `-g` installs Angular globally.
2. To install required dependencies from `package.json`:
   ```bash
   npm i
   ```

---

## Angular Components Overview
Each component represents a specific part of the user interface, defined by:
- **`selector`**: Specifies the custom HTML tag (e.g., `<app-root>`) for rendering this component.
- **`imports`**: Declares required dependencies (e.g., `RouterOutlet` for routing).
- **`templateUrl`**: Points to the external HTML file for the component's UI.
- **`styleUrl`**: Points to the CSS file for styling the component.

Example:
```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
}
```

---

## Running Angular
- **`ng serve`**: Compiles and runs the application locally, serving it in the browser without creating physical files.
- **`ng build`**: Compiles the application into static files (HTML, CSS, JS) in the `/dist` directory. You need to rebuild for updates.

---

## Angular Routing
1. `<router-outlet>` dynamically loads content based on navigation.
2. The `path: '*'` matches any route and acts as a wildcard.
3. **Render Modes**:
   - `prerender`: Pre-generates static HTML during the build phase.
   - `dynamic`: Generates HTML at runtime for each request.

---

## Interfaces
**Definition**: An interface defines the shape or structure of an object, acting as a contract that specifies properties and methods.

Example:
```ts
interface User {
  id: number;
  name: string;
  email?: string; // Optional
}
const user1: User = { id: 1, name: 'Alice' }; // Valid
const user2: User = { id: 2, name: 'Bob', email: 'bob@example.com' }; // Also valid
```

---

## Two-Way Data Binding
- **`ngModel`**: Connects the template and the model, allowing changes in the UI to reflect in the logic and vice versa.

Example:
```html
<input [(ngModel)]="newTask" placeholder="Enter your new task" />
<button (click)="addTask()">Add Task</button>
```

---

## Iteration with `*ngFor`
- **`*ngFor`**: Iterates over a collection and dynamically renders elements.

---

## Client-Side vs. Server-Side Rendering
1. **Client-Side Rendering**:
   - More load on the client.
   - Best for single-page applications with rich interactivity.
   - Direct and dynamic updates.

2. **Server-Side Rendering**:
   - More load on the server.
   - Better for content-heavy apps and SEO focus.
   - Provides better first-page load performance.

---

## Angular File Structure
1. **`src` Folder**:
   - **`main.ts`**: Entry point of the application.
   - **`index.html`**: The main HTML file served to users.
   - **`environment/`**: Contains configurations for production and development.
   - **`assets/`**: For storing images and static files.
   - **`polyfills`**: Ensures compatibility with older browsers.

2. **`angular.json`**:
   - Key configurations:
     - `projectType`: Indicates whether the project is an application.
     - `sourceRoot`: Points to the root folder (usually `src`).
     - `index`: Specifies the `index.html` file path.
     - `main`: Specifies the `main.ts` file path.
     - `styles`: Lists CSS files to include (e.g., Bootstrap).
     - `scripts`: Lists JavaScript files to include (e.g., Bootstrap scripts).

Example:
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

---

## Testing in Angular
1. **`spec.ts` Files**: Contains unit tests, bundled in `tsconfig.spec.json`.
2. **Karma Configuration**:
   - `karma.conf.js` runs the test cases.
   - Test cases are written using **Jasmine**.

---

## Package Management
1. **`package.json`**:
   - Lists commands and their functions.
   - **`devDependencies`**: Includes developer-only dependencies like TypeScript and testing tools.

2. **`package-lock.json`**: Locks the dependency tree for consistency across environments.

---

## Bootstrap and Material Integration
1. Add Bootstrap via `angular.json`:
   ```json
   "styles": [
     "node_modules/bootstrap/dist/css/bootstrap.min.css",
     "node_modules/bootstrap-icons/font/bootstrap-icons.css",
     "src/styles.css"
   ],
   "scripts": [
     "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
   ]
   ```
2. Add Angular Material:
   ```bash
   ng add @angular/material
   ```

---

## Mono-Repo Architecture
- Manages multiple Angular apps, libraries, and shared resources in a single repository.
- Example configuration in `angular.json`:
  - `projectType: "application"`
  - `sourceRoot: "src"`

---

## Standalone Components
- **Angular 17** supports standalone components, eliminating the need for NgModules to bootstrap an application.

---

## Browser Compatibility
- **`browserslistrc`**: Ensures the application supports specific browsers.

---

## Summary
This cheat sheet highlights the essential components and configurations for working with Angular, from installation to rendering and testing.
```