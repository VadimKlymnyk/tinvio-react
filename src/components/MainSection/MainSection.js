import React from 'react'
import { BackgroundPoint } from '../BackgroundPoin/BackgroundPoint'
import { Description } from '../Description/Description'
import { Partners } from '../Partners/Partners'
import { SliderSection } from '../SliderSection/SliderSection'
import { Communication } from '../Communication/Communication'
import { Screens } from '../Screens/Screens'
import { Steps } from '../Steps/Steps'
import { GetStarted } from '../GetStarted/GetStarted'

const MainSection = () => {
    return (
        <main>
            <BackgroundPoint/>
            <Description/>
            <Partners/>
            <SliderSection/>
            <Communication/>
            <Screens/>
            <Steps/>
            <GetStarted/>
        </main>
    )
}

export {MainSection}
