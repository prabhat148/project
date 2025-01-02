import React from 'react';
import { FaDownload } from 'react-icons/fa';
var DownloadButton = function (_a) {
    var url = _a.url, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement("a", { href: url, download: true, className: "inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full transition-colors  justify-center".concat(className) },
        React.createElement(FaDownload, null),
        "Download CV"));
};
export default DownloadButton;
