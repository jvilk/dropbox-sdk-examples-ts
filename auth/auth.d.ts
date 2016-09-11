declare var CLIENT_ID: string;
declare function parseQueryString(str: string): {
    [k: string]: string | string[];
};
declare function getAccessTokenFromUrl(): string;
declare function isAuthenticated(): boolean;
declare function renderItems(items: DropboxTypes.files.MetadataReference[]): void;
declare function showPageSection(elementId: string): void;
