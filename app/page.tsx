'use client';

import {CardHeader} from "@/components/ui/card";
import {Avatar} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import Link from "next/link";
import React from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import Console from "@/components/component/console";
import DownloadBtn from "@/components/component/downloadBtn";

function TryShuffle() {
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Link className="text-blue-400 hover:underline" href="#">
                        Try Shuffle now!
                    </Link>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-amber-50">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Download Shuffle</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Select the appropriate OS below and the download will begin.
                            </p>
                        </div>
                        <DownloadBtn className="space-y-2" />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}

export default function Home() {
    return (
        <div className="h-screen w-screen flex flex-col bg-gray-800">
            <CardHeader className="flex items-center justify-between px-6 py-4 border-gray-700 mb-10 mt-10">
                <div className="flex items-center">
                    <h2 className="text-2xl font-semibold text-white">Try Shuffle!</h2>
                </div>
                <div className="flex items-center">
                    <Avatar className="w-8 h-8"/>
                    <h3 className="ml-4 text-sm font-semibold text-gray-200">
                        * This is a demo page where you can experience some of Shuffle’s features.
                    </h3>
                </div>
            </CardHeader>
            <Console/>
            <div className="bottom-0 w-full text-center p-4 fixed">
                <h3 className="mb-2 text-lg font-semibold text-gray-300">Do you like it?</h3>
                <TryShuffle/>
            </div>
        </div>
    )
}