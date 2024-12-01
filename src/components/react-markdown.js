import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
var MarkDownDisplay = function (_a) {
    var text = _a.text, _b = _a.title, title = _b === void 0 ? "Generated market Plan" : _b, _c = _a.btnText, btnText = _c === void 0 ? "Download" : _c;
    var _d = useState(text), markdownText = _d[0], setMarkdownText = _d[1];
    var handleChange = function (event) {
        setMarkdownText(event.target.value);
    };
    var handleExportToTxt = function () {
        if (markdownText) {
            // Create a Blob with the markdown content
            var blob = new Blob([markdownText], { type: "text/plain" });
            // Create a temporary URL for the blob
            var url = URL.createObjectURL(blob);
            // Create a link element to trigger the download
            var link = document.createElement("a");
            link.href = url;
            link.download = "example.txt"; // Set the filename for the download
            document.body.appendChild(link);
            // Trigger the download
            link.click();
            // Clean up the URL and remove the link
            URL.revokeObjectURL(url);
            document.body.removeChild(link);
        }
    };
    return (_jsxs("div", { style: { padding: '20px', fontFamily: 'Arial, sans-serif' }, children: [_jsxs("div", { className: 'flex items-center justify-between', children: [_jsx("h1", { className: 'text-3xl mt-4', children: title }), _jsx("div", { children: _jsxs(Button, { onClick: handleExportToTxt, children: [_jsx(Download, {}), " ", btnText] }) })] }), _jsx("div", { style: { border: '1px solid #ccc', padding: '10px', borderRadius: '5px', margin: "20px 0 50px 0" }, children: _jsx(ReactMarkdown, { children: markdownText }) }), _jsx("textarea", { value: markdownText, onChange: handleChange, rows: 7, cols: 50, style: { width: '100%', marginBottom: '20px', padding: "30px" }, className: 'border-2 rounded-md' })] }));
};
export default MarkDownDisplay;
