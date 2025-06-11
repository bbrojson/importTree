import { MultiGraph } from "../../graphPanel/multiGraph/MultiGraph";

export function getGraphHtml(graph: MultiGraph): string {
  return `
<div class="min-h-screen bg-white dark:bg-slate-950 py-10">
  <div class="container border-2 border-slate-200 dark:border-slate-800 rounded-lg px-7 pb-5 pt-12 mx-auto max-w-screen-md">
    <table class="table-fixed border-separate border-spacing-0 ms-2">
      <thead>
        <tr>
          <th class="w-[25px]"></th> <!-- Commit branches 1-2 of full git tree -->
          <th class="w-[25px]"></th> <!-- Commit branches 2-3 of full git tree -->
          <th class="w-auto"></th> <!-- Text content -->
        </tr>
      </thead>
      <tbody>
        <tr class="relative h-12">
          <td class="border-t-[1rem] border-t-sky-100 dark:border-t-sky-900 border-s-2 border-s-sky-300 dark:border-s-sky-300 border-dashed">
            <div class="circle-component bg-white dark:bg-slate-950 circle-upper-left border-dashed border-sky-300 dark:border-sky-300"></div>
          </td>
          <td class="border-t-[1rem] border-t-sky-100 dark:border-t-sky-900">
          </td>
          <td>
            <p class="relative -top-4 ps-6 dark:text-slate-300">Hello world! 👋</p>
          </td>
        </tr>
        <tr class="relative h-12">
          <td class="border-s-2 border-s-sky-300 dark:border-s-sky-300 border-dashed">
          </td>
          <td class="border-s-2 border-s-indigo-300 dark:border-s-orange-300 border-t-[1rem] border-t-indigo-100 dark:border-t-orange-900">
            <div class="circle-component bg-white dark:bg-slate-950 circle-upper-left border-dashed border-indigo-300 dark:border-orange-300"></div>
          </td>
          <td>
            <p class="relative -top-4 ps-6 dark:text-slate-300">Publish on CodePen! 🚀</p>
          </td>
        </tr>
        <tr class="relative h-14">
          <td class="border-s-2 border-s-sky-300 dark:border-s-sky-300 border-t-[1rem] border-t-sky-100 dark:border-t-sky-900">
            <div class="circle-component bg-white dark:bg-slate-950 circle-upper-left border-sky-300 dark:border-sky-300"></div>
          </td>
          <td class="border-s-2 border-s-indigo-300 dark:border-s-orange-300 border-t-[1rem] border-t-sky-100 dark:border-t-sky-900">
          </td>
          <td>
            <p class="relative -top-5 ps-6 dark:text-slate-300">Add dark mode support</p>
          </td>
        </tr>
        <tr class="relative h-10">
          <td class="border-t-2 border-t-teal-300 dark:border-t-pink-300 border-s-2 border-s-sky-300 dark:border-s-sky-300">
            <div class="circle-component bg-white dark:bg-slate-950 circle-upper-left translate-x-[-11px] translate-y-[-9px] border-sky-300 dark:border-sky-300">
            </div>
          </td>
          <td class="rounded-tr-lg border-t-2 border-t-teal-300 dark:border-t-pink-300 border-s-2 border-s-indigo-300 dark:border-s-orange-300 border-e-2 border-e-teal-300 dark:border-e-pink-300">
          </td>
          <td>
            <p class="relative -top-5 ps-6 dark:text-slate-300">Merge branch 'feature/styles' into 'main'</p>
          </td>
        </tr>
        <tr class="relative h-12">
          <td class="border-s-2 border-s-sky-300 dark:border-s-sky-300">
          </td>
          <td class="border-s-2 border-s-indigo-300 dark:border-s-orange-300 border-e-2 border-e-teal-300 dark:border-e-pink-300">
            <div class="circle-component bg-white dark:bg-slate-950 circle-upper-right border-teal-300 dark:border-pink-300"></div>
          </td>
          <td>
            <p class="relative -top-4 ps-6 dark:text-slate-300">Resize to 1 branch on small screens</p>
          </td>
        </tr>
        <tr class="relative h-14">
          <td class="border-s-2 border-s-sky-300 dark:border-s-sky-300 border-b-2 border-b-teal-300 dark:border-b-pink-300">
          </td>
          <td class="rounded-br-lg border-s-2 border-s-indigo-300 dark:border-s-orange-300 border-b-2 border-b-teal-300 dark:border-b-pink-300 border-e-2 border-e-teal-300 dark:border-e-pink-300">
            <div class="circle-component bg-white dark:bg-slate-950 circle-upper-right border-teal-300 dark:border-pink-300"></div>
          </td>
          <td>
            <p class="relative -top-5 ps-6 dark:text-slate-300">Create commit graph styles</p>
          </td>
        </tr>
        <tr class="relative h-10">
          <td class="border-s-2 border-s-sky-300 dark:border-s-sky-300">
            <div class="circle-component bg-white dark:bg-slate-950 circle-upper-left translate-x-[-11px] translate-y-[-11px] border-sky-300 dark:border-sky-300">
            </div>
          </td>
          <td class="border-s-2 border-s-indigo-300 dark:border-s-orange-300">
          </td>
          <td>
            <p class="relative -top-5 ps-6 dark:text-slate-300">Scaffold commit graph table</p>
          </td>
        </tr>
        <tr class="relative h-12">
          <td class="border-t-[1rem] border-t-sky-100 dark:border-t-sky-900">
            <div class="circle-component bg-white dark:bg-slate-950 circle-upper-left border-sky-300 dark:border-sky-300 translate-x-[-9px] translate-y-[-1px]"></div>
          </td>
          <td class="border-t-[1rem] border-t-sky-100 dark:border-t-sky-900">
          </td>
          <td>
            <p class="relative -top-4 ps-6 dark:text-slate-300">Initial commit</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`;
}
