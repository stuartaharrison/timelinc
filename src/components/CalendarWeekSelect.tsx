import classnames from "classnames";
import { useCalendar } from "../hooks/CalendarContext.tsx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

type CalendarWeekSelectType = {
    className?: any
};

export const CalendarWeekSelect = ({ className } : Readonly<CalendarWeekSelectType>) => {
    const {
        end,
        start,
        isCurrentWeek,
        forwardWeek,
        backwardWeek
    } = useCalendar();

    return (
        <div className={classnames('flex' as any, className)}>
            <div onClick={backwardWeek} className="flex items-center justify-center cursor-pointer border border-primary p-1 w-9">
                <FaArrowLeft />
            </div>
            <div className="flex items-center justify-center border-t border-b border-primary px-3 py-1">
                <div className="me-2">
                    <FaCalendarAlt />
                </div>
                <p className="m-0 text-center">
                    {isCurrentWeek ? (<span>This Week, </span>) : (<span>Week of, </span>)}
                    <span>{start.toFormat('MMM d')}</span> - <span>{end.toFormat('MMM d')} </span>
                    <span>{start.toFormat('yyyy')}</span>
                </p>
            </div>
            <div onClick={forwardWeek}
                 className="flex items-center justify-center cursor-pointer border border-primary p-1 w-9">
                <FaArrowRight />
            </div>
        </div>
    );
};