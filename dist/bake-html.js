"use strict";
/*---------------------------------------------------------------------------------------------*
 *  copyright (c) 2026 Limbus Foundation & Community. CREATED IN 21/07/2026 DD/MM/YYYY         *
 *  lib repo - https://github.com/Limbus-Foundation/html-bake                               *
 *  maintainer org -  https://github.com/Limbus-Foundation                                     *
 *---------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlBake = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
// HTML BAKE :
class HtmlBake {
    output;
    bakeList;
    htmlContent;
    constructor(output) {
        this.output = (0, path_1.resolve)(process.cwd(), output);
        this.bakeList = [];
        this.htmlContent = HtmlBake.readHtml(this.output);
    }
    ;
    static readHtml = (htmlFile) => {
        if (!(0, fs_1.existsSync)(htmlFile)) {
            console.error(`Html Bake : File "${htmlFile}" not found.`);
            return "";
        }
        ;
        return (0, fs_1.readFileSync)(htmlFile, { encoding: "utf-8" });
    };
    bind = (tag, htmlFile) => {
        if (this.bakeList.some(item => item.tag === tag)) {
            console.error(`Html Bake : Tag "${tag}" already exists.`);
            return;
        }
        ;
        htmlFile = (0, path_1.resolve)(process.cwd(), htmlFile);
        let htmlContent = HtmlBake.readHtml(htmlFile);
        htmlContent = htmlContent.replace(new RegExp(`^\\s*<${tag}[^>]*>|<\\/${tag}>\\s*$`, "g"), "").trim();
        this.bakeList.push({ tag, htmlContent });
    };
    bake = () => {
        if (this.bakeList.length === 0) {
            console.error("Html Bake : no file to bake!");
            return;
        }
        ;
        this.bakeList.forEach(bake => {
            const regex = new RegExp(`<${bake.tag}[^>]*>[\\s\\S]*?<\\/${bake.tag}>`, "g");
            this.htmlContent = this.htmlContent.replace(regex, bake.htmlContent);
        });
        (0, fs_1.writeFileSync)(this.output, this.htmlContent);
        console.log("Html Baked!");
    };
    static queue = (htmlBakeList) => {
        htmlBakeList.forEach(b => b.bake());
    };
}
exports.HtmlBake = HtmlBake;
;
// const bake = new HtmlBake("...");    
// bake.bind("html-output-tag", "...");        
// bake.bake();
//# sourceMappingURL=bake-html.js.map