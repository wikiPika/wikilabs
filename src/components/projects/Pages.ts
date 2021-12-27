import {testpage} from "./pages/testpage";
import {kiwoon} from "./pages/kiwoon";
import {svgnotes} from "./pages/svgnotes";

export const projectFiles = [
    f("2021"),
    svgnotes,
    kiwoon,
    testpage,
];

export const firstPage = getFirstPage();

function f(text: string): Array<string> {
    return [">" + text, ``];
}

function getFirstPage() {
    for (let i = 0; i < projectFiles.length; i++) {
        if (projectFiles[i][0].charAt(0) != ">") return i;
    }
    // this should never happen
    return -10000;
}