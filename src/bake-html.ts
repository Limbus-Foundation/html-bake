
/*---------------------------------------------------------------------------------------------*
 *  copyright (c) 2026 Limbus Foundation & Community. CREATED IN 21/07/2026 DD/MM/YYYY         *
 *  lib repo - https://github.com/Limbus-Foundation/html-bake                               *
 *  maintainer org -  https://github.com/Limbus-Foundation                                     *
 *---------------------------------------------------------------------------------------------*/

import { existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

// HTML BAKE :

export class HtmlBake { 

    private output: string;
    private bakeList: { tag: string, htmlContent: string }[];     
    private htmlContent: string;  

    constructor(output: string) {  

        this.output = resolve(process.cwd(), output);
        this.bakeList = [];
        this.htmlContent = HtmlBake.readHtml(this.output);

    };

    private static readHtml = (htmlFile: string): string => {

        if (!existsSync(htmlFile)) {
            console.error(`Html Bake : File "${htmlFile}" not found.`);
            return "";
        };

        return readFileSync(htmlFile, { encoding: "utf-8" });

    };

    public bind = (tag: string, htmlFile: string): void => {

        if (this.bakeList.some(item => item.tag === tag)) {
            console.error(`Html Bake : Tag "${tag}" already exists.`);
            return;
        };

        htmlFile = resolve(process.cwd(), htmlFile);   

        let htmlContent = HtmlBake.readHtml(htmlFile); 

        htmlContent = htmlContent.replace(new RegExp(`^\\s*<${tag}[^>]*>|<\\/${tag}>\\s*$`, "g"), "").trim();

        this.bakeList.push({ tag, htmlContent });

    };

    public bake = (): void => {

        if (this.bakeList.length === 0) {
            console.error("Html Bake : no file to bake!");
            return;
        };

        this.bakeList.forEach(bake => {

            const regex = new RegExp(`<${bake.tag}[^>]*>[\\s\\S]*?<\\/${bake.tag}>`, "g");

            this.htmlContent = this.htmlContent.replace(regex, bake.htmlContent);

        });

        writeFileSync(this.output, this.htmlContent);

        console.log("Html Baked!");

    };

    public static queue = (htmlBakeList: HtmlBake[]): void => {
        htmlBakeList.forEach(b => b.bake());  
    };     
 
};    

// const bake = new HtmlBake("...");    
// bake.bind("html-output-tag", "...");        
// bake.bake();