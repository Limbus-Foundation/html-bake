export declare class HtmlBake {
    private output;
    private bakeList;
    private htmlContent;
    constructor(output: string);
    private static readHtml;
    bind: (tag: string, htmlFile: string) => void;
    bake: () => void;
    static queue: (htmlBakeList: HtmlBake[]) => void;
}
