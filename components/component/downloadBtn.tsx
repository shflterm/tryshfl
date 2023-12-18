import React from 'react';
import {Button} from "@/components/ui/button";

function download(os: string) {
    const fileUrl = 'https://github.com/shflterm/shuffle/releases/download/updater/bin-' + os + '.zip';

    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = 'shfldownloader.zip';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// @ts-ignore
const DownloadBtn = ({className, ...props}) => (
        <div className={className} {...props}>
            <Button className="bg-blue-500 text-white hover:bg-blue-700" type="button"
                    onClick={event => download("windows")}>
                Download for Windows
            </Button>
            <Button className="bg-blue-500 text-white hover:bg-blue-700" type="button"
                    onClick={event => download("linux")}>
                Download for Linux
            </Button>
            <Button className="bg-blue-500 text-white hover:bg-blue-700" type="button"
                    onClick={event => download("macos")}>
                Download for MacOS
            </Button>
        </div>
    );

export default DownloadBtn;