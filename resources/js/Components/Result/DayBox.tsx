import DayDetails from "@/Components/Result/DayBox/DayDetails";
import DayResults from "@/Components/Result/DayBox/DayResults";
import DayMatches from "@/Components/Result/DayBox/DayMatches";

export default function DayBox() {
    return (
        <div className={`w-10/12 mx-auto my-2`}>
            <DayDetails />
            <DayResults />
            <DayMatches />
        </div>
    );
}
