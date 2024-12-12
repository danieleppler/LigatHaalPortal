# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


How do you handle CSS: tailwind, css in module, global css, if you use global how do you create styles, if tailwind do you use any global css and in what layers, do you use plugins, do you use custom values or stick to base classes only

How do you organize components: everything in one file, make super small components and group things in one view into one folder, what needs to be tested, how do you load data, how do you separate data loading (for example, I use custom hooks with RQ for every api end point, but other might use dedicated container components that load data from and endpoint using useEffect)

Where do you put shared/util stuff and how much do you use shared stuff, do you build component primitives that are BL-independent and you can use over all your views and if yes how do you separate what should be a "primitive" and what is BL-dependent, do you use storybook to build primitves

How do you manage state? Server state handler? Or drop it all in redux? or try to keep everything locally? How do you decide which should go where

How do you handle pages? Do you make them lean that immediately just call some components? Do pages load their own data? (Remix in particular binds loading data to routing and next.js app directory essentially does the same)

How much server side features will you use and for what (assuming you using technology that enables it at all)

How do you handle errors? How do you protect your site from failing from one local error? What errors can be circumvented and what can be dropped?