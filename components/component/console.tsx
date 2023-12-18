import React, {useState} from 'react';
import DownloadBtn from "@/components/component/downloadBtn";

const Console = () => {
    const [consoleText, setConsoleText] = useState([
        <div>
            Welcome to <span key="shuffle" className="text-blue-500"> Shuffle Web</span> <br/>
            (C) 2023 Kim Sihu. All Rights Reserved. <br/><br/>
        </div>,
        "Type 'help' to get help!",
    ]);

    const handleKeyDown = (event: { key: string; target: { value: string; }; }) => {
        if (event.key === "Enter") {
            const input = event.target.value;
            event.target.value = "";

            switch (input) {
                case "help":
                    setConsoleText((prevText) => [
                        ...prevText,
                        "== Shuffle Help ==\n" +
                        "Version: Web\n" +
                        "\n" +
                        "help - Show help\n" +
                        "clear - Clear console\n" +
                        "download - Download Shuffle Now!\n" +
                        "appmgr - App Manager\n"
                    ]);
                    break;
                case "clear":
                    setConsoleText([]);
                    break;
                case "download":
                    setConsoleText((prevText) => [
                        ...prevText,
                        <div>
                            Click the button below to download Shuffle.
                            <DownloadBtn className="space-x-5"></DownloadBtn>
                        </div>
                    ]);
                    break;
                default:
                    setConsoleText((prevText) => [
                        ...prevText,
                        <div>
                            <span key="error" className="text-red-500">Sorry. Command '{input}' not found.</span>,
                            <br key="br5"/>
                        </div>
                    ]);
                    break;
            }

            setConsoleText((prevText) => [
                ...prevText.slice(0, -1),
                <div className="flex">
                    <span key="wsName" className="text-yellow-500">[main] </span>
                    <span key="cDir" className="text-blue-500">(~) </span>
                    <span key="arrow" className="text-yellow-500">-&gt; </span>
                    {input}
                </div>,
                prevText[prevText.length - 1]
            ]);
        }
    };

    return (
        <div className="border rounded-md p-4 bg-gray-700 flex-grow h-screen overflow-hidden ml-32 mr-32">
            <div className="ml-4">
                <div className="flex space-x-2 mr-auto rounded-full">
                    <div className="bg-red-500 w-4 h-4 rounded-full mt-3"/>
                    <div className="bg-yellow-500 w-4 h-4 rounded-full mt-3"/>
                    <div className="bg-green-500 w-4 h-4 rounded-full mt-3"/>
                </div>
                <div className="flex justify-center items-center">
                    <h2 className="text-2xl font-semibold text-white text-center absolute">Shuffle</h2>
                </div>
                <div className="mt-6" id="console">
                    {consoleText.map((text, index) => (
                        <p key={index}
                           className="text-lg leading-7 text-gray-300 font-semibold flex whitespace-pre-wrap">
                            {text}
                        </p>
                    ))}
                    <p className="text-lg leading-7 text-gray-300 font-semibold flex whitespace-pre-wrap">
                        <span className="text-yellow-500">[main] </span>
                        <span className="text-blue-500">(~) </span>
                        <span className="text-yellow-500">-{'>'} </span>
                        <input
                            className="bg-gray-700 flex-1"
                            type="text"
                            id="userInput"
                            name="userInput"
                            autoFocus={true}
                            onKeyDown={handleKeyDown}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Console;