import {TimelineButton} from "../Components/Master"

const page = () =>
(
    <>
        <div className={`
            bg-gradient-to-r from-cyan-500 to-blue-500
            h-3 w-full rounded-2xl flex justify-evenly
            `}>
            <TimelineButton />
            <TimelineButton />
        </div>
    </>
)

export default page;