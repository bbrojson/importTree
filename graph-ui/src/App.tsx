import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-950 md:py-10">
        <div className="container md:border-2 border-slate-200 dark:border-slate-800 rounded-lg px-7 pb-5 pt-12 mx-auto max-w-screen-md">
          <table className="table-fixed border-separate border-spacing-0 ms-2">
            <thead>
              <tr>
                <th className="w-0 table-cell md:hidden"></th>
                <th className="w-[25px] hidden md:table-cell"></th>
                <th className="w-[25px] hidden md:table-cell"></th>
                <th className="w-auto"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="relative h-12">
                <td className="border-s-2 border-s-sky-300 dark:border-s-sky-300 border-dashed table-cell md:hidden">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left border-dashed border-sky-300 dark:border-sky-300"></div>
                </td>
                <td className="border-t-[1rem] border-t-sky-100 dark:border-t-sky-900 border-s-2 border-s-sky-300 dark:border-s-sky-300 border-dashed hidden md:table-cell">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left border-dashed border-sky-300 dark:border-sky-300"></div>
                </td>
                <td className="border-t-[1rem] border-t-sky-100 dark:border-t-sky-900 hidden md:table-cell"></td>
                <td>
                  <p className="relative -top-4 ps-6 dark:text-slate-300">
                    Hello world! 👋
                  </p>
                </td>
              </tr>
              <tr className="relative h-12">
                <td className="border-s-2 border-s-indigo-300 dark:border-s-orange-300 table-cell md:hidden">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left border-dashed border-indigo-300 dark:border-orange-300"></div>
                </td>
                <td className="border-s-2 border-s-sky-300 dark:border-s-sky-300 border-dashed hidden md:table-cell"></td>
                <td className="border-s-2 border-s-indigo-300 dark:border-s-orange-300 border-t-[1rem] border-t-indigo-100 dark:border-t-orange-900 hidden md:table-cell">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left border-dashed border-indigo-300 dark:border-orange-300"></div>
                </td>
                <td>
                  <p className="relative -top-4 ps-6 dark:text-slate-300">
                    Publish on CodePen! 🚀
                  </p>
                </td>
              </tr>
              <tr className="relative h-14">
                <td className="border-s-2 border-s-sky-300 dark:border-s-sky-300 table-cell md:hidden">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left border-sky-300 dark:border-sky-300"></div>
                </td>
                <td className="border-s-2 border-s-sky-300 dark:border-s-sky-300 border-t-[1rem] border-t-sky-100 dark:border-t-sky-900 hidden md:table-cell">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left border-sky-300 dark:border-sky-300"></div>
                </td>
                <td className="border-s-2 border-s-indigo-300 dark:border-s-orange-300 border-t-[1rem] border-t-sky-100 dark:border-t-sky-900 hidden md:table-cell"></td>
                <td>
                  <p className="relative -top-5 ps-6 dark:text-slate-300">
                    Add dark mode support
                  </p>
                </td>
              </tr>
              <tr className="relative h-10">
                <td className="border-s-2 border-s-teal-300 dark:border-s-pink-300 table-cell md:hidden">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-right border-teal-300 dark:border-pink-300 translate-x-[-11px] translate-y-[-9px]"></div>
                </td>
                <td className="border-t-2 border-t-teal-300 dark:border-t-pink-300 border-s-2 border-s-sky-300 dark:border-s-sky-300 hidden md:table-cell">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left translate-x-[-11px] translate-y-[-9px] border-sky-300 dark:border-sky-300"></div>
                </td>
                <td className="rounded-tr-lg border-t-2 border-t-teal-300 dark:border-t-pink-300 border-s-2 border-s-indigo-300 dark:border-s-orange-300 border-e-2 border-e-teal-300 dark:border-e-pink-300 hidden md:table-cell"></td>
                <td>
                  <p className="relative -top-5 ps-6 dark:text-slate-300">
                    Merge branch 'feature/styles' into 'main'
                  </p>
                </td>
              </tr>
              <tr className="relative h-12">
                <td className="border-s-2 border-s-teal-300 dark:border-s-pink-300 table-cell md:hidden">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left border-teal-300 dark:border-pink-300"></div>
                </td>
                <td className="border-s-2 border-s-sky-300 dark:border-s-sky-300 hidden md:table-cell"></td>
                <td className="border-s-2 border-s-indigo-300 dark:border-s-orange-300 border-e-2 border-e-teal-300 dark:border-e-pink-300 hidden md:table-cell">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-right border-teal-300 dark:border-pink-300"></div>
                </td>
                <td>
                  <p className="relative -top-4 ps-6 dark:text-slate-300">
                    Resize to 1 branch on small screens
                  </p>
                </td>
              </tr>
              <tr className="relative h-14">
                <td className="border-s-2 border-s-teal-300 dark:border-s-pink-300 table-cell md:hidden">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left border-teal-300 dark:border-pink-300"></div>
                </td>
                <td className="border-s-2 border-s-sky-300 dark:border-s-sky-300 border-b-2 border-b-teal-300 dark:border-b-pink-300 hidden md:table-cell"></td>
                <td className="rounded-br-lg border-s-2 border-s-indigo-300 dark:border-s-orange-300 border-b-2 border-b-teal-300 dark:border-b-pink-300 border-e-2 border-e-teal-300 dark:border-e-pink-300 hidden md:table-cell">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-right border-teal-300 dark:border-pink-300"></div>
                </td>
                <td>
                  <p className="relative -top-5 ps-6 dark:text-slate-300">
                    Create commit graph styles
                  </p>
                </td>
              </tr>
              <tr className="relative h-10">
                <td className="border-s-2 border-s-sky-300 dark:border-s-sky-300 table-cell md:hidden">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left translate-x-[-11px] translate-y-[-9px] border-sky-300 dark:border-sky-300"></div>
                </td>
                <td className="border-s-2 border-s-sky-300 dark:border-s-sky-300 hidden md:table-cell">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left translate-x-[-11px] translate-y-[-11px] border-sky-300 dark:border-sky-300"></div>
                </td>
                <td className="border-s-2 border-s-indigo-300 dark:border-s-orange-300 hidden md:table-cell"></td>
                <td>
                  <p className="relative -top-5 ps-6 dark:text-slate-300">
                    Scaffold commit graph table
                  </p>
                </td>
              </tr>
              <tr className="relative h-12">
                <td className="table-cell md:hidden">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left border-sky-300 dark:border-sky-300 translate-x-[-9px] translate-y-[-1px]"></div>
                </td>
                <td className="border-t-[1rem] border-t-sky-100 dark:border-t-sky-900 hidden md:table-cell">
                  <div className="circle-component bg-white dark:bg-slate-950 circle-upper-left border-sky-300 dark:border-sky-300 translate-x-[-9px] translate-y-[-1px]"></div>
                </td>
                <td className="border-t-[1rem] border-t-sky-100 dark:border-t-sky-900 hidden md:table-cell"></td>
                <td>
                  <p className="relative -top-4 ps-6 dark:text-slate-300">
                    Initial commit
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
