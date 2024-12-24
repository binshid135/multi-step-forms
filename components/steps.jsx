"use client";

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Step1 from './step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import useStore from '@/app/store'


const Steps = () => {
    const step = useStore((state) => state.step);
    const setStep = useStore((state) => state.setStep);

    const handleStepChange = (value) => {
        const stepMapping = { step1: 1, step2: 2, step3: 3, step4: 4 };
        setStep(stepMapping[value]);
    };
    return (

        <Tabs
            value={`step${step}`}
            onValueChange={handleStepChange}
        >
            <TabsList className="py-6">
                <TabsTrigger value="step1">Personel Information</TabsTrigger>
                <TabsTrigger value="step2">Address</TabsTrigger>
                <TabsTrigger value="step3">Preferences</TabsTrigger>
                <TabsTrigger value="step4">Review & Submit</TabsTrigger>
            </TabsList>
            <TabsContent value="step1"><Step1 /></TabsContent>
            <TabsContent value="step2"><Step2 /></TabsContent>
            <TabsContent value="step3"><Step3 /></TabsContent>
            <TabsContent value="step4"><Step4 /></TabsContent>
        </Tabs>


    )
}

export default Steps